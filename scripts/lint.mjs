import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const rootDir = process.cwd();
const htmlPages = [
  'index.html',
  'companions.html',
  'services.html',
  'locations.html',
  'about.html',
  'faq.html',
  'contact.html',
  'privacy-policy.html',
  'terms.html',
];

const jsFiles = [
  'js/data.js',
  'js/app.js',
  'js/carousel.js',
  'js/roster.js',
  'js/forms.js',
];

let failures = 0;
const seenTitles = new Set();
const seenDescs = new Set();
const seenCanonicals = new Set();

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  failures += 1;
}

// 1. Validate Vanilla JS syntax via Node
for (const file of jsFiles) {
  const fullPath = path.join(rootDir, file);
  if (!fs.existsSync(fullPath)) {
    fail(`Missing JS file: ${file}`);
    continue;
  }
  try {
    execFileSync(process.execPath, ['--check', fullPath], { stdio: 'pipe' });
  } catch (err) {
    fail(`JS syntax error in ${file}: ${err.message}`);
  }
}

// 2. Audit HTML pages, metadata uniqueness, internal links, and image paths
for (const page of htmlPages) {
  const fullPath = path.join(rootDir, page);
  if (!fs.existsSync(fullPath)) {
    fail(`Missing HTML page: ${page}`);
    continue;
  }

  const html = fs.readFileSync(fullPath, 'utf8');

  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    fail(`${page}: missing <title>`);
  } else if (seenTitles.has(titleMatch[1].trim())) {
    fail(`${page}: duplicate <title> "${titleMatch[1].trim()}"`);
  } else {
    seenTitles.add(titleMatch[1].trim());
  }

  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  if (!descMatch) {
    fail(`${page}: missing meta description`);
  } else if (seenDescs.has(descMatch[1].trim())) {
    fail(`${page}: duplicate meta description`);
  } else {
    seenDescs.add(descMatch[1].trim());
  }

  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonicalMatch) {
    fail(`${page}: missing canonical link`);
  } else if (!canonicalMatch[1].startsWith('https://karachiescorts.org/')) {
    fail(`${page}: canonical must use https://karachiescorts.org/, found ${canonicalMatch[1]}`);
  } else if (seenCanonicals.has(canonicalMatch[1])) {
    fail(`${page}: duplicate canonical ${canonicalMatch[1]}`);
  } else {
    seenCanonicals.add(canonicalMatch[1]);
  }

  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1Count !== 1) {
    fail(`${page}: expected exactly 1 <h1>, found ${h1Count}`);
  }

  // Check local asset references
  const assetRefs = [...html.matchAll(/(?:src|href)="(\/[^"#?]+)"/gi)].map((m) => m[1]);
  for (const ref of assetRefs) {
    if (ref === '/') continue;
    const candidateRoot = path.join(rootDir, ref.slice(1));
    const candidatePublic = path.join(rootDir, 'public', ref.slice(1));
    if (!fs.existsSync(candidateRoot) && !fs.existsSync(candidatePublic)) {
      fail(`${page}: broken local reference "${ref}"`);
    }
  }

  // Validate JSON-LD blocks
  const jsonLdBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  for (const block of jsonLdBlocks) {
    try {
      JSON.parse(block[1]);
    } catch (err) {
      fail(`${page}: invalid JSON-LD block (${err.message})`);
    }
  }
}

// 3. Validate sitemap.xml and robots.txt
const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
const robotsPath = path.join(rootDir, 'public/robots.txt');
if (!fs.existsSync(sitemapPath)) fail('Missing public/sitemap.xml');
if (!fs.existsSync(robotsPath)) fail('Missing public/robots.txt');

if (fs.existsSync(sitemapPath)) {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  for (const page of htmlPages) {
    const expectedUrl =
      page === 'index.html'
        ? 'https://karachiescorts.org/'
        : `https://karachiescorts.org/${page}`;
    if (!xml.includes(`<loc>${expectedUrl}</loc>`)) {
      fail(`sitemap.xml missing <loc>${expectedUrl}</loc>`);
    }
  }
}

if (failures > 0) {
  console.error(`\nAudit failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log(`Audit passed: ${htmlPages.length} HTML pages, ${jsFiles.length} JS modules, sitemap.xml, and robots.txt verified.`);

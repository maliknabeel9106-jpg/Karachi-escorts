import { modelsData } from '../data/models';

export interface ModelImageMapping {
  id: string;
  name: string;
  category: string;
  expectedFileNames: string[];
}

export const MODEL_IMAGE_MAPPINGS: Record<string, ModelImageMapping> = {
  'zoya-khan': {
    id: 'zoya-khan',
    name: 'Zoya Khan',
    category: 'VIP',
    expectedFileNames: ['real-1.jpeg', 'real-1.jpg', 'zoya-khan.jpeg']
  },
  'anastasia-volkova': {
    id: 'anastasia-volkova',
    name: 'Anastasia Volkova',
    category: 'Russian / International',
    expectedFileNames: ['real-2.jpeg', 'real-2.jpg', 'anastasia-volkova.jpeg']
  },
  'alizeh-shah': {
    id: 'alizeh-shah',
    name: 'Alizeh Shah',
    category: 'Independent',
    expectedFileNames: ['real-3.jpeg', 'real-3.jpg', 'alizeh-shah.jpeg']
  },
  'sana-mirza': {
    id: 'sana-mirza',
    name: 'Sana Mirza',
    category: 'Call Girls',
    expectedFileNames: ['real-4.jpeg', 'real-4.jpg', 'sana-mirza.jpeg']
  },
  'natasha-romanov': {
    id: 'natasha-romanov',
    name: 'Natasha Romanov',
    category: 'Russian / International',
    expectedFileNames: ['real-5.jpeg', 'real-5.jpg', 'natasha-romanov.jpeg']
  },
  'maha-sheikh': {
    id: 'maha-sheikh',
    name: 'Maha Sheikh',
    category: 'VIP',
    expectedFileNames: ['real-6.jpeg', 'real-6.jpg', 'maha-sheikh.jpeg']
  },
  'ayesha-malik': {
    id: 'ayesha-malik',
    name: 'Ayesha Malik',
    category: 'Independent',
    expectedFileNames: ['real-7.jpeg', 'real-7.jpg', 'ayesha-malik.jpeg']
  },
  'elena-sorokina': {
    id: 'elena-sorokina',
    name: 'Elena Sorokina',
    category: 'Russian / International',
    expectedFileNames: ['real-8.jpeg', 'real-8.jpg', 'elena-sorokina.jpeg']
  },
  'samira-khan': {
    id: 'samira-khan',
    name: 'Samira Khan',
    category: 'VIP',
    expectedFileNames: ['real-9.jpeg', 'real-9.jpg', 'samira-khan.jpeg']
  },
  'tanya-petrova': {
    id: 'tanya-petrova',
    name: 'Tanya Petrova',
    category: 'Russian / International',
    expectedFileNames: ['real-10.jpeg', 'real-10.jpg', 'tanya-petrova.jpeg']
  }
};

export interface RealImageItem {
  url: string;
  name: string;
  relativePath?: string;
}

export function getStoredUserImage(key: string): string | null {
  try {
    return localStorage.getItem(`karachi_img_${key}`);
  } catch {
    return null;
  }
}

export async function saveRealImage(key: string, filename: string, dataUrl: string): Promise<void> {
  try {
    localStorage.setItem(`karachi_img_${key}`, dataUrl);
    window.dispatchEvent(new CustomEvent('karachi_image_updated', { detail: { key, dataUrl } }));
  } catch (err) {
    console.error('Failed to save real image', err);
  }
}

export function removeStoredUserImage(key: string): void {
  try {
    localStorage.removeItem(`karachi_img_${key}`);
    window.dispatchEvent(new CustomEvent('karachi_image_updated', { detail: { key, dataUrl: null } }));
  } catch (err) {
    console.error('Failed to remove image', err);
  }
}

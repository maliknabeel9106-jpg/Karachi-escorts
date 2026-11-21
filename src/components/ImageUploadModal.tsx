import React, { useState, useRef } from 'react';
import { X, Upload, CheckCircle, Trash2, Camera, ShieldCheck } from 'lucide-react';
import { modelsData } from '../data/models';
import { saveRealImage, removeStoredUserImage, getStoredUserImage } from '../utils/imageManager';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModelId?: string;
  onImageSaved?: () => void;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onClose,
  selectedModelId: initialModelId,
  onImageSaved
}) => {
  const [activeModelId, setActiveModelId] = useState<string>(initialModelId || modelsData[0].id);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const currentModel = modelsData.find((m) => m.id === activeModelId) || modelsData[0];
  const storedImg = getStoredUserImage(activeModelId);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === 'string') {
        await saveRealImage(activeModelId, `${activeModelId}.jpg`, reader.result);
        setSuccessMsg(`Photo updated for ${currentModel.name}!`);
        onImageSaved?.();
        setTimeout(() => setSuccessMsg(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    removeStoredUserImage(activeModelId);
    setSuccessMsg(`Reset to default photo for ${currentModel.name}`);
    onImageSaved?.();
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] p-5 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] transition cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-rose-500 mb-1">
          <Camera className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Model Photo Manager</span>
        </div>
        <h3 className="font-cinzel text-xl font-bold uppercase text-[var(--text-primary)]">
          Update Companion Photos
        </h3>
        <p className="mt-1 text-xs text-[var(--text-secondary)]">
          Select a companion and upload your photo directly from your device.
        </p>

        {/* Model Tabs */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {modelsData.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModelId(m.id)}
              className={`rounded-xl p-2.5 text-left border text-xs transition cursor-pointer ${
                activeModelId === m.id
                  ? 'border-rose-500 bg-rose-500/10 text-[var(--text-primary)] font-bold'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]'
              }`}
            >
              <div className="truncate">{m.name}</div>
              <div className="text-[10px] text-[var(--text-muted)]">{m.category}</div>
            </button>
          ))}
        </div>

        {/* Drop Zone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="mt-5 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--border-subtle)] hover:border-rose-500/60 bg-[var(--bg-surface)] p-6 text-center cursor-pointer transition"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />
          <Upload className="h-8 w-8 text-rose-500 mb-2" />
          <p className="text-sm font-bold text-[var(--text-primary)]">
            Click to upload real photo for {currentModel.name}
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            JPG, PNG, WEBP from your phone or computer
          </p>
        </div>

        {storedImg && (
          <div className="mt-4 flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs">
            <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              Custom uploaded photo active
            </span>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-rose-500 hover:underline font-bold cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Reset to default
            </button>
          </div>
        )}

        {successMsg && (
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-600/10 border border-emerald-500/40 p-2.5 text-xs text-emerald-500">
            <CheckCircle className="h-4 w-4 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-rose-600 px-5 py-2 text-xs font-bold uppercase text-white hover:bg-rose-500 transition cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export const BackupRestore: React.FC<{
  onBackup: () => void;
  onRestore: (data: string) => void;
}> = ({ onBackup, onRestore }) => (
  <div className="flex flex-col gap-2">
    <button className="bg-success text-black font-black rounded-3xl py-3 text-lg" onClick={onBackup}>Экспорт JSON</button>
    <label className="bg-surfaceAlt text-white/80 rounded-3xl py-3 text-lg text-center cursor-pointer">
      Импорт JSON
      <input type="file" accept="application/json" className="hidden" onChange={e => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          if (typeof ev.target?.result === 'string') onRestore(ev.target.result);
        };
        reader.readAsText(file);
      }} />
    </label>
  </div>
);

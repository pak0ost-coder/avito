import React from 'react';

export const SettingsPanel: React.FC<{
  staleThreshold: number;
  onStaleChange: (v: number) => void;
  onBackup: () => void;
  onRestore: (data: string) => void;
  onWipe: () => void;
}> = ({ staleThreshold, onStaleChange, onBackup, onRestore, onWipe }) => (
  <div className="flex flex-col gap-4">
    <div className="bg-surface rounded-3xl p-4">
      <div className="font-black text-lg tracking-tighter mb-2">Порог залежалости</div>
      <input
        type="range"
        min={1}
        max={60}
        value={staleThreshold}
        onChange={e => onStaleChange(Number(e.target.value))}
        className="w-full accent-success"
      />
      <div className="text-white/80 text-sm mt-1">{staleThreshold} дней</div>
    </div>
    <div className="bg-surface rounded-3xl p-4 flex flex-col gap-2">
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
      <button className="bg-alert text-white font-black rounded-3xl py-3 text-lg mt-2" onClick={onWipe}>Стереть все данные</button>
    </div>
  </div>
);

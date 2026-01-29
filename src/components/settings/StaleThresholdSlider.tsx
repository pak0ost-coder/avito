import React from 'react';

export const StaleThresholdSlider: React.FC<{
  value: number;
  onChange: (v: number) => void;
}> = ({ value, onChange }) => (
  <div className="bg-surface rounded-3xl p-4">
    <div className="font-black text-lg tracking-tighter mb-2">Порог залежалости</div>
    <input
      type="range"
      min={1}
      max={60}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="w-full accent-success"
    />
    <div className="text-white/80 text-sm mt-1">{value} дней</div>
  </div>
);

import React from 'react';

export const KPI: React.FC<{ label: string; value: string | number; accent?: boolean }> = ({ label, value, accent }) => (
  <div className={`flex flex-col items-center justify-center bg-surface rounded-3xl px-4 py-3 ${accent ? 'border-2 border-success' : 'border border-white/10'}`} style={{ borderRadius: '2.5rem' }}>
    <span className="text-xs text-white/60 font-medium mb-1">{label}</span>
    <span className={`text-xl font-black tracking-tighter ${accent ? 'text-success' : 'text-white'}`}>{value}</span>
  </div>
);

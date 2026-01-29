import React from 'react';

export const HistoricalHints: React.FC<{ hints: string[] }> = ({ hints }) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {hints.map((h, i) => (
      <span key={i} className="bg-surfaceAlt text-white/80 rounded-3xl px-3 py-1 text-xs border border-white/10">{h}</span>
    ))}
  </div>
);

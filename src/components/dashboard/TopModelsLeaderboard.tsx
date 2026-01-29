import React from 'react';

export const TopModelsLeaderboard: React.FC<{ data: { model: string; profit: number }[] }> = ({ data }) => (
  <div className="space-y-2">
    {data.map((item, i) => (
      <div key={item.model} className="flex justify-between items-center bg-surface rounded-3xl px-4 py-2">
        <span className="font-bold text-white/90">{i + 1}. {item.model}</span>
        <span className="text-success font-black">+{item.profit} ₽</span>
      </div>
    ))}
  </div>
);

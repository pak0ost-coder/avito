import React from 'react';

export function calcProfit(purchase: number, sale?: number) {
  return sale ? sale - purchase : 0;
}

export function calcROI(purchase: number, sale?: number) {
  return sale ? ((sale - purchase) / purchase) * 100 : 0;
}

export const ProfitROI: React.FC<{ purchase: number; sale?: number }> = ({ purchase, sale }) => {
  const profit = calcProfit(purchase, sale);
  const roi = calcROI(purchase, sale);
  return (
    <div className="flex flex-col items-end">
      <span className="text-lg font-black tracking-tighter text-success">{profit > 0 ? `+${profit}` : profit} ₽</span>
      <span className="text-xs text-white/60">ROI: {roi.toFixed(1)}%</span>
    </div>
  );
};

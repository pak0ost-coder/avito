import React from 'react';
import { KPI } from './KPI';
import { TopModelsLeaderboard } from './TopModelsLeaderboard';
import { GlassCard } from '../GlassCard';

export const Dashboard: React.FC<{
  netProfit: number;
  moneyInStock: number;
  avgCycle: number;
  topModels: { model: string; profit: number }[];
  period: string;
  onPeriodChange: (p: string) => void;
}> = ({ netProfit, moneyInStock, avgCycle, topModels, period, onPeriodChange }) => (
  <div className="flex flex-col gap-4">
    <GlassCard className="p-6 flex flex-col items-center">
      <div className="text-white/60 text-xs mb-1">Чистая прибыль</div>
      <div className="text-4xl font-black tracking-tighter text-success mb-2">{netProfit > 0 ? `+${netProfit}` : netProfit} ₽</div>
      <div className="flex gap-2 mb-2">
        {['day', 'week', 'month', 'all'].map(p => (
          <button
            key={p}
            className={`rounded-3xl px-3 py-1 text-xs font-bold ${period === p ? 'bg-success text-black' : 'bg-surfaceAlt text-white/80'}`}
            onClick={() => onPeriodChange(p)}
          >
            {p === 'day' ? 'День' : p === 'week' ? 'Неделя' : p === 'month' ? 'Месяц' : 'Все'}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 w-full mt-2">
        <KPI label="В товаре" value={moneyInStock} />
        <KPI label="Цикл, дн." value={avgCycle} />
        <KPI label="Лидеры" value={<span className="text-success">ТОП</span>} accent />
      </div>
    </GlassCard>
    <GlassCard className="p-4">
      <div className="font-black text-lg tracking-tighter mb-2">Топ моделей по прибыли</div>
      <TopModelsLeaderboard data={topModels} />
    </GlassCard>
  </div>
);

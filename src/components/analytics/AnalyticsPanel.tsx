import React from 'react';
import { ProfitTrendsChart } from './ProfitTrendsChart';
import { GoalProgressBar } from './GoalProgressBar';
import { ExpenseList } from './ExpenseList';

export const AnalyticsPanel: React.FC<{
  trends: { date: string; profit: number }[];
  goal: number;
  current: number;
  expenses: { id: string; type: string; amount: number }[];
}> = ({ trends, goal, current, expenses }) => (
  <div className="flex flex-col gap-4">
    <div className="bg-surface rounded-3xl p-4">
      <div className="font-black text-lg tracking-tighter mb-2">Динамика прибыли</div>
      <ProfitTrendsChart data={trends} />
    </div>
    <div className="bg-surface rounded-3xl p-4">
      <div className="font-black text-lg tracking-tighter mb-2">Прогресс месяца</div>
      <GoalProgressBar value={current} goal={goal} />
    </div>
    <div className="bg-surface rounded-3xl p-4">
      <div className="font-black text-lg tracking-tighter mb-2">Расходы</div>
      <ExpenseList expenses={expenses} />
    </div>
  </div>
);

import React from 'react';
import { Expense } from '../../types';

export const ExpenseList: React.FC<{ expenses: Expense[] }> = ({ expenses }) => (
  <div className="space-y-2">
    {expenses.map((e) => (
      <div key={e.id} className="flex justify-between items-center bg-surface rounded-3xl px-4 py-2">
        <span className="text-white/80 font-medium">{e.type}</span>
        <span className="text-white font-bold">{e.amount} ₽</span>
      </div>
    ))}
  </div>
);

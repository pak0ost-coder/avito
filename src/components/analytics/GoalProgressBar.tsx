import React from 'react';

export const GoalProgressBar: React.FC<{ value: number; goal: number }> = ({ value, goal }) => {
  const percent = Math.min(100, (value / goal) * 100);
  return (
    <div className="w-full h-4 bg-surfaceAlt rounded-3xl overflow-hidden border border-white/10">
      <div
        className="h-full bg-success transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

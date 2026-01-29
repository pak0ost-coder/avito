import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const ProfitTrendsChart: React.FC<{ data: { date: string; profit: number }[] }> = ({ data }) => (
  <div className="w-full h-48">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
        <defs>
          <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tick={{ fill: '#fff', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#fff', fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ background: '#18181b', border: 'none', color: '#fff' }} />
        <Area type="monotone" dataKey="profit" stroke="#22c55e" fillOpacity={1} fill="url(#profit)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

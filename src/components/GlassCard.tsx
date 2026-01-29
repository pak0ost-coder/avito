import React from 'react';

export const GlassCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = '', children }) => (
  <div
    className={`backdrop-blur-3xl bg-surface/80 border border-white/10 rounded-3xl shadow-lg ${className}`}
    style={{ borderRadius: '2.5rem' }}
  >
    {children}
  </div>
);

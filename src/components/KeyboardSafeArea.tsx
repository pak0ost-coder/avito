import React from 'react';

export const KeyboardSafeArea: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ height: 'var(--app-height)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
    {children}
  </div>
);

import React from 'react';

export const NoSelect: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTapHighlightColor: 'transparent' }}>
    {children}
  </div>
);

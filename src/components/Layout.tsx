import React from 'react';
import { BottomNav } from './navigation/BottomNav';

export const Layout: React.FC = ({ children }) => (
  <div
    className="relative flex flex-col h-[var(--app-height)] w-full bg-background text-white overflow-hidden"
    style={{
      minHeight: '100%',
      WebkitUserSelect: 'none',
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      touchAction: 'manipulation',
      fontFamily: 'Inter, sans-serif',
      paddingTop: 'env(safe-area-inset-top)',
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}
  >
    <main className="flex-1 w-full overflow-y-auto overflow-x-hidden">
      {children}
    </main>
    <BottomNav />
  </div>
);

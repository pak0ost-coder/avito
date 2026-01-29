import React from 'react';
import { Home, BarChart2, Package, Settings, Plus } from 'lucide-react';

const navItems = [
  { icon: <Home size={24} />, label: 'Главная', route: 'dashboard' },
  { icon: <BarChart2 size={24} />, label: 'Аналитика', route: 'analytics' },
  { icon: <Package size={24} />, label: 'Склад', route: 'stock' },
  { icon: <Settings size={24} />, label: 'Настройки', route: 'settings' },
];

export const BottomNav: React.FC = () => (
  <nav
    className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-4 pb-[env(safe-area-inset-bottom)] bg-surface/90 backdrop-blur-3xl border-t border-white/10 h-20"
    style={{ borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem' }}
  >
    {navItems.slice(0, 2).map((item) => (
      <button
        key={item.route}
        className="flex flex-col items-center flex-1 text-white/80 hover:text-white focus:outline-none"
        tabIndex={-1}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {item.icon}
        <span className="text-xs font-medium mt-1">{item.label}</span>
      </button>
    ))}
    <button
      className="relative -top-6 z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-surface to-surfaceAlt rounded-3xl shadow-lg border-2 border-white/10 text-white hover:scale-105 transition-transform focus:outline-none"
      style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)' }}
      tabIndex={-1}
      aria-label="Добавить"
    >
      <Plus size={32} />
    </button>
    {navItems.slice(2).map((item) => (
      <button
        key={item.route}
        className="flex flex-col items-center flex-1 text-white/80 hover:text-white focus:outline-none"
        tabIndex={-1}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {item.icon}
        <span className="text-xs font-medium mt-1">{item.label}</span>
      </button>
    ))}
  </nav>
);

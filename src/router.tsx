import React, { useState } from 'react';
import { Dashboard } from './components/dashboard/Dashboard';
import { StockPanel } from './components/stock/StockPanel';
import { AnalyticsPanel } from './components/analytics/AnalyticsPanel';
import { SettingsPanel } from './components/settings/SettingsPanel';
import { AddProductFlow } from './components/add/AddProductFlow';
import { loadData, saveData, clearData } from './utils/storage';
import { Product, Expense, Settings } from './types';

const defaultSettings: Settings = { staleThreshold: 14 };

export const Router: React.FC = () => {
  const [route, setRoute] = useState('dashboard');
  const [products, setProducts] = useState<Product[]>(() => loadData<{ products: Product[] }>()?.products || []);
  const [expenses, setExpenses] = useState<Expense[]>(() => loadData<{ expenses: Expense[] }>()?.expenses || []);
  const [settings, setSettings] = useState<Settings>(() => loadData<{ settings: Settings }>()?.settings || defaultSettings);
  const [addOpen, setAddOpen] = useState(false);

  // ...handlers for navigation, add, sell, backup, restore, wipe, etc.

  // Example render logic (replace with real navigation logic)
  return (
    <div>
      {/* Render panels based on route */}
      {/* Render AddProductFlow as modal if addOpen */}
    </div>
  );
};

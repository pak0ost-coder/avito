import React from 'react';

export const StockFilters: React.FC<{
  brands: string[];
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  showStale: boolean;
  onShowStale: (v: boolean) => void;
  search: string;
  onSearch: (v: string) => void;
}> = ({ brands, selectedBrand, onBrandChange, showStale, onShowStale, search, onSearch }) => (
  <div className="flex gap-2 mb-2">
    <select
      className="bg-surfaceAlt text-white rounded-3xl px-3 py-1 border border-white/10"
      value={selectedBrand}
      onChange={e => onBrandChange(e.target.value)}
    >
      <option value="">Все бренды</option>
      {brands.map(b => <option key={b} value={b}>{b}</option>)}
    </select>
    <button
      className={`rounded-3xl px-3 py-1 border ${showStale ? 'border-alert text-alert' : 'border-white/10 text-white/80'} bg-surfaceAlt`}
      onClick={() => onShowStale(!showStale)}
    >
      Залежал
    </button>
    <input
      className="flex-1 bg-surfaceAlt text-white rounded-3xl px-3 py-1 border border-white/10"
      placeholder="IMEI / модель"
      value={search}
      onChange={e => onSearch(e.target.value)}
      inputMode="search"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
    />
  </div>
);

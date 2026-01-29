import React, { useState } from 'react';
import { StockFilters } from './StockFilters';
import { StockList } from './StockList';
import { SellModal } from './SellModal';
import { Product } from '../../types';

export const StockPanel: React.FC<{
  products: Product[];
  brands: string[];
  staleThreshold: number;
  onSell: (id: string, price: number) => void;
}> = ({ products, brands, staleThreshold, onSell }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [showStale, setShowStale] = useState(false);
  const [search, setSearch] = useState('');
  const [sellId, setSellId] = useState<string | null>(null);

  const filtered = products.filter(p =>
    (!selectedBrand || p.brand === selectedBrand) &&
    (!showStale || (!p.saleDate && (Date.now() - new Date(p.purchaseDate).getTime()) / 86400000 > staleThreshold)) &&
    (!search || p.imei.includes(search) || p.model.toLowerCase().includes(search.toLowerCase()))
  );

  const selling = products.find(p => p.id === sellId);

  return (
    <div className="flex flex-col gap-4">
      <StockFilters
        brands={brands}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        showStale={showStale}
        onShowStale={setShowStale}
        search={search}
        onSearch={setSearch}
      />
      <StockList products={filtered} onSelect={setSellId} staleThreshold={staleThreshold} />
      {selling && (
        <SellModal
          open={!!sellId}
          onClose={() => setSellId(null)}
          purchasePrice={selling.purchasePrice}
          onSell={price => {
            onSell(selling.id, price);
            setSellId(null);
          }}
        />
      )}
    </div>
  );
};

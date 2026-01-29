import React from 'react';
import { Product } from '../../types';
import { StatusBadge } from '../StatusBadge';

export const StockList: React.FC<{
  products: Product[];
  onSelect: (id: string) => void;
  staleThreshold: number;
}> = ({ products, onSelect, staleThreshold }) => (
  <div className="space-y-2">
    {products.map((p) => {
      const staleDays = p.saleDate ? 0 : Math.floor((Date.now() - new Date(p.purchaseDate).getTime()) / 86400000);
      const borderColor =
        p.status === 'RESERVED' ? 'border-reserved' :
        p.status === 'SHIPPING' ? 'border-shipping' :
        '';
      return (
        <button
          key={p.id}
          className={`w-full flex items-center bg-surface rounded-3xl px-4 py-3 border-2 ${borderColor} ${staleDays > staleThreshold ? 'border-alert' : 'border-white/10'}`}
          style={{ borderRadius: '2.5rem' }}
          onClick={() => onSelect(p.id)}
        >
          <div className="flex-1 text-left">
            <div className="font-bold text-white/90 text-base">{p.brand} {p.model}</div>
            <div className="text-xs text-white/60">IMEI: {p.imei}</div>
            {staleDays > staleThreshold && (
              <div className="text-alert text-xs font-bold mt-1">{staleDays} дней в запасе</div>
            )}
          </div>
          <StatusBadge status={p.status} />
        </button>
      );
    })}
  </div>
);

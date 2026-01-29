import React from 'react';
import { ProductStatus } from '../types';

const statusMap: Record<ProductStatus, { label: string; color: string }> = {
  IN_STOCK: { label: 'В наличии', color: 'bg-surface' },
  SHIPPING: { label: 'Отправка', color: 'bg-shipping' },
  RESERVED: { label: 'Резерв', color: 'bg-reserved' },
  SOLD: { label: 'Продано', color: 'bg-success' },
};

export const StatusBadge: React.FC<{ status: ProductStatus }> = ({ status }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-bold ${statusMap[status].color} text-white`}
    style={{ borderRadius: '1.5rem' }}
  >
    {statusMap[status].label}
  </span>
);

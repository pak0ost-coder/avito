import React, { useState, useMemo } from 'react';
import { Modal } from '../Modal';
import { ProfitROI } from '../ProfitROI';

export const SellModal: React.FC<{
  open: boolean;
  onClose: () => void;
  purchasePrice: number;
  onSell: (salePrice: number) => void;
}> = ({ open, onClose, purchasePrice, onSell }) => {
  const [salePrice, setSalePrice] = useState('');
  const sale = Number(salePrice);
  const valid = sale > 0;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <div className="text-lg font-black tracking-tighter">Продажа</div>
        <input
          className="bg-surfaceAlt text-white rounded-3xl px-4 py-3 border border-white/10 text-2xl font-black tracking-tighter focus:outline-none"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Цена продажи"
          value={salePrice}
          onChange={e => setSalePrice(e.target.value.replace(/\D/g, ''))}
          autoFocus
        />
        <ProfitROI purchase={purchasePrice} sale={sale} />
        <button
          className="bg-success text-black font-black rounded-3xl py-3 text-lg disabled:opacity-40"
          disabled={!valid}
          onClick={() => valid && onSell(sale)}
        >
          Продать
        </button>
      </div>
    </Modal>
  );
};

import React from 'react';

export const DangerZone: React.FC<{ onWipe: () => void }> = ({ onWipe }) => (
  <div className="bg-alert rounded-3xl p-4 mt-4">
    <div className="font-black text-lg tracking-tighter mb-2">Опасная зона</div>
    <button className="bg-white text-alert font-black rounded-3xl py-3 text-lg w-full" onClick={onWipe}>
      Стереть все данные
    </button>
  </div>
);

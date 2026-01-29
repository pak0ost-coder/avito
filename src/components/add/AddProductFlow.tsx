import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';

export const AddProductFlow: React.FC<{
  onSubmit: (data: any) => void;
  historicalHints: string[];
}> = ({ onSubmit, historicalHints }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    model: '', specs: '', purchasePrice: '', source: '', imei: '', comments: ''
  });

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);

  return (
    <GlassCard className="p-4">
      {step === 0 && (
        <div className="flex flex-col gap-3">
          <div className="font-black text-lg tracking-tighter">Модель и характеристики</div>
          <input
            className="bg-surfaceAlt text-white rounded-3xl px-4 py-3 border border-white/10 font-bold tracking-tighter"
            placeholder="Модель"
            value={form.model}
            onChange={e => setForm(f => ({ ...f, model: e.target.value }))}
            autoFocus
          />
          <input
            className="bg-surfaceAlt text-white rounded-3xl px-4 py-3 border border-white/10"
            placeholder="Характеристики"
            value={form.specs}
            onChange={e => setForm(f => ({ ...f, specs: e.target.value }))}
          />
          <button className="bg-success text-black font-black rounded-3xl py-3 text-lg mt-2" onClick={next} disabled={!form.model}>Далее</button>
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-col gap-3">
          <div className="font-black text-lg tracking-tighter">Цена и источник</div>
          <input
            className="bg-surfaceAlt text-white rounded-3xl px-4 py-3 border border-white/10 font-bold tracking-tighter"
            placeholder="Цена закупки"
            inputMode="numeric"
            pattern="[0-9]*"
            value={form.purchasePrice}
            onChange={e => setForm(f => ({ ...f, purchasePrice: e.target.value.replace(/\D/g, '') }))}
            autoFocus
          />
          <input
            className="bg-surfaceAlt text-white rounded-3xl px-4 py-3 border border-white/10"
            placeholder="Источник"
            value={form.source}
            onChange={e => setForm(f => ({ ...f, source: e.target.value }))}
          />
          <div className="flex gap-2 mt-2">
            <button className="bg-surfaceAlt text-white rounded-3xl px-4 py-2 border border-white/10" onClick={prev}>Назад</button>
            <button className="bg-success text-black font-black rounded-3xl px-4 py-2 ml-auto" onClick={next} disabled={!form.purchasePrice}>Далее</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col gap-3">
          <div className="font-black text-lg tracking-tighter">IMEI и комментарии</div>
          <input
            className="bg-surfaceAlt text-white rounded-3xl px-4 py-3 border border-white/10 font-bold tracking-tighter"
            placeholder="IMEI"
            value={form.imei}
            onChange={e => setForm(f => ({ ...f, imei: e.target.value }))}
            autoFocus
          />
          <input
            className="bg-surfaceAlt text-white rounded-3xl px-4 py-3 border border-white/10"
            placeholder="Комментарий"
            value={form.comments}
            onChange={e => setForm(f => ({ ...f, comments: e.target.value }))}
          />
          <div className="flex flex-col gap-1 mt-2">
            <div className="text-xs text-white/60">Исторические цены продаж:</div>
            <div className="flex flex-wrap gap-2">
              {historicalHints.map((h, i) => (
                <span key={i} className="bg-surfaceAlt text-white/80 rounded-3xl px-3 py-1 text-xs border border-white/10">{h}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="bg-surfaceAlt text-white rounded-3xl px-4 py-2 border border-white/10" onClick={prev}>Назад</button>
            <button className="bg-success text-black font-black rounded-3xl px-4 py-2 ml-auto" onClick={() => onSubmit(form)} disabled={!form.imei}>Добавить</button>
          </div>
        </div>
      )}
    </GlassCard>
  );
};

import React from 'react';

export const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60"
      style={{ height: 'var(--app-height)', paddingBottom: 'env(safe-area-inset-bottom)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-surface rounded-t-3xl p-6 shadow-xl"
        style={{ borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem' }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

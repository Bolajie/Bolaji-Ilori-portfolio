import React, { useEffect } from 'react';

export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose, message]); // Reset timer if message changes

  const styles = {
    success: 'bg-brand-signal/10 border-brand-signal/25 text-brand-signal shadow-[0_0_30px_rgba(0,85,255,0.08)]',
    error: 'bg-brand-orange/10 border-brand-orange/30 text-brand-orange shadow-[0_0_30px_rgba(232,160,0,0.1)]',
    info: 'bg-line border-line-strong text-brand-bone'
  };

  return (
    <div
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      className={`fixed bottom-8 right-8 z-[100] max-w-sm w-full md:w-auto px-6 py-4 border rounded-2xl backdrop-blur-xl shadow-2xl flex items-center space-x-4 animate-reveal ${styles[type]}`}
    >
      {type === 'success' && (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
      )}
      {type === 'error' && (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      )}
      {type === 'info' && (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      )}
      <span className="text-[11px] font-black uppercase tracking-widest flex-grow">{message}</span>
      <button onClick={onClose} aria-label="Dismiss notification" className="hover:opacity-70 transition-opacity p-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  );
};

export default Toast;
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
    success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]',
    error: 'bg-red-500/10 border-red-500/20 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.1)]',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[100] max-w-sm w-full md:w-auto px-6 py-4 border rounded-2xl backdrop-blur-xl shadow-2xl flex items-center space-x-4 animate-reveal ${styles[type]}`}>
      {type === 'success' && (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
      )}
      {type === 'error' && (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      )}
      {type === 'info' && (
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      )}
      <span className="text-[10px] font-black uppercase tracking-widest flex-grow">{message}</span>
      <button onClick={onClose} className="hover:opacity-70 transition-opacity p-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  );
};

export default Toast;
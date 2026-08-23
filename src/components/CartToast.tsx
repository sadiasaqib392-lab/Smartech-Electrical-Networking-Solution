import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Check, X, ArrowRight } from 'lucide-react';

export const CartToast: React.FC = () => {
  const { toastMessage, clearToast, openCart, totalItemCount } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300 max-w-sm">
      <div className="bg-[#0A192F] text-white p-4 border-l-4 border-[#1D4ED8] shadow-2xl flex items-center justify-between gap-4 rounded-xs border-y border-r border-blue-950">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1D4ED8] text-white flex items-center justify-center rounded-xs flex-shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">
              Added to Cart
            </div>
            <div className="text-xs font-semibold text-blue-100 line-clamp-1">{toastMessage}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => {
              clearToast();
              openCart();
            }}
            className="px-2.5 py-1 bg-white text-[#0F172A] hover:bg-[#1D4ED8] hover:text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-1"
          >
            <span>View ({totalItemCount})</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={clearToast}
            className="text-blue-300 hover:text-white p-1"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

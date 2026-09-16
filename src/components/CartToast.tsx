import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Check, X, ArrowRight } from 'lucide-react';

export const CartToast: React.FC = () => {
  const { toastMessage, clearToast, openCart, totalItemCount } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300 max-w-sm">
      <div className="bg-[#1C1917] text-white p-4 border-l-4 border-[#E14D2A] shadow-2xl flex items-center justify-between gap-4 rounded-xl border-y border-r border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E14D2A] text-white flex items-center justify-center rounded-lg flex-shrink-0 shadow-xs">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF8A65]">
              Added to Cart
            </div>
            <div className="text-xs font-semibold text-stone-200 line-clamp-1">{toastMessage}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => {
              clearToast();
              openCart();
            }}
            className="px-3 py-1.5 bg-[#FAF8F5] text-[#1C1917] hover:bg-[#E14D2A] hover:text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1 shadow-xs"
          >
            <span>View ({totalItemCount})</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={clearToast}
            className="text-stone-400 hover:text-white p-1 transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { useCart } from '../context/CartContext';
import { MessageSquare, X, ShoppingCart } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const { openCart, totalItemCount } = useCart();

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Quick Tooltip banner */}
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#0A192F] text-white text-[11px] font-bold uppercase tracking-wider shadow-xl border-l-2 border-[#1D4ED8] border-y border-r border-blue-950 rounded-xs animate-in fade-in slide-in-from-bottom-2">
          <span>Need quick technical advice? Chat with us</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-blue-300 hover:text-white ml-1 p-0.5"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Buttons Row */}
      <div className="flex items-center gap-2.5">
        {/* Floating Cart Button */}
        <button
          id="floating-cart-btn"
          onClick={openCart}
          className="relative group flex items-center justify-center w-12 h-12 bg-[#0A192F] hover:bg-[#1D4ED8] text-white shadow-xl border border-blue-900 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none rounded-full"
          aria-label="Open Cart"
          title="Open Cart"
        >
          <ShoppingCart className="w-5 h-5 text-white" />
          {totalItemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-[#1D4ED8] group-hover:bg-[#0A192F] text-white text-[10px] font-extrabold flex items-center justify-center rounded-full border-2 border-white">
              {totalItemCount}
            </span>
          )}
        </button>

        {/* Floating WhatsApp Action Button */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none rounded-full"
          aria-label="Chat on WhatsApp with Smartech"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
          <MessageSquare className="w-5.5 h-5.5 relative z-10" />
        </a>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { ProductItem } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { useCart } from '../context/CartContext';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Tag, Box, ShoppingCart, Plus, Minus, Play, Video, Eye } from 'lucide-react';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenQuoteModal: (productName: string, category: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenQuoteModal,
}) => {
  const { addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeMediaUrl, setActiveMediaUrl] = useState<string>('');

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setActiveMediaUrl(product.imageUrl || '');
    }
  }, [product]);

  if (!product) return null;

  const allImages = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : product.imageUrl 
      ? [product.imageUrl] 
      : [];

  const handleAddProductToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        category: product.category,
        categoryLabel: product.categoryLabel,
        brand: product.brand,
        specs: product.keySpecs,
        type: 'product',
      },
      quantity
    );
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Smartech, I am interested in getting a quotation and specifications for: *${product.name}* (Qty: ${quantity}, Category: ${product.categoryLabel}, Brand: ${product.brand}). Please provide price and availability.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white shadow-2xl border-l-4 border-[#1D4ED8] border-y border-r border-gray-200 overflow-hidden max-h-[90vh] flex flex-col rounded-xs"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-blue-950 bg-[#0A192F] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1D4ED8] text-white flex items-center justify-center rounded-xs">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">
                {product.categoryLabel} Engineering Product
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight mt-0.5">
                {product.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-blue-200 hover:text-white hover:bg-blue-900/60 transition-colors rounded-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-left bg-white">
          {/* Media Showcase: Video or Image Gallery */}
          {product.videoUrl ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-700">
                <span className="inline-flex items-center gap-1.5 text-red-600 font-bold">
                  <Play className="w-3.5 h-3.5 fill-red-600" />
                  Live Product Video Showcase
                </span>
                <span className="text-slate-500 font-normal">HWOO Warehouse Dispatch Pakistan</span>
              </div>
              <div className="relative rounded-xs overflow-hidden bg-black border border-gray-300 shadow-md">
                <video
                  src={product.videoUrl}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-h-[320px] object-contain mx-auto"
                />
              </div>
            </div>
          ) : allImages.length > 0 ? (
            <div className="space-y-3">
              <div className="relative rounded-xs overflow-hidden bg-slate-900/5 border border-gray-200 flex items-center justify-center p-2 min-h-[220px] max-h-[340px]">
                <img
                  src={activeMediaUrl || allImages[0]}
                  alt={product.name}
                  className="max-h-[320px] w-auto max-w-full object-contain rounded-xs shadow-xs"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1.5">
                  {product.name === 'APSUN' && (
                    <span className="px-2 py-0.5 bg-[#1D4ED8] text-white text-[9px] font-black rounded-xs uppercase tracking-wider shadow-xs">
                      APSUN
                    </span>
                  )}
                  <span className="px-2 py-0.5 bg-[#0F172A]/80 text-white text-[9px] font-bold rounded-xs uppercase tracking-wider">
                    Verified Product Media
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails if multiple images */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveMediaUrl(img)}
                      className={`relative w-16 h-16 rounded-xs overflow-hidden border-2 flex-shrink-0 transition-all ${
                        (activeMediaUrl === img || (!activeMediaUrl && i === 0))
                          ? 'border-[#1D4ED8] shadow-sm scale-105'
                          : 'border-gray-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : null}

          {/* Brand & Stock Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 border-l-4 border-[#0F172A] border-y border-r border-gray-200 rounded-xs">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Manufacturer / Standard</div>
              <div className="text-sm font-bold text-[#0F172A]">{product.brand}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                {product.availability}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
              Product Overview
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">{product.shortDesc}</p>
          </div>

          {/* Specifications */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
              Technical Specifications & Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.keySpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 bg-blue-50/50 border border-blue-100 text-xs text-slate-800 rounded-xs"
                >
                  <span className="text-[#1D4ED8] font-bold flex-shrink-0">✓</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Selector + Add to Cart Highlight Block */}
          <div className="p-4 bg-[#F8FAFC] border-l-4 border-[#1D4ED8] border-y border-r border-gray-200 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Order Quantity</div>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex items-center border border-gray-300 bg-white rounded-xs">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-[#0F172A] select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs text-slate-500 font-medium">units</span>
              </div>
            </div>

            <div className="w-full sm:w-auto flex items-center gap-2">
              <button
                onClick={handleAddProductToCart}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-xs transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart ({quantity})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-gray-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 font-mono">
            Direct Supply & Engineering Execution: Sialkot & Punjab
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0F172A] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(product.name, product.categoryLabel);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-xs shadow-xs"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

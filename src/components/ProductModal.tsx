import React, { useState, useEffect } from 'react';
import { ProductItem } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { useCart } from '../context/CartContext';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Tag, Box, ShoppingCart, Plus, Minus, Play, Video, Eye, FileText } from 'lucide-react';

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
        className="relative w-full max-w-2xl bg-[#FAF8F5] shadow-2xl border-l-4 border-[#E14D2A] border-y border-r border-[#E8E5DF] overflow-hidden max-h-[90vh] flex flex-col rounded-xl"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-stone-800 bg-[#1C1917] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E14D2A] text-white flex items-center justify-center rounded-lg shadow-xs">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F97316]">
                {product.categoryLabel} Engineering Product
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight mt-0.5">
                {product.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-800 transition-colors rounded-lg cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-left bg-[#FAF8F5]">
          {/* Media Showcase: Video or Image Gallery */}
          {product.videoUrl ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-stone-700">
                <span className="inline-flex items-center gap-1.5 text-red-600 font-bold">
                  <Play className="w-3.5 h-3.5 fill-red-600" />
                  Live Product Video Showcase
                </span>
                <span className="text-stone-500 font-normal">HWOO Warehouse Dispatch Pakistan</span>
              </div>
              <div className="relative rounded-lg overflow-hidden bg-black border border-[#E8E5DF] shadow-md">
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
              <div className="relative rounded-lg overflow-hidden bg-white border border-[#E8E5DF] flex items-center justify-center p-2 min-h-[220px] max-h-[340px]">
                <img
                  src={activeMediaUrl || allImages[0]}
                  alt={product.name}
                  className="max-h-[320px] w-auto max-w-full object-contain rounded-md shadow-xs"
                />
                <div className="absolute top-2 right-2 flex items-center gap-1.5">
                  {product.name === 'APSUN' && (
                    <span className="px-2 py-0.5 bg-[#1C1917] text-white text-[9px] font-black rounded-md uppercase tracking-wider shadow-xs">
                      APSUN
                    </span>
                  )}
                  {product.category === 'photon-sunways' && (
                    <span className="px-2 py-0.5 bg-[#E14D2A] text-white text-[9px] font-black rounded-md uppercase tracking-wider shadow-xs">
                      {product.brand.includes('Sunways') ? 'SUNWAYS' : 'PHOTON'}
                    </span>
                  )}
                  <span className="px-2 py-0.5 bg-[#1C1917]/80 text-white text-[9px] font-bold rounded-md uppercase tracking-wider">
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
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                        (activeMediaUrl === img || (!activeMediaUrl && i === 0))
                          ? 'border-[#E14D2A] shadow-sm scale-105'
                          : 'border-[#E8E5DF] opacity-70 hover:opacity-100'
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
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white border-l-4 border-[#1C1917] border-y border-r border-[#E8E5DF] rounded-lg">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Manufacturer / Standard</div>
              <div className="text-sm font-bold text-[#1C1917]">{product.brand}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                {product.availability}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5">
              Product Overview
            </h4>
            <p className="text-[#57534E] text-sm leading-relaxed">{product.shortDesc}</p>
          </div>

          {/* Specifications */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">
              Technical Specifications & Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.keySpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 bg-white border border-[#E8E5DF] text-xs text-[#1C1917] rounded-lg"
                >
                  <span className="text-[#E14D2A] font-bold flex-shrink-0">✓</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Engineering Specification Sheet / Datasheet Table */}
          {product.specTable && product.specTable.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-3.5 h-3.5 text-[#E14D2A]" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
                  Engineering Datasheet & Parameters
                </h4>
              </div>
              <div className="border border-[#E8E5DF] rounded-lg overflow-hidden bg-white text-xs">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {product.specTable.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={rIdx % 2 === 0 ? 'bg-[#F5F2EB]/50' : 'bg-white'}
                      >
                        <td className="py-2 px-3 font-semibold text-stone-700 border-b border-stone-100 w-1/3">
                          {row.label}
                        </td>
                        <td className="py-2 px-3 text-[#1C1917] border-b border-stone-100 font-mono text-[11px]">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Quantity Selector + Add to Cart Highlight Block */}
          <div className="p-4 bg-white border-l-4 border-[#E14D2A] border-y border-r border-[#E8E5DF] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Order Quantity</div>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex items-center border border-stone-300 bg-[#FAF8F5] rounded-lg">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center text-stone-600 hover:bg-[#FFF7ED] font-bold cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-[#1C1917] select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center text-stone-600 hover:bg-[#FFF7ED] font-bold cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs text-stone-500 font-medium">units</span>
              </div>
            </div>

            <div className="w-full sm:w-auto flex items-center gap-2">
              <button
                onClick={handleAddProductToCart}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart ({quantity})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-[#E8E5DF] bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-[11px] text-stone-500 font-mono">
            Direct Supply & Engineering Execution: Sialkot & Punjab
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#292524] hover:bg-black text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-lg"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(product.name, product.categoryLabel);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-lg shadow-xs cursor-pointer"
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

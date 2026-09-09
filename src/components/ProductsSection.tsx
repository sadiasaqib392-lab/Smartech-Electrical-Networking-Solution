import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/companyData';
import { ProductItem } from '../types';
import { ProductModal } from './ProductModal';
import { useCart } from '../context/CartContext';
import {
  Sun,
  Camera,
  Network,
  Zap,
  Shield,
  Layers,
  MessageSquare,
  ArrowRight,
  Search,
  ShoppingCart,
  Plus,
  Minus,
  Info,
  Check,
  Play,
  Eye,
  Video,
} from 'lucide-react';

interface ProductsSectionProps {
  onOpenQuoteModal: (productName?: string, categoryName?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>({});

  const { addToCart, cartItems } = useCart();

  const tabs = [
    { id: 'all', label: 'All Equipment', icon: Layers, count: PRODUCTS_DATA.length },
    { id: 'solar', label: 'Solar PV & Inverters', icon: Sun, count: PRODUCTS_DATA.filter(p => p.category === 'solar').length },
    { id: 'cctv', label: 'CCTV & Security', icon: Camera, count: PRODUCTS_DATA.filter(p => p.category === 'cctv').length },
    { id: 'networking', label: 'Networking & Fiber', icon: Network, count: PRODUCTS_DATA.filter(p => p.category === 'networking').length },
    { id: 'electrical', label: 'Electrical Switchgear', icon: Zap, count: PRODUCTS_DATA.filter(p => p.category === 'electrical').length },
    { id: 'earthing', label: 'Earthing & Grounding', icon: Shield, count: PRODUCTS_DATA.filter(p => p.category === 'earthing').length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesTab = activeTab === 'all' || product.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'solar':
        return Sun;
      case 'cctv':
        return Camera;
      case 'networking':
        return Network;
      case 'electrical':
        return Zap;
      case 'earthing':
      default:
        return Shield;
    }
  };

  const handleQtyChange = (productId: string, delta: number) => {
    setItemQuantities((prev) => {
      const current = prev[productId] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [productId]: next };
    });
  };

  const handleAddToCart = (product: ProductItem) => {
    const qty = itemQuantities[product.id] || 1;
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
      qty
    );
  };

  return (
    <section id="products" className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
          <div className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs">
            <span>Engineering Store & Supplies</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
            Equipment Catalog & <span className="text-[#1D4ED8]">Product Sourcing</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Direct sourcing of tested, certified hardware for residential, commercial and industrial deployments with quick dispatch across Sialkot and Punjab.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-gray-200 shadow-xs overflow-x-auto max-w-full rounded-xs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#1D4ED8] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#0F172A] hover:bg-blue-50/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#1D4ED8]'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-xs ${isActive ? 'bg-black/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search catalog & specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200 text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] shadow-xs rounded-xs font-medium"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white border border-gray-200 p-6 rounded-xs">
            <p className="text-slate-500 text-sm mb-3">No equipment found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="px-4 py-1.5 bg-[#0F172A] text-white text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-[#1D4ED8]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((product) => {
              const CategoryIcon = getCategoryIcon(product.category);
              const qty = itemQuantities[product.id] || 1;
              const cartItemMatch = cartItems.find((i) => i.id === product.id);

              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-between bg-white border-l-4 border-[#1D4ED8] border-y border-r border-gray-200 p-5 rounded-xs shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 text-[#1D4ED8] text-[10px] font-bold uppercase tracking-wider rounded-xs">
                        <CategoryIcon className="w-3 h-3 text-[#1D4ED8]" />
                        <span>{product.categoryLabel}</span>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xs">
                        {product.availability}
                      </span>
                    </div>

                    {/* Product Media Display (Video or Image) */}
                    {product.videoUrl ? (
                      <div className="relative mb-3.5 rounded-xs overflow-hidden bg-black border border-gray-200 shadow-inner group">
                        <video
                          src={product.videoUrl}
                          className="w-full h-44 object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                        />
                        <div className="absolute top-2 left-2 pointer-events-none">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-600 text-white text-[9px] font-bold uppercase tracking-wider rounded-xs shadow-xs">
                            <Play className="w-2.5 h-2.5 fill-current" />
                            Live Video Showcase
                          </span>
                        </div>
                      </div>
                    ) : product.imageUrl ? (
                      <div
                        onClick={() => setSelectedProduct(product)}
                        className="relative mb-3.5 rounded-xs overflow-hidden bg-slate-100 border border-gray-200 group cursor-pointer h-44 flex items-center justify-center"
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 bg-white/95 text-[#0F172A] text-[10px] font-bold uppercase tracking-wider shadow-sm rounded-xs flex items-center gap-1">
                            <Eye className="w-3 h-3 text-[#1D4ED8]" />
                            View Gallery & Specs
                          </span>
                        </div>
                        {product.name === 'APSUN' && (
                          <div className="absolute top-2 left-2 pointer-events-none z-10">
                            <span className="px-2 py-0.5 bg-[#0A192F]/95 text-white font-extrabold text-[10px] tracking-wider uppercase rounded-xs border border-blue-500/50 shadow-xs">
                              APSUN
                            </span>
                          </div>
                        )}
                        {product.gallery && product.gallery.length > 1 && (
                          <div className="absolute bottom-2 right-2 pointer-events-none">
                            <span className="px-2 py-0.5 bg-[#0F172A]/80 text-white text-[9px] font-bold rounded-xs flex items-center gap-1 shadow-xs">
                              <Layers className="w-2.5 h-2.5 text-blue-300" />
                              {product.gallery.length} Photos
                            </span>
                          </div>
                        )}
                      </div>
                    ) : null}

                    {/* Product Name */}
                    <h3 className="font-heading text-base font-bold text-[#0F172A] mb-1 leading-snug">
                      {product.name}
                    </h3>

                    {/* Brand */}
                    <div className="text-[11px] text-slate-500 font-medium mb-2.5">
                      Standard / MFR: <span className="text-[#0F172A] font-semibold">{product.brand}</span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                      {product.shortDesc}
                    </p>

                    {/* Specs snippet */}
                    <div className="space-y-1 pt-2.5 border-t border-gray-100 mb-4">
                      {product.keySpecs.slice(0, 2).map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                          <span className="text-[#1D4ED8] font-bold">✓</span>
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Add to Cart Area */}
                  <div className="pt-3 border-t border-gray-100 space-y-2.5">
                    {/* Quantity Selector + Add to Cart Button */}
                    <div className="flex items-center gap-2">
                      {/* Stepper */}
                      <div className="flex items-center border border-gray-300 rounded-xs bg-[#F8FAFC] h-8">
                        <button
                          onClick={() => handleQtyChange(product.id, -1)}
                          className="w-7 h-full flex items-center justify-center text-slate-600 hover:bg-blue-50 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-bold text-xs text-[#0F172A] select-none">
                          {qty}
                        </span>
                        <button
                          onClick={() => handleQtyChange(product.id, 1)}
                          className="w-7 h-full flex items-center justify-center text-slate-600 hover:bg-blue-50 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Add to Cart button */}
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 h-8 px-3 rounded-xs font-bold text-xs uppercase tracking-wider transition-all ${
                          cartItemMatch
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-[#1D4ED8] hover:bg-[#0A192F] text-white shadow-xs'
                        }`}
                      >
                        {cartItemMatch ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Cart ({cartItemMatch.quantity})</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5 text-blue-200" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Secondary Quick Action: Quote or Full Specs */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => onOpenQuoteModal(product.name, product.categoryLabel)}
                        className="py-1.5 px-2 bg-transparent border border-gray-300 hover:border-[#1D4ED8] hover:text-[#1D4ED8] text-slate-700 font-bold text-[10px] uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1"
                      >
                        <span>Single Quote</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="py-1.5 px-2 bg-slate-100 hover:bg-blue-50 text-[#0F172A] font-bold text-[10px] uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1"
                      >
                        <Info className="w-3 h-3 text-slate-500" />
                        <span>Full Specs</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Product Detail Modal */}
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuoteModal={(prodName, cat) => onOpenQuoteModal(prodName, cat)}
        />
      </div>
    </section>
  );
};

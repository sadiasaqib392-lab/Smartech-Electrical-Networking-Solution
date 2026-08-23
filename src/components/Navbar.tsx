import React, { useState, useEffect } from 'react';
import { SmartechLogo } from './SmartechLogo';
import { COMPANY_INFO } from '../data/companyData';
import { useCart } from '../context/CartContext';
import { Phone, Mail, MapPin, Menu, X, MessageSquare, ArrowRight, Shield, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (initialService?: string) => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { openCart, totalItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navPages = [
    { label: 'Home', id: 'home', badge: '1' },
    { label: 'Services', id: 'services', badge: '2' },
    { label: 'Products', id: 'products', badge: '3' },
    { label: 'Calculator', id: 'calculator', badge: '4' },
    { label: 'Projects', id: 'projects', badge: '5' },
    { label: 'About Us', id: 'about', badge: '6' },
    { label: 'Contact', id: 'contact', badge: '7' },
  ];

  const handlePageSelect = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar (Desktop) */}
      <div className="hidden lg:block bg-[#0A192F] text-white text-xs border-b border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[#3B82F6]">📍</span>
              <span>{COMPANY_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#3B82F6]">📞</span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-blue-200 transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-blue-200/80">
              <Shield className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span className="uppercase text-[10px] tracking-wider font-bold">Engineering Excellence</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="opacity-90 underline underline-offset-4 cursor-pointer hover:opacity-100 hover:text-blue-200 transition-opacity"
            >
              {COMPANY_INFO.email}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                COMPANY_INFO.defaultWhatsAppMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-xs bg-[#1D4ED8]/30 text-blue-200 hover:bg-[#1D4ED8] hover:text-white transition-colors border border-blue-500/40 font-bold uppercase text-[10px] tracking-wider"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="main-navbar"
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-200'
            : 'bg-white py-3.5 border-b border-gray-200 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo Brand */}
          <button
            onClick={() => handlePageSelect('home')}
            className="flex items-center focus:outline-none cursor-pointer text-left"
            aria-label="Smartech Electrical & Networking Solution"
          >
            <SmartechLogo size="md" variant="horizontal" />
          </button>

          {/* Desktop 5-Page Navigation Tabs */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-bold uppercase tracking-wider bg-slate-100/80 p-1 rounded-xs border border-slate-200">
            {navPages.map((page) => {
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handlePageSelect(page.id)}
                  className={`px-3.5 py-1.5 rounded-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#1D4ED8] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#1D4ED8] hover:bg-white/80'
                  }`}
                >
                  <span className={`text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono font-bold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {page.badge}
                  </span>
                  <span>{page.label}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dedicated Cart Button */}
            <button
              id="navbar-cart-btn"
              onClick={openCart}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xs border-2 border-[#0F172A] hover:border-[#1D4ED8] hover:bg-blue-50 text-[#0F172A] hover:text-[#1D4ED8] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
              title="Open Project Cart"
            >
              <ShoppingCart className="w-4 h-4 text-[#1D4ED8]" />
              <span>Cart</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-extrabold bg-[#1D4ED8] text-white rounded-xs">
                {totalItemCount}
              </span>
            </button>

            <button
              id="navbar-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="bg-[#1D4ED8] text-white px-5 py-2 rounded-xs text-xs font-bold shadow-xs hover:bg-[#0A192F] transition-colors uppercase tracking-widest"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Actions: Cart & Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Cart Button */}
            <button
              id="mobile-cart-btn"
              onClick={openCart}
              className="relative p-2 rounded-xs bg-[#0F172A] text-white hover:bg-[#1D4ED8] transition-colors"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-[#1D4ED8] text-white text-[10px] font-bold flex items-center justify-center rounded-xs border border-white">
                  {totalItemCount}
                </span>
              )}
            </button>

            <button
              id="mobile-quote-quick-btn"
              onClick={() => onOpenQuoteModal()}
              className="px-2.5 py-1.5 rounded-xs bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xs text-slate-800 hover:text-[#1D4ED8] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-white border-b border-gray-200 shadow-2xl transition-all duration-300 z-40 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="px-5 py-6 space-y-4">
            <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
              <SmartechLogo size="sm" variant="horizontal" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider rounded-xs"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Cart ({totalItemCount})</span>
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              {navPages.map((page) => {
                const isActive = activePage === page.id;
                return (
                  <button
                    key={page.id}
                    onClick={() => handlePageSelect(page.id)}
                    className={`px-4 py-3 rounded-xs text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-between text-left cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-[#1D4ED8] border-l-4 border-[#1D4ED8]'
                        : 'text-slate-800 hover:bg-slate-50 hover:text-[#1D4ED8]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold ${
                        isActive ? 'bg-[#1D4ED8] text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {page.badge}
                      </span>
                      <span>{page.label}</span>
                    </div>
                    {isActive ? (
                      <span className="text-[10px] font-bold text-[#1D4ED8] bg-blue-100 px-2 py-0.5 rounded-xs">
                        Active View
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                id="drawer-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xs bg-[#1D4ED8] text-white font-bold text-sm uppercase tracking-widest shadow-xs hover:bg-[#0A192F]"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.defaultWhatsAppMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xs bg-[#0F172A] text-white font-bold text-sm uppercase tracking-wider shadow-xs border border-slate-700 hover:bg-[#1D4ED8]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+92 334 4205974)</span>
              </a>

              <div className="pt-2 text-center text-xs text-gray-500 space-y-1 font-medium">
                <p>📍 {COMPANY_INFO.location}</p>
                <p>✉️ {COMPANY_INFO.email}</p>
                <p>📞 {COMPANY_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

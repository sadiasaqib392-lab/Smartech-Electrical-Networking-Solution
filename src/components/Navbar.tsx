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
      <div className="hidden lg:block bg-[#1C1917] text-[#E7E5E4] text-xs border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[#F97316]">📍</span>
              <span className="text-stone-300">{COMPANY_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F97316]">📞</span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-stone-300 hover:text-white transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <Shield className="w-3.5 h-3.5 text-[#E14D2A]" />
              <span className="uppercase text-[10px] tracking-wider font-bold">Engineering Excellence</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-stone-300 underline underline-offset-4 cursor-pointer hover:text-white transition-opacity"
            >
              {COMPANY_INFO.email}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                COMPANY_INFO.defaultWhatsAppMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E14D2A]/20 text-[#FF8A50] hover:bg-[#E14D2A] hover:text-white transition-all border border-[#E14D2A]/40 font-bold uppercase text-[10px] tracking-wider"
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
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E8E5DF]'
            : 'bg-[#FAF8F5] py-3.5 border-b border-[#E8E5DF] shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo Brand */}
          <button
            onClick={() => handlePageSelect('home')}
            className="flex items-center focus:outline-none cursor-pointer text-left transition-transform duration-200 hover:opacity-90"
            aria-label="Smartech Electrical & Networking Solution"
          >
            <SmartechLogo size="md" variant="horizontal" />
          </button>

          {/* Desktop 7-Page Navigation Tabs */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 text-xs font-bold uppercase tracking-wider bg-[#F5F2EB] p-1.5 rounded-lg border border-[#E8E5DF]">
            {navPages.map((page) => {
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handlePageSelect(page.id)}
                  className={`px-3.5 py-1.5 rounded-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#E14D2A] text-white shadow-xs'
                      : 'text-[#57534E] hover:text-[#E14D2A] hover:bg-white/90'
                  }`}
                >
                  <span className={`text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono font-bold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-[#E8E5DF] text-[#57534E]'
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
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#E8E5DF] bg-white hover:border-[#E14D2A] hover:bg-[#FFF7ED] text-[#1C1917] hover:text-[#E14D2A] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
              title="Open Project Cart"
            >
              <ShoppingCart className="w-4 h-4 text-[#E14D2A]" />
              <span>Cart</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-extrabold bg-[#E14D2A] text-white rounded-md">
                {totalItemCount}
              </span>
            </button>

            <button
              id="navbar-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="bg-[#E14D2A] text-white px-5 py-2 rounded-lg text-xs font-bold shadow-xs hover:bg-[#C83B1B] transition-colors uppercase tracking-widest cursor-pointer"
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
              className="relative p-2 rounded-lg bg-[#1C1917] text-white hover:bg-[#E14D2A] transition-colors cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              {totalItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-[#E14D2A] text-white text-[10px] font-bold flex items-center justify-center rounded-md border border-white">
                  {totalItemCount}
                </span>
              )}
            </button>

            <button
              id="mobile-quote-quick-btn"
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 rounded-lg bg-[#E14D2A] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#1C1917] hover:text-[#E14D2A] hover:bg-[#F5F2EB] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#FAF8F5] border-b border-[#E8E5DF] shadow-xl transition-all duration-300 z-40 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="px-5 py-6 space-y-4">
            <div className="pb-3 border-b border-[#E8E5DF] flex items-center justify-between">
              <SmartechLogo size="sm" variant="horizontal" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#F97316]" />
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
                    className={`px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-between text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#FFF7ED] text-[#E14D2A] border-l-4 border-[#E14D2A]'
                        : 'text-[#1C1917] hover:bg-[#F5F2EB] hover:text-[#E14D2A]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold ${
                        isActive ? 'bg-[#E14D2A] text-white' : 'bg-[#E8E5DF] text-[#57534E]'
                      }`}>
                        {page.badge}
                      </span>
                      <span>{page.label}</span>
                    </div>
                    {isActive ? (
                      <span className="text-[10px] font-bold text-[#E14D2A] bg-[#FFEDD5] px-2 py-0.5 rounded-md">
                        Active View
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-stone-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E8E5DF] space-y-3">
              <button
                id="drawer-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#E14D2A] text-white font-bold text-sm uppercase tracking-widest shadow-xs hover:bg-[#C83B1B] cursor-pointer"
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
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#1C1917] text-white font-bold text-sm uppercase tracking-wider shadow-xs border border-stone-700 hover:bg-[#292524]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+92 334 4205974)</span>
              </a>

              <div className="pt-2 text-center text-xs text-[#57534E] space-y-1 font-medium">
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

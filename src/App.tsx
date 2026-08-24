/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickServicesStrip } from './components/QuickServicesStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { SolarLoadCalculator } from './components/SolarLoadCalculator';
import { ProjectSolutionsSection } from './components/ProjectSolutionsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BusinessModelTimeline } from './components/BusinessModelTimeline';
import { CallToAction } from './components/CallToAction';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CartDrawer } from './components/CartDrawer';
import { CartToast } from './components/CartToast';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CctvNetworkCalculator } from './components/CctvNetworkCalculator';
import { EngineeringStandardsManual } from './components/EngineeringStandardsManual';
import { BoqPricingGuide } from './components/BoqPricingGuide';
import { ClientTestimonialsTrust } from './components/ClientTestimonialsTrust';
import { ComprehensiveServicesDirectory } from './components/ComprehensiveServicesDirectory';
import { TopHomeImageSlider } from './components/TopHomeImageSlider';
import { ArrowLeft, ArrowRight, Home, Wrench, ShoppingBag, Calculator, FolderKanban, Info, Mail } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'services' | 'products' | 'calculator' | 'projects' | 'about' | 'contact'>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialItem, setQuoteInitialItem] = useState<string>('');
  const [quoteInitialCategory, setQuoteInitialCategory] = useState<string>('');

  const pagesOrder: ('home' | 'services' | 'products' | 'calculator' | 'projects' | 'about' | 'contact')[] = [
    'home',
    'services',
    'products',
    'calculator',
    'projects',
    'about',
    'contact',
  ];

  const pageTitles: Record<string, { num: string; title: string; desc: string; icon: React.ReactNode }> = {
    home: { num: '1/7', title: 'Home & Engineering Overview', desc: 'Solar, CCTV, Networking, Automation & Electrical Engineering', icon: <Home className="w-4 h-4" /> },
    services: { num: '2/7', title: 'Turnkey Services & Solutions', desc: 'Design, Supply, Installation, Testing & Commissioning', icon: <Wrench className="w-4 h-4" /> },
    products: { num: '3/7', title: 'Equipment Store & Catalog', desc: 'Browse Hardware & Order with Add to Cart Functionality', icon: <ShoppingBag className="w-4 h-4" /> },
    calculator: { num: '4/7', title: 'Solar Calculator & Blueprints', desc: 'Estimate kW Load, Roof Area, Tier-1 Panels & Bill Savings', icon: <Calculator className="w-4 h-4" /> },
    projects: { num: '5/7', title: 'Executed Projects & Case Studies', desc: 'Real Track Record in Sialkot, Daska & Punjab Facilities', icon: <FolderKanban className="w-4 h-4" /> },
    about: { num: '6/7', title: 'About Smartech & Credentials', desc: 'Engineering Standards, Team Experience & 5-Step Process', icon: <Info className="w-4 h-4" /> },
    contact: { num: '7/7', title: 'Contact & Quotation Desk', desc: 'Direct WhatsApp, Sialkot Office, RFQ Form & Technical FAQs', icon: <Mail className="w-4 h-4" /> },
  };

  const currentIndex = pagesOrder.indexOf(activePage);

  const goToNextPage = () => {
    if (currentIndex < pagesOrder.length - 1) {
      setActivePage(pagesOrder[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevPage = () => {
    if (currentIndex > 0) {
      setActivePage(pagesOrder[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (itemOrService?: string, category?: string) => {
    setQuoteInitialItem(itemOrService || '');
    setQuoteInitialCategory(category || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteInitialItem('');
    setQuoteInitialCategory('');
  };

  const handleSelectServiceCategory = (_categoryId: string) => {
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToServices = () => {
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#1D4ED8] selection:text-white">
        {/* Top Navbar */}
        <Navbar
          onOpenQuoteModal={handleOpenQuoteModal}
          activePage={activePage}
          setActivePage={(page) => {
            setActivePage(page as any);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* 7-Page Indicator & Step Header Strip */}
        <div className="pt-20 lg:pt-24 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1D4ED8] text-white flex items-center justify-center rounded-xs text-xs font-bold font-mono shadow-xs">
                {pageTitles[activePage].num}
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                  <span className="text-[#1D4ED8]">{pageTitles[activePage].icon}</span>
                  <span>{pageTitles[activePage].title}</span>
                </h1>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  {pageTitles[activePage].desc}
                </p>
              </div>
            </div>

            {/* Quick 7-Page Jump Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
              {pagesOrder.map((pageKey, idx) => (
                <button
                  key={pageKey}
                  onClick={() => {
                    setActivePage(pageKey);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-xs transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    activePage === pageKey
                      ? 'bg-[#1D4ED8] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                    activePage === pageKey ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="capitalize">{pageKey}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main 7-Page Content Rendering */}
        <main className="flex-grow">
          {/* PAGE 1: HOME */}
          {activePage === 'home' && (
            <div className="animate-in fade-in duration-200 space-y-4">
              {/* TOP AUTOMATIC IMAGE SLIDER (1.5s, Clean full view images, 'Smartech Electrical and Networking Solutions' badge, Manual arrows) */}
              <TopHomeImageSlider />

              <Hero
                onOpenQuoteModal={() => handleOpenQuoteModal()}
                onNavigateToServices={handleNavigateToServices}
              />
              <QuickServicesStrip onSelectServiceCategory={handleSelectServiceCategory} />
              <WhyChooseUs />
              <ClientTestimonialsTrust />
              <CallToAction onOpenQuoteModal={() => handleOpenQuoteModal()} />
            </div>
          )}

          {/* PAGE 2: SERVICES */}
          {activePage === 'services' && (
            <div className="animate-in fade-in duration-200 space-y-8">
              <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />
              <ComprehensiveServicesDirectory onOpenQuoteModal={handleOpenQuoteModal} />
              <EngineeringStandardsManual />
            </div>
          )}

          {/* PAGE 3: PRODUCTS STORE */}
          {activePage === 'products' && (
            <div className="animate-in fade-in duration-200 space-y-8">
              <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BoqPricingGuide onOpenQuoteModal={handleOpenQuoteModal} />
              </div>
            </div>
          )}

          {/* PAGE 4: CALCULATOR & BLUEPRINTS */}
          {activePage === 'calculator' && (
            <div className="animate-in fade-in duration-200 space-y-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SolarLoadCalculator onOpenQuoteModal={handleOpenQuoteModal} />
              <CctvNetworkCalculator onOpenQuoteModal={handleOpenQuoteModal} />
              <ProjectSolutionsSection onOpenQuoteModal={handleOpenQuoteModal} />
            </div>
          )}

          {/* PAGE 5: PROJECTS & CASE STUDIES */}
          {activePage === 'projects' && (
            <div className="animate-in fade-in duration-200 space-y-8">
              <CaseStudiesSection onOpenQuoteModal={handleOpenQuoteModal} />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BoqPricingGuide onOpenQuoteModal={handleOpenQuoteModal} />
              </div>
            </div>
          )}

          {/* PAGE 6: ABOUT US & QUALITY */}
          {activePage === 'about' && (
            <div className="animate-in fade-in duration-200 space-y-8">
              <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
              <EngineeringStandardsManual />
              <WhyChooseUs />
              <BusinessModelTimeline />
            </div>
          )}

          {/* PAGE 7: CONTACT & QUOTE DESK */}
          {activePage === 'contact' && (
            <div className="animate-in fade-in duration-200 space-y-8">
              <ContactSection />
              <FAQSection />
              <ClientTestimonialsTrust />
            </div>
          )}

          {/* Bottom Pagination & Navigation Controls */}
          <div className="bg-white border-y border-gray-200 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span>Current Section:</span>
                <span className="font-bold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded-xs uppercase">
                  Page {currentIndex + 1} of 7 — {activePage.toUpperCase()}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={goToPrevPage}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Page</span>
                </button>

                <button
                  onClick={goToNextPage}
                  disabled={currentIndex === pagesOrder.length - 1}
                  className="px-5 py-2 bg-[#1D4ED8] hover:bg-[#0A192F] text-white disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Next Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer
          onOpenQuoteModal={handleOpenQuoteModal}
          onNavigatePage={(page) => {
            setActivePage(page as any);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Global Interactive Modals, Cart Drawer and Floating Actions */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={handleCloseQuoteModal}
          initialItem={quoteInitialItem}
          initialCategory={quoteInitialCategory}
        />

        <CartDrawer />
        <CartToast />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
}

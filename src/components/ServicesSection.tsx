import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { useCart } from '../context/CartContext';
import { 
  SunMedium, 
  Camera, 
  Network, 
  Zap, 
  Home, 
  ShieldCheck, 
  Activity, 
  Wrench, 
  Building2, 
  ArrowRight, 
  ShoppingCart, 
  Check, 
  Layers, 
  PhoneCall 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const { addToCart, cartItems } = useCart();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'SunMedium':
        return SunMedium;
      case 'Camera':
        return Camera;
      case 'Network':
        return Network;
      case 'Zap':
        return Zap;
      case 'Home':
        return Home;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Activity':
        return Activity;
      case 'Wrench':
        return Wrench;
      case 'Building2':
        return Building2;
      default:
        return Zap;
    }
  };

  const handleAddServiceToCart = (service: typeof SERVICES_DATA[0]) => {
    addToCart(
      {
        id: `srv-${service.id}`,
        name: `${service.title} (Engineering Package)`,
        category: service.category,
        categoryLabel: service.badge || 'Engineering Service',
        brand: 'SMARTECH Turnkey Execution',
        specs: service.features.slice(0, 3),
        type: 'service',
      },
      1
    );
  };

  const filteredServices = activeFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => {
        if (activeFilter === 'power') return ['solar', 'electrical', 'earthing', 'vfd_pump'].includes(s.category);
        if (activeFilter === 'tech') return ['cctv', 'networking', 'smart_home'].includes(s.category);
        if (activeFilter === 'contracts') return ['maintenance', 'epc'].includes(s.category);
        return true;
      });

  return (
    <section id="services" className="py-16 lg:py-20 bg-[#0A192F] text-white relative overflow-hidden border-b border-blue-950">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1D4ED8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Turnkey Engineering & Technical Disciplines</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Our 9 Core <span className="text-[#38BDF8]">Engineering & Technical Services</span>
          </h2>

          <p className="text-blue-200/80 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive turnkey engineering solutions—from blueprint design and hardware procurement to precision installation, diagnostics, and lifetime maintenance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All 9 Disciplines' },
            { id: 'power', label: 'Solar, Power & Earthing' },
            { id: 'tech', label: 'CCTV, Networking & Smart Home' },
            { id: 'contracts', label: 'Maintenance & Turnkey EPC' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#1D4ED8] text-white shadow-md border border-blue-400/50'
                  : 'bg-[#0F224A] text-blue-200 hover:bg-[#162D61] border border-blue-900/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const inCart = cartItems.find((i) => i.id === `srv-${service.id}`);

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group relative flex flex-col justify-between bg-[#0F224A] border-l-4 border-[#38BDF8] border-y border-r border-blue-900/60 p-6 hover:bg-[#162D61] transition-all duration-200 rounded-xs shadow-md"
              >
                <div>
                  {/* Top Bar: Icon + Badge + Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 bg-[#0A192F] border border-blue-900 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-all rounded-xs shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-[#0A192F] border border-blue-800 text-blue-200 rounded-xs">
                        {service.badge}
                      </span>
                      <span className="text-xs font-black font-mono text-blue-300/40">
                        #{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-blue-100/70 leading-relaxed mb-5 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Inclusions / Deliverables */}
                  <div className="space-y-1.5 pt-3.5 border-t border-blue-900/60 mb-6">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-blue-300 mb-1.5">
                      Scope & Capabilities:
                    </div>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-blue-100/90">
                        <span className="text-[#38BDF8] font-bold flex-shrink-0">✓</span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-3 border-t border-blue-900/60 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddServiceToCart(service)}
                      className={`inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-xs font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                        inCart
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#0A192F] hover:bg-[#1D4ED8] text-white border border-blue-800'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="inline-flex items-center justify-center gap-1 py-2 px-2 bg-[#1D4ED8] hover:bg-white hover:text-[#0A192F] text-white font-bold text-[11px] uppercase tracking-wider transition-all rounded-xs cursor-pointer shadow-xs"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

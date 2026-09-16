import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { useCart } from '../context/CartContext';
import { MotionReveal, RevealHeading, RevealText, RevealCard, RevealButton } from './MotionReveal';
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
  Layers
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
    <section id="services" className="py-16 lg:py-20 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden border-b border-[#E8E5DF]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <RevealText delay={0.05}>
            <div className="inline-flex items-center gap-2 bg-[#E14D2A] text-white text-[10px] px-3.5 py-1 font-bold uppercase tracking-widest rounded-md shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>Turnkey Engineering & Technical Disciplines</span>
            </div>
          </RevealText>

          <RevealHeading delay={0.1}>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight">
              Our 9 Core <span className="text-[#E14D2A]">Engineering & Technical Services</span>
            </h2>
          </RevealHeading>

          <RevealText delay={0.15}>
            <p className="text-[#57534E] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Comprehensive turnkey engineering solutions—from blueprint design and hardware procurement to precision installation, diagnostics, and lifetime maintenance.
            </p>
          </RevealText>
        </div>

        {/* Filter Tabs */}
        <RevealButton delay={0.18}>
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
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#E14D2A] text-white shadow-md'
                    : 'bg-white text-[#57534E] hover:bg-[#FFF7ED] hover:text-[#E14D2A] border border-[#E8E5DF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </RevealButton>

        {/* 9 Services Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const inCart = cartItems.find((i) => i.id === `srv-${service.id}`);

            return (
              <RevealCard key={service.id} delay={(index % 3) * 0.08}>
                <div
                  id={`service-${service.id}`}
                  className="group relative flex flex-col justify-between bg-white border-l-4 border-[#1C1917] hover:border-[#E14D2A] border-y border-r border-[#E8E5DF] p-6 hover:shadow-xl transition-all duration-300 rounded-lg shadow-xs h-full hover:-translate-y-1.5"
                >
                  <div>
                    {/* Top Bar: Icon + Badge + Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 bg-[#F5F2EB] border border-[#E8E5DF] flex items-center justify-center text-[#E14D2A] group-hover:bg-[#E14D2A] group-hover:text-white transition-all rounded-lg shadow-xs group-hover:scale-110">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-[#FFF7ED] border border-[#FED7AA] text-[#E14D2A] rounded-md">
                          {service.badge}
                        </span>
                        <span className="text-xs font-black font-mono text-stone-300 group-hover:text-[#E14D2A]/40 transition-colors">
                          #{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="font-heading text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#E14D2A] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#57534E] leading-relaxed mb-5 font-normal">
                      {service.shortDesc}
                    </p>

                    {/* Inclusions / Deliverables */}
                    <div className="space-y-1.5 pt-3.5 border-t border-stone-100 mb-6">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">
                        Scope & Capabilities:
                      </div>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#57534E]">
                          <span className="text-[#E14D2A] font-bold flex-shrink-0">✓</span>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA Actions */}
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleAddServiceToCart(service)}
                        className={`inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                          inCart
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#F5F2EB] hover:bg-[#FFF7ED] text-[#1C1917] hover:text-[#E14D2A] border border-[#E8E5DF]'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Cart</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5 text-[#E14D2A]" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onOpenQuoteModal(service.title)}
                        className="inline-flex items-center justify-center gap-1 py-2 px-2 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-[11px] uppercase tracking-wider transition-all rounded-lg cursor-pointer shadow-xs hover:-translate-y-0.5"
                      >
                        <span>Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </RevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

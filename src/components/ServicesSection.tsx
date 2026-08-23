import React from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { useCart } from '../context/CartContext';
import { Sun, Camera, Network, Zap, Home, Shield, ArrowRight, ShoppingCart, Check } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const { addToCart, cartItems } = useCart();

  const getIcon = (name: string) => {
    switch (name) {
      case 'SunMedium':
        return Sun;
      case 'Camera':
        return Camera;
      case 'Network':
        return Network;
      case 'Zap':
        return Zap;
      case 'Home':
        return Home;
      case 'ShieldCheck':
      default:
        return Shield;
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

  return (
    <section id="services" className="py-16 lg:py-20 bg-[#0A192F] text-white relative overflow-hidden border-b border-blue-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
          <div className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs">
            <span>Engineering & Turnkey Services</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Our Core Engineering & <span className="text-[#38BDF8]">Technical Solutions</span>
          </h2>

          <p className="text-blue-200/80 text-sm sm:text-base max-w-2xl mx-auto">
            Turnkey execution across six specialized disciplines—from technical blueprint and supply to installation, testing, commissioning, and preventive maintenance.
          </p>
        </div>

        {/* 6 Services Grid with Geometric Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            const inCart = cartItems.find((i) => i.id === `srv-${service.id}`);

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group relative flex flex-col justify-between bg-[#0F224A] border-l-4 border-[#38BDF8] border-y border-r border-blue-900/60 p-5.5 hover:bg-[#162D61] transition-colors rounded-xs shadow-md"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[#0A192F] border border-blue-900/80 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-all rounded-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-[#0A192F] border border-blue-900 text-blue-200 rounded-xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading text-lg font-bold text-white mb-1.5 group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-blue-100/70 leading-relaxed mb-4 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Inclusions / Deliverables */}
                  <div className="space-y-1.5 pt-3 border-t border-blue-900/60 mb-5">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-blue-300 mb-1">
                      Key Inclusions:
                    </div>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-blue-100">
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
                      className={`inline-flex items-center justify-center gap-1.5 py-2 px-2 rounded-xs font-bold text-[11px] uppercase tracking-wider transition-all ${
                        inCart
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#0A192F] hover:bg-[#1D4ED8] text-white border border-blue-800'
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>In Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3 h-3 text-[#38BDF8]" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="inline-flex items-center justify-center gap-1 py-2 px-2 bg-[#1D4ED8] hover:bg-white hover:text-[#0A192F] text-white font-bold text-[11px] uppercase tracking-wider transition-all rounded-xs"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3" />
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

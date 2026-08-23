import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { Wrench, Award, Sliders, ShieldCheck, ZapOff, Handshake, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return Wrench;
      case 'Award':
        return Award;
      case 'Sliders':
        return Sliders;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'ZapOff':
        return ZapOff;
      case 'Handshake':
      default:
        return Handshake;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs">
            <span>The Smartech Advantage</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Why Choose <span className="text-[#1D4ED8]">Smartech?</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            We deliver reliable engineering excellence, disciplined installation protocols, and verified products to provide complete peace of mind.
          </p>
        </div>

        {/* 6 Feature Cards Grid with Geometric Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="group relative p-7 bg-[#F8FAFC] border-l-4 border-[#0F172A] hover:border-[#1D4ED8] border-y border-r border-gray-200 transition-all duration-300 rounded-xs shadow-xs"
              >
                {/* Number Accent */}
                <div className="absolute top-6 right-6 text-xl font-bold text-slate-300 group-hover:text-[#1D4ED8]/40 transition-colors font-heading">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-white border border-gray-200 text-[#0F172A] flex items-center justify-center mb-5 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8] transition-all duration-300 rounded-xs">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

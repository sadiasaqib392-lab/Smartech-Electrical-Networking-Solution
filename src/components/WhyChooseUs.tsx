import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { Wrench, Award, Sliders, ShieldCheck, Headphones, Building2, Shield, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Wrench':
        return Wrench;
      case 'Headphones':
        return Headphones;
      case 'Sliders':
        return Sliders;
      case 'Building2':
        return Building2;
      default:
        return Shield;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs">
            <Shield className="w-3.5 h-3.5" />
            <span>Trust & Engineering Assurance</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Why Choose <span className="text-[#1D4ED8]">Smartech?</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            We deliver reliable engineering excellence, disciplined installation protocols, and verified products to provide complete peace of mind for every project.
          </p>
        </div>

        {/* 6 Feature Cards Grid with Geometric Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="group relative p-7 bg-[#F8FAFC] border-l-4 border-[#0F172A] hover:border-[#1D4ED8] border-y border-r border-gray-200 transition-all duration-300 rounded-xs shadow-xs flex flex-col justify-between"
              >
                {/* Top Row: Icon + Badge + Number Accent */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-white border border-gray-200 text-[#0F172A] flex items-center justify-center group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8] transition-all duration-300 rounded-xs shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-50 text-[#1D4ED8] border border-blue-200 rounded">
                          {item.badge}
                        </span>
                      )}
                      <span className="text-base font-black text-slate-300 group-hover:text-[#1D4ED8]/40 transition-colors font-mono">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[#0F172A] mb-2.5 group-hover:text-[#1D4ED8] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trust Guarantee Marker */}
                <div className="pt-4 mt-4 border-t border-gray-200/80 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] flex-shrink-0" />
                  <span>Smartech Standard Compliance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

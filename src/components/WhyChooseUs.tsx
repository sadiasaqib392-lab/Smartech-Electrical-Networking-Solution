import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { RevealHeading, RevealText, RevealCard, RevealIcon } from './MotionReveal';
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
    <section id="why-us" className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <RevealText delay={0.05}>
            <div className="inline-flex items-center gap-2 bg-[#E14D2A] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-md shadow-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>Trust & Engineering Assurance</span>
            </div>
          </RevealText>

          <RevealHeading delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Why Choose <span className="text-[#E14D2A]">Smartech?</span>
            </h2>
          </RevealHeading>

          <RevealText delay={0.16}>
            <p className="text-[#57534E] text-sm sm:text-base leading-relaxed">
              We deliver reliable engineering excellence, disciplined installation protocols, and verified products to provide complete peace of mind for every project.
            </p>
          </RevealText>
        </div>

        {/* 6 Feature Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = getIcon(item.iconName);
            return (
              <RevealCard key={item.id} delay={(index % 3) * 0.09}>
                <div
                  className="group relative p-7 bg-[#FFFFFF] border-l-4 border-[#1C1917] hover:border-[#E14D2A] border-y border-r border-[#E8E5DF] transition-all duration-300 rounded-lg shadow-xs hover:shadow-xl flex flex-col justify-between h-full hover:-translate-y-1.5"
                >
                  {/* Top Row: Icon + Badge + Number Accent */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 bg-[#F5F2EB] border border-[#E8E5DF] text-[#1C1917] flex items-center justify-center group-hover:bg-[#E14D2A] group-hover:text-white group-hover:border-[#E14D2A] group-hover:scale-110 transition-all duration-300 rounded-lg shadow-xs">
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#FFF7ED] text-[#E14D2A] border border-[#FED7AA] rounded-md">
                            {item.badge}
                          </span>
                        )}
                        <span className="text-base font-black text-stone-300 group-hover:text-[#E14D2A]/40 transition-colors font-mono">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold text-[#1C1917] mb-2.5 group-hover:text-[#E14D2A] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Trust Guarantee Marker */}
                  <div className="pt-4 mt-5 border-t border-[#E8E5DF] flex items-center gap-2 text-[11px] font-semibold text-[#57534E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E14D2A] flex-shrink-0" />
                    <span>Smartech Standard Compliance</span>
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


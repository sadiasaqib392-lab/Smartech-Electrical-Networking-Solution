import React from 'react';
import { SmartechLogo } from './SmartechLogo';
import { Shield, Layers, Users, ArrowRight } from 'lucide-react';
import { RevealHeading, RevealText, RevealCard, RevealImage, RevealButton } from './MotionReveal';
import cctvSecurityImg from '../assets/images/cctv_smart_security_1787468722184.jpg';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Imagery and Geometric Framing */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <RevealImage delay={0.1}>
              <div className="relative overflow-hidden shadow-md border border-[#E8E5DF] bg-[#1C1917] group rounded-xl">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={cctvSecurityImg}
                    alt="Smartech Smart Security and Surveillance Technology"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Gradient Bottom Banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#1C1917]/95 border-l-4 border-[#E14D2A] text-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#E14D2A]/20 border border-[#E14D2A]/40 text-[#E14D2A] rounded-lg">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-white uppercase tracking-tight">Turnkey Technical Execution</div>
                      <div className="text-xs text-stone-300">From concept blueprint to live commissioning</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Logo Accent Box */}
              <div className="mt-4 p-4 bg-white border border-[#E8E5DF] flex items-center justify-between shadow-xs rounded-xl">
                <SmartechLogo size="sm" variant="horizontal" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Sialkot, Pakistan</span>
              </div>
            </RevealImage>
          </div>

          {/* Right Column: Narrative and Geometric Pillars */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            <div>
              <RevealText delay={0.05}>
                <span className="inline-block bg-[#E14D2A] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest mb-3 rounded-md shadow-xs">
                  About Smartech
                </span>
              </RevealText>
              
              <RevealHeading delay={0.1}>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-tight">
                  Engineering Solutions Built Around <span className="text-[#E14D2A]">Your Requirements</span>
                </h2>
              </RevealHeading>
            </div>

            <RevealText delay={0.16}>
              <div className="space-y-4 text-[#57534E] text-base sm:text-lg leading-relaxed mt-4">
                <p>
                  <strong className="text-[#1C1917]">Smartech Electrical & Networking Solution</strong> is an Engineering & Technical Solutions company providing complete solutions for residential, commercial and industrial clients.
                </p>
                <p>
                  Our business combines professional installation and technical services with the supply of reliable products and equipment.
                </p>
                <p>
                  From system design and product selection to installation, configuration, testing, commissioning and after-sales support, we provide complete solutions from one reliable source.
                </p>
              </div>
            </RevealText>

            {/* Geometric Feature Pillar Cards with Left Accent Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {/* Card 1 */}
              <RevealCard delay={0.2}>
                <div className="bg-white p-5 border-l-4 border-[#E14D2A] border-y border-r border-[#E8E5DF] shadow-xs rounded-lg h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2 bg-[#FFF7ED] w-fit mb-3 text-[#E14D2A] rounded-lg">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="font-heading font-bold text-[#1C1917] text-sm mb-1 uppercase tracking-tight">Complete Scope</div>
                  <div className="text-xs text-[#57534E] leading-snug">
                    Design • Supply • Install • Test • Commission • Maintain
                  </div>
                </div>
              </RevealCard>

              {/* Card 2 */}
              <RevealCard delay={0.28}>
                <div className="bg-white p-5 border-l-4 border-[#1C1917] border-y border-r border-[#E8E5DF] shadow-xs rounded-lg h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2 bg-[#F5F2EB] w-fit mb-3 text-[#1C1917] rounded-lg">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="font-heading font-bold text-[#1C1917] text-sm mb-1 uppercase tracking-tight">Multi-Sector</div>
                  <div className="text-xs text-[#57534E] leading-snug">
                    Residential • Commercial • Industrial facilities & sites
                  </div>
                </div>
              </RevealCard>

              {/* Card 3 */}
              <RevealCard delay={0.36}>
                <div className="bg-white p-5 border-l-4 border-[#1C1917] border-y border-r border-[#E8E5DF] shadow-xs rounded-lg h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2 bg-[#F5F2EB] w-fit mb-3 text-[#1C1917] rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="font-heading font-bold text-[#1C1917] text-sm mb-1 uppercase tracking-tight">Customer-Focused</div>
                  <div className="text-xs text-[#57534E] leading-snug">
                    Customized solutions tailored to project requirements
                  </div>
                </div>
              </RevealCard>
            </div>

            {/* CTA action */}
            <RevealButton delay={0.42}>
              <div className="pt-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="bg-[#E14D2A] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest shadow-xs hover:bg-[#C83B1B] transition-all inline-flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Discuss Your Project Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealButton>
          </div>
        </div>
      </div>
    </section>
  );
};

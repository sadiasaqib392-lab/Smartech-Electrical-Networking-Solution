import React from 'react';
import { SmartechLogo } from './SmartechLogo';
import { Shield, Layers, Users, ArrowRight } from 'lucide-react';
import cctvSecurityImg from '../assets/images/cctv_smart_security_1787468722184.jpg';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Imagery and Geometric Framing */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative overflow-hidden shadow-md border border-gray-200 bg-[#0A192F] group rounded-xs">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={cctvSecurityImg}
                  alt="Smartech Smart Security and Surveillance Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient Bottom Banner */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A192F]/95 border-l-4 border-[#1D4ED8] text-white rounded-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1D4ED8]/20 border border-[#1D4ED8]/40 text-[#38BDF8] rounded-xs">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-white uppercase tracking-tight">Turnkey Technical Execution</div>
                    <div className="text-xs text-blue-200/80">From concept blueprint to live commissioning</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Logo Accent Box */}
            <div className="mt-4 p-4 bg-white border border-gray-200 flex items-center justify-between shadow-xs rounded-xs">
              <SmartechLogo size="sm" variant="horizontal" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Sialkot, Pakistan</span>
            </div>
          </div>

          {/* Right Column: Narrative and Geometric Pillars */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            <div>
              <span className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest mb-3 rounded-xs">
                About Smartech
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
                Engineering Solutions Built Around <span className="text-[#1D4ED8]">Your Requirements</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-[#0F172A]">Smartech Electrical & Networking Solution</strong> is an Engineering & Technical Solutions company providing complete solutions for residential, commercial and industrial clients.
              </p>
              <p>
                Our business combines professional installation and technical services with the supply of reliable products and equipment.
              </p>
              <p>
                From system design and product selection to installation, configuration, testing, commissioning and after-sales support, we provide complete solutions from one reliable source.
              </p>
            </div>

            {/* Geometric Feature Pillar Cards with Left Accent Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Card 1 */}
              <div className="bg-white p-5 border-l-4 border-[#1D4ED8] border-y border-r border-gray-200 shadow-xs rounded-xs">
                <div className="p-2 bg-blue-50 w-fit mb-3 text-[#1D4ED8] rounded-xs">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-[#0F172A] text-sm mb-1 uppercase tracking-tight">Complete Scope</div>
                <div className="text-xs text-slate-500 leading-snug">
                  Design • Supply • Install • Test • Commission • Maintain
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 border-l-4 border-[#0F172A] border-y border-r border-gray-200 shadow-xs rounded-xs">
                <div className="p-2 bg-slate-100 w-fit mb-3 text-[#0F172A] rounded-xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-[#0F172A] text-sm mb-1 uppercase tracking-tight">Multi-Sector</div>
                <div className="text-xs text-slate-500 leading-snug">
                  Residential • Commercial • Industrial facilities & sites
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-5 border-l-4 border-[#0F172A] border-y border-r border-gray-200 shadow-xs rounded-xs">
                <div className="p-2 bg-slate-100 w-fit mb-3 text-[#0F172A] rounded-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div className="font-heading font-bold text-[#0F172A] text-sm mb-1 uppercase tracking-tight">Customer-Focused</div>
                <div className="text-xs text-slate-500 leading-snug">
                  Customized solutions tailored to project requirements
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#1D4ED8] text-white px-6 py-2.5 rounded-xs text-xs font-bold uppercase tracking-widest shadow-xs hover:bg-[#0A192F] transition-colors inline-flex items-center gap-2"
              >
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

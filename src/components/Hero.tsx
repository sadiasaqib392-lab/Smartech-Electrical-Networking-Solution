import React from 'react';
import { SmartechLogo } from './SmartechLogo';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowRight, MessageSquare, ShieldCheck, Sun, Camera, Network, Zap, Home, Shield, Activity, Wrench, Building2, Sparkles } from 'lucide-react';
import solarEngImg from '../assets/images/solar_electrical_eng_1787468705473.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigateToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onNavigateToServices }) => {
  const servicePills = [
    { label: 'Solar PV', icon: Sun },
    { label: 'Electrical Wiring', icon: Zap },
    { label: 'CCTV Security', icon: Camera },
    { label: 'Networking', icon: Network },
    { label: 'Smart Home', icon: Home },
    { label: 'Earthing & Lightning', icon: Shield },
    { label: 'VFD & Pumps', icon: Activity },
    { label: 'Electrical Maintenance', icon: Wrench },
    { label: 'EPC Projects', icon: Building2 },
  ];

  return (
    <section id="home" className="relative pt-24 lg:pt-28 bg-[#0A192F] text-white overflow-hidden border-b border-blue-950">
      {/* Background Geometric Subtle Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4ED8] opacity-10 -mr-32 -mt-32 rounded-full pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center text-left relative z-10">
            {/* Geometric Eyebrow Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs shadow-xs">
                Engineering Excellence
              </span>
              <span className="text-blue-200/80 text-xs font-semibold uppercase tracking-wider">
                📍 Sialkot, Pakistan
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Complete <span className="text-[#38BDF8]">Engineering</span> & Technology Solutions
            </h1>

            {/* Supporting Text */}
            <p className="text-blue-100/80 text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-normal">
              We design, supply, install, test, commission and maintain reliable technical solutions for residential, commercial and industrial projects.
            </p>

            {/* Major Services Geometric Highlight Strip */}
            <div className="mb-8">
              <div className="text-[10px] uppercase tracking-widest text-blue-300 font-bold mb-3 flex items-center gap-2">
                <span className="text-[#38BDF8]">⚡</span>
                <span>Core Technical Disciplines</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {servicePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={pill.label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#0F224A] border-l-2 border-[#38BDF8] text-xs font-bold uppercase tracking-wider text-blue-100 hover:bg-[#162D61] transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{pill.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons with Geometric Polish */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-quote-btn"
                onClick={onOpenQuoteModal}
                className="bg-[#1D4ED8] hover:bg-[#2563EB] text-white px-8 py-4 font-bold uppercase text-sm tracking-widest shadow-md border border-[#3B82F6]/50 transition-colors rounded-xs text-center inline-flex items-center justify-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.defaultWhatsAppMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-400/30 text-white bg-[#0F1E3D] hover:bg-white hover:text-[#0A192F] px-8 py-4 font-bold uppercase text-sm tracking-widest transition-colors rounded-xs text-center inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Structural Trust Marks */}
            <div className="mt-10 pt-6 border-t border-blue-950 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-blue-200/80">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-[#38BDF8] font-bold">✓</span>
                <span>Single-Source Provider</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="text-[#38BDF8] font-bold">✓</span>
                <span>Certified Engineering Standards</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="text-[#38BDF8] font-bold">✓</span>
                <span>Full Testing & Handover</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 cols) with Single High-Resolution Image */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full flex flex-col justify-end border-t lg:border-t-0 lg:border-l border-blue-950 overflow-hidden">
            {/* Background Engineering Image with Gradient */}
            <div className="absolute inset-0 bg-cover bg-center bg-[#0F1E3D]">
              <img
                src={solarEngImg}
                alt="Smartech Solar and Industrial Electrical Engineering"
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/40 via-transparent to-transparent hidden lg:block" />
            </div>

            {/* Floating Smartech Badge */}
            <div className="absolute top-6 right-6 z-10 bg-[#0A192F]/90 px-4 py-2 border border-blue-800 shadow-md">
              <SmartechLogo size="sm" theme="dark" variant="horizontal" showSubtitle={false} />
            </div>

            {/* Geometric Bottom Stat Callouts */}
            <div className="relative z-10 p-6 sm:p-8 bg-gradient-to-t from-[#0A192F] to-transparent text-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#38BDF8] pl-4">
                  <div className="text-2xl font-bold font-heading">Complete</div>
                  <div className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">One-Stop Solutions</div>
                </div>
                <div className="border-l-2 border-[#38BDF8] pl-4">
                  <div className="text-2xl font-bold font-heading">Multi-Sector</div>
                  <div className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Industrial & Residential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

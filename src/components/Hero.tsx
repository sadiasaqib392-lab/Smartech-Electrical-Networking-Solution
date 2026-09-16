import React from 'react';
import { SmartechLogo } from './SmartechLogo';
import { COMPANY_INFO } from '../data/companyData';
import {
  MotionReveal,
  ScrollParallax,
  RevealHeading,
  RevealText,
  RevealButton,
  RevealImage,
  RevealStat,
  RevealIcon,
} from './MotionReveal';
import { ArrowRight, MessageSquare, ShieldCheck, Sun, Camera, Network, Zap, Home, Shield, Activity, Wrench, Building2, Check } from 'lucide-react';
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
    <section id="home" className="relative py-12 lg:py-16 bg-[#1C1917] text-white overflow-hidden border-b border-stone-800">
      {/* Background Subtle Warm Glows with Scroll Parallax */}
      <ScrollParallax offset={25} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E14D2A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl" />
      </ScrollParallax>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left relative z-10">
            {/* Eyebrow Tag */}
            <RevealText delay={0.05} className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#E14D2A] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-md shadow-xs">
                Engineering Excellence
              </span>
              <span className="text-stone-300 text-xs font-semibold uppercase tracking-wider">
                📍 Sialkot, Pakistan
              </span>
            </RevealText>

            {/* Main Headline */}
            <RevealHeading delay={0.1}>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Complete <span className="text-[#F97316]">Engineering</span> & Technology Solutions
              </h1>
            </RevealHeading>

            {/* Supporting Text */}
            <RevealText delay={0.16}>
              <p className="text-stone-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-normal">
                We design, supply, install, test, commission and maintain reliable technical solutions for residential, commercial and industrial projects.
              </p>
            </RevealText>

            {/* Major Services Highlight Strip with Staggered Badges */}
            <div className="mb-8">
              <RevealText delay={0.2} className="text-[10px] uppercase tracking-widest text-[#FB923C] font-bold mb-3 flex items-center gap-2">
                <span>⚡</span>
                <span>Core Technical Disciplines</span>
              </RevealText>
              <div className="flex flex-wrap gap-2">
                {servicePills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <RevealIcon key={pill.label} delay={0.22 + idx * 0.04}>
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#292524] border-l-2 border-[#E14D2A] text-xs font-bold uppercase tracking-wider text-stone-200 hover:bg-[#332E2B] transition-all"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#F97316]" />
                        <span>{pill.label}</span>
                      </div>
                    </RevealIcon>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons with RevealButton */}
            <RevealButton delay={0.28}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-quote-btn"
                  onClick={onOpenQuoteModal}
                  className="bg-[#E14D2A] hover:bg-[#C83B1B] text-white px-8 py-3.5 font-bold uppercase text-xs tracking-widest shadow-md transition-all rounded-lg text-center inline-flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
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
                  className="border border-stone-700 text-white bg-[#292524] hover:bg-white hover:text-[#1C1917] px-8 py-3.5 font-bold uppercase text-xs tracking-widest transition-all rounded-lg text-center inline-flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </RevealButton>

            {/* Structural Trust Marks */}
            <RevealText delay={0.34}>
              <div className="mt-10 pt-6 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-300">
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-[#E14D2A] font-bold">✓</span>
                  <span>Single-Source Provider</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-[#E14D2A] font-bold">✓</span>
                  <span>Certified Engineering Standards</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-[#E14D2A] font-bold">✓</span>
                  <span>Full Testing & Handover</span>
                </div>
              </div>
            </RevealText>
          </div>

          {/* Right Visual Column with Subtle Zoom and Reveal */}
          <div className="lg:col-span-5 relative">
            <RevealImage delay={0.18}>
              <div className="group relative rounded-xl overflow-hidden border border-stone-700 shadow-xl bg-[#292524] aspect-[4/3] lg:aspect-[5/4] transition-all duration-300 hover:border-stone-500 hover:shadow-2xl">
                <img
                  src={solarEngImg}
                  alt="Smartech Solar and Industrial Electrical Engineering"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/40 to-transparent pointer-events-none" />

                {/* Floating Smartech Badge */}
                <div className="absolute top-4 right-4 z-10 bg-[#1C1917]/90 px-3.5 py-1.5 rounded-lg border border-stone-700 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <SmartechLogo size="sm" theme="dark" variant="horizontal" showSubtitle={false} />
                </div>

                {/* Bottom Stat Callouts with RevealStat */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 bg-[#1C1917]/90 backdrop-blur-sm rounded-lg border border-stone-700 text-white transition-all duration-300 group-hover:bg-[#1C1917]/95">
                  <div className="grid grid-cols-2 gap-4">
                    <RevealStat delay={0.25} className="border-l-2 border-[#E14D2A] pl-3">
                      <div className="text-xl font-bold font-heading">Complete</div>
                      <div className="text-[10px] text-stone-300 uppercase tracking-widest font-bold">One-Stop Solutions</div>
                    </RevealStat>
                    <RevealStat delay={0.3} className="border-l-2 border-[#F97316] pl-3">
                      <div className="text-xl font-bold font-heading">Multi-Sector</div>
                      <div className="text-[10px] text-stone-300 uppercase tracking-widest font-bold">Industrial & Residential</div>
                    </RevealStat>
                  </div>
                </div>
              </div>
            </RevealImage>
          </div>
        </div>
      </div>
    </section>
  );
};


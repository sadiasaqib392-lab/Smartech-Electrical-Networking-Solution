import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles, 
  ArrowRight, 
  SunMedium, 
  Camera, 
  Network, 
  Zap, 
  Home,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { SmartechLogo } from './SmartechLogo';

import solarImg from '../assets/images/solar_electrical_eng_1787468705473.jpg';
import cctvImg from '../assets/images/cctv_smart_security_1787468722184.jpg';
import networkImg from '../assets/images/network_datacenter_cabling_1787468735328.jpg';
import industrialImg from '../assets/images/industrial_vfd_panel_1787589351248.jpg';
import smartHomeImg from '../assets/images/smart_home_lighting_iot_1787589330044.jpg';

interface HomeAutomaticImageSliderProps {
  onOpenQuoteModal?: (serviceTitle?: string) => void;
  onNavigateToServices?: () => void;
}

export const HomeAutomaticImageSlider: React.FC<HomeAutomaticImageSliderProps> = ({
  onOpenQuoteModal,
  onNavigateToServices,
}) => {
  const slides = [
    {
      id: 'slide-solar',
      image: solarImg,
      badge: 'Solar PV & Net-Metering',
      title: 'Tier-1 High-Yield Solar Power & Hybrid Inverters',
      description: 'Turnkey on-grid, hybrid, and off-grid solar installations with Tier-1 bifacial modules, LiFePO4 batteries, and GEPCO bi-directional net-metering synchronization.',
      icon: SunMedium,
      highlight: '25-Year Panel Output Warranty • AEDB / NEPRA Certified',
      serviceName: 'Solar PV Solutions',
    },
    {
      id: 'slide-cctv',
      image: cctvImg,
      badge: '4K AI CCTV & Smart Surveillance',
      title: 'Ultra HD Digital Surveillance & Perimeter AI Alerts',
      description: 'AcuSense human/vehicle smart classification, ColorVu 24/7 night vision, multi-bay enterprise NVRs, and secure remote mobile monitoring.',
      icon: Camera,
      highlight: '4K Ultra HD • Instant AI Alerts • Zero False Triggers',
      serviceName: 'CCTV Security Solutions',
    },
    {
      id: 'slide-network',
      image: networkImg,
      badge: 'Enterprise Networking & Data Infrastructure',
      title: 'Fluke Tested Structured Cabling & 10G Optical Fiber',
      description: 'Cat6/Cat6A structured data cabling, 42U/24U server rack architectures, Gigabit Layer-2/3 PoE+ switches, and seamless Wi-Fi 6 wireless mesh.',
      icon: Network,
      highlight: 'Fluke DSX-8000 Certified • 10Gbps Fiber Backbone',
      serviceName: 'Networking Solutions',
    },
    {
      id: 'slide-power',
      image: industrialImg,
      badge: 'Industrial Power & Motor Control',
      title: '3-Phase Main Distribution Boards & VFD Inverter Panels',
      description: 'Heavy-duty power distribution switchgear, Schneider MCCBs, VFD motor control panels for solar tubewells, and low-resistance chemical earthing.',
      icon: Zap,
      highlight: 'PEC Code Compliant • Thermal Hotspot Audits',
      serviceName: 'Electrical Wiring & Installation',
    },
    {
      id: 'slide-smart',
      image: smartHomeImg,
      badge: 'Next-Gen Smart Home Automation',
      title: 'Luxury IoT Automation, Touch Switches & Scene Controls',
      description: 'Capacitive glass touch switches, motorized curtain tracks, biometric smart door locks, HVAC climate control, and voice assistant integrations.',
      icon: Home,
      highlight: 'Zigbee 3.0 Mesh • Mobile & Voice Integration',
      serviceName: 'Smart Home Automation',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Automatic slide cycle: strictly 1.5 seconds (1500ms)
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 1500);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, isPlaying]);

  const activeSlide = slides[currentIndex];
  const ActiveIcon = activeSlide.icon;

  return (
    <section 
      id="engineering-showcase-slider"
      className="py-12 lg:py-16 bg-[#0A192F] text-white relative overflow-hidden border-b border-blue-950 select-none group/showcase"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Smartech Automatic Multi-Image Engineering Showcase (1.5-Second Slides)"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1D4ED8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1D4ED8] text-white text-[10px] font-bold uppercase tracking-widest rounded-xs shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>Automatic Engineering Showcase • 1.5s Slides</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
              Featured Project Installations & Turnkey Deployments
            </h2>
            <p className="text-xs sm:text-sm text-blue-200/80">
              Browse our live installations across Solar PV, 4K Security, Data Networking, Industrial Switchgear, and IoT Automation.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Slide Index Badge */}
            <div className="px-3 py-1.5 bg-[#0F224A] border border-blue-800 text-xs font-mono font-bold text-blue-200 rounded-xs">
              Slide 0{currentIndex + 1} / 0{slides.length}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
              className="p-2 bg-[#0F224A] hover:bg-[#1D4ED8] text-blue-200 hover:text-white border border-blue-800 rounded-xs transition-colors cursor-pointer"
              title={isPlaying ? 'Pause auto-slide (1.5s)' : 'Resume auto-slide'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Master Slider Container */}
        <div className="relative w-full h-[440px] sm:h-[480px] lg:h-[500px] rounded-xs overflow-hidden border border-blue-900 shadow-xl bg-[#0F224A]">
          {/* Images Stack with Smooth 600ms Crossfade Transition */}
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-600 ease-in-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                {/* Gradient Overlays for High Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent sm:w-4/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
              </div>
            );
          })}

          {/* Floating Logo Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-[#0A192F]/90 px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-800 rounded-xs shadow-md">
            <SmartechLogo size="sm" theme="dark" variant="horizontal" showSubtitle={false} />
          </div>

          {/* Content Card Overlay */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between py-8 sm:py-10">
            {/* Top Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1D4ED8] text-white text-[11px] font-bold uppercase tracking-widest rounded-xs shadow-md">
                <ActiveIcon className="w-3.5 h-3.5" />
                <span>{activeSlide.badge}</span>
              </div>
            </div>

            {/* Middle Active Slide Details */}
            <div className="max-w-xl space-y-3 sm:space-y-4 my-auto">
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug drop-shadow-md">
                {activeSlide.title}
              </h3>

              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                {activeSlide.description}
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#38BDF8] bg-blue-950/80 px-3 py-1.5 rounded-xs border border-blue-800/80">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeSlide.highlight}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal(activeSlide.serviceName)}
                  className="px-5 py-2.5 bg-[#1D4ED8] hover:bg-white hover:text-[#0A192F] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Specific Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigateToServices && onNavigateToServices()}
                  className="px-5 py-2.5 bg-[#0F224A]/90 hover:bg-white hover:text-[#0A192F] text-white border border-blue-700/60 text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore 9 Disciplines</span>
                </button>
              </div>
            </div>

            {/* Bottom 1.5-Second Cycle Progress Line and Dot Indicators */}
            <div className="space-y-3 pt-2">
              <div className="w-full bg-blue-950/80 h-1 rounded-full overflow-hidden">
                <div
                  key={currentIndex}
                  className={`h-full bg-gradient-to-r from-[#1D4ED8] via-[#38BDF8] to-emerald-400 ${
                    isPlaying ? 'animate-[slideProgress_1.5s_linear_infinite]' : 'w-full opacity-60'
                  }`}
                  style={{
                    animationDuration: '1500ms',
                  }}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                {/* Dot / Pill Indicators */}
                <div className="flex items-center gap-2">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex
                          ? 'w-8 bg-[#38BDF8] shadow-xs'
                          : 'w-2 bg-blue-900 hover:bg-blue-600'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-[11px] font-mono text-blue-300">
                  Auto-Slide: 1.5s | Smooth Crossfade
                </div>
              </div>
            </div>
          </div>

          {/* Left / Right Manual Navigation Arrow Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-[#0A192F]/85 hover:bg-[#1D4ED8] text-white border border-blue-700/80 rounded-xs flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-[#0A192F]/85 hover:bg-[#1D4ED8] text-white border border-blue-700/80 rounded-xs flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

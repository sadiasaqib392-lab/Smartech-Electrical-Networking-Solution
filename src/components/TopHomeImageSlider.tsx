import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  SunMedium, 
  Camera, 
  Network, 
  Zap, 
  Home 
} from 'lucide-react';
import { SmartechLogo } from './SmartechLogo';

import solarImg from '../assets/images/solar_electrical_eng_1787468705473.jpg';
import cctvImg from '../assets/images/cctv_smart_security_1787468722184.jpg';
import networkImg from '../assets/images/network_datacenter_cabling_1787468735328.jpg';
import industrialImg from '../assets/images/industrial_vfd_panel_1787589351248.jpg';
import smartHomeImg from '../assets/images/smart_home_lighting_iot_1787589330044.jpg';

interface TopHomeImageSliderProps {
  onOpenQuoteModal?: (serviceTitle?: string) => void;
  onNavigateToServices?: () => void;
}

export const TopHomeImageSlider: React.FC<TopHomeImageSliderProps> = ({
  onOpenQuoteModal,
  onNavigateToServices,
}) => {
  const slides = [
    {
      id: 'slide-solar',
      image: solarImg,
      badge: 'Solar Energy & Net-Metering',
      title: 'Tier-1 Solar PV Systems & Hybrid Inverters',
      description: 'On-Grid, Hybrid & Off-Grid commercial and residential solar installations with AEDB/GEPCO net-metering synchronization.',
      icon: SunMedium,
      highlight: '25-Year Warranty • 100% Tier-1 Guaranteed',
      serviceName: 'Solar PV Solutions',
    },
    {
      id: 'slide-cctv',
      image: cctvImg,
      badge: 'Surveillance & AI Security',
      title: '4K AcuSense CCTV & Perimeter Protection',
      description: 'Ultra HD digital IP surveillance, ColorVu 24/7 night vision, human/vehicle classification, and multi-bay NVR servers.',
      icon: Camera,
      highlight: 'AI Smart Alerts • Remote 24/7 Mobile Live View',
      serviceName: 'CCTV Security Solutions',
    },
    {
      id: 'slide-network',
      image: networkImg,
      badge: 'Enterprise Networking',
      title: 'Structured Cabling, Server Racks & 10G Fiber',
      description: 'Fluke-certified Cat6/Cat6A backbone links, 42U server racks, Layer-2/3 PoE+ switches, and seamless Wi-Fi 6 mesh coverage.',
      icon: Network,
      highlight: 'Fluke Tested • 10Gbps High-Speed Optical Fiber',
      serviceName: 'Networking Solutions',
    },
    {
      id: 'slide-power',
      image: industrialImg,
      badge: 'Power & Motor Control',
      title: 'Industrial 3-Phase MDB & VFD Control Panels',
      description: 'Heavy-duty power distribution switchgear, Schneider MCCBs, VFD motor drives for tubewells, and low-resistance chemical earthing.',
      icon: Zap,
      highlight: 'PEC Code Compliant • Thermal Hotspot Inspection',
      serviceName: 'Electrical Wiring & Installation',
    },
    {
      id: 'slide-smart',
      image: smartHomeImg,
      badge: 'Smart Automation & IoT',
      title: 'Next-Gen Smart Home Living & Touch Control',
      description: 'Capacitive glass touch switches, motorized curtains, biometric smart door locks, scene automations, and voice assistant controls.',
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

  // Automatic slide cycle: strictly 1 second (1000ms)
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 1000);
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
    <div
      className="relative w-full bg-[#0A192F] text-white overflow-hidden border-b-2 border-[#1D4ED8] shadow-lg select-none group/topslider"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Smartech Top Automatic Engineering Slider (1-Second Auto-Transition)"
    >
      {/* Background Images Carousel with 1-second smooth crossfade */}
      <div className="relative h-[400px] sm:h-[440px] lg:h-[460px] w-full overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
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

              {/* Sophisticated Dark Overlays for Extreme Contrast & Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/85 to-[#0A192F]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]/60" />
            </div>
          );
        })}

        {/* Content Container positioned above images */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-6 sm:py-8">
          {/* Top Row: Live Auto-Slider Badge + Smartech Logo Tag */}
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F224A]/90 border border-blue-500/50 rounded-xs backdrop-blur-xs shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-blue-200">
                Auto Showcase • 1s Transition
              </span>
            </div>

            <div className="bg-[#0A192F]/90 px-3 py-1.5 border border-blue-800 rounded-xs shadow-xs hidden sm:block">
              <SmartechLogo size="sm" theme="dark" variant="horizontal" showSubtitle={false} />
            </div>
          </div>

          {/* Center Main Copy */}
          <div className="max-w-2xl space-y-3 sm:space-y-4 my-auto">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#1D4ED8] text-white text-[11px] font-bold uppercase tracking-widest rounded-xs shadow-xs">
              <ActiveIcon className="w-3.5 h-3.5" />
              <span>{activeSlide.badge}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {activeSlide.title}
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-blue-100/90 leading-relaxed line-clamp-2 sm:line-clamp-3">
              {activeSlide.description}
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#38BDF8] bg-blue-950/80 px-3 py-1 rounded-xs border border-blue-800/80">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeSlide.highlight}</span>
            </div>

            {/* Interactive Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal(activeSlide.serviceName)}
                className="px-4 sm:px-5 py-2.5 bg-[#1D4ED8] hover:bg-white hover:text-[#0A192F] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToServices && onNavigateToServices()}
                className="px-4 sm:px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-blue-400/40 text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Full Specs</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: 1-Second Animated Progress Bar, Indicators, Counter & Play/Pause */}
          <div className="space-y-3 pt-2">
            {/* 1-Second Visual Progress Line */}
            <div className="w-full bg-blue-950/90 h-1 rounded-full overflow-hidden">
              <div
                key={currentIndex}
                className={`h-full bg-gradient-to-r from-[#1D4ED8] via-[#38BDF8] to-emerald-400 ${
                  isPlaying ? 'animate-[topSlideProgress_1s_linear_infinite]' : 'w-full opacity-60'
                }`}
                style={{
                  animationDuration: '1000ms',
                }}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              {/* Interactive Dots / Pills */}
              <div className="flex items-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? 'w-7 sm:w-10 bg-[#38BDF8] shadow-xs'
                        : 'w-2 sm:w-2.5 bg-blue-900 hover:bg-blue-600'
                    }`}
                  />
                ))}
              </div>

              {/* Controls: Slide Counter (e.g. 01 / 05) + Play/Pause */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-blue-200">
                  0{currentIndex + 1} <span className="text-blue-500">/</span> 0{slides.length}
                </span>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause 2s Auto-Slider' : 'Resume 2s Auto-Slider'}
                  className="p-1.5 text-blue-300 hover:text-white bg-[#0F224A] hover:bg-[#1D4ED8] border border-blue-700/60 rounded-xs transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause 2s auto-slide' : 'Resume 2s auto-slide'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Left & Right Arrow Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-[#0A192F]/85 hover:bg-[#1D4ED8] text-white border border-blue-500/50 rounded-xs flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-[#0A192F]/85 hover:bg-[#1D4ED8] text-white border border-blue-500/50 rounded-xs flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

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
import { MotionReveal } from './MotionReveal';

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
      className="py-12 lg:py-16 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden border-b border-[#E8E5DF] select-none group/showcase"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Smartech Automatic Multi-Image Engineering Showcase (1.5-Second Slides)"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFF7ED] text-[#E14D2A] border border-[#FED7AA] text-[10px] font-bold uppercase tracking-widest rounded-md shadow-2xs">
                <Layers className="w-3.5 h-3.5" />
                <span>Automatic Engineering Showcase • 1.5s Slides</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#1C1917] tracking-tight">
                Featured Project Installations & Turnkey Deployments
              </h2>
              <p className="text-xs sm:text-sm text-[#57534E]">
                Browse our live installations across Solar PV, 4K Security, Data Networking, Industrial Switchgear, and IoT Automation.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              {/* Slide Index Badge */}
              <div className="px-3 py-1.5 bg-white border border-[#E8E5DF] text-xs font-mono font-bold text-[#57534E] rounded-lg shadow-2xs">
                Slide 0{currentIndex + 1} / 0{slides.length}
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
                className="p-2 bg-white hover:bg-[#E14D2A] text-[#1C1917] hover:text-white border border-[#E8E5DF] rounded-lg transition-colors cursor-pointer shadow-2xs"
                title={isPlaying ? 'Pause auto-slide (1.5s)' : 'Resume auto-slide'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Master Slider Container */}
        <MotionReveal delay={0.1}>
          <div className="relative w-full h-[440px] sm:h-[480px] lg:h-[500px] rounded-2xl overflow-hidden border border-[#E8E5DF] shadow-xl bg-[#1C1917]">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917] via-[#1C1917]/85 to-transparent sm:w-4/5" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/40 to-transparent" />
                </div>
              );
            })}

            {/* Floating Logo Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-[#1C1917]/90 px-3 py-1.5 sm:px-4 sm:py-2 border border-stone-700 rounded-lg shadow-md">
              <SmartechLogo size="sm" theme="dark" variant="horizontal" showSubtitle={false} />
            </div>

            {/* Content Card Overlay */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between py-8 sm:py-10">
              {/* Top Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E14D2A] text-white text-[11px] font-bold uppercase tracking-widest rounded-md shadow-md">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>{activeSlide.badge}</span>
                </div>
              </div>

              {/* Middle Active Slide Details */}
              <div className="max-w-xl space-y-3 sm:space-y-4 my-auto">
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug drop-shadow-md">
                  {activeSlide.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                  {activeSlide.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF8A65] bg-[#292524] px-3 py-1.5 rounded-md border border-stone-700">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeSlide.highlight}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenQuoteModal && onOpenQuoteModal(activeSlide.serviceName)}
                    className="px-5 py-2.5 bg-[#E14D2A] hover:bg-[#C83B1B] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Specific Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigateToServices && onNavigateToServices()}
                    className="px-5 py-2.5 bg-[#292524] hover:bg-stone-700 text-white border border-stone-600 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore 9 Disciplines</span>
                  </button>
                </div>
              </div>

              {/* Bottom 1.5-Second Cycle Progress Line and Dot Indicators */}
              <div className="space-y-3 pt-2">
                <div className="w-full bg-stone-800 h-1 rounded-full overflow-hidden">
                  <div
                    key={currentIndex}
                    className={`h-full bg-gradient-to-r from-[#E14D2A] via-[#F97316] to-[#FB923C] ${
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
                            ? 'w-8 bg-[#E14D2A] shadow-xs'
                            : 'w-2 bg-stone-700 hover:bg-stone-500'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-stone-400">
                    Auto-Slide: 1.5s | Smooth Crossfade
                  </div>
                </div>
              </div>
            </div>

            {/* Left / Right Manual Navigation Arrow Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-[#1C1917]/85 hover:bg-[#E14D2A] text-white border border-stone-700 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-[#1C1917]/85 hover:bg-[#E14D2A] text-white border border-stone-700 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

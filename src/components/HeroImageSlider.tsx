import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { SmartechLogo } from './SmartechLogo';

import solarImg from '../assets/images/solar_electrical_eng_1787468705473.jpg';
import cctvImg from '../assets/images/cctv_smart_security_1787468722184.jpg';
import networkImg from '../assets/images/network_datacenter_cabling_1787468735328.jpg';
import industrialImg from '../assets/images/industrial_vfd_panel_1787589351248.jpg';
import smartHomeImg from '../assets/images/smart_home_lighting_iot_1787589330044.jpg';

export interface SlideItem {
  id: string;
  image: string;
  title: string;
  category: string;
  tagline: string;
}

export const HeroImageSlider: React.FC = () => {
  const slides: SlideItem[] = [
    {
      id: 'solar-pv',
      image: solarImg,
      title: 'Solar PV & Net-Metering Solutions',
      category: 'Solar Energy',
      tagline: 'Tier-1 Bifacial PV & Hybrid Inverters',
    },
    {
      id: 'cctv-sec',
      image: cctvImg,
      title: '4K AI CCTV & Smart Surveillance',
      category: 'Security Systems',
      tagline: 'AcuSense Human/Vehicle Detection',
    },
    {
      id: 'network-dc',
      image: networkImg,
      title: 'Structured Cabling & Server Racks',
      category: 'Networking Infrastructure',
      tagline: 'Fluke Tested Cat6A & Fiber Backbone',
    },
    {
      id: 'industrial-vfd',
      image: industrialImg,
      title: 'Industrial 3-Phase MDB & VFD Panels',
      category: 'Power Engineering',
      tagline: 'MCCB Switchgear & Pump Automation',
    },
    {
      id: 'smart-iot',
      image: smartHomeImg,
      title: 'Smart Home Automation & IoT',
      category: 'Smart Living',
      tagline: 'Touch Switches & Mobile App Control',
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

  // Auto-play interval set to strictly 1 second (1000ms)
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

  return (
    <div
      className="relative w-full h-full min-h-[380px] lg:min-h-full overflow-hidden select-none group/slider bg-[#1C1917]"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Smartech Automated Engineering Showcase Slider"
    >
      {/* Slides Images Stack with Smooth Cross-fade Transition */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Gradient Overlays for High Legibility & Seamless Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/70 via-transparent to-transparent hidden lg:block" />
          </div>
        );
      })}

      {/* Floating Smartech Brand Tag */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-[#1C1917]/90 backdrop-blur-xs px-3 py-1.5 sm:px-4 sm:py-2 border border-stone-700/80 shadow-md rounded-lg">
        <SmartechLogo size="sm" theme="dark" variant="horizontal" showSubtitle={false} />
      </div>

      {/* Left / Right Navigation Manual Arrow Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-[#1C1917]/80 hover:bg-[#E14D2A] text-white border border-stone-700/80 rounded-lg flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E14D2A]"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-[#1C1917]/80 hover:bg-[#E14D2A] text-white border border-stone-700/80 rounded-lg flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E14D2A]"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Badge & Title Overlay with 3s Timer Progress Indicator */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1C1917]/90 border border-stone-700 rounded-lg backdrop-blur-xs shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-200">
            {slides[currentIndex].category}
          </span>
        </div>
      </div>

      {/* Bottom Content Area: Active Slide Tagline, Dots, Auto-play Indicator & Stat Callouts */}
      <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/90 to-transparent text-white space-y-4">
        {/* Active Slide Text */}
        <div className="transition-all duration-300">
          <div className="text-xs font-mono font-bold text-[#FF8A65] uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{slides[currentIndex].tagline}</span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-black text-white tracking-tight drop-shadow-xs">
            {slides[currentIndex].title}
          </h3>
        </div>

        {/* 1-Second Cycle Animated Progress Line */}
        <div className="w-full bg-stone-800 h-1 rounded-full overflow-hidden">
          <div
            key={currentIndex}
            className={`h-full bg-gradient-to-r from-[#E14D2A] to-[#FF8A65] ${
              isPlaying ? 'animate-[slideProgress_1s_linear_infinite]' : 'w-full opacity-60'
            }`}
            style={{
              animationDuration: '1000ms',
            }}
          />
        </div>

        {/* Bottom Bar: Indicators & Controls */}
        <div className="flex items-center justify-between gap-4 pt-1">
          {/* Slide Indicator Dots / Pills */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 sm:w-8 bg-[#E14D2A] shadow-xs'
                    : 'w-2 bg-stone-700 hover:bg-stone-500'
                }`}
              />
            ))}
          </div>

          {/* Controls: Slide Counter (e.g. 01 / 05) & Play/Pause Button */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-stone-300">
              0{currentIndex + 1} <span className="text-[#E14D2A]">/</span> 0{slides.length}
            </span>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause Auto-Slider' : 'Resume Auto-Slider'}
              className="p-1.5 text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700 border border-stone-700 rounded-lg transition-colors cursor-pointer"
              title={isPlaying ? 'Pause auto slide (3s)' : 'Resume auto slide'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Key Statistics Callouts */}
        <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-3">
          <div className="border-l-2 border-[#E14D2A] pl-3">
            <div className="text-lg sm:text-xl font-bold font-heading">Complete</div>
            <div className="text-[9px] text-stone-300 uppercase tracking-widest font-bold">Turnkey Solutions</div>
          </div>
          <div className="border-l-2 border-[#E14D2A] pl-3">
            <div className="text-lg sm:text-xl font-bold font-heading">Multi-Sector</div>
            <div className="text-[9px] text-stone-300 uppercase tracking-widest font-bold">Industrial & Domestic</div>
          </div>
        </div>
      </div>
    </div>
  );
};

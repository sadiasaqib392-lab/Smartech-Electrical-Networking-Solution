import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { SmartechLogo } from './SmartechLogo';

import pakSolarImg from '../assets/images/pak_solar_engineers_1787655302518.jpg';
import pakCctvImg from '../assets/images/pak_cctv_technicians_1787655322618.jpg';
import pakFiberImg from '../assets/images/pak_fiber_network_1787655340390.jpg';
import pakIndustrialImg from '../assets/images/pak_industrial_panel_1787655360830.jpg';
import pakInverterImg from '../assets/images/pak_inverter_engineer_1787655405064.jpg';

export interface TopSlideItem {
  id: string;
  image: string;
  alt: string;
}

export const TopHomeImageSlider: React.FC = () => {
  const slides: TopSlideItem[] = [
    {
      id: 'pak-solar-engineering',
      image: pakSolarImg,
      alt: 'Smartech Pakistani Solar PV Engineers Rooftop Installation',
    },
    {
      id: 'pak-cctv-surveillance',
      image: pakCctvImg,
      alt: 'Smartech 4K AcuSense CCTV Smart Security Pakistani Technician',
    },
    {
      id: 'pak-network-fiber',
      image: pakFiberImg,
      alt: 'Smartech Optical Fiber Splicing & Datacenter Server Racks Pakistan',
    },
    {
      id: 'pak-industrial-vfd',
      image: pakIndustrialImg,
      alt: 'Smartech 3-Phase Industrial Switchgear & VFD Panel Engineering Pakistan',
    },
    {
      id: 'pak-inverter-testing',
      image: pakInverterImg,
      alt: 'Smartech Hybrid Inverter & Net-Metering Synchronization Inspection Pakistan',
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

  // Automatic slide cycle: strictly 2.5 seconds (2500ms)
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 2500);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, isPlaying]);

  return (
    <div
      className="relative w-full bg-[#0A192F] text-white overflow-hidden border-b-2 border-[#1D4ED8] shadow-xl select-none group/topslider"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Smartech Electrical and Networking Solutions Top Automated Slider"
    >
      {/* Full-bleed visual image canvas (Clear visibility, no text clutter) */}
      <div className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] w-full overflow-hidden">
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
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Very subtle edge vignette to keep image clear and vibrant */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-[#0A192F]/40" />
            </div>
          );
        })}

        {/* ONLY TEXT ON THE IMAGES: "Smartech Electrical and Networking Solutions" */}
        <div className="absolute top-4 sm:top-6 inset-x-0 z-20 flex justify-center px-4 pointer-events-none">
          <div className="bg-[#0A192F]/90 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-2.5 rounded-xs border border-blue-500/60 shadow-xl flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <h1 className="font-heading text-xs sm:text-base md:text-lg lg:text-xl font-black tracking-tight text-white uppercase text-center drop-shadow-sm">
              Smartech Electrical and Networking Solutions
            </h1>
            <Sparkles className="w-4 h-4 text-[#38BDF8] hidden sm:block" />
          </div>
        </div>

        {/* Manual Left / Right Arrow Navigation Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 bg-[#0A192F]/85 hover:bg-[#1D4ED8] text-white border border-blue-500/60 rounded-xs flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 bg-[#0A192F]/85 hover:bg-[#1D4ED8] text-white border border-blue-500/60 rounded-xs flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Bar: 2.5-Second Progress Line + Dots + Counter + Play/Pause */}
        <div className="absolute bottom-0 inset-x-0 z-30 p-3 sm:p-4 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/90 to-transparent space-y-2">
          {/* 2.5s Auto Slide Progress Indicator */}
          <div className="w-full bg-blue-950/80 h-1 rounded-full overflow-hidden">
            <div
              key={currentIndex}
              className={`h-full bg-gradient-to-r from-[#1D4ED8] via-[#38BDF8] to-emerald-400 ${
                isPlaying ? 'animate-[topSlideProgress_2.5s_linear_infinite]' : 'w-full opacity-60'
              }`}
              style={{
                animationDuration: '2500ms',
              }}
            />
          </div>

          <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto px-2">
            {/* Interactive Slide Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-7 sm:w-10 bg-[#38BDF8] shadow-sm'
                      : 'w-2 sm:w-2.5 bg-blue-900/90 hover:bg-blue-600'
                  }`}
                />
              ))}
            </div>

            {/* Counter Badge & Play/Pause */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-mono font-bold text-blue-200 bg-[#0F224A]/90 px-2.5 py-1 rounded-xs border border-blue-800/80">
                0{currentIndex + 1} <span className="text-blue-500">/</span> 0{slides.length}
              </span>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause 2.5s auto-slide' : 'Resume 2.5s auto-slide'}
                className="p-1.5 text-blue-300 hover:text-white bg-[#0F224A]/90 hover:bg-[#1D4ED8] border border-blue-700/60 rounded-xs transition-colors cursor-pointer"
                title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

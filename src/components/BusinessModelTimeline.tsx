import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { MotionReveal } from './MotionReveal';
import {
  Compass,
  PackageCheck,
  Hammer,
  Gauge,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const BusinessModelTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return Compass;
      case 'PackageCheck':
        return PackageCheck;
      case 'Hammer':
        return Hammer;
      case 'Gauge':
        return Gauge;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Clock':
      default:
        return Clock;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF8F5] text-[#1C1917] relative overflow-hidden border-b border-[#E8E5DF]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-block bg-[#E14D2A] text-white text-[10px] px-3.5 py-1 font-bold uppercase tracking-widest rounded-md shadow-xs">
              <span>Our Turnkey Workflow</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Our Complete <span className="text-[#E14D2A]">Business Model</span>
            </h2>

            <p className="text-[#57534E] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Customers can get complete technical solutions from one reliable source instead of purchasing products and hiring different contractors separately.
            </p>
          </div>
        </MotionReveal>

        {/* Process Steps Visual Chain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(step.iconName);
            const isCurrent = activeStep === idx;

            return (
              <MotionReveal key={step.stepNumber} delay={(idx % 6) * 0.08}>
                <div
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative p-6 sm:p-7 transition-all duration-300 border-y border-r border-[#E8E5DF] rounded-xl cursor-default h-full ${
                    isCurrent
                      ? 'bg-white border-l-4 border-[#E14D2A] shadow-md -translate-y-1'
                      : 'bg-white border-l-4 border-[#1C1917] hover:border-[#E14D2A] shadow-xs'
                  }`}
                >
                  {/* Header: Step Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center transition-colors rounded-lg ${
                        isCurrent ? 'bg-[#E14D2A] text-white shadow-xs' : 'bg-[#F5F2EB] text-[#E14D2A] border border-[#E8E5DF]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-2xl font-bold font-heading ${
                        isCurrent ? 'text-[#E14D2A]' : 'text-stone-300'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading text-lg font-bold text-[#1C1917] mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#E14D2A] mb-3">{step.subtitle}</div>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Indicator bar */}
                  <div
                    className={`mt-4 h-0.5 transition-all duration-300 rounded-full ${
                      isCurrent ? 'w-full bg-[#E14D2A]' : 'w-10 bg-[#E8E5DF]'
                    }`}
                  />
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* Process Value Summary Box */}
        <MotionReveal delay={0.2}>
          <div className="mt-12 p-6 sm:p-8 bg-white border-l-4 border-[#E14D2A] border-y border-r border-[#E8E5DF] flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl shadow-xs">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-[#FFF7ED] border border-[#FED7AA] text-[#E14D2A] flex-shrink-0 rounded-lg">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-[#1C1917]">
                  Zero Contractor Friction, 100% Accountability
                </h4>
                <p className="text-xs sm:text-sm text-[#57534E] mt-0.5">
                  We take full responsibility for product compatibility, technical wiring safety, and operational reliability.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E14D2A] font-bold tracking-wider px-4 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-lg">
              DESIGN → SUPPLY → INSTALL → TEST → COMMISSION → MAINTAIN
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

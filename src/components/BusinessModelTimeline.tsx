import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/companyData';
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
    <section className="py-20 lg:py-24 bg-[#0A192F] text-white relative overflow-hidden border-b border-blue-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs">
            <span>Our Turnkey Workflow</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Complete <span className="text-[#38BDF8]">Business Model</span>
          </h2>

          <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Customers can get complete technical solutions from one reliable source instead of purchasing products and hiring different contractors separately.
          </p>
        </div>

        {/* Process Steps Visual Chain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(step.iconName);
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.stepNumber}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative p-6 sm:p-7 transition-all duration-300 border-y border-r border-blue-900/60 rounded-xs ${
                  isCurrent
                    ? 'bg-[#122752] border-l-4 border-[#38BDF8] shadow-md'
                    : 'bg-[#0F224A] border-l-4 border-blue-900/80 hover:border-l-[#38BDF8]'
                }`}
              >
                {/* Header: Step Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center transition-colors rounded-xs ${
                      isCurrent ? 'bg-[#1D4ED8] text-white' : 'bg-[#0A192F] text-blue-200 border border-blue-900/80'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-2xl font-bold font-heading ${
                      isCurrent ? 'text-[#38BDF8]' : 'text-blue-400/50'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-heading text-lg font-bold text-white mb-1 tracking-tight">
                  {step.title}
                </h3>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#38BDF8] mb-3">{step.subtitle}</div>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-blue-100/70 leading-relaxed font-normal">
                  {step.description}
                </p>

                {/* Indicator bar */}
                <div
                  className={`mt-4 h-0.5 transition-all duration-300 ${
                    isCurrent ? 'w-full bg-[#38BDF8]' : 'w-10 bg-blue-900/80'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Process Value Summary Box */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0F224A] border-l-4 border-[#38BDF8] border-y border-r border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-[#0A192F] border border-blue-900/80 text-[#38BDF8] flex-shrink-0 rounded-xs">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                Zero Contractor Friction, 100% Accountability
              </h4>
              <p className="text-xs sm:text-sm text-blue-100/70 mt-0.5">
                We take full responsibility for product compatibility, technical wiring safety, and operational reliability.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#38BDF8] font-bold tracking-wider px-4 py-2 bg-[#0A192F] border border-blue-900/80 rounded-xs">
            DESIGN → SUPPLY → INSTALL → TEST → COMMISSION → MAINTAIN
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PROJECT_ENVIRONMENTS } from '../data/companyData';
import {
  Home,
  Building2,
  Store,
  Building,
  Factory,
  GraduationCap,
  Stethoscope,
  Tractor,
  HardHat,
  CheckCircle2,
  ArrowRight,
  Shield,
} from 'lucide-react';
import networkCablingImg from '../assets/images/network_datacenter_cabling_1787468735328.jpg';

interface ProjectSolutionsSectionProps {
  onOpenQuoteModal: (environmentName?: string) => void;
}

export const ProjectSolutionsSection: React.FC<ProjectSolutionsSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return Home;
      case 'Building2':
        return Building2;
      case 'Store':
        return Store;
      case 'Building':
        return Building;
      case 'Factory':
        return Factory;
      case 'GraduationCap':
        return GraduationCap;
      case 'Stethoscope':
        return Stethoscope;
      case 'Tractor':
        return Tractor;
      case 'HardHat':
      default:
        return HardHat;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs">
            <span>Tailored Deployments</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            Solutions For <span className="text-[#1D4ED8]">Every Environment</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Every physical premise has unique structural constraints, load demands, and security requirements. We customize our engineering design to fit your exact environment.
          </p>
        </div>

        {/* Featured Infrastructure Banner with Generated Image */}
        <div className="mb-14 bg-[#0A192F] text-white overflow-hidden shadow-xl border-l-4 border-[#1D4ED8] border-y border-r border-blue-900/60 grid grid-cols-1 lg:grid-cols-12 items-center rounded-xs">
          <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden bg-[#0F224A]">
            <img
              src={networkCablingImg}
              alt="Smartech Structured Cabling and Server Network Rack"
              className="w-full h-full object-cover opacity-85"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A192F]/40 to-[#0A192F] hidden lg:block" />
          </div>
          <div className="lg:col-span-7 p-7 sm:p-10 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">
              <Shield className="w-4 h-4" />
              <span>Multi-Sector Technical Capability</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineered for Precision & Operational Longevity
            </h3>
            <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed">
              Whether you need clean solar power for an off-grid agricultural tubewell, high-density Cat6 cabling for a corporate office, or certified earthing and switchgear for a manufacturing plant, Smartech has the technical expertise.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Custom Project Consultation')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-xs shadow-md border border-blue-400/30"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 9 Environment Cards Grid with Geometric Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_ENVIRONMENTS.map((env) => {
            const Icon = getIcon(env.iconName);

            return (
              <div
                key={env.id}
                className="flex flex-col justify-between p-6 bg-[#F8FAFC] border-l-4 border-[#0F172A] hover:border-[#1D4ED8] border-y border-r border-gray-200 transition-all duration-200 rounded-xs shadow-xs"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-10 h-10 bg-white border border-gray-200 text-[#0F172A] flex items-center justify-center shadow-xs rounded-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#0F172A] leading-snug">
                      {env.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {env.description}
                  </p>

                  {/* Key Solution Tags */}
                  <div className="space-y-1.5 pt-3 border-t border-gray-200 mb-5">
                    {env.suitability.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="text-[#1D4ED8] font-bold flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuoteModal(env.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-white hover:bg-[#0F172A] text-[#0F172A] hover:text-white border border-gray-300 font-bold text-xs uppercase tracking-wider transition-colors rounded-xs"
                  >
                    <span>Solution for {env.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PROJECT_ENVIRONMENTS } from '../data/companyData';
import {
  RevealHeading,
  RevealText,
  RevealCard,
  RevealImage,
  RevealButton,
} from './MotionReveal';
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
    <section id="projects" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <RevealText delay={0.05}>
            <div className="inline-block bg-[#FFF7ED] text-[#E14D2A] border border-[#FED7AA] text-[10px] px-3.5 py-1 font-bold uppercase tracking-widest rounded-md shadow-2xs">
              <span>Tailored Deployments</span>
            </div>
          </RevealText>

          <RevealHeading delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Solutions For <span className="text-[#E14D2A]">Every Environment</span>
            </h2>
          </RevealHeading>

          <RevealText delay={0.16}>
            <p className="text-[#57534E] text-base sm:text-lg leading-relaxed">
              Every physical premise has unique structural constraints, load demands, and security requirements. We customize our engineering design to fit your exact environment.
            </p>
          </RevealText>
        </div>

        {/* Featured Infrastructure Banner with Generated Image */}
        <RevealImage delay={0.1}>
          <div className="group mb-14 bg-[#1C1917] text-white overflow-hidden shadow-xl border-l-4 border-[#E14D2A] border-y border-r border-[#292524] grid grid-cols-1 lg:grid-cols-12 items-center rounded-2xl">
            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden bg-[#292524]">
              <img
                src={networkCablingImg}
                alt="Smartech Structured Cabling and Server Network Rack"
                className="w-full h-full object-cover opacity-85 group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1C1917]/40 to-[#1C1917] hidden lg:block" />
            </div>
            <div className="lg:col-span-7 p-7 sm:p-10 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#FF8A65]">
                <Shield className="w-4 h-4" />
                <span>Multi-Sector Technical Capability</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Engineered for Precision & Operational Longevity
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Whether you need clean solar power for an off-grid agricultural tubewell, high-density Cat6 cabling for a corporate office, or certified earthing and switchgear for a manufacturing plant, Smartech has the technical expertise.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal('Custom Project Consultation')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest transition-all rounded-lg shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Request Project Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </RevealImage>

        {/* 9 Environment Cards Grid with Geometric Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_ENVIRONMENTS.map((env, index) => {
            const Icon = getIcon(env.iconName);

            return (
              <RevealCard key={env.id} delay={(index % 3) * 0.08}>
                <div
                  className="group flex flex-col justify-between h-full p-6 bg-white border-l-4 border-[#1C1917] hover:border-[#E14D2A] border-y border-r border-[#E8E5DF] transition-all duration-300 rounded-xl shadow-xs hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-10 h-10 bg-[#FFF7ED] border border-[#FED7AA] text-[#E14D2A] group-hover:bg-[#E14D2A] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs rounded-lg group-hover:scale-110">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[#1C1917] leading-snug group-hover:text-[#E14D2A] transition-colors">
                        {env.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                      {env.description}
                    </p>

                    {/* Key Solution Tags */}
                    <div className="space-y-1.5 pt-3 border-t border-[#E8E5DF] mb-5">
                      {env.suitability.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#1C1917]">
                          <span className="text-[#E14D2A] font-bold flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenQuoteModal(env.title)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#FAF8F5] hover:bg-[#1C1917] text-[#1C1917] hover:text-white border border-[#E8E5DF] font-bold text-xs uppercase tracking-wider transition-colors rounded-lg cursor-pointer"
                    >
                      <span>Solution for {env.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </RevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

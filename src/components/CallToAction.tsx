import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { MotionReveal, ScrollParallax, RevealHeading, RevealText, RevealButton } from './MotionReveal';

interface CallToActionProps {
  onOpenQuoteModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#1C1917] text-white relative overflow-hidden border-b border-stone-800">
      <ScrollParallax offset={20} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E14D2A]/15 rounded-full blur-3xl" />
      </ScrollParallax>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <RevealText delay={0.05}>
          <div className="inline-block bg-[#E14D2A] text-white text-[10px] px-3.5 py-1 font-bold uppercase tracking-widest rounded-md shadow-xs">
            <span>Ready To Start Your Project?</span>
          </div>
        </RevealText>

        <RevealHeading delay={0.1}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Have a Project in <span className="text-[#F97316]">Mind?</span>
          </h2>
        </RevealHeading>

        <RevealText delay={0.16}>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your electrical, solar, security, networking or automation requirement. Our team can help you find the right technical solution.
          </p>
        </RevealText>

        {/* Action Buttons with RevealButton */}
        <RevealButton delay={0.22}>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                COMPANY_INFO.defaultWhatsAppMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#292524] hover:bg-white hover:text-[#1C1917] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all border border-stone-700 shadow-md cursor-pointer hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us (+92 334 4205974)</span>
            </a>
          </div>
        </RevealButton>

        <RevealText delay={0.28}>
          <div className="pt-4 text-xs text-stone-400 flex flex-wrap items-center justify-center gap-4 uppercase text-[11px] tracking-wider font-semibold">
            <span>📍 Serving Sialkot & Punjab</span>
            <span>•</span>
            <span>⚡ Fast Quote Turnaround</span>
            <span>•</span>
            <span>🛡️ Engineering Grade Quality</span>
          </div>
        </RevealText>
      </div>
    </section>
  );
};

import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';

interface CallToActionProps {
  onOpenQuoteModal: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#0A192F] text-white relative overflow-hidden border-b border-blue-950">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs shadow-xs">
          <span>Ready To Start Your Project?</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Have a Project in <span className="text-[#38BDF8]">Mind?</span>
        </h2>

        <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Tell us about your electrical, solar, security, networking or automation requirement. Our team can help you find the right technical solution.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-md transition-all border border-blue-400/30"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-[#0A192F] font-bold text-xs uppercase tracking-widest rounded-xs transition-all border border-white shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Us (+92 334 4205974)</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-blue-200/80 flex flex-wrap items-center justify-center gap-4 uppercase text-[11px] tracking-wider font-semibold">
          <span>📍 Serving Sialkot & Punjab</span>
          <span>•</span>
          <span>⚡ Fast Quote Turnaround</span>
          <span>•</span>
          <span>🛡️ Engineering Grade Quality</span>
        </div>
      </div>
    </section>
  );
};

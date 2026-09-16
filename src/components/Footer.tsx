import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { SmartechLogo } from './SmartechLogo';
import { MapPin, Phone, Mail, MessageSquare, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (service?: string) => void;
  onNavigatePage?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onNavigatePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (pageId: string) => {
    if (onNavigatePage) {
      onNavigatePage(pageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-stone-300 pt-16 pb-12 border-t-2 border-[#E14D2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Column 1: Official Logo and Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#home" className="inline-block focus:outline-none">
              <SmartechLogo theme="dark" size="md" variant="horizontal" />
            </a>
            <p className="text-sm text-stone-300 leading-relaxed font-normal">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs text-stone-400 leading-relaxed">
              Complete technical engineering solutions provider for residential, commercial and industrial projects in Sialkot and throughout Punjab, Pakistan.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#292524] border-l-2 border-[#E14D2A] text-[10px] font-bold uppercase tracking-wider text-stone-200 rounded-md">
                <Shield className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Certified Engineering Standards</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest border-b border-stone-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors cursor-pointer text-left"
                >
                  1. Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors cursor-pointer text-left"
                >
                  2. Turnkey Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('products')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors cursor-pointer text-left"
                >
                  3. Products & Store
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('calculator')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors cursor-pointer text-left"
                >
                  4. Solar Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('projects')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors cursor-pointer text-left"
                >
                  5. Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors cursor-pointer text-left"
                >
                  6. About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors cursor-pointer text-left"
                >
                  7. Contact & RFQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest border-b border-stone-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#services"
                  onClick={() => onOpenQuoteModal('Solar Energy Solutions')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors block"
                >
                  Solar Energy Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => onOpenQuoteModal('CCTV & Security Solutions')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors block"
                >
                  CCTV & Security Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => onOpenQuoteModal('Networking Solutions')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors block"
                >
                  Networking Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => onOpenQuoteModal('Electrical Solutions')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors block"
                >
                  Electrical Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => onOpenQuoteModal('Smart Home Automation')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors block"
                >
                  Smart Home Automation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => onOpenQuoteModal('Electrical Earthing Solutions')}
                  className="text-stone-400 hover:text-[#E14D2A] transition-colors block"
                >
                  Electrical Earthing Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-widest border-b border-stone-800 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    COMPANY_INFO.defaultWhatsAppMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +92 334 4205974
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full py-2.5 px-4 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest transition-colors text-center rounded-lg shadow-md cursor-pointer"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div>
            © 2026 Smartech Electrical & Networking Solution. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Sialkot, Pakistan</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors uppercase tracking-wider text-[11px] cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

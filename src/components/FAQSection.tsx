import React, { useState } from 'react';
import { FAQ_LIST } from '../data/companyData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs">
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Got Questions? <span className="text-[#1D4ED8]">We Have Answers.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Common questions regarding our engineering design, technical products, installation process, and after-sales support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border-y border-r border-gray-200 transition-all duration-200 overflow-hidden rounded-xs ${
                  isOpen
                    ? 'bg-white border-l-4 border-[#1D4ED8] shadow-xs'
                    : 'bg-[#F8FAFC] border-l-4 border-[#0F172A] hover:border-l-[#1D4ED8]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-100 text-[#1D4ED8] rounded-xs">
                      {faq.category}
                    </span>
                    <span className="font-heading font-bold text-[#0F172A] text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 flex items-center justify-center bg-slate-200 text-[#0F172A] transition-transform duration-300 flex-shrink-0 rounded-xs ${
                      isOpen ? 'rotate-180 bg-[#1D4ED8] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

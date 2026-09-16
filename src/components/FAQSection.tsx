import React, { useState } from 'react';
import { FAQ_LIST } from '../data/companyData';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MotionReveal } from './MotionReveal';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E8E5DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-block bg-[#FFF7ED] text-[#E14D2A] border border-[#FED7AA] text-[10px] px-3.5 py-1 font-bold uppercase tracking-widest rounded-md shadow-2xs">
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Got Questions? <span className="text-[#E14D2A]">We Have Answers.</span>
            </h2>

            <p className="text-[#57534E] text-sm sm:text-base leading-relaxed">
              Common questions regarding our engineering design, technical products, installation process, and after-sales support.
            </p>
          </div>
        </MotionReveal>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <MotionReveal key={index} delay={(index % 6) * 0.06}>
                <div
                  className={`border-y border-r border-[#E8E5DF] transition-all duration-200 overflow-hidden rounded-xl ${
                    isOpen
                      ? 'bg-[#FFF7ED]/30 border-l-4 border-[#E14D2A] shadow-xs'
                      : 'bg-[#FAF8F5] border-l-4 border-[#1C1917] hover:border-l-[#E14D2A]'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#FFF7ED] text-[#E14D2A] border border-[#FED7AA] rounded-md">
                        {faq.category}
                      </span>
                      <span className="font-heading font-bold text-[#1C1917] text-base sm:text-lg">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 flex-shrink-0 rounded-lg ${
                        isOpen ? 'rotate-180 bg-[#E14D2A] text-white shadow-xs' : 'bg-[#F5F2EB] text-[#1C1917]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#57534E] leading-relaxed border-t border-[#E8E5DF]">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

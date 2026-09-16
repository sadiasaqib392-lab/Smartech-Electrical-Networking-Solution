import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { SmartechLogo } from './SmartechLogo';
import { X, Send, MessageSquare, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: string;
  initialCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialItem = '',
  initialCategory = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    itemOrService: initialItem || 'Solar Energy Solutions',
    quantity: '1 Unit / Project Scope',
    projectType: 'Commercial',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setFormData((prev) => ({
        ...prev,
        itemOrService: initialItem,
      }));
    }
  }, [initialItem]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const message =
      `*Official Quotation Request - Smartech Website*\n\n` +
      `*Product / Service:* ${formData.itemOrService}\n` +
      `*Quantity / Scale:* ${formData.quantity || 'Standard Project Scope'}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Client Name:* ${formData.fullName || 'Not provided'}\n` +
      `*Contact Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Project Details:* ${formData.message || 'Please provide quotation with technical specs and lead time.'}`;

    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white shadow-2xl border-l-4 border-[#E14D2A] border-y border-r border-[#E8E5DF] overflow-hidden max-h-[92vh] flex flex-col rounded-2xl"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-stone-800 bg-[#1C1917] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E14D2A] text-white flex items-center justify-center rounded-lg shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF8A65]">
                Smartech Engineering & Sourcing
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                Request an Official Quotation
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors rounded-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left bg-white">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-[#1C1917]">
                Quotation Request Submitted
              </h4>
              <p className="text-sm text-[#57534E] max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our engineering estimate for{' '}
                <strong>{formData.itemOrService}</strong> is being prepared. We will reach out via{' '}
                <strong>{formData.phone}</strong> and <strong>{formData.email}</strong>.
              </p>
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] text-xs text-[#57534E] max-w-md mx-auto text-left space-y-1 rounded-xl font-mono">
                <div>• Reference Category: <strong>{formData.projectType}</strong></div>
                <div>• Item/Scope: <strong>{formData.itemOrService}</strong></div>
                <div>• Direct Support: <strong>+92 334 4205974 (Sialkot)</strong></div>
              </div>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 bg-[#1C1917] hover:bg-[#E14D2A] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product or Service Pre-fill Notice */}
              <div className="p-3.5 bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-between text-xs rounded-xl">
                <div>
                  <span className="text-[#57534E] font-medium">Selected Item / Discipline:</span>
                  <div className="font-bold text-[#E14D2A] text-sm mt-0.5">{formData.itemOrService}</div>
                </div>
                <div className="text-right">
                  <span className="text-[#57534E]">Price Structure:</span>
                  <div className="font-bold text-[#1C1917]">Custom Project Quote</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>

                {/* Company (optional) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company or site name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Product / Service Input or Selection */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Product / Service *
                  </label>
                  <input
                    type="text"
                    name="itemOrService"
                    required
                    value={formData.itemOrService}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Quantity / Scale
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="e.g. 10kW system, 8 cameras"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white font-medium rounded-lg"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Agricultural">Agricultural</option>
                    <option value="Educational">Educational</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="New Construction">New Construction</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                  Scope Details & Specifications
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Provide any additional specifications, site measurements, load requirements, or delivery location..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest shadow-xs transition-colors rounded-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest shadow-xs transition-colors rounded-xl disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Request Quote'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

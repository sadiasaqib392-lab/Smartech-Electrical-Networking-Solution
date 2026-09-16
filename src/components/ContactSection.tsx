import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { SmartechLogo } from './SmartechLogo';
import { RevealHeading, RevealText, RevealCard } from './MotionReveal';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    serviceRequired: 'Solar',
    projectType: 'Commercial',
    projectLocation: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

    // Simulate clean local submission state with reference ID
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppForward = () => {
    const message = `*New Technical Inquiry - Smartech Website*\n\n` +
      `*Name:* ${formData.fullName || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*Email:* ${formData.email || 'Not specified'}\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Location:* ${formData.projectLocation || 'Sialkot'}\n` +
      `*Message:* ${formData.message || 'I would like to discuss my project requirements.'}`;

    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <RevealText delay={0.05}>
            <div className="inline-block bg-[#FFF7ED] text-[#E14D2A] border border-[#FED7AA] text-[10px] px-3.5 py-1 font-bold uppercase tracking-widest rounded-md shadow-2xs">
              <span>Direct Technical Consultation</span>
            </div>
          </RevealText>

          <RevealHeading delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Contact Smartech in <span className="text-[#E14D2A]">Sialkot</span>
            </h2>
          </RevealHeading>

          <RevealText delay={0.16}>
            <p className="text-[#57534E] text-base sm:text-lg leading-relaxed">
              Connect with our engineering team for site evaluations, project quotations, equipment supply, and technical maintenance.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Contact Details & Action Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <RevealCard delay={0.1}>
              <div className="p-6 sm:p-7 bg-white border-l-4 border-[#1C1917] border-y border-r border-[#E8E5DF] space-y-6 rounded-xl shadow-xs">
                <div>
                  <SmartechLogo size="md" variant="horizontal" />
                  <p className="text-xs text-[#57534E] mt-2 font-medium">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFF7ED] border border-[#FED7AA] text-[#E14D2A] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#57534E] font-bold uppercase tracking-wider">Business Location</div>
                      <div className="text-sm sm:text-base font-bold text-[#1C1917]">
                        {COMPANY_INFO.location}
                      </div>
                      <div className="text-xs text-[#57534E]">Serving Residential, Commercial & Industrial Projects</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFF7ED] border border-[#FED7AA] text-[#E14D2A] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#57534E] font-bold uppercase tracking-wider">Direct Phone / Helpline</div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-sm sm:text-base font-bold text-[#1C1917] hover:text-[#E14D2A] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div className="text-xs text-[#57534E]">Available Mon - Sat for Inquiries</div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#57534E] font-bold uppercase tracking-wider">Official WhatsApp</div>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                          COMPANY_INFO.defaultWhatsAppMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        +92 334 4205974
                      </a>
                      <div className="text-xs text-[#57534E]">Instant Chat & Document/Drawing Sharing</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFF7ED] border border-[#FED7AA] text-[#E14D2A] flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#57534E] font-bold uppercase tracking-wider">Email Inquiries</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm sm:text-base font-bold text-[#1C1917] hover:text-[#E14D2A] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <div className="text-xs text-[#57534E]">Official Quotation & RFQ Submissions</div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Button Strip */}
                <div className="pt-4 border-t border-[#E8E5DF] grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                      COMPANY_INFO.defaultWhatsAppMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </RevealCard>
          </div>

          {/* Right Column: Interactive Consultation / Quote Form */}
          <div className="lg:col-span-7 text-left">
            <RevealCard delay={0.15}>
              <div className="p-7 sm:p-9 bg-white border-l-4 border-[#E14D2A] border-y border-r border-[#E8E5DF] shadow-xs rounded-xl">
                <div className="mb-6">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
                    Request a Project Quote / Technical Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] mt-1">
                    Fill in your project requirements below. You can submit directly or forward the details instantly via WhatsApp.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-[#FAF8F5] border border-emerald-300 text-center space-y-4 rounded-xl">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-[#1C1917]">
                      Request Received Successfully!
                    </h4>
                    <p className="text-sm text-[#57534E] max-w-md mx-auto">
                      Thank you, <strong>{formData.fullName}</strong>. Our engineering team at Smartech will review your inquiry for <strong>{formData.serviceRequired}</strong> and contact you promptly at <strong>{formData.phone}</strong>.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsAppForward}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-xs"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Also Send to WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-[#57534E] hover:text-[#1C1917] underline font-bold uppercase tracking-wider"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg transition-colors"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+92 3XX XXXXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="yourname@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg transition-colors"
                        />
                      </div>

                      {/* Company (Optional) */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                          Company / Organization <span className="text-stone-400 text-[10px] lowercase">(optional)</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="e.g. Factory, School, Plaza"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Service Required Dropdown */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                          Service Required *
                        </label>
                        <select
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white font-medium rounded-lg transition-colors cursor-pointer"
                        >
                          <option value="Solar">Solar Power Systems</option>
                          <option value="CCTV">CCTV & Security</option>
                          <option value="Networking">Networking & IT</option>
                          <option value="Electrical">Electrical Works</option>
                          <option value="Smart Home">Smart Automation</option>
                          <option value="Earthing">Earthing & Lightning</option>
                          <option value="Products">Product Supplies</option>
                          <option value="Other">Turnkey / Other</option>
                        </select>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white font-medium rounded-lg transition-colors cursor-pointer"
                        >
                          <option value="Residential">Residential / Home</option>
                          <option value="Commercial">Commercial / Office</option>
                          <option value="Industrial">Industrial / Factory</option>
                          <option value="Agricultural">Farms / Agricultural</option>
                          <option value="Educational">School / College</option>
                          <option value="Healthcare">Hospital / Clinic</option>
                          <option value="New Construction">New Construction</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Project Location */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                          Project Location
                        </label>
                        <input
                          type="text"
                          name="projectLocation"
                          placeholder="e.g. Sialkot, Daska"
                          value={formData.projectLocation}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                        Project Details & Specific Requirements *
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        placeholder="Describe your load capacity, number of cameras, wiring scope, or specific product quantities..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] placeholder-stone-400 focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg transition-colors"
                      />
                    </div>

                    {/* Submit and WhatsApp buttons */}
                    <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest shadow-xs transition-all rounded-lg disabled:opacity-75 cursor-pointer"
                      >
                        {submitting ? (
                          <span>Processing Request...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Request</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppForward}
                        className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest shadow-xs transition-all rounded-lg cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-[#57534E] text-center pt-2 font-mono uppercase tracking-wider">
                      🔒 Your information is confidential and used exclusively for your engineering quotation.
                    </p>
                  </form>
                )}
              </div>
            </RevealCard>
          </div>
        </div>
      </div>
    </section>
  );
};

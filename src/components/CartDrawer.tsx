import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { COMPANY_INFO } from '../data/companyData';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  MessageSquare,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Package,
  Wrench,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItemCount,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderRefNumber, setOrderRefNumber] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Sialkot',
    projectType: 'Residential',
    installationRequired: true,
    notes: '',
  });

  if (!isCartOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generateWhatsAppMessage = () => {
    let msg = `*🛒 SMARTECH CART QUOTATION / ORDER INQUIRY*\n\n`;
    if (formData.fullName) {
      msg += `*Client Name:* ${formData.fullName}\n`;
      msg += `*Contact:* ${formData.phone}\n`;
      msg += `*Location/City:* ${formData.city}\n`;
      msg += `*Project Type:* ${formData.projectType}\n`;
      msg += `*Installation Required:* ${formData.installationRequired ? 'YES (Turnkey)' : 'NO (Supply Only)'}\n`;
      if (formData.notes) msg += `*Notes:* ${formData.notes}\n`;
      msg += `\n--------------------------------\n`;
    }
    msg += `*ITEMIZED CART LIST (${totalItemCount} Units):*\n\n`;

    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.name}*\n`;
      msg += `   • Category: ${item.categoryLabel} | Brand: ${item.brand}\n`;
      msg += `   • Quantity: *${item.quantity} ${item.unit || 'Units'}*\n`;
      if (item.specs && item.specs.length > 0) {
        msg += `   • Key Spec: ${item.specs[0]}\n`;
      }
      msg += `\n`;
    });

    msg += `--------------------------------\n`;
    msg += `Please provide formal pricing, availability, and delivery/installation schedule for Sialkot / Punjab. Thank you!`;
    return msg;
  };

  const handleWhatsAppCheckout = () => {
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please provide your Full Name and Contact Number');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = `SMT-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderRefNumber(randomRef);
      setCheckoutStep('success');
    }, 600);
  };

  const handleResetAndClose = () => {
    setCheckoutStep('cart');
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md md:max-w-lg bg-white border-l-4 border-[#E14D2A] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 bg-[#1C1917] text-white flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E14D2A] text-white flex items-center justify-center rounded-lg shadow-sm">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF8A65]">
                  SMARTECH SIALKOT
                </span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide">
                  Project Cart ({totalItemCount})
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && checkoutStep === 'cart' && (
                <button
                  onClick={clearCart}
                  className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-stone-300 hover:text-white hover:bg-stone-800 transition-colors flex items-center gap-1 rounded-lg"
                  title="Clear all items"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
              <button
                onClick={closeCart}
                className="w-8 h-8 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-800 transition-colors rounded-lg"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Content Body */}
          <div className="flex-1 overflow-y-auto p-5 bg-[#FAF8F5] space-y-4">
            {checkoutStep === 'success' ? (
              /* Success View */
              <div className="py-8 text-center space-y-5 bg-white p-6 border border-[#E8E5DF] rounded-xl shadow-xs">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E14D2A]">
                    Quotation Request Logged
                  </span>
                  <h4 className="font-heading text-2xl font-bold text-[#1C1917] mt-1">
                    Cart Request Submitted!
                  </h4>
                  <p className="text-xs text-[#57534E] mt-1 font-mono">
                    Reference ID: <strong className="text-[#1C1917]">{orderRefNumber}</strong>
                  </p>
                </div>

                <p className="text-xs text-[#57534E] leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Our technical engineering team will review your itemized equipment list for <strong>{formData.city}</strong> and send an official quote with pricing and availability.
                </p>

                <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] text-left text-xs space-y-1.5 font-mono rounded-lg">
                  <div className="font-bold text-[#1C1917] uppercase mb-1">Summary Details:</div>
                  <div>• Items In Cart: <strong>{totalItemCount} units</strong></div>
                  <div>• Contact: <strong>{formData.phone}</strong></div>
                  <div>• Installation: <strong>{formData.installationRequired ? 'Yes (Turnkey)' : 'Equipment Supply Only'}</strong></div>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Forward Cart to WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      clearCart();
                      handleResetAndClose();
                    }}
                    className="w-full py-2.5 bg-[#1C1917] hover:bg-[#E14D2A] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors"
                  >
                    Done & Return to Site
                  </button>
                </div>
              </div>
            ) : checkoutStep === 'form' ? (
              /* Checkout Details Form */
              <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-5 border border-[#E8E5DF] rounded-xl shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E5DF]">
                  <h4 className="font-heading text-base font-bold text-[#1C1917] uppercase tracking-wider">
                    Customer & Project Details
                  </h4>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="text-xs font-bold text-[#E14D2A] hover:underline uppercase tracking-wider"
                  >
                    ← Back to Items
                  </button>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>

                {/* City & Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Sialkot, Daska"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white font-medium rounded-lg"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Contractor Bulk">Contractor / Bulk</option>
                    </select>
                  </div>
                </div>

                {/* Installation Checkbox */}
                <div className="p-3 bg-[#FAF8F5] border border-[#E8E5DF] rounded-lg flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="installationRequired"
                    name="installationRequired"
                    checked={formData.installationRequired}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#E14D2A] rounded focus:ring-[#E14D2A] border-stone-300"
                  />
                  <label htmlFor="installationRequired" className="text-xs text-[#1C1917] font-semibold cursor-pointer">
                    Include Technical Installation & Testing Service
                  </label>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#57534E] mb-1">
                    Special Specifications / Delivery Notes
                  </label>
                  <textarea
                    rows={2}
                    name="notes"
                    placeholder="Provide any custom voltages, camera channels, site details, or brands preferred..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5DF] text-sm text-[#1C1917] focus:outline-none focus:border-[#E14D2A] focus:bg-white rounded-lg"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xs transition-colors disabled:opacity-75"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Processing...' : 'Submit Cart Request Online'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppCheckout}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Or Order Direct via WhatsApp</span>
                  </button>
                </div>
              </form>
            ) : cartItems.length === 0 ? (
              /* Empty Cart State */
              <div className="py-16 text-center space-y-4 bg-white p-6 border border-[#E8E5DF] rounded-xl">
                <div className="w-16 h-16 bg-[#FFF7ED] text-[#E14D2A] flex items-center justify-center mx-auto rounded-full">
                  <Package className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#1C1917]">
                  Your Project Cart is Empty
                </h4>
                <p className="text-xs text-[#57534E] max-w-xs mx-auto leading-relaxed">
                  Add Solar panels, inverters, CCTV cameras, networking racks, electrical switchgear, or earthing kits to request a comprehensive quote.
                </p>
                <div className="pt-2">
                  <button
                    onClick={closeCart}
                    className="px-5 py-2.5 bg-[#E14D2A] hover:bg-[#C83B1B] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors"
                  >
                    Browse Equipment Catalog
                  </button>
                </div>
              </div>
            ) : (
              /* Cart Item List */
              <div className="space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#57534E] flex items-center justify-between px-1">
                  <span>Selected Products & Services ({cartItems.length} items)</span>
                  <span>Quantity</span>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border-l-4 border-[#E14D2A] border-y border-r border-[#E8E5DF] p-4 rounded-xl shadow-xs space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FFF7ED] text-[#E14D2A] rounded-md font-semibold border border-[#FED7AA]">
                            {item.categoryLabel}
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#57534E]">
                            {item.brand}
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-sm text-[#1C1917] leading-snug">
                          {item.name}
                        </h4>
                        {item.specs && item.specs.length > 0 && (
                          <div className="text-[11px] text-[#57534E] flex items-center gap-1">
                            <span className="text-[#E14D2A] font-bold">✓</span>
                            <span className="truncate max-w-[220px]">{item.specs[0]}</span>
                          </div>
                        )}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-rose-500 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity Controls and Unit Price Status */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                      <div className="text-[#57534E] text-[11px]">
                        Pricing: <span className="font-bold text-[#1C1917]">Project Quotation</span>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center border border-[#E8E5DF] rounded-lg bg-[#FAF8F5]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[#57534E] hover:bg-stone-200 transition-colors rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-9 text-center font-bold text-xs text-[#1C1917] select-none">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#57534E] hover:bg-stone-200 transition-colors rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Turnkey Assurance Notice */}
                <div className="p-3 bg-white border border-[#E8E5DF] flex items-center gap-2 text-xs text-[#57534E] rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-[#E14D2A] flex-shrink-0" />
                  <span className="text-[11px] leading-tight">
                    Smartech verifies all technical loads, wire gauges, and warranty documentation prior to quotation delivery.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Cart Footer Actions */}
          {cartItems.length > 0 && checkoutStep === 'cart' && (
            <div className="p-5 bg-white border-t border-[#E8E5DF] space-y-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#57534E]">
                <span>Total Scope Units:</span>
                <span className="text-base text-[#1C1917] font-mono font-extrabold">
                  {totalItemCount} {totalItemCount === 1 ? 'Unit' : 'Units'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>

                <button
                  onClick={() => setCheckoutStep('form')}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xs transition-colors"
                >
                  <span>Request Full RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10px] text-center text-[#57534E] font-mono">
                📍 Fast dispatch and certified installation throughout Sialkot & Punjab
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

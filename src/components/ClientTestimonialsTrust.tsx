import React from 'react';
import { Star, CheckCircle, Building, Quote, Shield, Award } from 'lucide-react';

export const ClientTestimonialsTrust: React.FC = () => {
  const testimonials = [
    {
      name: 'Chaudhry Nadeem Akhtar',
      role: 'Managing Director',
      company: 'Premier Leather & Sports Goods (Pvt) Ltd',
      location: 'Small Industrial Estate, Sialkot',
      system: '60kW Industrial Solar Plant + 3-Phase APFC Panels',
      comment:
        'Smartech executed our 60kW solar setup on a high factory roof in 10 days. The GEPCO green net-metering was approved without delays. Our generator fuel expenses dropped by 70%, and their chemical earthing gives zero surge faults.',
      rating: 5,
    },
    {
      name: 'Engr. Haroon Tariq',
      role: 'Chief Technical Officer',
      company: 'Apex Surgical Instruments Mfg.',
      location: 'Daska Road, Sialkot',
      system: '42U Server Data Rack, Cat6A Structured Cabling & 48 IP Cameras',
      comment:
        'Finding a team that can handle both heavy electrical earthing and high-precision Cat6A Fluke-tested networking was tough until we contracted Smartech. Their cable tray neatness and NVR setup are truly enterprise grade.',
      rating: 5,
    },
    {
      name: 'Mian Saad Rafique',
      role: 'Commercial Plaza Developer',
      company: 'Al-Madina Commercial Arcade',
      location: 'Paris Road, Sialkot',
      system: '32-Channel 4K ColorVu CCTV + Smart Tenant Energy Sub-Metering',
      comment:
        'The 24/7 ColorVu night vision cameras provided by Smartech give crisp clarity across all parking and retail floors. Their after-sales support on WhatsApp is instantaneous whenever our security guards need playback.',
      rating: 5,
    },
  ];

  const brandPartners = [
    { name: 'Huawei Solar', category: 'Inverters & Energy Storage' },
    { name: 'Longi Solar', category: 'Tier-1 Mono PERC PV' },
    { name: 'Jinko Solar', category: 'N-Type Bifacial PV' },
    { name: 'Growatt Power', category: 'Hybrid Inverters' },
    { name: 'Hikvision', category: '4K CCTV & AcuSense' },
    { name: 'Dahua Technology', category: 'Smart Surveillance' },
    { name: 'Schneider Electric', category: 'Switchgear & MCCBs' },
    { name: 'Pakistan Cables', category: '99.99% Pure Copper' },
    { name: 'Ubiquiti UniFi', category: 'Enterprise Wi-Fi & Routing' },
    { name: 'Cisco Systems', category: 'Managed Network Switches' },
    { name: 'Fast Cables', category: 'Certified XLPO Solar Wire' },
    { name: 'Dehn Germany', category: 'Lightning & Surge SPDs' },
  ];

  return (
    <section className="py-14 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Tier-1 OEM Brand Partners Marquee Strip */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
            <Award className="w-4 h-4" />
            <span>Authorized Hardware Sourcing & OEM Equipment Partners</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
            We Deploy Only Genuine, Certified Tier-1 Engineering Brands
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-3">
            {brandPartners.map((brand, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-800/80 border border-slate-700 rounded-xs hover:border-[#1D4ED8] transition-colors text-center flex flex-col justify-center"
              >
                <div className="font-bold text-xs text-white font-mono">{brand.name}</div>
                <div className="text-[10px] text-blue-200/70 mt-0.5">{brand.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews Grid */}
        <div className="pt-6 border-t border-slate-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <Shield className="w-4 h-4" />
              <span>Verified Client Satisfaction</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Trusted by Sialkot Exporters, Factories & Commercial Facilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-800/90 border-t-4 border-[#1D4ED8] border-x border-b border-slate-700/80 rounded-xs shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-600" />
                  </div>

                  <div className="text-xs text-blue-300 font-mono bg-blue-950/60 p-2 rounded-xs border border-blue-900/60">
                    <strong>Project:</strong> {item.system}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1D4ED8] text-white flex items-center justify-center rounded-xs font-black text-xs font-mono">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-xs text-white">{item.name}</div>
                    <div className="text-[11px] text-slate-400">{item.role}</div>
                    <div className="text-[10px] text-blue-200/80">{item.company} • {item.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

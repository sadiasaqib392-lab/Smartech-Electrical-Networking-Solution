import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Zap, Camera, Network, Sliders, ExternalLink } from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenQuoteModal: (projectType: string, category: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeSector, setActiveSector] = useState<'all' | 'industrial' | 'commercial' | 'residential'>('all');

  const caseStudies = [
    {
      id: 'case-1',
      sector: 'industrial',
      title: '50kW Hybrid Solar & Power Distribution Plant',
      client: 'Leather & Sports Goods Export Facility, Sialkot Small Industrial Estate',
      category: 'Solar Energy & Industrial Electrical',
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      image: '/src/assets/images/solar_electrical_eng_1787468705473.jpg',
      specs: [
        '96x 585W N-Type Tier-1 Mono PERC Solar Panels',
        '2x 25kW 3-Phase Synchronized Hybrid Inverters',
        '40kWh High-Voltage LiFePO4 Lithium Battery Bank',
        'Full GEPCO 3-Phase Net Metering Commissioning',
      ],
      metrics: {
        unitsGenerated: '6,200 Units/Month',
        dieselSaved: '75% Generator Reduction',
        completionTime: '12 Days Turnkey',
      },
      quoteTag: '50kW Industrial Hybrid Solar System',
    },
    {
      id: 'case-2',
      sector: 'commercial',
      title: '32-Channel IP Surveillance & Fiber Backbone Infrastructure',
      client: 'Multi-Storey Corporate Plaza & Shopping Center, Paris Road, Sialkot',
      category: 'CCTV & Structured Networking',
      icon: <Camera className="w-4 h-4 text-blue-500" />,
      image: '/src/assets/images/cctv_smart_security_1787468722184.jpg',
      specs: [
        '32x 4MP Hikvision AcuSense Smart AI Perimeter Cameras',
        '32-Channel 4K NVR with 32TB Surveillance Storage (30-Day Retention)',
        'Cat6A 10G Certified Copper Drops with 24-Port Gigabit PoE+ Switches',
        'Armored Outdoor Fiber Optic Backbone connecting 4 floor racks',
      ],
      metrics: {
        unitsGenerated: '100% Blindspot Elimination',
        dieselSaved: 'Multi-Floor Gigabit Data',
        completionTime: '8 Days Commissioning',
      },
      quoteTag: 'Commercial 32-Channel IP CCTV & Fiber Network',
    },
    {
      id: 'case-3',
      sector: 'industrial',
      title: 'Data Center Server Racks & High-Density Cat6 Cabling',
      client: 'Surgical Instruments Manufacturing Plant & IT Server Room, Daska Road',
      category: 'Structured Data & Networking',
      icon: <Network className="w-4 h-4 text-emerald-500" />,
      image: '/src/assets/images/network_datacenter_cabling_1787468735328.jpg',
      specs: [
        '42U Floor Standing Server Rack with Dual High-Airflow Fans',
        '120+ Cat6 Drops with Fluke Channel Testing Certification',
        'Ubiquiti UniFi Cloud Gateway & 48-Port PoE Layer-3 Managed Switch',
        'Dedicated Chemical Earth Pit (<0.8 Ohm Grounding for Server Protection)',
      ],
      metrics: {
        unitsGenerated: '99.99% Network Uptime',
        dieselSaved: 'Fluke Pass Tested 100%',
        completionTime: '6 Days Execution',
      },
      quoteTag: 'Server Room Data Center Rack & Structured Cabling',
    },
    {
      id: 'case-4',
      sector: 'residential',
      title: '15kW On-Grid Solar & Whole-House Smart Automation',
      client: '1-Kanal Luxury Residence, Citi Housing, Sialkot',
      category: 'Solar & Smart Home Automation',
      icon: <Sliders className="w-4 h-4 text-indigo-500" />,
      image: '/src/assets/images/solar_electrical_eng_1787468705473.jpg',
      specs: [
        '26x 580W Bifacial Solar Panels with Elevated Structure',
        '15kW On-Grid String Inverter with GEPCO Green Meter',
        'Smart Touch WiFi/Zigbee Lighting & AC Thermostat Relays',
        'Video Door Intercom with Mobile Access & Smart Fingerprint Lock',
      ],
      metrics: {
        unitsGenerated: '1,900 Units/Month',
        dieselSaved: 'Zero Net WAPDA Bill',
        completionTime: '5 Days Setup',
      },
      quoteTag: '15kW Luxury Residential Solar & Automation',
    },
  ];

  const filteredStudies = activeSector === 'all'
    ? caseStudies
    : caseStudies.filter((c) => c.sector === activeSector);

  return (
    <section className="py-14 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-block bg-[#1D4ED8] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-xs">
              <span>Engineering Project Portfolio</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Executed Projects & <span className="text-[#1D4ED8]">Case Studies</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Explore real-world engineering installations delivered by Smartech across Sialkot, Gujranwala, Daska, and Punjab with verified technical deliverables.
            </p>
          </div>

          {/* Sector Filters */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 border border-gray-200 rounded-xs shadow-xs">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'industrial', label: 'Industrial' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'residential', label: 'Residential' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSector(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                  activeSector === tab.id
                    ? 'bg-[#1D4ED8] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1D4ED8] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((project) => (
            <div
              key={project.id}
              className="bg-white border-l-4 border-[#1D4ED8] border-y border-r border-gray-200 rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Project Image & Category Pill */}
                <div className="relative h-56 bg-slate-900 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1D4ED8] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs">
                      {project.icon}
                      <span>{project.category}</span>
                    </span>
                    <span className="px-2.5 py-1 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider rounded-xs border border-white/20">
                      {project.sector}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <div className="text-[11px] text-blue-200 font-mono">{project.client}</div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold leading-tight mt-0.5 text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="p-5 space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Engineering Scope & Equipment Deployed:
                    </h4>
                    <div className="space-y-1.5">
                      {project.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                    <div className="p-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xs text-center">
                      <div className="text-[9px] text-slate-500 uppercase font-bold">Generation / Gain</div>
                      <div className="text-xs font-black text-[#1D4ED8] font-mono mt-0.5">{project.metrics.unitsGenerated}</div>
                    </div>
                    <div className="p-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xs text-center">
                      <div className="text-[9px] text-slate-500 uppercase font-bold">Efficiency Metric</div>
                      <div className="text-xs font-black text-emerald-600 font-mono mt-0.5">{project.metrics.dieselSaved}</div>
                    </div>
                    <div className="p-2.5 bg-[#F8FAFC] border border-gray-200 rounded-xs text-center">
                      <div className="text-[9px] text-slate-500 uppercase font-bold">Duration</div>
                      <div className="text-xs font-black text-[#0F172A] font-mono mt-0.5">{project.metrics.completionTime}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-4 bg-slate-50 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>PEC & IEEE Compliant</span>
                </span>

                <button
                  onClick={() => onOpenQuoteModal(project.quoteTag, project.category)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1D4ED8] hover:bg-[#0A192F] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  <span>Request Similar Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

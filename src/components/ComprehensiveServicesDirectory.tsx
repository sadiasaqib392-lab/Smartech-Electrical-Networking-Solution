import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { 
  SunMedium, 
  Zap, 
  Camera, 
  Network, 
  Home, 
  ShieldCheck, 
  Activity, 
  Wrench, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Award, 
  Sliders, 
  PhoneCall,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MotionReveal } from './MotionReveal';

interface ComprehensiveServicesDirectoryProps {
  onOpenQuoteModal: (serviceName?: string, category?: string) => void;
}

export const ComprehensiveServicesDirectory: React.FC<ComprehensiveServicesDirectoryProps> = ({
  onOpenQuoteModal,
}) => {
  const { addToCart, cartItems } = useCart();
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'SunMedium':
        return SunMedium;
      case 'Zap':
        return Zap;
      case 'Camera':
        return Camera;
      case 'Network':
        return Network;
      case 'Home':
        return Home;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Activity':
        return Activity;
      case 'Wrench':
        return Wrench;
      case 'Building2':
        return Building2;
      default:
        return Zap;
    }
  };

  const detailedServiceProfiles: Record<string, {
    scopeSummary: string;
    applications: string[];
    technicalStandards: string[];
    deliverables: string[];
    typicalTimeline: string;
    warranty: string;
  }> = {
    'solar-pv': {
      scopeSummary: 'Complete turnkey solar photovoltaic engineering from precision solar irradiance mapping, AutoCAD Single Line Diagrams (SLD), elevated hot-dip galvanized mounting structures, to Tier-1 bifacial modules, smart grid-tied/hybrid inverters, and GEPCO bi-directional net-metering synchronization.',
      applications: ['1-Kanal to 4-Kanal Luxury Residences', 'Commercial Plazas & Banks', 'Export Industrial Factories', 'Agricultural Solar Tubewells'],
      technicalStandards: ['IEC 61215 / 61730 PV Module Standards', 'IEC 62109 Inverter Safety', 'NEPRA / AEDB SRO Regulations', 'IEEE 1547 Grid Interconnection'],
      deliverables: ['Tier-1 PV Modules (Longi/Jinko 585W+)', 'Smart Hybrid / On-Grid Inverter (Growatt/Huawei/Deye)', 'Elevated HDG Structure (Wind-rated 130 km/h)', 'Chemical Earth Pit (< 1.0 Ohm)', 'Bi-Directional Net-Meter Commissioning'],
      typicalTimeline: '5 to 10 Working Days',
      warranty: '25-Year Panel Linear Output, 5-Year Inverter, 5-Year Battery',
    },
    'electrical-wiring': {
      scopeSummary: 'Heavy-duty 3-phase and single-phase electrical wiring, Main Distribution Boards (MDB), Sub-DB enclosures, phase balancing, circuit breaker coordination, cable tray routing, and conduit management for residential, commercial, and industrial facilities.',
      applications: ['Manufacturing Plants & Processing Units', 'Commercial Shopping Arcades', 'Modern Residential Mansions', 'Hospitals & Diagnostic Centers'],
      technicalStandards: ['BS 7671 IET Wiring Regulations', 'IEC 61439 Low-Voltage Switchgear', 'IEC 60364 Electrical Installations of Buildings', 'PSQCA Copper Wire Certification'],
      deliverables: ['Main Distribution Board (MDB) with Schneider MCCBs', 'Cable Trays & Perforated Metal Ladders', '99.99% Pure Tinned Copper Power Cabling', 'Automatic Phase Changer & Phase Loss Protection', 'Thermal Infrared Inspection & As-Built SLD'],
      typicalTimeline: '7 to 20 Working Days (Per Building Scope)',
      warranty: '2-Year Workmanship Warranty + 10-Year Cable Life Certification',
    },
    'cctv-security': {
      scopeSummary: 'High-definition 4K digital IP surveillance and AcuSense AI perimeter security systems. Features real-time human and vehicle classification, ColorVu 24/7 night vision, centralized NVR storage servers, and secure remote mobile live monitoring.',
      applications: ['Factory Production Floors & Warehouses', 'Commercial Showrooms & Banks', 'Residential Compounds & Farmhouses', 'Educational Campuses & Hospitals'],
      technicalStandards: ['ONVIF Profile S/G/T Compliance', 'H.265+ Ultra-Efficient Video Compression', 'IP67 Weatherproof & IK10 Vandal-Resistance', 'NDAA Compliant Hardware Options'],
      deliverables: ['4K / 4MP AcuSense Smart IP Cameras', 'Multi-Bay NVR with Enterprise Surveillance HDDs', 'Gigabit PoE+ Managed Switch Infrastructure', 'Pure Solid Copper 23AWG Cat6 Cabling', 'Multi-Screen Monitoring & Mobile Cloud Setup'],
      typicalTimeline: '2 to 5 Working Days',
      warranty: '2-Year Direct OEM Hardware Replacement Warranty',
    },
    'networking-solutions': {
      scopeSummary: 'Enterprise-grade structured cabling, 42U / 24U server rack architectures, 10G optical fiber backbone links, Gigabit Layer-2/3 PoE+ managed switches, and seamless roaming Wi-Fi 6 wireless networks with Fluke DSX-8000 certification.',
      applications: ['Corporate Head Offices & Call Centers', 'Industrial Automation Networks', 'Data Server Rooms & ERP Facilities', 'Multi-Storey Commercial Buildings'],
      technicalStandards: ['ANSI/TIA-568-C.2 Balanced Twisted-Pair Cabling', 'ISO/IEC 11801 Generic Cabling for Customer Premises', 'IEEE 802.3at/bt High-Power PoE Standards', 'ITU-T G.652.D Single-Mode Optical Fiber'],
      deliverables: ['Cat6 / Cat6A Shielded Backbone Cable Drops', '42U/24U Server Rack with Cable Organizers & PDU', 'Layer-3 Managed Gigabit Core PoE+ Switches', 'Single-Mode Optical Fiber Splicing & Patch Panels', 'Fluke DSX-8000 Permanent Link Test Reports'],
      typicalTimeline: '3 to 8 Working Days',
      warranty: '25-Year Performance Structured Cabling System Warranty',
    },
    'smart-home': {
      scopeSummary: 'Next-generation IoT home automation systems providing central touchscreen, smartphone app, and voice-command control over lighting scenes, dimming, motorized curtains, climate HVAC, biometric digital door locks, and energy telemetry.',
      applications: ['Luxury Villas & Modern Homes', 'Executive Boardrooms & Conference Suites', 'Smart Hotel Guest Rooms', 'Modern Studio Offices'],
      technicalStandards: ['Zigbee 3.0 / Matter Mesh Protocol', 'AES-128 Encryption Security', 'CE & RoHS Safety Standards', 'Tuya / Smart Life / HomeKit Integration'],
      deliverables: ['Capacitive Smart Glass Touch Switches', 'Zigbee Gateway Hub & Multi-Sensor Network', 'Motorized Curtain Tracks & Smart Relays', 'Smart Biometric Fingerprint & Passcode Door Lock', 'Custom Scene Automation & Voice Assistant Integration'],
      typicalTimeline: '2 to 4 Working Days',
      warranty: '2-Year Complete Hardware & App Integration Support',
    },
    'earthing-lightning': {
      scopeSummary: 'Engineered chemical earthing pits, electrolytic pure copper electrodes, high-conductivity backfill compounds, early streamer emission (ESE) lightning rods, and Type 1+2 surge protective devices (SPDs) guaranteeing low earth resistance (< 1.0 Ohm).',
      applications: ['Solar PV Arrays & Inverters', 'Industrial CNC & Sensitive Machinery', 'Data Center Server Cabinets & Telecom Towers', 'Commercial Buildings & Residential Villas'],
      technicalStandards: ['IEEE 80 / 142 Substation Grounding Guide', 'NFPA 780 Lightning Protection Systems', 'IEC 62305 Protection Against Lightning', 'IEC 61643-11 Low-Voltage Surge Protective Devices'],
      deliverables: ['Deep Bore Chemical Earth Pit with Copper Rod', 'Low-Resistivity Conductive Earth Compound', 'Pure Copper Busbars & Heavy Grounding Cables', 'Early Streamer Emission (ESE) Lightning Conductor', 'Official Digital Earth Resistance Test Certificate (<1.0Ω)'],
      typicalTimeline: '1 to 2 Working Days per Pit',
      warranty: '10-Year Maintenance-Free Earth Pit Performance Guarantee',
    },
    'vfd-pump': {
      scopeSummary: 'Variable Frequency Drive (VFD) panels and motor automation engineered for solar-powered agricultural tubewells, commercial constant-pressure water booster systems, industrial multi-pump cascades, and energy-saving motor soft starters.',
      applications: ['Agricultural Solar Tubewells (10HP - 50HP+)', 'Commercial Building Water Booster Systems', 'Factory Cooling Towers & Industrial Pumps', 'Municipal & Community Water Schemes'],
      technicalStandards: ['IEC 61800 Adjustable Speed Electrical Power Drive Systems', 'IP54/IP65 Dust & Water Enclosure Rating', 'MPPT Solar Pump Efficiency Algorithm', 'Overload, Dry Run & Under-Voltage Protection'],
      deliverables: ['Heavy-Duty Solar VFD Inverter / Controller (IP54/65)', 'Submersible / Surface High-Discharge Pump Unit', 'Auto-Switching Solar / WAPDA Dual-Supply Panel', 'Built-in Dry-Run, Overload & Phase Loss Sensors', 'Remote GSM / Mobile Water Flow Telemetry Option'],
      typicalTimeline: '3 to 6 Working Days',
      warranty: '2-Year Drive Warranty & 1-Year Pump Mechanical Warranty',
    },
    'electrical-maintenance': {
      scopeSummary: 'Preventive, predictive, and corrective electrical maintenance services. Features FLIR infrared thermographic scanning for loose/overheating connections, 3-phase load balancing, transformer/UPS servicing, breaker torque checks, and Annual Maintenance Contracts (AMC).',
      applications: ['Export Production Factories & Tanneries', 'Commercial Plazas & Corporate Buildings', 'Hospitals, Clinics & Data Centers', 'Solar PV Plants & Industrial Sub-Stations'],
      technicalStandards: ['NFPA 70B Recommended Practice for Electrical Equipment Maintenance', 'ISO 18434 Condition Monitoring and Diagnostics', 'IEC 60076 Power Transformers Maintenance', 'OSHA 1910 Electrical Safety in the Workplace'],
      deliverables: ['FLIR Infrared Thermographic Heatmap Report', '3-Phase Current & Voltage Harmonic Balancing', 'Breaker Contacts & Busbar Cleaning / Re-Torquing', 'Insulation Resistance (Megger) Test Logs', 'Priority 24/7 Emergency Breakdown SLA Dispatch'],
      typicalTimeline: 'Scheduled 1-Day Audit or Annual AMC Contract',
      warranty: 'Guaranteed 2 to 4-Hour Emergency Response SLA',
    },
    'epc-projects': {
      scopeSummary: 'Comprehensive Engineering, Procurement & Construction (EPC) turnkey execution under a single contract. From initial feasibility studies, architectural CAD drafting, and load calculations, to equipment procurement, mechanical/civil erection, electrical integration, and regulatory handovers.',
      applications: ['Complete Industrial Factory Setup & Electrification', 'Commercial High-Rise Buildings & Plazas', 'Grid-Scale Solar Power Plants (100kW - 1MW+)', 'Institutional Campus Infrastructure Delivery'],
      technicalStandards: ['PEC (Pakistan Engineering Council) Standards', 'FIDIC Turnkey Engineering Contract Framework', 'WAPDA / GEPCO Power Grid Interconnection Codes', 'International Building Code (IBC) Electrical Standards'],
      deliverables: ['Complete CAD Blueprints, Single Line Diagrams & MEP Plans', 'End-to-End Procurement of Tier-1 Equipment & Cables', 'Civil Foundations, Elevated Trusses & Mechanical Erection', 'Complete Electrical Electrification & Testing', 'WAPDA/GEPCO Inspection & Formal Project Handover'],
      typicalTimeline: '30 to 90 Days (Project Milestone Dependent)',
      warranty: 'Full 2-Year Comprehensive EPC Workmanship & Performance Guarantee',
    },
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const profile = detailedServiceProfiles[selectedService.id] || detailedServiceProfiles['solar-pv'];
  const SelectedIcon = getIcon(selectedService.iconName);
  const inCart = cartItems.some((i) => i.id === `srv-${selectedService.id}`);

  const handleAddCurrentServiceToCart = () => {
    addToCart(
      {
        id: `srv-${selectedService.id}`,
        name: `${selectedService.title} (Engineering Package)`,
        category: selectedService.category,
        categoryLabel: selectedService.badge || 'Engineering Service',
        brand: 'SMARTECH Turnkey Execution',
        specs: selectedService.features.slice(0, 3),
        type: 'service',
      },
      1
    );
  };

  return (
    <section id="services-directory" className="py-14 bg-[#FAF8F5] border-b border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Master Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E5DF]">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFF7ED] text-[#E14D2A] border border-[#FED7AA] text-xs font-bold uppercase tracking-widest rounded-md shadow-2xs">
                <Layers className="w-4 h-4" />
                <span>4. Services • Core Technical Disciplines</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1C1917] tracking-tight">
                Turnkey Engineering & Specialized Services Portfolio
              </h2>
              <p className="text-sm sm:text-base text-[#57534E]">
                Detailed technical blueprints, equipment specifications, testing standards, and scope of work across our 9 core engineering disciplines.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white border border-[#E8E5DF] p-3 rounded-xl shadow-xs text-xs font-mono text-[#1C1917]">
              <Award className="w-4 h-4 text-[#E14D2A]" />
              <span>PEC & IEEE Code Compliant Execution</span>
            </div>
          </div>
        </MotionReveal>

        {/* 9 Services Interactive Grid / Sidebar Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 9 Services Navigation List (Numbered 1 through 9) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#57534E] mb-3 px-1">
              Select Discipline to View Blueprint & Scope:
            </div>

            <div className="space-y-2">
              {SERVICES_DATA.map((srv, idx) => {
                const Icon = getIcon(srv.iconName);
                const isSelected = selectedServiceId === srv.id;

                return (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-[#1C1917] text-white border-[#E14D2A] shadow-md -translate-x-1 pl-4.5'
                        : 'bg-white hover:bg-[#FAF8F5] text-[#1C1917] border-[#E8E5DF]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isSelected
                            ? 'bg-[#E14D2A] text-white'
                            : 'bg-[#FAF8F5] text-[#57534E]'
                        }`}
                      >
                        {idx + 1}
                      </div>

                      <div>
                        <div className="font-heading font-bold text-sm leading-snug">
                          {srv.title}
                        </div>
                        <div
                          className={`text-[11px] truncate max-w-[220px] sm:max-w-[280px] ${
                            isSelected ? 'text-stone-300' : 'text-[#57534E]'
                          }`}
                        >
                          {srv.badge}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Icon
                        className={`w-4 h-4 ${
                          isSelected ? 'text-[#FF8A65]' : 'text-stone-400'
                        }`}
                      />
                      <ArrowRight
                        className={`w-4 h-4 ${
                          isSelected ? 'text-[#FF8A65] opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep-Dive Technical Detail View of Selected Service */}
          <div className="lg:col-span-7 bg-white border border-[#E8E5DF] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            {/* Top Bar of Active Discipline */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#E8E5DF]">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#FFF7ED] text-[#E14D2A] text-[11px] font-bold uppercase tracking-wider rounded-md border border-[#FED7AA]">
                  <SelectedIcon className="w-3.5 h-3.5" />
                  <span>{selectedService.badge}</span>
                </div>

                <h3 className="font-heading text-2xl font-black text-[#1C1917]">
                  {selectedService.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-xl">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div className="flex flex-col gap-2 flex-shrink-0">
                <button
                  onClick={() => onOpenQuoteModal(selectedService.title, selectedService.category)}
                  className="px-5 py-2.5 bg-[#E14D2A] hover:bg-[#C83B1B] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request RFQ Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleAddCurrentServiceToCart}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer border ${
                    inCart
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-[#FAF8F5] hover:bg-stone-200 text-[#1C1917] border-[#E8E5DF]'
                  }`}
                >
                  {inCart ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-[#E14D2A]" />}
                  <span>{inCart ? 'Added to Cart' : 'Add Scope to Cart'}</span>
                </button>
              </div>
            </div>

            {/* Scope Summary & Typical Applications */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#E14D2A]" />
                  <span>Engineering Scope & Execution Framework</span>
                </h4>
                <p className="text-xs text-[#57534E] bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8E5DF] leading-relaxed">
                  {profile.scopeSummary}
                </p>
              </div>

              {/* 2-Column Specs: Key Deliverables + Target Applications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Key Deliverables */}
                <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1C1917] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Included Hardware & Deliverables</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#57534E]">
                    {profile.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#E14D2A] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Applications */}
                <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1C1917] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#E14D2A]" />
                    <span>Target Facilities & Applications</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#57534E]">
                    {profile.applications.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-1.5">
                        <span className="text-[#E14D2A] font-bold">✓</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Codes & Standards Compliance */}
              <div className="p-4 bg-[#FFF7ED] border border-[#FED7AA] rounded-xl space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E14D2A] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Applicable Engineering Codes & Quality Standards</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {profile.technicalStandards.map((std, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-white border border-[#FED7AA] text-[#1C1917] text-[11px] font-mono font-semibold rounded-md shadow-2xs"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* SLA Timeline & Warranty Guarantee Footer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center gap-2.5 text-xs">
                  <Clock className="w-4 h-4 text-[#E14D2A] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#57534E] block">Commissioning SLA</span>
                    <span className="font-semibold text-[#1C1917]">{profile.typicalTimeline}</span>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center gap-2.5 text-xs">
                  <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#57534E] block">Warranty Commitment</span>
                    <span className="font-semibold text-[#1C1917]">{profile.warranty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

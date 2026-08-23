import React, { useState } from 'react';
import { FileSpreadsheet, Check, Download, ArrowRight, ShieldCheck, Zap, Camera, Network, Clock } from 'lucide-react';

interface BoqPricingGuideProps {
  onOpenQuoteModal: (packageName: string, category: string) => void;
}

export const BoqPricingGuide: React.FC<BoqPricingGuideProps> = ({ onOpenQuoteModal }) => {
  const [selectedBoq, setSelectedBoq] = useState<'10kw' | '20kw' | '50kw' | 'cctv32' | 'server42u'>('10kw');

  const boqPackages = {
    '10kw': {
      title: '10kW Hybrid Solar Turnkey BOQ Blueprint',
      idealFor: '1-Kanal Luxury Residential / Corporate Office (800-1,300 Units/Month)',
      category: 'Solar Energy Solutions',
      items: [
        { name: 'Tier-1 585W N-Type Bifacial Mono PERC Solar Panels', qty: '18 Units (10.53 kWp total)', brand: 'Longi / Jinko / Canadian' },
        { name: '10kW 3-Phase Dual-MPPT Hybrid Inverter (IP65)', qty: '1 Unit', brand: 'Growatt / Huawei / Deye' },
        { name: '10.24kWh LiFePO4 Lithium Battery Storage (51.2V 200Ah)', qty: '1 Unit (Wall/Floor)', brand: 'Dyness / Pylontech' },
        { name: 'Elevated Heavy-Duty Galvanized L2/L3 Structure (14-Gauge)', qty: 'Complete Array', brand: 'HDG Engineered' },
        { name: 'Pure Tinned Copper 4mm²/6mm² DC Cable & MC4 Connectors', qty: '150 Meters', brand: 'Pakistan Cables / Fast' },
        { name: 'DC Combiner Box with 1000V DC Breakers & SPDs Type II', qty: '1 Set', brand: 'Schneider / Suntree' },
        { name: 'Dedicated Chemical Grounding Pit with Copper Rod (<1 Ohm)', qty: '1 Pit Complete', brand: 'Smartech Standard' },
        { name: 'GEPCO/WAPDA Bi-Directional Green Net-Metering Documentation', qty: 'Turnkey Filing', brand: 'AEDB/NEPRA Approved' },
      ],
      estimatedGen: '1,250 to 1,450 Units / Month',
      warranty: '25-Year Panel Linear, 5-Year Inverter, 5-Year Battery',
    },
    '20kw': {
      title: '20kW On-Grid Commercial Plaza Solar BOQ',
      idealFor: 'Commercial Plazas, Banks, Clinics & Light Manufacturing (1,800-2,600 Units/Month)',
      category: 'Solar Energy Solutions',
      items: [
        { name: 'Tier-1 585W Monocrystalline Half-Cell Modules', qty: '36 Units (21.06 kWp)', brand: 'Longi Hi-MO X6 / Jinko Tiger Neo' },
        { name: '20kW 3-Phase Grid-Tied Inverter with Multi-MPPT & Wi-Fi', qty: '1 Unit', brand: 'Huawei SUN2000 / Sungrow' },
        { name: 'Hot-Dip Galvanized Rooftop Heavy Mounting Structure', qty: 'Engineered Rooftop', brand: 'Wind-Rated to 130 km/h' },
        { name: 'AC/DC Distribution Protection Boards with ABB/Schneider Breakers', qty: 'Dual Panel Enclosures', brand: 'Schneider Electric' },
        { name: 'Surge Protection Devices (SPD Type 1+2) & Earth Leakage Relays', qty: 'Complete Set', brand: 'Dehn / Suntree' },
        { name: 'Twin Chemical Earth Pits (Equipment + Lightning Protection)', qty: '2 Dedicated Pits', brand: 'Chemical Compound <0.8Ω' },
        { name: 'Full Turnkey NEPRA Net-Metering Testing & Commissioning', qty: 'Complete Formalities', brand: 'GEPCO Fast-Track' },
      ],
      estimatedGen: '2,600 to 2,900 Units / Month',
      warranty: '25-Year Panel Linear, 5 to 10-Year Inverter',
    },
    '50kw': {
      title: '50kW Industrial Hybrid/On-Grid Power Plant BOQ',
      idealFor: 'Export Factories, Surgical Instrument Units, Tannery Facilities (5,500-7,000 Units/Month)',
      category: 'Solar Energy Solutions',
      items: [
        { name: 'Tier-1 585W-600W Bifacial High-Yield Photovoltaic Modules', qty: '88 Units (51.48 kWp)', brand: 'Tier-1 Certified' },
        { name: '50kW 3-Phase Heavy-Duty Industrial String Inverter', qty: '1 Unit', brand: 'Huawei / Sungrow / Growatt' },
        { name: 'Custom Elevated Industrial Truss Structure (Custom Roof Height)', qty: 'Reinforced Steel', brand: 'Epoxy Coated HDG' },
        { name: '3-Phase Motor Control & Main Distribution Panel (MDB)', qty: '1 Industrial MDB', brand: 'Schneider MCCBs & Meters' },
        { name: 'Automatic Power Factor Correction (APFC) Integration', qty: 'Integrated Capacitor Bank', brand: 'Epcos / Ducati' },
        { name: 'Quad Chemical Earth Pits with Copper Busbar Interconnection', qty: '4 Grounding Pits', brand: '<0.5 Ohm Resistance' },
        { name: 'Industrial GEPCO 3-Phase Net-Metering Synchronization', qty: 'Complete End-to-End', brand: 'PEC Certified' },
      ],
      estimatedGen: '6,500 to 7,200 Units / Month',
      warranty: '25-Year Solar, 5-Year Inverter, 2-Year Full Workmanship',
    },
    'cctv32': {
      title: '32-Camera 4K AI Smart Surveillance BOQ',
      idealFor: 'Export Production Floors, Warehouses & Commercial Buildings',
      category: 'CCTV & Security Solutions',
      items: [
        { name: '4MP AcuSense Smart Human/Vehicle Detection Dome/Bullet IP Cameras', qty: '32 Cameras', brand: 'Hikvision / Dahua' },
        { name: '32-Channel 4K H.265+ Network Video Recorder (NVR)', qty: '1 Unit (4 SATA Bays)', brand: 'Hikvision AcuSense' },
        { name: 'Surveillance-Grade 8TB 24/7 Continuous Write Hard Drives', qty: '4x 8TB (32TB Total)', brand: 'Seagate SkyHawk AI / WD Purple' },
        { name: '24-Port Gigabit PoE+ Managed Switch (370W) + 8-Port PoE Switch', qty: '2 Units', brand: 'Hikvision / Cisco / Ruijie' },
        { name: '100% Solid Copper Cat6 UTP 23AWG Outdoor/Indoor Cable', qty: '6 Rolls (1,830m)', brand: 'Schneider / D-Link / Fast' },
        { name: '12U Wall-Mount Server Cabinet with Cooling Fans & PDU', qty: '1 Unit', brand: 'Toten / Smartech' },
        { name: 'Remote Mobile Streaming App & Multi-Screen Monitor Setup', qty: 'Complete Integration', brand: 'iOS/Android/Windows' },
      ],
      estimatedGen: '30+ Days Continuous 4K Recording Retention',
      warranty: '2-Year Hardware Warranty + Lifetime App Support',
    },
    'server42u': {
      title: '42U Enterprise Server Rack & Structured Cabling BOQ',
      idealFor: 'Corporate IT Server Rooms, ERP Data Centers & Branch Headquarters',
      category: 'Networking Solutions',
      items: [
        { name: '42U Floor-Standing Server Rack (800x1000mm) with Dual Mesh Doors', qty: '1 Unit', brand: 'Toten Enterprise' },
        { name: '24-Port Cat6A Shielded Patch Panels with Cable Management Organizers', qty: '4 Units', brand: 'CommScope / Schneider' },
        { name: '48-Port Layer-3 Gigabit Managed PoE+ Core Switch + 10G SFP+ Uplinks', qty: '1 Unit', brand: 'Cisco / Ubiquiti UniFi' },
        { name: '8-Core Armored Single-Mode Outdoor Optical Fiber Link', qty: '200 Meters', brand: 'Corning / YOFC' },
        { name: 'Fluke DSX-8000 Permanent Link Certification for All 96 Drops', qty: '96 Test Reports', brand: 'Fluke Networks Certified' },
        { name: '6kVA Online Double-Conversion Rackmount UPS with Battery Bank', qty: '1 Unit', brand: 'APC / Eaton' },
        { name: 'Low Resistance Clean Earth Grounding Busbar (<0.8 Ohm)', qty: '1 Dedicated Setup', brand: 'Pure Electrolytic Copper' },
      ],
      estimatedGen: '10Gbps High-Throughput Backbone Uptime',
      warranty: '25-Year Performance Cabling Warranty',
    },
  };

  const activeBoqData = boqPackages[selectedBoq];

  return (
    <section className="py-12 bg-white border border-gray-200 rounded-xs shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-[#1D4ED8] text-xs font-bold uppercase tracking-widest rounded-xs mb-2">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Bill of Quantities (BOQ) Blueprint</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
              Sample Turnkey Engineering BOQ Specifications
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Transparent, itemized component lists showing exactly what hardware, cabling, protection gear, and certifications are included in our installations.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono bg-slate-50 border p-2 rounded-xs">
            <Clock className="w-4 h-4 text-[#1D4ED8]" />
            <span>Turnkey SLA: <strong>5-12 Days Commissioning</strong></span>
          </div>
        </div>

        {/* BOQ Selection Tabs */}
        <div className="flex flex-wrap gap-2 pt-6 mb-6">
          {[
            { id: '10kw', label: '10kW Hybrid Solar BOQ' },
            { id: '20kw', label: '20kW Commercial Solar BOQ' },
            { id: '50kw', label: '50kW Industrial Solar BOQ' },
            { id: 'cctv32', label: '32-Cam 4K Security BOQ' },
            { id: 'server42u', label: '42U IT Server Rack BOQ' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedBoq(item.id as any)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                selectedBoq === item.id
                  ? 'bg-[#1D4ED8] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Active BOQ Card */}
        <div className="bg-[#F8FAFC] border border-gray-200 rounded-xs p-6 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-200">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-2 py-0.5 border border-blue-200 rounded">
                Verified Turnkey Package
              </span>
              <h3 className="font-heading text-xl font-bold text-[#0F172A] mt-1">
                {activeBoqData.title}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                <strong>Target Application:</strong> {activeBoqData.idealFor}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="p-2.5 bg-white border border-gray-200 rounded-xs text-center">
                <div className="text-[9px] uppercase font-bold text-slate-500">Benchmark Performance</div>
                <div className="text-xs font-black text-[#1D4ED8] font-mono">{activeBoqData.estimatedGen}</div>
              </div>

              <button
                onClick={() => onOpenQuoteModal(activeBoqData.title, activeBoqData.category)}
                className="px-5 py-2.5 bg-[#1D4ED8] hover:bg-[#0A192F] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom BOQ Cost</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-xs">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-100/80 border-b border-gray-200 text-slate-700 font-bold uppercase tracking-wider">
                  <th className="py-2.5 px-4 w-12 text-center">#</th>
                  <th className="py-2.5 px-4">Component & Technical Specification</th>
                  <th className="py-2.5 px-4">Quantity / Dimension</th>
                  <th className="py-2.5 px-4">Recommended OEM Brand</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activeBoqData.items.map((it, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="py-2.5 px-4 text-center font-mono font-bold text-slate-400">
                      {idx + 1}
                    </td>
                    <td className="py-2.5 px-4 font-semibold text-[#0F172A]">
                      {it.name}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-slate-700">
                      {it.qty}
                    </td>
                    <td className="py-2.5 px-4">
                      <span className="bg-slate-100 text-slate-800 font-mono text-[11px] px-2 py-0.5 rounded border border-slate-200">
                        {it.brand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Warranty & Guarantee footer */}
          <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
              <span><strong>Hardware Warranty:</strong> {activeBoqData.warranty}</span>
            </div>
            <div className="text-slate-600 text-[11px]">
              Includes full engineering drawings, Single Line Diagram (SLD) & Fluke testing reports.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

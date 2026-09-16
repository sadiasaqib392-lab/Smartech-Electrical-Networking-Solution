import React, { useState } from 'react';
import { Shield, Award, CheckCircle, FileText, Clock, MapPin, Wrench, Zap, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { MotionReveal } from './MotionReveal';

export const EngineeringStandardsManual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standards' | 'sla' | 'testing' | 'coverage'>('standards');

  return (
    <section className="py-12 bg-[#FAF8F5] border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <MotionReveal>
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF7ED] border border-[#FED7AA] text-[#E14D2A] text-xs font-bold uppercase tracking-widest rounded-lg mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Technical Authority & Compliance</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#1C1917] tracking-tight">
              Engineering Standards & Technical Governance
            </h2>
            <p className="text-sm text-[#57534E] mt-2">
              Every electrical, solar, network, and security infrastructure project installed by Smartech strictly conforms to Pakistan Engineering Council (PEC) codes and international IEC / IEEE / TIA quality frameworks.
            </p>
          </div>
        </MotionReveal>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E8E5DF] pb-3 mb-8">
          {[
            { id: 'standards', label: '1. Engineering Codes & Standards', icon: <Shield className="w-4 h-4" /> },
            { id: 'sla', label: '2. SLA & Warranty Framework', icon: <Clock className="w-4 h-4" /> },
            { id: 'testing', label: '3. Testing & Commissioning Protocols', icon: <Wrench className="w-4 h-4" /> },
            { id: 'coverage', label: '4. Regional Service Matrix', icon: <MapPin className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#E14D2A] text-white shadow-xs'
                  : 'bg-white text-[#57534E] hover:bg-[#FAF8F5] border border-[#E8E5DF]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Engineering Codes & Standards */}
        {activeTab === 'standards' && (
          <motion.div
            key="standards"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Box 1: Solar & Inverter Codes */}
            <div className="p-6 bg-white border border-[#E8E5DF] rounded-2xl shadow-xs space-y-4">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 flex items-center justify-center rounded-xl font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#1C1917] uppercase tracking-wide">
                Photovoltaic & Power Standards
              </h3>
              <ul className="space-y-2.5 text-xs text-[#57534E]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>IEC 61215 / 61730:</strong> PV module design qualification and safety certification against micro-cracks and PID degradation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>IEC 62109-1/2:</strong> Safety of power converters & solar inverters for use in photovoltaic power systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>NEPRA / AEDB Net-Metering:</strong> Full adherence to distribution company (GEPCO/LESCO/FESCO) inter-connection guidelines.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Structured Cabling & Networking */}
            <div className="p-6 bg-white border border-[#E8E5DF] rounded-2xl shadow-xs space-y-4">
              <div className="w-10 h-10 bg-[#FFF7ED] text-[#E14D2A] flex items-center justify-center rounded-xl font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#1C1917] uppercase tracking-wide">
                Networking & Optical Cabling
              </h3>
              <ul className="space-y-2.5 text-xs text-[#57534E]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>ANSI/TIA-568-C.2:</strong> Balanced twisted-pair Cat6/Cat6A telecommunications cabling & component standards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>ISO/IEC 11801:</strong> Generic cabling systems for commercial customer premises and data centers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>ITU-T G.652.D:</strong> Low water peak single-mode optical fiber standards for zero-loss long-distance industrial backbones.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Earthing & Lightning Safety */}
            <div className="p-6 bg-white border border-[#E8E5DF] rounded-2xl shadow-xs space-y-4">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-xl font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#1C1917] uppercase tracking-wide">
                Earthing & Surge Protection
              </h3>
              <ul className="space-y-2.5 text-xs text-[#57534E]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>IEEE 80 / 142 (Green Book):</strong> Grounding of industrial and commercial power systems with target resistance &lt;1.0 Ohm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>NFPA 780 / IEC 62305:</strong> Protection against lightning strikes with Faraday air terminals and down-conductor bonding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E14D2A] shrink-0 mt-0.5" />
                  <span><strong>IEC 61643-11:</strong> Low-voltage Surge Protective Devices (SPD Type 1+2) against utility transient overvoltages.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Tab 2: SLA & Warranty Framework */}
        {activeTab === 'sla' && (
          <motion.div
            key="sla"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-[#E8E5DF] rounded-2xl p-6 shadow-xs"
          >
            <h3 className="font-heading text-lg font-bold text-[#1C1917] uppercase tracking-wide mb-4">
              Equipment Warranty & Service Level Commitments
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E8E5DF] bg-[#FAF8F5] font-bold uppercase tracking-wider text-[#1C1917]">
                    <th className="py-3 px-4">System / Equipment</th>
                    <th className="py-3 px-4">Hardware Warranty</th>
                    <th className="py-3 px-4">Performance Guarantee</th>
                    <th className="py-3 px-4">Maintenance Support</th>
                    <th className="py-3 px-4">Turnaround SLA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DF]">
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1C1917]">Tier-1 Solar PV Modules</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">12-Year Product Warranty</td>
                    <td className="py-3 px-4">25-Year Linear Power Output (84.8%+)</td>
                    <td className="py-3 px-4">Free 1st Year Bi-Monthly Inspection</td>
                    <td className="py-3 px-4 font-mono font-bold text-[#E14D2A]">Within 24 Hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1C1917]">Hybrid & On-Grid Inverters</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">5 to 10-Year Replacement</td>
                    <td className="py-3 px-4">98.4%+ MPPT Peak Efficiency</td>
                    <td className="py-3 px-4">Cloud Firmware & Performance Monitoring</td>
                    <td className="py-3 px-4 font-mono font-bold text-[#E14D2A]">Within 4 Hours (Emergency)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1C1917]">LiFePO4 Lithium Batteries</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">5-Year Full Replacement</td>
                    <td className="py-3 px-4">6,000 Cycles @ 80% Depth of Discharge</td>
                    <td className="py-3 px-4">BMS Cell Voltage Health Auditing</td>
                    <td className="py-3 px-4 font-mono font-bold text-[#E14D2A]">Within 12 Hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1C1917]">CCTV Surveillance Systems</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">2-Year Comprehensive</td>
                    <td className="py-3 px-4">24/7 Continuous Recording & Remote Stream</td>
                    <td className="py-3 px-4">Free App Re-configuration & Backup</td>
                    <td className="py-3 px-4 font-mono font-bold text-[#E14D2A]">Same-Day Dispatch</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1C1917]">Chemical Grounding Pits</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">3-Year Resistance Retention</td>
                    <td className="py-3 px-4">&lt; 1.0 Ohm Earth Resistance Guaranteed</td>
                    <td className="py-3 px-4">Annual Earth Resistance Meter Recalibration</td>
                    <td className="py-3 px-4 font-mono font-bold text-[#E14D2A]">Within 24 Hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Testing Protocols */}
        {activeTab === 'testing' && (
          <motion.div
            key="testing"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-6 bg-white border border-[#E8E5DF] rounded-2xl space-y-4 shadow-xs">
              <h3 className="font-heading text-base font-bold text-[#1C1917] uppercase tracking-wide flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#E14D2A]" />
                <span>Electrical & Solar Commissioning Checklist</span>
              </h3>
              <p className="text-xs text-[#57534E]">
                Prior to handing over any electrical or solar power system to the client, our certified engineers execute an 8-point physical verification protocol:
              </p>
              <div className="space-y-2 text-xs text-[#1C1917]">
                <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center justify-between">
                  <span>1. Open Circuit Voltage (Voc) & Short Circuit Current (Isc) Verification</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">PASSED</span>
                </div>
                <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center justify-between">
                  <span>2. Insulation Resistance (Megger Test at 1000V DC)</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">PASSED</span>
                </div>
                <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center justify-between">
                  <span>3. Infrared Thermographic Camera Scan for Hotspots & Loose Terminals</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">PASSED</span>
                </div>
                <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center justify-between">
                  <span>4. 3-Phase Phase Rotation & Neutral-to-Earth Voltage Balance (&lt;2V)</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">PASSED</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E8E5DF] rounded-2xl space-y-4 shadow-xs">
              <h3 className="font-heading text-base font-bold text-[#1C1917] uppercase tracking-wide flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E14D2A]" />
                <span>Cabling & Network Certification Testing</span>
              </h3>
              <p className="text-xs text-[#57534E]">
                All data drops and optical links are certified using industry-standard Fluke Networks instruments:
              </p>
              <div className="space-y-2 text-xs text-[#1C1917]">
                <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center justify-between">
                  <span>1. Fluke DSX-8000 Cat6/6A Channel & Permanent Link Certification</span>
                  <span className="text-[10px] font-mono font-bold text-[#E14D2A] bg-[#FFF7ED] border border-[#FED7AA] px-2 py-0.5 rounded-md">REPORT PROVIDED</span>
                </div>
                <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center justify-between">
                  <span>2. OTDR Fiber Core Attenuation & Fusion Splice Loss (&lt;0.05dB)</span>
                  <span className="text-[10px] font-mono font-bold text-[#E14D2A] bg-[#FFF7ED] border border-[#FED7AA] px-2 py-0.5 rounded-md">REPORT PROVIDED</span>
                </div>
                <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center justify-between">
                  <span>3. Wi-Fi Heatmap Signal Strength RSSI Coverage Verification (&gt;-65dBm)</span>
                  <span className="text-[10px] font-mono font-bold text-[#E14D2A] bg-[#FFF7ED] border border-[#FED7AA] px-2 py-0.5 rounded-md">REPORT PROVIDED</span>
                </div>
                <div className="p-2.5 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl flex items-center justify-between">
                  <span>4. As-Built Single Line Diagrams (SLD) & Cable Schedule Documentation</span>
                  <span className="text-[10px] font-mono font-bold text-[#E14D2A] bg-[#FFF7ED] border border-[#FED7AA] px-2 py-0.5 rounded-md">INCLUDED</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 4: Regional Service Matrix */}
        {activeTab === 'coverage' && (
          <motion.div
            key="coverage"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-[#E8E5DF] rounded-2xl p-6 shadow-xs"
          >
            <h3 className="font-heading text-base font-bold text-[#1C1917] uppercase tracking-wide mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E14D2A]" />
              <span>Sialkot & Punjab Industrial Service Territory & Response Times</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl">
                <div className="text-xs font-black uppercase text-[#E14D2A]">Sialkot City Hub</div>
                <div className="text-[11px] text-[#57534E] mt-1">Paris Rd, Defense Rd, Small Industrial Estate, Cantt</div>
                <div className="mt-3 pt-2 border-t border-[#E8E5DF] text-xs font-mono font-bold text-emerald-700">
                  🚀 Emergency Response: 1 - 2 Hours
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl">
                <div className="text-xs font-black uppercase text-[#E14D2A]">Daska & Sambrial Zone</div>
                <div className="text-[11px] text-[#57534E] mt-1">Dry Port, Export Processing Zone, Sialkot Airport corridor</div>
                <div className="mt-3 pt-2 border-t border-[#E8E5DF] text-xs font-mono font-bold text-emerald-700">
                  🚀 Emergency Response: 2 - 3 Hours
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl">
                <div className="text-xs font-black uppercase text-[#E14D2A]">Gujranwala & Wazirabad</div>
                <div className="text-[11px] text-[#57534E] mt-1">G.T. Road Industrial corridor, Cutlery cluster, Fan industry</div>
                <div className="mt-3 pt-2 border-t border-[#E8E5DF] text-xs font-mono font-bold text-[#E14D2A]">
                  ⏱️ Response: 3 - 5 Hours
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl">
                <div className="text-xs font-black uppercase text-[#E14D2A]">Lahore & Greater Punjab</div>
                <div className="text-[11px] text-[#57534E] mt-1">Sundar Industrial Estate, Quaid-e-Azam Industrial, Faisalabad</div>
                <div className="mt-3 pt-2 border-t border-[#E8E5DF] text-xs font-mono font-bold text-[#E14D2A]">
                  ⏱️ Scheduled / Same-Day Dispatch
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Camera, HardDrive, Network, Zap, CheckCircle2, Shield, ArrowRight, Server, Activity } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface CctvNetworkCalculatorProps {
  onOpenQuoteModal: (systemDetails: string, category: string) => void;
}

export const CctvNetworkCalculator: React.FC<CctvNetworkCalculatorProps> = ({ onOpenQuoteModal }) => {
  // CCTV State
  const [cameraCount, setCameraCount] = useState<number>(8);
  const [resolution, setResolution] = useState<'2mp' | '4mp' | '8mp'>('4mp');
  const [retentionDays, setRetentionDays] = useState<number>(30);
  const [recordingMode, setRecordingMode] = useState<'24/7' | 'motion'>('24/7');
  const [compression, setCompression] = useState<'h265' | 'h264'>('h265');

  // Network State
  const [networkDrops, setNetworkDrops] = useState<number>(24);
  const [poeDevices, setPoeDevices] = useState<number>(12);
  const [hasFiberBackbone, setHasFiberBackbone] = useState<boolean>(true);

  // CCTV Math
  // Bitrates in Mbps per stream
  const bitrates = {
    '2mp': compression === 'h265' ? 2 : 4,
    '4mp': compression === 'h265' ? 4 : 8,
    '8mp': compression === 'h265' ? 8 : 16,
  };
  const activeBitrateMbps = bitrates[resolution];
  const recordingFactor = recordingMode === '24/7' ? 1.0 : 0.45; // motion is ~45% continuous

  // Formula: (Bitrate in Mbps * 3600 sec * 24 hrs * days * cameras * factor) / (8 * 1,000,000) = TB
  const dailyGigabytesPerCam = (activeBitrateMbps * 3600 * 24 * recordingFactor) / (8 * 1000);
  const totalRawStorageTB = (dailyGigabytesPerCam * retentionDays * cameraCount) / 1000;
  const recommendedStorageTB = Math.max(1, Math.ceil(totalRawStorageTB * 1.15)); // 15% safety buffer

  // Hard drives suggestion
  const suggestedHddCount = recommendedStorageTB <= 4 ? '1x 4TB Surveillance HDD' : recommendedStorageTB <= 8 ? '1x 8TB Surveillance HDD' : recommendedStorageTB <= 16 ? '2x 8TB Surveillance HDDs (RAID Supported)' : `${Math.ceil(recommendedStorageTB / 8)}x 8TB Enterprise HDDs`;
  
  // Recommended NVR
  const recommendedNvr = cameraCount <= 4 ? '4-Channel 4K NVR (1 SATA)' : cameraCount <= 8 ? '8-Channel 4K AcuSense NVR (2 SATA)' : cameraCount <= 16 ? '16-Channel 4K AI NVR (2 SATA)' : '32-Channel Enterprise 4K NVR (4/8 SATA)';

  // Network Calculations
  const requiredPoEBdugetWatts = poeDevices * 18 + 50; // ~18W per IP cam/AP + overhead
  const suggestedRackSize = networkDrops <= 12 ? '6U Wall Mount' : networkDrops <= 24 ? '9U / 12U Wall Mount' : networkDrops <= 48 ? '18U / 24U Floor Standing' : '42U Server Rack';
  const suggestedSwitch = networkDrops <= 8 ? '8-Port Gigabit PoE+' : networkDrops <= 16 ? '16-Port Gigabit PoE+ (150W)' : networkDrops <= 24 ? '24-Port Gigabit Managed PoE+ (370W) + 4x SFP' : '48-Port Layer-3 Managed PoE+ (500W) + 10G SFP+';

  const handleRequestCctvQuote = () => {
    const details = `${cameraCount}x ${resolution.toUpperCase()} IP CCTV System (${suggestedHddCount}, ${recommendedNvr}, ${retentionDays} Days Retention, ${suggestedSwitch}, ${suggestedRackSize})`;
    onOpenQuoteModal(details, 'CCTV & Security Solutions');
  };

  return (
    <section className="py-12 bg-white border border-[#E8E5DF] rounded-2xl shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E8E5DF]">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFF7ED] text-[#E14D2A] border border-[#FED7AA] text-xs font-bold uppercase tracking-widest rounded-md mb-2 shadow-2xs">
                <Camera className="w-3.5 h-3.5" />
                <span>Surveillance & Network Engineering Tool</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#1C1917] tracking-tight">
                CCTV Storage & Network Switch Estimator
              </h2>
              <p className="text-sm text-[#57534E] mt-1 max-w-xl">
                Calculate exact surveillance hard drive storage (TB), NVR channel sizing, PoE power budgets, server rack units (U), and network throughput.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#E8E5DF] p-2.5 rounded-lg text-xs font-mono text-[#57534E]">
              <Activity className="w-4 h-4 text-[#E14D2A]" />
              <span>H.265+ Compression Efficiency: <strong className="text-[#1C1917]">Up to 50% Storage Saved</strong></span>
            </div>
          </div>
        </MotionReveal>

        {/* Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Resolution Selector */}
            <MotionReveal delay={0.05}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-2">
                  1. Select Camera Optical Resolution
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '2mp', label: '2MP (1080p)', desc: 'Standard HD Clarity' },
                    { id: '4mp', label: '4MP (2K Super HD)', desc: 'Recommended Standard' },
                    { id: '8mp', label: '8MP (4K Ultra HD)', desc: 'High Detail & Facial' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setResolution(item.id as any)}
                      className={`p-3 text-left border rounded-xl transition-all cursor-pointer ${
                        resolution === item.id
                          ? 'border-[#E14D2A] bg-[#FFF7ED]/70 shadow-xs'
                          : 'border-[#E8E5DF] bg-[#FAF8F5] hover:border-stone-400'
                      }`}
                    >
                      <div className={`text-xs font-black uppercase ${resolution === item.id ? 'text-[#E14D2A]' : 'text-[#1C1917]'}`}>
                        {item.label}
                      </div>
                      <div className="text-[10px] text-[#57534E] mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </MotionReveal>

            {/* Slider 1: Camera Count */}
            <MotionReveal delay={0.1}>
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Number of IP Security Cameras
                  </span>
                  <span className="font-mono font-black text-base text-[#E14D2A] bg-white px-2.5 py-0.5 border border-[#FED7AA] rounded-md shadow-2xs">
                    {cameraCount} Cameras
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={64}
                  step={2}
                  value={cameraCount}
                  onChange={(e) => setCameraCount(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E14D2A]"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-500">
                  <span>4 Cams (Home)</span>
                  <span>16 Cams (Office/Shop)</span>
                  <span>64 Cams (Factory/Campus)</span>
                </div>
              </div>
            </MotionReveal>

            {/* Slider 2: Retention Days */}
            <MotionReveal delay={0.15}>
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Required Continuous Recording Retention
                  </span>
                  <span className="font-mono font-black text-base text-[#1C1917] bg-white px-2.5 py-0.5 border border-[#E8E5DF] rounded-md shadow-2xs">
                    {retentionDays} Days History
                  </span>
                </div>
                <input
                  type="range"
                  min={7}
                  max={90}
                  step={7}
                  value={retentionDays}
                  onChange={(e) => setRetentionDays(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E14D2A]"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-500">
                  <span>7 Days</span>
                  <span>30 Days (Standard)</span>
                  <span>90 Days (Compliance)</span>
                </div>
              </div>
            </MotionReveal>

            {/* Settings Row */}
            <MotionReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Encoding Format
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCompression('h265')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                        compression === 'h265' ? 'bg-[#E14D2A] text-white shadow-xs' : 'bg-white border border-[#E8E5DF] text-[#1C1917]'
                      }`}
                    >
                      H.265+ (Smart)
                    </button>
                    <button
                      onClick={() => setCompression('h264')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                        compression === 'h264' ? 'bg-[#E14D2A] text-white shadow-xs' : 'bg-white border border-[#E8E5DF] text-[#1C1917]'
                      }`}
                    >
                      H.264 (Legacy)
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5] border border-[#E8E5DF] rounded-xl">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Recording Trigger
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setRecordingMode('24/7')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                        recordingMode === '24/7' ? 'bg-[#E14D2A] text-white shadow-xs' : 'bg-white border border-[#E8E5DF] text-[#1C1917]'
                      }`}
                    >
                      24/7 Non-Stop
                    </button>
                    <button
                      onClick={() => setRecordingMode('motion')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                        recordingMode === 'motion' ? 'bg-[#E14D2A] text-white shadow-xs' : 'bg-white border border-[#E8E5DF] text-[#1C1917]'
                      }`}
                    >
                      Smart Motion
                    </button>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Output Blueprint (5 cols) */}
          <div className="lg:col-span-5">
            <MotionReveal delay={0.15}>
              <div className="bg-[#1C1917] text-white p-6 rounded-2xl border-l-4 border-[#E14D2A] shadow-xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF8A65]">
                        Calculated Storage & Hardware
                      </span>
                      <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                        Surveillance BOQ
                      </h3>
                    </div>
                    <div className="w-16 h-10 bg-[#E14D2A] text-white flex items-center justify-center rounded-xl font-mono font-black text-sm shadow-md">
                      {recommendedStorageTB} TB
                    </div>
                  </div>

                  {/* Specs Breakdown */}
                  <div className="space-y-3 pt-4 text-xs font-mono">
                    <div className="flex items-center justify-between py-1.5 border-b border-stone-800">
                      <span className="text-stone-300 flex items-center gap-1.5">
                        <HardDrive className="w-3.5 h-3.5 text-[#FF8A65]" />
                        Storage Capacity:
                      </span>
                      <strong className="text-white font-bold">{suggestedHddCount}</strong>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-b border-stone-800">
                      <span className="text-stone-300 flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-amber-400" />
                        NVR Channel Sizing:
                      </span>
                      <strong className="text-white font-bold text-right text-[11px]">{recommendedNvr}</strong>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-b border-stone-800">
                      <span className="text-stone-300 flex items-center gap-1.5">
                        <Network className="w-3.5 h-3.5 text-emerald-400" />
                        Network Switch:
                      </span>
                      <strong className="text-white font-bold text-right text-[11px]">{suggestedSwitch}</strong>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-b border-stone-800">
                      <span className="text-stone-300 flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5 text-orange-400" />
                        Rack Cabinet Size:
                      </span>
                      <strong className="text-white font-bold">{suggestedRackSize}</strong>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-b border-stone-800">
                      <span className="text-stone-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#FF8A65]" />
                        Estimated PoE Power:
                      </span>
                      <strong className="text-emerald-400 font-bold">~{requiredPoEBdugetWatts} Watts Total</strong>
                    </div>
                  </div>

                  {/* Deliverable Quality Highlights */}
                  <div className="mt-5 p-3.5 bg-[#292524] border border-stone-700 rounded-xl space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF8A65]">
                      Included in Turnkey Package
                    </div>
                    <div className="text-[11px] text-stone-300 space-y-1 pt-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A65]" />
                        <span>Pure Copper Cat6 Cabling + RJ45 Terminations</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A65]" />
                        <span>Remote Mobile App Configuration for iOS / Android</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A65]" />
                        <span>2-Year Equipment Warranty with 24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-2">
                  <button
                    onClick={handleRequestCctvQuote}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#E14D2A] hover:bg-[#C83B1B] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    <span>Request Custom Surveillance Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

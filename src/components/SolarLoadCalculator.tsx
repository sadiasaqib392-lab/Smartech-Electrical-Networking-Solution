import React, { useState } from 'react';
import { Calculator, Zap, Sun, Battery, DollarSign, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

interface SolarLoadCalculatorProps {
  onOpenQuoteModal: (systemDetails: string, category: string) => void;
}

export const SolarLoadCalculator: React.FC<SolarLoadCalculatorProps> = ({ onOpenQuoteModal }) => {
  // Calculator State
  const [monthlyUnits, setMonthlyUnits] = useState<number>(650);
  const [averageMonthlyBill, setAverageMonthlyBill] = useState<number>(38000);
  const [systemType, setSystemType] = useState<'ongrid' | 'hybrid' | 'offgrid'>('ongrid');
  const [roofAreaSqFt, setRoofAreaSqFt] = useState<number>(800);
  const [hasNetMetering, setHasNetMetering] = useState<boolean>(true);

  // Computed Engineering Calculations
  // Avg 1 kW produces approx 120-130 units/month in Punjab/Sialkot
  const recommendedKw = Math.max(3, Math.round((monthlyUnits / 125) * 10) / 10);
  const panelCount580W = Math.ceil((recommendedKw * 1000) / 585);
  const estimatedAreaNeededSqFt = panelCount580W * 28; // ~28 sq ft per high-wattage panel
  
  // Approximate savings in PKR
  const estimatedMonthlyGenerationUnits = Math.round(recommendedKw * 125);
  const unitRatePkr = 58; // Approx PKR per commercial/peak residential unit in 2024-2026
  const estimatedMonthlySavingsPkr = Math.min(
    averageMonthlyBill,
    Math.round(estimatedMonthlyGenerationUnits * unitRatePkr * 0.9)
  );
  const annualSavingsPkr = estimatedMonthlySavingsPkr * 12;

  // Inverter and Battery suggestion
  const suggestedInverter = recommendedKw <= 6 ? '6kW Hybrid IP65 Inverter' : recommendedKw <= 10 ? '10kW 3-Phase On-Grid / Hybrid' : `${Math.ceil(recommendedKw)}kW High-Efficiency String Inverter`;
  const batteryAh = systemType === 'ongrid' ? 'No Battery (Direct Net Metering)' : recommendedKw <= 6 ? '100Ah 48V Lithium LiFePO4 (5.12kWh)' : '200Ah 48V Lithium LiFePO4 Rack (10.24kWh)';

  const handleRequestCalculatedQuote = () => {
    const summary = `${recommendedKw}kW ${systemType.toUpperCase()} Solar System (${panelCount580W}x 585W N-Type Panels, ${suggestedInverter}, ${batteryAh}, Est Monthly Savings PKR ${estimatedMonthlySavingsPkr.toLocaleString()})`;
    onOpenQuoteModal(summary, 'Solar Energy Solutions');
  };

  return (
    <section className="py-12 bg-white border border-gray-200 rounded-xs shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-[#1D4ED8] text-xs font-bold uppercase tracking-widest rounded-xs mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Engineering Load & ROI Estimator</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
              Solar & Energy Capacity Calculator
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Calculate your required Solar System capacity, roof area requirements, Tier-1 panel quantities, and estimated monthly electricity savings for Sialkot & Punjab.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-xs text-xs font-mono">
            <Cpu className="w-4 h-4 text-[#1D4ED8]" />
            <span>Punjab Solar Irradiance Index: <strong>4.8 - 5.4 kWh/m²/day</strong></span>
          </div>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* System Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Solar System Architecture
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'ongrid', label: 'On-Grid', desc: 'Net-Metering Grid Sync' },
                  { id: 'hybrid', label: 'Hybrid', desc: 'Net-Metering + Lithium Battery' },
                  { id: 'offgrid', label: 'Off-Grid', desc: '100% Battery Backup' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSystemType(item.id as any)}
                    className={`p-3 text-left border rounded-xs transition-all cursor-pointer ${
                      systemType === item.id
                        ? 'border-[#1D4ED8] bg-blue-50/70 shadow-xs'
                        : 'border-gray-200 bg-[#F8FAFC] hover:border-slate-300'
                    }`}
                  >
                    <div className={`text-xs font-black uppercase ${systemType === item.id ? 'text-[#1D4ED8]' : 'text-[#0F172A]'}`}>
                      {item.label}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Monthly Units */}
            <div className="p-4 bg-[#F8FAFC] border border-gray-200 rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Average Monthly Electricity Consumption
                </span>
                <span className="font-mono font-black text-base text-[#1D4ED8] bg-white px-2.5 py-0.5 border border-blue-200 rounded-xs">
                  {monthlyUnits} Units / Month
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={3500}
                step={50}
                value={monthlyUnits}
                onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1D4ED8]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>200 Units (Small Home)</span>
                <span>1,200 Units (5-10 Marla)</span>
                <span>3,500+ Units (Commercial/Factory)</span>
              </div>
            </div>

            {/* Slider 2: Average Monthly Bill */}
            <div className="p-4 bg-[#F8FAFC] border border-gray-200 rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Current Average WAPDA / GEPCO Bill
                </span>
                <span className="font-mono font-black text-base text-[#0F172A] bg-white px-2.5 py-0.5 border border-slate-200 rounded-xs">
                  PKR {averageMonthlyBill.toLocaleString()} / Mo
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={250000}
                step={5000}
                value={averageMonthlyBill}
                onChange={(e) => setAverageMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1D4ED8]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>PKR 10,000</span>
                <span>PKR 100,000</span>
                <span>PKR 250,000+</span>
              </div>
            </div>

            {/* Net Metering & Roof Space Check */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Rooftop / Ground Area Available
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={200}
                    max={10000}
                    step={100}
                    value={roofAreaSqFt}
                    onChange={(e) => setRoofAreaSqFt(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 bg-white border border-gray-300 text-xs font-bold rounded-xs"
                  />
                  <span className="text-xs text-slate-500 font-mono">Sq.Ft</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700">GEPCO Net Metering</div>
                  <div className="text-[10px] text-slate-500">Enable bi-directional grid export</div>
                </div>
                <input
                  type="checkbox"
                  checked={hasNetMetering}
                  onChange={(e) => setHasNetMetering(e.target.checked)}
                  className="w-4 h-4 text-[#1D4ED8] rounded-xs accent-[#1D4ED8]"
                />
              </div>
            </div>
          </div>

          {/* Right Engineering Output Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A192F] text-white p-6 rounded-xs border-l-4 border-[#1D4ED8] shadow-lg flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/60">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">
                    Calculated Engineering Blueprint
                  </span>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                    Recommended System
                  </h3>
                </div>
                <div className="w-10 h-10 bg-[#1D4ED8] text-white flex items-center justify-center rounded-xs font-mono font-black text-sm">
                  {recommendedKw}kW
                </div>
              </div>

              {/* Specification Metrics */}
              <div className="space-y-3.5 pt-4 text-xs font-mono">
                <div className="flex items-center justify-between py-1.5 border-b border-blue-950">
                  <span className="text-blue-200/80 flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    Tier-1 N-Type Panels (585W):
                  </span>
                  <strong className="text-white font-bold">{panelCount580W} Panels</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-blue-950">
                  <span className="text-blue-200/80 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                    Inverter Specification:
                  </span>
                  <strong className="text-white font-bold text-right text-[11px]">{suggestedInverter}</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-blue-950">
                  <span className="text-blue-200/80 flex items-center gap-1.5">
                    <Battery className="w-3.5 h-3.5 text-emerald-400" />
                    Storage / Backup:
                  </span>
                  <strong className="text-white font-bold text-right text-[11px]">{batteryAh}</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-blue-950">
                  <span className="text-blue-200/80">Est. Monthly Generation:</span>
                  <strong className="text-emerald-400 font-bold">~{estimatedMonthlyGenerationUnits} Units/mo</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-blue-950">
                  <span className="text-blue-200/80">Roof Space Required:</span>
                  <span className={`font-bold ${estimatedAreaNeededSqFt > roofAreaSqFt ? 'text-amber-400' : 'text-white'}`}>
                    {estimatedAreaNeededSqFt} sq.ft {estimatedAreaNeededSqFt > roofAreaSqFt && '(Tight Area)'}
                  </span>
                </div>
              </div>

              {/* Financial ROI Highlights */}
              <div className="mt-5 p-4 bg-blue-950/60 border border-blue-800/60 rounded-xs space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">
                  Estimated Financial Savings
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-blue-200">Monthly Bill Reduction:</span>
                  <span className="text-lg font-black text-emerald-400 font-mono">
                    PKR {estimatedMonthlySavingsPkr.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs text-blue-300">
                  <span>Annual Projected Savings:</span>
                  <span className="font-bold font-mono">PKR {annualSavingsPkr.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <button
                onClick={handleRequestCalculatedQuote}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-md transition-colors cursor-pointer"
              >
                <span>Get Official Bill of Quantities (BOQ)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-blue-300/70">
                <ShieldAlert className="w-3 h-3 text-[#38BDF8]" />
                <span>Includes Structure, DC Cables, Breakers & Testing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

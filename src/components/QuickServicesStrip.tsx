import React from 'react';
import { Sun, Camera, Network, Zap, Home, Shield, Activity, Wrench, Building2 } from 'lucide-react';

interface QuickServicesStripProps {
  onSelectServiceCategory: (categoryId: string) => void;
}

export const QuickServicesStrip: React.FC<QuickServicesStripProps> = ({ onSelectServiceCategory }) => {
  const quickCategories = [
    {
      id: 'solar-pv',
      name: 'Solar PV',
      subtext: 'Hybrid & Net-Metering',
      icon: Sun,
    },
    {
      id: 'electrical-wiring',
      name: 'Electrical',
      subtext: 'Wiring & Panels',
      icon: Zap,
    },
    {
      id: 'cctv-security',
      name: 'CCTV Security',
      subtext: '4K Surveillance & IP',
      icon: Camera,
    },
    {
      id: 'networking-solutions',
      name: 'Networking',
      subtext: 'LAN, Fiber & Racks',
      icon: Network,
    },
    {
      id: 'smart-home',
      name: 'Smart Home',
      subtext: 'Automation & IoT',
      icon: Home,
    },
    {
      id: 'earthing-lightning',
      name: 'Earthing',
      subtext: 'Grounding & SPDs',
      icon: Shield,
    },
    {
      id: 'vfd-pump',
      name: 'VFD & Pumps',
      subtext: 'Solar Tubewells',
      icon: Activity,
    },
    {
      id: 'electrical-maintenance',
      name: 'Maintenance',
      subtext: 'Thermal Audits & AMC',
      icon: Wrench,
    },
    {
      id: 'epc-projects',
      name: 'EPC Projects',
      subtext: 'Turnkey Contracts',
      icon: Building2,
    },
  ];

  return (
    <div className="bg-white py-5 px-3 sm:px-6 lg:px-8 border-b border-gray-200 shadow-xs relative z-20 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 min-w-[760px]">
        {quickCategories.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.id}>
              <button
                onClick={() => onSelectServiceCategory(item.id)}
                className="flex-1 flex flex-col items-center group cursor-pointer p-2 hover:bg-blue-50/70 rounded-xs transition-all focus:outline-none"
              >
                <div className="w-9 h-9 bg-slate-100 flex items-center justify-center mb-1.5 group-hover:bg-[#1D4ED8] group-hover:text-white transition-all text-slate-800 rounded-xs shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors text-center whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[8.5px] text-slate-500 font-semibold uppercase tracking-tight mt-0.5 text-center whitespace-nowrap">
                  {item.subtext}
                </span>
              </button>

              {index < quickCategories.length - 1 && (
                <div className="w-px h-8 bg-slate-200 flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { Sun, Camera, Network, Zap, Home, Shield } from 'lucide-react';

interface QuickServicesStripProps {
  onSelectServiceCategory: (categoryId: string) => void;
}

export const QuickServicesStrip: React.FC<QuickServicesStripProps> = ({ onSelectServiceCategory }) => {
  const quickCategories = [
    {
      id: 'solar-energy',
      name: 'Solar',
      subtext: 'Power & Inverters',
      icon: Sun,
    },
    {
      id: 'cctv-security',
      name: 'CCTV',
      subtext: 'Surveillance & IP',
      icon: Camera,
    },
    {
      id: 'networking-solutions',
      name: 'Networking',
      subtext: 'LAN/WAN & Fiber',
      icon: Network,
    },
    {
      id: 'electrical-solutions',
      name: 'Electrical',
      subtext: 'Wiring & Panels',
      icon: Zap,
    },
    {
      id: 'smart-home',
      name: 'Smart Home',
      subtext: 'Automation & IoT',
      icon: Home,
    },
    {
      id: 'earthing-solutions',
      name: 'Earthing',
      subtext: 'Grounding & Surge',
      icon: Shield,
    },
  ];

  return (
    <div className="bg-white py-6 px-4 sm:px-8 lg:px-12 border-b border-gray-200 shadow-xs relative z-20">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 lg:gap-2">
        {quickCategories.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.id}>
              <button
                onClick={() => onSelectServiceCategory(item.id)}
                className="flex-1 min-w-[120px] flex flex-col items-center group cursor-pointer p-2 hover:bg-blue-50/50 rounded-xs transition-all focus:outline-none"
              >
                <div className="w-10 h-10 bg-slate-100 flex items-center justify-center mb-2 group-hover:bg-[#1D4ED8] group-hover:text-white transition-all text-slate-800 rounded-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                  {item.name}
                </span>
                <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  {item.subtext}
                </span>
              </button>

              {index < quickCategories.length - 1 && (
                <div className="w-px h-10 bg-slate-200 hidden lg:block" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

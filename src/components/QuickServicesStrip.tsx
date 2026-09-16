import React from 'react';
import { Sun, Camera, Network, Zap, Home, Shield, Activity, Wrench, Building2 } from 'lucide-react';
import { RevealIcon, RevealText } from './MotionReveal';

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
    <div className="bg-[#FFFFFF] py-5 px-3 sm:px-6 lg:px-8 border-b border-[#E8E5DF] shadow-xs relative z-20 overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 min-w-[760px]">
        {quickCategories.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.id}>
              <RevealIcon delay={index * 0.04} className="flex-1 flex flex-col items-center">
                <button
                  onClick={() => onSelectServiceCategory(item.id)}
                  className="w-full flex flex-col items-center group cursor-pointer p-2 hover:bg-[#FFF7ED] rounded-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none"
                >
                  <div className="w-9 h-9 bg-[#F5F2EB] flex items-center justify-center mb-1.5 group-hover:bg-[#E14D2A] group-hover:text-white group-hover:scale-110 group-hover:shadow-xs transition-all duration-300 text-[#1C1917] rounded-lg shadow-xs">
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1C1917] group-hover:text-[#E14D2A] transition-colors duration-200 text-center whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[8.5px] text-[#57534E] font-semibold uppercase tracking-tight mt-0.5 text-center whitespace-nowrap">
                    {item.subtext}
                  </span>
                </button>
              </RevealIcon>

              {index < quickCategories.length - 1 && (
                <div className="w-px h-8 bg-[#E8E5DF] flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};


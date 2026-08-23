import React from 'react';

interface SmartechLogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSubtitle?: boolean;
}

export const SmartechLogo: React.FC<SmartechLogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  showSubtitle = true,
}) => {
  // Dimension scales
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
    '2xl': 'w-28 h-28',
  };

  const titleSizes = {
    sm: 'text-base font-extrabold tracking-wider',
    md: 'text-xl font-black tracking-wider',
    lg: 'text-2xl sm:text-3xl font-black tracking-widest',
    xl: 'text-3xl sm:text-4xl font-black tracking-widest',
    '2xl': 'text-4xl sm:text-5xl font-black tracking-widest',
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-wider',
    md: 'text-[9.5px] tracking-widest',
    lg: 'text-xs tracking-widest',
    xl: 'text-sm tracking-widest',
    '2xl': 'text-base tracking-widest',
  };

  const isDark = theme === 'dark';

  // Precision vector matching the uploaded Smartech image
  // Black gear cog + Red safety helmet + White hexagon with lightning bolt
  const LogoIcon = (
    <div className={`relative flex-shrink-0 ${iconSizes[size]} flex items-center justify-center`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-sm select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SMARTECH Official Logo"
      >
        <defs>
          {/* Gradient for Red Hardhat */}
          <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="60%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>
          {/* Subtle rim highlight */}
          <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="50%" stopColor="#F87171" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>

        {/* Outer Black / Dark Industrial Cog Gear (8 Teeth) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 91 16 
             L 109 16 
             L 112 31 
             A 70 70 0 0 1 133 40 
             L 146 32 
             L 159 45 
             L 151 58 
             A 70 70 0 0 1 160 79 
             L 175 82 
             L 175 100 
             L 175 118 
             L 160 121 
             A 70 70 0 0 1 151 142 
             L 159 155 
             L 146 168 
             L 133 160 
             A 70 70 0 0 1 112 169 
             L 109 184 
             L 91 184 
             L 88 169 
             A 70 70 0 0 1 67 160 
             L 54 168 
             L 41 155 
             L 49 142 
             A 70 70 0 0 1 40 121 
             L 25 118 
             L 25 82 
             L 40 79 
             A 70 70 0 0 1 49 58 
             L 41 45 
             L 54 32 
             L 67 40 
             A 70 70 0 0 1 88 31 
             Z
             M 100 48 
             A 52 52 0 1 0 100 152 
             A 52 52 0 1 0 100 48 
             Z"
          fill={isDark ? '#F8FAFC' : '#18181B'}
        />

        {/* Circular Inner Background (White / Navy in dark mode) */}
        <circle cx="100" cy="100" r="51.5" fill={isDark ? '#0A192F' : '#FFFFFF'} />

        {/* RED SAFETY HELMET / HARDHAT */}
        <g id="smartech-helmet" transform="translate(0, 0)">
          {/* Main Dome */}
          <path
            d="M 64 104 
               C 64 74, 80 60, 100 60 
               C 120 60, 136 74, 136 104 
               C 136 108, 133 112, 126 112 
               L 74 112 
               C 67 112, 64 108, 64 104 Z"
            fill="url(#helmetGrad)"
          />

          {/* Top Center Ridge and Ventilation Structure */}
          <path
            d="M 94 60 
               C 94 58, 97 56, 100 56 
               C 103 56, 106 58, 106 60 
               L 106 78 
               C 106 81, 103 83, 100 83 
               C 97 83, 94 81, 94 78 Z"
            fill="#B91C1C"
          />

          {/* Side ear protector notches on helmet */}
          <path
            d="M 60 96 
               L 67 96 
               L 67 112 
               L 62 112 
               C 59 112, 58 108, 60 96 Z"
            fill="#B91C1C"
          />
          <path
            d="M 140 96 
               L 133 96 
               L 133 112 
               L 138 112 
               C 141 112, 142 108, 140 96 Z"
            fill="#B91C1C"
          />

          {/* Wide Helmet Visor / Brim */}
          <path
            d="M 56 107 
               C 56 105, 68 103, 100 103 
               C 132 103, 144 105, 144 107 
               C 144 112, 137 117, 100 117 
               C 63 117, 56 112, 56 107 Z"
            fill="url(#rimGrad)"
          />

          {/* Visor bottom dark outline */}
          <path
            d="M 62 114 
               Q 100 120 138 114 
               Q 100 123 62 114 Z"
            fill="#991B1B"
          />

          {/* CENTER WHITE HEXAGON BADGE */}
          <polygon
            points="100,77 112,84 112,98 100,105 88,98 88,84"
            fill="#FFFFFF"
            stroke="#DC2626"
            strokeWidth="1"
          />

          {/* RED LIGHTNING BOLT INSIDE HEXAGON */}
          <path
            d="M 103 81 
               L 93 91 
               L 99 91 
               L 96 101 
               L 107 90 
               L 101 90 
               L 105 81 Z"
            fill="#DC2626"
          />
        </g>
      </svg>
    </div>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{LogoIcon}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {LogoIcon}
        <div className="mt-3 flex flex-col items-center">
          <span
            className={`font-heading uppercase leading-none font-black tracking-widest ${titleSizes[size]} ${
              isDark ? 'text-white' : 'text-[#18181B]'
            }`}
          >
            SMARTECH
          </span>
          {showSubtitle && (
            <span
              className={`mt-1.5 font-bold uppercase tracking-[0.22em] ${subtitleSizes[size]} ${
                isDark ? 'text-blue-200/80' : 'text-slate-600'
              }`}
            >
              ELECTRICAL & NETWORKING SOLUTION
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal Variant (Default for Navbar and Headers)
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {LogoIcon}
      <div className="flex flex-col justify-center text-left">
        <span
          className={`font-heading uppercase leading-tight font-black tracking-wider ${titleSizes[size]} ${
            isDark ? 'text-white' : 'text-[#18181B]'
          }`}
        >
          SMARTECH
        </span>
        {showSubtitle && (
          <span
            className={`font-bold uppercase leading-tight tracking-[0.22em] ${subtitleSizes[size]} ${
              isDark ? 'text-blue-200/80' : 'text-slate-600'
            }`}
          >
            ELECTRICAL & NETWORKING SOLUTION
          </span>
        )}
      </div>
    </div>
  );
};

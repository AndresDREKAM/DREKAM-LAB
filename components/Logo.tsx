
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const { theme } = useTheme();
  
  // Logos específicos para cada tema
  const logoDark = "https://i.ibb.co/dshFV1Xf/DREKAM-fondo-negro-2.png";
  const logoLight = "https://i.ibb.co/tTf3Bn3p/DREKAM-fondo-blanco.png";

  return (
    <div className={`inline-flex items-center select-none transition-all hover:opacity-80 duration-300 cursor-pointer ${className} group`}>
      <img 
        src={theme === 'dark' ? logoDark : logoLight} 
        alt="DREKAM LAB" 
        className="h-10 md:h-12 w-auto object-contain brightness-110 transition-all duration-500"
        style={{ 
          mixBlendMode: theme === 'dark' ? 'screen' : 'normal'
        }}
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.logo-fallback')) {
            const fallback = document.createElement('div');
            fallback.className = "logo-fallback font-display font-black text-2xl italic tracking-tighter uppercase text-black dark:text-white flex items-center";
            fallback.innerHTML = 'DREKAM <span class="text-[10px] align-bottom ml-1">LAB</span>';
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );
};

export default Logo;

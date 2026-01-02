
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BrandArchitecture: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const assets = {
    fullMaster: "https://i.ibb.co/dshFV1Xf/DREKAM-fondo-negro-2.png",
    symbolForWhite: "https://i.ibb.co/cKmF9kBm/DREKAM-simbolo-fondo-blanco.png",
    symbolForBlack: "https://i.ibb.co/kVX2RrxC/DREKAM-simbolo-fondo-negro.png",
  };

  const variants = [
    {
      id: "01",
      label: "Master",
      sub: "Negative // Core",
      bg: "bg-[#0a0a0b]",
      img: assets.fullMaster,
      imgClass: "brightness-110",
      border: "hover:border-primary",
      theme: "dark"
    },
    {
      id: "02",
      label: "Master",
      sub: "Positive // Core",
      bg: "bg-white",
      img: assets.fullMaster,
      imgStyle: { filter: 'invert(1) contrast(5)' },
      border: "hover:shadow-[inset_0_0_0_12px_#0077B6]",
      theme: "light"
    },
    {
      id: "03",
      label: "Symbol",
      sub: "Alt // Primary",
      bg: "bg-[#0a0a0b]",
      img: assets.symbolForBlack,
      imgClass: "group-hover:rotate-[15deg]",
      border: "hover:border-accent",
      theme: "dark"
    },
    {
      id: "04",
      label: "Symbol",
      sub: "Alt // Secondary",
      bg: "bg-white",
      img: assets.symbolForWhite,
      imgClass: "group-hover:-rotate-[15deg]",
      border: "hover:shadow-[inset_0_0_0_12px_#FDC500]",
      theme: "light"
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white dark:bg-black pt-2 pb-10 md:py-24 px-6 border-b-4 border-black dark:border-white overflow-hidden brutalist-grid transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header con espaciado optimizado para móvil */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-16 gap-3 md:gap-4">
           <div className="flex flex-col">
              <h3 className="font-mono text-[10px] uppercase font-bold text-black/40 dark:text-white/40 tracking-[0.5em] mb-2 leading-relaxed max-w-[260px] sm:max-w-none">
                {t('brand_identity')}
              </h3>
              <div className="flex space-x-1">
                <div className="w-10 h-1.5 bg-primary"></div>
                <div className="w-5 h-1.5 bg-accent"></div>
              </div>
           </div>
           
           <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10 mx-8 hidden md:block"></div>
        </div>
        
        {/* Mobile Carousel / Desktop Grid */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
        >
          {variants.map((v) => (
            <div 
              key={v.id}
              className={`flex-shrink-0 w-[85vw] md:w-full snap-center aspect-square ${v.bg} border-4 border-black flex flex-col items-center justify-center p-12 group ${v.border} transition-all duration-700 relative overflow-hidden shadow-2xl md:shadow-none`}
            >
               <div className={`absolute top-4 left-6 font-mono text-[8px] uppercase tracking-widest ${v.theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                 {v.id} / {v.label}
               </div>
               
               <img 
                 src={v.img} 
                 alt={`${v.label} ${v.id}`} 
                 className={`w-full h-auto transition-transform duration-700 group-hover:scale-110 ${v.imgClass || ''}`} 
                 style={v.imgStyle}
               />
               
               <div className={`absolute bottom-4 left-6 font-mono text-[8px] uppercase tracking-widest ${v.theme === 'dark' ? 'text-white/20' : 'text-black/40'}`}>
                 {v.sub}
               </div>

               {/* Mobile Active Overlay Indicator */}
               <div className="absolute top-4 right-6 md:hidden">
                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
               </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots for Mobile */}
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {variants.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-300 ${activeIndex === i ? 'w-8 bg-primary' : 'w-2 bg-black/20 dark:bg-white/20'}`}
            ></div>
          ))}
        </div>

        {/* Mobile slide hint */}
        <div className="md:hidden text-center mt-4">
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-black/30 dark:text-white/30 animate-pulse">
            Slide to explore architecture →
          </span>
        </div>
      </div>
    </section>
  );
};

export default BrandArchitecture;


import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Specialties: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const primaryColors = [
    { label: t('spec_design'), color: 'bg-primary', icon: 'brush' },
    { label: t('spec_marketing'), color: 'bg-accent', icon: 'trending_up' },
    { label: t('spec_dev'), color: 'bg-silver', icon: 'code' },
  ];

  const secondaryColors = [
    { hex: '#002855', label: 'Navy', class: 'bg-[#002855]' },
    { hex: '#D81159', label: 'Pink', class: 'bg-[#D81159]' },
    { hex: '#2EC4B6', label: 'Mint', class: 'bg-[#2EC4B6]' },
    { hex: '#FFBF69', label: 'Cream', class: 'bg-[#FFBF69]' },
    { hex: '#CBF3F0', label: 'Sky', class: 'bg-[#CBF3F0]' },
  ];

  return (
    <section ref={sectionRef} className={`bg-white dark:bg-black py-12 md:py-24 px-6 relative overflow-hidden transition-colors duration-500 reveal ${isVisible ? 'revealed' : ''}`}>
      {/* Fondo de patrón con color reactivo */}
      <div className="absolute inset-0 wavy-lines-pattern opacity-5 dark:opacity-10 text-black dark:text-white pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <h3 className="font-mono text-[10px] uppercase font-bold text-black/40 dark:text-white/40 tracking-[0.5em] mb-8 md:mb-12 flex items-center space-x-4">
          <div className="w-8 h-[1px] bg-black/20 dark:bg-white/20"></div>
          <span>{t('spec_dna')}</span>
          <div className="w-8 h-[1px] bg-black/20 dark:bg-white/20"></div>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-4xl border-4 border-black dark:border-white shadow-[20px_20px_0px_0px_rgba(0,119,182,0.1)] mb-12 md:mb-20">
          {primaryColors.map((cat, i) => (
            <div key={i} className="group relative flex flex-col h-[300px] md:h-[400px] cursor-pointer overflow-hidden border-r-0 md:border-r-2 last:border-r-0 border-b-2 md:border-b-0 border-black/10 dark:border-white/10">
              <div className={`flex-1 ${cat.color} transition-all duration-500 group-hover:flex-[1.5] relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-black text-7xl md:text-9xl text-white/20 select-none group-hover:scale-110 group-hover:text-white/40 transition-all">{cat.label.charAt(0)}</span>
                </div>
              </div>
              <div className="bg-white dark:bg-black p-6 md:p-8 border-t-2 border-black/20 dark:border-white/20 group-hover:bg-primary transition-colors duration-300">
                <div className="flex items-center justify-between text-black dark:text-white group-hover:text-white">
                  <h4 className="font-display font-black text-xl md:text-2xl uppercase tracking-tighter">{cat.label}</h4>
                  <i className="material-icons text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">{cat.icon}</i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-5xl">
          <h3 className="font-mono text-[10px] uppercase font-bold text-black/40 dark:text-white/40 tracking-[0.4em] mb-6 md:mb-8 text-center">
            {t('spec_palette')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {secondaryColors.map((color, i) => (
              <div key={i} className="group relative h-20 md:h-24 overflow-hidden border-2 border-black/10 dark:border-white/10 cursor-pointer shadow-lg">
                <div className={`absolute inset-0 ${color.class} transition-transform duration-500 group-hover:scale-110`}></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                  <span className="font-mono text-[10px] text-white font-bold">{color.label}</span>
                  <span className="font-mono text-[8px] text-white/60 uppercase">{color.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;

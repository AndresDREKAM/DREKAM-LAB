
import React, { useEffect, useRef, useState } from 'react';
import Magnetic from './Magnetic';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 40, 
        y: (e.clientY / window.innerHeight - 0.5) * 40 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header ref={sectionRef} className={`relative lg:min-h-screen flex items-center overflow-hidden bg-white dark:bg-black pt-16 pb-4 lg:pt-0 lg:pb-0 brutalist-grid transition-colors duration-500 reveal ${isVisible ? 'revealed' : ''}`}>
      {/* Dynamic Background Elements */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="absolute inset-0 wavy-lines-pattern opacity-10 dark:opacity-20 text-black dark:text-white animate-wave-slow"></div>
      </div>
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,119,182,0.12),transparent_75%)]"></div>
        <div className="absolute top-[5%] right-[-10%] w-[700px] h-[700px] wireframe-sphere border-black/5 dark:border-white/5 animate-spin-slow opacity-20"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
        
        {/* TEXT COLUMN */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center w-full z-20">
          
          <h1 className="font-display font-extrabold tracking-tighter text-black dark:text-white uppercase flex flex-col items-start leading-[1.1] w-full"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}>
            
            <div className="text-reveal-mask py-6 px-16 -ml-16 -my-6 block overflow-hidden max-w-full">
              <span className="text-reveal-item block">
                {t('hero_line_1')}
              </span>
            </div>
            
            <div className="text-reveal-mask py-6 px-16 -ml-16 -my-6 block overflow-hidden max-w-full" style={{ transitionDelay: '0.1s' }}>
              <span className="text-reveal-item block text-primary italic">
                {t('hero_line_2')}
              </span>
            </div>
            
            <div className="text-reveal-mask py-6 px-16 -ml-16 -my-6 block overflow-hidden max-w-full" style={{ transitionDelay: '0.2s' }}>
              <span className="text-reveal-item block">
                {t('hero_line_3')} {t('hero_line_4')}
              </span>
            </div>
          </h1>
          
          <p className="text-lg md:text-2xl text-black/60 dark:text-white/60 max-w-xl leading-relaxed font-medium reveal mt-6 lg:mt-10" style={{ transitionDelay: '0.5s' }}>
            {t('hero_desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-8 lg:pt-10 reveal" style={{ transitionDelay: '0.7s' }}>
            <Magnetic strength={0.2}>
              <button className="btn-pill bg-primary hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black active:scale-95 text-white px-12 py-6 font-display font-black text-base uppercase flex items-center justify-center group relative overflow-hidden shadow-2xl w-full sm:w-auto border-2 border-primary hover:border-black dark:hover:border-white transition-all">
                <span className="relative z-10">{t('hero_btn_view')}</span>
                <div className="absolute inset-0 bg-black dark:bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <button className="btn-pill bg-transparent border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black active:scale-95 text-black dark:text-white px-12 py-6 font-display font-black text-base uppercase flex items-center justify-center transition-all group w-full sm:w-auto">
                <i className="material-icons mr-3 text-primary text-2xl">play_circle_filled</i>
                {t('hero_btn_reels')}
              </button>
            </Magnetic>
          </div>
        </div>

        {/* IMAGE COLUMN - Ahora el marco y la imagen se mueven juntos */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center lg:justify-start w-full relative z-10 lg:-translate-y-20 xl:-translate-x-12 2xl:-translate-x-20 transition-all duration-1000">
          <div className="relative w-full aspect-square max-w-[220px] sm:max-w-[450px] lg:max-w-[480px] xl:max-w-[540px] 2xl:max-w-[600px] flex-shrink-0">
            {/* Decoración de fondo */}
            <div className="absolute -inset-8 md:-inset-12 border-2 border-black/20 dark:border-white/20 -z-10 transform -rotate-6 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-md shadow-inner transition-transform duration-1000 group-hover:rotate-0">
                 <div className="absolute inset-0 topo-lines opacity-10 text-black dark:text-white"></div>
            </div>
            {/* Marco principal con la animación de flotación aplicada aquí */}
            <div className="w-full h-full border-[6px] md:border-[15px] border-black dark:border-white bg-white dark:bg-surface shadow-[10px_10px_0px_0px_rgba(0,119,182,1)] md:shadow-[30px_30px_0px_0px_rgba(0,119,182,1)] relative overflow-hidden group animate-float">
              <img 
                alt="Drekam Lab Team" 
                className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-1000"
                src="https://i.ibb.co/V0d5VfV7/envato-labs-image-edit-80.png"
              />
              <div className="absolute inset-0 scanlines opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

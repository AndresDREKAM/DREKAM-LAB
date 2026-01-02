
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
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

  const projects = [
    {
      title: "Marketing Strategy",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      tag: `${t('portfolio_tag')} 01`
    },
    {
      title: "Content Creation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      tag: `${t('portfolio_tag')} 02`
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className={`py-12 md:py-24 bg-white dark:bg-black overflow-hidden brutalist-grid transition-colors duration-500 reveal ${isVisible ? 'revealed' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl uppercase mb-10 md:mb-20 tracking-tighter text-black dark:text-white flex items-center flex-wrap">
          <div className="text-reveal-mask">
            <span className="text-reveal-item block">
              {t('nav_portfolio')} <span className="text-primary italic">{t('impact')}</span>
            </span>
          </div>
          <div className="flex ml-4 md:ml-6 mt-2 sm:mt-0">
            <div className="w-2 h-8 sm:h-12 bg-primary skew-x-[-12deg]"></div>
            <div className="w-2 h-8 sm:h-12 bg-black dark:bg-white skew-x-[-12deg] ml-1.5 transition-colors"></div>
          </div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-16">
          {projects.map((project, i) => (
            <div key={i} className="relative group cursor-pointer active:translate-y-1 transition-transform mb-8 lg:mb-0">
              <div className="border-[4px] md:border-[8px] border-black dark:border-white p-2 md:p-3 transition-all duration-700 hover:border-primary active:border-accent bg-gray-50 dark:bg-surface hard-shadow-primary overflow-hidden">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-700"></div>
                  
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-primary text-white px-3 py-0.5 sm:px-4 sm:py-1 font-display font-black text-xl sm:text-2xl skew-x-[-12deg] border-2 border-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                      {`0${i+1}`}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`absolute bottom-[-10px] sm:bottom-[-20px] ${i % 2 === 0 ? 'right-[-5px] sm:right-[-20px]' : 'left-[-5px] sm:left-[-20px]'} z-20`}>
                <div className="bg-accent border-4 border-black px-4 sm:px-10 py-2 sm:py-4 shadow-[4px_4px_0px_0px_rgba(0,119,182,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                  <span className="font-display font-black text-base sm:text-3xl text-black uppercase">
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

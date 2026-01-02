
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Packages from './Packages';
import WebPackages from './WebPackages';
import Magnetic from './Magnetic';

const ServicesPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stack = [
    { name: 'React // Next.js', icon: 'code', desc: t('stack_1_desc') },
    { name: 'Gemini AI // GenAI', icon: 'psychology', desc: t('stack_2_desc') },
    { name: 'Tailwind // CSS3', icon: 'palette', desc: t('stack_3_desc') },
    { name: 'Google Search // SEO', icon: 'search', desc: t('stack_4_desc') },
    { name: 'Motion // Framer', icon: 'animation', desc: t('stack_5_desc') },
    { name: 'Analytics // GA4', icon: 'data_usage', desc: t('stack_6_desc') },
  ];

  return (
    <div className="pb-12 md:pb-24 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Hero Section */}
      <section className="px-6 py-10 md:py-20 mb-12 md:mb-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 mb-10 md:mb-20">
            <div className="space-y-4 md:space-y-6 max-w-4xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-primary"></div>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-black/40 dark:text-white/40">Services_Manifesto_v3.0</span>
              </div>
              <h1 className="font-display font-black text-5xl md:text-9xl uppercase leading-[0.8] tracking-tighter text-black dark:text-white">
                {t('services_hero_title').split('//').map((part, i) => (
                  <React.Fragment key={i}>
                    {i === 1 ? <span className="text-primary italic">//{part}</span> : part}
                    {i === 0 && <br/>}
                  </React.Fragment>
                ))}
              </h1>
            </div>
            <div className="md:w-1/3">
              <p className="text-lg md:text-xl text-black/60 dark:text-white/60 font-medium leading-tight">
                {t('services_hero_desc')}
              </p>
            </div>
          </div>
          
          <div className="aspect-video md:aspect-[21/9] bg-gray-50 dark:bg-surface border-4 border-black dark:border-white hard-shadow-primary relative overflow-hidden group transition-colors">
            <div className="absolute inset-0 scanlines opacity-30 z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" 
              alt="Engineering" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700"></div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 md:py-32 px-6 border-t-4 border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-24">
            <h2 className="font-display font-black text-5xl md:text-8xl uppercase mb-4 md:mb-6 text-black dark:text-white">{t('services_stack_title')}</h2>
            <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-black/40 dark:text-white/40 uppercase">{t('services_stack_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stack.map((item, i) => (
              <div key={i} className="border-4 border-black dark:border-white p-8 md:p-10 bg-white dark:bg-surface hover:shadow-[10px_10px_0px_0px_rgba(253,197,0,1)] md:hover:shadow-[15px_15px_0px_0px_rgba(253,197,0,1)] hover:-translate-y-2 transition-all group">
                <i className="material-icons text-4xl md:text-5xl text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform">{item.icon}</i>
                <h4 className="font-display font-black text-xl md:text-2xl uppercase mb-3 md:mb-4 text-black dark:text-white">{item.name}</h4>
                <p className="text-black/40 dark:text-white/40 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Packages Section - ADDED HERE */}
      <WebPackages />

      {/* Social Media Packages Section */}
      <Packages />

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          <h2 className="font-display font-black text-4xl md:text-8xl uppercase tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: t('services_cta_title') }}>
          </h2>
          <Magnetic strength={0.2}>
            <button className="bg-white text-black px-10 py-5 md:px-12 md:py-6 font-display font-black text-xl md:text-2xl uppercase hard-shadow-accent hover:bg-accent hover:text-black transition-all border-4 border-black">
              {t('services_cta_btn')}
            </button>
          </Magnetic>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

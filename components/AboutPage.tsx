
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Contact from './Contact';
import Stats from './Stats';
import Magnetic from './Magnetic';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    { year: t('about_milestone_1_year'), text: t('about_milestone_1_text') },
    { year: t('about_milestone_2_year'), text: t('about_milestone_2_text') },
    { year: t('about_milestone_3_year'), text: t('about_milestone_3_text') },
    { year: t('about_milestone_4_year'), text: t('about_milestone_4_text') },
  ];

  return (
    <div className={`bg-white dark:bg-black transition-colors duration-500 reveal ${isVisible ? 'revealed' : ''}`}>
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 brutalist-grid opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-black/40 dark:text-white/40">Lab_Heritage_v1.0</span>
            </div>
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase leading-[0.8] tracking-tighter text-black dark:text-white">
              {t('about_hero_title').split('//').map((part, i) => (
                <React.Fragment key={i}>
                  {i === 1 ? <span className="text-primary italic">//{part}</span> : part}
                  {i === 0 && <br/>}
                </React.Fragment>
              ))}
            </h1>
          </div>
          <div className="md:w-1/3">
            <p className="text-xl md:text-2xl text-black/60 dark:text-white/60 font-medium leading-tight">
              {t('about_hero_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* History / Origin Section */}
      <section className="py-24 px-6 border-y-4 border-black dark:border-white relative bg-gray-50 dark:bg-surface transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter text-black dark:text-white">
              {t('about_origin_title')}
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-black/70 dark:text-white/70 leading-relaxed font-medium">
              <p>{t('about_origin_p1')}</p>
              <p>{t('about_origin_p2')}</p>
            </div>
            
            {/* Minimalist Graphic Element */}
            <div className="flex space-x-2 pt-4">
              <div className="w-4 h-16 bg-primary transform -skew-x-12"></div>
              <div className="w-4 h-16 bg-accent transform -skew-x-12"></div>
              <div className="w-4 h-16 bg-black dark:bg-white transform -skew-x-12"></div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 border-4 border-black dark:border-white transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="border-8 border-black bg-black overflow-hidden aspect-[4/5] shadow-2xl relative">
              <div className="absolute inset-0 scanlines opacity-30 z-10 pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
                alt="History" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 px-6 bg-white dark:bg-black transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <div className="w-16 h-1 bg-primary"></div>
            <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter text-black dark:text-white">System_Milestones</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {milestones.map((m, i) => (
              <div key={i} className="group p-8 border-4 border-black dark:border-white bg-white dark:bg-surface hover:bg-primary hover:text-white transition-all duration-500 hard-shadow-primary">
                <div className="font-display font-black text-5xl md:text-6xl mb-4 group-hover:text-white text-primary italic transition-colors">
                  {m.year}
                </div>
                <p className="font-display font-black text-xl uppercase tracking-tighter leading-none group-hover:text-white text-black dark:text-white">
                  {m.text}
                </p>
                <div className="mt-8 w-12 h-1 bg-black dark:bg-white group-hover:bg-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <div className="border-t-4 border-black dark:border-white">
         <div className="max-w-7xl mx-auto px-6 pt-16">
            <h3 className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-center mb-12 text-black dark:text-white">
              {t('about_achievements_title')}
            </h3>
         </div>
         <Stats />
      </div>

      {/* CTA / Contact Transition */}
      <section className="pt-24">
         <div className="max-w-7xl mx-auto px-6 text-center mb-24 space-y-8">
            <h2 className="font-display font-black text-4xl md:text-8xl uppercase tracking-tighter leading-tight text-black dark:text-white">
              READY TO <span className="text-primary italic">EVOLVE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/50 dark:text-white/50 font-medium max-w-2xl mx-auto">
               Join the disruption. Let's engineer your brand's future today.
            </p>
         </div>
         <Contact />
      </section>
    </div>
  );
};

export default AboutPage;

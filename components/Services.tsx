
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const coreServices = [
  {
    id: '01',
    title: { es: 'Diseño UI/UX', en: 'UI/UX Design', zh: 'UI/UX 设计' },
    desc: { 
      es: 'La simplicidad brutal se une a flujos de alta conversión. Construimos interfaces que exigen atención.', 
      en: 'Brutal simplicity meets high-conversion flows. We build interfaces that command attention and drive action.',
      zh: '极简风格结合高转化流程。我们构建引人注目的界面。'
    },
    tags: ['Brand Identity', 'Interaction', 'Design Systems'],
    color: 'primary'
  },
  {
    id: '02',
    title: { es: 'Diseño', en: 'Design', zh: '设计' },
    desc: { 
      es: 'Identidad visual y arquitectura de marca. Creamos sistemas visuales que comunican poder y autoridad.', 
      en: 'Visual identity and brand architecture. We create visual systems that communicate power and authority.',
      zh: '视觉识别和品牌架构。我们创建传达权力和权威的视觉系统。'
    },
    tags: ['Logos', 'Branding', 'Visual Arts'],
    color: 'accent'
  },
  {
    id: '03',
    title: { es: 'Marketing', en: 'Marketing', zh: '营销' },
    desc: { 
      es: 'Crecimiento impulsado por datos y disrupción. Analizamos el ruido para encontrar el camino al éxito.', 
      en: 'Data-driven growth and disruption. We analyze the noise to find the clear signal for your success.',
      zh: '数据驱动的增长和颠覆。我们分析噪音以寻找您成功的清晰信号。'
    },
    tags: ['Paid Media', 'SEO', 'Analytics'],
    color: 'primary'
  }
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { lang, t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className={`py-12 md:py-24 lg:py-32 bg-white dark:bg-black overflow-hidden brutalist-grid transition-colors duration-500 reveal ${isVisible ? 'revealed' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-16 lg:mb-24 relative">
          <div className="flex items-center space-x-4 mb-4 md:mb-6 lg:mb-8">
            <div className="w-12 h-1 bg-primary"></div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-black/40 dark:text-white/40">{t('capabilities')}</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-7xl md:text-9xl uppercase leading-[1.1] tracking-tighter text-black dark:text-white">
            <div className="text-reveal-mask py-6 px-16 -ml-16 -my-6">
              <span className="text-reveal-item block">{t('engineering')}</span>
            </div>
            <br/>
            <div className="text-reveal-mask py-6 px-16 -ml-16 -my-6" style={{ transitionDelay: '0.2s' }}>
              <span className="text-reveal-item block text-primary italic">{t('excellence')}</span>
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-8">
          {coreServices.map((service, i) => (
            <div key={service.id} className="group border-t-2 border-black/10 dark:border-white/10 pt-6 md:pt-8 hover:border-primary transition-all duration-700">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <span className="font-display font-black text-3xl md:text-4xl opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 text-black dark:text-white">{service.id}</span>
                <i className="material-icons text-black/20 dark:text-white/20 group-hover:text-primary transition-colors">north_east</i>
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl sm:text-4xl uppercase mb-4 md:mb-6 tracking-tighter text-black dark:text-white group-hover:text-primary transition-colors">{service.title[lang]}</h3>
              <p className="text-black/50 dark:text-white/50 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-sm">{service.desc[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="font-mono text-[8px] uppercase tracking-widest border border-black/20 dark:border-white/20 px-2 py-1 group-hover:border-primary group-hover:text-primary transition-colors text-black dark:text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

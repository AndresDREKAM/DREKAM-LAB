
import React from 'react';
import Magnetic from './Magnetic';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { id: '01', title: t('process_1_title'), desc: t('process_1_desc'), color: 'primary' },
    { id: '02', title: t('process_2_title'), desc: t('process_2_desc'), color: 'accent' },
    { id: '03', title: t('process_3_title'), desc: t('process_3_desc'), color: 'primary' },
    { id: '04', title: t('process_4_title'), desc: t('process_4_desc'), color: 'accent' }
  ];

  return (
    <section className="bg-white dark:bg-black py-24 md:py-32 px-6 border-y-4 border-black dark:border-white relative overflow-hidden brutalist-grid transition-colors duration-500">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 dark:bg-white/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 md:mb-24 gap-8">
           <div className="space-y-4 w-full md:w-auto">
              <div className="flex items-center space-x-2">
                 <div className="w-12 h-[2px] bg-primary"></div>
                 <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-black/40 dark:text-white/40">{t('method')}</span>
              </div>
              <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] text-black dark:text-white">
                {t('workflow_title_prefix') && `${t('workflow_title_prefix')} `}
                <span className="text-primary italic">{t('workflow_title_highlight')}</span>
                <br/>
                {t('workflow_title_suffix')}
              </h2>
           </div>
           
           <div className="hidden lg:flex flex-col items-end space-y-4">
              <div className="flex space-x-2">
                <div className="w-3 h-16 bg-primary skew-x-[-15deg]"></div>
                <div className="w-3 h-16 bg-accent skew-x-[-15deg]"></div>
                <div className="w-3 h-16 bg-black dark:bg-white skew-x-[-15deg] transition-colors"></div>
              </div>
              <p className="font-mono text-[10px] text-black/30 dark:text-white/30 text-right uppercase tracking-widest max-w-[200px]">
                Proprietary optimization algorithm // processing...
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <Magnetic key={step.id} strength={0.15}>
              <div className="group relative p-8 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-black dark:hover:border-white transition-all duration-700 h-full flex flex-col">
                 <div className="mb-8 flex items-baseline justify-between overflow-hidden text-black dark:text-white">
                    <span className="font-display font-black text-6xl sm:text-7xl text-transparent group-hover:text-current transition-all duration-700" style={{ WebkitTextStroke: '1px currentColor' }}>
                      {step.id}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-current transition-all duration-500">
                       <i className={`material-icons text-sm ${step.color === 'primary' ? 'text-primary' : 'text-accent'} group-hover:invert dark:group-hover:invert-0`}>arrow_outward</i>
                    </div>
                 </div>
                 
                 <div className="space-y-4 flex-1">
                   <h4 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter group-hover:text-primary transition-colors text-black dark:text-white">{step.title}</h4>
                   <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed font-medium group-hover:text-black dark:group-hover:text-white transition-colors">{step.desc}</p>
                 </div>
                 
                 <div className="mt-8 relative h-12 w-full overflow-hidden">
                    <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-${step.color} transition-all duration-700 ease-in-out`}></div>
                    <div className="absolute bottom-2 right-0 font-mono text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-opacity text-black dark:text-white">Phase Active</div>
                 </div>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

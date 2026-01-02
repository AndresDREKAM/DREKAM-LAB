
import React from 'react';
import { TeamMember } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Team: React.FC = () => {
  const { t } = useLanguage();

  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Camilo Velásquez',
      role: t('team_executive'),
      image: 'https://i.ibb.co/kVzwFHHJ/Gemini-Generated-Image-b7t21rb7t21rb7t2.png'
    },
    {
      id: '2',
      name: 'Andrés Reyes',
      role: t('team_lead'),
      image: 'https://i.ibb.co/Y7xLHpDM/envato-labs-image-edit-76.png'
    },
    {
      id: '3',
      name: 'Sofia Rodriguez',
      role: t('team_marketing_exec'),
      image: 'https://i.ibb.co/7tp33dLQ/envato-labs-image-edit-77.png'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-black relative overflow-hidden brutalist-grid transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl uppercase mb-12 md:mb-16 tracking-tighter w-full border-b-8 border-black dark:border-white pb-6 text-black dark:text-white leading-tight transition-colors">
          {t('team_title_prefix')} <span className="text-accent italic">{t('team_title_highlight')}</span>
        </h2>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-12 no-scrollbar pb-12 -mx-6 px-6 md:px-0">
          {team.map((member, i) => (
            <div key={member.id} className="flex-shrink-0 w-[80vw] md:w-auto snap-center group relative cursor-pointer active:scale-[0.98] transition-all">
              <div className={`border-4 border-black dark:border-white p-2 transition-all duration-500 bg-white dark:bg-surface hard-shadow-${i % 2 === 0 ? 'primary' : 'accent'} group-active:translate-x-1 group-active:translate-y-1`}>
                <div className="relative overflow-hidden aspect-[4/5]">
                  {/* Imagen con colores reales (escala de grises suave), sin filtros de inversión */}
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 contrast-110" 
                    src={member.image}
                  />
                  {/* Adorno vectorial que cambia con el modo */}
                  <div className={`absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 ${i % 2 === 0 ? 'border-primary' : 'border-accent'}`}></div>
                </div>
              </div>
              <div className="mt-8 space-y-1">
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-none group-hover:text-primary transition-colors text-black dark:text-white">{member.name}</h3>
                <p className="font-mono text-xs text-black/40 dark:text-white/40 uppercase tracking-[0.3em] font-bold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-4">
            <div className="font-mono text-[8px] uppercase tracking-widest text-black/20 dark:text-white/20 animate-pulse">Slide to meet team members →</div>
        </div>
      </div>
    </section>
  );
};

export default Team;

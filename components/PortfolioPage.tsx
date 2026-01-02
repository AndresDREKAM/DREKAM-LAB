import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Magnetic from './Magnetic';

interface Project {
  id: string;
  category: 'web' | 'marketing' | 'branding';
  title: string;
  client: string;
  image: string;
  stats: string;
  challenge: string;
  solution: string;
  result: string;
}

const projects: Project[] = [
  {
    id: '01',
    category: 'web',
    title: 'Fintech Velocity Dashboard',
    client: 'NEXUS PAYMENTS',
    image: 'https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80&w=1200',
    stats: '+320% Transaction Speed',
    challenge: 'A cumbersome legacy interface was causing user drop-off during critical high-frequency trading sessions.',
    solution: 'Engineered a brutalist, low-latency dashboard using React and optimized WebWorkers for real-time data streaming.',
    result: 'Reduced average session latency by 80% and increased user retention by 45%.'
  },
  {
    id: '02',
    category: 'branding',
    title: 'Neon Streetwear Identity',
    client: 'RAWR CLOTHING',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200',
    stats: 'Market Domination // Phase 1',
    challenge: 'The brand lacked authority in a saturated streetwear market dominated by generic designs.',
    solution: 'Designed a bold, architectural brand identity inspired by industrial brutalism and neon aesthetics.',
    result: 'Successfully launched 3 sold-out collections and reached 200k organic followers in 6 months.'
  },
  {
    id: '03',
    category: 'marketing',
    title: 'Disruptive Growth Engine',
    client: 'ECOSYSTEM.IO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    stats: '$2.5M Revenue Spike',
    challenge: 'High customer acquisition costs were draining the startup’s resources with minimal ROI.',
    solution: 'Implemented a data-driven content disruption strategy utilizing Gemini AI for targeted hyper-personalization.',
    result: 'Cut CAC by 65% while increasing conversion rates by 400% in Q3.'
  },
  {
    id: '04',
    category: 'web',
    title: 'Brutalist E-commerce Arch',
    client: 'STARK HOME',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
    stats: '12s → 1.2s Load Time',
    challenge: 'Slow, bloated WordPress site failing to handle holiday traffic surges.',
    solution: 'Rebuilt from scratch using a headless architecture with Next.js and high-performance CDN edge caching.',
    result: 'Stable performance during 50k concurrent users peak and 150% increase in checkout completions.'
  }
];

const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'web' | 'marketing' | 'branding'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className={`bg-white dark:bg-black transition-colors duration-500`}>
      {/* Hero - Optimized Padding for "Higher" appearance */}
      <section className="px-6 pt-8 pb-10 md:pt-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 brutalist-grid opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className={`space-y-4 md:space-y-6 reveal ${isVisible ? 'revealed' : ''}`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-primary"></div>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-black/40 dark:text-white/40">Lab_Output_v4.2</span>
              </div>
              <h1 className="font-display font-black text-5xl md:text-9xl uppercase leading-[0.8] tracking-tighter text-black dark:text-white">
                {t('portfolio_hero_title').split('//').map((part, i) => (
                  <React.Fragment key={i}>
                    {i === 1 ? <span className="text-primary italic">//{part}</span> : part}
                    {i === 0 && <br/>}
                  </React.Fragment>
                ))}
              </h1>
            </div>
            <div className={`md:w-1/3 reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl text-black/60 dark:text-white/60 font-medium leading-tight">
                {t('portfolio_hero_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters - Tighter integration */}
      <section className={`px-6 py-6 md:py-8 border-y-4 border-black dark:border-white bg-gray-50 dark:bg-surface reveal ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.3s' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 md:gap-4">
          {[
            { id: 'all', label: t('portfolio_filter_all') },
            { id: 'web', label: t('portfolio_filter_web') },
            { id: 'marketing', label: t('portfolio_filter_marketing') },
            { id: 'branding', label: t('portfolio_filter_branding') }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-4 md:px-6 py-2 font-display font-black uppercase text-[12px] md:text-sm border-2 transition-all ${
                filter === f.id 
                  ? 'bg-primary text-white border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                  : 'bg-white dark:bg-black text-black dark:text-white border-black/10 dark:border-white/10 hover:border-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 py-12 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {filteredProjects.map((project, i) => (
            <div 
              key={project.id} 
              className={`group relative flex flex-col cursor-pointer transition-all duration-700 reveal ${isVisible ? 'revealed' : ''} ${i % 2 !== 0 ? 'md:mt-24' : ''}`}
              style={{ transitionDelay: `${0.4 + (i * 0.1)}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="border-[6px] md:border-[10px] border-black dark:border-white p-2 bg-gray-100 dark:bg-surface relative overflow-hidden group-hover:shadow-[20px_20px_0px_0px_rgba(0,119,182,1)] transition-all duration-500">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                {/* ID Label */}
                <div className="absolute top-4 left-4 bg-accent text-black px-3 py-1 font-display font-black text-xl border-2 border-black -rotate-6 group-hover:rotate-0 transition-transform">
                  {project.id}
                </div>
                {/* Stats Overlay */}
                <div className="absolute bottom-6 right-6 bg-primary text-white px-4 py-2 font-display font-black text-sm md:text-base border-2 border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  {project.stats}
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-[10px] uppercase font-bold text-primary tracking-widest">{project.category} // {project.client}</span>
                </div>
                <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter text-black dark:text-white leading-none group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
          <div className="relative w-full max-w-5xl bg-white dark:bg-black border-8 border-black dark:border-white max-h-[90vh] overflow-y-auto no-scrollbar shadow-[40px_40px_0px_0px_rgba(0,119,182,1)]">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white dark:bg-black border-b-4 border-black dark:border-white p-6 flex justify-between items-center">
              <h2 className="font-display font-black text-2xl md:text-4xl uppercase tracking-tighter text-black dark:text-white">
                {selectedProject.title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-12 h-12 bg-accent text-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,119,182,1)] active:translate-x-1"
              >
                <i className="material-icons text-3xl font-bold">close</i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-12">
                <div className="relative p-2 border-4 border-black dark:border-white">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto grayscale-0" />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-3 font-display font-black text-2xl border-2 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    {selectedProject.stats}
                  </div>
                </div>
                
                <div className="bg-gray-100 dark:bg-surface p-8 border-l-8 border-primary transition-colors">
                   <span className="font-mono text-[10px] text-primary uppercase font-bold block mb-2 tracking-[0.4em]">SYSTEM_METRICS</span>
                   <p className="font-display font-black text-2xl md:text-3xl text-black dark:text-white uppercase leading-none">
                     Optimizing client potential for global scaling.
                   </p>
                </div>
              </div>

              <div className="space-y-10">
                <section>
                  <h4 className="font-display font-black text-xl uppercase text-primary mb-4 border-b-2 border-primary/20 pb-2">{t('portfolio_challenge')}</h4>
                  <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed font-medium">{selectedProject.challenge}</p>
                </section>

                <section>
                  <h4 className="font-display font-black text-xl uppercase text-accent mb-4 border-b-2 border-accent/20 pb-2">{t('portfolio_solution')}</h4>
                  <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed font-medium">{selectedProject.solution}</p>
                </section>

                <section className="bg-black text-white p-8 border-4 border-primary">
                  <h4 className="font-display font-black text-xl uppercase mb-4 text-primary">{t('portfolio_result')}</h4>
                  <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">{selectedProject.result}</p>
                </section>

                <Magnetic strength={0.15}>
                  <button className="w-full bg-primary text-white py-6 font-display font-black text-2xl uppercase border-4 border-black shadow-[10px_10px_0px_0px_rgba(253,197,0,1)] hover:bg-black transition-colors">
                    {t('services_cta_btn')}
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white text-center border-t-4 border-black">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-display font-black text-4xl md:text-8xl uppercase tracking-tighter leading-tight">
            YOUR PROJECT <span className="text-accent italic">NEXT?</span>
          </h2>
          <Magnetic strength={0.2}>
            <button className="bg-white text-black px-12 py-6 font-display font-black text-2xl uppercase hard-shadow-accent hover:bg-accent hover:text-black transition-all border-4 border-black">
              {t('contact_ai_btn')}
            </button>
          </Magnetic>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
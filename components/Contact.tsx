
import React, { useState } from 'react';
import { getBrutalStrategy } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const [projectIdea, setProjectIdea] = useState('');
  const [strategy, setStrategy] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleGenerateStrategy = async () => {
    if (!projectIdea.trim()) return;
    setLoading(true);
    const result = await getBrutalStrategy(projectIdea);
    setStrategy(result || 'Failed to generate strategy.');
    setLoading(false);
  };

  // Simple Markdown Parser to handle basic bold and headers for the UI
  const formatStrategy = (text: string) => {
    if (!text) return "";
    return text
      .replace(/^### (.*$)/gim, '<h3 class="text-xl md:text-2xl font-black uppercase mb-4 text-primary border-b-2 border-primary/20 pb-2">$1</h3>')
      .replace(/^\*\*(\d+\..*?)\*\*/gim, '<strong class="block text-primary mt-6 mb-2 text-lg md:text-xl font-black">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-black">$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <section id="contact" className="bg-white dark:bg-black text-black dark:text-white relative overflow-hidden brutalist-grid transition-colors duration-500">
      <div className="absolute top-20 right-10 w-48 h-48 opacity-10 pointer-events-none">
          <div className="w-full h-full wireframe-sphere border-black dark:border-white"></div>
      </div>
      <div className="absolute bottom-20 left-10 opacity-5 font-mono text-[100px] font-black uppercase tracking-tighter select-none rotate-90 origin-left text-black dark:text-white">
          BRUTAL // BRUTAL
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 xl:gap-20 items-start">
        <div className="w-full lg:pr-4">
          <div className="flex items-center space-x-4 mb-8">
             <div className="bg-primary text-white px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest">{t('contact_danger')}</div>
             <div className="h-[2px] flex-1 bg-black/10 dark:bg-white/20"></div>
          </div>
          
          <h2 className="font-display font-black uppercase tracking-tighter leading-none mb-12 text-black dark:text-white relative z-20">
            <span className="inline-block whitespace-nowrap text-[9vw] sm:text-6xl md:text-7xl lg:text-4xl xl:text-6xl 2xl:text-7xl">
              {t('contact_title_prefix')}<span className="text-primary italic">{t('contact_title_highlight')}</span>
            </span>
          </h2>

          <div className="w-24 h-5 bg-accent mb-10 shadow-lg border-2 border-black dark:border-white"></div>
          <p className="text-xl md:text-2xl font-light text-black/60 dark:text-white/60 max-w-md mb-12 leading-relaxed">
            {t('contact_desc')}
          </p>
          
          <div className="bg-gray-50 dark:bg-surface border-4 border-black dark:border-white p-6 md:p-10 mb-10 relative group transition-colors">
            <div className="absolute -top-1 -left-1 w-8 h-8 border-l-4 border-t-4 border-primary z-20"></div>
            
            <h4 className="font-display font-black text-2xl sm:text-3xl uppercase mb-2 text-primary">{t('contact_ai_title')}</h4>
            <p className="text-[10px] font-bold mb-8 text-black/30 dark:text-white/30 uppercase tracking-[0.4em]">Brutal Strategy Engine v3.0 // Ready</p>
            
            <textarea 
              className="w-full bg-white dark:bg-black border-2 border-black/10 dark:border-white/20 p-5 text-lg font-medium mb-6 focus:border-primary focus:ring-0 rounded-none transition-all placeholder:text-black/20 dark:placeholder:text-white/10 text-black dark:text-white" 
              placeholder={t('contact_ai_placeholder')}
              value={projectIdea}
              onChange={(e) => setProjectIdea(e.target.value)}
              rows={3}
            />
            <button 
              onClick={handleGenerateStrategy}
              disabled={loading || !projectIdea}
              className="bg-primary hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all px-10 py-5 font-display uppercase text-xl font-black disabled:opacity-50 w-full relative group overflow-hidden border-2 border-primary"
            >
              <span className="relative z-10">{loading ? 'CALCULATING...' : t('contact_ai_btn')}</span>
              <div className="absolute inset-0 bg-black dark:bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            {strategy && (
              <div className="mt-16 relative animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div className="absolute -top-12 right-0 font-mono text-[10px] text-primary animate-pulse font-bold">REC ● STATUS_OK</div>
                <div className="bg-white dark:bg-white text-black dark:text-black p-8 md:p-12 border-4 border-primary shadow-[15px_15px_0px_0px_rgba(0,119,182,1)] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="w-full h-full topo-lines transition-colors duration-500 text-black dark:text-black"></div>
                  </div>
                  <div className="text-lg font-medium leading-relaxed prose dark:prose-invert prose-slate max-w-none relative z-10 text-black">
                    <div dangerouslySetInnerHTML={{ __html: formatStrategy(strategy) }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-6 font-display font-black text-xl uppercase tracking-tighter mt-12">
            <div className="flex items-center space-x-6 group cursor-pointer text-black dark:text-white">
              <div className="w-5 h-5 bg-primary group-hover:rotate-90 transition-transform duration-500"></div>
              <span className="group-hover:text-primary transition-colors text-sm sm:text-base md:text-2xl">contact@drekamlab.com</span>
            </div>
            <div className="flex items-center space-x-6 group cursor-pointer text-black dark:text-white">
              <div className="w-5 h-5 bg-accent group-hover:rotate-90 transition-transform duration-500"></div>
              <span className="group-hover:text-accent transition-colors text-sm sm:text-base md:text-2xl">+1 (555) 012-3456</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-surface border-4 border-black dark:border-white p-6 md:p-12 shadow-[15px_15px_0px_0px_rgba(0,119,182,1)] sm:shadow-[25px_25px_0px_0px_rgba(0,119,182,1)] relative overflow-hidden w-full mt-16 lg:mt-0 transition-colors">
          <div className="absolute inset-0 opacity-5 pointer-events-none brutalist-grid scale-50"></div>
          
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t-8 border-r-8 border-accent"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-8 border-l-8 border-accent"></div>
          
          <form className="space-y-10 relative z-10">
            <div className="relative group">
              <label className="block font-black text-[10px] uppercase tracking-[0.4em] text-black/40 dark:text-white/40 mb-4 group-focus-within:text-primary transition-colors">{t('contact_id')}</label>
              <input className="w-full bg-white dark:bg-black border-2 border-black/10 dark:border-white/10 text-black dark:text-white px-6 py-5 focus:border-primary focus:ring-0 rounded-none transition-all font-bold text-lg sm:text-2xl uppercase placeholder:opacity-20" placeholder={t('contact_name_placeholder')} type="text"/>
            </div>
            <div className="relative group">
              <label className="block font-black text-[10px] uppercase tracking-[0.4em] text-black/40 dark:text-white/40 mb-4 group-focus-within:text-primary transition-colors">{t('contact_coord')}</label>
              <input className="w-full bg-white dark:bg-black border-2 border-black/10 dark:border-white/10 text-black dark:text-white px-6 py-5 focus:border-primary focus:ring-0 rounded-none transition-all font-bold text-lg sm:text-2xl uppercase placeholder:opacity-20" placeholder={t('contact_email_placeholder')} type="email"/>
            </div>
            <div className="relative group">
              <label className="block font-black text-[10px] uppercase tracking-[0.4em] text-black/40 dark:text-white/40 mb-4 group-focus-within:text-primary transition-colors">{t('contact_msg')}</label>
              <textarea className="w-full bg-white dark:bg-black border-2 border-black/10 dark:border-white/10 text-black dark:text-white px-6 py-5 focus:border-primary focus:ring-0 rounded-none transition-all font-bold text-lg sm:text-2xl uppercase placeholder:opacity-20" placeholder={t('contact_brief_placeholder')} rows={4}></textarea>
            </div>
            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-display font-black text-2xl sm:text-3xl uppercase py-8 hover:bg-primary hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(253,197,0,1)] active:shadow-none active:translate-x-2 active:translate-y-2 border-4 border-black dark:border-white transition-colors" type="button">
              {t('contact_btn')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

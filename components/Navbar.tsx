import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Magnetic from './Magnetic';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  onPageChange: (page: 'home' | 'services' | 'about' | 'portfolio') => void;
  currentPage: 'home' | 'services' | 'about' | 'portfolio';
}

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'zh', label: 'ZH' }
  ] as const;

  const handleNavClick = (page: 'home' | 'services' | 'about' | 'portfolio') => {
    onPageChange(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: ('home' | 'services' | 'portfolio' | 'about')[] = ['home', 'services', 'portfolio', 'about'];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] py-3 md:py-4 px-6 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b-2 border-black/10 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Magnetic strength={0.2}>
          <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
            <Logo />
          </div>
        </Magnetic>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-10 text-[11px] font-black uppercase tracking-[0.2em] items-center font-display text-black dark:text-white">
          {navItems.map((item) => {
            const label = t(`nav_${item}`);
            return (
              <Magnetic key={item} strength={0.2}>
                <button 
                  onClick={() => handleNavClick(item)} 
                  className={`hover:text-primary transition-colors pb-1 border-b-2 ${
                    (item === currentPage) ? 'text-primary border-primary' : 'border-transparent hover:border-primary'
                  }`}
                >
                  {label}
                </button>
              </Magnetic>
            );
          })}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white hover:bg-primary dark:hover:bg-primary transition-colors"
            title="Toggle Theme"
          >
            <i className="material-icons text-xl">{theme === 'light' ? 'dark_mode' : 'light_mode'}</i>
          </button>

          <div className="hidden sm:flex bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10 p-1 font-mono">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`w-10 h-10 flex items-center justify-center text-xs font-black transition-colors ${
                  lang === l.code ? 'bg-primary text-white' : 'text-black/30 dark:text-white/30 hover:text-primary'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button 
            onClick={toggleMenu} 
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary transition-colors border-2 border-black dark:border-white active:translate-y-1"
          >
            <div className="relative w-5 h-3.5">
              <span className={`absolute left-0 top-0 w-full h-1 bg-current transition-all ${isOpen ? 'top-1.5 rotate-45' : ''}`}></span>
              <span className={`absolute left-0 top-1.5 w-full h-1 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 top-3 w-full h-1 bg-current transition-all ${isOpen ? 'top-1.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div className={`fixed inset-0 bg-white dark:bg-black z-[250] transition-all duration-500 ease-in-out lg:hidden flex flex-col ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex justify-between items-center p-4 border-b-4 border-black dark:border-white bg-white dark:bg-black relative z-20">
          <Logo className="scale-90" />
          <div className="flex space-x-2">
            <button 
              onClick={toggleTheme}
              className="w-11 h-11 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black active:scale-95 transition-transform"
            >
              <i className="material-icons text-2xl">{theme === 'light' ? 'dark_mode' : 'light_mode'}</i>
            </button>
            <button 
              onClick={toggleMenu}
              className="w-11 h-11 bg-accent text-black flex items-center justify-center border-2 border-black active:scale-95 transition-transform shadow-[3px_3px_0px_0px_rgba(0,119,182,1)]"
            >
              <i className="material-icons text-3xl font-bold">close</i>
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center space-y-4 px-8 bg-white dark:bg-black">
          {navItems.map((item, i) => (
            <button 
              key={item}
              onClick={() => handleNavClick(item)}
              className="group relative w-full max-w-[280px]"
            >
              <div className={`
                w-full py-3 px-5 border-[3px] border-black dark:border-white 
                bg-black dark:bg-white text-white dark:text-black
                transform skew-x-[-4deg] transition-all duration-300
                active:translate-x-1 active:translate-y-0.5
                ${i % 2 === 0 ? 'shadow-[5px_5px_0px_0px_rgba(0,119,182,1)]' : 'shadow-[5px_5px_0px_0px_rgba(253,197,0,1)]'}
                group-hover:bg-primary group-hover:text-white group-hover:shadow-none
              `}>
                <span className="block font-display font-black text-2xl uppercase tracking-tighter leading-none transform skew-x-[4deg]">
                  {t(`nav_${item}`)}
                </span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-surface border-t-4 border-black dark:border-white flex flex-col items-center relative z-20">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary font-bold mb-4">SELECT_SYSTEM_LANG</p>
          <div className="flex border-[3px] border-black dark:border-white p-1.5 space-x-3 bg-white dark:bg-black/40">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`w-11 h-11 flex items-center justify-center text-sm font-black transition-all border-2 ${
                  lang === l.code 
                    ? 'bg-primary text-white border-white scale-105' 
                    : 'text-black/30 dark:text-white/30 border-transparent hover:text-primary'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 brutalist-grid opacity-[0.03] pointer-events-none z-10"></div>
      </div>
    </nav>
  );
};

export default Navbar;
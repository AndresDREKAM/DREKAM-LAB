
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12 border-t-2 border-black/10 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Logo className="scale-75 origin-left" />
        </div>
        <div className="font-mono text-xs text-black/40 dark:text-white/40 uppercase tracking-widest font-bold">
          © 2026 DREKAM LAB
        </div>
      </div>
    </footer>
  );
};

export default Footer;

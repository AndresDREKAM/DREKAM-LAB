
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Marquee: React.FC = () => {
  const { t } = useLanguage();
  
  const items = [
    t('marquee_1'),
    t('marquee_2'),
    t('marquee_3'),
    t('marquee_4'),
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-3 overflow-hidden border-b-2 border-black dark:border-white transition-colors duration-500">
      <div className="animate-marquee whitespace-nowrap flex space-x-8 font-display font-black text-2xl uppercase tracking-widest">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, idx) => (
              <span key={idx} className={idx % 2 !== 0 ? "text-primary" : ""}>{item}</span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

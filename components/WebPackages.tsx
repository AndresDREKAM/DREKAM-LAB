
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface WebPackageProps {
  number: string;
  name: string;
  price: string;
  features: string[];
}

const WebPackageCard: React.FC<WebPackageProps> = ({ number, name, price, features }) => {
  const { t } = useLanguage();
  
  return (
    <div className="relative group p-2 md:p-4 flex flex-col items-center w-full h-full">
      {/* Background Poster Style */}
      <div className="bg-[#A9B2BC] dark:bg-[#1E2329] w-full min-h-[700px] md:min-h-[850px] p-6 md:p-10 border-4 border-black dark:border-white shadow-2xl relative overflow-hidden flex flex-col transition-colors duration-500 h-full">
        <div className="absolute inset-0 wavy-lines-pattern opacity-20 text-white pointer-events-none"></div>
        
        {/* Package Title */}
        <div className="relative z-10 text-white mb-8">
           <h3 className="font-display font-black text-4xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-2">
             {t('pkg_web_title')} {number}:
           </h3>
           <p className="font-display font-light text-2xl md:text-4xl uppercase tracking-widest opacity-90">
             {name}
           </p>
        </div>

        {/* Floating Tapes */}
        <div className="absolute top-[25%] -left-1/4 w-[150%] transform -rotate-12 z-0">
          <div className="bg-accent py-2 border-y-2 border-black whitespace-nowrap overflow-hidden">
            <div className="flex animate-marquee space-x-4">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-display font-black text-[10px] md:text-sm uppercase tracking-widest text-black">
                  {t('pkg_web_title')} {number}: {name} •
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute top-[50%] -left-1/4 w-[150%] transform rotate-6 z-0">
          <div className="bg-accent py-2 border-y-2 border-black whitespace-nowrap overflow-hidden">
            <div className="flex animate-marquee-reverse space-x-4">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-display font-black text-[10px] md:text-sm uppercase tracking-widest text-black">
                  {t('pkg_web_title')} {number}: {name} •
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* The White Features Card */}
        <div className="relative mx-auto w-full md:w-[92%] bg-white p-6 md:p-10 shadow-xl border-2 border-gray-100 z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 flex flex-col pb-24 md:pb-28">
          <h4 className="text-primary font-display font-black text-xl md:text-3xl uppercase italic mb-6 border-b-2 border-primary/20 pb-3">
            {t('pkg_web_params')}
          </h4>
          
          <ul className="space-y-3 md:space-y-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-start space-x-4">
                <span className="text-primary text-xl md:text-2xl font-black leading-none mt-1 shrink-0">•</span>
                <span className="text-primary text-[11px] md:text-[13px] font-bold leading-tight uppercase tracking-tight">
                  {t(f)}
                </span>
              </li>
            ))}
          </ul>
          
          {/* Footer inside white card: Price and Badge Logo */}
          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex justify-between items-end">
            {/* Price Tag */}
            <div className="bg-primary text-white px-5 py-2 md:px-8 md:py-4 font-display font-black text-xl md:text-5xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20">
              {price}
            </div>

            {/* Badge Logo - Slanted box like the reference */}
            <div className="relative group/logo">
               <div className="bg-black py-1 px-2 md:py-2 md:px-5 transform -skew-x-12 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,119,182,1)] md:shadow-[4px_4px_0px_0px_rgba(0,119,182,1)]">
                 <img 
                  src="https://i.ibb.co/dshFV1Xf/DREKAM-fondo-negro-2.png" 
                  className="w-16 md:w-36 h-auto object-contain brightness-200" 
                  alt="Drekam Lab Logo" 
                 />
               </div>
            </div>
          </div>
        </div>

        {/* Lab Branding Text Overlay at the very bottom of poster */}
        <div className="absolute bottom-4 left-6 z-0 opacity-10">
           <span className="font-mono text-[8px] uppercase tracking-widest text-white">System_ID: PKG_{number}_v3</span>
        </div>
      </div>
    </div>
  );
};

const WebPackages: React.FC = () => {
  const { t } = useLanguage();

  const packages = [
    {
      number: '1',
      name: t('pkg_web_1_name'),
      price: '$6,038',
      features: [
        'pkg_web_1_feat_1',
        'pkg_web_1_feat_2',
        'pkg_web_1_feat_3',
        'pkg_web_1_feat_4',
        'pkg_web_1_feat_5',
        'pkg_web_1_feat_6',
        'pkg_web_1_feat_7',
        'pkg_web_1_feat_8'
      ]
    },
    {
      number: '2',
      name: t('pkg_web_2_name'),
      price: '$15,125',
      features: [
        'pkg_web_2_feat_1',
        'pkg_web_2_feat_2',
        'pkg_web_2_feat_3',
        'pkg_web_2_feat_4',
        'pkg_web_2_feat_5',
        'pkg_web_2_feat_6',
        'pkg_web_2_feat_7',
        'pkg_web_2_feat_8'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-16">
          <div className="w-16 h-1 bg-primary"></div>
          <h2 className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-black dark:text-white">
            Web <span className="text-primary italic">Engineering</span> Packages
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-stretch">
          {packages.map((pkg, i) => (
            <WebPackageCard key={i} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebPackages;


import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface PackageProps {
  letter: string;
  name: string;
  price: string;
  platforms: string;
  content: string;
  google: string;
  invest: string;
}

const SocialPackageCard: React.FC<PackageProps> = ({ letter, name, price, platforms, content, google, invest }) => {
  const { t } = useLanguage();
  
  return (
    <div className="relative group p-2 md:p-4 flex flex-col items-center w-full h-full">
      {/* Background Poster Style - Adjusted height to be more compact */}
      <div className="bg-primary dark:bg-[#1E2329] w-full min-h-[550px] md:min-h-[650px] p-6 md:p-8 border-4 border-black dark:border-white shadow-2xl relative overflow-hidden flex flex-col transition-colors duration-500 h-full">
        {/* Dynamic Wavy Pattern */}
        <div className="absolute inset-0 wavy-lines-pattern opacity-20 text-white pointer-events-none"></div>
        
        {/* Package Title Header */}
        <div className="relative z-10 text-white mb-6">
           <h3 className="font-display font-black text-4xl md:text-6xl leading-[0.85] tracking-tighter uppercase mb-2">
             {t('package_label')} {letter}:
           </h3>
           <p className="font-display font-light text-xl md:text-2xl uppercase tracking-widest opacity-90">
             {name}
           </p>
        </div>

        {/* Floating Tapes Marquee - Positioned to interact with the white card */}
        <div className="absolute top-[20%] -left-1/4 w-[150%] transform -rotate-6 z-0">
          <div className="bg-accent py-1 border-y-2 border-black whitespace-nowrap overflow-hidden">
            <div className="flex animate-marquee space-x-4">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-display font-black text-[9px] md:text-xs uppercase tracking-widest text-black">
                  {t('package_label')} {letter}: {name} •
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-[15%] -left-1/4 w-[150%] transform rotate-3 z-0">
          <div className="bg-accent py-1 border-y-2 border-black whitespace-nowrap overflow-hidden">
            <div className="flex animate-marquee-reverse space-x-4">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-display font-black text-[9px] md:text-xs uppercase tracking-widest text-black">
                  {t('package_label')} {letter}: {name} •
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* The White Detailed Features Card - Centered and more compact */}
        <div className="relative mx-auto w-full md:w-[96%] bg-white p-6 md:p-8 shadow-xl border-2 border-gray-100 z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 flex flex-col flex-grow mb-4">
          <div className="space-y-4 md:space-y-5 flex-grow">
            <div className="space-y-1">
              <h4 className="text-primary font-display font-black text-[12px] md:text-sm uppercase tracking-tight">{t('package_platforms')}</h4>
              <p className="text-primary/70 font-bold text-[10px] md:text-[11px] leading-tight uppercase">{platforms}</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-primary font-display font-black text-[12px] md:text-sm uppercase tracking-tight">{t('package_content')}</h4>
              <p className="text-primary/70 font-bold text-[10px] md:text-[11px] leading-tight uppercase">{content}</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-primary font-display font-black text-[12px] md:text-sm uppercase tracking-tight">{t('package_google')}</h4>
              <p className="text-primary/70 font-bold text-[10px] md:text-[11px] leading-tight uppercase">{google}</p>
            </div>

            <div className="space-y-1">
              <h4 className="text-primary font-display font-black text-[12px] md:text-sm uppercase tracking-tight">{t('package_investment')}</h4>
              <p className="text-primary/70 font-bold text-[10px] md:text-[11px] leading-tight uppercase">{invest}</p>
            </div>
          </div>
          
          {/* Price Tag & Logo inside white card at the bottom */}
          <div className="mt-8 flex justify-between items-end border-t-2 border-black/5 pt-6">
            <div className="bg-primary text-white px-5 py-2 md:px-6 md:py-3 font-display font-black text-xl md:text-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {price}
            </div>

            <div className="bg-black py-1 px-3 transform -skew-x-12 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,119,182,1)]">
                 <img 
                  src="https://i.ibb.co/dshFV1Xf/DREKAM-fondo-negro-2.png" 
                  className="w-16 md:w-24 h-auto object-contain brightness-200" 
                  alt="Drekam Lab" 
                 />
            </div>
          </div>
        </div>

        {/* Branding Overlay */}
        <div className="absolute bottom-3 left-6 z-0 opacity-10">
           <span className="font-mono text-[8px] uppercase tracking-widest text-white">System_ID: SOCIAL_{letter}_v3</span>
        </div>
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  const { t } = useLanguage();

  const packages = [
    {
      letter: 'A',
      name: t('pkg_a_name'),
      price: '$5,750',
      platforms: t('pkg_a_platforms'),
      content: t('pkg_a_content'),
      google: t('pkg_a_google'),
      invest: t('pkg_a_invest')
    },
    {
      letter: 'B',
      name: t('pkg_b_name'),
      price: '$9,775',
      platforms: t('pkg_b_platforms'),
      content: t('pkg_b_content'),
      google: t('pkg_b_google'),
      invest: t('pkg_b_invest')
    },
    {
      letter: 'C',
      name: t('pkg_c_name'),
      price: '$17,250',
      platforms: t('pkg_c_platforms'),
      content: t('pkg_c_content'),
      google: t('pkg_c_google'),
      invest: t('pkg_c_invest')
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center space-x-4 mb-16">
          <div className="w-16 h-1 bg-accent"></div>
          <h2 className="font-display font-black text-4xl md:text-7xl uppercase tracking-tighter text-black dark:text-white">
            Social <span className="text-primary italic">Dominion</span> Packages
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {packages.map((pkg, i) => (
            <SocialPackageCard key={i} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

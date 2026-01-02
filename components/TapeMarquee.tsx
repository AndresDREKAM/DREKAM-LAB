
import React from 'react';

interface TapeMarqueeProps {
  text: string;
  rotate?: string;
  reverse?: boolean;
}

const TapeMarquee: React.FC<TapeMarqueeProps> = ({ text, rotate = "0deg", reverse = false }) => {
  return (
    <div 
      className={`bg-accent py-2 md:py-3 border-y-4 border-black dark:border-white overflow-hidden whitespace-nowrap z-30 shadow-xl transition-colors duration-500`}
      style={{ 
        transform: `rotate(${rotate})`, 
        width: '140vw', 
        marginLeft: '-20vw' 
      }}
    >
      <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} space-x-4 md:space-x-8`}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-display font-black text-lg md:text-2xl uppercase tracking-widest text-black flex-shrink-0">
            {text} • {text} •
          </span>
        ))}
      </div>
    </div>
  );
};

export default TapeMarquee;

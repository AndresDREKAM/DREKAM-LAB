
import React, { useState, useEffect, useRef } from 'react';
import { Stat } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Counter: React.FC<{ target: number; duration?: number; suffix?: string }> = ({ target, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <div ref={elementRef} className="inline-block">
      {count}{suffix}
    </div>
  );
};

const Stats: React.FC = () => {
  const { t } = useLanguage();
  
  const stats: Stat[] = [
    { label: t('stat_projects'), value: '950', color: 'primary' },
    { label: t('stat_experience'), value: '18', color: 'accent' },
    { label: t('stat_clients'), value: '780', color: 'primary' },
  ];

  return (
    <section className="bg-primary text-white py-16 border-y-4 border-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x-4 divide-white/20">
        {stats.map((stat, i) => (
          <div key={i} className="py-6 group cursor-default">
            <div className="font-display font-black text-6xl md:text-7xl mb-2 transition-transform group-hover:scale-110 duration-300">
              <Counter target={parseInt(stat.value)} />
            </div>
            <div className="font-display text-xs md:text-sm uppercase font-black tracking-[0.4em] text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

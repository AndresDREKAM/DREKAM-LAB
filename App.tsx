import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BrandArchitecture from './components/BrandArchitecture';
import Services from './components/Services';
import Specialties from './components/Specialties';
import Stats from './components/Stats';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about' | 'portfolio'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main className="animate-in fade-in duration-700">
            <Hero />
            <BrandArchitecture />
            <Services />
            <Specialties />
            <Stats />
            <Process />
            <Team />
            <Contact />
          </main>
        );
      case 'services':
        return (
          <main className="animate-in slide-in-from-right-4 fade-in duration-700">
            <ServicesPage />
          </main>
        );
      case 'portfolio':
        return (
          <main className="animate-in slide-in-from-right-4 fade-in duration-700">
            <PortfolioPage />
          </main>
        );
      case 'about':
        return (
          <main className="animate-in slide-in-from-right-4 fade-in duration-700">
            <AboutPage />
          </main>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 selection:bg-primary selection:text-white">
          <CustomCursor />
          <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
          
          <div className="pt-20 md:pt-24">
            <Marquee />
          </div>

          {renderContent()}
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
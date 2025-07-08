import { useEffect } from 'react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';

import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import FloatingElements from '../components/FloatingElements';
import { initializeScrollAnimations } from '../utils/animations';


const Index = () => {
  useEffect(() => {
    // Initialize animations after component mount
    const timer = setTimeout(() => {
      initializeScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Preloader />
      <FloatingElements />
      <Navigation />
      
      <main data-scroll-container className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;

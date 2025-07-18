import { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 3 }); // Wait for preloader
    
    tl.fromTo('.hero-title',
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power2.out'
      }
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5'
    )
    .fromTo('.hero-cta',
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.3')
    .fromTo('.spline-background',
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 0.7, 
        scale: 1,
        duration: 1.5,
        ease: 'power2.out'
      }, '-=1.2');

    // Continuous CTA pulse animation
    gsap.to('.hero-cta', {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

  }, []);

  return (
   
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-purple-900/20 to-blue-900/20 dark:from-black dark:via-gray-900/50 dark:to-blue-950/40"></div>
    
    {/* Centered Content */}
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center">
        <h1 className="hero-title text-3xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
          Hi, I'm{' '}
          <span className="gradient-text text-glow">Tanvi Mandhan</span>
          <br />
          Web Developer 
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          I’m a B.Tech student at IET Lucknow with a passion for building web applications and solving real-world problems through code.  
        </p>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
        <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
);

};

export default HeroSection;

import { useEffect } from 'react';
import { gsap } from 'gsap';

const FloatingElements = () => {
  useEffect(() => {
    // Create floating orbs animation
    gsap.to('.floating-orb-1', {
      y: -30,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.floating-orb-2', {
      y: 25,
      x: -15,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5
    });

    gsap.to('.floating-orb-3', {
      y: -20,
      x: 30,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1
    });

    gsap.to('.floating-orb-4', {
      y: 35,
      x: -25,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1.5
    });

  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Orbs */}
      <div className="floating-orb floating-orb-1 w-20 h-20 bg-gradient-to-br from-neon-blue/20 to-transparent top-1/4 left-1/4"></div>
      <div className="floating-orb floating-orb-2 w-16 h-16 bg-gradient-to-br from-neon-purple/15 to-transparent top-1/3 right-1/4"></div>
      <div className="floating-orb floating-orb-3 w-12 h-12 bg-gradient-to-br from-neon-blue/10 to-transparent bottom-1/3 left-1/3"></div>
      <div className="floating-orb floating-orb-4 w-24 h-24 bg-gradient-to-br from-neon-purple/10 to-transparent bottom-1/4 right-1/3"></div>
      
      {/* Additional Glowing Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-neon-blue rounded-full animate-glow-pulse"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-neon-purple rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-neon-blue/50 rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-1 h-1 bg-neon-purple/50 rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default FloatingElements;

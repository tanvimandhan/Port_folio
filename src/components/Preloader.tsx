import { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the progress bar from 0 to 100%
    tl.fromTo('.progress-bar', 
      { width: '0%' },
      { 
        width: '100%', 
        duration: 2.5,
        ease: 'power2.out'
      }
    )
    .to('.progress-text', {
      opacity: 0,
      duration: 0.3
    }, '-=0.5')
    .to('.preloader-content', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    })
    .to('.preloader', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        const preloader = document.querySelector('.preloader') as HTMLElement;
        if (preloader) {
          preloader.style.display = 'none';
        }
        
        // Animate main content in
        gsap.fromTo('.main-content', 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
      }
    });

    // Animate the logo/text
    gsap.fromTo('.preloader-logo',
      { opacity: 0, scale: 0.8, rotationY: 180 },
      { 
        opacity: 1, 
        scale: 1, 
        rotationY: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.2
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="preloader fixed inset-0 z-50 bg-cyber-dark flex items-center justify-center">
      <div className="preloader-content text-center">
        <div className="preloader-logo mb-8">
          <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
            TANVI
          </h1>
          <p className="text-lg text-gray-400 tracking-wider">
            Web Developer
          </p>
        </div>
        
        <div className="w-80 max-w-md mx-auto">
          <div className="bg-gray-800 rounded-full h-1 mb-4 overflow-hidden">
            <div className="progress-bar h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
          </div>
          <p className="progress-text text-sm text-gray-500 tracking-wide">
            Loading Experience...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

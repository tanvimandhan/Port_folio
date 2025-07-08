import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const initializeScrollAnimations = () => {
  // Smooth scroll behavior
  const smoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: element,
          offsetY: 80
        },
        ease: "power2.inOut"
      });
    }
  };

  // Add click listeners to navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      if (target) {
        smoothScroll(target);
      }
    });
  });

  // Scroll-triggered animations for sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    gsap.fromTo(section, 
      { 
        opacity: 0.8,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Parallax effect for hero section
  gsap.to('.hero-bg', {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: '#hero',
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  // Scale animation for project cards on hover
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Magnetic effect for buttons
  const buttons = document.querySelectorAll('.btn-primary');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
};

// Utility functions for common animations
export const fadeInUp = (element: string, delay = 0) => {
  gsap.fromTo(element,
    { 
      opacity: 0, 
      y: 50 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay,
      ease: "power2.out" 
    }
  );
};

export const staggerAnimation = (elements: string, delay = 0.1) => {
  gsap.fromTo(elements,
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      stagger: delay,
      ease: "power2.out" 
    }
  );
};

export const glowPulse = (element: string) => {
  gsap.to(element, {
    boxShadow: "0 0 30px rgba(0, 217, 255, 0.8)",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });
};

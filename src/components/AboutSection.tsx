import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
      }
    });

    tl.fromTo('.about-image',
      { opacity: 0, x: -50, rotationY: 30 },
      { 
        opacity: 1, 
        x: 0, 
        rotationY: 0,
        duration: 1,
        ease: 'power2.out'
      }
    )
    .fromTo('.about-content',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5')
    .fromTo('.skill-icon',
      { opacity: 0, scale: 0.5, y: 20 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.3');

  }, []);

  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'GSAP', icon: '🎭' },
    { name: 'Node.js', icon: '🚀' }
  ];

  return (
    <section id="about" className="about-section py-20 relative  bg-blue-900/20">
      <div className="container mx-auto px-6 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="about-image relative">
            <div className="relative w-90 h-120 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-blue/50 hover:border-neon-purple/50 transition-all duration-500 hover:scale-105 hover:rotate-3">
                <img 
                  src="/tanvi_profile.jpg" 
                  alt="Milad - Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            
            <p className="text-lg text-gray-900 mb-8 leading-relaxed">
              I'm a passionate web developer with expertise in creating immersive digital experiences. 
              I specialize in modern web technologies and love bringing creative ideas to life through 
              clean code and innovative design solutions.
            </p>
            
            <p className="text-lg text-gray-900 mb-12 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-icon group glass-card p-4 text-center hover:neon-glow transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-neon-blue transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

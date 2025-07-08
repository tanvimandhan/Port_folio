import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
      }
    });

    tl.fromTo('.projects-title',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    )
    .fromTo('.project-card',
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      }, '-=0.3');

  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: '/lovable-uploads/c79bd729-90b7-4e15-8583-781402cd1b5e.png',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/tanvimandhan/E_commerce'
    },
    {
      id: 2,
      title: 'Food Delivery Website',
      description: 'Interactive gaming UI with real-time statistics',
      image: '/lovable-uploads/0ce1ef87-dac3-4b2a-8e50-5eae4780937b.png',
      tech: ['Vue.js', 'WebGL', 'Socket.io'],
      link: 'https://github.com/tanvimandhan/Food_delivery'
    },
    {
      id: 3,
      title: 'AI career Coach',
      description: '3D interactive portfolio with Spline integration',
      image: '/lovable-uploads/40756d5e-0521-4f53-bc07-adbafd3d4de1.png',
      tech: ['React', 'GSAP', 'Spline'],
      link: 'https://github.com/tanvimandhan/OrbitHire'
    },
    {
      id: 4,
      title: 'Learning voice assistant',
      description: 'Animated gaming website with character designs',
      image: '/lovable-uploads/25f6ee25-db42-4298-8e01-12a76f625735.png',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/tanvimandhan/Edubot'
    },
    {
      id: 5,
      title: 'Alarm and object detector',
      description: 'Web animation tools learning platform',
      image: '/lovable-uploads/5d6b3537-9df2-423d-90a4-2a4ae821625a.png',
      tech: ['React', 'GSAP', 'Framer'],
      link: '#'
    },
    {
      id: 6,
      title: 'Pdf Reader',
      description: 'Minimalist portfolio with smooth animations',
      image: '/lovable-uploads/7d6a5ac5-f558-4256-b9bb-621136987f2d.png',
      tech: ['Next.js', 'Tailwind', 'GSAP'],
      link: 'https://github.com/tanvimandhan/PDF_Reader'
    },
    {
      id: 7,
      title: 'Student management system',
      description: 'Minimalist portfolio with smooth animations',
      image: '/lovable-uploads/7d6a5ac5-f558-4256-b9bb-621136987f2d.png',
      tech: ['Next.js', 'Tailwind', 'GSAP'],
      link: 'https://github.com/tanvimandhan/AttendEase'
    },
    {
      id: 8,
      title: 'Portfolio',
      description: 'Minimalist portfolio with smooth animations',
      image: '/lovable-uploads/7d6a5ac5-f558-4256-b9bb-621136987f2d.png',
      tech: ['Next.js', 'Tailwind', 'GSAP'],
      link: '#'
    },
    {
      id: 9,
      title: 'Weather App',
      description: 'Minimalist portfolio with smooth animations',
      image: '/lovable-uploads/7d6a5ac5-f558-4256-b9bb-621136987f2d.png',
      tech: ['Next.js', 'Tailwind', 'GSAP'],
      link: 'https://github.com/tanvimandhan/WeatherApp'
    }
  ];

  return (
    <section id="projects" className="projects-section py-20 relative overflow-hidden bg-blue-900/20">
      <div className="container mx-auto px-6">
        <h2 className="projects-title text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        {/* Desktop: Horizontal Scroll */}
        <div className="hidden lg:block">
          <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card flex-shrink-0 w-80 glass-card p-6 group hover:neon-glow transition-all duration-500 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src='/project-1.png'
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-lg text-neon-blue hover:bg-gradient-to-r hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all duration-300">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile: Grid Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card p-6 group hover:neon-glow transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-lg text-neon-blue hover:bg-gradient-to-r hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all duration-300">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
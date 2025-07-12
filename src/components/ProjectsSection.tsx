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
      image: '/file3.jpg',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/tanvimandhan/E_commerce'
    },
    {
      id: 2,
      title: 'Food Delivery Website',
      description: 'Delicious food, delivered with ease',
      image: '/file2.jpg',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/tanvimandhan/Food_delivery'
    },
    {
      id: 3,
      title: 'AI career Coach',
      description: 'Smart guidance for tech careers',
      image: '/file6.jpg',
      tech: ['Next', 'Gemini', 'Shadcn'],
      link: 'https://github.com/tanvimandhan/OrbitHire'
    },
    {
      id: 4,
      title: 'Learning voice assistant',
      description: 'Voice-powered smart learning assistant',
      image: '/file7.jpg',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/tanvimandhan/Edubot'
    },
    {
      id: 5,
      title: 'Object Detector',
      description: 'Detects object, triggers instant alarm',
      image: '/file9.jpg.png',
      tech: ['React', 'GSAP', 'Framer'],
      link: '#'
    },
    {
      id: 6,
      title: 'Pdf Reader',
      description: 'Clean and intuitive PDF reader',
      image: '/file5.jpg',
      tech: ['Python', 'Streamlit', 'Gemini'],
      link: 'https://github.com/tanvimandhan/PDF_Reader'
    },
    {
      id: 7,
      title: 'Student-management system',
      description: 'Smart system for student records',
      image: '/file8.jpg',
      tech: ['Next.js', 'Tailwind', 'Javascript'],
      link: 'https://github.com/tanvimandhan/AttendEase'
    },
    {
      id: 8,
      title: 'Portfolio',
      description: 'Minimalist portfolio with smooth animations',
      image: '/file1.jpg',
      tech: ['Next.js', 'Tailwind', 'GSAP'],
      link: '#'
    },
    {
      id: 9,
      title: 'Weather App',
      description: 'Real-time weather, simplified forecast',
      image: '/file4.jpg',
      tech: ['Next.js', 'API', 'GSAP'],
      link: 'https://github.com/tanvimandhan/WeatherApp'
    }
  ];

  return (
    <section id="projects" className="projects-section py-20 relative overflow-hidden bg-blue-900/20 dark:bg-gray-900/70">
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
            className="project-card flex-shrink-0 w-80 glass-card p-6 group hover:neon-glow transition-all duration-500 hover:scale-105 bg-gray-400 dark:bg-white/10 dark:border dark:border-white/20 rounded-lg"
          >
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-neon-blue transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {/* {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full"
                >
                  {tech}
                </span>
              ))} */}
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-lg text-neon-blue hover:bg-gradient-to-r hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all duration-300">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile: Grid Layout */}
    <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card glass-card p-6 group hover:neon-glow transition-all duration-500 bg-gray-400 dark:bg-white/10 dark:border dark:border-white/20 rounded-lg"
        >
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <h3 className="text-xl font-bold mb-3 text-black dark:text-white lg:block group-hover:text-neon-blue transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
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

          <a href={project.link} 
            target="_blank" rel="noopener noreferrer" className="block text-center  lg:hidden w-full py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-lg text-neon-blue hover:bg-gradient-to-r hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all duration-300 ">
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ProjectsSection;
// import { useState, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { Moon, Sun,X,List } from 'phosphor-react';

// interface NavbarProps {
//   theme: 'dark' | 'light';
//   onThemeToggle: () => void;
// }
// const Navigation = ({theme,onThemeToggle}: NavbarProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
 

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       gsap.to('.mobile-menu', {
//         x: 0,
//         duration: 0.5,
//         ease: 'power2.out'
//       });
//       gsap.fromTo('.mobile-menu-item',
//         { opacity: 0, y: 30 },
//         { 
//           opacity: 1, 
//           y: 0, 
//           duration: 0.3,
//           stagger: 0.1,
//           delay: 0.2
//         }
//       );
//     } else {
//       gsap.to('.mobile-menu', {
//         x: '100%',
//         duration: 0.5,
//         ease: 'power2.out'
//       });
//     }
//   }, [isOpen]);

//   const menuItems = [
//     { name: 'Home', href: '#hero' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' }
//   ];
  
//   return (
//     <>
//       <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
//         scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
//       }`}>
//         <div className="container mx-auto px-6 flex items-center justify-between">
//           <div className="text-2xl font-bold gradient-text">
//             TM
//           </div>
          
          
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-300 hover:text-neon-blue transition-colors duration-300 relative group"
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//             <a
//               href="/Resume_34.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn-primary"
//             >
//               Resume
//             </a>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={onThemeToggle}
//                 className="p-2 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
//               >
//                 {theme === 'dark' ? (
//                   <Sun size={20} className="text-yellow-400" />
//                 ) : (
//                   <Moon size={20} className="text-blue-400" />
//                 )}
//               </button>
//           </div>
          
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white z-50"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
//             <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
//             <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
//           </button>
//           {/* <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="md:hidden p-2 rounded-full glass hover:bg-primary/20 transition-all duration-300"
//               >
//                 {isMobileMenuOpen ? <X size={20} /> : <List size={20} />}
//             </button> */}
//             </div>
//         </div>
//       </nav>
      
//       {/* Mobile Menu */}
//       <div className="mobile-menu fixed top-0 right-0 w-full h-full bg-black backdrop-blur-md z-30 transform translate-x-full md:hidden">
//         <div className="flex flex-col items-center justify-center h-full space-y-8">
//           {menuItems.map((item, index) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="mobile-menu-item text-2xl text-white hover:text-neon-blue transition-colors duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//           <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mobile-menu-item btn-primary"
//             onClick={() => setIsOpen(false)}
//           >
//            Resume
//           </a>
//           <button>
            
//           </button>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Navigation;

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Moon, Sun, X, List } from 'phosphor-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

const Navigation = ({ theme, onThemeToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.fromTo('.mobile-menu-item',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2
        }
      );
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            TM
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="gradient-text hover:opacity-80 transition-opacity duration-300 text-lg font-medium"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Resume_34.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text hover:opacity-80 transition-opacity duration-300 text-lg font-medium"
            >
              Resume
            </a>
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-blue-400" />
              ) : (
                <Moon size={20} className="text-blue-400" />
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full border-2 border-neon-blue/50 hover:border-neon-blue transition-all duration-300 flex items-center justify-center bg-red-400"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} className='text-black  rounded' weight="bold" />
            ) : (
              <List size={20}  className="text-black " weight="bold" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 w-full h-full bg-black backdrop-blur-md z-30 transform translate-x-full md:hidden">
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="mobile-menu-item gradient-text text-3xl hover:opacity-80 transition-opacity duration-300 font-medium"
            >
              {item.name}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-item gradient-text text-3xl hover:opacity-80 transition-opacity duration-300 font-medium"
          >
            Resume
          </a>
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={() => {
              onThemeToggle();
              setIsMobileMenuOpen(false);
            }}
            className="mobile-menu-item p-4 rounded-full glass hover:bg-primary/20 transition-all duration-300"
          >
            {theme === 'dark' ? (
              <Sun size={24} className="text-blue-400" />
            ) : (
              <Moon size={24} className="text-blue-400" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
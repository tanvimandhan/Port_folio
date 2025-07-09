
 import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from "@emailjs/browser";




gsap.registerPlugin(ScrollTrigger);


 const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
      }
    });

    tl.fromTo('.contact-title',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    )
    .fromTo('.contact-form',
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5')
    .fromTo('.contact-info',
      { opacity: 0, x: 30 },
      { 
        opacity: 1, 
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.6')
    .fromTo('.social-icon',
      { opacity: 0, scale: 0.5, rotation: 45 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.3');

  }, []);
  
  const sendEmail = () => {
    emailjs.send(
      "service_5m23rya",    
      "template_sdd4rid",    
      {
        name:formData.name,
        email:formData.email,
        message: formData.message,
      },
      "mvlQ4ExYb3biWeoVh"      
    )
    .then(() => {
      alert("Mail sent to Tanvi's Gmail 🎉");
    })
    .catch((error) => {
      console.error("Email sending failed", error);
      alert("Oops! Something went wrong.");
    }
  )};
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        // Here you would typically send the form data
        console.log('Form submitted:', formData);
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        
        // Show success animation
        gsap.fromTo('.success-message',
          { opacity: 0, y: 20, scale: 0.8 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)'
          }
        );
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          gsap.to('.success-message', {
            opacity: 0,
            y: -20,
            duration: 0.3
          });
        }, 3000);
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section py-20 relative bg-blue-900/20">
      <div className="container mx-auto px-6">
        <h2 className="contact-title text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form bg-[#FFFFFF1A] backdrop-blur-md border border-black/50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  id='name'
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/80 rounded-lg text-black placeholder-gray-600 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 focus:outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  id='email'
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-200/5 border border-white/80 rounded-lg text-black placeholder-gray-600 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 focus:outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  id='message'
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/80 rounded-lg text-black placeholder-gray-600 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="submit-btn w-full btn-primary text-lg font-semibold"
                onClick={sendEmail}
              >
                Send Message
              </button>
              
              <div className="success-message opacity-0 text-center text-green-400 font-semibold">
                Message sent successfully! 🚀
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info space-y-8 ">
            <div className="glass-card p-6 border-black/50">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Let's Work Together
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you have a specific idea in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-neon-blue text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <p className="text-black">tanvimandhan34@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                    <span className="text-neon-purple text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <p className="text-black">(+91)9027088292</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-neon-blue text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="text-black">Lucknow,Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glass-card p-6 border-black/50">
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/tanvi-mandhan-897a7129b"
                  className="social-icon w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">💼</span>
                </a>
                <a
                  href="https://github.com/tanvimandhan"
                  className="social-icon w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-neon-purple/20 hover:text-neon-purple transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">🐙</span>
                </a>
                <a
                  href="#"
                  className="social-icon w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

 export default ContactSection

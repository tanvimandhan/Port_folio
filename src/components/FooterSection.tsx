import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 dark:bg-black w-full">
  <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto">
      
      {/* <div className="text-center mb-6">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Tanvi Mandhan
        </div>
        
      </div> */}
      
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-6">
        <a 
          href="https://github.com/tanvimandhan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <Github className="w-5 h-5 text-gray-300" />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/tanvi-mandhan-897a7129b"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-gray-300" />
        </a>
        
        <a 
          href="mailto:tanvimandhan34@gmail.com"
          className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <Mail className="w-5 h-5 text-gray-300" />
        </a>
      </div>

      {/* Bottom Line */}
      {/* <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tanvi Mandhan. All rights reserved.
        </p>
      </div> */}

    </div>
  </div>
</footer>

  );
};

export default Footer;
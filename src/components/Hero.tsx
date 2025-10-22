import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
            Franoll Fantu
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Software Developer & Designer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            HEY! I love building projects that make my life and others easier. <br></br>
            Come check them out!
          </p>

          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://github.com/franollf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-cyan-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/franollfantu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-cyan-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ffa28@sfu.ca"
              className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-cyan-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-cyan-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-hero font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ritesh Rajpal</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer crafting beautiful, responsive web experiences with 
            <span className="text-accent font-semibold"> React</span>, 
            <span className="text-accent font-semibold"> JavaScript</span>, and 
            <span className="text-accent font-semibold"> TailwindCSS</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('#projects')}
              className="btn-hero px-8 py-3 text-lg font-semibold rounded-lg"
            >
              View My Work
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-outline-hero px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:rajpalritesh482@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={() => scrollToSection('#about')}
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
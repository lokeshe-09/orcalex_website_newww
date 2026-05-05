"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Monitor, ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  const headingText = "Where human ambition meets machine intelligence. Welcome to OrcaLex Technologies.";
  const characters = Array.from(headingText);

  const subHeaderText = "OrcaLex Technologies is pioneering the future of AI — delivering cutting-edge intelligence that empowers anyone to thrive in the agentic-first era.";
  const subHeaderCharacters = Array.from(subHeaderText);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.2,
      },
    },
  };

  const subHeaderContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Slower streaming for the second section
        delayChildren: 0.5,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0 } 
    },
  };

  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Background Gradients - Subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-50/50 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Brand Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-xl">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <span className="text-xl font-medium tracking-tight">
            OrcaLex <span className="text-gray-500 font-normal">Technologies</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-12 max-w-5xl mx-auto leading-[1.05]"
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Abstract Visual Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-4xl opacity-[0.03] pointer-events-none">
           <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="400" r="399" stroke="black" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="299" stroke="black" strokeDasharray="4 4" />
              <circle cx="400" cy="400" r="199" stroke="black" strokeDasharray="4 4" />
           </svg>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Link 
            href="/demo"
            className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg group"
          >
            <Monitor className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Try Demo Platform
          </Link>
          <Link 
            href="/services"
            className="bg-gray-50 text-black border border-gray-100 px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white hover:border-gray-300 transition-all hover:scale-105 active:scale-95"
          >
            Explore AI use cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Hero statement section */}
      <div className="w-full max-w-7xl mx-auto px-6 mt-32 md:mt-64 text-left">
        <motion.div
           variants={subHeaderContainerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] max-w-5xl">
            {subHeaderCharacters.map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

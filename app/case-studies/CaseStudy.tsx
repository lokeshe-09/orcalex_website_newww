"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Quote, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

interface CaseStudyProps {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial: TestimonialProps;
  gradient?: string; // Kept for prop consistency but will use theme colors
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  id,
  title,
  category,
  challenge,
  solution,
  results,
  technologies,
  testimonial,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-premium rounded-[3rem] p-8 md:p-12 border-gray-100/50 shadow-sm relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-8 text-black/5 group-hover:text-black/10 transition-colors pointer-events-none">
        <ArrowUpRight className="w-24 h-24" />
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 px-4 py-1.5 rounded-full border border-gray-100">
          <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
          {category}
        </div>
        
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 max-w-2xl leading-tight">
          {title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-black mb-4">The Challenge</h4>
              <p className="text-xl text-gray-500 font-light leading-relaxed">{challenge}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-black mb-4">Our Solution</h4>
              <p className="text-xl text-gray-500 font-light leading-relaxed">{solution}</p>
            </div>

            <div className="pt-8 border-t border-gray-100 italic relative pr-12">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-black/5" />
              <p className="text-xl text-gray-600 font-light mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100" />
                <div>
                  <p className="text-sm font-medium text-black">{testimonial.author}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Hard Data & Tech */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-black/5 rounded-[2rem] p-8">
              <h4 className="text-sm font-semibold tracking-widest uppercase text-black mb-8">Observed Impact</h4>
              <ul className="space-y-6">
                {results.map((result, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-gray-600 font-light">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-black mb-6">Stack Overview</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-5 py-2.5 bg-white border border-gray-100 text-gray-500 text-xs font-medium rounded-full shadow-sm hover:border-black/20 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link 
                href={`/case-studies/${id}`} 
                className="group inline-flex items-center gap-4 text-black font-medium text-lg hover:gap-6 transition-all"
              >
                Full Case Study Analysis
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;

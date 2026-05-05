"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Zap, BookOpen } from 'lucide-react';

const CaseStudiesSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              AI Success Stories
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Discover how our advanced AI solutions have transformed businesses across industries. Real results from real intelligence.
            </p>
          </div>
          <Link 
            href="/case-studies"
            className="flex items-center gap-2 text-sm font-medium border-b border-black pb-1 hover:gap-3 transition-all"
          >
            All case studies
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <CaseStudyCard 
            title="Next-gen AI Platform for EdTech"
            category="AI Education"
            description="Implemented an advanced AI platform that generates curriculum-aligned solutions and identifies knowledge gaps."
            stat="30% Growth"
            icon={<BookOpen className="w-5 h-5" />}
            href="/case-studies"
          />
          <CaseStudyCard 
            title="Intelligent Inventory Systems"
            category="AI Manufacturing"
            description="Deployed an intelligent inventory control system using multimodal AI for document processing and demand forecasting."
            stat="40% Efficiency"
            icon={<Zap className="w-5 h-5" />}
            href="/case-studies"
          />
          <CaseStudyCard 
            title="Legal Document Intelligence"
            category="Legal Tech"
            description="Created a specialized RAG system for legal document extraction and analysis, reducing review time by 75%."
            stat="75% Time Saved"
            icon={<TrendingUp className="w-5 h-5" />}
            href="/case-studies"
          />
        </div>

        {/* Call to action card */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-32 glass-premium rounded-[40px] p-12 md:p-16 relative overflow-hidden text-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/20 blur-[100px] -z-10"></div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 max-w-2xl mx-auto">
            Ready to build the future of your industry with AI?
          </h3>
          <p className="text-lg text-gray-500 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss how our advanced AI solutions can address your specific challenges and drive business growth.
          </p>
          <Link 
            href="/contact" 
            className="bg-black text-white px-10 py-5 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Schedule a Consultation
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({ title, category, description, stat, icon, href }: { title: string; category: string; description: string; stat: string; icon: React.ReactNode; href: string }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="group"
  >
    <div className="mb-6 h-px w-full bg-gray-100 group-hover:bg-black transition-colors duration-500"></div>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:border-black/10 transition-all">
        {icon}
      </div>
      <span className="text-sm font-mono uppercase tracking-widest text-gray-400">{category}</span>
    </div>
    <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
    <p className="text-gray-500 font-light mb-8 leading-relaxed line-clamp-3">{description}</p>
    <div className="flex items-center justify-between mt-auto">
      <div className="text-lg font-medium">{stat}</div>
      <Link href={href} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

export default CaseStudiesSection;

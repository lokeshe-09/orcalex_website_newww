"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Database, Network, Zap } from 'lucide-react';

const TechnologiesSection = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1] mb-8">
              Advanced AI Technologies & Solutions
            </h2>
            <p className="text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
              Discover our comprehensive suite of AI technologies designed to transform your business through intelligence and efficiency.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="text-right">
              <span className="text-sm font-mono text-gray-400 uppercase tracking-widest block mb-4">Core Capabilities</span>
              <div className="h-px w-24 bg-black ml-auto"></div>
            </div>
          </div>
        </div>

        {/* Featured Tech: RAG */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6" />
              <span className="text-sm font-mono uppercase tracking-wider">Storage & Retrieval</span>
            </div>
            <h3 className="text-4xl font-medium mb-6 tracking-tight">Advanced RAG Implementation</h3>
            <p className="text-lg text-gray-500 font-light mb-8 leading-relaxed max-w-xl">
              Our advanced Retrieval-Augmented Generation (RAG) systems combine the power of large language models with your enterprise data to deliver accurate, context-aware AI responses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <FeatureItem text="Hybrid vector search" />
              <FeatureItem text="Multi-document reasoning" />
              <FeatureItem text="Automatic citation" />
              <FeatureItem text="Semantic matching" />
            </div>
            <Link 
              href="/technologies#rag"
              className="inline-flex items-center gap-2 group text-black font-medium"
            >
              Learn about our RAG solutions
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-premium rounded-[40px] p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 blur-[80px] -z-10"></div>
            <div className="space-y-8">
               <ProgressBar label="Document Processing" value={95} />
               <ProgressBar label="Vector Database Optimization" value={90} />
               <ProgressBar label="Query Understanding" value={85} />
               <ProgressBar label="Response Generation" value={98} />
            </div>
          </motion.div>
        </div>

        {/* Core Tech Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechCard 
            icon={<Cpu className="w-6 h-6" />}
            title="GRPO Fine-Tuning"
            description="Our Gradient-Regularized Policy Optimization enables efficient AI model development with 70% fewer examples."
            href="/technologies#fine-tuning"
          />
          <TechCard 
            icon={<Network className="w-6 h-6" />}
            title="Agentic Synthetic Data"
            description="Generate high-quality synthetic data using agentic systems that simulate real-world scenarios and edge cases."
            href="/technologies#synthetic-data"
          />
          <TechCard 
            icon={<Zap className="w-6 h-6" />}
            title="Efficient SLMs"
            description="Small Language Models optimized for specific tasks with significantly lower computational requirements."
            href="/technologies#slms"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
    <span className="text-sm font-light text-gray-600">{text}</span>
  </div>
);

const ProgressBar = ({ label, value }: { label: string; value: number }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-end">
      <span className="text-sm font-medium tracking-tight">{label}</span>
      <span className="text-xs font-mono text-gray-400">{value}%</span>
    </div>
    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full bg-black rounded-full"
      />
    </div>
  </div>
);

const TechCard = ({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) => (
  <Link href={href} className="group">
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass-premium rounded-3xl p-8 h-full border-gray-100/50 hover:border-black/10 transition-colors glass-card-interactive"
    >
      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
        Details <ChevronRight className="w-3 h-3" />
      </div>
    </motion.div>
  </Link>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default TechnologiesSection;

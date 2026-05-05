"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Database, Network, Zap } from 'lucide-react';

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-32 bg-white relative">
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
            <div className="grid grid-cols-2 gap-8">
               <StatusRing label="Doc Processing" value={95} />
               <StatusRing label="Vector DB Opt" value={90} />
               <StatusRing label="Query Understanding" value={85} />
               <StatusRing label="Response Gen" value={98} />
            </div>
          </motion.div>
        </div>

        {/* Featured Tech: Fine-Tuning Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 glass-premium rounded-[40px] p-12 relative overflow-hidden bg-gray-50/50"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50/50 blur-[80px] -z-10"></div>
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white/50 border border-white/80 shadow-sm">
                <h4 className="font-medium mb-1">SFT</h4>
                <p className="text-xs text-gray-500">Supervised Fine-Tuning — vision-language instruction tuning</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/50 border border-white/80 shadow-sm">
                <h4 className="font-medium mb-1 text-blue-600">GRPO</h4>
                <p className="text-xs text-gray-500">Group Relative Policy Optimization — RL without labeled answers</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/50 border border-white/80 shadow-sm">
                <h4 className="font-medium mb-1">GSPO</h4>
                <p className="text-xs text-gray-500">Group Sequence Policy Optimization — Sequence-level variant</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/50 border border-white/80 shadow-sm">
                <h4 className="font-medium mb-1 text-purple-600">DR-GRPO</h4>
                <p className="text-xs text-gray-500">Dead-reward GRPO variant for stability</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6" />
              <span className="text-sm font-mono uppercase tracking-wider">Model Optimization</span>
            </div>
            <h3 className="text-4xl font-medium mb-6 tracking-tight">Fine-Tuning Methods</h3>
            <p className="text-lg text-gray-500 font-light mb-8 leading-relaxed max-w-xl">
              We employ state-of-the-art fine-tuning architectures to deliver models that are specifically tailored to your industry&apos;s nuances and constraints.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <div>
                  <span className="text-base font-medium block">SFT (Supervised Fine-Tuning)</span>
                  <span className="text-sm font-light text-gray-500 block">Focuses on high-quality vision-language instruction tuning.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                <div>
                  <span className="text-base font-medium block">GRPO (Group Relative Policy Optimization)</span>
                  <span className="text-sm font-light text-gray-500 block">Advanced reinforcement learning without requiring labeled answers.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></div>
                <div>
                  <span className="text-base font-medium block">GSPO (Group Sequence Policy Optimization)</span>
                  <span className="text-sm font-light text-gray-500 block">Sequence-level importance sampling variant of GRPO.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                <div>
                  <span className="text-base font-medium block">DR-GRPO</span>
                  <span className="text-sm font-light text-gray-500 block">Dead-reward GRPO variant designed for maximum training stability.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Tech Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechCard 
            icon={<Cpu className="w-6 h-6" />}
            title="Advanced Optimization"
            description="Leveraging GSPO, DR-GRPO, and SFT to deliver highly stable and performant custom models."
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

const StatusRing = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="relative w-24 h-24 mb-4">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-gray-100"
        />
        <motion.circle
          cx="48"
          cy="48"
          r="40"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray="251.2"
          initial={{ strokeDashoffset: 251.2 }}
          whileInView={{ strokeDashoffset: 251.2 - (251.2 * value) / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-black"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-medium tracking-tighter">{value}%</span>
      </div>
    </div>
    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-tight max-w-[80px]">
      {label}
    </span>
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

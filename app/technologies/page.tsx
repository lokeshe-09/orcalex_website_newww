"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Database, 
  Network, 
  Zap, 
  ShieldCheck, 
  Globe,
  ArrowRight,
  Search,
  Settings2,
  Bot,
  Layers,
  Check
} from 'lucide-react';

const TechFeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 text-gray-500 font-light">
    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-black" />
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

export default function Technologies() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              Technology Stack
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-12 leading-[0.95]">
              The Core of <br /> Our Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
              We leverage the most advanced architectural patterns and proprietary optimization techniques to deliver production-ready AI systems.
            </p>
          </motion.div>
        </section>

        {/* Tech Stack Grid */}
        <div className="space-y-40">
          {/* RAG Section */}
          <TechSection 
            id="rag"
            badge="Retrieval & Search"
            title="Advanced RAG Architecture"
            description="Our RAG systems combine dense and sparse retrieval methods with semantic reranking to eliminate hallucinations."
            icon={<Search className="w-6 h-6" />}
            features={[
              "Hybrid vector & keyword search",
              "Multi-document semantic reranking",
              "Automatic source attribution",
              "Real-time knowledge sync"
            ]}
            insight="Our hybrid retrieval approach achieves 35% better retrieval accuracy compared to standard vector-only methods."
          />

          {/* GRPO Fine-Tuning */}
          <TechSection 
            id="fine-tuning"
            badge="Optimization"
            title="GRPO Fine-Tuning"
            description="Gradient-Regularized Policy Optimization allows us to fine-tune models with minimal data while preserving general reasoning."
            icon={<Settings2 className="w-6 h-6" />}
            features={[
              "Requires 70% fewer training examples",
              "Faster convergence speed",
              "Domain-specific specialization",
              "Superior task-specific performance"
            ]}
            reversed
            insight="GRPO prevents catastrophic forgetting, allowing models to specialize without losing their core reasoning capabilities."
          />

          {/* SLMs */}
          <TechSection 
            id="slms"
            badge="Efficiency"
            title="Small Language Models"
            description="High-performance models optimized for low-latency inference on edge devices or standard enterprise hardware."
            icon={<Cpu className="w-6 h-6" />}
            features={[
              "1-7B parameter optimizations",
              "Edge & mobile deployment ready",
              "90% LLM performance at 10x lower cost",
              "Quantized model weights"
            ]}
            insight="We implement advanced model distillation techniques to capture the essence of 70B models in tiny 3B footprints."
          />

          {/* Agentic Synthetic Data */}
          <TechSection 
            id="synthetic-data"
            badge="Data Engineering"
            title="Agentic Synthetic Data"
            description="A collaborative swarm of agents that generate, validate, and refine synthetic training datasets for niche domains."
            icon={<Bot className="w-6 h-6" />}
            features={[
              "Multi-agent scenario simulation",
              "Edge case generation",
              "Privacy-preserving dataset creation",
              "Automated data quality scoring"
            ]}
            reversed
            insight="Synthetic data allows us to bypass the cold-start problem for domains with limited real-world datasets."
          />
        </div>

        {/* Model Context Protocol */}
        <section id="context-protocol" className="mt-40">
          <div className="glass-premium rounded-[3rem] p-12 md:p-24 border-gray-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
                  Connectivity
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Model Context Protocol</h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                  MCP is a universal interface that allows AI models to securely interact with external systems, tools, and real-time data streams.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TechFeatureItem text="Secure two-way system connections" />
                  <TechFeatureItem text="Real-time tool & API interaction" />
                  <TechFeatureItem text="Context preservation across tools" />
                  <TechFeatureItem text="Standardized system integrations" />
                </div>
              </div>
              <div className="space-y-8">
                <ProgressItem label="Connection Speed" value={98} />
                <ProgressItem label="Security Compliance" value={100} />
                <ProgressItem label="Integration Versatility" value={92} />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Models */}
        <section className="mt-40">
           <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Latest Model Integrations</h2>
            <p className="text-xl text-gray-500 font-light">The foundation of our intelligent systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ModelCard 
              name="Deepseek R1"
              description="SOTA reasoning model for complex logic and mathematical operations."
              features={["Reasoning Core", "7B-33B Optimized", "Logic Focus"]}
            />
            <ModelCard 
              name="Qwen 2.5-VL"
              description="Advanced multimodal vision-language model for document and visual analysis."
              features={["Multimodal VQA", "OCR Excellence", "Chart Analysis"]}
            />
            <ModelCard 
              name="OrcaLex RAG-3b"
              description="Our proprietary small model specialized for high-precision RAG retrieval."
              features={["RAG Specialized", "Ultra-Low Latency", "Context Optimized"]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="mt-40">
          <div className="bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent)]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Build the Future</h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Connect with our engineering team to explore how these technologies can power your next generation of AI applications.
              </p>
              <Link 
                href="/contact"
                className="bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-gray-200 transition-all inline-flex items-center gap-2 group"
              >
                Schedule Architecture Review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

interface TechSectionProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  insight: string;
  reversed?: boolean;
}

const TechSection = ({ id, badge, title, description, icon, features, insight, reversed }: TechSectionProps) => (
  <section id={id} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, x: reversed ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={reversed ? 'lg:order-2' : ''}
    >
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-300 mb-6">
        {badge}
      </div>
      <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">{title}</h2>
      <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {features.map((feature, i) => (
          <TechFeatureItem key={i} text={feature} />
        ))}
      </div>

      <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 flex gap-4">
        <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 text-black">
          {icon}
        </div>
        <p className="text-sm text-gray-600 italic">"{insight}"</p>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`glass-premium p-1 aspect-square rounded-[4rem] relative overflow-hidden group ${reversed ? 'lg:order-1' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-black/5 rounded-full animate-ping" />
          <div className="absolute inset-4 bg-black/10 rounded-full animate-pulse" />
          <div className="absolute inset-8 bg-black rounded-full flex items-center justify-center text-white">
            {icon}
          </div>
        </div>
      </div>
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-black/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-black/20 rounded-full" />
    </motion.div>
  </section>
);

const ProgressItem = ({ label, value }: { label: string; value: number }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-end">
      <span className="text-gray-600 font-light">{label}</span>
      <span className="text-2xl font-medium">{value}%</span>
    </div>
    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-full bg-black rounded-full"
      />
    </div>
  </div>
);

const ModelCard = ({ name, description, features }: { name: string; description: string; features: string[] }) => (
  <div className="glass-card-interactive p-8 rounded-[2.5rem] border-gray-100/50 flex flex-col h-full bg-white">
    <h3 className="text-2xl font-medium mb-4">{name}</h3>
    <p className="text-gray-500 font-light mb-8 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {features.map((feature, i) => (
        <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {feature}
        </span>
      ))}
    </div>
  </div>
);

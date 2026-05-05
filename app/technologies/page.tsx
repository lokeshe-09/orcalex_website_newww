"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Cpu, 
  ArrowRight,
  Search,
  Settings2,
  Bot,
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
            customVisual={<RAGVisual />}
          />

          {/* Fine-Tuning Section */}
          <TechSection 
            id="fine-tuning"
            badge="Optimization"
            title="Advanced LLM Fine-Tuning"
            description="We utilize a multi-pronged approach (SFT, GRPO, GSPO, and DR-GRPO) to fine-tune models for mission-critical industrial applications."
            icon={<Settings2 className="w-6 h-6" />}
            features={[
              "SFT: High-quality instruction tuning",
              "GRPO: Efficient reinforcement learning",
              "GSPO: Sequence-level importance sampling",
              "DR-GRPO: Dead-reward stability guards"
            ]}
            reversed
            insight="Our multi-method fine-tuning pipeline ensures that models remain robust and stable while achieving peak performance in specialized domains."
            customVisual={<FineTuningVisual />}
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
            customVisual={<SLMVisual />}
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
            customVisual={<SyntheticDataVisual />}
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
                <PerformanceCapsule label="Connection Speed" value={98} />
                <PerformanceCapsule label="Security Compliance" value={100} />
                <PerformanceCapsule label="Integration Versatility" value={92} />
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
  customVisual?: React.ReactNode;
}

const FineTuningVisual = () => (
  <div className="relative w-full aspect-square flex items-center justify-center p-4">
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white">
            <Settings2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium">GRPO training</h4>
            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Active Session</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Epoch 4/5</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Dynamic Loss Curve Simulation */}
        <div className="h-32 w-full flex items-end gap-1 px-2">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${Math.max(10, 100 - (i * 4) - Math.random() * 20)}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 1 }}
              className="flex-1 bg-black/80 rounded-t-sm"
            />
          ))}
        </div>
        <div className="flex justify-between text-[8px] font-mono text-gray-300 uppercase tracking-widest">
          <span>Start</span>
          <span>Loss Gradient</span>
          <span>Convergence</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="text-[10px] text-gray-400 mb-1">Learning Rate</div>
            <div className="text-xl font-medium tracking-tighter">1.2e-5</div>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="text-[10px] text-gray-400 mb-1">Batch Size</div>
            <div className="text-xl font-medium tracking-tighter">256</div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const SyntheticDataVisual = () => (
  <div className="relative w-full aspect-square flex items-center justify-center p-4">
    <div className="relative w-80 h-80">
      {/* Central Agent */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute inset-0 m-auto w-32 h-32 rounded-[2rem] bg-black text-white flex items-center justify-center shadow-2xl z-10"
      >
        <Bot className="w-12 h-12" />
      </motion.div>

      {/* Orbiting Agents */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            x: [
              Math.cos(i * Math.PI / 2) * 140, 
              Math.cos((i * Math.PI / 2) + Math.PI / 4) * 140,
              Math.cos(i * Math.PI / 2) * 140
            ],
            y: [
              Math.sin(i * Math.PI / 2) * 140, 
              Math.sin((i * Math.PI / 2) + Math.PI / 4) * 140,
              Math.sin(i * Math.PI / 2) * 140
            ],
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 5 + i, ease: "linear" }}
          className="absolute inset-0 m-auto w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center text-black"
        >
          <Cpu className="w-6 h-6" />
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-10">
        <circle cx="160" cy="160" r="140" fill="none" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
      
      {/* Data Packets Animation */}
      <motion.div 
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0.5, 1, 1.5],
          rotate: 360
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute inset-0 m-auto w-64 h-64 border border-blue-500/20 rounded-full"
      />
    </div>
  </div>
);

const SLMVisual = () => (
  <div className="relative w-full aspect-square flex items-center justify-center p-4">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-72 h-[500px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden p-6"
    >
      <div className="w-20 h-6 bg-gray-900 rounded-full mx-auto mb-10" />
      
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="text-white text-xs font-medium">Edge Inference Active</div>
        </div>

        <div className="glass-premium p-4 rounded-2xl bg-white/10 border-white/10 text-[10px] text-white/70 font-mono leading-relaxed">
          <span className="text-blue-400">Loading</span> OrcaLex-3B...<br/>
          <span className="text-green-400">Success</span> Quantization: 4-bit<br/>
          <span className="text-yellow-400">Memory</span> usage: 1.8GB / 4.0GB
        </div>

        <div className="pt-4 space-y-3">
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              transition={{ duration: 2 }}
              className="h-full bg-blue-500"
            />
          </div>
          <div className="flex justify-between text-[8px] text-white/30 uppercase tracking-widest font-bold">
            <span>Latency</span>
            <span>24ms</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 right-6">
          <div className="w-full py-3 rounded-xl bg-white text-black text-[10px] font-bold uppercase tracking-widest text-center shadow-lg">
            Running Localy
          </div>
        </div>
      </div>
    </motion.div>
    
    {/* Background Glow */}
    <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10" />
  </div>
);

const TechSection = ({ id, badge, title, description, icon, features, insight, reversed, customVisual }: TechSectionProps) => (
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
        <p className="text-sm text-gray-600 italic">&quot;{insight}&quot;</p>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative w-full ${reversed ? 'lg:order-1' : ''}`}
    >
      {customVisual ? customVisual : (
        <div className="glass-premium p-1 aspect-square rounded-[4rem] relative overflow-hidden group">
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
        </div>
      )}
    </motion.div>
  </section>
);

const RAGVisual = () => (
  <div className="relative w-full aspect-square flex items-center justify-center p-4">
    {/* IDE Window */}
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-[#0d1117] rounded-3xl shadow-2xl border border-gray-800 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#161b22] px-6 py-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">orcalex_rag.py</div>
        <div className="w-12" />
      </div>
      
      {/* Code Body */}
      <div className="p-8 font-mono text-sm leading-relaxed overflow-x-hidden">
        <div className="flex gap-6">
          <div className="text-gray-600 font-light select-none text-right w-6">
            1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
          </div>
          <div className="flex-1">
            <span className="text-[#ff7b72]">async def</span> <span className="text-[#d2a8ff]">retrieve_context</span>(query: <span className="text-[#ff7b72]">str</span>):<br/>
            &nbsp;&nbsp;<span className="text-gray-500"># Cross-referenced extraction</span><br/>
            &nbsp;&nbsp;context = <span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">VectorStore</span>.search(<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;query, <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;k=<span className="text-[#79c0ff]">5</span>, <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;strategy=<span className="text-[#a5d6ff]">&quot;hybrid&quot;</span><br/>
            &nbsp;&nbsp;)<br/>
            <br/>
            &nbsp;&nbsp;<span className="text-gray-500"># Re-rank by semantic relevance</span><br/>
            &nbsp;&nbsp;best_matches = <span className="text-[#79c0ff]">Reranker</span>.process(context)<br/>
            <br/>
            &nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> best_matches
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating Status Cards */}
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute top-20 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20"
    >
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
        <Search className="w-5 h-5" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Vector DB</div>
        <div className="text-sm font-medium text-black">Context Retrieved</div>
      </div>
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2" />
    </motion.div>

    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-20 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20"
    >
      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
        <Check className="w-5 h-5" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Agentic Check</div>
        <div className="text-sm font-medium text-black">Source Validated</div>
      </div>
    </motion.div>
  </div>
);

const PerformanceCapsule = ({ label, value }: { label: string; value: number }) => (
  <div className="group">
    <div className="flex justify-between items-end mb-4">
      <span className="text-sm font-mono uppercase tracking-widest text-gray-400">{label}</span>
      <span className="text-3xl font-medium tracking-tighter">{value}%</span>
    </div>
    <div className="relative h-4 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute inset-y-0 left-0 bg-black rounded-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </motion.div>
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

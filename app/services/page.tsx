"use client";

import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Check, 
  Printer, 
  Download, 
  GraduationCap, 
  Factory, 
  Search, 
  Settings2, 
  Bot, 
  BarChart,
  ArrowRight
} from 'lucide-react';

const ServiceFeatureRow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 text-gray-500 font-light">
    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-black" />
    </div>
    <span>{text}</span>
  </div>
);

export default function Services() {
  const contentRef = useRef<HTMLDivElement>(null);

  const printFlyer = () => {
    if (!contentRef.current) return;
    window.print();
  };

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div ref={contentRef} className="container mx-auto px-6 max-w-7xl">
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
              Our AI Services
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-12 leading-[0.95]">
              Comprehensive AI <br /> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Transform your enterprise with cutting-edge technology tailored to your specific needs. From RAG to Agentic systems.
            </p>

            <div className="flex items-center justify-center gap-4 no-print">
              <button
                onClick={printFlyer}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-100 hover:bg-gray-50 transition-all font-medium text-sm"
              >
                <Printer className="w-4 h-4" />
                Print Flyer
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <div className="space-y-32">
          {/* EdTech */}
          <ServiceSection 
            id="edtech"
            badge="Education Technology"
            title="AI-Powered EdTech Solutions"
            description="Transform education with building blocks for personalized learning. Our platforms adapt to each student's pace and style."
            icon={<GraduationCap className="w-8 h-8" />}
            features={[
              "Personalized learning paths",
              "Real-time progress tracking",
              "Automated assessment systems",
              "Interactive content generation"
            ]}
            metrics={[
              { label: "Engagement", value: "+40%" },
              { label: "Learning Outcomes", value: "+25%" }
            ]}
          />

          {/* Manufacturing */}
          <ServiceSection 
            id="manufacturing"
            badge="Smart Manufacturing"
            title="Manufacturing AI Operations"
            description="Optimize production lines and predictive maintenance with real-time AI computer vision and sensor analysis."
            icon={<Factory className="w-8 h-8" />}
            features={[
              "Predictive maintenance",
              "Quality control automation",
              "Production optimization",
              "Supply chain analytics"
            ]}
            metrics={[
              { label: "Downtime Reduction", value: "-30%" },
              { label: "QA Efficiency", value: "+25%" }
            ]}
            reversed
          />

          {/* RAG */}
          <ServiceSection 
            id="rag"
            badge="Enterprise Knowledge"
            title="Advanced RAG Implementation"
            description="Connect your enterprise data to LLMs securely. Our hybrid RAG systems provide high accuracy with source attribution."
            icon={<Search className="w-8 h-8" />}
            features={[
              "Custom knowledge base ETL",
              "Hybrid vector search",
              "Real-time sync pipelines",
              "Document source citations"
            ]}
            metrics={[
              { label: "Retrieval Accuracy", value: "+35%" },
              { label: "Hallucination Drop", value: "-60%" }
            ]}
          />

          {/* Fine-Tuning */}
          <ServiceSection 
            id="fine-tuning"
            badge="Model Customization"
            title="LLM Fine-Tuning (GRPO)"
            description="Proprietary Gradient-Regularized Policy Optimization allows high performance with minimal training data points."
            icon={<Settings2 className="w-8 h-8" />}
            features={[
              "GRPO-based tuning",
              "Minimal data requirements",
              "Domain-specific expertise",
              "Quantized deployment"
            ]}
            metrics={[
              { label: "Data Efficiency", value: "10x" },
              { label: "Cost Savings", value: "40%" }
            ]}
            reversed
          />

          {/* Agentic */}
          <ServiceSection 
            id="agentic"
            badge="Workflow Automation"
            title="Agentic AI Systems"
            description="Build autonomous agent swarms that coordinate to solve complex multi-step business logic and workflows."
            icon={<Bot className="w-8 h-8" />}
            features={[
              "CrewAI coordination",
              "Synthetic data generation",
              "Workflow reasoning",
              "Autonomous tools usage"
            ]}
            metrics={[
              { label: "Task Automation", value: "85%" },
              { label: "Process Speed", value: "5x" }
            ]}
          />
        </div>

        {/* Global CTA */}
        <section className="mt-40 no-print">
          <div className="bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent)]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Ready to transform?</h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Schedule a priority consultation with our AI architects to map out your implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-2xl"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/demo"
                  className="bg-transparent text-white border border-white/20 px-10 py-5 rounded-full font-medium hover:bg-white/10 transition-all"
                >
                  Try Demo Platforms
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

interface ServiceSectionProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  metrics: { label: string; value: string }[];
  reversed?: boolean;
}

const ServiceSection = ({ id, badge, title, description, icon, features, metrics, reversed }: ServiceSectionProps) => (
  <section id={id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, x: reversed ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={reversed ? 'lg:order-2' : ''}
    >
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
        {badge}
      </div>
      <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center text-black mb-8 border border-gray-100 shadow-sm">
        {icon}
      </div>
      <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">{title}</h2>
      <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {features.map((feature, i) => (
          <ServiceFeatureRow key={i} text={feature} />
        ))}
      </div>

      <div className="flex gap-4">
        <Link 
          href="/contact"
          className="bg-black text-white px-8 py-3.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-gray-800 transition-all"
        >
          Discuss Use Case <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`glass-premium p-10 rounded-[3rem] border-gray-100/50 shadow-sm ${reversed ? 'lg:order-1' : ''}`}
    >
      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">Observed Performance</h4>
      <div className="space-y-10">
        {metrics.map((metric, i) => (
          <div key={i} className="group">
            <div className="flex items-end justify-between mb-3">
              <span className="text-gray-600 font-light">{metric.label}</span>
              <span className="text-3xl font-medium tracking-tighter">{metric.value}</span>
            </div>
            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 + (i * 0.2) }}
                className="h-full bg-black/80 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 gap-8">
        <div className="text-center">
          <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Standard</div>
          <div className="h-1 bg-gray-100 rounded-full" />
        </div>
        <div className="text-center">
          <div className="text-black text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Orcalex</div>
          <div className="h-1 bg-black rounded-full" />
        </div>
      </div>
    </motion.div>
  </section>
);

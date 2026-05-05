"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BrainCircuit, FileText, PenTool, LayoutDashboard, ChevronRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const EdtechDemoSection = () => {
  const [activeTab, setActiveTab] = useState('question-generation');

  const tabs = [
    { id: 'question-generation', label: 'Question Gen', icon: <FileText className="w-4 h-4" /> },
    { id: 'step-solutions', label: 'Step Solutions', icon: <BrainCircuit className="w-4 h-4" /> },
    { id: 'handwriting', label: 'Handwriting AI', icon: <PenTool className="w-4 h-4" /> },
    { id: 'gap-analysis', label: 'Gap Analysis', icon: <LayoutDashboard className="w-4 h-4" /> },
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <span className="text-sm font-mono text-gray-400 uppercase tracking-widest block mb-6">Interactive Demo</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            The future of <span className="text-gray-400">intelligent learning.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            Experience our advanced AI education platform that transforms learning through automated intelligence and personalized paths.
          </p>
        </div>

        <div className="glass-premium rounded-[48px] overflow-hidden border-gray-100 shadow-2xl">
          {/* Custom App Header/Tabs */}
          <div className="bg-gray-50/50 p-4 border-b border-gray-100 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300",
                  activeTab === tab.id 
                    ? "bg-white text-black shadow-sm" 
                    : "text-gray-500 hover:text-black hover:bg-white/50"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="p-8 md:p-16 bg-white min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                {activeTab === 'question-generation' && <QuestionGenView />}
                {activeTab === 'step-solutions' && <SolutionsView />}
                {activeTab === 'handwriting' && <HandwritingView />}
                {activeTab === 'gap-analysis' && <GapAnalysisView />}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Demo Board CTA */}
          <div className="bg-black text-white p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-2">Build your own learning system</h3>
              <p className="text-gray-400 font-light">Experience the full power with a personalized live demonstration.</p>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="https://bnlknkpe.manus.space" 
                target="_blank"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all"
              >
                Try Live <Play className="w-4 h-4 fill-current" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuestionGenView = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div className="space-y-8">
      <div className="flex items-center gap-3">
         <Sparkles className="w-6 h-6 text-gray-400" />
         <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Automated Intelligence</span>
      </div>
      <h3 className="text-4xl font-medium tracking-tight">Curriculum-aligned question generation.</h3>
      <p className="text-lg text-gray-500 font-light leading-relaxed">
        Our AI platform leverages advanced RAG technology to generate high-quality questions directly from textbook content, tailoring assessments to specific learning objectives.
      </p>
      <div className="space-y-4 pt-4">
        <FeatureItem text="AI-powered generation from raw materials" />
        <FeatureItem text="Infinite variation with controlled difficulty" />
        <FeatureItem text="Saves teachers ~6 hours per week" />
      </div>
    </div>
    
    <div className="bg-gray-50/50 rounded-[32px] p-8 border border-gray-100">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-gray-400">Subject</label>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm">Mathematics (Grade 12)</div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-gray-400">Chapter</label>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm">Application of Integrals</div>
        </div>
        <div className="flex gap-4">
           <div className="flex-1 space-y-2">
             <label className="text-xs font-mono uppercase tracking-widest text-gray-400">Questions</label>
             <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm">15</div>
           </div>
           <div className="flex-1 space-y-2">
             <label className="text-xs font-mono uppercase tracking-widest text-gray-400">Level</label>
             <div className="bg-white rounded-xl p-4 border border-gray-100 text-sm">Advanced</div>
           </div>
        </div>
        <button className="w-full bg-black text-white py-4 rounded-2xl font-medium shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
          Generate Assessment
        </button>
      </div>
    </div>
  </div>
);

const SolutionsView = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      <h3 className="text-4xl font-medium tracking-tight mb-8">Guided learning through step-by-step solutions.</h3>
      <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
        Detailed methodology behind every answer, helping students understand the core concepts rather than just the final result.
      </p>
      <div className="p-8 bg-blue-50/30 rounded-3xl border border-blue-100/50">
        <div className="text-sm font-medium mb-2">Performance Insight</div>
        <p className="text-gray-500 font-light">Students show a 40% improvement in independent problem-solving using guided solutions.</p>
      </div>
    </div>
    
    <div className="space-y-4">
      <SolutionCard step="Step 1: Integration setup" content="∫(0 to 2π) sin x dx" />
      <SolutionCard step="Step 2: Fundamental Theorem" content="[-cos x](0 to 2π)" />
      <SolutionCard step="Step 3: Evaluation" content="-1 + 1 = 0" active />
    </div>
  </div>
);

const HandwritingView = () => (
  <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-12">
    <h3 className="text-4xl font-medium tracking-tight">Vision-based correction.</h3>
    <p className="text-xl text-gray-400 font-light">
      Our vision models process handwritten notation with 98% accuracy, identifying calculation errors in real-time.
    </p>
    <div className="w-full aspect-video bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-12 group cursor-pointer hover:border-black transition-colors">
       <Sparkles className="w-12 h-12 text-gray-300 mb-4 group-hover:text-black transition-colors" />
       <span className="text-sm font-medium">Upload photo of student work</span>
       <span className="text-xs text-gray-400 mt-2">Supports JPG, PNG, PDF</span>
    </div>
  </div>
);

const GapAnalysisView = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      <h3 className="text-4xl font-medium tracking-tight mb-8">Precision Gap Analysis</h3>
      <p className="text-lg font-light text-gray-500 leading-relaxed mb-12">
        Identify exactly where learning breaks down. Our AI map profiles every student to drive hyper-personalized intervention.
      </p>
      <div className="space-y-6">
         <ProgressBarSimple label="Calculus" value={85} />
         <ProgressBarSimple label="Linear Algebra" value={42} />
         <ProgressBarSimple label="Geometry" value={76} />
      </div>
    </div>
    <div className="glass-premium rounded-[40px] p-12 border-black/5 bg-gray-50/30">
       <h4 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Recommendations</h4>
       <div className="space-y-4">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer">
             <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="font-medium">Focus on Vector Subspaces</span>
             </div>
             <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-all" />
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group cursor-pointer">
             <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="font-medium">Review Matrix Inversion</span>
             </div>
             <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-all" />
          </div>
       </div>
    </div>
  </div>
);

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
    <span className="text-lg text-gray-500 font-light">{text}</span>
  </div>
);

const SolutionCard = ({ step, content, active = false }: { step: string; content: string; active?: boolean }) => (
  <div className={cn(
    "p-6 rounded-3xl border transition-all duration-500",
    active ? "bg-black text-white border-black" : "bg-white border-gray-100 text-gray-600"
  )}>
    <div className={cn("text-xs font-mono uppercase tracking-widest mb-2", active ? "text-gray-400" : "text-gray-400")}>{step}</div>
    <div className="text-xl font-medium font-mono">{content}</div>
  </div>
);

const ProgressBarSimple = ({ label, value }: { label: string; value: number }) => (
  <div className="space-y-3">
    <div className="flex justify-between text-sm">
      <span className="font-medium">{label}</span>
      <span className="text-gray-400">{value}%</span>
    </div>
    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        className="h-full bg-black"
      />
    </div>
  </div>
);

export default EdtechDemoSection;

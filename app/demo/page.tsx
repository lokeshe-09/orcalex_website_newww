"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Lightbulb, 
  FileText, 
  BarChart3, 
  Upload, 
  Camera, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

type TabId = "question-generation" | "step-solutions" | "handwriting" | "gap-analysis";

export default function Demo() {
  const [activeTab, setActiveTab] = useState<TabId>("question-generation");

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-xs font-bold uppercase tracking-widest mb-8"
          >
            Interactive Preview
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-medium tracking-tight mb-8"
          >
            Explore the <br /> Intelligence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            A sandbox environment to visualize how OrcaLex AI models transform raw data into specialized educational outcomes.
          </motion.p>
        </div>

        {/* Demo Interface */}
        <section className="mb-32">
          <div className="glass-premium rounded-[3rem] border border-gray-100 overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-100 bg-gray-50/50">
              <DemoTabButton 
                id="question-generation"
                label="Generation"
                icon={<Sparkles className="w-4 h-4" />}
                active={activeTab === "question-generation"}
                onClick={() => setActiveTab("question-generation")}
              />
              <DemoTabButton 
                id="step-solutions"
                label="Reasoning"
                icon={<Layers className="w-4 h-4" />}
                active={activeTab === "step-solutions"}
                onClick={() => setActiveTab("step-solutions")}
              />
              <DemoTabButton 
                id="handwriting"
                label="Vision AI"
                icon={<Camera className="w-4 h-4" />}
                active={activeTab === "handwriting"}
                onClick={() => setActiveTab("handwriting")}
              />
              <DemoTabButton 
                id="gap-analysis"
                label="Analytics"
                icon={<BarChart3 className="w-4 h-4" />}
                active={activeTab === "gap-analysis"}
                onClick={() => setActiveTab("gap-analysis")}
              />
            </div>
            
            <div className="p-8 md:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {activeTab === "question-generation" && <QuestionGenDemo />}
                  {activeTab === "step-solutions" && <StepSolutionsDemo />}
                  {activeTab === "handwriting" && <HandwritingDemo />}
                  {activeTab === "gap-analysis" && <GapAnalysisDemo />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="mb-20">
          <div className="bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Ready for full deployment?</h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Contact us to schedule a personalized walkthrough of our enterprise-grade RAG and Fine-tuning capabilities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-gray-200 transition-all hover:scale-105"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/case-studies"
                  className="bg-transparent text-white border border-white/20 px-10 py-5 rounded-full font-medium hover:bg-white/10 transition-all"
                >
                  Review Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

function DemoTabButton({ label, icon, active, onClick }: { label: string, icon: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`relative px-8 py-6 flex items-center gap-3 font-medium transition-all focus:outline-none ${
        active ? 'text-black' : 'text-gray-400 hover:text-black'
      }`}
    >
      {icon}
      {label}
      {active && (
        <motion.div 
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-1 bg-black"
        />
      )}
    </button>
  );
}

function QuestionGenDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-7 space-y-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Textbook-to-Assessment</h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Our RAG pipelines ingest standard curriculum textbooks and generate high-fidelity assessments tailored to specific cognitive levels—Bloom&apos;s Taxonomy integrated at the core.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DemoFeatureItem title="RAG Enrichment" description="Models ingest actual PDF sources to maintain factual grounding." />
          <DemoFeatureItem title="Difficulty Scaling" description="Toggle between foundational and advanced query types." />
          <DemoFeatureItem title="Curriculum Sync" description="Alignment with CBSE, IGCSE, and standard boards." />
          <DemoFeatureItem title="Latency Optimized" description="Batch generation of 100+ questions in seconds." />
        </div>
      </div>
      
      <div className="lg:col-span-5">
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Configuration</h3>
            <span className="text-[10px] bg-black text-white px-2 py-1 rounded shadow-sm">Enterprise Sandbox</span>
          </div>
          
          <div className="space-y-4">
            <DemoSelect label="Board" options={["CBSE", "IGCSE", "ICSE"]} />
            <DemoSelect label="Focus Area" options={["Mathematics - Integrals", "Physics - Mechanics", "Biology - Genetics"]} />
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cognitive Level</label>
              <div className="flex gap-2">
                {["Recall", "Apply", "Analyze"].map(level => (
                  <button key={level} className={`flex-1 py-3 text-xs rounded-xl font-medium border transition-all ${level === 'Apply' ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-gray-400 border-gray-100 hover:border-black/20'}`}>
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <button className="w-full bg-black text-white py-5 rounded-[1.5rem] font-semibold flex items-center justify-center gap-3 hover:bg-gray-900 transition-all active:scale-[0.98]">
            <Sparkles className="w-5 h-5" />
            Generate Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

function StepSolutionsDemo() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Chain-of-Reasoning Solutions</h2>
        <p className="text-lg text-gray-400 font-light leading-relaxed">
          Beyond simple answers. Our models demonstrate the &apos;how&apos; behind each problem, simulating a private tutor&apos;s logic path to identify precisely where a student might deviate.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
        <div className="mb-10 pb-10 border-b border-gray-200">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Input Query</h3>
          <p className="text-2xl font-medium tracking-tight">Evaluate the integral ∫(0 to π) sin² x dx using the double angle formula.</p>
        </div>

        <div className="space-y-8">
          <ReasoningStep 
            number="01" 
            title="Identify Formula" 
            content="Apply cos(2x) = 1 - 2sin²x to rewrite sin²x as (1 - cos(2x))/2." 
          />
          <ReasoningStep 
            number="02" 
            title="Set Integration Bounds" 
            content="Substitute the identity into the integral: ∫1/2 dx - ∫1/2 cos(2x) dx." 
          />
          <ReasoningStep 
            number="03" 
            title="Evaluate & Finalize" 
            content="[x/2 - 1/4 sin(2x)] from 0 to π. Final Result: π/2." 
            isLast
          />
        </div>
      </div>
    </div>
  );
}

function HandwritingDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Vision Correction</h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Our Multimodal Vision models digitize handwritten scripts with 98% accuracy and pinpoint localized errors in the student&apos;s step-by-step logic.
          </p>
        </div>
        
        <div className="bg-white border-2 border-dashed border-gray-100 rounded-[2.5rem] h-64 flex flex-col items-center justify-center gap-6 group hover:border-black/20 transition-all cursor-pointer">
          <div className="w-16 h-16 rounded-full glass-premium flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all">
            <Upload className="w-8 h-8" />
          </div>
          <p className="text-gray-400 font-medium">Drop handwritten worksheet here</p>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 glass-premium py-4 rounded-2xl flex items-center justify-center gap-2 font-medium hover:bg-gray-50"><Camera className="w-4 h-4" /> Capture Photo</button>
          <button className="flex-1 bg-black text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-medium hover:bg-gray-900 transition-all">Analyze Script</button>
        </div>
      </div>

      <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-white/5 opacity-50">
          <Sparkles className="w-40 h-40" />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8 relative z-10">AI Feedback Loop</h3>
        <ul className="space-y-8 relative z-10">
          <FeedbackItem 
            type="success" 
            title="Formula Detected" 
            desc="Integration by parts sequence identified correctly." 
          />
          <FeedbackItem 
            type="error" 
            title="Sign Error" 
            desc="In Step 3, the constant became negative. Check the u-sub rules." 
          />
          <FeedbackItem 
            type="info" 
            title="Optimization" 
            desc="You could have used the shortcut ∫e^ax sin(bx) formula here." 
          />
        </ul>
      </div>
    </div>
  );
}

function GapAnalysisDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Cognitive Analytics</h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            We track &apos;Unspoken Gaps&apos;—the underlying concepts a student repeatedly struggles with across different problem types.
          </p>
        </div>

        <div className="space-y-6">
          <ProgressSegment label="Algebraic Fluency" percent={88} color="black" />
          <ProgressSegment label="Trigonometric Reason" percent={42} color="gray" />
          <ProgressSegment label="Spatial Visualization" percent={65} color="black" />
          <ProgressSegment label="Procedural Speed" percent={94} color="black" />
        </div>
      </div>

      <div className="lg:col-span-7">
        <h3 className="text-lg font-medium mb-8">Adaptive Remediation Path</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <RecommendationCard 
            icon={<HelpCircle className="w-5 h-5" />}
            title="Revisit Unit 4" 
            desc="Focus on Sine/Cosine identities before proceeding to advanced Integrals." 
            priority="Critical"
          />
          <RecommendationCard 
            icon={<Zap className="w-5 h-5" />}
            title="Speed Drills" 
            desc="You have high accuracy but slow execution. Standard deviation is above 30s." 
            priority="Balanced"
          />
          <RecommendationCard 
            icon={<FileText className="w-5 h-5" />}
            title="Proof Structures" 
            desc="The AI notes gaps in how you structure your LHS = RHS proofs." 
            priority="Foundational"
          />
          <RecommendationCard 
            icon={<Sparkles className="w-5 h-5" />}
            title="Challenge Model" 
            desc="You have mastered Foundational Calculus. Unlocking Advanced Tier II." 
            priority="Mastery"
          />
        </div>
      </div>
    </div>
  );
}

// Helper Components
function DemoFeatureItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-black" />
        <p className="text-sm font-semibold tracking-tight uppercase">{title}</p>
      </div>
      <p className="text-sm text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  );
}

function DemoSelect({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</label>
      <select className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-black/5 appearance-none">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function ReasoningStep({ number, title, content, isLast }: { number: string, title: string, content: string, isLast?: boolean }) {
  return (
    <div className="flex gap-8 group">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl glass-premium flex items-center justify-center text-sm font-bold border border-gray-200 group-hover:bg-black group-hover:text-white transition-all">
          {number}
        </div>
        {!isLast && <div className="w-px flex-1 bg-gray-200 my-4" />}
      </div>
      <div className="pb-12 space-y-2">
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="text-gray-400 font-light leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function FeedbackItem({ type, title, desc }: { type: 'success' | 'error' | 'info', title: string, desc: string }) {
  const Icon = type === 'success' ? CheckCircle2 : type === 'error' ? AlertCircle : Lightbulb;
  return (
    <li className="flex gap-6 group">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${type === 'success' ? 'bg-green-500/10 text-green-500' : type === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500 font-light leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

function ProgressSegment({ label, percent, color }: { label: string, percent: number, color: 'black' | 'gray' }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
        <span>{label}</span>
        <span className={color === 'black' ? 'text-black' : 'text-gray-400'}>{percent}%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          className={`h-full ${color === 'black' ? 'bg-black' : 'bg-gray-400'}`}
        />
      </div>
    </div>
  );
}

function RecommendationCard({ title, desc, priority, icon }: { title: string, desc: string, priority: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-8 space-y-4 hover:shadow-xl transition-all group">
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
        {icon}
      </div>
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="text-sm text-gray-400 font-light leading-relaxed">{desc}</p>
      <div className="pt-4 flex items-center justify-between">
        <span className={`text-[10px] font-bold uppercase tracking-widest ${priority === 'Critical' ? 'text-red-500' : 'text-gray-400'}`}>{priority}</span>
        <ArrowRight className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

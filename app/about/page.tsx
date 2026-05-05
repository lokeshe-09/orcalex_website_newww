"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Target, Users, Zap, Shield, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            About OrcaLex Technologies
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-12 leading-[0.95]">
            Building the next-gen AI <br /> development platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of AI with innovative solutions for education and enterprise. We are building for the agentic-first era.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Our Mission</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
              At OrcaLex Technologies, our mission is to democratize access to advanced AI capabilities, making cutting-edge technology accessible to businesses and educational institutions of all sizes.
            </p>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Through our innovative approaches to RAG implementation, fine-tuning, and agentic systems, we are building AI solutions that are not just powerful, but also practical, ethical, and aligned with human values.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ValueCard 
              icon={<Target className="w-6 h-6" />}
              title="Innovation"
              description="Pushing boundaries with GRPO-based fine-tuning and minimal data points."
            />
            <ValueCard 
              icon={<Users className="w-6 h-6" />}
              title="Collaboration"
              description="Working closely with clients to deliver tailored AI solutions that work."
            />
            <ValueCard 
              icon={<Zap className="w-6 h-6" />}
              title="Excellence"
              description="Highest quality standards that create measurable value for your business."
            />
            <ValueCard 
              icon={<Shield className="w-6 h-6" />}
              title="Responsibility"
              description="Zero-trust security and ethical AI development at our core."
            />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-gray-50/50 py-32 mb-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-24"
          >
            Our Journey
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gray-200 hidden md:block" />

            <div className="space-y-24">
              <TimelineItem 
                year="2020" 
                title="Foundation" 
                description="OrcaLex Technologies was founded with a vision to make advanced AI accessible."
                side="left"
              />
              <TimelineItem 
                year="2021" 
                title="First EdTech Solution" 
                description="Launched our first AI-powered education platform for high school mathematics."
                side="right"
              />
              <TimelineItem 
                year="2023" 
                title="Fine-Tuning Innovation" 
                description="Pioneered advanced fine-tuning methodologies and efficient data pipelines."
                side="left"
              />
              <TimelineItem 
                year="2025" 
                title="US Market & Agentic Era" 
                description="Entered US market with advanced Agentic AI and Multimodal SLMs."
                side="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-40">
        <div className="glass-premium rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/image.png" 
                alt="Dr. Praveen Jambholkar" 
                fill 
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-6 block">CEO Spotlight</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Dr. Praveen Jambholkar</h2>
              <p className="text-xl text-gray-500 mb-8 font-light">Founder & CEO, OrcaLex Technologies</p>
              
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>
                  Dr Praveen Jambholkar is a visionary leader with over 30 years of extensive experience spanning multiple high-tech domains, including AI, robotics, defence technology, and education.
                </p>
                <p>
                  Holding a Ph.D. in AI-based Control Systems, Dr. Jambholkar has been at the forefront of technological innovation, developing groundbreaking solutions in generative AI, multimodal systems, and advanced engineering applications.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-medium mb-2">30+</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-2xl font-medium mb-2">Gold</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Innovation Awards</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20">Our Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamCard name="Dr. Praveen Jambholkar" role="Founder & CEO" />
          <TeamCard name="Venkata Nikhil" role="AI Developer" />
          <TeamCard name="Ganesh Gowtham" role="AI Developer" />
          <TeamCard name="Aditya Jambholkar" role="AI Researcher" />
          <TeamCard name="Preeti Kolhe" role="Head of Client Success" />
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Join the AI revolution</h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Experience the power of agentic AI with OrcaLex. Build your next-gen platform today.
            </p>
            <button className="bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto shadow-2xl">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-premium p-8 rounded-3xl border-gray-100/50 glass-card-interactive"
  >
    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-black mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-500 font-light leading-relaxed">{description}</p>
  </motion.div>
);

const TimelineItem = ({ year, title, description, side }: { year: string; title: string; description: string; side: 'left' | 'right' }) => (
  <motion.div 
    initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col md:flex-row items-center gap-8 ${side === 'right' ? 'md:flex-row-reverse' : ''}`}
  >
    <div className={`w-full md:w-1/2 ${side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
      <span className="text-2xl font-bold font-mono tracking-tighter text-gray-300 mb-2 block">{year}</span>
      <h3 className="text-2xl font-medium tracking-tight mb-3">{title}</h3>
      <p className="text-gray-500 font-light leading-relaxed">{description}</p>
    </div>
    <div className="w-4 h-4 rounded-full bg-black relative z-10 hidden md:block">
      <div className="absolute inset-0 rounded-full bg-black animate-ping opacity-20" />
    </div>
    <div className="w-full md:w-1/2" />
  </motion.div>
);

const TeamCard = ({ name, role }: { name: string; role: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-premium p-8 rounded-3xl border-gray-100/50 glass-card-interactive text-center"
  >
    <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-2xl font-medium text-gray-400 mx-auto mb-6 border border-gray-100">
      {name.split(' ').map(n => n[0]).join('')}
    </div>
    <h3 className="text-xl font-medium mb-1 tracking-tight">{name}</h3>
    <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">{role}</p>
  </motion.div>
);


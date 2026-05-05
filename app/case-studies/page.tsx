"use client";

import React from "react";
import Link from "next/link";
import { motion } from 'motion/react';
import CaseStudy from "./CaseStudy";

export default function CaseStudies() {
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
              Impact Review
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-12 leading-[0.95]">
              Real World <br /> Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
              Explore how we&apos;ve helped industry leaders transform their core operations using specialized AI implementation.
            </p>
          </motion.div>
        </section>

        {/* Case Studies List */}
        <div className="space-y-24 mb-32">
          <CaseStudy
            id="edtech"
            title="EdTech Platform for CBSE Mathematics"
            category="Education"
            challenge="Improve student engagement and reduce teacher workload."
            solution="Developed an AI-powered platform generating questions, solutions, and feedback adapted to individual learning curves."
            results={[
              "30% improvement in student test scores",
              "85% reduction in teacher workload",
              "Personalized learning for 10,000+ students",
              "Real-time feedback loops implemented"
            ]}
            technologies={["RAG", "LLM Fine-Tuning", "Vision AI"]}
            testimonial={{
              quote: "Transformed how we teach mathematics across our entire institution.",
              author: "Dr. Rajesh Kumar",
              role: "Academic Director, DPS"
            }}
          />

          <CaseStudy
            id="inventory"
            title="AI-Driven Inventory Management"
            category="Manufacturing"
            challenge="Frequent stockouts and excess inventory causing significant operational drag."
            solution="Custom multimodal system using vision and predictive analytics for real-time warehouse monitoring."
            results={[
              "40% reduction in inventory costs",
              "95% forecast accuracy achieved",
              "Eliminated manual logging errors",
              "50% reduction in critical stockouts"
            ]}
            technologies={["Multimodal AI", "Computer Vision"]}
            testimonial={{
              quote: "Revolutionized our operations and bottom line in less than six months.",
              author: "Priya Sharma",
              role: "Operations Director"
            }}
          />

          <CaseStudy
            id="legal"
            title="Legal Document Analysis System"
            category="Legal Tech"
            challenge="High volume contract analysis causing massive bottlenecks for senior associates."
            solution="Specialized RAG pipeline with legal-tuned embeddings for clause extraction and risk analysis."
            results={[
              "75% faster document review cycles",
              "90%+ case research accuracy",
              "3x more cases handled per associate",
              "Consistent risk scoring across docs"
            ]}
            technologies={["RAG", "Legal Fine-Tuning"]}
            testimonial={{
              quote: "The system identifies nuances that even experienced interns sometimes miss.",
              author: "Aditya Mehta",
              role: "Managing Partner"
            }}
          />

          <CaseStudy
            id="healthcare"
            title="Healthcare Analytics Platform"
            category="Healthcare"
            challenge="Need to optimize patient care paths and hospital resource allocation dynamically."
            solution="GRPO-based reasoning platform with predictive support for clinical decision workflows."
            results={[
              "22% reduction in average stay duration",
              "15% improvement in outcome metrics",
              "35% faster clinical documentation",
              "Dynamic resource shifting automated"
            ]}
            technologies={["RAG", "GRPO", "Predictive AI"]}
            testimonial={{
              quote: "Improved our quality of care significantly while reducing overhead.",
              author: "Dr. Ananya Patel",
              role: "Chief Medical Officer"
            }}
          />
        </div>

        {/* Global CTA */}
        <section className="mt-40">
          <div className="bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent)]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Ready to evolve?</h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Join our roster of successful enterprises and start your AI transformation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/services"
                  className="bg-transparent text-white border border-white/20 px-10 py-5 rounded-full font-medium hover:bg-white/10 transition-all"
                >
                  Browse Capabilities
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

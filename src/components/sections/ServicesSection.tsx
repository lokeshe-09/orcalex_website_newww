"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Best AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Discover our comprehensive suite of AI services and solutions designed to transform your business. From advanced AI platforms to custom AI solutions, we deliver cutting-edge technology tailored to your specific needs.
            </p>
          </div>
          <Link 
            href="/services"
            className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            imageSrc="/images/edtech.webp"
            title="AI-Powered EdTech Solutions"
            description="Transform education with our advanced AI platform featuring RAG-based question generation and intelligent assessment systems."
            features={[
              "Advanced RAG implementation",
              "AI question generation",
              "Answer analysis",
              "Learning paths"
            ]}
            link="/services#edtech"
          />
          
          <ServiceCard 
            imageSrc="/images/multi.webp"
            title="AI Manufacturing Solutions"
            description="Optimize manufacturing with AI-powered inventory control, compliance systems, and process optimization."
            features={[
              "Multimodal AI for ETL",
              "Process optimization",
              "Compliance monitoring",
              "Quality control"
            ]}
            link="/services#manufacturing"
          />
          
          <ServiceCard 
            imageSrc="/images/finetuning.webp"
            title="LLM Fine-Tuning"
            description="Custom language models fine-tuned for your specific domain and use cases using advanced GRPO methods."
            features={[
              "GRPO-based tuning",
              "Low-data optimization",
              "Domain-specific",
              "Rapid deployment"
            ]}
            link="/services#fine-tuning"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ imageSrc, title, description, features, link }: { imageSrc: string; title: string; description: string; features: string[]; link: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group glass-premium rounded-3xl p-8 flex flex-col h-full glass-card-interactive border-gray-100/50"
    >
      <div className="relative h-48 w-full mb-8 overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>
      
      <h3 className="text-2xl font-medium mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-500 font-light mb-8 flex-grow leading-relaxed">{description}</p>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center">
              <Check className="w-3 h-3 text-black" />
            </div>
            {feature}
          </div>
        ))}
      </div>
      
      <Link 
        href={link} 
        className="mt-auto px-6 py-3 rounded-full border border-gray-100 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 text-center"
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default ServicesSection;

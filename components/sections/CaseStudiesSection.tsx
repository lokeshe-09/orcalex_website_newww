'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Fintech Revolution",
      description: "Implementing agentic workflows for automated treasury management.",
      category: "Finance",
      image: "https://picsum.photos/seed/fintech/800/600"
    },
    {
      title: "Smart Logistics",
      description: "Real-time supply chain optimization using decentralized intelligence.",
      category: "Logistics",
      image: "https://picsum.photos/seed/logistics/800/600"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Case Studies</h2>
            <p className="text-lg text-gray-500 max-w-xl">
              Real-world implementations of OrcaLex intelligence.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-sm font-medium border-b border-black pb-1 uppercase tracking-wider"
          >
            View all insights <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-2 flex items-center justify-between group-hover:text-blue-600 transition-colors">
                {item.title}
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

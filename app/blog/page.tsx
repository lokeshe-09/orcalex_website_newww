"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Agentic AI: The Future of Autonomous Systems",
    description: "Discover how Agentic AI is revolutionizing autonomous systems and why AI without agency is like bringing a knife to a gun fight. Learn about the latest advancements in AI technology.",
    image: "/blog/1740802037671.jpeg",
    slug: "Agentic-AI",
    date: "Feb 18, 2025",
    category: "AI Technology"
  },
  {
    id: 2,
    title: "NVIDIA AI Summit: Shaping the Future of AI Development",
    description: "Explore the groundbreaking innovations and future of AI development from the NVIDIA AI Summit. Learn about cutting-edge AI solutions and platforms.",
    image: "/blog/nvidia.jpeg",
    slug: "NVIDIA-AI-Summit",
    date: "Dec 19, 2024",
    category: "AI Development"
  },
  {
    id: 3,
    title: "SuperAI Singapore: Leading the AI Innovation Revolution",
    description: "Dive into the world of AI innovation at SuperAI Singapore. Discover how this hub is transforming the landscape of artificial intelligence and machine learning.",
    image: "/blog/superai.jpeg",
    slug: "SuperAI-Singapore",
    date: "Aug 20, 2024",
    category: "AI Innovation"
  }
];

export default function BlogPage() {
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
            Insights & Intel
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-medium tracking-tight mb-8"
          >
            AI Intelligence <br /> Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Deep dives into Agentic systems, RAG optimization, and the future of educational technology.
          </motion.p>
        </div>

        {/* Featured Post (Optional, but let's just do a grid for now with premium cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="glass-premium rounded-[2.5rem] overflow-hidden h-full flex flex-col border border-gray-100/50 hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-6 left-6">
                      <span className="glass-premium px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-black transition-colors leading-snug">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-400 font-light leading-relaxed mb-8 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm font-semibold tracking-tight">Read Article</span>
                      <div className="w-10 h-10 rounded-full glass-premium flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Stay Ahead of AI</h2>
            <p className="text-lg text-gray-400 font-light mb-12 leading-relaxed">
              Get our monthly analysis on model performance, RAG architecture updates, and EdTech innovation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-5 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button className="bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-gray-200 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

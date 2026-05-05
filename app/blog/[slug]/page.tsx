"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Share2, Bookmark } from 'lucide-react';
import { useParams } from 'next/navigation';

const blogPosts = [
    {
        id: 1,
        title: "Agentic AI",
        description: "AI without Agentic, its like bringing a knife to a gun fight",
        content: `Creating an Agentic application is not the challenging part. There are many frameworks to do that, or you can rapidly make your own customized framework based on python classes. Do they RAG individually for having different personalities. This is required for truly constructive brainstorming within agents, do they orchastrate and iterate towards more optimized goals - thats where they act as thought amplifiers in an Al app. Then the LLMs (or SLMs) they go back to, ideally they should have the power of 'Reflection' and should be capable of advanced planning. The multiple round trips to LLMs have to be super fast.

One simply cannot use endpoints (APIs) of publicly hosted models. That would be too slow (and expensive) for anything other than toys apps. The infrastructure behind the Agentic framework is the real deal. Do you have your own LLMs optimized for speed, groundtruths, security, data safety, costing - various elements of LLMOps, in place. Well I will cover that in another micro post.

As an aside, in this age of Al, true value addition is in adding 'Innovation', which comes from a combination of deep domain knowledge and Al tech.

The source of such innovation can come from various things. My recent small pilgrimage to various places in India, culminating to our maha kumbh participation was one such booster - I can definitely think more holistically, and with equanimity and humility.`,
        image: "/blog/1740802037671.jpeg",
        slug: "Agentic-AI",
        date: "Feb 18, 2025",
        category: "AI Technology"
    },
    {
        id: 2,
        title: "NVIDIA AI Summit",
        description: "Fine-Tuning the Future of AI",
        content: `The NVIDIA AI Summit was a pivotal event, offering a deep dive into the latest advancements in artificial intelligence. Designed for developers, researchers, and businesses, the summit focused on fine-tuning AI strategies, exploring cutting-edge innovations, and showcasing real-world applications of AI across industries.

With insightful keynotes from industry leaders, hands-on workshops, and discussions on topics like AI acceleration, deep learning, edge computing, and generative AI, the event provided a roadmap for organizations looking to refine and scale their AI solutions.

Whether you’re an AI enthusiast, a developer, or a business leader, the summit was a must-attend event for pivoting your AI journey toward efficiency, scalability, and groundbreaking innovation.`,
        image: "/blog/nvidia.jpeg",
        slug: "NVIDIA-AI-Summit",
        date: "Dec 19, 2024",
        category: "AI Development"
    },
    {
        id: 3,
        title: "SuperAI Singapore",
        description: "A Hub for AI & Generative AI Innovation",
        content: `SuperAI Singapore was a remarkable conference that brought together the brightest minds in AI and Generative AI. It served as a dynamic platform for brainstorming, knowledge sharing, and networking with top researchers, developers, and industry leaders shaping the future of artificial intelligence.

The event covered groundbreaking advancements in large language models, AI ethics, multimodal AI, and real-world applications across industries. With thought-provoking discussions, hands-on sessions, and keynotes from pioneers in the field, SuperAI Singapore provided deep insights into the evolving AI landscape.

For anyone passionate about AI and its transformative impact, this conference was a goldmine of ideas, innovation, and collaboration. 🚀`,
        image: "/blog/superai.jpeg",
        slug: "SuperAI-Singapore",
        date: "Aug 20, 2024",
        category: "AI Innovation"
    }
];

export default function BlogPost() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <main className="min-h-screen pt-32 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-6">Article not found</h1>
                    <Link href="/blog" className="text-black font-medium hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Return to Intelligence
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-32 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Intelligence Feed
                    </Link>
                </motion.div>

                {/* Article Header */}
                <header className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 text-xs font-mono text-gray-400 mb-8"
                    >
                        <span className="glass-premium px-3 py-1 rounded-full text-black font-bold uppercase tracking-widest">{post.category}</span>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-medium tracking-tight mb-8 leading-tight"
                    >
                        {post.title}
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed"
                    >
                        {post.description}
                    </motion.p>
                </header>

                {/* Featured Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative h-[30rem] md:h-[40rem] w-full rounded-[3rem] overflow-hidden mb-20 grayscale border border-gray-100 shadow-2xl"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/5" />
                </motion.div>

                {/* Article Content */}
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky Sidebar */}
                    <aside className="lg:w-16 shrink-0 h-fit lg:block hidden sticky top-32">
                        <div className="flex flex-col gap-6">
                            <button className="w-12 h-12 rounded-full glass-premium flex items-center justify-center hover:bg-black hover:text-white transition-all">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 rounded-full glass-premium flex items-center justify-center hover:bg-black hover:text-white transition-all">
                                <Bookmark className="w-5 h-5" />
                            </button>
                        </div>
                    </aside>

                    {/* Content */}
                    <motion.article 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex-grow prose prose-lg prose-invert text-gray-400 font-light"
                    >
                        <div className="space-y-12 text-gray-800 text-lg leading-[1.8] font-light">
                            {post.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="first-letter:text-5xl first-letter:font-medium first-letter:text-black first-letter:mr-3 first-letter:float-left">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.article>
                </div>

                {/* Footer Controls */}
                <footer className="mt-32 pt-12 border-t border-gray-100 flex items-center justify-between">
                     <Link href="/blog" className="flex items-center gap-2 font-medium hover:gap-3 transition-all">
                        <ArrowLeft className="w-4 h-4" /> Intelligence Feed
                     </Link>
                     <div className="flex gap-4">
                        <button className="text-gray-400 hover:text-black transition-colors"><Share2 className="w-5 h-5" /></button>
                        <button className="text-gray-400 hover:text-black transition-colors"><Bookmark className="w-5 h-5" /></button>
                     </div>
                </footer>
            </div>
        </main>
    );
}

'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[0.95]">
              Let&apos;s build the <br/><span className="text-blue-500">agentic future</span> together.
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-lg leading-relaxed">
              Whether you&apos;re looking to integrate advanced AI into your workflow or want to discuss the next frontier of intelligence, we&apos;re ready.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email us</p>
                  <p className="text-lg font-medium">hello@orcalex.tech</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Visit us</p>
                  <p className="text-lg font-medium">Hyderabad, India // Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-premium bg-white/5 rounded-[40px] p-10 md:p-14 border border-white/10">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-gray-800 py-4 px-1 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-transparent border-b border-gray-800 py-4 px-1 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help your business thrive?"
                  className="w-full bg-transparent border-b border-gray-800 py-4 px-1 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black font-medium py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
              >
                Send Inquiry <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter">
            ORCA<span className="text-blue-500">LEX</span>
          </div>
          <div className="flex gap-12 text-sm text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="text-sm text-gray-600">
            © 2026 OrcaLex Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

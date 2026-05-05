'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am OrcaLex AI. How can I help you navigate the agentic era today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I am currently in training mode, but I can tell you that OrcaLex is specializing in ${input.length > 5 ? input.slice(0, 10) : 'advanced agentic systems'} to help your business scale.`
      }]);
    }, 1000);
  };

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-sm font-mono uppercase tracking-widest text-blue-600">Enterprise AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Experience the clarity of OrcaLex.
            </h2>
            <p className="text-lg text-gray-500 font-light mb-8 leading-relaxed max-w-xl">
              Interact with our base model to understand how we process complex requests and turn them into actionable insights.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Real-time reasoning
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Adaptive learning
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-[40px] blur-3xl opacity-50 -z-10"></div>
            <div className="glass-premium rounded-[32px] border border-gray-100 shadow-2xl overflow-hidden bg-white/70 backdrop-blur-xl h-[500px] flex flex-col">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">OrcaLex Assistant v2.4</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          msg.role === 'user' ? 'bg-gray-100' : 'bg-blue-600 text-white'
                        }`}>
                          {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                          msg.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-white border border-gray-100 shadow-sm rounded-tl-none'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="p-6 border-t border-gray-100 bg-white/50">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about our agentic solutions..."
                    className="w-full bg-white border border-gray-200 rounded-full py-4 px-6 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  />
                  <button
                    onClick={handleSend}
                    className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;

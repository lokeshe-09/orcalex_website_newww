"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, MessageCircle, Database, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi there! I\'m the OrcaLex AI assistant. How can I help you explore our capabilities today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { role: 'user', content: inputValue };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages([
        ...newMessages,
        { role: 'bot', content: getBotResponse(inputValue) }
      ]);
    }, 1500);
  };

  const getBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('rag') || lowerInput.includes('retrieval')) return 'Our RAG implementation combines vector databases with advanced LLMs for context-aware responses based on your proprietary data.';
    if (lowerInput.includes('fine-tun') || lowerInput.includes('grpo')) return 'Our GRPO-based fine-tuning creates specialized models with minimal data, perfectly tailored to your enterprise logic.';
    if (lowerInput.includes('edtech') || lowerInput.includes('education')) return 'Our EdTech engine powers automated question generation and handwriting analysis with 98% accuracy.';
    return 'OrcaLex specializes in high-end AI engineering—from RAG systems to specialized LLM agents. How can we help you evolve?';
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-6">Cognitive Interface</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            Interact with <span className="text-gray-400">intelligence.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Experience the precision of our RAG-enhanced reasoning through this interactive preview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-2xl font-medium tracking-tight">Enterprise-grade reasoning for the modern web.</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Our AI assistants are built on a foundation of proprietary fine-tuning and retrieval-augmented generation.
            </p>
            
            <div className="space-y-4">
              <ChatFeature 
                icon={<MessageCircle className="w-5 h-5" />} 
                title="Customer Support" 
                desc="24/7 intelligent resolution" 
              />
              <ChatFeature 
                icon={<Database className="w-5 h-5" />} 
                title="Knowledge Hub" 
                desc="Chat with your private data" 
              />
              <ChatFeature 
                icon={<Zap className="w-5 h-5" />} 
                title="Action Agents" 
                desc="Automate complex workflows" 
              />
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-8">
            <div className="glass-premium rounded-[40px] overflow-hidden border-gray-100 shadow-2xl flex flex-col h-[600px] bg-white">
              <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">OrcaLex Neural Assistant</div>
                    <div className="text-[10px] text-green-500 font-mono flex items-center gap-1 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Online
                    </div>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-gray-300" />
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
                <AnimatePresence initial={false}>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className={cn(
                        "flex gap-4 max-w-[85%]",
                        message.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                        message.role === 'user' ? "bg-gray-100" : "bg-black"
                      )}>
                        {message.role === 'user' ? <User className="w-4 h-4 text-gray-500" /> : <Bot className="w-4 h-4 text-white" />}
                      </div>
                      <div className={cn(
                        "px-6 py-4 rounded-3xl text-sm leading-relaxed",
                        message.role === 'user' 
                          ? "bg-gray-100 text-black rounded-tr-none" 
                          : "bg-white border border-gray-100 text-gray-600 shadow-sm rounded-tl-none"
                      )}>
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 mr-auto"
                    >
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="px-6 py-4 rounded-3xl rounded-tl-none bg-gray-50 border border-gray-100 flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" />
                        <div className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-8 border-t border-gray-50">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-full pl-6 pr-16 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="absolute right-2 top-2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 disabled:bg-gray-200 disabled:scale-100 transition-all font-medium"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChatFeature = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4 group">
    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-xs text-gray-500 font-light">{desc}</div>
    </div>
  </div>
);

export default ChatbotSection;

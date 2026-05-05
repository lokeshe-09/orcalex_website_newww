"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, Globe, MapPin, Phone, ArrowRight, MessageSquare, BookOpen, ShieldCheck, Zap, Database, Briefcase, Code, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.service || !formData.message || !formData.privacy) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields and accept the privacy policy.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus({
        submitted: true,
        error: false,
        message: 'Message intercepted. Our AI agents have prioritized your inquiry for immediate review.'
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        privacy: false
      });
    } catch {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Sync failed. Please reach out directly via info@orcalex.ai'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Direct Integration
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-medium tracking-tight mb-8"
          >
            Connect with <br /> OrcaLex
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Ready to deploy specialized intelligence? Reach out to schedule a consultation with our implementation leads.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 items-start">
          {/* Left Column: Info & CTA Cards */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-medium tracking-tight mb-8">Intelligence HQ</h2>
              <ContactInfoItem icon={<Mail />} title="Global Inquiries" content="info@orcalex.ai" link="mailto:info@orcalex.ai" />
              <ContactInfoItem icon={<Globe />} title="Digital Presence" content="orcalex.ai" link="https://orcalex.ai" />
              <ContactInfoItem icon={<MapPin />} title="Primary Cluster" content="Hyderabad, India" />
              
              <div className="pt-8">
                <p className="text-sm font-bold uppercase tracking-widest text-black mb-6">Social Nodes</p>
                <div className="flex gap-4">
                  <SocialNode href="https://linkedin.com/in/dr-praveen-jambholkar" icon={<Globe />} />
                  <SocialNode href="https://twitter.com/orcalextech" icon={<Send />} />
                  <SocialNode href="https://github.com/orcalextech" icon={<Code />} />
                  <SocialNode href="tel:+918008066228" icon={<Phone />} />
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="glass-premium rounded-[2.5rem] p-10 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-4">See Implementation</h3>
                <p className="text-gray-400 font-light mb-8 leading-relaxed italic">
                  &quot;OrcaLex doesn&apos;t just build agents; they engineer outcomes. See the difference in a live walkthrough.&quot;
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-4 text-black font-semibold group-hover:gap-6 transition-all"
                >
                  Book a Live Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 p-8 text-black/5 group-hover:text-black/10 transition-colors -rotate-12">
                <BookOpen className="w-32 h-32" />
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="bg-black text-white rounded-[2.5rem] p-10"
            >
              <h3 className="text-2xl font-medium mb-4 text-white">Office Cluster</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-4">
                Orcalex Technologies, 4th Floor, Veer Chambers, Prakash Nagar, Hyderabad, Telangana 500016
              </p>
              <p className="text-gray-500 text-sm">India • GMT +5:30</p>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-14 border border-gray-100 shadow-xl"
          >
            <h2 className="text-3xl font-medium tracking-tight mb-10">Transmit Requirements</h2>

            {formStatus.message && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-6 rounded-2xl mb-10 text-sm font-medium ${formStatus.error ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-black text-white'}`}
              >
                {formStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    placeholder="E.g. Alan Turing"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black placeholder:text-gray-300 transition-all font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Corporate Email</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="you@company.com"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black placeholder:text-gray-300 transition-all font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-gray-500">Organization</label>
                  <input
                    type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black placeholder:text-gray-300 transition-all font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Focus</label>
                  <select
                    id="service" name="service" value={formData.service} onChange={handleChange} required
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black transition-all font-light appearance-none"
                  >
                    <option value="" disabled>Inquiry Type</option>
                    <option value="EdTech Solutions">EdTech Optimization</option>
                    <option value="Manufacturing AI">Factory Intelligence</option>
                    <option value="RAG Implementation">RAG Engineering</option>
                    <option value="LLM Fine-Tuning">Domain-Specific Tuning</option>
                    <option value="Agentic AI Systems">Autonomous Workflows</option>
                    <option value="AI Audits & Consulting">Strategic Consulting</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Scope Details</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required
                  placeholder="Describe your current infrastructure bottleneck..."
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-black placeholder:text-gray-300 transition-all font-light"
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="checkbox" name="privacy" checked={formData.privacy} onChange={handleChange} required
                  className="w-6 h-6 rounded-lg text-black focus:ring-black border-gray-200"
                />
                <span className="text-xs text-gray-400 font-light leading-relaxed">
                  I acknowledge that OrcaLex will process my data according to the <Link href="/privacy-policy" className="text-black font-semibold hover:underline">Privacy Policy</Link> for professional communication only.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-8 py-5 rounded-[1.5rem] font-semibold text-lg hover:bg-gray-900 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? 'Transmitting Data...' : (
                  <span className="flex items-center justify-center gap-2">
                    Send Inquiry
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section with Premium Styling */}
        <section className="pt-20 border-t border-gray-100 mb-20">
          <div className="mb-20">
            <h2 className="text-4xl font-medium tracking-tight mb-4">Strategic FAQ</h2>
            <p className="text-gray-400 font-light text-lg">Understanding the OrcaLex implementation process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FAQItem 
              icon={<Briefcase />}
              question="What vertical focus do you have?" 
              answer="While specialized in EdTech and Manufacturing, our RAG and specialized fine-tuning frameworks (SFT, GRPO, GSPO, DR-GRPO) are industry-agnostic and currently deployed across legal, finance, and logistics sectors."
            />
            <FAQItem 
              icon={<Zap />}
              question="Timelines for deployment?" 
              answer="Standard implementation spans 6-12 weeks. Specialized fine-tuning clusters and complex agentic workflows may extend to 4-6 months depending on data readiness."
            />
            <FAQItem 
              icon={<ShieldCheck />}
              question="How is security handled?" 
              answer="We maintain zero-trust architectures. All models are deployed in hardened enclaves, and we never train our base models on client-specific proprietary metadata."
            />
            <FAQItem 
              icon={<Database />}
              question="Database integration?" 
              answer="Our stack integrates natively with existing ERPs, CRMs, and proprietary data lakes. We specialize in transforming unstructured legacy data into queryable assets."
            />
            <FAQItem 
              icon={<MessageSquare />}
              question="Ongoing optimization?" 
              answer="Yes. We provide continuous drift monitoring and recalibration services to ensure your models maintain performance as real-world data distributions evolve."
            />
            <FAQItem 
              icon={<ArrowRight />}
              question="AI Audit services?" 
              answer="We offer standalone AI readiness audits to benchmark your current data infrastructure and identify high-ROI opportunities for specialized intelligence."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function ContactInfoItem({ icon, title, content, link }: { icon: React.ReactNode, title: string, content: string, link?: string }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-14 h-14 rounded-2xl glass-premium flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{title}</p>
        {link ? (
          <a href={link} className="text-lg font-medium text-black hover:text-gray-500 transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-lg font-medium text-black">{content}</p>
        )}
      </div>
    </div>
  );
}

function SocialNode({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm active:scale-90"
    >
      {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
    </a>
  );
}

function FAQItem({ question, answer, icon }: { question: string, answer: string, icon: React.ReactNode }) {
  return (
    <div className="space-y-6 group">
      <div className="text-black opacity-20 group-hover:opacity-100 transition-opacity">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
      </div>
      <h3 className="text-xl font-medium tracking-tight">{question}</h3>
      <p className="text-gray-400 font-light leading-relaxed">{answer}</p>
    </div>
  );
}

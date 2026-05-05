"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Globe, MapPin, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'Select a service'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || formData.service === 'Select a service') {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We\'ll get back to you shortly.'
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      service: 'Select a service'
    });
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <span className="text-sm font-mono text-gray-400 uppercase tracking-widest block mb-6">Contact</span>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                Let&apos;s build <br /> together.
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
                Ready to transform your business with cutting-edge AI solutions? Connect with us to explore the possibilities.
              </p>
            </div>

            <div className="space-y-8">
              <ContactInfoItem icon={<Mail className="w-5 h-5 text-gray-400" />} label="Email" value="info@orcalex.ai" href="mailto:info@orcalex.ai" />
              <ContactInfoItem icon={<Globe className="w-5 h-5 text-gray-400" />} label="Website" value="orcalex.ai" href="https://orcalex.ai" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">HQ</div>
                  <div className="text-lg font-light text-gray-600">Hyderabad, India</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[32px] bg-black text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px] group-hover:scale-150 transition-transform duration-1000"></div>
               <Calendar className="w-8 h-8 mb-6 text-gray-400" />
               <h3 className="text-2xl font-medium mb-4">Book a consultation</h3>
               <p className="text-gray-400 font-light mb-8">Experience our advanced AI platform in action with a personalized demo.</p>
               <a 
                 href="https://calendly.com/orcalex/demo" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 text-sm font-medium border-b border-white pb-1 hover:gap-3 transition-all"
               >
                 Book session <ArrowRight className="w-4 h-4" />
               </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-premium rounded-[48px] p-8 md:p-12 lg:p-16 border-gray-100/50"
            >
              <h3 className="text-2xl font-medium mb-12 flex items-center gap-3">
                Send a message
                <div className="h-px w-12 bg-gray-200"></div>
              </h3>

              {formStatus.submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-medium mb-4">Message Sent</h4>
                  <p className="text-gray-500 font-light max-w-sm mx-auto">{formStatus.message}</p>
                  <button 
                    onClick={() => setFormStatus({ ...formStatus, submitted: false })}
                    className="mt-12 text-sm font-medium border-b border-black pb-1"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField 
                      label="Full Name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <InputField 
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputField 
                      label="Company"
                      name="company"
                      placeholder="OrcaLex Inc."
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <InputField 
                      label="Phone"
                      name="phone"
                      placeholder="+91 . . ."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-mono uppercase tracking-widest text-gray-400">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black focus:outline-none transition-colors appearance-none font-light"
                      required
                    >
                      <option disabled>Select a service</option>
                      <option value="EdTech Solutions">EdTech Solutions</option>
                      <option value="Manufacturing AI">Manufacturing AI</option>
                      <option value="RAG Implementation">RAG Implementation</option>
                      <option value="LLM Fine-Tuning">LLM Fine-Tuning</option>
                      <option value="Agentic AI Systems">Agentic AI Systems</option>
                      <option value="AI Audits & Consulting">AI Audits & Consulting</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-xs font-mono uppercase tracking-widest text-gray-400">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black focus:outline-none transition-colors resize-none font-light"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-5 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-3"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    {formStatus.error && (
                      <p className="text-red-500 text-sm mt-4 text-center">{formStatus.message}</p>
                    )}
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, name, placeholder, value, onChange, type = "text", required = false }: { label: string; name: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; required?: boolean }) => (
  <div className="space-y-4">
    <label htmlFor={name} className="block text-xs font-mono uppercase tracking-widest text-gray-400">
      {label} {required && <span className="text-black">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black focus:outline-none transition-colors placeholder:text-gray-300 font-light"
      required={required}
    />
  </div>
);

const ContactInfoItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) => (
  <div className="flex items-start gap-4 group">
    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div>
      <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">{label}</div>
      <a href={href} className="text-lg font-light text-gray-600 hover:text-black transition-colors underline-offset-4 hover:underline decoration-gray-200">
        {value}
      </a>
    </div>
  </div>
);

export default ContactSection;

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Brand and Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="relative w-8 h-8">
                <Image 
                  src="/android-chrome-512x512.png" 
                  alt="OrcaLex" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-medium tracking-tight">
                OrcaLex <span className="text-gray-500 font-normal">Technologies</span>
              </span>
            </Link>
            <p className="text-lg text-gray-500 font-light mb-8 max-w-sm leading-relaxed">
              Cutting-edge AI solutions for education, manufacturing, and enterprise applications. Building the agentic-first era.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://linkedin.com/in/dr-praveen-jambholkar" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="https://twitter.com/orcalextech" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="https://github.com/orcalextech" icon={<Github className="w-5 h-5" />} />
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-12">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Navigation</h3>
              <ul className="space-y-4">
                <FooterLink href="/about" label="About Us" />
                <FooterLink href="/services" label="Our Services" />
                <FooterLink href="/technologies" label="Technologies" />
                <FooterLink href="/case-studies" label="Case Studies" />
                <FooterLink href="/contact" label="Contact Us" />
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Services</h3>
              <ul className="space-y-4">
                <FooterLink href="/services#edtech" label="EdTech Solutions" />
                <FooterLink href="/services#manufacturing" label="Manufacturing AI" />
                <FooterLink href="/services#rag" label="RAG Implementation" />
                <FooterLink href="/services#fine-tuning" label="LLM Fine-Tuning" />
                <FooterLink href="/services#agentic" label="Agentic Systems" />
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-8">Contact</h3>
              <ul className="space-y-4">
                <ContactItem icon={<Mail className="w-4 h-4" />} label="info@orcalex.ai" href="mailto:info@orcalex.ai" />
                <ContactItem icon={<Phone className="w-4 h-4" />} label="+91 80080 66228" href="tel:+918008066228" />
                <ContactItem icon={<Globe className="w-4 h-4" />} label="orcalex.ai" href="https://orcalex.ai" />
                <li className="flex items-center gap-3 text-sm text-gray-500 font-light">
                  <MapPin className="w-4 h-4" />
                  Hyderabad, India
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-mono tracking-wider uppercase">
            &copy; {new Date().getFullYear()} OrcaLex Technologies. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-widest">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-widest">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link 
      href={href} 
      className="text-sm text-gray-500 font-light hover:text-black hover:translate-x-1 transition-all inline-block"
    >
      {label}
    </Link>
  </li>
);

const ContactItem = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
  <li>
    <a 
      href={href} 
      className="flex items-center gap-3 text-sm text-gray-500 font-light hover:text-black transition-colors"
    >
      {icon}
      {label}
    </a>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;

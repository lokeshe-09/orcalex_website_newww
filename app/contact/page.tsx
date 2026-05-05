"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AnimateOnScroll from '../components/AnimateOnScroll';

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

    // Validate required fields
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
        message: 'Thank you for your message! We will get back to you within 24 hours.'
      });

      // Reset form
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
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-fade-in" delay={0}>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI solutions? Contact us today.
          </p>
        </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <AnimateOnScroll animation="animate-slide-in-left" delay={200}>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <ContactInfo
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Email"
                  content="info@orcalex.ai"
                  link="mailto:info@orcalex.ai"
                />

                <ContactInfo
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  title="Website"
                  content="orcalex.ai"
                  link="https://orcalex.ai"
                />

                <ContactInfo
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  title="Location"
                  content="Hyderabad, India"
                />
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <SocialLink
                    href="https://linkedin.com/in/dr-praveen-jambholkar"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    }
                  />

                  <SocialLink
                    href="tel:+918008066228"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M2.25 3a.75.75 0 0 1 .75-.75h3.586a.75.75 0 0 1 .53.22l2.122 2.121a.75.75 0 0 1 0 1.061L7.91 7.5a.75.75 0 0 0-.164.823 11.046 11.046 0 0 0 6.931 6.931.75.75 0 0 0 .823-.164l1.848-1.848a.75.75 0 0 1 1.061 0l2.122 2.121a.75.75 0 0 1 .22.53v3.586a.75.75 0 0 1-.75.75H18A15.75 15.75 0 0 1 2.25 6V3z" clipRule="evenodd" />
                      </svg>
                    }
                  />

                  <SocialLink
                    href="https://twitter.com/orcalextech"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    }
                  />

                  <SocialLink
                    href="https://github.com/orcalextech"
                    icon={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={400}>
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-md">
              <h2 className="text-2xl font-bold mb-4">Schedule a Demo</h2>
              <p className="mb-6">
                Want to see our AI solutions in action? Schedule a personalized demo with our team.
              </p>
              <Link
                href="/demo"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Book a Demo
              </Link>
            </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in" delay={600}>
            <div className="mt-8 bg-gray-50 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Office Location</h2>
              <div className="space-y-6">
                <OfficeLocation
                  city="Hyderabad"
                  address="Orcalex Technologies, 4th Floor, Veer Chambers, Prakash Nagar, Hyderabad, Telangana 500016"
                  country="India"
                />
              </div>
            </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="animate-slide-in-right" delay={800}>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                {formStatus.message}
              </div>
            ) : formStatus.error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
                {formStatus.message}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                  Service of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="EdTech Solutions">EdTech Solutions</option>
                  <option value="Manufacturing AI">Manufacturing AI</option>
                  <option value="RAG Implementation">RAG Implementation</option>
                  <option value="LLM Fine-Tuning">LLM Fine-Tuning</option>
                  <option value="Agentic AI Systems">Agentic AI Systems</option>
                  <option value="AI Audits & Consulting">AI Audits & Consulting</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> and consent to being contacted regarding my inquiry.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                We will get back to you within 24 hours.
              </p>
            </form>
          </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FAQ
              question="What industries do you serve?"
              answer="We serve a wide range of industries including education, manufacturing, healthcare, legal, finance, and retail. Our AI solutions are adaptable to various business contexts and can be customized for your specific industry needs."
            />

            <FAQ
              question="How long does implementation typically take?"
              answer="Implementation timelines vary based on the complexity of the solution and your specific requirements. Simple implementations can be completed in 4-6 weeks, while more complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
            />

            <FAQ
              question="Do you offer ongoing support after implementation?"
              answer="Yes, we offer comprehensive support and maintenance packages for all our implementations. This includes regular updates, performance monitoring, and technical support to ensure your AI solutions continue to deliver optimal results."
            />

            <FAQ
              question="How do you handle data privacy and security?"
              answer="We take data privacy and security very seriously. All our solutions comply with relevant data protection regulations. We implement robust security measures including encryption, secure access controls, and regular security audits to protect your data."
            />

            <FAQ
              question="Can your solutions integrate with our existing systems?"
              answer="Yes, our AI solutions are designed to integrate seamlessly with your existing systems and workflows. We have experience integrating with various CRMs, ERPs, LMSs, and custom software solutions."
            />

            <FAQ
              question="What makes OrcaLex different from other AI companies?"
              answer="Our proprietary approaches to RAG implementation and GRPO-based fine-tuning deliver superior results with less data and computational resources. We focus on practical, business-oriented AI solutions that deliver measurable ROI rather than theoretical applications."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content, link }) => {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-600 hover:text-blue-600 transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
    >
      {icon}
    </a>
  );
};

interface OfficeLocationProps {
  city: string;
  address: string;
  country: string;
  comingSoon?: boolean;
}

const OfficeLocation = ({ city, address, country, comingSoon = false }: OfficeLocationProps) => {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <div>
        <div className="flex items-center">
          <h3 className="font-semibold text-lg">{city}</h3>
          {comingSoon && (
            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
              Coming Soon
            </span>
          )}
        </div>
        <p className="text-gray-600">{address}</p>
        <p className="text-gray-600">{country}</p>
      </div>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

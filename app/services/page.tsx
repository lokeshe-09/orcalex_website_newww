"use client"

import React from 'react'
import { useRef } from "react"
import Link from "next/link"
import AnimateOnScroll from '../components/AnimateOnScroll'

const ServiceFeature = ({ text }: { text: string }) => (
  <div className="flex items-start">
    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>{text}</span>
  </div>
);

export default function Services() {
  const contentRef = useRef(null)

  const printFlyer = () => {
    const printContent = contentRef.current
    const originalContents = document.body.innerHTML

    // Create a print-specific stylesheet
    const printStyles = `
      @media print {
        body * {
          visibility: hidden;
        }
        #printSection, #printSection * {
          visibility: visible;
        }
        #printSection {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {
          display: none !important;
        }
        @page {
          size: A4;
          margin: 0.5cm;
        }
        h1 {
          font-size: 24pt;
        }
        h2 {
          font-size: 18pt;
        }
        p, li {
          font-size: 12pt;
        }
      }
    `

    // Create style element
    const style = document.createElement("style")
    style.innerHTML = printStyles
    document.head.appendChild(style)

    // Set print content
    document.body.innerHTML = `<div id="printSection">${printContent.innerHTML}</div>`

    // Print
    window.print()

    // Restore original content
    document.body.innerHTML = originalContents
    document.head.removeChild(style)

    // Re-attach event handlers
    window.location.reload()
  }

  return (
    <section className="py-20 bg-white">
      <div ref={contentRef} className="container mx-auto px-4">
        <AnimateOnScroll animation="animate-fade-in" delay={0}>
        <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
          </div>
        </AnimateOnScroll>

          <div className="flex flex-wrap justify-center gap-4 no-print">
            <button
              onClick={printFlyer}
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                ></path>
              </svg>
              Print Services Flyer
            </button>
            <a
              href="/flyers/services-flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Download PDF Flyer
            </a>
        </div>

        {/* EdTech Solutions */}
        <div id="edtech" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="animate-slide-in-left" delay={200}>
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                Education Technology
              </div>
              <h2 className="text-2xl font-bold mb-4">EdTech Solutions</h2>
              <p className="text-gray-600 mb-6">
                  Transform education with AI-powered learning platforms that adapt to each student&apos;s needs. Our solutions enhance engagement, personalize learning paths, and provide real-time feedback.
              </p>

              <div className="space-y-4 mb-6">
                  <ServiceFeature text="Personalized learning paths" />
                  <ServiceFeature text="Real-time progress tracking" />
                  <ServiceFeature text="Automated assessment and feedback" />
                  <ServiceFeature text="Interactive learning experiences" />
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Key Benefits</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Our EdTech solutions have shown a 40% improvement in student engagement and a 25% increase in learning outcomes across various educational institutions.
                  </p>
              </div>

                <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                    className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                    Request Demo
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-all duration-300"
                  >
                    Contact Us
              </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={400}>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg">Implementation Results</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Student Engagement</span>
                        <span className="text-sm font-medium text-blue-600">+40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full animate-progress" style={{ width: '40%' }}></div>
                      </div>
            </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Learning Outcomes</span>
                        <span className="text-sm font-medium text-blue-600">+25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full animate-progress" style={{ width: '25%' }}></div>
                      </div>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Teacher Efficiency</span>
                        <span className="text-sm font-medium text-blue-600">+35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full animate-progress" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Manufacturing AI */}
        <div id="manufacturing" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="animate-fade-in-up" delay={600}>
              <div className="order-2 lg:order-1 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg">Key Metrics</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>30% reduction in production downtime</span>
                    </li>
                    <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>25% improvement in quality control</span>
                    </li>
                    <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>20% increase in production efficiency</span>
                    </li>
                    <li className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                      <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>15% reduction in operational costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-in-right" delay={800}>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                Manufacturing
              </div>
              <h2 className="text-2xl font-bold mb-4">Manufacturing AI</h2>
              <p className="text-gray-600 mb-6">
                  Optimize your manufacturing processes with AI-powered solutions that enhance quality control, predict maintenance needs, and streamline production workflows.
              </p>

              <div className="space-y-4 mb-6">
                  <ServiceFeature text="Predictive maintenance systems" />
                  <ServiceFeature text="Quality control automation" />
                  <ServiceFeature text="Production optimization" />
                  <ServiceFeature text="Supply chain analytics" />
                </div>

                <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Implementation Process</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Our manufacturing AI solutions are implemented in phases, starting with data collection and analysis, followed by model development and deployment, ensuring minimal disruption to your operations.
                  </p>
              </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/demo" 
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Request Demo
                  </Link>
              <Link
                href="/contact"
                    className="inline-block bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition-all duration-300"
              >
                    Contact Us
              </Link>
            </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* RAG Implementation */}
        <div id="rag" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="animate-slide-in-left" delay={1000}>
            <div>
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium mb-4">
                Enterprise AI
              </div>
              <h2 className="text-2xl font-bold mb-4">RAG Implementation</h2>
              <p className="text-gray-600 mb-6">
                  Enhance your AI applications with our Retrieval-Augmented Generation (RAG) implementation, combining the power of large language models with your enterprise knowledge base.
              </p>

              <div className="space-y-4 mb-6">
                  <ServiceFeature text="Custom knowledge base integration" />
                  <ServiceFeature text="Hybrid search capabilities" />
                  <ServiceFeature text="Real-time data updates" />
                  <ServiceFeature text="Source attribution and citations" />
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Technical Advantages</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Our RAG implementation achieves 35% better retrieval accuracy compared to standard vector search methods, ensuring more relevant and accurate responses.
                  </p>
              </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/demo" 
                    className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Request Demo
                  </Link>
              <Link
                href="/contact"
                    className="inline-block bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-full font-medium hover:bg-emerald-50 transition-all duration-300"
              >
                    Contact Us
              </Link>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="animate-fade-in-up" delay={1200}>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg">Performance Metrics</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Retrieval Accuracy</span>
                        <span className="text-sm font-medium text-emerald-600">+35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full animate-progress" style={{ width: '35%' }}></div>
                      </div>
            </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Response Time</span>
                        <span className="text-sm font-medium text-emerald-600">-40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full animate-progress" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Knowledge Coverage</span>
                        <span className="text-sm font-medium text-emerald-600">+50%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full animate-progress" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* LLM Fine-Tuning */}
        <div id="fine-tuning" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">GRPO Fine-Tuning Benefits</h3>
              <p className="text-gray-600 mb-6">
                Our proprietary Gradient-Regularized Policy Optimization (GRPO) approach delivers superior results with
                significantly fewer examples than traditional fine-tuning methods.
              </p>

              <div className="space-y-4">
                <ResultItem stat="70%" text="Fewer training examples required" />
                <ResultItem stat="30%" text="Faster convergence during training" />
                <ResultItem stat="25%" text="Improvement in task-specific performance" />
                <ResultItem stat="60%" text="Reduction in computational requirements" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium mb-4">
                Model Customization
              </div>
              <h2 className="text-2xl font-bold mb-4">LLM Fine-Tuning</h2>
              <p className="text-gray-600 mb-6">
                Our advanced fine-tuning services create custom language models tailored to your specific domain and use
                cases. Using our proprietary GRPO approach, we can achieve superior results with minimal data points,
                making fine-tuning accessible even with limited examples.
              </p>

              <div className="space-y-4 mb-6">
                <FeatureItem
                  title="GRPO-based Fine-Tuning"
                  description="Our proprietary approach requiring significantly fewer examples."
                />
                <FeatureItem
                  title="Minimal Data Requirements"
                  description="Effective fine-tuning with as few as 50-100 examples."
                />
                <FeatureItem
                  title="Domain-Specific Models"
                  description="Models that understand your industry terminology and context."
                />
                <FeatureItem
                  title="Deployment Optimization"
                  description="Efficient model deployment with reduced computational requirements."
                />
              </div>

              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Discuss Fine-Tuning
              </Link>
            </div>
          </div>
        </div>

        {/* Agentic AI Systems */}
        <div id="agentic" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                Automation
              </div>
              <h2 className="text-2xl font-bold mb-4">Agentic AI Systems</h2>
              <p className="text-gray-600 mb-6">
                Our agentic AI systems create collaborative networks of specialized AI agents that work together to
                automate complex workflows and handle sophisticated tasks across domains. These systems can reason,
                plan, and execute multi-step processes with minimal human intervention.
              </p>

              <div className="space-y-4 mb-6">
                <FeatureItem
                  title="CrewAI Implementation"
                  description="Coordinated teams of specialized AI agents working together on complex tasks."
                />
                <FeatureItem
                  title="Synthetic Data Generation"
                  description="Creating high-quality training data that simulates real-world scenarios."
                />
                <FeatureItem
                  title="Workflow Automation"
                  description="End-to-end automation of complex business processes and decision-making."
                />
                <FeatureItem
                  title="Multi-Agent Coordination"
                  description="Sophisticated systems that combine different AI capabilities for comprehensive solutions."
                />
              </div>

              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore Agentic Systems
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Agentic System Applications</h3>
              <p className="text-gray-600 mb-6">
                Our agentic AI systems can be applied across various domains to automate complex workflows and enhance
                decision-making processes.
              </p>

              <div className="space-y-4">
                <ApplicationItem
                  title="Customer Service Automation"
                  description="Coordinated agents handling complex customer inquiries across multiple systems."
                />
                <ApplicationItem
                  title="Research & Analysis"
                  description="Agents that gather, analyze, and synthesize information from diverse sources."
                />
                <ApplicationItem
                  title="Content Creation"
                  description="Multi-agent systems for creating, editing, and optimizing various content types."
                />
                <ApplicationItem
                  title="Process Optimization"
                  description="Agents that identify inefficiencies and implement improvements across workflows."
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Audits & Consulting */}
        <div id="consulting">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Our Consulting Process</h3>
              <div className="space-y-6">
                <ProcessStep
                  number="01"
                  title="Assessment"
                  description="We evaluate your current systems, processes, and AI readiness to identify opportunities."
                />
                <ProcessStep
                  number="02"
                  title="Strategy Development"
                  description="We create a tailored AI implementation roadmap aligned with your business goals."
                />
                <ProcessStep
                  number="03"
                  title="Proof of Concept"
                  description="We develop a small-scale implementation to demonstrate value and feasibility."
                />
                <ProcessStep
                  number="04"
                  title="Implementation"
                  description="We execute the full solution with careful attention to integration and training."
                />
                <ProcessStep
                  number="05"
                  title="Optimization"
                  description="We continuously monitor and refine the solution to maximize ROI."
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
                Strategic Services
              </div>
              <h2 className="text-2xl font-bold mb-4">AI Audits & Consulting</h2>
              <p className="text-gray-600 mb-6">
                Our expert consulting services help you navigate the complex AI landscape and develop a strategic
                approach to implementation. We provide comprehensive assessments, actionable recommendations, and
                implementation support to ensure your AI initiatives deliver maximum value.
              </p>

              <div className="space-y-4 mb-6">
                <FeatureItem
                  title="Technology Assessment"
                  description="Evaluation of your current systems and AI readiness with gap analysis."
                />
                <FeatureItem
                  title="Implementation Roadmap"
                  description="Strategic planning for AI adoption aligned with your business objectives."
                />
                <FeatureItem
                  title="ROI Analysis"
                  description="Detailed cost-benefit analysis and expected return on AI investments."
                />
                <FeatureItem
                  title="Proof of Concept Development"
                  description="Small-scale implementations to demonstrate value before full deployment."
                />
              </div>

              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-rose-600 to-red-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg no-print">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our AI solutions can address your specific challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/demo"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureItem = ({ title, description }) => {
  return (
    <div className="flex items-start">
      <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

const ResultItem = ({ stat, text }) => {
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
        {stat}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

const ApplicationItem = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

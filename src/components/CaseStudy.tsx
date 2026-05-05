"use client";

import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

interface CaseStudyProps {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial: TestimonialProps;
  gradient: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  category,
  challenge,
  solution,
  results,
  technologies,
  testimonial,
  gradient
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className={`bg-gradient-to-r ${gradient} p-6 text-white`}>
        <span className="text-sm uppercase tracking-wider opacity-80">{category}</span>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">{title}</h3>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
            <p className="text-gray-700 mb-6">{challenge}</p>
            
            <h4 className="font-semibold text-lg mb-2">Our Solution</h4>
            <p className="text-gray-700">{solution}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-2">Results</h4>
            <ul className="space-y-2 mb-6">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {testimonial && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100 italic">
            <p className="text-gray-700 mb-2">&quot;{testimonial.quote}&quot;</p>
            <p className="text-sm text-gray-600 font-medium">
              — {testimonial.author}, {testimonial.role}
            </p>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default CaseStudy;

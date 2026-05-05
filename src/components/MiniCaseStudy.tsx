"use client";

import React from 'react';

interface MiniCaseStudyProps {
  id: string;
  title: string;
  category: string;
  description?: string;
  gradient?: string;
}

const MiniCaseStudy: React.FC<MiniCaseStudyProps> = ({
  title,
  category,
  description,
  gradient = "from-blue-500 to-purple-500"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-5">
        <span className="text-xs text-gray-500 uppercase">{category}</span>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        )}
        
        
      </div>
    </div>
  );
};

export default MiniCaseStudy;

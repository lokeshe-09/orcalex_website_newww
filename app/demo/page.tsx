import React from 'react';
import Link from 'next/link';

export default function Demo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Experience Our EdTech Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try our AI-powered education platform that transforms learning experiences
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="flex flex-wrap border-b">
            <TabButton 
              id="question-generation"
              label="Question Generation"
              active={true}
            />
            <TabButton 
              id="step-solutions"
              label="Step-by-Step Solutions"
              active={false}
            />
            <TabButton 
              id="handwriting"
              label="Handwriting Correction"
              active={false}
            />
            <TabButton 
              id="gap-analysis"
              label="Knowledge Gap Analysis"
              active={false}
            />
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">AI-Powered Question Generation</h2>
                <p className="text-gray-600 mb-6">
                  Our platform uses advanced RAG technology to generate high-quality questions directly from textbook content. Teachers can quickly create assessments tailored to specific learning objectives.
                </p>
                
                <div className="space-y-4 mb-6">
                  <FeatureItem text="Generate questions from any textbook or learning material" />
                  <FeatureItem text="Customize difficulty levels and question types" />
                  <FeatureItem text="Create assessments aligned with curriculum standards" />
                  <FeatureItem text="Save hours of manual question creation time" />
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Did you know?</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Our question generation system can create over 1,000 unique, curriculum-aligned questions in under 5 minutes, saving teachers an average of 6 hours per week.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="font-semibold">Question Generation Demo</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Live Preview</span>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Chapter
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Chapter 8: Application of Integrals</option>
                    <option>Chapter 9: Differential Equations</option>
                    <option>Chapter 10: Vector Algebra</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Difficulty Level
                  </label>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm">Easy</button>
                    <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">Medium</button>
                    <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">Hard</button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Number of Questions
                  </label>
                  <input 
                    type="number" 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="5"
                    min="1"
                    max="20"
                  />
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Generate Questions
                </button>
                
                <div className="mt-4 text-center text-xs text-gray-500">
                  This is a demo interface. For full functionality, please request a live demo.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Sample Generated Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <QuestionCard 
              number="1"
              question="Find the area of the region bounded by the curve y = sin x, the x-axis, and the ordinates x = 0 and x = π."
              difficulty="Easy"
              topic="Application of Integrals"
            />
            
            <QuestionCard 
              number="2"
              question="Evaluate the integral ∫(0 to π/2) sin³x cos²x dx."
              difficulty="Medium"
              topic="Application of Integrals"
            />
            
            <QuestionCard 
              number="3"
              question="Find the area of the region enclosed by the ellipse (x²/a²) + (y²/b²) = 1."
              difficulty="Medium"
              topic="Application of Integrals"
            />
            
            <QuestionCard 
              number="4"
              question="Find the volume of the solid generated by revolving the region bounded by y = x², y = 0, and x = 2 about the y-axis."
              difficulty="Hard"
              topic="Application of Integrals"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Step-by-Step Solution Example</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Question:</h3>
              <p className="text-gray-700">Find the area bounded by the curve y = sin x between x = 0 and x = π.</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Solution:</h3>
              <div className="space-y-4">
                <SolutionStep 
                  number="1"
                  title="Set up the integral"
                  content={
                    <div>
                      <p>The area under the curve y = sin x from x = 0 to x = π is given by:</p>
                      <p className="font-mono mt-1">A = ∫(0 to π) sin x dx</p>
                    </div>
                  }
                />
                
                <SolutionStep 
                  number="2"
                  title="Evaluate the integral"
                  content={
                    <div>
                      <p>We know that the integral of sin x is -cos x + C</p>
                      <p className="font-mono mt-1">A = [-cos x](0 to π)</p>
                      <p className="font-mono mt-1">A = -cos(π) - (-cos(0))</p>
                      <p className="font-mono mt-1">A = -cos(π) + cos(0)</p>
                    </div>
                  }
                />
                
                <SolutionStep 
                  number="3"
                  title="Substitute the values"
                  content={
                    <div>
                      <p>We know that cos(π) = -1 and cos(0) = 1</p>
                      <p className="font-mono mt-1">A = -(-1) + 1 = 1 + 1 = 2</p>
                    </div>
                  }
                />
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold">Answer:</div>
                  <p>The area bounded by the curve y = sin x between x = 0 and x = π is 2 square units.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Concepts Used:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ConceptCard 
                  title="Definite Integrals"
                  description="A definite integral represents the area under a curve between two points."
                />
                
                <ConceptCard 
                  title="Integration of Trigonometric Functions"
                  description="The integral of sin x is -cos x + C."
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Handwriting Correction</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Upload Handwritten Solution</h3>
                <div className="w-full h-48 bg-gray-100 rounded-lg border border-dashed border-gray-300 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mt-1 text-sm text-gray-500">
                      Upload handwritten solution or take a photo
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-2 mb-6">
                  <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Take Photo
                  </button>
                  <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    Upload File
                  </button>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Analyze Solution
                </button>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Sample Analysis</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 mb-1">Original Work:</div>
                    <div className="bg-white p-3 rounded border border-gray-300 text-gray-600 text-sm">
                      <p>∫(0 to π) sin x dx</p>
                      <p>= [-cos x](0 to π)</p>
                      <p>= -cos(π) - (-cos(0))</p>
                      <p>= -(-1) - (-1)</p>
                      <p>= 1 - (-1) = 1 + 1 = 2</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 mb-1">Analysis:</div>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Correct setup of the integral</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Correct antiderivative of sin x</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Correct application of the fundamental theorem of calculus</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-red-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-sm">Error in substitution: cos(0) = 1, not -1</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">Final answer is correct despite the error</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-700 mb-1">Feedback:</div>
                    <p className="text-sm text-gray-600">
                      Your solution is mostly correct! You made a small error when substituting cos(0), which should be 1, not -1. However, you still arrived at the correct final answer of 2. Make sure to double-check your substitutions in the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Knowledge Gap Analysis</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Student Performance Overview</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">Integration Techniques</span>
                      <span className="text-green-600 text-sm">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">Applications of Integration</span>
                      <span className="text-yellow-600 text-sm">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">Differential Equations</span>
                      <span className="text-red-600 text-sm">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">Vector Algebra</span>
                      <span className="text-green-600 text-sm">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">3D Geometry</span>
                      <span className="text-yellow-600 text-sm">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Personalized Learning Recommendations</h3>
                <div className="space-y-4">
                  <RecommendationCard 
                    title="Review Differential Equations"
                    description="Focus on first-order differential equations and their applications."
                    priority="High"
                  />
                  
                  <RecommendationCard 
                    title="Practice Applications of Integration"
                    description="Work on problems related to area between curves and volumes of revolution."
                    priority="Medium"
                  />
                  
                  <RecommendationCard 
                    title="Strengthen 3D Geometry Concepts"
                    description="Review the equations of planes and lines in 3D space."
                    priority="Medium"
                  />
                  
                  <RecommendationCard 
                    title="Advanced Integration Techniques"
                    description="Explore more complex integration methods to build on your strong foundation."
                    priority="Low"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Educational Experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us to schedule a full demonstration and discuss how our EdTech platform can be customized for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
              <Link 
                href="/services#edtech" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TabButtonProps {
  id: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}


const TabButton = ({ label, active }: TabButtonProps) => {
  return (
    <button 
      className={`px-4 py-3 font-medium text-sm md:text-base transition-colors ${
        active 
          ? 'border-b-2 border-blue-600 text-blue-600' 
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {label}
    </button>
  );
};

const FeatureItem = ({ text }) => {
  return (
    <div className="flex items-start">
      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>{text}</span>
    </div>
  );
};

const QuestionCard = ({ number, question, difficulty, topic }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex items-start">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">
          {number}
        </div>
        <div>
          <p className="text-gray-800 mb-3">{question}</p>
          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              difficulty === 'Easy' 
                ? 'bg-green-100 text-green-800' 
                : difficulty === 'Medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {difficulty}
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {topic}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionStep = ({ number, title, content }) => {
  return (
    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">
          {number}
        </div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="ml-8">
        {content}
      </div>
    </div>
  );
};

const ConceptCard = ({ title, description }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const RecommendationCard = ({ title, description, priority }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="flex items-start">
        <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${
          priority === 'High' 
            ? 'bg-red-500' 
            : priority === 'Medium'
            ? 'bg-yellow-500'
            : 'bg-green-500'
        }`}></div>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-600 mb-1">{description}</p>
          <div className="flex items-center">
            <span className={`text-xs font-medium ${
              priority === 'High' 
                ? 'text-red-600' 
                : priority === 'Medium'
                ? 'text-yellow-600'
                : 'text-green-600'
            }`}>
              {priority} Priority
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

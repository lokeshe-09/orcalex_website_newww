'use client';

import { useEffect, useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation: string;
  delay?: number;
  threshold?: number;
}

export default function AnimateOnScroll({ 
  children, 
  animation, 
  delay = 0,
  threshold = 0.1 
}: AnimateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animation);
              entry.target.classList.add('opacity-100');
            }, delay);
          }
        });
      },
      { threshold }
    );

    const current = elementRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div 
      ref={elementRef} 
      className={`opacity-0 transition-opacity duration-1000`}
    >
      {children}
    </div>
  );
} 
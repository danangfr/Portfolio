'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    
    // Calculate scroll progress (0 to 1)
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.pageYOffset;
    setScrollProgress(Math.min(scrolled / scrollTotal, 1));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
              type: 'spring',
              stiffness: 400,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0, 
            y: 20, 
            scale: 0.9,
            transition: { duration: 0.2 }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center justify-center w-12 h-12 rounded-full focus:outline-none group"
            aria-label="Kembali ke atas"
          >
            {/* Background with blur */}
            <motion.div 
              className="absolute inset-0 rounded-full backdrop-blur-md"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}
              animate={{
                background: isHovered 
                  ? 'rgba(59, 130, 246, 0.9)' 
                  : 'rgba(255, 255, 255, 0.8)'
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Progress circle */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(219, 234, 254, 0.5)"
                strokeWidth="4"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * scrollProgress)}
                initial={{ strokeDashoffset: 283 }}
                animate={{ 
                  strokeDashoffset: 283 - (283 * scrollProgress),
                  opacity: isHovered ? 1 : 0.7
                }}
                transition={{ duration: 0.3 }}
              />
            </svg>
            
            {/* Icon */}
            <motion.div
              className="relative z-10 text-gray-700"
              animate={{
                color: isHovered ? 'white' : '#3b82f6',
                y: isHovered ? -2 : 0
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpIcon className="w-5 h-5" />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div 
              className="absolute -top-10 px-3 py-1.5 text-xs font-medium text-white bg-gray-800 rounded whitespace-nowrap"
              initial={{ opacity: 0, y: 5 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 5
              }}
              transition={{ duration: 0.2 }}
            >
              Kembali ke Atas
              <div className="absolute bottom-0 left-1/2 w-2 h-2 -mb-1 -ml-1 transform rotate-45 bg-gray-800"></div>
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

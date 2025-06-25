'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDownTrayIcon, CodeBracketIcon, ServerIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const profileImage = '/images/Danang Fatkhur Razak.jpg';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Handle mouse move for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20
    });
  };
  

  
  // Tech stack items with icons
  const techStack = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Next.js', color: 'text-gray-100' },
    { name: 'TypeScript', color: 'text-blue-300' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'Tailwind CSS', color: 'text-cyan-300' },
  ];

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200 dark:border-blue-500/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-300">👋 Halo, Saya</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-300 dark:via-white dark:to-cyan-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Danang Fatkhur Razak 
            </motion.h1>
            
            <motion.div 
              className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 dark:border-blue-500/20 mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-300 dark:to-cyan-300">
                Full Stack Developer & Project Manager
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
            Saya Danang Fatkhur Razak, seorang mahasiswa semester 6 dari Institut Teknologi Bacharuddin Jusuf Habibie. Program Studi yang saya tekuni yaitu Sistem Informasi, dan mengambil konsentrasi Enterprise. Saya memiliki minat yang tinggi di bidang teknologi khususnya pada cakupan AI, Web/App, dan Manajerial suatu proyek. Oleh karena itu saya berambisi menjadi salah satu orang yang berpengaruh di bidang teknologi.
            </motion.p>
            
            {/* Tech stack */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1.5 text-sm rounded-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 backdrop-blur-sm ${tech.color} font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                >
                  {tech.name}
                </span>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden font-medium text-white rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
              >
                <span className="relative flex items-center">
                  <CodeBracketIcon className="w-5 h-5 mr-2 inline-block group-hover:animate-pulse" />
                  Hubungi Saya
                </span>
              </a>
              <a
                href="/images/Portfolio Danang Fatkhur Razak.jpg"
                download="Portfolio Danang Fatkhur Razak"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden font-medium text-white rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-black-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/30"
              >
                <span className="relative flex items-center">
                  <DocumentIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Unduh Portfolio
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="relative w-128 h-128 mx-auto">
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}

              >
                <div className="relative w-full h-full">
                  <img
                    src={profileImage}
                    alt="Danang"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Scroll ke bawah</span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-300 flex justify-center p-1"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            >
              <motion.div className="w-1 h-2 bg-gray-500 dark:bg-gray-300 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

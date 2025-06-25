'use client';

import { motion, useInView } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, ServerStackIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useRef, useState, useEffect } from 'react';

const skills = {
  frontend: [
    { name: 'HTML5', level: 95, icon: '💎' },
    { name: 'CSS3', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 90, icon: '🚀' },
    { name: 'TypeScript', level: 85, icon: '🔷' },
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 88, icon: '⏭️' },
    { name: 'Tailwind CSS', level: 95, icon: '🎯' },
  ],
  backend: [
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'PHP', level: 90, icon: '🐘' },
    { name: 'Laravel', level: 88, icon: '🔶' },
    { name: 'MySQL', level: 85, icon: '🗃️' },
    { name: 'Git', level: 92, icon: '🔄' },
  ],
  tools: [
    { name: 'VS Code', level: 98, icon: '💻' },
    { name: 'Figma', level: 88, icon: '🎨' },
    { name: 'WordPress', level: 92, icon: '✍️' },
    { name: 'Power BI', level: 85, icon: '📊' },
    { name: 'Filmora', level: 88, icon: '🎬' },
    { name: 'Canva', level: 90, icon: '🎨' },
    { name: 'XAMPP/Laragon', level: 90, icon: '🚀' },
  ],
  softSkills: [
    { name: 'Leadership', icon: '👑', level: 90 },
    { name: 'Project Management', icon: '📋', level: 88 },
    { name: 'Problem Solving', icon: '🧩', level: 95 },
    { name: 'Public Speaking', icon: '🎤', level: 98 },
    { name: 'Teamwork', icon: '🤝', level: 92 },
    { name: 'Adaptability', icon: '🔄', level: 90 },
    { name: 'Time Management', icon: '⏱️', level: 93 },
    { name: 'Critical Thinking', icon: '💡', level: 94 },
  ],
};

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
  index: number;
  delay?: number;
}

const SkillBar = ({ name, level, icon, index, delay = 0, showProgress = true }: SkillBarProps & { showProgress?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate color based on level
  const getColorClass = (level: number) => {
    if (level >= 90) return 'from-emerald-500 to-teal-400';
    if (level >= 80) return 'from-blue-500 to-cyan-400';
    if (level >= 70) return 'from-indigo-500 to-blue-400';
    return 'from-purple-500 to-indigo-400';
  };

  return (
    <div 
      ref={ref} 
      className="group relative mb-4 md:mb-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center">
          {icon && (
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2.5 text-sm bg-white dark:bg-gray-700 rounded-md shadow-sm">
              {icon}
            </span>
          )}
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {name}
          </span>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-all duration-300 ${
          level >= 90 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
          level >= 80 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
        }`}>
          {level}%
        </span>
      </div>
      {showProgress && (
        <div className="w-full bg-gray-100 dark:bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${getColorClass(level)} relative`}
            initial={{ width: 0 }}
            animate={{ 
              width: isInView ? `${level}%` : 0,
              transition: { 
                duration: 1.2, 
                delay: 0.1 + (index * 0.03) + delay,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
          >
            <div className={`absolute right-0 top-0 h-full w-0.5 bg-white/70 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const SkillCategory = ({ 
  title, 
  icon: Icon, 
  children, 
  delay = 0,
  className = '',
  isGrid = false
}: { 
  title: string; 
  icon: React.ComponentType<{ className?: string }>; 
  children: React.ReactNode;
  delay?: number;
  className?: string;
  isGrid?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay,
          ease: [0.16, 1, 0.3, 1] 
        } 
      } : { opacity: 0, y: 20 }}
      className={`relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100/60 dark:border-gray-700/60 
      transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-blue-100/80 dark:hover:border-blue-900/30 overflow-hidden ${className}`}
    >
      {/* Animated border bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 1, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      
      <div className="flex items-center mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      
      <div className={`${isGrid ? 'grid grid-cols-2 gap-3' : 'space-y-4'}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="relative pt-16 pb-8 md:pt-20 md:pb-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-5 animate-blob animation-delay-4000"></div>
      </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span 
        className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <SparklesIcon className="w-3.5 h-3.5 mr-1.5" />
        KEAHLIAN SAYA
      </motion.span>
      
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Kemampuan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Teknis</span> & Keterampilan
      </motion.h2>
      
      <motion.p 
        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Berikut adalah keterampilan teknis dan profesional yang saya kuasai.
      </motion.p>
    </motion.div>

    {/* Skills Grid */}
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {/* Left Column */}
      <div className="space-y-6 lg:space-y-8">
        <SkillCategory 
          title="Pengembangan Frontend" 
          icon={CodeBracketIcon}
          delay={0.1}
        >
          {skills.frontend.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              level={skill.level}
              icon={skill.icon}
              index={index}
            />
          ))}
        </SkillCategory>

        <SkillCategory 
          title="Pengembangan Backend" 
          icon={ServerStackIcon}
          delay={0.2}
        >
          {skills.backend.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              level={skill.level}
              icon={skill.icon}
              index={index}
            />
          ))}
        </SkillCategory>
      </div>

      {/* Right Column */}
      <div className="space-y-6 lg:space-y-8">
        <SkillCategory 
          title="Alat & Teknologi" 
          icon={CpuChipIcon}
          delay={0.3}
        >
          {skills.tools.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              level={skill.level}
              icon={skill.icon}
              index={index}
            />
          ))}
        </SkillCategory>

        <SkillCategory 
          title="Soft Skill" 
          icon={UserGroupIcon}
          delay={0.4}
          isGrid={true}
        >
          {skills.softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.4 + (index * 0.05),
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              <div className="relative flex items-center p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-100/60 dark:border-gray-700/60 
                transition-all duration-300 hover:shadow-sm hover:border-blue-100/80 dark:hover:border-blue-900/30">
                <span className="flex items-center justify-center w-8 h-8 mr-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 text-sm">
                  {skill.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                    {skill.name}
                  </h4>
                  <div className="w-full bg-gray-100 dark:bg-gray-700/50 rounded-full h-1.5 mt-1.5 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        skill.level >= 90 ? 'from-emerald-500 to-teal-400' :
                        skill.level >= 80 ? 'from-blue-500 to-cyan-400' :
                        'from-indigo-500 to-blue-400'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.5 + (index * 0.03),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    />
                      </div>
                    </div>
                    <span className={`ml-3 text-xs font-semibold px-2 py-0.5 rounded-full ${
                      skill.level >= 90 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                      skill.level >= 80 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </SkillCategory>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

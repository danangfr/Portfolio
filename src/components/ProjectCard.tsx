'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Komponen untuk menampilkan kartu proyek dalam bentuk grid
 * @param {Project} project - Data proyek yang akan ditampilkan
 * @param {number} index - Indeks untuk animasi bertahap
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        href={`/projects/${encodeURIComponent(project.id)}`} 
        className="flex flex-col h-full"
        aria-label={`View details of ${project.title}`}
      >
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            className="w-full h-full bg-gray-200 dark:bg-gray-700"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6`}>
            <motion.div 
              className="text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-xs font-medium bg-blue-600/30 text-blue-100 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-200 rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Project Info */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
              {project.shortDescription}
            </p>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
            <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              Lihat Detail
              <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

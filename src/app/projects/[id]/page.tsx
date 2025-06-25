import { notFound } from 'next/navigation';
import { projects } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Set revalidation time (in seconds)
export const revalidate = 3600; // Revalidate at most every hour

// Type definition for project
interface ProjectProps {
  params: { id: string };
}

// Client component for the project page content
function ProjectContent({ project }: { project: any }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <Link 
                href="/#projects" 
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Kembali ke Daftar Proyek
              </Link>
              
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <CodeBracketIcon className="h-4 w-4 mr-2" />
                    Lihat Kode
                  </a>
                )}
                
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Lihat Demo
                  </a>
                )}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tentang Proyek</h2>
              <div className="space-y-6">
                {project.details?.map((detail: string, index: number) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
              
              {project.features && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Fitur Utama</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {project.technologies && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Teknologi yang Digunakan</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Tertarik dengan proyek saya?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Saya selalu terbuka untuk peluang baru dan kolaborasi yang menarik.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Server component that handles data fetching and passes props to client component
export default function ProjectPage({ params }: ProjectProps) {
  // Find the project with the matching ID
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}

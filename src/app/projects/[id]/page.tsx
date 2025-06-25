import { notFound } from 'next/navigation';
import { projects } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline';

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Set revalidation time (in seconds)
export const revalidate = 3600; // Revalidate at most every hour

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  // Find the project with the matching ID
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-50 dark:bg-gray-800 pt-24 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Kembali ke Daftar Proyek
            </Link>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {project.shortDescription}
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  <CodeBracketIcon className="h-5 w-5 mr-2" />
                  Lihat Kode
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <div className="sticky top-8 space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Detail Proyek</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Klien</p>
                    <p className="text-gray-900 dark:text-white">{project.client || 'Proyek Pribadi'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Tahun</p>
                    <p className="text-gray-900 dark:text-white">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Peran</p>
                    <p className="text-gray-900 dark:text-white">{project.role}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 lg:pl-8">
            <div className="prose dark:prose-invert max-w-none">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={630}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tentang Proyek</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {project.description}
              </p>
              
              {project.challenge && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tantangan</h3>
                  <p className="text-gray-700 dark:text-gray-300">{project.challenge}</p>
                </div>
              )}
              
              {project.solution && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Solusi</h3>
                  <p className="text-gray-700 dark:text-gray-300">{project.solution}</p>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Fitur Utama</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.results && project.results.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Hasil</h3>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2" />
                    Lihat Kode Sumber
                  </a>
                )}
                
                <Link 
                  href="/projects" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-1" />
                  Kembali ke Daftar Proyek
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

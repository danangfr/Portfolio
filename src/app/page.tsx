'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          
          // Update URL without adding to history
          if (history.pushState) {
            history.pushState(null, '', targetId);
          } else {
            location.hash = targetId;
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section id="home">
        <Hero />
      </section>
      
      <section id="about" className="py-16 md:py-24">
        <About />
      </section>
      
      <section id="skills" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50">
        <Skills />
      </section>
      
      <section id="projects" className="py-16 md:py-24">
        <Projects />
      </section>
      
      <section id="testimonials" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50">
        <Testimonials />
      </section>
      
      <section id="contact" className="py-16 md:py-24">
        <Contact />
      </section>
      
      <ScrollToTop />
    </div>
  );
}

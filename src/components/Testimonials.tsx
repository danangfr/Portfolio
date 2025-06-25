'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  company: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Bapak Arwah Rahman',
    role: 'Kepala Bidang',
    company: 'Dinas Tenaga Kerja',
    content: 'Project ini (TSMnakerpare) telah sesuai dengan visi Wali Kota Parepare paripurna dan siap untuk diimplementasikan kepada masyarakat. Karena tampilannya yang menarik, responsif, serta fungsional yang sepenuhnya sesuai ekspektasi memberikan kenyamanan bagi masyarakat dan pegawai dinas tenaga kerja untuk mendata persebaran kategori lapisan masyarakat.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'Juni 2025'
  },
  {
    id: 2,
    name: 'Ibu anonim',
    role: 'Kepala Bidang',
    company: 'LPPM-PM ITH',
    content: 'Pengimplementasian LPPM-PM ITH yang sebelumnya digabung kini dibuat terpisah sesuai dengan fungsionalnya masing-masing. Dari segi tampilan juga sudah sesuai namun tetap minimalisir junk code untuk menghasilkan clean code yang lebih maksimal',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: 'Mei 2025'
  },
  {
    id: 3,
    name: 'Ibu Anonim',
    role: 'Kepala Apotek',
    company: 'Apotek',
    content: 'Project Naila Farmanya sudah berjalan sesuai ekspektasi, tinggal menunggu di hosting sehingga produk-produk dalam apotek ini bisa diperjual belikan kepada masyarakat',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    date: 'Maret 2024'
  },
  {
    id: 4,
    name: 'Ibu Anonim',
    role: 'Kepala Bidang OJS',
    company: 'OJS ITH',
    content: 'OJS ini sudah berfungsi secara fungsional, namun perlu sedikit modifikasi di bidang UI/UX untuk memberikan kesan khusus yang dipancarkan dari ITH',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    date: 'Juli 2024'
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive?: boolean;
  isLarge?: boolean;
}

const TestimonialCard = ({ 
  testimonial, 
  isActive = true,
  isLarge = false 
}: TestimonialCardProps) => (
  <motion.div 
    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full ${
      isActive ? 'border-l-4 border-blue-500' : 'opacity-80 scale-95'
    } ${isLarge ? 'p-8' : 'p-6'}`}
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    animate={{ 
      opacity: isActive ? 1 : 0.8, 
      y: isActive ? 0 : 10,
      scale: isActive ? 1 : 0.98
    }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
            width={56}
            height={56}
            loading="lazy"
          />
          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.84 8.84 0 01-4.555-1.24A9.5 9.5 0 012 10c0-4.418 3.582-8 8-8s8 3.582 8 8zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role} • {testimonial.company}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500">{testimonial.date}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded-full">
        <StarIcon className="h-4 w-4 text-yellow-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{testimonial.rating}.0</span>
      </div>
    </div>
    
    <div className="relative flex-grow">
      {isLarge && (
        <svg 
          className="absolute -top-2 -left-2 h-8 w-8 text-gray-200 dark:text-gray-700" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.848 8.064 3.36 0 5.856-2.048 5.856-5.28 0-3.072-2.24-5.088-5.088-5.088l-1.28.16c.768-2.304 2.304-4.16 4.544-5.44L9.352 4zm12.8 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.848 8.064 3.36 0 5.856-2.048 5.856-5.28 0-3.072-2.24-5.088-5.088-5.088l-1.28.16c.768-2.304 2.304-4.16 4.544-5.44L22.152 4z" />
        </svg>
      )}
      
      <p className={`text-gray-600 dark:text-gray-300 ${isLarge ? 'pl-10 pr-2 text-lg' : 'pl-6 pr-2 text-base'} leading-relaxed`}>
        {isLarge ? (
          <span className="relative">
            <span className="absolute -left-6 text-4xl text-gray-200 dark:text-gray-700 font-serif">"</span>
            {testimonial.content}
          </span>
        ) : (
          `"${testimonial.content}"`
        )}
      </p>
    </div>
  </motion.div>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialsLength = testimonials.length;

  // Handle window resize for responsive design
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = useCallback(() => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    
    // Show current, previous, and next testimonials on desktop
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    
    return [
      { ...testimonials[prevIndex], id: 'prev' },
      { ...testimonials[currentIndex], id: 'current' },
      { ...testimonials[nextIndex], id: 'next' }
    ];
  }, [currentIndex, isMobile]);

  // Auto-rotate main testimonial every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonialsLength);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonialsLength]);

  return (
    <section 
      id="testimonials" 
      className="relative py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDdiY2MiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAzOGw1LTUgMjIgMjIgMTAtMTAgMTIgMTItMTcgMTdIMHptMC0yLjgyOEw5LjE3MiAxOGwyMi4xNzQgMjJMMjIgMzguODI4IDAgMTUuMTcyem0zNS40MTQtMTQuOTU0TDE4IDIuMTcyIDIuODI4IDE4IDIwIDM1LjE3Mmw5LjE3Mi05LjE3MkwyMCAxNi44MjhsMTUuNDE0LTE1LjQxNHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            TESTIMONI
          </motion.span>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Klien Saya</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Jangan hanya percaya kata saya. Berikut adalah apa yang dikatakan klien tentang pengalaman bekerja sama dengan saya.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Main Testimonial (Left) - Larger Card */}
          <div className="lg:w-2/3">
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <TestimonialCard 
                    testimonial={testimonials[currentIndex]} 
                    isActive={true}
                    isLarge={true}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-blue-600 dark:bg-blue-400 w-8' 
                          : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Testimonials (Right) - Scrollable List */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm h-full">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Testimoni Lainnya</h3>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    onClick={() => goToTestimonial(index)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-blue-50 dark:bg-gray-700/50 ring-2 ring-blue-200 dark:ring-blue-500/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900 dark:text-white truncate">
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center gap-1">
                            <StarIcon className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {testimonial.rating}.0
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

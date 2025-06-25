'use client';

import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/components/ThemeProvider';

// Dynamically import components with no SSR to avoid hydration issues
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

// Load fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
        <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <title>Danang Fatkhur Razak | Portfolio</title>
        <meta name="description" content="Portfolio of Danang Fatkhur Razak - Full Stack Developer & Project Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="Danang Fatkhur Razak, Portfolio, Web Developer, Project Manager, Full Stack Developer, Next.js, React, Laravel" />
        <meta name="author" content="Danang Fatkhur Razak" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danangfr.vercel.app/" />
        <meta property="og:title" content="Danang Fatkhur Razak | Portfolio" />
        <meta property="og:description" content="Portfolio of Danang Fatkhur Razak - Full Stack Developer & Project Manager" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://danangfr.vercel.app/" />
        <meta name="twitter:title" content="Danang Fatkhur Razak | Portfolio" />
        <meta name="twitter:description" content="Portfolio of Danang Fatkhur Razak - Full Stack Developer & Project Manager" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex-grow">
            <Navbar />
            <main className="pt-20">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

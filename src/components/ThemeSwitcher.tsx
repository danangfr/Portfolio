'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  return (
    <div className="flex items-center space-x-1 p-1 rounded-full bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'bg-white text-yellow-500 shadow' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Light mode"
      >
        <SunIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-colors ${theme === 'system' ? 'bg-white text-blue-500 shadow' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="System preference"
      >
        <ComputerDesktopIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-900 text-purple-400 shadow' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Dark mode"
      >
        <MoonIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

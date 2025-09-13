'use client';
import { useEffect, useState } from 'react';

export default function DarkToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-md"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 md:top-6 md:bottom-auto md:right-6 z-[200] flex items-center gap-2 p-2 px-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] shadow-lg hover:border-[var(--accent-primary)] font-tech group"
      aria-label="Toggle Theme"
    >
      <Terminal size={14} className="text-[var(--accent-primary)]" />
      <span className="text-xs tracking-widest uppercase">
        sys.{isDark ? 'dark' : 'light'}
      </span>
      <div className="ml-2 w-2 h-2 rounded-full" style={{backgroundColor: isDark ? 'var(--accent-secondary)' : 'var(--accent-primary)'}}></div>
    </button>
  );
};


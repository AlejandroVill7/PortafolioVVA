import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-[200] flex items-center gap-2 p-2 px-4 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] shadow-lg hover:border-[var(--accent-primary)] transition-all font-tech group"
      aria-label="Toggle Theme"
    >
      <Terminal size={14} className="text-[var(--accent-primary)]" />
      <span className="text-xs tracking-widest uppercase">
        sys.{isDark ? 'dark' : 'light'}
      </span>
      <div className="ml-2 w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: isDark ? 'var(--accent-secondary)' : 'var(--accent-primary)'}}></div>
    </button>
  );
};


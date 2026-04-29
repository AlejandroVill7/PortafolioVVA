import React from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';

interface MacWindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
  id?: string;
}

export const MacWindow: React.FC<MacWindowProps> = ({ title, children, onClose, className = "", id }) => {
  return (
    <div 
      id={id}
      className={`bg-[var(--window-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden mac-window-shadow flex flex-col ${className}`}
      style={{ transition: 'background-color 0.3s ease, border-color 0.3s ease' }}
    >
      {/* Title Bar */}
      <div className="bg-[var(--window-bg)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-4 py-3 flex items-center relative select-none">
        {/* macOS Buttons */}
        <div className="flex gap-2 relative z-10">
          <button 
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center group"
          >
            <X size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
          </button>
          <button className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center group">
            <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
          </button>
          <button className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center group">
            <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
          </button>
        </div>
        
        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-[var(--text-color)]/60 font-sans tracking-wide uppercase">
            {title}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-grow overflow-auto">
        {children}
      </div>
    </div>
  );
};

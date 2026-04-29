import React from 'react';

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  path?: string;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({ title, children, className = "", path = "C:\\PORTFOLIO" }) => {
  return (
    <div className={`bg-retro-bg border-2 border-retro-text rounded-sm overflow-hidden retro-window-shadow ${className}`}>
      {/* Title Bar */}
      <div className="bg-retro-olive border-b-2 border-retro-text px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-retro-bg font-bold tracking-tight">
            {path}\{title}
          </span>
        </div>
        <div className="flex gap-1">
          <button className="w-5 h-5 border-2 border-retro-text bg-red-400 rounded-sm flex items-center justify-center hover:bg-red-500 transition-colors">
            <span className="text-[10px] text-retro-text font-bold leading-none">×</span>
          </button>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="p-6 md:p-10">
        {children}
      </div>
    </div>
  );
};

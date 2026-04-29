import React from 'react';

interface RetroDesktopIconProps {
  label: string;
  icon?: 'folder' | 'profile';
  onClick?: () => void;
}

export const RetroDesktopIcon: React.FC<RetroDesktopIconProps> = ({ label, icon = 'folder', onClick }) => {
  return (
    <div 
      className="flex flex-col items-center gap-1.5 group cursor-pointer w-20"
      onClick={onClick}
    >
      <div className="relative">
        {icon === 'folder' ? (
          <div className="w-14 h-11 bg-[var(--folder-color)] border-2 border-[var(--text-color)] rounded-[2px] relative shadow-md group-hover:scale-105 transition-all">
            <div className="absolute -top-1.5 left-0 w-6 h-1.5 bg-[var(--folder-color)] border-t-2 border-l-2 border-r-2 border-[var(--text-color)] rounded-t-[2px]"></div>
          </div>
        ) : (
          <div className="w-14 h-14 bg-[var(--olive-color)] border-2 border-[var(--text-color)] rounded-2xl flex items-center justify-center text-[var(--bg-color)] font-bold text-2xl shadow-md group-hover:scale-105 transition-all">
            h
          </div>
        )}
      </div>
      {label && (
        <span className="text-[10px] font-bold text-[var(--text-color)] px-2 py-0.5 rounded-sm bg-[var(--bg-color)]/80 backdrop-blur-sm group-hover:bg-[var(--olive-color)] group-hover:text-[var(--bg-color)] transition-all shadow-sm">
          {label}
        </span>
      )}
    </div>
  );
};

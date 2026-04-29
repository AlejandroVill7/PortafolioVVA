import React from 'react';

const PixelCloud = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={`w-32 h-20 opacity-40 ${className}`}>
    <rect x="20" y="20" width="60" height="20" fill="currentColor" />
    <rect x="30" y="10" width="40" height="10" fill="currentColor" />
    <rect x="30" y="40" width="40" height="10" fill="currentColor" />
    <rect x="10" y="30" width="10" height="10" fill="currentColor" />
    <rect x="80" y="30" width="10" height="10" fill="currentColor" />
  </svg>
);

const PixelAnimal = ({ delay, top }: { delay: number; top: string }) => (
  <div 
    className="absolute animal-walk pointer-events-none" 
    style={{ top, animationDelay: `${delay}s` }}
  >
    <svg viewBox="0 0 32 32" className="w-12 h-12 text-retro-olive">
      {/* A simple pixelated cat/dog silhouette */}
      <rect x="10" y="10" width="12" height="12" fill="currentColor" />
      <rect x="20" y="6" width="4" height="6" fill="currentColor" />
      <rect x="8" y="6" width="4" height="6" fill="currentColor" />
      <rect x="22" y="14" width="6" height="4" fill="currentColor" />
      <rect x="10" y="22" width="4" height="4" fill="currentColor" />
      <rect x="18" y="22" width="4" height="4" fill="currentColor" />
    </svg>
  </div>
);

export const PixelBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Clouds */}
      <div className="absolute top-[10%] left-[15%] text-retro-border"><PixelCloud /></div>
      <div className="absolute top-[25%] left-[65%] text-retro-border"><PixelCloud /></div>
      <div className="absolute top-[15%] left-[85%] text-retro-border"><PixelCloud /></div>
      <div className="absolute top-[40%] left-[5%] text-retro-border"><PixelCloud /></div>

      {/* Animals */}
      <PixelAnimal top="80%" delay={0} />
      <PixelAnimal top="85%" delay={10} />
      <PixelAnimal top="75%" delay={5} />
    </div>
  );
};

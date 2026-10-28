import React from 'react';

export const DedSecBackground: React.FC = () => {
  return (
    <>
      {/* Base Grid Layer */}
      <div className="fixed inset-0 hex-bg z-[-2] pointer-events-none transition-colors duration-500"></div>
      
      {/* Subtle Noise / CRT overlay */}
      <div className="crt-overlay z-[100]"></div>

      {/* Animated Pixel Details (like the request for pixel art clouds/details but abstracted for tech theme) */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Floating cross hairs or tech accents */}
        <div className="absolute top-[15%] left-[10%] w-4 h-4 border-t-2 border-l-2 border-[var(--accent-primary)] opacity-30"></div>
        <div className="absolute top-[85%] right-[10%] w-4 h-4 border-b-2 border-r-2 border-[var(--accent-secondary)] opacity-30"></div>
        
        {/* A subtle scrolling pixel block */}
      </div>
    </>
  );
};

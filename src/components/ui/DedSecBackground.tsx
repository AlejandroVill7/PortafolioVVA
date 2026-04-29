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
        <div className="absolute top-[15%] left-[10%] w-4 h-4 border-t-2 border-l-2 border-[var(--accent-primary)] opacity-30 animate-pulse"></div>
        <div className="absolute top-[85%] right-[10%] w-4 h-4 border-b-2 border-r-2 border-[var(--accent-secondary)] opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* A subtle scrolling pixel block */}
        <div className="absolute top-[40%] right-[-50px] w-[50px] h-[5px] bg-[var(--accent-primary)] opacity-20 animal-walk"></div>
        <div className="absolute top-[60%] right-[-100px] w-[10px] h-[10px] bg-[var(--accent-secondary)] opacity-20 animal-walk" style={{animationDelay: '5s', animationDuration: '25s'}}></div>
      </div>
    </>
  );
};

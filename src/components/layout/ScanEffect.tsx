import React from 'react';

export const ScanEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Scanline */}
      <div 
        className="w-full h-32 absolute top-0 left-0 animate-scanline"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(74, 222, 128, 0.05), transparent)',
          boxShadow: '0 0 10px rgba(74, 222, 128, 0.1)',
        }}
      />
      {/* Background static noise is handled in index.css `.noise-bg` */}
      <div className="noise-bg"></div>
    </div>
  );
};

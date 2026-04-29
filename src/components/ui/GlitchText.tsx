import React from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, as: Component = 'h1', className = '' }) => {
  return (
    <Component className={`glitch-wrapper ${className}`} data-text={text}>
      {text}
    </Component>
  );
};

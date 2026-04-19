import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRefs.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power4.out',
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-20 pt-20"
    >
      <div className="max-w-7xl w-full flex flex-col gap-4">
        <p 
          ref={(el) => (textRefs.current[0] = el as any)}
          className="text-brand-accent font-mono text-sm md:text-base tracking-wider uppercase"
        >
          Alejandro Villegas Velázquez
        </p>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
          <div className="overflow-hidden">
            <span 
              ref={(el) => (textRefs.current[1] = el as any)} 
              className="block text-brand-text"
            >
              Full-Stack
            </span>
          </div>
          <div className="overflow-hidden">
            <span 
              ref={(el) => (textRefs.current[2] = el as any)} 
              className="block text-brand-surface"
              style={{ WebkitTextStroke: '1px var(--color-brand-text)' }}
            >
              Developer
            </span>
          </div>
          <div className="overflow-hidden mt-4 md:mt-8">
            <span 
              ref={(el) => (textRefs.current[3] = el as any)} 
              className="block text-brand-accent text-4xl md:text-7xl lg:text-8xl"
            >
              &amp; Blue Team
            </span>
          </div>
        </h1>
        <p 
          ref={(el) => (textRefs.current[4] = el as any)}
          className="mt-8 md:mt-12 text-brand-text/60 max-w-lg text-lg leading-relaxed"
        >
          Ingeniero en Sistemas (ITO). Especializado en crear aplicaciones robustas y arquitecturas seguras. Enfoque en desarrollo moderno y análisis SOC.
        </p>
      </div>
    </section>
  );
};

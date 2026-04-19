import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Code2, Database, Shield } from 'lucide-react';
import { LinkedInBadge } from '../ui/LinkedInBadge';

export const AboutBento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Main About Card */}
          <div 
            ref={addToRefs}
            className="md:col-span-2 md:row-span-2 glass-panel rounded-2xl p-8 flex flex-col justify-between group hover:border-brand-accent/30 transition-colors duration-500"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text">Sobre Mí</h3>
              <p className="text-brand-text/70 leading-relaxed">
                Desarrollador Full-Stack con una fuerte pasión por la ciberseguridad. 
                Actualmente cursando el 8vo semestre de Ingeniería en Sistemas en el ITO. 
                Mi enfoque es construir aplicaciones que no solo luzcan bien y sean rápidas, 
                sino que también sean robustas desde su concepción.
              </p>
            </div>
            {/* LinkedIn Integration */}
            <div className="mt-6 border-t border-brand-text/10 pt-6">
              <LinkedInBadge />
            </div>
          </div>

          {/* Skill Card 1 */}
          <div 
            ref={addToRefs}
            className="glass-panel rounded-2xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
          >
            <Code2 size={32} className="text-brand-accent/80" />
            <div>
              <h4 className="font-bold text-lg text-brand-text">Frontend</h4>
              <p className="text-brand-text/50 text-sm mt-1">React, Next.js, Tailwind, GSAP</p>
            </div>
          </div>

          {/* Skill Card 2 */}
          <div 
            ref={addToRefs}
            className="glass-panel rounded-2xl p-6 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
          >
            <Database size={32} className="text-brand-accent/80" />
            <div>
              <h4 className="font-bold text-lg text-brand-text">Backend</h4>
              <p className="text-brand-text/50 text-sm mt-1">Laravel, Python, Node.js</p>
            </div>
          </div>

          {/* Certifications / Sec */}
          <div 
            ref={addToRefs}
            className="md:col-span-2 glass-panel rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Shield size={120} />
            </div>
            <h4 className="font-bold text-xl text-brand-text relative z-10">Certificaciones</h4>
            <div className="flex gap-4 mt-4 relative z-10">
              <span className="px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-xs text-brand-accent">CompTIA Security+</span>
              <span className="px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-xs text-brand-accent">NSE 1 Fortinet</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

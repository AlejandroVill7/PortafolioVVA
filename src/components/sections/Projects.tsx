import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Restaurant SaaS platform',
    description: 'Plataforma multi-tenant para gestión de restaurantes, integrando un frontend interactivo y un backend robusto en Laravel.',
    tags: ['React', 'Laravel', 'Tailwind'],
  },
  {
    id: 2,
    title: 'SOC Monitoring Tool',
    description: 'Herramienta interna para análisis de logs y correlación de eventos de seguridad basada en scripts de Python.',
    tags: ['Python', 'Bash', 'Security'],
  },
];

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-20 px-6 md:px-20 mb-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">Proyectos Destacados</h2>
          <div className="h-px bg-brand-text/10 flex-grow mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col"
            >
              {/* Image Placeholder with Parallax-like scale */}
              <div className="w-full h-64 bg-brand-surface relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/5 group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent z-10" />
                
                {/* Minimalist Tech Graphic */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                   <div className="font-mono text-9xl font-bold tracking-tighter mix-blend-overlay">0{index + 1}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow z-20 -mt-10 relative">
                <h3 className="text-2xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-4 text-brand-text/70 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-8">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-brand-accent/80 bg-brand-accent/10 px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-brand-text/50">
                    <button className="hover:text-brand-accent transition-colors font-mono font-bold">
                      GH
                    </button>
                    <button className="hover:text-brand-accent transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

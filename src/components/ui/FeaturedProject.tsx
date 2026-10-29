import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export type ProjectSlide = { src: string; alt: string; caption: string; portrait?: boolean };

export function FeaturedProject({ title, subtitle, logo, description, tags, slides, href, number }: {
  title: string; subtitle?: string; logo: string; description: string; tags: string[];
  slides: ProjectSlide[]; href?: string; number: string;
}) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const content = <>
    <div className="flex items-center gap-4 mb-6"><img src={logo} alt={`Logo de ${title}`} className="w-20 h-20 object-contain shrink-0" /><div><p className="font-tech text-xs tracking-widest text-[var(--accent-primary)]">PROYECTO / {number}</p><h3 className="text-3xl md:text-4xl font-bold mt-1">{title}</h3>{subtitle && <p className="text-sm text-[var(--text-muted)]">{subtitle}</p>}</div></div>
    <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mt-6">{tags.map(tag => <span key={tag} className="font-tech text-xs border border-[var(--border-color)] px-2 py-1">{tag}</span>)}</div>
    {href && <span className="inline-flex items-center gap-2 mt-7 font-tech text-sm text-[var(--accent-secondary)]">EXPLORAR PROYECTO <ArrowUpRight size={16}/></span>}
  </>;
  return <article className="border border-[var(--border-color)] bg-[var(--bg-panel)] overflow-hidden grid lg:grid-cols-[1fr_1.05fr]">
    {href ? <a href={href} className="block p-7 md:p-10 hover:bg-[var(--bg-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-primary)]" aria-label={`Explorar ${title}`}>{content}</a> : <div className="p-7 md:p-10">{content}</div>}
    <div className="flex flex-col min-w-0 border-t lg:border-t-0 lg:border-l border-[var(--border-color)]">
      <div className="h-64 md:h-80 bg-[var(--bg-base)] flex items-center justify-center overflow-hidden"><img src={slide.src} alt={slide.alt} className={`w-full h-full ${slide.portrait ? 'object-contain' : 'object-cover object-top'}`} loading="lazy" /></div>
      <div className="flex items-center justify-between gap-3 px-4 py-3 min-h-16"><div className="min-w-0"><p className="text-sm font-semibold truncate">{slide.caption}</p><p className="font-tech text-xs text-[var(--text-muted)]">{index + 1} / {slides.length}</p></div><div className="flex gap-2"><button type="button" aria-label={`Imagen anterior de ${title}`} onClick={() => setIndex((index - 1 + slides.length) % slides.length)} className="p-2 border border-[var(--border-color)] hover:text-[var(--accent-primary)]"><ChevronLeft size={18}/></button><button type="button" aria-label={`Imagen siguiente de ${title}`} onClick={() => setIndex((index + 1) % slides.length)} className="p-2 border border-[var(--border-color)] hover:text-[var(--accent-primary)]"><ChevronRight size={18}/></button></div></div>
    </div>
  </article>;
}

import { useEffect, useRef, useState } from 'react';
import { LoadedImage } from './LoadedImage';
import { ArrowUpRight } from 'lucide-react';

export type ProjectSlide = { src: string; alt: string; caption: string };

export function FeaturedProject({ title, subtitle, logo, description, tags, slides, href, number, darkLogoWhite }: {
  title: string; subtitle?: string; logo: string; description: string; tags: string[];
  slides: ProjectSlide[]; href?: string; number: string; darkLogoWhite?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const projectRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '100px' });
    if (projectRef.current) observer.observe(projectRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    const load = async (src: string) => {
      const image = new Image();
      image.src = src;
      await image.decode();
    };
    load(slides[index].src).then(() => { if (!cancelled) setReady(true); }).catch(() => {});
    if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => { cancelled = true; };
    const next = (index + 1) % slides.length;
    const nextImage = load(slides[next].src);
    // Attach a handler immediately so failed preloads never become unhandled rejections.
    const loaded = nextImage.then(() => true, () => false);
    const timer = window.setTimeout(async () => {
      if (await loaded && !cancelled && !document.hidden) setIndex(next);
    }, 3500);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [visible, index, slides]);
  const slide = slides[index];
  const content = <>
    <div className="flex items-center gap-4 mb-6"><LoadedImage src={logo} alt={`Logo de ${title}`} className={`w-20 h-20 object-contain shrink-0 ${darkLogoWhite ? 'logo-white-in-dark' : ''}`} /><div><p className="font-tech text-xs tracking-widest text-[var(--accent-primary)]">PROYECTO / {number}</p><h3 className="text-3xl md:text-4xl font-bold mt-1">{title}</h3>{subtitle && <p className="text-sm text-[var(--text-muted)]">{subtitle}</p>}</div></div>
    <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mt-6">{tags.map(tag => <span key={tag} className="font-tech text-xs border border-[var(--border-color)] px-2 py-1">{tag}</span>)}</div>
    {href && <span className="inline-flex items-center gap-2 mt-7 font-tech text-sm text-[var(--accent-secondary)]">EXPLORAR PROYECTO <ArrowUpRight size={16}/></span>}
  </>;
  return <article ref={projectRef} className="border border-[var(--border-color)] bg-[var(--bg-panel)] overflow-hidden grid lg:grid-cols-[1fr_1.05fr]">
    {href ? <a href={href} className="block p-7 md:p-10 hover:bg-[var(--bg-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-primary)]" aria-label={`Explorar ${title}`}>{content}</a> : <div className="p-7 md:p-10">{content}</div>}
    <div className="flex flex-col min-w-0 border-t lg:border-t-0 lg:border-l border-[var(--border-color)]">
      <div className="h-64 md:h-80 bg-[var(--bg-base)] overflow-hidden relative">{!ready && <span className="image-skeleton absolute inset-0" aria-label="Cargando imágenes" />}{ready && <img src={slide.src} alt={slide.alt} className="project-slide w-full h-full object-cover object-top" decoding="async" />}</div>
      <div className="flex items-center justify-between gap-3 px-4 py-3 min-h-16"><p className="text-sm font-semibold truncate">{slide.caption}</p><div className="flex gap-1.5" aria-label={`Imagen ${index + 1} de ${slides.length}`}>{slides.map((item, position) => <span key={item.src} className={`w-1.5 h-1.5 rounded-full ${position === index ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border-color)]'}`} />)}</div></div>
    </div>
  </article>;
}

import { useEffect, useState } from 'react';
import { UserRound, Code2, PanelsTopLeft, Mail } from 'lucide-react';

const sections = [
  { id: 'sobre-mi', label: 'Sobre mí', icon: UserRound },
  { id: 'tecnologias', label: 'Tecnologías', icon: Code2 },
  { id: 'proyectos', label: 'Proyectos', icon: PanelsTopLeft },
  { id: 'contacto', label: 'Contacto', icon: Mail },
];

export function SectionNav() {
  const [active, setActive] = useState('sobre-mi');

  useEffect(() => {
    if (sections.some(({ id }) => window.location.hash === `#${id}`)) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    const observer = new IntersectionObserver(entries => {
      const visible = entries.find(entry => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return <nav aria-label="Secciones del portafolio" className="section-nav fixed z-[190] top-3 left-3 right-3 md:top-1/2 md:-translate-y-1/2 md:left-4 md:right-auto border border-[var(--border-color)] bg-[var(--bg-panel)] shadow-lg rounded-full md:rounded-xl px-2 py-2 md:p-3">
    <ul className="flex items-center justify-around md:items-stretch md:flex-col md:gap-4">
      {sections.map(({ id, label, icon: Icon }) => <li key={id}>
        <button type="button" aria-label={label} onClick={() => { document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' }); setActive(id); }} aria-current={active === id ? 'location' : undefined} className={`section-nav-link flex items-center justify-center md:justify-start gap-2 px-1.5 md:px-2 py-1.5 text-[11px] md:text-xs font-tech whitespace-nowrap cursor-pointer ${active === id ? 'text-[var(--accent-secondary)] font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}>
          <Icon size={18} aria-hidden="true" className="hidden md:block shrink-0" />
          <span className="section-nav-label">{label}</span>
        </button>
      </li>)}
    </ul>
  </nav>;
}

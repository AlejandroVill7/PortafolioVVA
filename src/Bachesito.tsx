import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './components/ui/DarkModeToggle';

const views = [
  {src:'/bachesito/ciudadano-reportes.png',title:'Exploración ciudadana',detail:'Mapa y reportes registrados en la base de demostración.',portrait:true},
  {src:'/bachesito/ciudadano-formulario.png',title:'Crear reporte',detail:'Flujo móvil para añadir ubicación y evidencia fotográfica.',portrait:true},
  {src:'/bachesito/gobierno-dashboard.png',title:'Centro de operaciones',detail:'Panel autenticado con indicadores, mapa y 13 reportes de prueba.'},
  {src:'/bachesito/gobierno-reportes.png',title:'Gestión de reportes',detail:'Tabla operativa para consultar prioridad, estado y seguimiento.'},
];

export default function Bachesito(){
  useEffect(()=>{document.title='BachesITO | Alejandro Villegas';window.scrollTo(0,0)},[]);
  return <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)]"><ThemeToggle/><div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
    <a href="/" className="inline-flex items-center gap-2 font-tech text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)]"><ArrowLeft size={16}/> VOLVER AL PORTAFOLIO</a>
    <header className="py-16 md:py-24 border-b border-[var(--border-color)]"><p className="font-tech text-xs tracking-widest text-[var(--accent-primary)]">PROYECTO / INFRAESTRUCTURA URBANA</p><div className="flex items-center gap-5 mt-6"><img src="/projects/bachesito-logo.png" alt="Logo de BachesITO" className="w-24 h-24 md:w-32 md:h-32 object-contain"/><h1 className="text-5xl md:text-8xl font-black tracking-tighter">BachesITO<span className="text-[var(--accent-secondary)]">.</span></h1></div><p className="mt-7 max-w-3xl text-xl text-[var(--text-muted)] leading-relaxed">Una aplicación ciudadana y un sistema de gobierno para convertir los reportes de baches en tareas visibles, priorizadas y trazables.</p><div className="flex flex-wrap gap-2 mt-8 font-tech text-xs">{['React y Vite','Laravel 11','PWA','Mapas','HackaTec 2026'].map(t=><span key={t} className="border border-[var(--border-color)] px-3 py-2">{t}</span>)}</div></header>
    <section className="py-16 border-b border-[var(--border-color)] grid md:grid-cols-2 gap-8"><div><p className="font-tech text-sm text-[var(--accent-secondary)]">01 / DOS APLICACIONES</p><h2 className="text-4xl font-bold mt-4">Del aviso a la reparación</h2></div><div className="space-y-5 text-[var(--text-muted)] leading-relaxed"><p>La aplicación ciudadana permite consultar el mapa y registrar incidencias con ubicación y fotografías. El portal de gobierno concentra los reportes, sus estados y su prioridad para apoyar la revisión y asignación de trabajos.</p><p>El backend Laravel expone la API y guarda los datos. El proyecto contempla análisis fotográfico asistido y puntuación de prioridad; las capturas corresponden al entorno local con datos de prueba.</p></div></section>
    <section className="py-16"><p className="font-tech text-sm text-[var(--accent-secondary)]">02 / VISTAS REALES</p><h2 className="text-4xl font-bold mt-4 mb-3">Aplicaciones en ejecución</h2><p className="text-[var(--text-muted)] mb-9">Capturas tomadas de las dos aplicaciones ejecutadas localmente. El portal de gobierno se abrió con la cuenta de demostración incluida en el proyecto.</p><div className="grid md:grid-cols-2 gap-7">{views.map(v=><figure key={v.src} className="border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden"><a href={v.src} target="_blank" rel="noreferrer" aria-label={`Abrir ${v.title}`} className="block bg-[var(--bg-panel)]"><img src={v.src} alt={v.title} loading="lazy" className={`w-full h-80 ${v.portrait?'object-contain':'object-cover object-top'}`}/></a><figcaption className="p-5"><strong className="block text-lg">{v.title}</strong><span className="text-sm text-[var(--text-muted)]">{v.detail}</span></figcaption></figure>)}</div></section>
  </div></main>;
}

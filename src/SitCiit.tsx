import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Database, Radio, Smartphone, Monitor, PackageSearch } from 'lucide-react';
import { ThemeToggle } from './components/ui/DarkModeToggle';

const parts = [
  { icon: <PackageSearch />, name: 'Portal de clientes', stack: 'React · Vite · Node', text: 'Consulta privada de envíos mediante una referencia. Muestra la última posición y eventos disponibles dentro del periodo autorizado; incluye un mapa del corredor ferroviario.' },
  { icon: <Monitor />, name: 'Centro de control', stack: 'React · TypeScript · Leaflet · Recharts', text: 'Mapa, monitoreo por unidad y nodo, conectividad, eventos, comandos, bitácora, historial, gestión y auditoría. Las vistas operativas requieren sesión y permisos.' },
  { icon: <Smartphone />, name: 'Aplicación móvil', stack: 'Expo · React Native · SQLite', text: 'Modo Nodo para sensores, ubicación y envío de telemetría; modo Operador para avisos y control. La cola local permite conservar mensajes durante cortes de conexión.' },
  { icon: <Radio />, name: 'Backend', stack: 'Fastify · MQTT · Socket.IO', text: 'API REST y procesamiento de telemetría y eventos. Integra autenticación, roles, comandos, alertas públicas limitadas y difusión en tiempo real.' },
  { icon: <Database />, name: 'Infraestructura', stack: 'Docker Compose · Mosquitto · TimescaleDB', text: 'Broker MQTT, base de datos de series temporales y contrato de mensajes versionado que sincroniza los componentes.' },
];

const shots = [
  { src: '/sit-ciit/landing.png', title: 'Portal público', detail: 'Landing ejecutada localmente' },
  { src: '/sit-ciit/tracking-demo.png', title: 'Seguimiento de envío', detail: 'Ejemplo ficticio del portal en desarrollo' },
  { src: '/sit-ciit/dashboard-login.png', title: 'Acceso al centro de control', detail: 'Dashboard ejecutado localmente' },
  { src: '/sit-ciit/mobile-nodo.png', title: 'Modo Nodo', detail: 'Vista web de demostración, con datos simulados' },
];

export default function SitCiit() {
  useEffect(() => { document.title = 'SIT-CIIT | Alejandro Villegas'; window.scrollTo(0, 0); }, []);
  return <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)]">
    <ThemeToggle />
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
      <a href="/" className="inline-flex items-center gap-2 font-tech text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)]"><ArrowLeft size={16}/> VOLVER AL PORTAFOLIO</a>
      <header className="py-20 md:py-28 border-b border-[var(--border-color)]">
        <p className="font-tech text-xs tracking-[.25em] text-[var(--accent-primary)] mb-6">PROYECTO / SISTEMA INTEGRAL</p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter">SIT-CIIT<span className="text-[var(--accent-secondary)]">.</span></h1>
        <p className="mt-8 max-w-3xl text-xl md:text-2xl leading-relaxed text-[var(--text-muted)]">Plataforma de monitoreo para el Corredor Interoceánico: conecta nodos móviles, telemetría, alertas y operación ferroviaria en un sistema distribuido.</p>
        <div className="mt-10 flex flex-wrap gap-3 font-tech text-xs uppercase tracking-wider">{['5 aplicaciones y servicios', 'Tiempo real', 'Web + móvil', 'Arquitectura distribuida'].map(x => <span key={x} className="border border-[var(--border-color)] px-3 py-2">{x}</span>)}</div>
      </header>

      <section className="py-20 border-b border-[var(--border-color)]">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12"><div><p className="font-tech text-sm text-[var(--accent-secondary)]">01 / CONTEXTO</p><h2 className="text-4xl font-bold mt-4">Una operación, cinco piezas</h2></div>
        <div className="text-[var(--text-muted)] text-lg leading-relaxed space-y-5"><p>Los teléfonos funcionan como nodos que capturan datos del trayecto. MQTT transporta telemetría y eventos al backend, que los persiste y los distribuye al centro de control. Los operadores consultan el estado y envían comandos según su rol; el portal de clientes expone únicamente la información autorizada de cada envío.</p><p>El proyecto separa infraestructura, backend, dashboard, aplicación móvil y portal público para desplegarlos y evolucionarlos de forma independiente.</p></div></div>
        <div className="mt-12 grid md:grid-cols-5 gap-2 font-tech text-xs text-center">{['NODO MÓVIL','MQTT','API + BASE DE DATOS','CENTRO DE CONTROL','PORTAL CLIENTE'].map((x,i)=><div key={x} className="p-4 border border-[var(--border-color)] bg-[var(--bg-surface)]">{String(i+1).padStart(2,'0')} / {x}</div>)}</div>
      </section>

      <section className="py-20 border-b border-[var(--border-color)]"><p className="font-tech text-sm text-[var(--accent-secondary)]">02 / COMPONENTES</p><h2 className="text-4xl font-bold mt-4 mb-10">El sistema completo</h2><div className="grid md:grid-cols-2 gap-4">{parts.map((p,i)=><article key={p.name} className="p-7 border border-[var(--border-color)] bg-[var(--bg-surface)]"><div className="flex justify-between text-[var(--accent-primary)]"><span>{p.icon}</span><span className="font-tech text-xs">0{i+1}</span></div><h3 className="text-2xl font-bold mt-6">{p.name}</h3><p className="font-tech text-xs text-[var(--accent-secondary)] mt-2">{p.stack}</p><p className="text-[var(--text-muted)] leading-relaxed mt-5">{p.text}</p></article>)}</div></section>

      <section className="py-20 border-b border-[var(--border-color)]"><p className="font-tech text-sm text-[var(--accent-secondary)]">03 / VISTAS REALES</p><h2 className="text-4xl font-bold mt-4 mb-4">El proyecto en ejecución</h2><p className="text-[var(--text-muted)] mb-10 max-w-2xl">Capturas locales de las interfaces disponibles. El centro de control muestra su pantalla de acceso porque las vistas internas requieren una sesión autorizada.</p><div className="grid lg:grid-cols-2 gap-8">{shots.map(s=><figure key={s.src} className="border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden"><img src={s.src} alt={s.title} className="w-full aspect-[16/10] object-cover object-top"/><figcaption className="p-5"><strong className="block">{s.title}</strong><span className="text-sm text-[var(--text-muted)]">{s.detail}</span></figcaption></figure>)}</div></section>

      <section className="py-20"><p className="font-tech text-sm text-[var(--accent-secondary)]">04 / INGENIERÍA</p><h2 className="text-4xl font-bold mt-4 mb-8">Decisiones técnicas</h2><div className="grid md:grid-cols-3 gap-8 text-[var(--text-muted)] leading-relaxed"><p><strong className="block text-[var(--text-main)] mb-3">Contrato compartido</strong>Los mensajes MQTT tienen un esquema versionado, sincronizado explícitamente entre infraestructura, backend, móvil y dashboard.</p><p><strong className="block text-[var(--text-main)] mb-3">Datos y trazabilidad</strong>TimescaleDB conserva telemetría; el sistema distingue la hora de captura de la de recepción y permite consultar historial por nodo.</p><p><strong className="block text-[var(--text-main)] mb-3">Acceso por contexto</strong>La operación interna usa autenticación y roles. El portal público consulta referencias privadas y limita la información expuesta.</p></div><a href="/" className="mt-16 inline-flex items-center gap-2 font-tech text-sm text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">VOLVER AL PORTAFOLIO <ArrowUpRight size={16}/></a></section>
    </div>
  </main>;
}

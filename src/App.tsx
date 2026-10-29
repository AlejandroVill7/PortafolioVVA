
import { ThemeToggle } from './components/ui/DarkModeToggle';
import { GlitchText } from './components/ui/GlitchText';
import { TerminalDashboard } from './components/ui/TerminalDashboard';
import { FeaturedProject } from './components/ui/FeaturedProject';
import { Aquarium } from './components/ui/Aquarium';
import { SectionNav } from './components/ui/SectionNav';
import Bachesito from './Bachesito';
import Comalli from './Comalli';
import SitCiit from './SitCiit';

function App() {
  if (window.location.pathname.replace(/\/$/, '') === '/sit-ciit') return <SitCiit />;
  if (window.location.pathname.replace(/\/$/, '') === '/bachesito') return <Bachesito />;
  if (window.location.pathname.replace(/\/$/, '') === '/comalli') return <Comalli />;
  return <Home />;
}

function Home() {

  const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  );

  const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  );

  return (
      <div className="w-full relative min-h-screen selection:bg-[var(--accent-primary)] selection:text-white">
        <ThemeToggle />
        <SectionNav />

        {/* --- SECTION 1: HERO --- */}
        <section id="sobre-mi" className="overflow-hidden isolate w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-20 lg:pl-44 relative z-10 pt-24 md:pt-20">
          <Aquarium />
          <div className="max-w-7xl mx-auto w-full hero-content relative z-10">
            <div className="inline-block border border-[var(--accent-primary)] px-3 py-1 mb-6 rounded-sm bg-[var(--bg-surface)]">
              <span className="font-tech text-xs tracking-widest text-[var(--accent-primary)] uppercase">Status: Online</span>
            </div>
            
            <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-14 mb-6">
              <GlitchText
                text="ALEJANDRO VILLEGAS VELÁZQUEZ"
                as="h1"
                className="min-w-0 break-words text-5xl md:text-7xl lg:text-[88px] font-black leading-none tracking-tighter text-[var(--text-main)]"
              />
              <div className="shrink-0 w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 overflow-hidden rounded-full border-4 border-[var(--accent-primary)] shadow-[0_0_35px_var(--accent-primary)]">
                <img src="/fotoperfil.jpeg" alt="Retrato de Alejandro Villegas Velázquez" className="w-full h-full object-cover object-[center_62%]" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <h2 className="text-2xl md:text-4xl text-[var(--text-muted)] font-light">
                Software Developer & <span className="text-[var(--accent-secondary)] font-bold">Systems Engineering Student</span>
              </h2>
            </div>
            
            <p className="mt-8 max-w-2xl text-lg text-[var(--text-muted)] leading-relaxed">
              Desarrollo aplicaciones web y móviles con TypeScript, React, React Native y Laravel. Trabajo con interfaces reutilizables, APIs REST, bases de datos y visualización geoespacial.
            </p>
          </div>
        </section>

        {/* --- SECTION 2: BACKEND & CLOUD PROFILE --- */}
        <section id="tecnologias" className="w-full py-24 px-6 md:px-20 lg:pl-44 relative z-10">
          <div className="max-w-7xl mx-auto w-full gsap-fade-up">
            <div className="flex items-center gap-4 mb-12">
               <span className="font-tech text-xl text-[var(--accent-primary)]">01 //</span>
               <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Backend & Cloud</h3>
               <div className="h-px bg-[var(--border-color)] flex-grow ml-4"></div>
            </div>
            <TerminalDashboard />
          </div>
        </section>

        {/* --- SECTION 3: OPERATIONS (Projects) --- */}
        <section id="proyectos" className="w-full py-24 px-6 md:px-20 lg:pl-44 relative z-10 bg-[var(--bg-surface)] border-y border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-16 gsap-fade-up">
               <span className="font-tech text-xl text-[var(--accent-secondary)]">02 //</span>
               <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Active Operations</h3>
               <div className="h-px bg-[var(--border-color)] flex-grow ml-4"></div>
            </div>
            
            <div className="grid gap-8 projects-grid">
              <FeaturedProject number="01" title="Zenda" subtitle="SIT-CIIT · monitoreo ferroviario" logo="/sit-ciit/zenda-logo-claro.png" href="/sit-ciit/" description="Sistema distribuido para monitoreo del Corredor Interoceánico: aplicación móvil que simula y captura sensores, telemetría por MQTT, centro de control con mapas y alertas, y portal de seguimiento de envíos." tags={['React Native', 'React', 'Fastify', 'MQTT', 'TimescaleDB']} slides={[{src:'/sit-ciit/landing.png',alt:'Portal público de Zenda',caption:'Portal de seguimiento'},{src:'/sit-ciit/dashboard-mapa.png',alt:'Mapa del centro de control',caption:'Centro de control y mapa'},{src:'/sit-ciit/dashboard-conectividad.png',alt:'Conectividad del centro de control',caption:'Conectividad'}]} />
              <FeaturedProject number="02" title="BachesITO" logo="/projects/bachesito-logo.png" href="/bachesito/" description="Plataforma cívica para reportar baches desde el teléfono y gestionar su atención desde un panel gubernamental. Incluye mapa, evidencia fotográfica, seguimiento de estados, prioridades y asignación operativa." tags={['React', 'Laravel', 'PWA', 'Mapas', 'HackaTec 2026']} slides={[{src:'/bachesito/gobierno-dashboard.png',alt:'Panel gubernamental con reportes',caption:'Panel de gobierno'},{src:'/bachesito/gobierno-reportes.png',alt:'Listado de reportes',caption:'Gestión de reportes'}]} />
              <FeaturedProject number="03" title="Comalli" logo="/comalli/logo.png" href="/comalli/" description="SaaS de gestión para restaurantes y franquicias. Conecta administración, sucursales, inventario, mesas, punto de venta, cocina y menú público para clientes mediante roles y aislamiento de datos por franquicia." tags={['Laravel', 'Vue', 'Inertia', 'Multi-tenant', 'POS']} slides={[{src:'/comalli/admin.png',alt:'Panel de administración Comalli',caption:'Administración'},{src:'/comalli/cocina.png',alt:'Vista de cocina Comalli',caption:'Cocina'},{src:'/comalli/mesero.png',alt:'Punto de venta para meseros',caption:'Punto de venta'}]} />
              <FeaturedProject number="04" title="BalaaYu Store" subtitle="Tienda de artesanía oaxaqueña · 2025" logo="/projects/balaayu-logo.png" darkLogoWhite description="Tienda en línea dedicada al barro negro de San Bartolo Coyotepec, rojo de San Marcos Tlapazola y verde de Santa María Atzompa, Oaxaca. Presenta el origen artesanal de cada comunidad, un catálogo con productos, precios y existencias, carrito de compra y acceso de usuarios." tags={['Angular 19', 'Firebase', 'Catálogo', 'Artesanía', '2025']} slides={[{src:'/balaayu/inicio.png',alt:'Inicio de BalaaYu Store',caption:'Inicio y artesanía'},{src:'/balaayu/catalogo.png',alt:'Catálogo de barro de BalaaYu',caption:'Catálogo de productos'}]} />
            </div>
          </div>
        </section>

        {/* --- SECTION 4: SECURE COMMS (Contact) --- */}
        <section id="contacto" className="w-full py-32 px-6 md:px-20 lg:pl-44 relative z-10">
          <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-12 gsap-fade-up">
            <GlitchText text="ESTABLECER CONEXIÓN" as="h3" className="text-4xl md:text-6xl font-bold uppercase tracking-tighter" />
            
            <p className="text-[var(--text-muted)] text-lg max-w-lg">
              Abierto a oportunidades de desarrollo de software y colaboraciones en aplicaciones web y móviles. Escríbeme a alejandro.v.v.dev@gmail.com.
            </p>

            <div className="flex gap-6 mt-4">
              <a 
                href="https://linkedin.com/in/alejandro-v-a868a334b/" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-8 py-4 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] flex items-center gap-3 overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-3 text-[var(--text-main)]">
                  <LinkedInIcon />
                  <span className="font-tech font-bold uppercase tracking-wider text-sm">LinkedIn</span>
                </div>
              </a>

              <a 
                href="https://github.com/AlejandroVill7" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-8 py-4 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-secondary)] flex items-center gap-3 overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-3 text-[var(--text-main)]">
                  <GitHubIcon />
                  <span className="font-tech font-bold uppercase tracking-wider text-sm">GitHub</span>
                </div>
              </a>
            </div>

            <div className="mt-20 font-tech text-[10px] text-[var(--text-muted)] uppercase tracking-widest opacity-50">
              // SYS.HALT // END_OF_FILE
            </div>
          </div>
        </section>

      </div>
  );
}

export default App;


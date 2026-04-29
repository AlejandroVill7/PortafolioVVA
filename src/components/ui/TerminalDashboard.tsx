import React from 'react';
import { Terminal, Shield, Activity, Code2, Database, Globe } from 'lucide-react';
import { GlitchText } from './GlitchText';

export const TerminalDashboard: React.FC = () => {
  return (
    <div className="w-full glass-panel border border-[var(--accent-primary)] rounded-sm p-1 relative overflow-hidden group">
      {/* Decorative corner markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--accent-primary)]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--accent-primary)]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--accent-primary)]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--accent-primary)]"></div>

      <div className="bg-[var(--bg-panel)] p-6 md:p-10 flex flex-col gap-8 h-full">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
          <div className="flex items-center gap-3">
            <Shield className="text-[var(--accent-primary)]" size={24} />
            <GlitchText text="SYS.PROFILE // SOC_ANALYST" as="h2" className="text-xl md:text-2xl font-tech font-bold text-[var(--text-main)]" />
          </div>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[var(--accent-secondary)] animate-pulse"></span>
            <span className="w-3 h-3 rounded-full bg-[var(--accent-primary)] opacity-50"></span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bio Section */}
          <div className="flex flex-col gap-4">
            <div className="font-tech text-xs text-[var(--accent-primary)] mb-2 uppercase tracking-widest">
              [INIT_BIO_STREAM]
            </div>
            <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed">
              Perfil técnico con trayectoria en el desarrollo de proyectos Full-Stack y automatización de procesos mediante Python. Mi enfoque se centra en la defensa activa y el análisis de incidentes, respaldado por entrenamiento práctico en entornos de simulación de alta complejidad (HackTheBox).
            </p>
            
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-tech text-[var(--text-muted)]">
                <span className="text-[var(--accent-secondary)]">&gt;</span> Status: <span className="text-[var(--accent-primary)]">Actively Defending</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-tech text-[var(--text-muted)]">
                <span className="text-[var(--accent-secondary)]">&gt;</span> Clearance Level: <span className="text-white bg-[var(--accent-secondary)] px-1">Lvl 1</span>
              </div>
            </div>
          </div>

          {/* Skills / Tech Stack Section */}
          <div className="flex flex-col gap-4">
             <div className="font-tech text-xs text-[var(--accent-primary)] mb-2 uppercase tracking-widest">
              [SYSTEM_CAPABILITIES]
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Terminal size={18} />, label: 'Python / Bash', type: 'Scripting' },
                { icon: <Shield size={18} />, label: 'Incident Response', type: 'SOC' },
                { icon: <Activity size={18} />, label: 'Log Analysis', type: 'Monitoring' },
                { icon: <Code2 size={18} />, label: 'React / Next.js', type: 'Frontend' },
                { icon: <Database size={18} />, label: 'Laravel / Node', type: 'Backend' },
                { icon: <Globe size={18} />, label: 'Network Sec', type: 'Core' },
              ].map((skill, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-colors group">
                  <div className="text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors mt-0.5">
                    {skill.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[var(--text-main)]">{skill.label}</span>
                    <span className="text-[10px] font-tech text-[var(--text-muted)] uppercase">{skill.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

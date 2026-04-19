import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Terminal, ShieldAlert, Activity } from 'lucide-react';

export const CyberSec: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        terminalRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">Cybersecurity & SOC</h2>
          <div className="h-px bg-brand-accent/20 flex-grow mt-2"></div>
        </div>

        <div 
          ref={terminalRef}
          className="w-full rounded-xl border border-brand-accent/20 bg-brand-surface/80 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(74,222,128,0.05)]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-brand-bg/50 border-b border-brand-accent/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-brand-accent/20 border border-brand-accent/50"></div>
            </div>
            <p className="mx-auto font-mono text-xs text-brand-text/40">SOC_Analyst_Dashboard.sh</p>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-accent">
                <Terminal size={16} />
                <span>root@soc-analyst:~# ./check_status.sh</span>
              </div>
              <div className="text-brand-text/80 pl-6">
                <p>Initializing scan...</p>
                <p className="text-brand-accent/80">[OK] CompTIA Security+ (In Preparation)</p>
                <p className="text-brand-accent/80">[OK] Fortinet NSE 1 (In Preparation)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* HTB Widget */}
              <div className="glass-panel p-4 rounded-lg flex flex-col gap-3">
                <div className="flex items-center gap-2 text-brand-text/60">
                  <ShieldAlert size={16} className="text-green-400" />
                  <span>HackTheBox Status</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Rank</span>
                    <span className="text-brand-accent">Hacker</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Machines Owned</span>
                    <span className="text-brand-text">12</span>
                  </div>
                </div>
              </div>

              {/* THM Widget */}
              <div className="glass-panel p-4 rounded-lg flex flex-col gap-3">
                <div className="flex items-center gap-2 text-brand-text/60">
                  <Activity size={16} className="text-blue-400" />
                  <span>TryHackMe Logs</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Current Streak</span>
                    <span className="text-brand-accent">45 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed Paths</span>
                    <span className="text-brand-text">SOC Level 1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-brand-accent animate-pulse pt-4">
              <span>root@soc-analyst:~#</span>
              <span className="w-2 h-5 bg-brand-accent"></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

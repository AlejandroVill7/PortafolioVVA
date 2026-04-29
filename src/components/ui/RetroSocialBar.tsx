import React from 'react';
import { Terminal, Shield, Activity, Globe } from 'lucide-react';

export const RetroSocialBar: React.FC = () => {
  const socials = [
    { icon: <Shield size={24} />, color: 'bg-[#0077b5]', label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <Terminal size={24} />, color: 'bg-[#333]', label: 'GitHub', href: 'https://github.com' },
    { icon: <Globe size={24} />, color: 'bg-[#1769ff]', label: 'Behance', href: '#' },
    { icon: <Activity size={24} />, color: 'bg-[#ea4c89]', label: 'Dribbble', href: '#' },
  ];

  return (
    <div className="w-full bg-retro-olive border-y-2 border-retro-text py-6 flex justify-center gap-6 md:gap-12 overflow-hidden relative">
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
      
      {socials.map((social, i) => (
        <a 
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-retro-text flex items-center justify-center text-white retro-button-shadow transition-all hover:-translate-y-1 relative z-10`}
          title={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

import { User } from 'lucide-react';

export const LinkedInBadge: React.FC = () => {
  return (
    <a 
      href="https://www.linkedin.com/in/alejandro-v-a868a334b" 
      target="_blank" 
      rel="noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 hover:bg-[#0077b5]/20 transition-all group"
    >
      <div className="p-2 rounded-lg bg-[#0077b5] text-white">
        <User size={20} />
      </div>
      <div>
        <p className="text-xs text-brand-text/50 font-mono">LinkedIn Profile</p>
        <p className="text-sm font-bold text-brand-text group-hover:text-[#0077b5] transition-colors">Alejandro Villegas</p>
      </div>
    </a>
  );
};

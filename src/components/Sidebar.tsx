import React from 'react';
import { List, ChevronRight, Lightbulb, Grid, CircleDot, Building } from 'lucide-react';
import { LISTS_DATA } from '../data/storiesData';

interface SidebarProps {
  onSelectList?: (listId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSelectList }) => {
  const renderListIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'lightbulb':
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}20`, color }}>
            <Lightbulb size={20} className="stroke-[2.2]" />
          </div>
        );
      case 'quadrant':
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}20`, color }}>
            <Grid size={20} className="stroke-[2.2]" />
          </div>
        );
      case 'dots-sphere':
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}20`, color }}>
            <CircleDot size={20} className="stroke-[2.2]" />
          </div>
        );
      case 'building':
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#f1f5f9', color: '#0f172a' }}>
            <Building size={20} className="stroke-[2.2]" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-black">
            <List size={20} />
          </div>
        );
    }
  };

  return (
    <aside className="w-full space-y-8">
      
      {/* 1. Fast Company Impact Council Banner */}
      <div className="w-full bg-[#171717] text-white p-6 relative overflow-hidden border border-neutral-800 shadow-sm">
        {/* Subtle grid pattern */}
        <div className="relative z-10">
          <div className="flex items-center space-x-1 mb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
              FAST COMPANY
            </span>
            <span className="text-[10px] font-bold text-amber-400 border-l border-neutral-600 pl-1">
              IMPACT COUNCIL
            </span>
          </div>

          <h3 className="text-xl font-extrabold leading-tight tracking-tight text-white font-poppins mb-2">
            Onde as Mentes Mais Influentes da Inovação se Conectam
          </h3>

          <p className="text-[12px] text-neutral-300 leading-relaxed font-poppins mb-5">
            Participe do Impact Council da Fast Company, uma comunidade exclusiva para líderes e executivos que moldam o futuro.
          </p>

          <button 
            onClick={() => alert("Candidate-se ao Fast Company Impact Council. Inscrições abertas para líderes e executivos.")}
            className="w-full bg-white hover:bg-neutral-200 text-black font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 transition-colors cursor-pointer font-poppins flex items-center justify-center space-x-1"
          >
            <span>CANDIDATE-SE</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* 2. Most Innovative Companies Call for Entries */}
      <div className="w-full bg-black text-white p-6 border border-neutral-800 shadow-sm">
        <div className="flex items-center justify-between text-[9px] text-neutral-400 uppercase font-semibold mb-2">
          <span>RECONHECIMENTOS FAST COMPANY</span>
          <span className="text-emerald-400">EDIÇÃO 2026</span>
        </div>

        <h3 className="text-2xl font-black uppercase tracking-tight text-white font-poppins mb-1">
          EMPRESAS MAIS INOVADORAS
        </h3>

        <div className="my-3 py-1.5 px-3 bg-neutral-900 border-l-2 border-emerald-400 inline-block">
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
            INSCRIÇÕES ABERTAS
          </span>
        </div>

        <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold mb-4">
          PRAZO FINAL DE INSCRIÇÃO: 2 DE OUTUBRO
        </p>

        <button 
          onClick={() => alert("Inscrições para o Most Innovative Companies 2026 abertas.")}
          className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 transition-colors cursor-pointer font-poppins"
        >
          INSCREVA-SE AGORA
        </button>
      </div>

      {/* 3. Lists Widget */}
      <div className="w-full bg-white border border-neutral-200 p-5 rounded-xs">
        <div className="flex items-center space-x-2.5 pb-3 mb-4 border-b border-neutral-200">
          <div className="w-6 h-6 flex items-center justify-center shrink-0 text-black">
            <List size={20} className="text-black stroke-[2.5]" />
          </div>
          <h3 className="text-[23px] sm:text-[25px] font-bold tracking-tight text-neutral-950 font-poppins leading-tight">
            Listas
          </h3>
        </div>

        <div className="flex flex-col divide-y divide-neutral-200">
          {LISTS_DATA.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelectList && onSelectList(item.id)}
              className="py-3.5 first:pt-0 last:pb-0 flex items-start space-x-3 cursor-pointer group"
            >
              {renderListIcon(item.icon, item.color)}
              <div className="flex-1">
                <h4 className="text-[14px] font-bold text-neutral-900 group-hover:text-[#eb5724] transition-colors font-poppins leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] text-neutral-500 leading-normal font-poppins mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-neutral-100">
          <button 
            onClick={() => alert("Explorar todas as listas e rankings da Fast Company Brasil.")}
            className="w-full border border-black text-black py-2 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all cursor-pointer font-poppins"
          >
            VER TODAS AS LISTAS
          </button>
        </div>
      </div>

      {/* 4. Ibmec Education Ad (Mobile & Desktop Sidebar) */}
      <div className="w-full bg-[#0a192f] text-white p-5 border border-neutral-700">
        <div className="text-[9px] text-neutral-400 uppercase font-semibold mb-2 flex justify-between">
          <span>PUBLICIDADE</span>
          <span>IBMEC</span>
        </div>
        <h4 className="text-base font-extrabold uppercase text-white font-poppins leading-tight">
          ENEM: SUA NOTA GARANTE INGRESSO DIRETO
        </h4>
        <p className="text-xs text-neutral-300 font-poppins mt-1">
          Na melhor escola de negócios do Brasil. Cursos de Graduação e Pós-graduação com certificação internacional.
        </p>
        <button 
          onClick={() => alert("Consulte as condições especiais com sua nota do ENEM no Ibmec.")}
          className="mt-4 inline-block bg-[#00ffff] hover:bg-[#38bdf8] text-[#0a192f] font-extrabold text-xs uppercase tracking-wider py-2 px-4 transition-colors font-poppins cursor-pointer"
        >
          SAIBA MAIS
        </button>
      </div>

    </aside>
  );
};

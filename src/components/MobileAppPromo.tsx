import React from 'react';
import { Smartphone, Download, Play } from 'lucide-react';

export const MobileAppPromo: React.FC = () => {
  return (
    <div className="w-full space-y-4 my-6">
      {/* Sky Blue App Promo Banner */}
      <div className="w-full bg-[#00a8ff] text-white rounded-none p-5 relative overflow-hidden shadow-xs">
        <div className="flex flex-col items-center text-center relative z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-900 bg-white/90 px-2.5 py-0.5 rounded mb-2">
            APP FAST COMPANY
          </span>
          <h3 className="text-xl font-extrabold leading-tight tracking-tight font-poppins mb-1">
            O Futuro dos Negócios no Seu Celular Hoje Mesmo
          </h3>
          <p className="text-xs text-white/90 max-w-sm mb-4 font-poppins">
            Baixe o Aplicativo da Revista Fast Company Gratuitamente!
          </p>

          {/* Device Mockup Illustration */}
          <div className="w-full max-w-[280px] h-[140px] relative mb-3 flex items-center justify-center">
            {/* Tablet Mockup */}
            <div className="w-36 h-28 bg-neutral-900 rounded-lg p-1.5 border-2 border-white/80 shadow-lg transform -rotate-6">
              <div className="w-full h-full bg-neutral-800 rounded flex flex-col items-center justify-center p-2 text-center">
                <span className="text-[8px] font-bold text-white tracking-widest">FAST COMPANY</span>
                <span className="text-[10px] font-extrabold text-emerald-400">INOVAÇÃO</span>
                <span className="text-[6px] text-neutral-400">EDIÇÃO DIGITAL</span>
              </div>
            </div>
            {/* Phone Mockup */}
            <div className="w-20 h-32 bg-neutral-900 rounded-xl p-1 border-2 border-white shadow-xl absolute right-8 bottom-0 transform rotate-6">
              <div className="w-full h-full bg-neutral-800 rounded-lg flex flex-col items-center justify-center p-1 text-center">
                <span className="text-[6px] font-bold text-white">MAIS ELEGANTES</span>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 my-1"></div>
              </div>
            </div>
          </div>

          {/* Orange Action Button */}
          <button 
            onClick={() => alert("Redirecionando para download do aplicativo Fast Company.")}
            className="w-full max-w-xs bg-[#f39c12] hover:bg-[#e67e22] text-white font-extrabold text-xs uppercase tracking-widest py-3 px-6 shadow-md transition-all cursor-pointer font-poppins"
          >
            BAIXAR AGORA
          </button>
        </div>
      </div>

      {/* Video Print Ad Card */}
      <div className="w-full bg-black text-white p-4">
        <div className="relative w-full aspect-video bg-neutral-900 flex flex-col items-center justify-center overflow-hidden group cursor-pointer border border-neutral-800">
          {/* Subtle video background animation/play */}
          <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/40 backdrop-blur-xs group-hover:scale-110 transition-transform">
            <Play size={24} className="text-white fill-white ml-1" />
          </div>
          <div className="absolute bottom-3 text-center w-full px-4">
            <p className="text-xs text-neutral-300 font-mono bg-black/70 py-0.5 px-2 rounded inline-block">
              (folheando páginas) - Amamos a mídia impressa.
            </p>
          </div>
        </div>
        <p className="mt-2.5 text-sm font-bold text-white font-poppins">
          O impresso não morreu. Ele está bem aqui.
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import { X, Share2, Bookmark, Clock, ArrowLeft } from 'lucide-react';
import { EditorialImage } from './EditorialImage';
import { Story } from '../data/storiesData';

interface StoryModalProps {
  story: Story | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white text-neutral-900 w-full max-w-3xl rounded-none shadow-2xl relative my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-200 bg-neutral-50">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d63031] font-poppins">
            {story.tag}
          </span>

          <div className="flex items-center space-x-2">
            <button 
              onClick={() => alert("Link copiado para a área de transferência!")}
              className="p-1.5 text-neutral-600 hover:text-black rounded hover:bg-neutral-200 transition-colors"
              title="Compartilhar"
            >
              <Share2 size={16} />
            </button>
            <button 
              onClick={() => alert("Artigo salvo na sua lista de leitura!")}
              className="p-1.5 text-neutral-600 hover:text-black rounded hover:bg-neutral-200 transition-colors"
              title="Salvar"
            >
              <Bookmark size={16} />
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 text-neutral-600 hover:text-black rounded hover:bg-neutral-200 transition-colors ml-2"
              title="Fechar"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-poppins leading-tight mb-3">
            {story.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs text-neutral-500 font-poppins mb-6 pb-4 border-b border-neutral-200">
            <span>Por <strong>Redação Fast Company Brasil</strong></span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock size={12} />
              <span>4 min de leitura</span>
            </span>
          </div>

          <div className="w-full aspect-video mb-6 overflow-hidden rounded-xs bg-neutral-100 shadow-xs">
            <EditorialImage 
              type={story.imageType} 
              alt={story.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none text-neutral-800 font-poppins text-sm sm:text-base leading-relaxed space-y-4">
            <p className="text-lg font-medium text-neutral-700 leading-snug">
              {story.snippet || "A evolução dos modelos operacionais e tecnológicos continua redefinindo prioridades estratégicas no mercado global."}
            </p>
            <p>
              As discussões apresentadas revelam um padrão consistente: líderes que priorizam clareza de propósito aliada à agilidade operacional conseguem antecipar transformações de alto impacto. Na era da inteligência artificial generativa e das rápidas mudanças nas dinâmicas corporativas, a capacidade de discernir ruído de sinal torna-se a principal vantagem competitiva.
            </p>
            <p>
              Estudos recentes demonstram que organizações resilientes não apenas adotam ferramentas inovadoras, mas repensam profundamente os incentivos e fluxos de tomada de decisão. O foco deixa de ser apenas velocidade e passa a englobar precisão, sustentabilidade e valor a longo prazo para clientes e colaboradores.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black font-poppins"
          >
            <ArrowLeft size={14} />
            <span>Voltar para a página</span>
          </button>

          <span className="text-[11px] font-bold text-neutral-500 font-poppins">
            FAST COMPANY BRASIL
          </span>
        </div>
      </div>
    </div>
  );
};

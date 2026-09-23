import React, { useState } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { Story } from '../data/storiesData';
import { EditorialImage } from './EditorialImage';

interface HeaderProps {
  onOpenNewsletter: () => void;
  onSelectCategory?: (category: string) => void;
  onSelectStory?: (story: Story) => void;
}

// Official Fast Company Brasil Vector Logo
const FastCompanyLogo = ({ className = "h-[38px] sm:h-[48px] lg:h-[58px] xl:h-[62px] w-auto" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 424.24 137.37" 
    className={className}
    fill="currentColor"
    aria-label="Fast Company Brasil"
  >
    <path fill="#ffffff" d="M413.34,26.5v-.59H400.1v.59c3.57,3.18,4.64,4.69,4.64,7,0,1.22-.29,2.2-1.28,4.45l-7.6,17.78-9.94-22a8.24,8.24,0,0,1-1-3.51c0-1.57.88-2.45,3.27-3.67v-.59H358.83v.59c6.55,4.84,7.44,6.74,7.44,12.07V72.32l-24.5-46.41H329.6v.59a33.75,33.75,0,0,1,5.28,5.22V72.4c0,4.42-.49,6.34-4,11.59-2.7-3.39-3.29-5-4.66-9.83L312.39,25.91H300.51v.59a21.28,21.28,0,0,1,3.93,4.1L292.94,72c-1.67,6-3,7.81-7.39,12v.59h14.18V84c-4.06-3.08-5.33-4.64-5.33-7.33a17.67,17.67,0,0,1,.84-4.64l1.83-6.66H314.9l2.48,8.76a19.54,19.54,0,0,1,1.07,5c0,1.52-.63,2.54-3.61,4.89v.59h29.72V84c-6.55-4.84-7.43-6.75-7.43-11.59v-37l.14.27,25.87,48.94h5.38v-46c0-4.86.48-6.8,3.86-12a34.84,34.84,0,0,1,5.42,9l10.56,23.34V76.56c0,3.32-.69,4.45-4.64,7.43v.59h17.79V84c-4-3-4.64-4.11-4.64-7.43v-18l8.79-20.48c1.87-4.35,3.28-6.4,7.68-11.58m-99,36.67H297.68l8.18-29.57c.17.5.35,1,.52,1.65ZM292.81,43.46c0-13.2-9.24-17.55-21.75-17.55H254.93v.59c3.91,3.18,4.44,4.11,4.44,7.58V76.41c0,3.47-.53,4.4-4.44,7.58v.59h17.6V84c-4-3-4.65-4.11-4.65-7.43v-15h4.59c11.06,0,20.34-4.7,20.34-18.14m-9.09.4c0,11-2.59,15.59-11,15.59h-4.84V28.06h3.42c9.29,0,12.42,4,12.42,15.8M233.34,84.48l17.41.1V84c-3.92-3.18-4.45-4.11-4.45-7.58V34.08c0-3.47.53-4.4,4.45-7.53V26l-12.32-.1L224.75,69.2l-14-43.29H198.29v.59a34.74,34.74,0,0,1,4.84,4.74v41c0,4.75-.59,6.66-5,11.74v.59h13.94V84c-5.87-4.84-6.7-6.79-6.7-11.74V35.76c.1.28.19.54.29.86l15.7,48.44h.68L237.79,35.2V76.36c0,3.47-.54,4.4-4.45,7.53ZM197.38,55c0-10.22-6.06-17.89-16.13-17.89S165.12,44.78,165.12,55s6.06,17.89,16.13,17.89S197.38,65.07,197.38,55m-8.31,0c0,9.69-.83,16.08-7.82,16.08s-7.82-6.39-7.82-16.08.78-16.08,7.82-16.08,7.82,6.4,7.82,16.08m2-21.85h.69V25.57a97.85,97.85,0,0,0-13.69-1.08c-20.78,0-33.1,11.59-33.1,30.8,0,18.87,11.78,30.56,32.32,30.56A54.41,54.41,0,0,0,191.2,84l1.51-8.36H192c-7.68,6.5-11.11,8-16.68,8C160,83.7,154.87,72.11,154.87,55c0-17.45,5.14-28.11,19.66-28.11,4.64,0,7.92,1.07,16.52,6.26m-51,1.56h.68V25.91h-40v8.75h.68c9.44-6,11.34-6.75,13.54-6.75h1.52V76.56c0,3.32-.69,4.45-4.65,7.43v.59h17.8V84c-4-3-4.65-4.11-4.65-7.43V27.91h1.52c2.2,0,4.11.79,13.54,6.75M97,34.66h.69V26.21a60.21,60.21,0,0,0-10.32-1.08c-9.83,0-14.67,6.55-14.67,13.54,0,8.07,5.24,12.91,11.93,18.48,7.24,6.06,11.49,9.73,11.49,16.72,0,5.77-3.81,9.29-8.89,9.29-4.45,0-8-1.76-17.32-9.1h-.82l3.42,9.54a46.91,46.91,0,0,0,12.62,1.76c11.19,0,17.69-6.8,17.69-16.23,0-8.7-5.09-13.15-12.32-19-6.65-5.38-11.2-9.73-11.2-16a6.47,6.47,0,0,1,6.85-6.84C89,27.28,91,28.4,97,34.66M74.51,64.53,64.3,36.47H55.05V37a16.71,16.71,0,0,1,2.8,3.15l-7.64,23.2c-1.36,4.15-2.24,5.47-5.72,8.7v.59H55.2v-.59c-2.93-1.81-3.91-3-3.91-4.69a13,13,0,0,1,.88-3.86l.67-2.06H65.93l1.2,3.32A11.34,11.34,0,0,1,68,68.54c0,1.22-.84,2.25-3.08,3.52v.59h15v-.59c-3.53-2.89-4.06-3.86-5.38-7.53m-9.27-5H53.47l5.58-17c.25.61.51,1.29.79,2.09ZM51.85,34.66h.69V25.91H18.61v.59c3.91,3.18,4.44,4.11,4.44,7.58V76.41c0,3.47-.53,4.4-4.44,7.58v.59h17.6V84c-4-3-4.65-4.11-4.65-7.43v-21h3.81c5,0,5.87.34,10.12,5.76h.59V47.57h-.59c-4.25,5.42-5.13,5.77-10.12,5.77H31.56V28.06h5.82c2.35,0,4.35.78,14.47,6.6" />
    <path fill="#ffffff" d="M167.62,108.84c0,2.41-1.9,3.8-5.56,3.8h-7.2V98.72h6.8c3.48,0,5.27,1.46,5.27,3.62a3.36,3.36,0,0,1-1.85,3.07A3.42,3.42,0,0,1,167.62,108.84Zm-9.56-7.69v3.28h3.2c1.57,0,2.43-.56,2.43-1.65s-.86-1.63-2.43-1.63Zm6.33,7.36c0-1.18-.9-1.73-2.57-1.73h-3.76v3.44h3.76C163.49,110.22,164.39,109.7,164.39,108.51Z" />
    <path fill="#ffffff" d="M188.49,112.64l-2.68-3.87h-3v3.87h-3.22V98.72h6c3.72,0,6,1.93,6,5.06a4.54,4.54,0,0,1-2.87,4.39l3.12,4.47Zm-3-11.29h-2.62v4.85h2.62c2,0,3-.92,3-2.42S187.44,101.35,185.47,101.35Z" />
    <path fill="#ffffff" d="M213,109.66H206.5l-1.24,3H202l6.21-13.92h3.18l6.22,13.92h-3.38Zm-1-2.45-2.21-5.33-2.21,5.33Z" />
    <path fill="#ffffff" d="M227.48,111.27l1.1-2.43a8.14,8.14,0,0,0,4.59,1.46c1.91,0,2.68-.64,2.68-1.5,0-2.6-8.09-.81-8.09-6,0-2.37,1.91-4.33,5.87-4.33a9.28,9.28,0,0,1,4.83,1.23l-1,2.44a7.89,7.89,0,0,0-3.85-1.09c-1.91,0-2.65.72-2.65,1.59,0,2.57,8.09.8,8.09,5.91,0,2.32-1.92,4.31-5.9,4.31A10,10,0,0,1,227.48,111.27Z" />
    <path fill="#ffffff" d="M250.82,98.72H254v13.92h-3.22Z" />
    <path fill="#ffffff" d="M266.89,98.72h3.22V110h7v2.62h-10.2Z" />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({ 
  onOpenNewsletter, 
  onSelectCategory,
  onSelectStory 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [socialModalOpen, setSocialModalOpen] = useState(false);

  // Default expanded to 'WORK LIFE'
  const [expandedSection, setExpandedSection] = useState<string | null>('WORK LIFE');

  // Articles specifically featured within the WORK LIFE section
  const workLifeStories: Story[] = [
    {
      id: 'drawer-worklife-1',
      tag: 'WORK LIFE',
      title: 'Seu projeto foi um sucesso? Parabéns. Só não fique preso nele para sempre',
      snippet: 'A armadilha do sucesso recente pode cegar lideranças para os próximos desafios críticos do mercado.',
      imageType: 'trophy-award',
      author: 'Redação Fast Company Brasil',
      readTime: '3 min'
    },
    {
      id: 'drawer-worklife-2',
      tag: 'WORK LIFE',
      title: 'Estes 7 livros sobre felicidade podem transformar seu dia a dia',
      snippet: 'Obras consagradas pela neurociência e psicologia trazem ferramentas práticas de foco, calma e realização.',
      imageType: 'books-happiness',
      author: 'Redação Fast Company Brasil',
      readTime: '4 min'
    }
  ];

  const toggleSection = (sectionName: string) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  const handleStoryClick = (story: Story) => {
    if (onSelectStory) {
      onSelectStory(story);
    }
    setMobileMenuOpen(false);
  };

  const handleCategoryNav = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 select-none shadow-md font-poppins">
      
      {/* ========================================================================= */}
      {/* 1. TOP HEADER CONTAINER - EXACT TO IMAGE REFERENCE                        */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#181818] text-white border-b border-[#292929]">
        
        {/* Top Row: [☰ 🔍] ------------- [LOGO] ------------- [NEWSLETTER] */}
        <div className="w-full px-4 sm:px-6 lg:px-[30px] h-[58px] sm:h-[68px] lg:h-[76px] flex items-center justify-between relative">
          
          {/* Left: Burger Menu Icon and Search Icon */}
          <div className="flex items-center space-x-4 sm:space-x-5 shrink-0 z-10">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:text-neutral-300 transition-colors cursor-pointer p-1 focus:outline-none flex flex-col justify-center items-center w-6 h-6 space-y-[4px]"
              aria-label="Abrir menu de navegação"
            >
              <span className="block w-[20px] h-[1.5px] bg-white"></span>
              <span className="block w-[20px] h-[1.5px] bg-white"></span>
              <span className="block w-[20px] h-[1.5px] bg-white"></span>
            </button>

            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-neutral-300 transition-colors cursor-pointer p-1 focus:outline-none flex items-center justify-center"
              aria-label="Buscar"
            >
              <Search size={19} strokeWidth={1.5} className="text-white" />
            </button>
          </div>

          {/* Center: Official Logo (Fast Company Brasil) - Grand Editorial Proportion */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto">
            <a 
              href="#" 
              className="flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Fast Company Brasil"
            >
              <FastCompanyLogo className="h-[36px] sm:h-[46px] lg:h-[56px] xl:h-[60px] w-auto" />
            </a>
          </div>

          {/* Right: Institutional links */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-7 text-[12px] sm:text-[12.5px] font-semibold tracking-wider uppercase z-10 text-white font-poppins">
            <button 
              onClick={() => setSocialModalOpen(!socialModalOpen)}
              className="hidden md:inline-block hover:text-neutral-300 transition-colors cursor-pointer"
            >
              REDES SOCIAIS
            </button>

            <button 
              onClick={onOpenNewsletter}
              className="hover:text-neutral-300 transition-colors cursor-pointer text-white font-bold tracking-wider"
            >
              NEWSLETTER
            </button>

            <button 
              onClick={() => alert("Entre em contato com nossa equipe comercial: publicidade@fastcompanybrasil.com")}
              className="hidden sm:inline-block hover:text-neutral-300 transition-colors cursor-pointer"
            >
              ANUNCIE AQUI
            </button>
          </div>

        </div>

        {/* Bottom Row: Centered Editorial Categories Navigation (No divider line between logo and menu items) */}
        <div className="w-full hidden md:block pb-3 pt-0">
          <div className="w-full px-[30px] flex items-center justify-center">
            <nav className="flex items-center space-x-6 lg:space-x-8 text-[12px] font-bold tracking-wider uppercase text-white">
              
              <button 
                onClick={() => handleCategoryNav('TECH')} 
                className="hover:text-neutral-300 transition-colors cursor-pointer"
              >
                TECH
              </button>

              <button 
                onClick={() => handleCategoryNav('IA')} 
                className="hover:text-neutral-300 transition-colors cursor-pointer"
              >
                IA
              </button>

              <button 
                onClick={() => handleCategoryNav('MONEY')} 
                className="hover:text-neutral-300 transition-colors cursor-pointer flex items-center"
              >
                <span>MONEY</span>
                <span className="text-[9px] ml-1.5 leading-none">▾</span>
              </button>

              <button 
                onClick={() => handleCategoryNav('IMPACTO')} 
                className="hover:text-neutral-300 transition-colors cursor-pointer"
              >
                IMPACTO
              </button>

              <button 
                onClick={() => handleCategoryNav('DESIGN')} 
                className="hover:text-neutral-300 transition-colors cursor-pointer"
              >
                DESIGN
              </button>

              <button 
                onClick={() => handleCategoryNav('WORK LIFE')} 
                className="hover:text-neutral-300 transition-colors cursor-pointer"
              >
                WORK LIFE
              </button>

              <button 
                onClick={() => handleCategoryNav('VIDEOS')} 
                className="hover:text-neutral-300 transition-colors cursor-pointer"
              >
                VIDEOS
              </button>

              <button 
                onClick={() => handleCategoryNav('EVENTOS')} 
                className="hover:text-neutral-300 transition-colors cursor-pointer flex items-center"
              >
                <span>EVENTOS</span>
                <span className="text-[9px] ml-1.5 leading-none">▾</span>
              </button>

              {/* Separator Pipe */}
              <span className="text-neutral-500 font-light select-none px-1">|</span>

              {/* FastCo Works with round 'W' Monogram badge */}
              <button 
                onClick={() => handleCategoryNav('FASTCO WORKS')}
                className="hover:text-neutral-300 transition-colors cursor-pointer flex items-center space-x-1.5 font-bold tracking-wider"
              >
                <span className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[9px] font-black leading-none shrink-0 shadow-xs">
                  W
                </span>
                <span>FASTCO WORKS</span>
                <span className="text-[9px] ml-1 leading-none">▾</span>
              </button>

            </nav>
          </div>
        </div>

      </div>

      {/* Social Links Dropdown Popover */}
      {socialModalOpen && (
        <div className="bg-[#1c1c1c] text-white border-b border-neutral-700 py-3 px-[30px] animate-in fade-in duration-150">
          <div className="w-full flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-neutral-400 font-medium">Siga a Fast Company Brasil nas redes:</span>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/fastcompanybrasil" target="_blank" rel="noreferrer" className="hover:text-neutral-300 font-bold">Instagram</a>
              <a href="https://linkedin.com/company/fastcompanybrasil" target="_blank" rel="noreferrer" className="hover:text-neutral-300 font-bold">LinkedIn</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-neutral-300 font-bold">YouTube</a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-neutral-300 font-bold">WhatsApp</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-neutral-300 font-bold">X (Twitter)</a>
            </div>
            <button 
              onClick={() => setSocialModalOpen(false)}
              className="text-neutral-400 hover:text-white text-xs font-bold"
            >
              ✕ Fechar
            </button>
          </div>
        </div>
      )}

      {/* Search Input Bar */}
      {searchOpen && (
        <div className="bg-[#1b1b1b] border-b border-neutral-700 px-4 py-3 animate-in slide-in-from-top-2 duration-150">
          <div className="max-w-[800px] mx-auto flex items-center space-x-3">
            <Search size={18} className="text-neutral-400 shrink-0" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar por artigos, temas, líderes, inovação..." 
              className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-neutral-500 font-poppins"
              autoFocus
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-neutral-400 hover:text-white"
              >
                Limpar
              </button>
            )}
            <button 
              onClick={() => setSearchOpen(false)}
              className="text-xs uppercase tracking-wider font-bold text-neutral-400 hover:text-white px-2 py-1 bg-neutral-800 rounded-xs"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. VERTICAL BURGER MENU DRAWER - EXACT LAYOUT OF IMAGE 2                  */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          
          {/* Drawer Wrapper (Mobile: Full Width; Desktop: max 480px) */}
          <div className="w-full max-w-full sm:max-w-[440px] lg:max-w-[480px] h-full bg-white flex flex-col shadow-2xl relative overflow-hidden">
            
            {/* Drawer Header Bar (Dark charcoal bar with [✕] and [🔍] - Exactly as Image 2) */}
            <div className="w-full bg-[#242424] text-white px-4 sm:px-6 h-[52px] flex items-center space-x-5 shrink-0 border-b border-neutral-800">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-neutral-300 transition-colors p-1 cursor-pointer focus:outline-none"
                aria-label="Fechar menu"
              >
                <X size={20} strokeWidth={1.3} />
              </button>

              <button 
                onClick={() => setSearchOpen(true)}
                className="text-white hover:text-neutral-300 transition-colors p-1 cursor-pointer focus:outline-none"
                aria-label="Pesquisar"
              >
                <Search size={18} strokeWidth={1.3} />
              </button>
            </div>

            {/* Scrollable White Menu Body with custom scrollbar */}
            <div className="flex-1 overflow-y-auto bg-white divide-y divide-neutral-200 font-poppins selection:bg-neutral-900 selection:text-white">
              
              {/* 1. REDES E COMUNIDADES */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('REDES E COMUNIDADES')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                    REDES E COMUNIDADES
                  </span>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'REDES E COMUNIDADES' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'REDES E COMUNIDADES' && (
                  <div className="px-5 pb-5 pt-1 bg-neutral-50/50">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[13px] font-bold tracking-wider text-neutral-800">
                      <a href="https://instagram.com/fastcompanybrasil" target="_blank" rel="noreferrer" className="hover:text-black">INSTAGRAM</a>
                      <a href="https://linkedin.com/company/fastcompanybrasil" target="_blank" rel="noreferrer" className="hover:text-black">LINKEDIN</a>
                      <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-black">YOUTUBE</a>
                      <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-black">WHATSAPP</a>
                      <button onClick={onOpenNewsletter} className="text-left hover:text-black">NEWSLETTER</button>
                      <a href="#podcasts" className="hover:text-black">PODCASTS</a>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. TECH / IA */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('TECH / IA')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                    TECH / IA
                  </span>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'TECH / IA' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'TECH / IA' && (
                  <div className="px-5 pb-5 pt-1 bg-neutral-50/50">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[13px] font-bold tracking-wider text-neutral-800 mb-4">
                      <button onClick={() => handleCategoryNav('IA')} className="text-left hover:text-black">INTELIGÊNCIA ARTIFICIAL</button>
                      <button onClick={() => handleCategoryNav('TECH')} className="text-left hover:text-black">BIG TECH</button>
                      <button onClick={() => handleCategoryNav('TECH')} className="text-left hover:text-black">STARTUPS</button>
                      <button onClick={() => handleCategoryNav('TECH')} className="text-left hover:text-black">CIBERSEGURANÇA</button>
                      <button onClick={() => handleCategoryNav('TECH')} className="text-left hover:text-black">ROBÓTICA</button>
                      <button onClick={() => handleCategoryNav('TECH')} className="text-left hover:text-black">WEB3</button>
                    </div>
                    <div className="flex justify-end pt-2 border-t border-neutral-200">
                      <button 
                        onClick={() => handleCategoryNav('TECH')} 
                        className="text-[13px] font-bold tracking-wider text-neutral-900 hover:text-black flex items-center space-x-1"
                      >
                        <span>+ TECH / IA</span>
                        <ChevronRight size={14} className="stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. WORK LIFE - EXPANDED BY DEFAULT AS IN IMAGE 2 */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('WORK LIFE')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                    WORK LIFE
                  </span>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'WORK LIFE' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'WORK LIFE' && (
                  <div className="px-5 pb-6 pt-1">
                    
                    {/* 2-Column Subcategories List (Image 2) */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 mb-6 text-[13px] font-bold tracking-wider text-neutral-900">
                      {/* Left Column */}
                      <div className="flex flex-col space-y-3.5">
                        <button onClick={() => handleCategoryNav('BEM-ESTAR')} className="text-left hover:text-black transition-colors">
                          BEM-ESTAR
                        </button>
                        <button onClick={() => handleCategoryNav('FUTURO DO TRABALHO')} className="text-left hover:text-black transition-colors">
                          FUTURO DO TRABALHO
                        </button>
                        <button onClick={() => handleCategoryNav('LIDERANÇA')} className="text-left hover:text-black transition-colors">
                          LIDERANÇA
                        </button>
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col space-y-3.5">
                        <button onClick={() => handleCategoryNav('CARREIRA')} className="text-left hover:text-black transition-colors">
                          CARREIRA
                        </button>
                        <button onClick={() => handleCategoryNav('NEUROCIÊNCIA')} className="text-left hover:text-black transition-colors">
                          NEUROCIÊNCIA
                        </button>
                        <button onClick={() => handleCategoryNav('50+')} className="text-left hover:text-black transition-colors">
                          50+
                        </button>
                      </div>
                    </div>

                    {/* 2 Featured Articles exactly from Image 2 */}
                    <div className="space-y-4 mb-5">
                      
                      {/* Article 1: Trophy image + "Seu projeto foi um sucesso? Parabéns. Só não fique preso nele para sempre" */}
                      <article 
                        onClick={() => handleStoryClick(workLifeStories[0])}
                        className="flex items-start space-x-3.5 group cursor-pointer"
                      >
                        <div className="w-[125px] sm:w-[135px] h-[80px] sm:h-[85px] shrink-0 overflow-hidden bg-neutral-200 shadow-xs">
                          <EditorialImage 
                            type="trophy-award" 
                            alt={workLifeStories[0].title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-[14px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors">
                          {workLifeStories[0].title}
                        </h3>
                      </article>

                      {/* Article 2: Colorful books + "Estes 7 livros sobre felicidade podem transformar seu dia a dia" */}
                      <article 
                        onClick={() => handleStoryClick(workLifeStories[1])}
                        className="flex items-start space-x-3.5 group cursor-pointer"
                      >
                        <div className="w-[125px] sm:w-[135px] h-[80px] sm:h-[85px] shrink-0 overflow-hidden bg-neutral-200 shadow-xs">
                          <EditorialImage 
                            type="books-happiness" 
                            alt={workLifeStories[1].title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-[14px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors">
                          {workLifeStories[1].title}
                        </h3>
                      </article>

                    </div>

                    {/* Bottom Right Link: + WORK LIFE → */}
                    <div className="flex justify-end pt-2">
                      <button 
                        onClick={() => handleCategoryNav('WORK LIFE')}
                        className="text-[13px] font-bold uppercase tracking-wider text-neutral-900 hover:text-black flex items-center space-x-1 cursor-pointer"
                      >
                        <span>+ WORK LIFE</span>
                        <span className="text-base leading-none ml-0.5">→</span>
                      </button>
                    </div>

                  </div>
                )}
              </div>

              {/* 4. DESIGN */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('DESIGN')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                    DESIGN
                  </span>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'DESIGN' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'DESIGN' && (
                  <div className="px-5 pb-5 pt-1 bg-neutral-50/50">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[13px] font-bold tracking-wider text-neutral-800 mb-3">
                      <button onClick={() => handleCategoryNav('ARQUITETURA')} className="text-left hover:text-black">ARQUITETURA</button>
                      <button onClick={() => handleCategoryNav('BRANDING')} className="text-left hover:text-black">BRANDING</button>
                      <button onClick={() => handleCategoryNav('DESIGN GRÁFICO')} className="text-left hover:text-black">DESIGN GRÁFICO</button>
                      <button onClick={() => handleCategoryNav('UX / UI')} className="text-left hover:text-black">UX / UI</button>
                    </div>
                    <div className="flex justify-end pt-2 border-t border-neutral-200">
                      <button 
                        onClick={() => handleCategoryNav('DESIGN')} 
                        className="text-[13px] font-bold tracking-wider text-neutral-900 hover:text-black flex items-center space-x-1"
                      >
                        <span>+ DESIGN</span>
                        <span className="text-base leading-none ml-0.5">→</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. IMPACTO */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('IMPACTO')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                    IMPACTO
                  </span>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'IMPACTO' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'IMPACTO' && (
                  <div className="px-5 pb-5 pt-1 bg-neutral-50/50">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[13px] font-bold tracking-wider text-neutral-800 mb-3">
                      <button onClick={() => handleCategoryNav('ESG')} className="text-left hover:text-black">ESG</button>
                      <button onClick={() => handleCategoryNav('CLIMA')} className="text-left hover:text-black">CLIMA</button>
                      <button onClick={() => handleCategoryNav('DIVERSIDADE')} className="text-left hover:text-black">DIVERSIDADE</button>
                      <button onClick={() => handleCategoryNav('INCLUSÃO')} className="text-left hover:text-black">INCLUSÃO</button>
                    </div>
                    <div className="flex justify-end pt-2 border-t border-neutral-200">
                      <button 
                        onClick={() => handleCategoryNav('IMPACTO')} 
                        className="text-[13px] font-bold tracking-wider text-neutral-900 hover:text-black flex items-center space-x-1"
                      >
                        <span>+ IMPACTO</span>
                        <span className="text-base leading-none ml-0.5">→</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 6. MONEY */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('MONEY')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                    MONEY
                  </span>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'MONEY' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'MONEY' && (
                  <div className="px-5 pb-5 pt-1 bg-neutral-50/50">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[13px] font-bold tracking-wider text-neutral-800 mb-3">
                      <button onClick={() => handleCategoryNav('INVESTIMENTOS')} className="text-left hover:text-black">INVESTIMENTOS</button>
                      <button onClick={() => handleCategoryNav('VENTURE CAPITAL')} className="text-left hover:text-black">VENTURE CAPITAL</button>
                      <button onClick={() => handleCategoryNav('MERCADOS')} className="text-left hover:text-black">MERCADOS</button>
                      <button onClick={() => handleCategoryNav('CRIPTOMOEDAS')} className="text-left hover:text-black">CRIPTOMOEDAS</button>
                    </div>
                    <div className="flex justify-end pt-2 border-t border-neutral-200">
                      <button 
                        onClick={() => handleCategoryNav('MONEY')} 
                        className="text-[13px] font-bold tracking-wider text-neutral-900 hover:text-black flex items-center space-x-1"
                      >
                        <span>+ MONEY</span>
                        <span className="text-base leading-none ml-0.5">→</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 7. VIDEOS */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('VIDEOS')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                    VIDEOS
                  </span>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'VIDEOS' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'VIDEOS' && (
                  <div className="px-5 pb-5 pt-1 bg-neutral-50/50">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[13px] font-bold tracking-wider text-neutral-800">
                      <button onClick={() => handleCategoryNav('VIDEOS')} className="text-left hover:text-black">ENTREVISTAS</button>
                      <button onClick={() => handleCategoryNav('VIDEOS')} className="text-left hover:text-black">DOCUMENTÁRIOS</button>
                    </div>
                  </div>
                )}
              </div>

              {/* 8. EVENTOS */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('EVENTOS')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                    EVENTOS
                  </span>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'EVENTOS' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'EVENTOS' && (
                  <div className="px-5 pb-5 pt-1 bg-neutral-50/50">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[13px] font-bold tracking-wider text-neutral-800">
                      <button onClick={() => handleCategoryNav('EVENTOS')} className="text-left hover:text-black">INNOVATION FESTIVAL</button>
                      <button onClick={() => handleCategoryNav('EVENTOS')} className="text-left hover:text-black">FAST TALKS</button>
                    </div>
                  </div>
                )}
              </div>

              {/* 9. FASTCO WORKS */}
              <div className="w-full">
                <button
                  onClick={() => toggleSection('FASTCO WORKS')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[9px] font-black">
                      W
                    </span>
                    <span className="text-[15px] font-black uppercase tracking-wider text-neutral-950">
                      FASTCO WORKS
                    </span>
                  </div>
                  <span className="text-xl font-bold text-neutral-800 w-5 text-center leading-none">
                    {expandedSection === 'FASTCO WORKS' ? '—' : '+'}
                  </span>
                </button>

                {expandedSection === 'FASTCO WORKS' && (
                  <div className="px-5 pb-5 pt-1 bg-neutral-50/50">
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[13px] font-bold tracking-wider text-neutral-800">
                      <button onClick={() => handleCategoryNav('FASTCO WORKS')} className="text-left hover:text-black">PROJETOS ESPECIAIS</button>
                      <button onClick={() => handleCategoryNav('FASTCO WORKS')} className="text-left hover:text-black">MÍDIA KIT</button>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Footer Area inside the Drawer */}
            <div className="p-5 bg-neutral-100 border-t border-neutral-200 shrink-0">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNewsletter();
                }}
                className="w-full bg-[#1b1b1b] hover:bg-black text-white font-extrabold text-xs uppercase tracking-widest py-3 px-4 shadow-sm transition-colors cursor-pointer"
              >
                ASSINAR NEWSLETTER
              </button>
            </div>

          </div>

          {/* Clickable Backdrop to close */}
          <div 
            className="flex-1 cursor-pointer" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

        </div>
      )}

    </header>
  );
};

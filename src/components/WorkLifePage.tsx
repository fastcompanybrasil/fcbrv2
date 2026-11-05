import React, { useState } from 'react';
import { Story } from '../data/storiesData';

interface WorkLifePageProps {
  onSelectStory: (story: Story) => void;
  onGoHome?: () => void;
}

export const WorkLifePage: React.FC<WorkLifePageProps> = ({ onSelectStory }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('TODOS');
  const [activeTab, setActiveTab] = useState<'mais-lidas' | 'trends'>('mais-lidas');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filterPills = [
    'BEM-ESTAR',
    'FUTURO DO TRABALHO',
    'LIDERANÇA',
    'CARREIRA',
    '50+'
  ];

  return (
    <div className="w-full bg-white text-neutral-900 pb-16 font-poppins">
      
      {/* 1. Header Title & Subtitle */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8 pb-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-[46px] font-black text-neutral-950 tracking-tight font-poppins">
          Work Life
        </h1>
        <p className="text-xs sm:text-[13.5px] text-neutral-600 mt-2 font-normal font-poppins max-w-2xl mx-auto leading-relaxed">
          Orientações sobre carreira e liderança, histórias de sucessos e fracassos e o futuro do trabalho
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mt-5">
          {filterPills.map((pill) => {
            const isSelected = selectedFilter === pill;
            return (
              <button
                key={pill}
                type="button"
                onClick={() => setSelectedFilter(isSelected ? 'TODOS' : pill)}
                className={`px-3.5 py-1 rounded-full text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-800 hover:text-neutral-900'
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Top Section: 8 Cols (2 Featured Heroes) + 4 Cols (Sidebar Ad + Mais Lidas) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT COLUMN: 2 FEATURED HEROES (8 Cols) ================= */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Featured Article 1: Os Antigos e a Felicidade */}
            <article
              onClick={() => onSelectStory({
                id: 'wl-featured-1',
                tag: 'BEM-ESTAR',
                title: 'O que os antigos sabiam sobre felicidade? 5 práticas que ainda fazem sentido',
                snippet: 'Da filosofia estoica às tradições orientais, lições milenares ganham validação na neurociência e ajudam a redefinir o equilíbrio entre trabalho e propósito.',
                imageType: 'ancient-happiness'
              })}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image: Ancient Egyptian / Stone Relief Artwork */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-200 shadow-xs">
                <svg viewBox="0 0 800 450" className="w-full h-full object-cover transform group-hover:scale-[1.015] transition-transform duration-500 ease-out" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="egypt-glow" cx="40%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#b45309" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#78350f" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#451a03" />
                    </radialGradient>
                    <filter id="stone-texture">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                      <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0.25 0" />
                      <feComposite in2="SourceGraphic" in="gl" operator="in" />
                    </filter>
                    <linearGradient id="relief-gold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#d97706" />
                      <stop offset="50%" stopColor="#b45309" />
                      <stop offset="100%" stopColor="#92400e" />
                    </linearGradient>
                  </defs>

                  {/* Sandstone wall background with texture */}
                  <rect width="800" height="450" fill="url(#egypt-glow)" />

                  {/* Faint Hieroglyphs on the right background */}
                  <g fill="#92400e" opacity="0.4" transform="translate(420, 40)">
                    {/* Ankh symbol */}
                    <ellipse cx="60" cy="50" rx="14" ry="20" fill="none" stroke="#b45309" strokeWidth="6" />
                    <line x1="60" y1="70" x2="60" y2="130" stroke="#b45309" strokeWidth="8" />
                    <line x1="30" y1="85" x2="90" y2="85" stroke="#b45309" strokeWidth="7" />
                    {/* Eye of Horus stylized */}
                    <path d="M 160 50 Q 210 20 260 50 Q 210 80 160 50 Z" fill="none" stroke="#b45309" strokeWidth="6" />
                    <circle cx="210" cy="50" r="10" fill="#b45309" />
                    <path d="M 210 50 L 210 95 Q 230 110 240 90" fill="none" stroke="#b45309" strokeWidth="5" />
                    {/* Scarab / Sun rays */}
                    <circle cx="180" cy="180" r="28" fill="#92400e" />
                    <circle cx="180" cy="180" r="20" fill="#78350f" />
                    <path d="M 220 180 Q 280 150 310 220 Q 270 210 220 180 Z" fill="#b45309" opacity="0.6" />
                    <path d="M 80 200 L 120 250 L 40 250 Z" fill="#78350f" opacity="0.5" />
                    <line x1="40" y1="280" x2="300" y2="280" stroke="#78350f" strokeWidth="4" />
                    <line x1="60" y1="310" x2="280" y2="310" stroke="#78350f" strokeWidth="3" />
                  </g>

                  {/* Majestic Egyptian Pharaoh / Queen Bas-Relief Carving (Left side) */}
                  <g transform="translate(40, -10)">
                    {/* Nemes Headdress / Crown */}
                    <path d="M 120 120 C 130 60, 220 40, 270 70 C 310 95, 330 150, 310 220 L 320 380 L 140 460 L 100 320 Z" fill="#78350f" stroke="#451a03" strokeWidth="4" />
                    {/* Headdress horizontal banded ridges */}
                    {[80, 105, 130, 155, 180, 205, 230, 255, 280, 305, 330, 355, 380].map((y, i) => (
                      <line key={i} x1={120 + (i % 3) * 5} y1={y} x2={290 - (i % 4) * 8} y2={y + 12} stroke="#451a03" strokeWidth="5" opacity="0.85" />
                    ))}
                    {/* Face Profile Carving in Stone */}
                    <path d="M 270 70 C 290 80, 310 100, 315 140 L 320 170 L 340 185 L 315 200 L 335 235 L 305 255 L 325 285 L 290 320 L 270 380 L 180 430" fill="#b45309" stroke="#451a03" strokeWidth="6" />
                    {/* Kohl Line Eye */}
                    <path d="M 255 160 Q 285 145 305 165 Q 285 178 255 160 Z" fill="#291406" />
                    <path d="M 305 165 L 335 158" stroke="#291406" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="280" cy="162" r="5" fill="#fef3c7" />
                    {/* Carved Eyebrow */}
                    <path d="M 250 145 Q 285 130 325 140" fill="none" stroke="#291406" strokeWidth="6" strokeLinecap="round" />
                    {/* Lips & Nose contour */}
                    <path d="M 312 235 Q 325 240 310 248" stroke="#451a03" strokeWidth="4" fill="none" />
                    <path d="M 300 290 Q 325 295 305 310" stroke="#451a03" strokeWidth="5" fill="none" />
                    {/* Ear with earring */}
                    <ellipse cx="230" cy="220" rx="14" ry="24" fill="#92400e" stroke="#451a03" strokeWidth="4" />
                    <circle cx="230" cy="246" r="6" fill="#f59e0b" />
                  </g>

                  {/* Vignette Shadow Frame */}
                  <rect width="800" height="450" fill="none" stroke="#000" strokeWidth="8" opacity="0.3" />
                </svg>
              </div>

              {/* Tag / Kicker */}
              <span className="block text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mt-3.5 mb-1.5">
                BEM-ESTAR
              </span>

              {/* Title in Merriweather Bold (Circled in red in screenshot) */}
              <h2 className="text-[22px] sm:text-[27px] md:text-[31px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.22] font-merriweather tracking-tight">
                O que os antigos sabiam sobre felicidade? 5 práticas que ainda fazem sentido
              </h2>
            </article>

            {/* Featured Article 2: 5 Comportamentos */}
            <article
              onClick={() => onSelectStory({
                id: 'wl-featured-2',
                tag: 'WORK LIFE',
                title: '5 comportamentos que podem estar impedindo seu crescimento profissional',
                snippet: 'Procrastinação velada, receio de pedir feedbacks difíceis e falta de posicionamento estratégico: saiba como diagnosticar e romper os ciclos de estagnação na carreira.',
                imageType: 'growth-blockers'
              })}
              className="group cursor-pointer flex flex-col pt-2"
            >
              {/* Image: Silhouette against intense sunset sky */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-950 border border-neutral-200 shadow-xs">
                <svg viewBox="0 0 800 450" className="w-full h-full object-cover transform group-hover:scale-[1.015] transition-transform duration-500 ease-out" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="sunset-vivid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e11d48" />
                      <stop offset="35%" stopColor="#f43f5e" />
                      <stop offset="55%" stopColor="#ea580c" />
                      <stop offset="75%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                    <radialGradient id="sun-horizon" cx="50%" cy="65%" r="50%">
                      <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                      <stop offset="40%" stopColor="#f97316" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </radialGradient>
                    <filter id="soft-glow">
                      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Vivid sunset backdrop */}
                  <rect width="800" height="450" fill="url(#sunset-vivid)" />
                  <rect width="800" height="450" fill="url(#sun-horizon)" />

                  {/* Subtle horizontal cloud streaks in sky */}
                  <path d="M 0 140 Q 200 120 450 145 T 800 135" stroke="#fecdd3" strokeWidth="8" opacity="0.35" fill="none" />
                  <path d="M 0 210 Q 300 195 550 215 T 800 200" stroke="#fef08a" strokeWidth="12" opacity="0.3" fill="none" />
                  <path d="M 0 270 Q 250 260 500 275 T 800 265" stroke="#fb923c" strokeWidth="16" opacity="0.35" fill="none" />

                  {/* Mysterious Human Silhouette looking back */}
                  <g transform="translate(240, 90)">
                    {/* Head / Hair silhouette */}
                    <path d="M 140 100 C 130 50, 185 20, 215 50 C 235 70, 245 100, 230 135 C 220 155, 205 160, 195 165 C 215 180, 250 210, 280 270 C 310 330, 330 380, 345 420 L -30 420 C -15 360, 10 310, 50 250 C 85 195, 115 170, 140 150 Z" fill="#09090b" />
                    {/* Contoured glow rim along profile */}
                    <path d="M 140 100 C 130 50, 185 20, 215 50 C 235 70, 245 100, 230 135 C 220 155, 205 160, 195 165 C 215 180, 250 210, 280 270 C 310 330, 330 380, 345 420" fill="none" stroke="#f43f5e" strokeWidth="3" opacity="0.6" filter="url(#soft-glow)" />
                    {/* Ear outline */}
                    <ellipse cx="185" cy="115" rx="7" ry="12" fill="#09090b" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
                  </g>

                  {/* Dark base ground */}
                  <rect y="415" width="800" height="35" fill="#050505" />
                </svg>
              </div>

              {/* Tag / Kicker */}
              <span className="block text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mt-3.5 mb-1.5">
                WORK LIFE
              </span>

              {/* Title in Merriweather Bold (Circled in red in screenshot) */}
              <h2 className="text-[22px] sm:text-[27px] md:text-[31px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.22] font-merriweather tracking-tight">
                5 comportamentos que podem estar impedindo seu crescimento profissional
              </h2>
            </article>

          </div>

          {/* ================= RIGHT COLUMN: SIDEBAR WIDGETS (4 Cols) ================= */}
          <div className="lg:col-span-4 space-y-7">
            
            {/* Widget 1: Sponsored Quote Card (Jorge Pacheco, CEO do STATE) */}
            <div className="relative bg-[#fafafa] border border-neutral-200/90 p-6 sm:p-7 shadow-xs">
              {/* Ad indicator top right */}
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] text-neutral-400 font-medium">
                <span className="text-[#3b82f6]">ⓘ</span>
              </div>

              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-900 leading-snug font-poppins text-center font-normal">
                <strong className="text-[#dc2626] font-bold block mb-1">
                  Jorge Pacheco, <br /> CEO do STATE,
                </strong>
                fala sobre a volta do espaço físico à estratégia das empresas — e o que acontece quando 120 negócios compartilham o mesmo espaço.
              </p>
            </div>

            {/* Widget 2: Tabbed List ("Mais Lidas ↓" / "Trends") */}
            <div className="border border-neutral-200 bg-white shadow-2xs">
              
              {/* Tabs Header */}
              <div className="grid grid-cols-2 border-b border-neutral-200 text-xs font-bold uppercase tracking-wider font-poppins">
                <button
                  type="button"
                  onClick={() => setActiveTab('mais-lidas')}
                  className={`py-3 text-center cursor-pointer transition-colors flex items-center justify-center gap-1 ${
                    activeTab === 'mais-lidas'
                      ? 'text-neutral-950 border-b-2 border-neutral-950 -mb-[1px] bg-white font-extrabold'
                      : 'text-neutral-400 hover:text-neutral-700 bg-neutral-50/50'
                  }`}
                >
                  <span>Mais Lidas</span>
                  <span className="text-[11px]">↓</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('trends')}
                  className={`py-3 text-center cursor-pointer transition-colors ${
                    activeTab === 'trends'
                      ? 'text-neutral-950 border-b-2 border-neutral-950 -mb-[1px] bg-white font-extrabold'
                      : 'text-neutral-400 hover:text-neutral-700 bg-neutral-50/50'
                  }`}
                >
                  Trends
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-neutral-100 p-4 space-y-4">
                
                {/* Item 1 */}
                <article
                  onClick={() => onSelectStory({
                    id: 'mr-wl-1',
                    number: 1,
                    tag: 'TECH',
                    title: 'Comandante da Marinha detalha plano de armas a laser em todos os navios',
                    snippet: 'O almirante Daryl Caudle detalha como armas de energia dirigida ampliam arsenais e barateiam a defesa naval.',
                    imageType: 'navy-laser'
                  })}
                  className="flex items-start gap-3 cursor-pointer group pt-1 first:pt-0"
                >
                  <span className="text-2xl font-black text-neutral-300 group-hover:text-neutral-900 leading-none shrink-0 w-4 font-poppins">
                    1
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[9.5px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-poppins">
                      TECH
                    </span>
                    <h3 className="text-[12.5px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-snug font-merriweather">
                      Comandante da Marinha detalha plano de armas a laser em todos os navios
                    </h3>
                  </div>
                  {/* Thumbnail: Laser ship */}
                  <div className="w-16 h-11 shrink-0 bg-neutral-900 overflow-hidden rounded-xs border border-neutral-200">
                    <svg viewBox="0 0 100 70" className="w-full h-full object-cover">
                      <rect width="100" height="70" fill="#0f172a" />
                      <line x1="10" y1="55" x2="90" y2="55" stroke="#38bdf8" strokeWidth="2" opacity="0.4" />
                      <polygon points="20,55 35,40 65,40 80,55" fill="#334155" />
                      <line x1="50" y1="40" x2="85" y2="15" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx="85" cy="15" r="4" fill="#67e8f9" />
                    </svg>
                  </div>
                </article>

                {/* Item 2 */}
                <article
                  onClick={() => onSelectStory({
                    id: 'mr-wl-2',
                    number: 2,
                    tag: 'WORKLIFE',
                    title: 'Como identificar quem parece brilhante em reuniões, mas está apenas fingindo',
                    snippet: 'Um guia prático para reconhecer técnicas de presença corporativa e separar substância de encenação.',
                    imageType: 'meeting-faking'
                  })}
                  className="flex items-start gap-3 cursor-pointer group pt-3"
                >
                  <span className="text-2xl font-black text-neutral-300 group-hover:text-neutral-900 leading-none shrink-0 w-4 font-poppins">
                    2
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[9.5px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-poppins">
                      WORKLIFE
                    </span>
                    <h3 className="text-[12.5px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-snug font-merriweather">
                      Como identificar quem parece brilhante em reuniões, mas está apenas fingindo
                    </h3>
                  </div>
                  {/* Thumbnail: Meeting discussion */}
                  <div className="w-16 h-11 shrink-0 bg-neutral-100 overflow-hidden rounded-xs border border-neutral-200">
                    <svg viewBox="0 0 100 70" className="w-full h-full object-cover">
                      <rect width="100" height="70" fill="#e0f2fe" />
                      <circle cx="35" cy="30" r="12" fill="#0284c7" />
                      <circle cx="65" cy="30" r="12" fill="#38bdf8" />
                      <rect x="25" y="45" width="50" height="15" rx="3" fill="#0369a1" />
                    </svg>
                  </div>
                </article>

                {/* Item 3 */}
                <article
                  onClick={() => onSelectStory({
                    id: 'mr-wl-3',
                    number: 3,
                    tag: 'WORKLIFE',
                    title: 'Pare de pedir criatividade à IA. Peça precisão e exatidão',
                    snippet: 'Estamos usando a IA ao contrário: em vez de pedir criação artística, deveríamos delegar tarefas analíticas.',
                    imageType: 'ai-precision'
                  })}
                  className="flex items-start gap-3 cursor-pointer group pt-3"
                >
                  <span className="text-2xl font-black text-neutral-300 group-hover:text-neutral-900 leading-none shrink-0 w-4 font-poppins">
                    3
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[9.5px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-poppins">
                      WORKLIFE
                    </span>
                    <h3 className="text-[12.5px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-snug font-merriweather">
                      Pare de pedir criatividade à IA. Peça precisão e exatidão
                    </h3>
                  </div>
                  {/* Thumbnail: Target with glowing rings */}
                  <div className="w-16 h-11 shrink-0 bg-neutral-950 overflow-hidden rounded-xs border border-neutral-200">
                    <svg viewBox="0 0 100 70" className="w-full h-full object-cover">
                      <rect width="100" height="70" fill="#09090b" />
                      <circle cx="50" cy="35" r="24" fill="none" stroke="#ea580c" strokeWidth="4" />
                      <circle cx="50" cy="35" r="16" fill="none" stroke="#f59e0b" strokeWidth="4" />
                      <circle cx="50" cy="35" r="8" fill="#38bdf8" />
                    </svg>
                  </div>
                </article>

                {/* Item 4 */}
                <article
                  onClick={() => onSelectStory({
                    id: 'mr-wl-4',
                    number: 4,
                    tag: 'NEWS',
                    title: 'Retrocesso climático de Trump: 157 cidades avançam na direção oposta',
                    snippet: 'Pesquisadores mapearam mais de 1.400 políticas municipais de energia limpa e combate a ondas de calor.',
                    imageType: 'climate-cities'
                  })}
                  className="flex items-start gap-3 cursor-pointer group pt-3"
                >
                  <span className="text-2xl font-black text-neutral-300 group-hover:text-neutral-900 leading-none shrink-0 w-4 font-poppins">
                    4
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[9.5px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-poppins">
                      NEWS
                    </span>
                    <h3 className="text-[12.5px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-snug font-merriweather">
                      Retrocesso climático de Trump: 157 cidades avançam na direção oposta
                    </h3>
                  </div>
                  {/* Thumbnail: City network points */}
                  <div className="w-16 h-11 shrink-0 bg-neutral-950 overflow-hidden rounded-xs border border-neutral-200">
                    <svg viewBox="0 0 100 70" className="w-full h-full object-cover">
                      <rect width="100" height="70" fill="#042f2e" />
                      <circle cx="30" cy="25" r="4" fill="#2dd4bf" />
                      <circle cx="65" cy="40" r="5" fill="#34d399" />
                      <circle cx="80" cy="20" r="3" fill="#14b8a6" />
                      <line x1="30" y1="25" x2="65" y2="40" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.6" />
                      <line x1="65" y1="40" x2="80" y2="20" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.6" />
                    </svg>
                  </div>
                </article>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Full-Width Separator Line */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 my-10">
        <hr className="border-t border-neutral-300" />
      </div>

      {/* 4. Mid-Page FastCo Works Banner (LinkedIn) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mb-12">
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#006097] via-[#0284c7] to-[#0369a1] text-white p-6 sm:p-8 lg:p-10 shadow-sm border border-neutral-200">
          
          {/* Ad Badge top right */}
          <div className="absolute top-2.5 right-2.5 text-[10px] text-white/70">
            <span>ⓘ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Text */}
            <div className="md:col-span-7">
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-white text-[#006097] flex items-center justify-center text-[10px] font-black leading-none shrink-0 shadow-xs">
                  W
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/90 font-poppins">
                  FASTCO WORKS
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-poppins leading-tight tracking-tight">
                LinkedIn lança agente de IA para facilitar contratações
              </h2>
            </div>

            {/* Right: LinkedIn Visual & Team Graphics */}
            <div className="md:col-span-5 flex items-center justify-center md:justify-end">
              <div className="relative w-full max-w-[340px] h-36 flex items-center justify-center">
                {/* 3D Giant LinkedIn logo */}
                <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-xs border border-white/40 flex items-center justify-center shadow-lg transform -rotate-6">
                  <span className="text-white text-5xl font-black font-poppins">in</span>
                </div>
                {/* Team Silhouettes illustration */}
                <div className="absolute right-0 flex items-end space-x-1">
                  <div className="w-14 h-24 bg-neutral-900/60 rounded-t-lg backdrop-blur-xs flex items-center justify-center text-xs text-white">
                    👔
                  </div>
                  <div className="w-16 h-28 bg-neutral-900/70 rounded-t-lg backdrop-blur-xs flex items-center justify-center text-xs text-white">
                    💻
                  </div>
                  <div className="w-14 h-22 bg-neutral-900/50 rounded-t-lg backdrop-blur-xs flex items-center justify-center text-xs text-white">
                    💼
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 5. 3-Column Editorial Grid (4 rows = 12 articles) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          
          {/* ================= ROW 1 ================= */}
          {/* Card 1 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-1',
              tag: 'BEM-ESTAR',
              title: 'Ler por prazer pode ajudar a preservar a saúde do cérebro ao longo da vida, aponta estudo',
              snippet: 'Pesquisadores de Harvard concluem que o hábito da leitura recreativa ativa conexões neurais protetivas contra o declínio cognitivo.',
              imageType: 'reading-pleasure'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <defs>
                  <linearGradient id="read-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="100%" stopColor="#fde68a" />
                  </linearGradient>
                </defs>
                <rect width="600" height="375" fill="url(#read-bg)" />
                {/* Person reading book */}
                <g transform="translate(150, 40)">
                  <path d="M 50 140 Q 150 110 250 140 L 250 280 Q 150 250 50 280 Z" fill="#ffffff" stroke="#d97706" strokeWidth="3" />
                  <line x1="150" y1="125" x2="150" y2="265" stroke="#b45309" strokeWidth="4" />
                  {/* Text lines */}
                  {[160, 180, 200, 220, 240].map((y, i) => (
                    <g key={i}>
                      <line x1="75" y1={y} x2="135" y2={y} stroke="#cbd5e1" strokeWidth="2.5" />
                      <line x1="165" y1={y} x2="225" y2={y} stroke="#cbd5e1" strokeWidth="2.5" />
                    </g>
                  ))}
                  {/* Hands holding */}
                  <ellipse cx="60" cy="240" rx="18" ry="12" fill="#d97706" opacity="0.8" />
                  <ellipse cx="240" cy="240" rx="18" ry="12" fill="#d97706" opacity="0.8" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              BEM-ESTAR
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Ler por prazer pode ajudar a preservar a saúde do cérebro ao longo da vida, aponta estudo
            </h3>
          </article>

          {/* Card 2 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-2',
              tag: 'WORK LIFE',
              title: 'Dropbox estuda exercícios de memória para evitar dependência da IA no trabalho',
              snippet: 'Iniciativa interna testa pausas deliberadas sem auxílio de assistentes para fortalecer raciocínio crítico e retenção.',
              imageType: 'dropbox-memory'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-950 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <defs>
                  <linearGradient id="think-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <rect width="600" height="375" fill="url(#think-bg)" />
                {/* Puzzle pieces pattern background */}
                <g stroke="#60a5fa" strokeWidth="1.5" opacity="0.4" fill="none">
                  <path d="M 50 50 L 150 50 Q 170 30 190 50 L 290 50" />
                  <path d="M 290 50 L 290 150 Q 310 170 290 190 L 290 290" />
                  <path d="M 50 150 L 150 150 Q 170 170 190 150 L 290 150" />
                </g>
                {/* Classical Thinker statue silhouette blueprint */}
                <g transform="translate(200, 40)" fill="#bfdbfe" opacity="0.85">
                  <circle cx="100" cy="80" r="35" />
                  <path d="M 80 115 L 120 115 L 150 250 L 50 250 Z" />
                  <path d="M 60 140 L 95 105 L 105 130 Z" stroke="#1d4ed8" strokeWidth="3" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              WORK LIFE
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Dropbox estuda exercícios de memória para evitar dependência da IA no trabalho
            </h3>
          </article>

          {/* Card 3 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-3',
              tag: 'WORK LIFE',
              title: 'Empresa oferece US$ 2 mil para quem puxar conversa com desconhecidos por 30 dias',
              snippet: 'Experimento social investiga o impacto de interações espontâneas na diminuição do estresse corporativo e empatia interpessoal.',
              imageType: 'talking-strangers'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <defs>
                  <linearGradient id="talk-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <rect width="600" height="375" fill="url(#talk-bg)" />
                {/* Two figures conversing with speech bubbles */}
                <g transform="translate(80, 50)">
                  {/* Figure 1 */}
                  <circle cx="110" cy="110" r="40" fill="#1e293b" />
                  <path d="M 60 260 C 60 180, 160 180, 160 260 Z" fill="#0f172a" />
                  {/* Figure 2 */}
                  <circle cx="330" cy="100" r="38" fill="#f8fafc" />
                  <path d="M 280 260 C 280 170, 380 170, 380 260 Z" fill="#ffffff" />
                  {/* Speech bubbles */}
                  <rect x="150" y="40" width="80" height="45" rx="10" fill="#ffffff" />
                  <polygon points="170,85 185,85 165,100" fill="#ffffff" />
                  <rect x="235" y="90" width="70" height="40" rx="10" fill="#fbbf24" />
                  <polygon points="260,130 275,130 280,145" fill="#fbbf24" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              WORK LIFE
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Empresa oferece US$ 2 mil para quem puxar conversa com desconhecidos por 30 dias
            </h3>
          </article>

          {/* ================= ROW 2 ================= */}
          {/* Card 4 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-4',
              tag: 'BEM-ESTAR',
              title: 'Quantas realidades existem na nossa mente? O que a ciência descobriu sobre o cérebro',
              snippet: 'Novas técnicas de imageamento funcional mostram como modelos preditivos internos constroem percepções divergentes do mesmo evento.',
              imageType: 'brain-realities'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-900 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <defs>
                  <linearGradient id="bio-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <rect width="600" height="375" fill="#18181b" />
                {/* Scientific petri dish with glowing pink cells */}
                <circle cx="300" cy="187" r="130" fill="none" stroke="#f43f5e" strokeWidth="8" opacity="0.6" />
                <circle cx="300" cy="187" r="115" fill="url(#bio-bg)" opacity="0.85" />
                {/* Glowing cerebral folds */}
                <path d="M 240 160 Q 280 120 320 160 T 360 200 Q 320 240 270 210 Z" fill="#ffffff" opacity="0.4" />
                <circle cx="300" cy="187" r="25" fill="#fde047" opacity="0.8" />
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              BEM-ESTAR
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Quantas realidades existem na nossa mente? O que a ciência descobriu sobre o cérebro
            </h3>
          </article>

          {/* Card 5 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-5',
              tag: 'BEM-ESTAR',
              title: 'Dia de Finados: conheça os diferentes tipos de luto e como eles se manifestam',
              snippet: 'Psicólogos explicam que acolher a dor em suas diversas fases é etapa fundamental para ressignificar vínculos e preservar a saúde emocional.',
              imageType: 'grief-types'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-950 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <rect width="600" height="375" fill="#09090b" />
                {/* Dramatic B&W portrait in reflection */}
                <g transform="translate(180, 40)">
                  <ellipse cx="120" cy="130" rx="65" ry="90" fill="#27272a" />
                  <path d="M 50 300 C 50 200, 190 200, 190 300 Z" fill="#18181b" />
                  {/* Light contour highlighting bowed head */}
                  <path d="M 75 75 Q 120 45 165 75" stroke="#71717a" strokeWidth="4" fill="none" />
                  <line x1="120" y1="120" x2="120" y2="180" stroke="#52525b" strokeWidth="4" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              BEM-ESTAR
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Dia de Finados: conheça os diferentes tipos de luto e como eles se manifestam
            </h3>
          </article>

          {/* Card 6 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-6',
              tag: 'BEM-ESTAR',
              title: 'Como a leitura de ficção pode transformar a forma como lidamos com outras pessoas?',
              snippet: 'Mergulhar em narrativas ficcionais exercita a teoria da mente e amplia repertórios de negociação e resolução de conflitos.',
              imageType: 'fiction-reading'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <defs>
                  <linearGradient id="fict-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <rect width="600" height="375" fill="url(#fict-bg)" />
                {/* Book stack and shared hands */}
                <g transform="translate(160, 60)">
                  <rect x="40" y="140" width="200" height="35" rx="4" fill="#ffffff" stroke="#042f2e" strokeWidth="2" />
                  <rect x="60" y="95" width="160" height="45" rx="4" fill="#fef08a" stroke="#042f2e" strokeWidth="2" />
                  <rect x="80" y="50" width="120" height="45" rx="4" fill="#fb7185" stroke="#042f2e" strokeWidth="2" />
                  <line x1="140" y1="50" x2="140" y2="175" stroke="#042f2e" strokeWidth="3" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              BEM-ESTAR
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Como a leitura de ficção pode transformar a forma como lidamos com outras pessoas?
            </h3>
          </article>

          {/* ================= ROW 3 ================= */}
          {/* Card 7 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-7',
              tag: 'BEM-ESTAR',
              title: 'Quer ser mais feliz? Estas 3 perguntas ajudam a entender o que importa',
              snippet: 'Questionamentos estruturados ajudam a separar objetivos impostos por pressões externas das verdadeiras fontes de contentamento.',
              imageType: 'happiness-questions'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-yellow-400 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <rect width="600" height="375" fill="#facc15" />
                {/* Emoji smileys and question marks */}
                <g transform="translate(100, 60)">
                  {/* Smiley 1 */}
                  <circle cx="80" cy="110" r="45" fill="#fef08a" stroke="#ca8a04" strokeWidth="4" />
                  <circle cx="65" cy="100" r="5" fill="#713f12" />
                  <circle cx="95" cy="100" r="5" fill="#713f12" />
                  <path d="M 65 125 Q 80 145 95 125" stroke="#713f12" strokeWidth="4" fill="none" />
                  {/* Smiley 2 */}
                  <circle cx="320" cy="120" r="45" fill="#fef08a" stroke="#ca8a04" strokeWidth="4" />
                  <circle cx="305" cy="110" r="5" fill="#713f12" />
                  <circle cx="335" cy="110" r="5" fill="#713f12" />
                  <path d="M 305 135 Q 320 155 335 135" stroke="#713f12" strokeWidth="4" fill="none" />
                  {/* 3D Question Marks */}
                  <text x="180" y="160" fill="#a855f7" fontSize="95" fontWeight="900" fontFamily="sans-serif">?</text>
                  <text x="230" y="220" fill="#ec4899" fontSize="85" fontWeight="900" fontFamily="sans-serif">?</text>
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              BEM-ESTAR
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Quer ser mais feliz? Estas 3 perguntas ajudam a entender o que importa
            </h3>
          </article>

          {/* Card 8 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-8',
              tag: 'BEM-ESTAR',
              title: 'O que é cozymaxxing? 5 maneiras de aderir à tendência do conforto',
              snippet: 'Movimento que prioriza aconchego, desaceleração e ambientes sensoriais reconfortantes ganha força contra o esgotamento digital.',
              imageType: 'cozymaxxing'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-amber-900 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <defs>
                  <linearGradient id="cozy-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>
                </defs>
                <rect width="600" height="375" fill="url(#cozy-bg)" />
                {/* Warm candle, tea mug and cozy blanket */}
                <g transform="translate(180, 80)">
                  {/* Table */}
                  <rect x="-40" y="170" width="340" height="60" fill="#451a03" />
                  {/* Candle */}
                  <rect x="40" y="90" width="35" height="80" rx="4" fill="#fef3c7" />
                  <path d="M 57 70 Q 65 80 57 90 Q 50 80 57 70 Z" fill="#f59e0b" />
                  {/* Steaming Mug */}
                  <rect x="150" y="100" width="60" height="70" rx="6" fill="#f8fafc" />
                  <path d="M 210 115 C 230 115, 230 145, 210 145" stroke="#f8fafc" strokeWidth="8" fill="none" />
                  {/* Steam trails */}
                  <path d="M 165 90 Q 170 75 165 60" stroke="#fef08a" strokeWidth="3" fill="none" />
                  <path d="M 185 85 Q 190 70 185 55" stroke="#fef08a" strokeWidth="3" fill="none" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              BEM-ESTAR
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              O que é cozymaxxing? 5 maneiras de aderir à tendência do conforto
            </h3>
          </article>

          {/* Card 9 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-9',
              tag: 'WORK LIFE',
              title: 'Quando a inteligência artificial vira commodity, o que gera valor?',
              snippet: 'À medida que modelos avançados se tornam acessíveis a qualquer concorrente, o diferencial competitivo volta a ser julgamento humano e gosto refinado.',
              imageType: 'ai-commodity'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-950 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <rect width="600" height="375" fill="#0f172a" />
                {/* Checkered floor perspective */}
                <g fill="#334155" opacity="0.6">
                  <polygon points="100,375 200,375 260,250 200,250" />
                  <polygon points="300,375 400,375 360,250 300,250" />
                  <polygon points="500,375 600,375 460,250 400,250" />
                </g>
                {/* Floating glowing lightbulb with "AI" */}
                <g transform="translate(250, 60)">
                  <circle cx="50" cy="60" r="45" fill="#f43f5e" opacity="0.85" />
                  <circle cx="50" cy="60" r="32" fill="#ffffff" />
                  <text x="50" y="68" fill="#e11d48" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">AI</text>
                  <rect x="35" y="105" width="30" height="18" fill="#94a3b8" rx="2" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              WORK LIFE
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Quando a inteligência artificial vira commodity, o que gera valor?
            </h3>
          </article>

          {/* ================= ROW 4 ================= */}
          {/* Card 10 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-10',
              tag: 'WORK LIFE',
              title: 'Stephen King, mestre do terror, revela lição sobre disciplina que vale para qualquer carreira',
              snippet: 'O prolífico autor americano compartilha rotinas inflexíveis de produção que desmistificam a dependência de inspiração.',
              imageType: 'stephen-king'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-900 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <defs>
                  <linearGradient id="king-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0f766e" />
                    <stop offset="100%" stopColor="#134e4a" />
                  </linearGradient>
                </defs>
                <rect width="600" height="375" fill="url(#king-bg)" />
                {/* Book cover graphic with red typography */}
                <g transform="translate(160, 40)">
                  <rect x="0" y="0" width="180" height="260" rx="6" fill="#1e293b" stroke="#e11d48" strokeWidth="4" />
                  <text x="90" y="60" fill="#f43f5e" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">STEPHEN</text>
                  <text x="90" y="100" fill="#ffffff" fontSize="34" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">KING</text>
                  <line x1="30" y1="120" x2="150" y2="120" stroke="#f43f5e" strokeWidth="4" />
                  <circle cx="90" cy="180" r="35" fill="#e11d48" opacity="0.6" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              WORK LIFE
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Stephen King, mestre do terror, revela lição sobre disciplina que vale para qualquer carreira
            </h3>
          </article>

          {/* Card 11 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-11',
              tag: 'WORK LIFE',
              title: 'Mentes que brilham, virtudes que se apagam',
              snippet: 'Quando a hipercompetitividade ofusca valores éticos essenciais: como evitar a erosão da cultura organizacional em equipes de alta performance.',
              imageType: 'bright-minds'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-purple-950 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <defs>
                  <linearGradient id="mind-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4c1d95" />
                    <stop offset="100%" stopColor="#581c87" />
                  </linearGradient>
                </defs>
                <rect width="600" height="375" fill="url(#mind-bg)" />
                {/* Two confronting silhouettes with purple particles */}
                <g transform="translate(140, 50)">
                  <path d="M 60 240 C 60 140, 140 140, 140 240 Z" fill="#1e1b4b" />
                  <circle cx="100" cy="110" r="35" fill="#312e81" />
                  <path d="M 260 240 C 260 140, 180 140, 180 240 Z" fill="#1e1b4b" />
                  <circle cx="220" cy="110" r="35" fill="#312e81" />
                  {/* Glowing central beam */}
                  <line x1="160" y1="60" x2="160" y2="240" stroke="#c084fc" strokeWidth="3" strokeDasharray="6 4" />
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              WORK LIFE
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Mentes que brilham, virtudes que se apagam
            </h3>
          </article>

          {/* Card 12 */}
          <article
            onClick={() => onSelectStory({
              id: 'wl-grid-12',
              tag: 'WORK LIFE',
              title: 'Sheryl Sandberg alerta para avanço da machosfera no ambiente de trabalho',
              snippet: 'Ex-COO da Meta analisa o impacto de discursos misóginos digitais na segurança psicológica de executivas e propõe medidas institucionais de proteção.',
              imageType: 'sandberg-alert'
            })}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-950 border border-neutral-200/80 mb-3 shadow-2xs">
              <svg viewBox="0 0 600 375" className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300">
                <rect width="600" height="375" fill="#18181b" />
                {/* Woman at computer with red silhouettes and warning symbol */}
                <g transform="translate(130, 40)">
                  {/* Menacing red silhouettes */}
                  <ellipse cx="60" cy="120" rx="35" ry="45" fill="#991b1b" opacity="0.6" />
                  <ellipse cx="280" cy="120" rx="35" ry="45" fill="#991b1b" opacity="0.6" />
                  {/* Central professional figure */}
                  <circle cx="170" cy="120" r="30" fill="#f8fafc" />
                  <path d="M 125 240 C 125 170, 215 170, 215 240 Z" fill="#0284c7" />
                  {/* Warning Exclamation Triangle */}
                  <polygon points="170,40 195,85 145,85" fill="#ef4444" />
                  <text x="170" y="78" fill="#ffffff" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">!</text>
                </g>
              </svg>
            </div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
              WORK LIFE
            </span>
            <h3 className="text-[16.5px] sm:text-[18px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
              Sheryl Sandberg alerta para avanço da machosfera no ambiente de trabalho
            </h3>
          </article>

        </div>

        {/* 6. Centered "VER MAIS" Button */}
        <div className="flex justify-center mt-12 mb-16">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-[#eb5724] hover:bg-[#d64818] text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-xs transition-colors cursor-pointer font-poppins shadow-xs"
          >
            VER MAIS
          </button>
        </div>

      </div>

      {/* 7. Bottom Fast Co Auto Tech Banner (Matching screenshot) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="relative bg-[#1f2227] text-white p-6 sm:p-7 border border-neutral-700 shadow-sm">
          
          {/* Ad badge */}
          <div className="absolute top-2.5 right-2.5 text-[10px] text-white/50">
            <span>ⓘ</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Logo on Left (3 Cols) */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
              <div className="border border-white/30 px-5 py-3 text-center">
                <span className="block text-xs font-bold uppercase tracking-widest text-white/80 font-poppins">
                  FAST CO
                </span>
                <span className="block text-base font-black uppercase tracking-wider text-white font-poppins">
                  AUTO TECH
                </span>
              </div>
            </div>

            {/* 3 Auto Tech Articles (9 Cols) */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="w-full aspect-[16/10] bg-neutral-800 overflow-hidden mb-2 rounded-xs">
                  <svg viewBox="0 0 400 250" className="w-full h-full object-cover">
                    <defs>
                      <linearGradient id="ev-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#78350f" />
                        <stop offset="100%" stopColor="#9a3412" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="250" fill="url(#ev-grad)" />
                    {/* Car Silhouette charging */}
                    <path d="M 60 170 Q 120 110 240 110 L 320 140 L 350 180 L 50 180 Z" fill="#ffffff" opacity="0.8" />
                    <circle cx="110" cy="180" r="22" fill="#18181b" />
                    <circle cx="280" cy="180" r="22" fill="#18181b" />
                    {/* Charging cable */}
                    <path d="M 320 140 Q 360 140 370 90" stroke="#22c55e" strokeWidth="6" fill="none" />
                  </svg>
                </div>
                <h4 className="text-[12.5px] font-bold text-white group-hover:text-[#eb5724] transition-colors leading-snug font-poppins">
                  Carros elétricos em condomínios: quem paga e como instalar carregadores?
                </h4>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="w-full aspect-[16/10] bg-neutral-800 overflow-hidden mb-2 rounded-xs">
                  <svg viewBox="0 0 400 250" className="w-full h-full object-cover">
                    <defs>
                      <linearGradient id="vtol-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0284c7" />
                        <stop offset="100%" stopColor="#0369a1" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="250" fill="url(#vtol-grad)" />
                    {/* eVTOL Flying Car in sky */}
                    <ellipse cx="200" cy="120" rx="90" ry="25" fill="#ffffff" />
                    <circle cx="130" cy="100" r="16" fill="#38bdf8" />
                    <circle cx="270" cy="100" r="16" fill="#38bdf8" />
                    <line x1="90" y1="80" x2="170" y2="80" stroke="#ffffff" strokeWidth="4" />
                    <line x1="230" y1="80" x2="310" y2="80" stroke="#ffffff" strokeWidth="4" />
                  </svg>
                </div>
                <h4 className="text-[12.5px] font-bold text-white group-hover:text-[#eb5724] transition-colors leading-snug font-poppins">
                  Anac avança na regulamentação de "carros voadores"
                </h4>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="w-full aspect-[16/10] bg-neutral-800 overflow-hidden mb-2 rounded-xs">
                  <svg viewBox="0 0 400 250" className="w-full h-full object-cover">
                    <defs>
                      <linearGradient id="wm-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#c2410c" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="250" fill="url(#wm-grad)" />
                    {/* Walmart blue truck & EV station */}
                    <rect x="70" y="110" width="160" height="80" rx="4" fill="#0284c7" />
                    <rect x="250" y="80" width="40" height="110" rx="4" fill="#f8fafc" />
                    <circle cx="270" cy="105" r="10" fill="#22c55e" />
                    <line x1="270" y1="125" x2="230" y2="145" stroke="#facc15" strokeWidth="5" />
                  </svg>
                </div>
                <h4 className="text-[12.5px] font-bold text-white group-hover:text-[#eb5724] transition-colors leading-snug font-poppins">
                  Walmart quer construir sua própria rede de recarga para carros elétricos
                </h4>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

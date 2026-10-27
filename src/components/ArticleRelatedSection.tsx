import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Story } from '../data/storiesData';

interface ArticleRelatedSectionProps {
  onSelectStory: (story: Story) => void;
}

export const AuthorBio: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-12 pt-5 border-t border-neutral-200 border-b pb-5 max-w-[680px]">
      <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-2">
        SOBRE A AUTORA
      </span>
      <p className="text-[13.5px] leading-relaxed text-neutral-700 font-poppins">
        Camila de Lira é editora-chefe da Fast Company Brasil e jornalista formada pela ECA-USP. Cobre tecnologia, inteligência artificial, in
        {!expanded ? (
          <>
            ...{' '}
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="text-[#eb5724] font-medium hover:underline cursor-pointer inline font-poppins"
            >
              saiba mais
            </button>
          </>
        ) : (
          <span>
            ovação e o impacto dos criadores na economia global de negócios há mais de uma década.
          </span>
        )}
      </p>
    </div>
  );
};

export const RelatedStoriesSection: React.FC<ArticleRelatedSectionProps> = ({ onSelectStory }) => {
  const relatedStories: Array<Story & { imageRenderer: React.ReactNode }> = [
    {
      id: "related-youtube-amazon",
      tag: "CREATORS & TECH",
      title: "YouTube libera integração com Amazon para criadores brasileiros",
      snippet: "Nova parceria permite vincular produtos e catálogos da Amazon diretamente aos vídeos e transmissões ao vivo no YouTube Brasil.",
      imageType: "custom",
      imageRenderer: (
        <svg viewBox="0 0 600 375" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="yt-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="60%" stopColor="#f5a623" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <pattern id="yt-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d97706" strokeWidth="0.6" strokeOpacity="0.45" />
            </pattern>
            <filter id="shadow-box" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="3" dy="6" stdDeviation="5" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Background Grid */}
          <rect width="600" height="375" fill="url(#yt-bg)" />
          <rect width="600" height="375" fill="url(#yt-grid)" />

          {/* Left: Professional Camera on Tripod */}
          <g transform="translate(60, 80)">
            {/* Tripod Legs */}
            <line x1="120" y1="130" x2="50" y2="295" stroke="#1f2937" strokeWidth="8" strokeLinecap="round" />
            <line x1="120" y1="130" x2="120" y2="295" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
            <line x1="120" y1="130" x2="190" y2="295" stroke="#1f2937" strokeWidth="8" strokeLinecap="round" />
            {/* Tripod Head & Level */}
            <circle cx="120" cy="125" r="14" fill="#374151" />
            <rect x="100" y="105" width="40" height="22" rx="3" fill="#111827" />
            <text x="120" y="120" fill="#9ca3af" fontSize="7" fontWeight="bold" textAnchor="middle">Velbon</text>

            {/* Camera Body */}
            <rect x="70" y="20" width="100" height="75" rx="8" fill="#1f2937" filter="url(#shadow-box)" />
            {/* Camera Top Dial */}
            <rect x="85" y="12" width="20" height="9" rx="2" fill="#374151" />
            <rect x="135" y="14" width="24" height="7" rx="2" fill="#4b5563" />
            {/* Camera Lens */}
            <rect x="170" y="32" width="35" height="50" rx="4" fill="#111827" />
            <rect x="205" y="37" width="10" height="40" rx="2" fill="#374151" />
            {/* Viewfinder Screen flipped out */}
            <rect x="40" y="25" width="85" height="60" rx="4" fill="#000" />
            <rect x="43" y="28" width="79" height="54" rx="2" fill="#fbbf24" />
            {/* Silhouette inside screen */}
            <circle cx="82" cy="50" r="12" fill="#111827" />
            <path d="M 68 78 Q 82 66 96 78 Z" fill="#111827" />
            {/* REC indicator */}
            <circle cx="50" cy="35" r="3" fill="#dc2626" />
            <text x="56" y="37" fill="#dc2626" fontSize="5" fontWeight="bold">REC</text>

            {/* YouTube Badge on camera */}
            <g transform="translate(100, 72)">
              <rect width="36" height="15" rx="3.5" fill="#dc2626" />
              <polygon points="15,4 15,11 22,7.5" fill="#ffffff" />
            </g>
          </g>

          {/* Right: Amazon Cardboard Delivery Boxes */}
          <g transform="translate(290, 70)" filter="url(#shadow-box)">
            {/* First angled carton box */}
            <g transform="rotate(-15, 120, 160)">
              {/* Box Front */}
              <polygon points="40,90 140,55 140,210 40,240" fill="#d49a6a" />
              {/* Box Top */}
              <polygon points="40,90 140,55 200,85 100,120" fill="#e2af82" />
              {/* Box Side */}
              <polygon points="140,55 200,85 200,230 140,210" fill="#b87b4b" />
              {/* Blue Prime Packing Tape */}
              <polygon points="90,72 150,42 165,49 105,79" fill="#0284c7" />
              <text x="130" y="66" fill="#ffffff" fontSize="9" fontWeight="black" transform="rotate(-16, 130, 66)">prime</text>
              {/* Amazon Smile Arrow */}
              <path d="M 60 170 Q 95 195 125 155" fill="none" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
              <polygon points="120,150 132,152 128,164" fill="#111827" />
              {/* Barcode */}
              <rect x="55" y="110" width="30" height="15" fill="#ffffff" opacity="0.9" />
              <line x1="60" y1="112" x2="60" y2="123" stroke="#000" strokeWidth="1.5" />
              <line x1="64" y1="112" x2="64" y2="123" stroke="#000" strokeWidth="2.5" />
              <line x1="70" y1="112" x2="70" y2="123" stroke="#000" strokeWidth="1" />
              <line x1="74" y1="112" x2="74" y2="123" stroke="#000" strokeWidth="2" />
              <line x1="80" y1="112" x2="80" y2="123" stroke="#000" strokeWidth="1.5" />
            </g>

            {/* Second upright box leaning */}
            <g transform="translate(90, 50)">
              <polygon points="40,80 130,50 130,200 40,225" fill="#c98a58" />
              <polygon points="40,80 130,50 180,75 90,105" fill="#dba070" />
              <polygon points="130,50 180,75 180,215 130,200" fill="#a8683a" />
              {/* Amazon smile */}
              <path d="M 60 160 Q 88 180 115 148" fill="none" stroke="#111827" strokeWidth="3.5" strokeLinecap="round" />
              <polygon points="110,143 121,146 117,156" fill="#111827" />
              {/* YouTube badge tag */}
              <g transform="translate(50, 115)">
                <rect width="40" height="16" rx="4" fill="#dc2626" />
                <polygon points="18,4 18,12 26,8" fill="#ffffff" />
                <text x="38" y="12" fill="#ffffff" fontSize="8" fontWeight="bold">YT</text>
              </g>
            </g>
          </g>
        </svg>
      )
    },
    {
      id: "related-seo-geo",
      tag: "CREATORS & TECH",
      title: "O caminho do SEO para o GEO",
      snippet: "Entenda a evolução da otimização para motores de busca rumo aos motores de IA generativa (Generative Engine Optimization).",
      imageType: "custom",
      imageRenderer: (
        <svg viewBox="0 0 600 375" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="geo-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#6d28d9" />
              <stop offset="100%" stopColor="#581c87" />
            </linearGradient>
            <filter id="geo-glow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Background */}
          <rect width="600" height="375" fill="url(#geo-bg)" />

          {/* Giant Background Typography GEO / SEO */}
          <text x="70" y="220" fill="#9333ea" opacity="0.45" fontSize="220" fontWeight="900" fontFamily="sans-serif">G</text>
          <text x="60" y="340" fill="#9333ea" opacity="0.35" fontSize="180" fontWeight="900" fontFamily="sans-serif">S</text>
          <text x="280" y="340" fill="#9333ea" opacity="0.35" fontSize="180" fontWeight="900" fontFamily="sans-serif">E</text>
          <text x="440" y="340" fill="#9333ea" opacity="0.35" fontSize="180" fontWeight="900" fontFamily="sans-serif">O</text>

          {/* Center Graphic & UI Dashboard Cards */}
          <g transform="translate(180, 50)" filter="url(#geo-glow)">
            {/* Main Window */}
            <rect x="0" y="0" width="250" height="180" rx="12" fill="#f8fafc" />
            {/* Header bar */}
            <rect x="0" y="0" width="250" height="32" rx="12" fill="#e2e8f0" />
            <circle cx="16" cy="16" r="4" fill="#ef4444" />
            <circle cx="28" cy="16" r="4" fill="#eab308" />
            <circle cx="40" cy="16" r="4" fill="#22c55e" />

            {/* Floating Search Bar */}
            <rect x="25" y="46" width="200" height="26" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="38" y1="59" x2="110" y2="59" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />

            {/* Dashboard blocks */}
            <rect x="25" y="85" width="70" height="40" rx="6" fill="#f1f5f9" />
            <rect x="105" y="85" width="120" height="15" rx="4" fill="#e2e8f0" />
            <rect x="105" y="108" width="80" height="15" rx="4" fill="#e2e8f0" />

            {/* Red YouTube Video Badge */}
            <g transform="translate(115, 60)">
              <rect width="36" height="24" rx="6" fill="#dc2626" filter="url(#geo-glow)" />
              <polygon points="15,7 15,17 23,12" fill="#ffffff" />
            </g>

            {/* Blue Upload Arrow Badge */}
            <g transform="translate(185, 20)">
              <circle cx="20" cy="20" r="20" fill="#2563eb" filter="url(#geo-glow)" />
              <path d="M 20 10 L 20 28 M 13 17 L 20 10 L 27 17" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Yellow Cog / Settings Gear */}
            <g transform="translate(15, 140)">
              <circle cx="16" cy="16" r="14" fill="#eab308" />
              <circle cx="16" cy="16" r="6" fill="#ffffff" />
            </g>
            <g transform="translate(50, 150)">
              <circle cx="12" cy="12" r="10" fill="#f59e0b" />
              <circle cx="12" cy="12" r="4" fill="#ffffff" />
            </g>

            {/* Purple User Avatar Pill */}
            <g transform="translate(170, 130)">
              <circle cx="16" cy="16" r="16" fill="#7c3aed" />
              <circle cx="16" cy="12" r="5" fill="#ffffff" />
              <path d="M 8 26 Q 16 19 24 26" fill="#ffffff" />
            </g>

            {/* Magnifying Glass SEO */}
            <g transform="translate(70, 50)">
              <circle cx="36" cy="36" r="28" fill="none" stroke="#1e293b" strokeWidth="7" />
              <circle cx="36" cy="36" r="24" fill="#38bdf8" fillOpacity="0.2" />
              <line x1="56" y1="56" x2="82" y2="82" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
              <circle cx="28" cy="28" r="6" fill="#ffffff" fillOpacity="0.6" />
            </g>
          </g>
        </svg>
      )
    },
    {
      id: "related-eleicoes-2026",
      tag: "CREATORS & TECH",
      title: "A eleição de 2026 termina. Nas redes, a campanha de 2030 já começou",
      snippet: "Como algoritmos, influenciadores e inteligência artificial antecipam os ciclos políticos e redefinem o engajamento cívico.",
      imageType: "custom",
      imageRenderer: (
        <svg viewBox="0 0 600 375" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="elec-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="60%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="phone-grad-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="phone-grad-2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="phone-grad-3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
            <linearGradient id="phone-grad-4" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="soft-sh" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="2" dy="5" stdDeviation="5" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Textured Mint/Green background */}
          <rect width="600" height="375" fill="url(#elec-bg)" />

          {/* Giant "2030" White typography */}
          <text x="300" y="220" textAnchor="middle" fill="#ffffff" fontSize="165" fontWeight="900" fontFamily="sans-serif" letterSpacing="-4" filter="url(#soft-sh)">
            2030
          </text>

          {/* Center Ramp & Mannequin with Presidential Sash */}
          <g transform="translate(300, 240)">
            {/* White ramp column */}
            <rect x="-24" y="-70" width="48" height="150" fill="#ffffff" opacity="0.9" />
            <line x1="-24" y1="-70" x2="-24" y2="80" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="24" y1="-70" x2="24" y2="80" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="0" y1="-70" x2="0" y2="80" stroke="#94a3b8" strokeWidth="3" />

            {/* Dark mannequin torso */}
            <g transform="translate(0, -90)">
              {/* Head */}
              <ellipse cx="0" cy="-25" rx="14" ry="18" fill="#18181b" />
              {/* Torso */}
              <path d="M -22 0 L 22 0 L 16 55 L -16 55 Z" fill="#27272a" />
              {/* Green-Yellow-Blue Presidential Sash */}
              <path d="M -22 5 L -10 0 L 16 50 L 6 55 Z" fill="#22c55e" />
              <path d="M -18 3 L -14 1 L 12 48 L 8 52 Z" fill="#facc15" />
              <circle cx="2" cy="30" r="4.5" fill="#1e3a8a" />
            </g>
          </g>

          {/* Corner Hands holding vibrant smartphones */}
          {/* Top Left Phone */}
          <g transform="translate(90, 30) rotate(-18)" filter="url(#soft-sh)">
            <rect x="0" y="0" width="65" height="115" rx="12" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
            <rect x="4" y="4" width="57" height="107" rx="9" fill="url(#phone-grad-1)" />
            <path d="M -15 20 C 5 25, 10 35, 10 50 C 10 65, -5 70, -20 60 Z" fill="#d97706" opacity="0.8" />
            <path d="M 60 40 C 75 45, 80 55, 75 75 C 70 85, 55 80, 50 75 Z" fill="#d97706" opacity="0.8" />
          </g>

          {/* Top Right Phone */}
          <g transform="translate(440, 25) rotate(16)" filter="url(#soft-sh)">
            <rect x="0" y="0" width="65" height="115" rx="12" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
            <rect x="4" y="4" width="57" height="107" rx="9" fill="url(#phone-grad-2)" />
            <path d="M -15 40 C 0 45, 8 55, 5 70 C 0 80, -15 75, -20 65 Z" fill="#f59e0b" opacity="0.8" />
            <path d="M 60 25 C 75 30, 80 45, 75 60 C 70 70, 55 65, 50 60 Z" fill="#f59e0b" opacity="0.8" />
          </g>

          {/* Bottom Left Phone */}
          <g transform="translate(80, 180) rotate(18)" filter="url(#soft-sh)">
            <rect x="0" y="0" width="70" height="120" rx="12" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
            <rect x="4" y="4" width="62" height="112" rx="9" fill="url(#phone-grad-3)" />
            <path d="M -15 45 C 5 50, 12 60, 10 80 C 5 95, -15 85, -20 75 Z" fill="#ea580c" opacity="0.8" />
            <path d="M 65 30 C 80 35, 85 50, 80 70 C 75 80, 60 75, 55 70 Z" fill="#ea580c" opacity="0.8" />
          </g>

          {/* Bottom Right Phone */}
          <g transform="translate(430, 175) rotate(-16)" filter="url(#soft-sh)">
            <rect x="0" y="0" width="70" height="120" rx="12" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
            <rect x="4" y="4" width="62" height="112" rx="9" fill="url(#phone-grad-4)" />
            <path d="M -15 35 C 0 40, 8 50, 5 65 C 0 75, -15 70, -20 60 Z" fill="#b45309" opacity="0.8" />
            <path d="M 65 50 C 80 55, 85 70, 80 90 C 75 100, 60 95, 55 85 Z" fill="#b45309" opacity="0.8" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <div className="mt-14 pt-8 w-full border-t border-neutral-200">
      {/* Header with Title and Full-width Separator Line */}
      <div className="flex items-center gap-4 mb-7">
        <h3 className="text-[22px] sm:text-[26px] font-black uppercase text-neutral-950 font-poppins tracking-tight shrink-0">
          ASSUNTOS RELACIONADOS
        </h3>
        <div className="flex-1 h-[1px] bg-neutral-200" />
      </div>

      {/* 3 Related Article Cards Container with subtle navigation arrows */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          type="button"
          aria-label="Notícia anterior"
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-12 items-center justify-center text-neutral-300 hover:text-neutral-700 transition-colors cursor-pointer"
        >
          <ChevronLeft size={36} strokeWidth={1.2} />
        </button>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {relatedStories.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectStory(item)}
              className="cursor-pointer group flex flex-col"
            >
              {/* Card Image */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200/80 mb-3 shadow-2xs group-hover:shadow-xs transition-shadow">
                <div className="w-full h-full transform group-hover:scale-[1.02] transition-transform duration-300 ease-out">
                  {item.imageRenderer}
                </div>
              </div>

              {/* Tag / Kicker */}
              <span className="block text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-neutral-800 font-poppins mb-1.5">
                {item.tag}
              </span>

              {/* Title in Merriweather Bold */}
              <h4 className="text-[16px] sm:text-[17.5px] font-bold text-neutral-950 group-hover:text-[#eb5724] transition-colors leading-[1.28] font-merriweather tracking-tight">
                {item.title}
              </h4>
            </article>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          aria-label="Próxima notícia"
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-12 items-center justify-center text-neutral-300 hover:text-neutral-700 transition-colors cursor-pointer"
        >
          <ChevronRight size={36} strokeWidth={1.2} />
        </button>
      </div>
    </div>
  );
};

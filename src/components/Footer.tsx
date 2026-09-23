import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { FOOTER_NAV } from '../data/storiesData';

export const Footer: React.FC = () => {
  const [openCol, setOpenCol] = useState<string | null>(null);

  const toggleCol = (category: string) => {
    setOpenCol(openCol === category ? null : category);
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'IG', href: 'https://instagram.com/fastcompanybrasil' },
    { name: 'LinkedIn', icon: 'IN', href: 'https://linkedin.com/company/fastcompanybrasil' },
    { name: 'YouTube', icon: 'YT', href: 'https://youtube.com' },
    { name: 'Facebook', icon: 'FB', href: 'https://facebook.com' },
    { name: 'X', icon: '𝕏', href: 'https://x.com' },
    { name: 'TikTok', icon: 'TT', href: 'https://tiktok.com' },
    { name: 'Pinterest', icon: 'PIN', href: 'https://pinterest.com' },
    { name: 'WhatsApp', icon: 'WA', href: 'https://whatsapp.com' },
  ];

  const legalLinks = [
    'Quem somos',
    'Missão',
    'Anuncie Conosco',
    'Redação',
    'Política de Privacidade',
    'Termos de Uso',
    'Contatos',
    'Mídia Kit',
    'FastCo Works Archive'
  ];

  return (
    <footer id="footer" className="w-full bg-[#0a0a0a] text-white pt-12 pb-16 relative overflow-hidden select-none">
      
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
        
        {/* 6 Category Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pb-12 border-b border-neutral-800">
          {FOOTER_NAV.map((col) => {
            const isOpen = openCol === col.category;
            return (
              <div key={col.category} className="flex flex-col">
                <button
                  onClick={() => toggleCol(col.category)}
                  className="flex items-center justify-between font-extrabold text-[12px] tracking-wider uppercase text-white pb-2 lg:cursor-default"
                >
                  <span>{col.category}</span>
                  <ChevronDown size={14} className="lg:hidden" />
                </button>

                <ul className={`space-y-2 mt-1 ${isOpen ? 'block' : 'hidden lg:block'}`}>
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[12px] text-neutral-400 hover:text-white transition-colors font-poppins font-normal block py-0.5"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Social Links Row */}
        <div className="py-8 border-b border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar py-1">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 transition-all"
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs italic text-neutral-400 font-poppins">
              "O futuro dos negócios passa por aqui."
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 font-poppins">
            {legalLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="text-neutral-500 font-poppins text-[10px] shrink-0">
            Fast Company Brasil © {new Date().getFullYear()}. Todos os direitos reservados.
          </div>
        </div>

      </div>

      {/* Stylized Giant Background Brand Watermark */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] text-neutral-100 font-extrabold text-[110px] lg:text-[180px] tracking-tight whitespace-nowrap font-poppins">
        FAST COMPANY
      </div>

      {/* Floating ReCAPTCHA Widget Style */}
      <div className="fixed bottom-3 right-3 z-40 bg-white/95 border border-neutral-300 rounded shadow-md px-2.5 py-1 text-[9px] text-neutral-700 hidden sm:flex items-center space-x-1.5 backdrop-blur-xs">
        <ShieldCheck size={12} className="text-blue-600" />
        <span>reCAPTCHA</span>
        <span className="text-neutral-400">|</span>
        <a href="#privacy" className="text-[8px] text-neutral-500 hover:underline">Privacidade</a>
      </div>
    </footer>
  );
};

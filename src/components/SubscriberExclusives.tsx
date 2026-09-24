import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EditorialImage } from './EditorialImage';
import { SUBSCRIBER_EXCLUSIVES, Story } from '../data/storiesData';

interface SubscriberExclusivesProps {
  onSelectStory: (story: Story) => void;
  onSubscribe?: () => void;
}

export const SubscriberExclusives: React.FC<SubscriberExclusivesProps> = ({ 
  onSelectStory,
  onSubscribe 
}) => {
  const [selectedColumnist, setSelectedColumnist] = useState<string | null>('Ana Bavon');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeArrow, setActiveArrow] = useState<'left' | 'right'>('right');
  const [columnsVisible, setColumnsVisible] = useState(4);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const columnists = [
    'Ana Bavon',
    'Fred Gelli',
    'M.M. izidoro',
    'Silvana Bahia'
  ];

  // Repeat stories to provide a rich continuous carousel experience as requested:
  // "pode repetir as materias pra ilustrar o movimento horizontal das colunas"
  const carouselStories = [
    ...SUBSCRIBER_EXCLUSIVES,
    ...SUBSCRIBER_EXCLUSIVES.map((s, idx) => ({ ...s, id: `${s.id}-rep1-${idx}` })),
    ...SUBSCRIBER_EXCLUSIVES.map((s, idx) => ({ ...s, id: `${s.id}-rep2-${idx}` }))
  ];

  // Dynamic container width detection for perfect column count in desktop and mobile viewMode
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateColumns = () => {
      const width = el.getBoundingClientRect().width;
      if (width < 560) {
        setColumnsVisible(1);
      } else if (width < 960) {
        setColumnsVisible(2);
      } else {
        setColumnsVisible(4);
      }
    };

    updateColumns();

    const observer = new ResizeObserver(() => {
      updateColumns();
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(0, carouselStories.length - columnsVisible);

  const handlePrev = () => {
    setActiveArrow('left');
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex; // Wrap around smoothly
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setActiveArrow('right');
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0; // Wrap around smoothly
      }
      return prev + 1;
    });
  };

  const handleColumnistClick = (name: string) => {
    if (selectedColumnist === name) {
      setSelectedColumnist(null);
    } else {
      setSelectedColumnist(name);
      // Find index of first story by this columnist and slide to it
      const targetIndex = carouselStories.findIndex(
        s => s.author?.toLowerCase().includes(name.toLowerCase().split(' ')[0]) ||
             s.tag?.toLowerCase().includes(name.toLowerCase().split(' ')[0])
      );
      if (targetIndex !== -1) {
        setCurrentIndex(Math.min(targetIndex, maxIndex));
      }
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-[#161616] text-white py-12 lg:py-16 select-none font-poppins border-t border-b border-neutral-800/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Icon - Standardized */}
        <div className="flex items-center space-x-2.5 mb-2">
          <div className="w-6 h-6 rounded-full bg-[#242424] border border-neutral-700 flex items-center justify-center text-white shrink-0 shadow-xs">
            <svg 
              className="w-3.5 h-3.5 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <line x1="8" y1="9" x2="16" y2="9" />
              <line x1="8" y1="13" x2="12" y2="13" />
            </svg>
          </div>
          <h2 className="text-[23px] sm:text-[25px] font-bold tracking-tight text-white font-poppins leading-tight">
            Colunistas Fast
          </h2>
        </div>
        
        {/* Section Description */}
        <p className="text-[13px] sm:text-[14px] text-neutral-400 leading-relaxed max-w-3xl mb-6">
          Descubra as vozes que moldam o futuro na Fast Company Brasil. O nosso time de colunistas reúne líderes e inovadores com visões únicas sobre tecnologia, negócios e criatividade. Inspire-se agora!
        </p>

        {/* Columnist Filter Pills & Navigation Arrows Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          
          {/* Left: Columnist Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-0.5">
            {columnists.map((colName) => {
              const isSelected = selectedColumnist === colName;
              return (
                <button
                  key={colName}
                  onClick={() => handleColumnistClick(colName)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                    isSelected
                      ? 'bg-[#2d2d2d] text-white border border-neutral-500 shadow-xs'
                      : 'bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  {colName}
                </button>
              );
            })}
          </div>

          {/* Right: Functional Navigation Arrows */}
          <div className="flex items-center space-x-2.5 shrink-0 self-end sm:self-auto">
            <button 
              onClick={handlePrev}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                activeArrow === 'left'
                  ? 'bg-white text-neutral-950 border border-white shadow-md'
                  : 'bg-[#1e1e1e] text-neutral-300 border border-neutral-700 hover:text-white hover:border-neutral-500 hover:bg-[#252525]'
              }`}
              aria-label="Coluna anterior"
              title="Anterior"
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>

            <button 
              onClick={handleNext}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                activeArrow === 'right'
                  ? 'bg-white text-neutral-950 border border-white shadow-md'
                  : 'bg-[#1e1e1e] text-neutral-300 border border-neutral-700 hover:text-white hover:border-neutral-500 hover:bg-[#252525]'
              }`}
              aria-label="Próxima coluna"
              title="Próxima"
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </div>

        </div>

        {/* Carousel Viewport: 4 Columns on desktop, responsive slide on mobile */}
        <div 
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden w-full -mx-2.5 px-2.5"
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / columnsVisible)}%)` 
            }}
          >
            {carouselStories.map((story) => (
              <div 
                key={story.id}
                className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2.5"
              >
                <article
                  onClick={() => onSelectStory(story)}
                  className="flex flex-col group cursor-pointer h-full"
                >
                  {/* Exact Thumbnail Proportion (16:10 rectangle) */}
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-xs bg-neutral-900 mb-3 group-hover:opacity-90 transition-opacity relative">
                    <EditorialImage 
                      type={story.imageType} 
                      alt={story.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Columnist Name in Uppercase Gray */}
                  <span className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase font-poppins mb-1.5 block">
                    {story.author || story.tag}
                  </span>

                  {/* Article Title in Crisp Bold White Poppins */}
                  <h3 className="text-[15px] sm:text-[16px] font-bold leading-[1.3] text-white group-hover:text-[#eb5724] transition-colors font-poppins">
                    {story.title}
                  </h3>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button: "VER TODOS COLUNISTAS" */}
        <div className="mt-9 flex justify-start">
          <button
            onClick={() => {
              if (onSubscribe) {
                onSubscribe();
              } else {
                alert('Navegando para todos os colunistas da Fast Company Brasil');
              }
            }}
            className="border border-white text-white px-5 py-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black transition-colors cursor-pointer font-poppins"
          >
            VER TODOS COLUNISTAS
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { LATEST_TOPICS } from '../data/storiesData';

interface LatestTopicsProps {
  onSelectTopic?: (topic: string) => void;
  isMobile?: boolean;
}

export const LatestTopics: React.FC<LatestTopicsProps> = ({ onSelectTopic, isMobile }) => {
  return (
    <section className="w-full bg-white border-b border-neutral-200/90 pt-3 pb-3 sm:py-3.5 select-none font-poppins">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Container: Stacked on mobile (Image exact), flex on tablet/desktop */}
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-col sm:flex-row sm:items-center sm:gap-4 lg:gap-5'}`}>
          
          {/* Section Label: "Assuntos do Dia" in bold orange */}
          <h2 className="font-bold text-[#eb5724] text-[16px] sm:text-[16.5px] lg:text-[17px] tracking-tight shrink-0 mb-2 sm:mb-0 leading-none">
            Assuntos do Dia
          </h2>

          {/* Horizontal Scrollable Tags Carousel - Exactly matching mobile layout */}
          <div className="w-full overflow-x-auto no-scrollbar overscroll-x-contain py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {LATEST_TOPICS.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => onSelectTopic && onSelectTopic(topic)}
                  className="px-5 py-2 sm:py-2 rounded-full border border-neutral-300 hover:border-neutral-900 bg-white text-[#2a2a2a] hover:text-black text-[12px] sm:text-[12.5px] font-bold uppercase tracking-wider transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-2xs active:scale-95 font-poppins"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

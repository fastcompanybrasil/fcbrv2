import React, { useState } from 'react';
import { Newspaper, ChevronDown } from 'lucide-react';
import { EditorialImage } from './EditorialImage';
import { LATEST_STORIES_FEED, Story } from '../data/storiesData';

interface LatestStoriesFeedProps {
  onSelectStory: (story: Story) => void;
}

export const LatestStoriesFeed: React.FC<LatestStoriesFeedProps> = ({ onSelectStory }) => {
  const [visibleCount, setVisibleCount] = useState(15);

  const displayedStories = LATEST_STORIES_FEED.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(LATEST_STORIES_FEED.length, prev + 10));
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center space-x-2.5 pb-3 mb-6 border-b border-neutral-200">
        <Newspaper size={21} className="text-black stroke-[2.2]" />
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 font-poppins">
          Últimas Notícias
        </h2>
      </div>

      {/* Stories Feed Stream */}
      <div className="flex flex-col">
        {displayedStories.map((story) => (
          <article
            key={story.id}
            onClick={() => onSelectStory(story)}
            className="pb-7 mb-7 border-b border-neutral-200 last:border-b-0 last:pb-0 last:mb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 cursor-pointer group"
          >
            {/* Story Text Info */}
            <div className="flex-1 min-w-0 pr-0 sm:pr-2">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#6e6e73] mb-1.5 font-poppins">
                {story.tag}
              </span>

              <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.28] text-neutral-950 group-hover:text-neutral-700 transition-colors mb-2 font-poppins">
                {story.title}
              </h3>

              {story.snippet && (
                <p className="text-[13px] sm:text-[14px] text-neutral-600 leading-relaxed font-poppins font-normal line-clamp-3">
                  {story.snippet}
                </p>
              )}
            </div>

            {/* Thumbnail on Right with exact proportions and subtle frame */}
            <div className="w-full sm:w-[220px] md:w-[260px] lg:w-[270px] aspect-[16/10] shrink-0 overflow-hidden bg-neutral-100 shadow-xs border border-neutral-200/80">
              <EditorialImage 
                type={story.imageType} 
                alt={story.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </article>
        ))}
      </div>

      {/* See More Stories Button - Aligned to Left */}
      {visibleCount < LATEST_STORIES_FEED.length && (
        <div className="mt-8 flex justify-start">
          <button
            onClick={handleLoadMore}
            className="bg-[#181818] hover:bg-black text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer font-poppins flex items-center space-x-2.5"
          >
            <span>VER MAIS NOTÍCIAS</span>
            <ChevronDown size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

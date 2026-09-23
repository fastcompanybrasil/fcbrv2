import React, { useState } from 'react';
import { EditorialImage } from './EditorialImage';
import { 
  HERO_FEATURE, 
  HERO_LEFT_STORIES, 
  HERO_MOBILE_EXTRA,
  MOST_READ_STORIES, 
  FOR_YOU_STORIES, 
  HERO_HORIZONTAL_CARDS,
  Story
} from '../data/storiesData';

interface HeroSectionProps {
  onSelectStory: (story: Story) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectStory }) => {
  const [activeTab, setActiveTab] = useState<'mostRead' | 'forYou'>('mostRead');

  const trendingStories = activeTab === 'mostRead' ? MOST_READ_STORIES : FOR_YOU_STORIES;

  return (
    <section className="w-full bg-white pt-5 pb-8 border-b border-neutral-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= DESKTOP LAYOUT (lg+) ================= */}
        <div className="hidden lg:block">
          {/* Top 3-Column Grid */}
          <div className="grid grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 3 Editorial Text Stories separated by right vertical gray line */}
            <div className="col-span-3 pr-6 border-r border-neutral-300 flex flex-col divide-y divide-neutral-200">
              {HERO_LEFT_STORIES.map((story) => (
                <article 
                  key={story.id} 
                  onClick={() => onSelectStory(story)}
                  className="py-4 first:pt-0 last:pb-0 cursor-pointer group"
                >
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#595959] mb-1.5 font-poppins">
                    {story.tag}
                  </span>
                  <h2 className="text-[16px] xl:text-[17px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors mb-1.5 font-poppins">
                    {story.title}
                  </h2>
                  <p className="text-[13px] text-neutral-600 leading-relaxed font-poppins font-normal">
                    {story.snippet}
                  </p>
                </article>
              ))}
            </div>

            {/* Center Column: Big Feature Story (clean white space on right, no right border) */}
            <div className="col-span-6 px-1">
              <article 
                onClick={() => onSelectStory(HERO_FEATURE)}
                className="cursor-pointer group"
              >
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#595959] mb-2 font-poppins">
                  {HERO_FEATURE.tag}
                </span>

                <div className="w-full aspect-[16/10] overflow-hidden rounded-none bg-neutral-100 shadow-xs mb-3 group-hover:opacity-95 transition-opacity border border-neutral-200/50">
                  <EditorialImage 
                    type={HERO_FEATURE.imageType} 
                    alt={HERO_FEATURE.title}
                    className="w-full h-full"
                  />
                </div>

                <h1 className="text-[26px] xl:text-[29px] font-bold leading-tight text-neutral-950 group-hover:text-[#d63031] transition-colors mb-2 font-poppins tracking-tight">
                  {HERO_FEATURE.title}
                </h1>

                <p className="text-[13.5px] text-neutral-600 leading-relaxed font-poppins font-normal">
                  {HERO_FEATURE.snippet}
                </p>
              </article>
            </div>

            {/* Right Column: Exact Boxed Vertical Container with 1-4 Bold Numbers, Gray Contours */}
            <div className="col-span-3">
              <div className="w-full border border-neutral-300 bg-white">
                
                {/* Tab Selector: Mais Lidas vs Trends (shows ↓ when active) */}
                <div className="grid grid-cols-2 border-b border-neutral-300">
                  <button
                    onClick={() => setActiveTab('mostRead')}
                    className={`py-2.5 px-3 text-[13px] tracking-tight cursor-pointer font-poppins flex items-center justify-center space-x-1.5 transition-colors border-r border-neutral-300 ${
                      activeTab === 'mostRead' 
                        ? 'text-neutral-900 bg-white font-bold' 
                        : 'text-[#6b7280] bg-[#f9fafb] font-semibold hover:text-neutral-900'
                    }`}
                  >
                    <span>Mais Lidas</span>
                    {activeTab === 'mostRead' && (
                      <span className="text-[13px] font-bold leading-none">↓</span>
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('forYou')}
                    className={`py-2.5 px-3 text-[13px] tracking-tight cursor-pointer font-poppins flex items-center justify-center space-x-1.5 transition-colors ${
                      activeTab === 'forYou' 
                        ? 'text-neutral-900 bg-white font-bold' 
                        : 'text-[#6b7280] bg-[#f9fafb] font-semibold hover:text-neutral-900'
                    }`}
                  >
                    <span>Trends</span>
                    {activeTab === 'forYou' && (
                      <span className="text-[13px] font-bold leading-none">↓</span>
                    )}
                  </button>
                </div>

                {/* Numbered List 1 to 4 inside the gray bordered box */}
                <div className="flex flex-col divide-y divide-neutral-200">
                  {trendingStories.slice(0, 4).map((story, index) => (
                    <article
                      key={story.id}
                      onClick={() => onSelectStory(story)}
                      className="p-3.5 flex items-start gap-3 cursor-pointer group hover:bg-neutral-50/40 transition-colors"
                    >
                      {/* Number 1 to 4: Larger font and bold */}
                      <span className="text-[28px] sm:text-[32px] font-extrabold text-[#9ca3af] group-hover:text-neutral-600 leading-none shrink-0 w-6 font-poppins select-none mt-0.5">
                        {index + 1}
                      </span>

                      {/* Right column: Category on top, title + wide thumb underneath */}
                      <div className="flex-1 min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6b7280] mb-1.5 font-poppins">
                          {story.tag}
                        </span>

                        {/* Title and wider thumb aligned at the start of title */}
                        <div className="flex items-start justify-between gap-2.5">
                          {/* Narrower title box to wrap naturally across lines without any truncation */}
                          <div className="flex-1 min-w-0 pr-1">
                            <h3 className="text-[12.5px] font-bold leading-[1.3] text-neutral-950 group-hover:text-[#d63031] transition-colors font-poppins">
                              {story.title}
                            </h3>
                          </div>

                          {/* Wider rectangular thumbnail with no surrounding border */}
                          <div className="w-[102px] xl:w-[110px] h-[55px] xl:h-[60px] shrink-0 overflow-hidden bg-neutral-900">
                            <EditorialImage 
                              type={story.imageType} 
                              alt={story.title} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* Bottom 4-Column Row (3 Cards + 1 Ad) with gray category tags */}
          <div className="grid grid-cols-4 gap-6 pt-8 border-t border-neutral-200 mt-8">
            {HERO_HORIZONTAL_CARDS.map((card) => (
              <article
                key={card.id}
                onClick={() => onSelectStory(card)}
                className="flex flex-col cursor-pointer group"
              >
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#595959] mb-2 font-poppins">
                  {card.tag}
                </span>
                <div className="w-full aspect-[16/10] overflow-hidden rounded-none bg-neutral-100 mb-3 group-hover:opacity-95 transition-opacity border border-neutral-200/50">
                  <EditorialImage 
                    type={card.imageType} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[15px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors mb-2 font-poppins">
                  {card.title}
                </h3>
                <p className="text-[12px] text-neutral-600 leading-relaxed font-poppins line-clamp-3 font-normal">
                  {card.snippet}
                </p>
              </article>
            ))}

            {/* Coral Red Advertisement Card */}
            <div className="flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] text-neutral-400 uppercase font-semibold mb-2">
                <span>PUBLICIDADE</span>
                <span className="bg-neutral-200 text-neutral-600 px-1 py-0.5 rounded text-[8px]">Anúncio ⓘ</span>
              </div>
              <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#eb4d4b] via-[#e74c3c] to-[#c0392b] p-6 flex flex-col justify-center items-center text-center shadow-xs cursor-pointer hover:brightness-105 transition-all">
                <p className="text-white text-xl font-extrabold leading-tight tracking-tight font-poppins">
                  "A única maneira de transformar o mundo é reinventá-lo."
                </p>
                <span className="mt-4 text-[10px] uppercase tracking-widest text-white/80 font-bold border-b border-white/60 pb-0.5">
                  Saiba Mais
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* ================= MOBILE LAYOUT (<lg) ================= */}
        <div className="block lg:hidden space-y-6">
          
          {/* 1. Hero Feature */}
          <article 
            onClick={() => onSelectStory(HERO_FEATURE)} 
            className="cursor-pointer group pb-4 border-b border-neutral-200"
          >
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#595959] mb-2 font-poppins">
              {HERO_FEATURE.tag}
            </span>

            <div className="w-full aspect-[16/10] overflow-hidden rounded-none bg-neutral-100 shadow-xs mb-3 border border-neutral-200/50">
              <EditorialImage 
                type={HERO_FEATURE.imageType} 
                alt={HERO_FEATURE.title}
                className="w-full h-full"
              />
            </div>

            <h1 className="text-[24px] font-bold leading-tight text-neutral-950 group-hover:text-[#d63031] transition-colors mb-2 font-poppins">
              {HERO_FEATURE.title}
            </h1>

            <p className="text-[13px] text-neutral-600 leading-relaxed font-poppins">
              {HERO_FEATURE.snippet}
            </p>
          </article>

          {/* 2. Middle Row Stories (Stacked with thumbnail on left) */}
          <div className="space-y-4 pb-4 border-b border-neutral-200">
            {/* Card: Ask the Experts */}
            <article 
              onClick={() => onSelectStory(HERO_HORIZONTAL_CARDS[1])}
              className="flex space-x-3 cursor-pointer group"
            >
              <div className="w-[110px] h-[78px] shrink-0 overflow-hidden rounded-none bg-neutral-100 border border-neutral-200/50">
                <EditorialImage 
                  type={HERO_HORIZONTAL_CARDS[1].imageType} 
                  alt={HERO_HORIZONTAL_CARDS[1].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#595959] mb-1 font-poppins">
                  {HERO_HORIZONTAL_CARDS[1].tag}
                </span>
                <h3 className="text-[13px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors font-poppins line-clamp-2">
                  {HERO_HORIZONTAL_CARDS[1].title}
                </h3>
                <p className="text-[11px] text-neutral-500 leading-normal line-clamp-2 mt-0.5">
                  {HERO_HORIZONTAL_CARDS[1].snippet}
                </p>
              </div>
            </article>

            {/* Card: Tech Bot Traffic */}
            <article 
              onClick={() => onSelectStory(HERO_HORIZONTAL_CARDS[2])}
              className="flex space-x-3 cursor-pointer group"
            >
              <div className="w-[110px] h-[78px] shrink-0 overflow-hidden rounded-none bg-neutral-100 border border-neutral-200/50">
                <EditorialImage 
                  type={HERO_HORIZONTAL_CARDS[2].imageType} 
                  alt={HERO_HORIZONTAL_CARDS[2].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#595959] mb-1 font-poppins">
                  {HERO_HORIZONTAL_CARDS[2].tag}
                </span>
                <h3 className="text-[13px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors font-poppins line-clamp-2">
                  {HERO_HORIZONTAL_CARDS[2].title}
                </h3>
                <p className="text-[11px] text-neutral-500 leading-normal line-clamp-2 mt-0.5">
                  {HERO_HORIZONTAL_CARDS[2].snippet}
                </p>
              </div>
            </article>

            {/* Card: Made Possible Agriculture */}
            <article 
              onClick={() => onSelectStory(HERO_HORIZONTAL_CARDS[0])}
              className="flex space-x-3 cursor-pointer group"
            >
              <div className="w-[110px] h-[78px] shrink-0 overflow-hidden rounded-none bg-neutral-100 border border-neutral-200/50">
                <EditorialImage 
                  type={HERO_HORIZONTAL_CARDS[0].imageType} 
                  alt={HERO_HORIZONTAL_CARDS[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#595959] mb-1 font-poppins">
                  {HERO_HORIZONTAL_CARDS[0].tag}
                </span>
                <h3 className="text-[13px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors font-poppins line-clamp-2">
                  {HERO_HORIZONTAL_CARDS[0].title}
                </h3>
                <p className="text-[11px] text-neutral-500 leading-normal line-clamp-2 mt-0.5">
                  {HERO_HORIZONTAL_CARDS[0].snippet}
                </p>
              </div>
            </article>
          </div>

          {/* 3. Boxed Mais Lidas / Trends Tabbed Section (Mobile) */}
          <div className="w-full border border-neutral-300 bg-white">
            <div className="grid grid-cols-2 border-b border-neutral-300">
              <button
                onClick={() => setActiveTab('mostRead')}
                className={`py-2.5 px-3 text-[13px] tracking-tight cursor-pointer font-poppins flex items-center justify-center space-x-1.5 transition-colors border-r border-neutral-300 ${
                  activeTab === 'mostRead' 
                    ? 'text-neutral-900 bg-white font-bold' 
                    : 'text-[#6b7280] bg-[#f9fafb] font-semibold hover:text-neutral-900'
                }`}
              >
                <span>Mais Lidas</span>
                {activeTab === 'mostRead' && (
                  <span className="text-[13px] font-bold leading-none">↓</span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('forYou')}
                className={`py-2.5 px-3 text-[13px] tracking-tight cursor-pointer font-poppins flex items-center justify-center space-x-1.5 transition-colors ${
                  activeTab === 'forYou' 
                    ? 'text-neutral-900 bg-white font-bold' 
                    : 'text-[#6b7280] bg-[#f9fafb] font-semibold hover:text-neutral-900'
                }`}
              >
                <span>Trends</span>
                {activeTab === 'forYou' && (
                  <span className="text-[13px] font-bold leading-none">↓</span>
                )}
              </button>
            </div>

            <div className="flex flex-col divide-y divide-neutral-200">
              {trendingStories.slice(0, 4).map((story, index) => (
                <article
                  key={story.id}
                  onClick={() => onSelectStory(story)}
                  className="p-3.5 flex items-start gap-3 cursor-pointer group"
                >
                  <span className="text-[26px] font-extrabold text-[#9ca3af] group-hover:text-neutral-600 leading-none shrink-0 w-6 font-poppins select-none mt-0.5">
                    {index + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6b7280] mb-1.5 font-poppins">
                      {story.tag}
                    </span>

                    <div className="flex items-start justify-between gap-2.5">
                      <div className="flex-1 min-w-0 pr-1">
                        <h3 className="text-[12.5px] font-bold leading-[1.3] text-neutral-900 group-hover:text-[#d63031] transition-colors font-poppins">
                          {story.title}
                        </h3>
                      </div>

                      <div className="w-[96px] h-[54px] shrink-0 overflow-hidden bg-neutral-900">
                        <EditorialImage 
                          type={story.imageType} 
                          alt={story.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 4. Additional Text Stories (Mobile) */}
          <div className="flex flex-col divide-y divide-neutral-200">
            {/* Story 1: LinkedIn */}
            <article 
              onClick={() => onSelectStory(HERO_LEFT_STORIES[0])}
              className="py-3 first:pt-0 cursor-pointer group"
            >
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#595959] mb-1 font-poppins">
                {HERO_LEFT_STORIES[0].tag}
              </span>
              <h3 className="text-[15px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors mb-1 font-poppins">
                {HERO_LEFT_STORIES[0].title}
              </h3>
              <p className="text-[12px] text-neutral-600 leading-relaxed font-poppins">
                {HERO_LEFT_STORIES[0].snippet}
              </p>
            </article>

            {/* Story 2: Amazon Sustainable Fashion */}
            <article 
              onClick={() => onSelectStory(HERO_MOBILE_EXTRA)}
              className="py-3 cursor-pointer group"
            >
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#595959] mb-1 font-poppins">
                {HERO_MOBILE_EXTRA.tag}
              </span>
              <h3 className="text-[15px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors mb-1 font-poppins">
                {HERO_MOBILE_EXTRA.title}
              </h3>
              <p className="text-[12px] text-neutral-600 leading-relaxed font-poppins">
                {HERO_MOBILE_EXTRA.snippet}
              </p>
            </article>

            {/* Story 3: 5 science-backed strategies */}
            <article 
              onClick={() => onSelectStory(HERO_LEFT_STORIES[2])}
              className="py-3 last:pb-0 cursor-pointer group"
            >
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#595959] mb-1 font-poppins">
                {HERO_LEFT_STORIES[2].tag}
              </span>
              <h3 className="text-[15px] font-bold leading-snug text-neutral-950 group-hover:text-[#d63031] transition-colors mb-1 font-poppins">
                {HERO_LEFT_STORIES[2].title}
              </h3>
              <p className="text-[12px] text-neutral-600 leading-relaxed font-poppins">
                {HERO_LEFT_STORIES[2].snippet}
              </p>
            </article>
          </div>

        </div>

      </div>
    </section>
  );
};

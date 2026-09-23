import React, { useState } from 'react';
import { Header } from './components/Header';
import { LatestTopics } from './components/LatestTopics';
import { HeroSection } from './components/HeroSection';
import { SubscriberExclusives } from './components/SubscriberExclusives';
import { MobileAppPromo } from './components/MobileAppPromo';
import { StoriesForYou } from './components/StoriesForYou';
import { LatestPodcast } from './components/LatestPodcast';
import { LatestStoriesFeed } from './components/LatestStoriesFeed';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { StoryModal } from './components/StoryModal';
import { NewsletterModal } from './components/NewsletterModal';
import { Story } from './data/storiesData';
import { Monitor, Smartphone } from 'lucide-react';

export default function App() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'responsive' | 'desktop' | 'mobile'>('responsive');

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-poppins flex flex-col selection:bg-black selection:text-white">
      
      {/* Device View Mode Switcher (Discreet Floating Bar for Review & Testing) */}
      <aside aria-label="Controles de visualização" className="bg-neutral-900 text-white text-[11px] py-1 px-4 border-b border-neutral-800 z-50 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-neutral-400 font-medium">Modo de Exibição:</span>
          <div className="inline-flex rounded-xs bg-neutral-800 p-0.5 border border-neutral-700">
            <button
              onClick={() => setViewMode('responsive')}
              className={`px-2 py-0.5 rounded-xs font-semibold cursor-pointer transition-colors ${
                viewMode === 'responsive' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Responsivo (Auto)
            </button>
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-2 py-0.5 rounded-xs font-semibold cursor-pointer transition-colors flex items-center space-x-1 ${
                viewMode === 'desktop' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Monitor size={12} />
              <span>Desktop (Imagem 1)</span>
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-2 py-0.5 rounded-xs font-semibold cursor-pointer transition-colors flex items-center space-x-1 ${
                viewMode === 'mobile' ? 'bg-neutral-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Smartphone size={12} />
              <span>Mobile (Imagem 2)</span>
            </button>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-3 text-neutral-400 text-[10px]">
          <span>Fast Company Brasil 100% Clone</span>
          <span className="text-neutral-600">•</span>
          <span>Fontes: Poppins</span>
        </div>
      </aside>

      {/* Main Container Wrapper respecting viewMode */}
      <div className={`w-full transition-all duration-300 mx-auto ${
        viewMode === 'mobile' 
          ? 'max-w-[430px] shadow-2xl my-4 border border-neutral-300 rounded-lg overflow-hidden' 
          : viewMode === 'desktop' 
          ? 'min-w-[1200px] overflow-x-auto' 
          : 'w-full'
      }`}>

        {/* 1. Header (Black Top Navigation) */}
        <Header 
          onOpenNewsletter={() => setNewsletterOpen(true)}
          onSelectCategory={(category) => {
            alert(`Navegando para categoria: ${category}`);
          }}
          onSelectStory={handleSelectStory}
        />

        {/* 2. Latest Topics Section (Separated from Header, Pills Layout - Image 2) */}
        <LatestTopics 
          isMobile={viewMode === 'mobile'}
          onSelectTopic={(topic) => {
            alert(`Filtrando tópicos recentes: ${topic}`);
          }}
        />

        {/* 3. Hero Section (Desktop 3-column + 4-box; Mobile stacked) */}
        <HeroSection onSelectStory={handleSelectStory} />

        {/* 3. Subscriber Exclusives (Dark section) */}
        <SubscriberExclusives 
          onSelectStory={handleSelectStory}
          onSubscribe={() => setNewsletterOpen(true)}
        />

        {/* 4. Mobile App Download Promo & Print Video Card (Shown on mobile or in mobile view) */}
        <div className={viewMode === 'mobile' ? 'block px-4' : 'block lg:hidden px-4'}>
          <MobileAppPromo />
        </div>

        {/* 5. Editorias em Destaque Section */}
        <StoriesForYou onSelectStory={handleSelectStory} />

        {/* 6. Main Feed & Sidebar Section */}
        <main className="w-full bg-white py-8">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
            
            {/* Desktop 2-Column Grid (8 cols main feed, 4 cols sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left 8-Column: Latest Stories Feed */}
              <div className="lg:col-span-8">
                <LatestStoriesFeed onSelectStory={handleSelectStory} />
              </div>

              {/* Right 4-Column: Sidebar Widgets */}
              <div className="lg:col-span-4 space-y-8">
                {/* Latest Podcast (Placed at top of sidebar in desktop) */}
                <LatestPodcast />

                {/* Sidebar Ads, Lists Box & Banners */}
                <Sidebar onSelectList={(listId) => {
                  alert(`Acessando detalhes da lista: ${listId}`);
                }} />
              </div>

            </div>

          </div>
        </main>

        {/* 7. Comprehensive Footer */}
        <Footer />

      </div>

      {/* Modals */}
      <StoryModal 
        story={selectedStory} 
        onClose={() => setSelectedStory(null)} 
      />

      <NewsletterModal 
        isOpen={newsletterOpen} 
        onClose={() => setNewsletterOpen(false)} 
      />

    </div>
  );
}

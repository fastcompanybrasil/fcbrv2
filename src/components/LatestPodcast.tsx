import React from 'react';
import { Mic, ExternalLink } from 'lucide-react';

export const LatestPodcast: React.FC = () => {
  const spotifyShowUrl = "https://open.spotify.com/show/1ZP4SWljsAkgyZtGuEGUCh?si=d77e751adccc47a2";
  const spotifyEpisodeUrl = "https://open.spotify.com/episode/2aK43MqFpMTUaP4pk8etrC?si=YevDmynhRuWeaxrQ_sYToA";

  return (
    <div className="w-full space-y-6">
      {/* Latest Podcast / Webcast Section */}
      <section className="w-full font-poppins" aria-label="Podcasts e Webcasts">
        
        {/* Section Header: Minimalist Microphone Icon + Title - Standardized */}
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0">
            <Mic size={14} />
          </div>
          <h2 className="text-[23px] sm:text-[25px] font-bold tracking-tight text-neutral-950 font-poppins leading-tight">
            Podcasts / Webcasts
          </h2>
        </div>

        {/* Minimalist White Card (Matching Reference Layout Exactly) */}
        <div className="bg-white border border-neutral-200 p-5 sm:p-6 rounded-none shadow-2xs">
          
          {/* Episode Title (With hover transition to Assuntos do Dia orange #eb5724) */}
          <a 
            href={spotifyEpisodeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block mb-2.5"
          >
            <h3 className="text-[17px] sm:text-[18px] font-bold text-neutral-950 font-poppins leading-snug group-hover:text-[#eb5724] transition-colors">
              Por que só o Ensino Superior não resolve? | Danilo Costa no Na Ponta do Lápis
            </h3>
          </a>

          {/* Episode Description */}
          <p className="text-[13px] sm:text-[13.5px] text-neutral-600 leading-relaxed font-poppins mb-4">
            Na Ponta do Lápis, webcast da FastCo Money, com o apoio do Santander, traz no 2º episódio Danilo Costa, fundador do Educbank e cofundador da Astra e da Clad Payments. No bate-papo com Rita Lisauskas, ele fala das alternativas ao Ensino Superior, o papel dos cursos profissionalizantes e tendências no mercado de trabalho.
          </p>

          {/* Embedded Spotify Player with Show Playlist Navigation */}
          <div className="w-full rounded-2xl overflow-hidden bg-[#121212] mb-5 shadow-xs">
            <iframe
              style={{ borderRadius: '16px' }}
              src="https://open.spotify.com/embed/show/1ZP4SWljsAkgyZtGuEGUCh?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Webcast Na Ponta do Lápis - FastCo Money"
            />
          </div>

          {/* Bottom Divider Line */}
          <div className="border-t border-neutral-200/80 pt-4">
            {/* Action Buttons: Side-by-side exact layout */}
            <div className="flex items-center gap-3">
              {/* Green Spotify Button */}
              <a
                href={spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#1DB954] hover:bg-[#1ed760] text-black h-11 px-3 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-poppins shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span className="truncate">OUVIR NO SPOTIFY</span>
              </a>

              {/* White Button with black outline */}
              <a
                href={spotifyShowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white hover:bg-neutral-50 border border-neutral-900 text-neutral-950 h-11 px-3 flex items-center justify-center text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-poppins text-center"
              >
                <span className="truncate">VER MAIS EPISÓDIOS</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Callebaut Brasil Chocolate Ad */}
      <div className="w-full bg-[#3d2314] text-white p-4 border border-[#2b180d] shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between text-[9px] text-amber-200/70 uppercase font-semibold mb-2">
          <span>PUBLICIDADE</span>
          <span>ⓘ</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-amber-300 font-poppins">
              CALLEBAUT
            </span>
            <h4 className="text-base font-bold text-white font-poppins leading-tight mt-0.5">
              O autêntico chocolate
            </h4>
            <p className="text-xs text-amber-100/80 font-poppins mt-0.5">
              Callebaut Brasil
            </p>
          </div>

          <a 
            href="#callebaut" 
            onClick={(e) => { e.preventDefault(); alert("Conheça a linha profissional Callebaut Brasil."); }}
            className="flex items-center space-x-1 bg-amber-500 hover:bg-amber-400 text-[#3d2314] px-3 py-1.5 rounded-xs text-xs font-bold font-poppins transition-colors"
          >
            <span>Abrir</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Mic, Play, Pause, Volume2, MoreVertical, ExternalLink } from 'lucide-react';

export const LatestPodcast: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const totalSeconds = 121; // 2:01

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  return (
    <div className="w-full space-y-6">
      {/* Latest Podcast Container */}
      <div className="w-full bg-white">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
            <Mic size={14} />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-neutral-950 font-poppins">
            Podcasts / Webcasts
          </h2>
        </div>

        {/* Podcast Card */}
        <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
            {/* Album Cover Graphic */}
            <div className="w-20 h-20 shrink-0 bg-black rounded-xs overflow-hidden relative flex items-center justify-center shadow-xs">
              {/* Rainbow vortex illustration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400 via-pink-500 to-indigo-900 opacity-90"></div>
              <div className="relative z-10 text-center p-1">
                <span className="text-[10px] font-black tracking-tight text-white uppercase block leading-tight font-poppins">
                  BRAND NEW WORLD
                </span>
                <span className="text-[7px] text-white/80 font-bold block mt-0.5">
                  FAST COMPANY
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="flex-1">
              <h3 className="text-[15px] font-bold text-neutral-950 font-poppins leading-snug">
                Brand New World
              </h3>
              <p className="text-[12px] text-neutral-600 leading-relaxed font-poppins mt-0.5">
                Um podcast sobre este momento transformador do marketing e da publicidade à medida que o futuro se desenha.
              </p>
            </div>
          </div>

          {/* Interactive HTML5-like Audio Player */}
          <div className="bg-neutral-200/70 p-2.5 rounded-xs flex items-center space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={14} className="fill-white" /> : <Play size={14} className="fill-white ml-0.5" />}
            </button>

            <span className="text-[11px] font-mono text-neutral-700 w-18 shrink-0">
              {formatTime(progress)} / {formatTime(totalSeconds)}
            </span>

            <input
              type="range"
              min={0}
              max={totalSeconds}
              value={progress}
              onChange={handleSliderChange}
              className="w-full accent-black h-1 bg-neutral-300 rounded-lg cursor-pointer"
            />

            <button className="text-neutral-600 hover:text-black transition-colors cursor-pointer" aria-label="Volume">
              <Volume2 size={16} />
            </button>

            <button className="text-neutral-600 hover:text-black transition-colors cursor-pointer" aria-label="More">
              <MoreVertical size={16} />
            </button>
          </div>

          {/* Action Button */}
          <div className="mt-4">
            <button 
              onClick={() => alert("Episódios completos de Brand New World disponíveis no Spotify e Apple Podcasts.")}
              className="border border-black text-black px-5 py-1.5 text-[11px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all cursor-pointer font-poppins"
            >
              VER TODOS OS PODCASTS
            </button>
          </div>
        </div>
      </div>

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

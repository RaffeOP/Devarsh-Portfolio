'use client';

import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const PLAYLIST = [
  // --- PUNJABI - KARAN AUJLA & BADSHAH ---
  { title: "Softly", artist: "Karan Aujla", id: "gP9dJ6w1K4o" },
  { title: "Admirin' You", artist: "Karan Aujla", id: "v7K-zZ3yQj0" },
  { title: "Soulmate", artist: "Badshah ft. Arijit", id: "E9vD-wG1sT0" },
  { title: "Players", artist: "Badshah x Karan Aujla", id: "8mY3s5R2_tQ" },

  // --- PUNJABI - HARKIRAT SANGHA (FULL SELECTION) ---
  { title: "Akhiyan", artist: "Harkirat Sangha", id: "w_Q4K1S5q80" },
  { title: "Sayonaara", artist: "Harkirat Sangha", id: "46D4c_iP0O4" },
  { title: "Midnight Call", artist: "Harkirat Sangha", id: "rJ9sV7_h1yM" },
  { title: "Shutdown", artist: "Harkirat Sangha", id: "RsO3xQaqWIA" }, // Popular hit
  { title: "Donali", artist: "Harkirat Sangha", id: "wU1JEn1Fwfw" },
  { title: "C4", artist: "Harkirat Sangha", id: "q9_R7HjR67k" },
  { title: "Karnatak", artist: "Harkirat Sangha", id: "_EeJHew0TMY" },
  { title: "Surma", artist: "Harkirat Sangha", id: "cWMx6pYt9lY" },
  { title: "Sanghastyle", artist: "Harkirat Sangha", id: "pgo5CNPFM0I" },

  // --- JIND UNIVERSE ---
  { title: "High On You", artist: "Jind Universe", id: "k-iG6R2p_hE" },
  { title: "Love Exit", artist: "Jind Universe", id: "c1y-K2a_o0M" },
  { title: "End Up", artist: "Jind Universe", id: "QcU1DsYZGf4" },

  // --- HINDI HITS ---
  { title: "Heeriye", artist: "Arijit Singh", id: "K2M1-5a0sT8" },
  { title: "Kesariya", artist: "Arijit Singh", id: "BddP6PYo2gs" },
  { title: "Apna Bana Le", artist: "Arijit Singh", id: "LqCeXy7XYXE" },
];

const AudioDeck: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextTrack = () => setCurrentTrack((prev) => (prev + 1) % PLAYLIST.length);
  const prevTrack = () => setCurrentTrack((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-6 z-50 flex flex-col items-start transition-all duration-500",
        isExpanded ? "w-64" : "w-12 h-12"
      )}
    >
      {/* Hidden Audio Engine */}
      <div className="hidden pointer-events-none">
        <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${PLAYLIST[currentTrack].id}`}
          playing={isPlaying}
          loop={true}
          width="0"
          height="0"
          onEnded={nextTrack}
          config={{
            youtube: {
              playerVars: { autoplay: 1, controls: 0 }
            } as any
          }}
        />
      </div>

      <div 
        className={cn(
          "relative flex items-center bg-background backdrop-blur-xl border border-border rounded-lg overflow-hidden transition-all duration-500 shadow-2xl",
          isExpanded ? "w-full p-4" : "w-12 h-12 justify-center cursor-pointer hover:bg-accent"
        )}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {!isExpanded ? (
          <Music className="w-5 h-5 text-muted-foreground" />
        ) : (
          <div className="flex flex-col w-full gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col truncate">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground opacity-70 font-mono">System.Audio</span>
                <span className="text-sm font-bold text-foreground truncate">{PLAYLIST[currentTrack].title}</span>
                <span className="text-[10px] text-muted-foreground truncate uppercase tracking-tighter">{PLAYLIST[currentTrack].artist}</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                className="text-muted-foreground/60 hover:text-foreground text-[10px] font-mono"
              >
                [ESC]
              </button>
            </div>

            {/* Visualizer Mock */}
            <div className="flex items-end gap-[2px] h-8 opacity-50">
              {[...Array(16)].map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-full bg-muted-foreground/40 transition-all duration-300",
                    isPlaying ? "animate-pulse" : "h-1"
                  )}
                  style={{ 
                    height: isPlaying ? `${Math.random() * 100}%` : '4px',
                    animationDelay: `${i * 0.1}s` 
                  }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-muted-foreground">
              <button onClick={prevTrack} className="hover:text-foreground transition-colors">
                <SkipBack size={18} fill="currentColor" />
              </button>
              <button onClick={togglePlay} className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform">
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              </button>
              <button onClick={nextTrack} className="hover:text-foreground transition-colors">
                <SkipForward size={18} fill="currentColor" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioDeck;

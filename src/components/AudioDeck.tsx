import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { 
  Play, Pause, SkipForward, SkipBack, 
  Volume2, VolumeX, List, Music2,
  ChevronUp, ChevronDown, Radio,
  Disc, Mic2, Heart
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

import ReactPlayer from 'react-player';

const PLAYLIST = [
  {
    id: 'RsO3xQaqWIA',
    title: 'Shutdown',
    artist: 'Harkirat Sangha',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 'wU1JEn1Fwfw',
    title: 'Donali',
    artist: 'Harkirat Sangha',
    cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop',
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: '_EeJHew0TMY', 
    title: 'Karnatak',
    artist: 'Harkirat Sangha',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'QcU1DsYZGf4',
    title: 'End Up',
    artist: 'Jind Universe',
    cover: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=300&h=300&fit=crop',
    color: 'from-emerald-500/20 to-teal-500/20'
  }
];

export default function AudioDeck() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTrack = PLAYLIST[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!mounted) return null;

  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 z-[60] transition-all duration-500 ease-out group",
        isExpanded ? "w-80" : "w-14 h-14"
      )}
    >
      {/* Background with dynamic track color */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 overflow-hidden bg-black/60",
          isExpanded ? "opacity-100" : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
        )}
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 transition-colors duration-1000", currentTrack.color)} />
      </div>

      {/* Main Container */}
      <div className="relative h-full flex flex-col overflow-hidden rounded-2xl">
        
        {/* Compact View / Trigger */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "absolute top-0 right-0 z-20 flex items-center justify-center transition-all duration-500",
            isExpanded ? "w-10 h-10 m-2 rounded-full hover:bg-white/10" : "w-14 h-14 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl"
          )}
        >
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-white/70" />
          ) : (
            <div className="relative">
              <Disc className={cn("w-6 h-6 text-white/90", isPlaying && "animate-spin-slow")} />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </div>
          )}
        </button>

        {/* Expanded View Content */}
        {isExpanded && (
          <div className="p-5 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header / Info */}
            <div className="flex items-start gap-4 mb-6">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow-xl border border-white/10">
                <img 
                  src={currentTrack.cover} 
                  alt={currentTrack.title}
                  className={cn("w-full h-full object-cover transition-transform duration-700", isPlaying && "scale-110")}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <h3 className="text-lg font-bold text-white truncate leading-tight mb-1 font-syne">{currentTrack.title}</h3>
                <p className="text-white/60 text-sm truncate mb-3 flex items-center gap-1.5">
                  <Mic2 className="w-3 h-3" />
                  {currentTrack.artist}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-wider">
                    Lossless
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Area */}
            <div className="mb-6">
              <div className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                <div 
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-linear shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                  style={{ width: `${(progress / duration) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-medium text-white/40 tabular-nums">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => setShowPlaylist(!showPlaylist)} className={cn("p-2 transition-colors", showPlaylist ? "text-white" : "text-white/40 hover:text-white/70")}>
                <List className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4">
                <button onClick={handlePrev} className="text-white/60 hover:text-white transition-colors">
                  <SkipBack className="w-6 h-6 fill-current" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                </button>
                <button onClick={handleNext} className="text-white/60 hover:text-white transition-colors">
                  <SkipForward className="w-6 h-6 fill-current" />
                </button>
              </div>

              <button onClick={() => setIsMuted(!isMuted)} className="p-2 text-white/40 hover:text-white/70 transition-colors">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            {/* Playlist Overlay */}
            {showPlaylist && (
              <div className="absolute inset-x-0 bottom-0 top-[140px] bg-black/90 backdrop-blur-xl p-4 animate-in slide-in-from-bottom-full duration-300 z-30">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                    <Radio className="w-3 h-3" />
                    Up Next
                  </h4>
                  <button onClick={() => setShowPlaylist(false)} className="text-white/40 hover:text-white text-xs">Close</button>
                </div>
                <div className="space-y-1 overflow-y-auto max-h-[140px] pr-2 no-scrollbar">
                  {PLAYLIST.map((track, i) => (
                    <button
                      key={track.id}
                      onClick={() => {
                        setCurrentTrackIndex(i);
                        setShowPlaylist(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-3 p-2 rounded-lg transition-colors group/item",
                        i === currentTrackIndex ? "bg-white/10" : "hover:bg-white/5"
                      )}
                    >
                      <div className="w-8 h-8 rounded bg-white/10 overflow-hidden">
                        <img src={track.cover} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <p className={cn("text-xs font-bold truncate", i === currentTrackIndex ? "text-white" : "text-white/70 group-hover/item:text-white")}>
                          {track.title}
                        </p>
                        <p className="text-[10px] text-white/40 truncate">{track.artist}</p>
                      </div>
                      {i === currentTrackIndex && isPlaying && (
                        <div className="flex gap-0.5 h-2 items-end">
                          <div className="w-0.5 h-full bg-white animate-music-bar-1" />
                          <div className="w-0.5 h-full bg-white animate-music-bar-2" />
                          <div className="w-0.5 h-full bg-white animate-music-bar-3" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Player Engine - Moved out of 'hidden' to ensure initialization */}
      <div className="absolute inset-0 -z-50 pointer-events-none opacity-0 overflow-hidden w-0 h-0">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${currentTrack.id}`}
          playing={isPlaying}
          volume={volume}
          muted={isMuted}
          onProgress={(state: any) => setProgress(state.playedSeconds)}
          onDuration={setDuration}
          onEnded={handleNext}
          config={{
            youtube: {
              playerVars: { 
                autoplay: 0,
                controls: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3
              }
            }
          }}
        />
      </div>
    </div>
  );
}

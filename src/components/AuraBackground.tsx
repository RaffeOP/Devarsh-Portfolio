import React from 'react';
import { cn } from '@/lib/utils';

export function AuraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background", className)}>
      {/* Mesh Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[120px] animate-aura-1 mix-blend-normal" />
      <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-500/10 blur-[130px] animate-aura-2 mix-blend-normal" />
      <div className="absolute bottom-[-20%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-emerald-500/10 blur-[140px] animate-aura-3 mix-blend-normal" />
      
      {/* Very Fine Film Grain Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ObsidianFlux = dynamic(() => import('./ObsidianFlux'), { ssr: false });
const AudioDeck = dynamic(() => import('./AudioDeck'), { ssr: false });

const ImmersiveLayout: React.FC = () => {
  return (
    <>
      <ObsidianFlux />
      <AudioDeck />
    </>
  );
};

export default ImmersiveLayout;

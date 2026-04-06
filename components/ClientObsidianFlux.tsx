'use client';

import dynamic from 'next/dynamic';

const ObsidianFlux = dynamic(() => import('./ObsidianFlux'), { ssr: false });

export default function ClientObsidianFlux() {
  return <ObsidianFlux />;
}

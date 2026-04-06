'use client';

import { useEffect } from 'react';
import { setViewsServerAction } from '@/app/actions/getAndSetViewsServerAction';
import { getLoveCountServerAction } from '@/app/actions/getAndSetLoveCountServerAction';

export function StatsInitializer() {
  useEffect(() => {
    async function initStats() {
      try {
        await setViewsServerAction();
        await getLoveCountServerAction();
      } catch (error) {
        console.error('Failed to load stats on client:', error);
      }
    }
    initStats();
  }, []);

  return null;
}

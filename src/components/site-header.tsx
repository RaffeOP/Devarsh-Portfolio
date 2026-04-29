import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { Button } from './ui/button';
import { ModeSwitcher } from './mode-switcher';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { Icons } from './icons';

export function SiteHeader() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-transparent backdrop-blur-xl">
        <div className="container-wrapper">
          <div className="container flex h-13 items-center">
            <MainNav />
            <MobileNav />
            <div className="ml-auto flex items-center gap-2 md:gap-3" />
          </div>
        </div>
      </header>
    );
  }

  const formattedTime = time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-transparent backdrop-blur-xl">
      <div className="container-wrapper">
        <div className="container flex h-13 items-center">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3 py-1.5 backdrop-blur-sm lg:flex">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <span className="text-xs font-medium tabular-nums tracking-tight text-foreground">{formattedTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted" asChild>
                <div><ModeSwitcher className="h-[18px] w-[18px]" /></div>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted" asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  <Icons.gitHub className="h-[18px] w-[18px]" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted" asChild>
                <a href="https://www.linkedin.com/in/devarsh-patel-7389b0321/" target="_blank" rel="noreferrer">
                  <Icons.linkedin className="h-[18px] w-[18px]" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

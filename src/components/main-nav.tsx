import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Icons } from './icons';

export function MainNav() {
  const { pathname } = useLocation();

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-6 flex items-center gap-2.5">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-semibold tracking-tight lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          to="/"
          className={cn(
            'transition-colors hover:text-foreground',
            pathname === '/' ? 'font-medium text-foreground' : 'text-muted-foreground'
          )}
        >
          Home
        </Link>
        <a
          href={siteConfig.links.resume}
          target="_blank"
          className="group flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          Resume
          <ExternalLink className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </nav>
    </div>
  );
}

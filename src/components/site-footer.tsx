import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="py-2 border-t border-border/10 bg-transparent backdrop-blur-lg">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-center py-4 space-y-2">
          <div className="max-w-3xl text-xs leading-relaxed text-center sm:text-sm text-balance text-muted-foreground">
            <span className="block sm:inline">©2026</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">
              Built with{' '}
              <span className="font-medium text-foreground">React</span>,{' '}
              <span className="font-medium text-foreground">shadcn/ui</span> and{' '}
              <span className="font-medium text-foreground">Tailwind CSS</span>
            </span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">
              Deployed with{' '}
              <span className="font-medium text-foreground">Vercel</span>
            </span>
          </div>
          <div className="text-xs text-center sm:text-sm text-muted-foreground">
            Developed by{' '}
            <a href={siteConfig.links.githubProfile} target="_blank" rel="noreferrer" className="font-medium transition-colors text-primary hover:text-primary/80">
              {siteConfig.author}
            </a>{' '}
            · Source code on{' '}
            <a href={siteConfig.links.repo} target="_blank" rel="noreferrer" className="font-medium transition-colors text-primary hover:text-primary/80">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

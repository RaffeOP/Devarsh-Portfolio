import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntroductionPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className=" text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">
          Devarsh Patel
        </PageHeaderHeading>
        <PageHeaderHeading className="mt-4 text-foreground text-lg md:text-xl font-syne tracking-tight">
          AI & ML Architect • Full-Stack Engineer • System Builder
        </PageHeaderHeading>
        <PageHeaderDescription className="max-w-[700px] text-muted-foreground leading-relaxed">
          Second-year Computer Science student at <span className="text-foreground font-bold">VIT Vellore</span>. I specialize in architecting intelligent systems and crafting high-performance, immersive digital experiences. Currently pushing the boundaries of <span className="text-foreground font-medium">Full-Stack Development</span> and <span className="text-foreground font-medium">Machine Learning</span>.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="lg" variant="outline" className="mercury-hover rounded-none border-white/20 hover:bg-white/5 px-8  font-bold uppercase tracking-widest">
            <a href={siteConfig.links.email}>
              <Mail className="mr-2 size-4" />
              Connect for Work
            </a>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;

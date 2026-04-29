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
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className=" text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">
          Devarsh Patel
        </PageHeaderHeading>
        <PageHeaderHeading className="mt-4 text-foreground text-lg md:text-xl">
          Budding Software Engineer & Full-Stack Enthusiast
        </PageHeaderHeading>
        <PageHeaderDescription className="max-w-[700px] text-muted-foreground leading-relaxed">
          Second-year Computer Science student at <span className="text-foreground font-bold">VIT Vellore</span>. I focus on building responsive, scalable applications and writing clean, maintainable code. Passionate about solving real-world problems through software and actively expanding my stack across both frontend and backend technologies.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="lg" variant="outline" className="mercury-hover rounded-none border-white/20 hover:bg-white/5 px-8  font-bold uppercase tracking-widest">
            <Link href={siteConfig.links.email}>
              <Mail className="mr-2 size-4" />
              Connect for Work
            </Link>
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

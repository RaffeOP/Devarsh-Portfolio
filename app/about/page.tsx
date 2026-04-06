import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className=" font-extrabold tracking-tighter">The Architect</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground text-lg uppercase tracking-tight">
          D. Patel // VIT Vellore CSE
        </PageHeaderHeading>
        <PageHeaderDescription className="text-muted-foreground leading-relaxed">
          I am <span className="text-foreground font-bold">Devarsh Patel</span>, a 2nd Year Computer Science student at VIT Vellore. I don't just write code; I architect systems that demand performance and deliver results.
        </PageHeaderDescription>

        <PageHeaderDescription className="text-muted-foreground leading-relaxed">
          My focus is at the intersection of <span className="text-foreground">AI</span> and <span className="text-foreground">Scalable Infrastructures</span>. Whether it's building Gen-4 campus intelligence platforms or optimizing real-time network analyzers, I prioritize engineering rigor over generic solutions.
        </PageHeaderDescription>

        <PageHeaderDescription className="text-muted-foreground leading-relaxed">
          I am driven by a <span className="text-foreground font-bold">"Masterpiece Protocol"</span> philosophy—every project must be a leap forward in design, technical debt reduction, and user impact. If it's not expanding the boundaries of what's possible, it's not finished.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;

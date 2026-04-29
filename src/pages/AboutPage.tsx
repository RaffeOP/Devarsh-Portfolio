import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className=" font-extrabold tracking-tighter">The Developer</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground text-lg uppercase tracking-tight">
          D. Patel // VIT Vellore CSE
        </PageHeaderHeading>
        <PageHeaderDescription className="text-muted-foreground leading-relaxed">
          I am <span className="text-foreground font-bold">Devarsh Patel</span>, a 2nd-year Computer Science student at VIT Vellore. I am passionate about software engineering, focusing on turning concepts into functional, efficient applications rather than just writing lines of code.
        </PageHeaderDescription>

        <PageHeaderDescription className="text-muted-foreground leading-relaxed">
          My focus is on modern full-stack development and building reliable software. Whether it's designing responsive frontend interfaces, integrating APIs, or setting up database architectures, I prioritize writing clean, maintainable code and solving real-world problems.
        </PageHeaderDescription>

        <PageHeaderDescription className="text-muted-foreground leading-relaxed">
          I am driven by a continuous learning philosophy—approaching every project as an opportunity to improve my logic, learn new frameworks, and deliver a better user experience. I am always experimenting, building, and expanding my capabilities as a developer.
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
export default AboutPage;

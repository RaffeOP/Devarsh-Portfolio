import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading className=" font-extrabold tracking-tighter">Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-4 text-muted-foreground text-sm">
          Where I learn and grow
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am currently pursuing a <strong>Bachelor of Technology (B.Tech) in Computer Science</strong> at <strong>Vellore Institute of Technology (VIT), Vellore</strong>. My coursework gives me a strong foundation in software engineering, AI, and machine learning.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Outside of classes, I spend my time building real projects. My ultimate goal is to take the theoretical concepts I learn from lectures and apply them to solve actual, real-world problems through code.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;

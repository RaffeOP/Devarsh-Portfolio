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
        <PageHeaderHeading className=" font-extrabold tracking-tighter">Academic Forge</PageHeaderHeading>
        <PageHeaderHeading className="mt-4 text-muted-foreground text-sm">
          Engineering Intelligence. Architecting Code.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Education is the engine of my digital evolution. Currently pursuing a <strong>Bachelor of Technology (B.Tech) in Computer Science</strong> at <strong>Vellore Institute of Technology (VIT), Vellore</strong>, I am deep-diving into the mechanics of AI, ML, and scalable software systems.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My journey is defined by a relentless drive to translate complex academic concepts into production-grade solutions. Beyond the classroom, I am a second-year builder, shipping projects that push the boundaries of what is possible in the CSE-AI ecosystem.
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

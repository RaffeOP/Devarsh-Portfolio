import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className=" font-extrabold tracking-tighter">Stack & Armory</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground text-sm">
          Engineered for Performance. Optimized for Scale.
        </PageHeaderHeading>
        <PageHeaderDescription className="text-muted-foreground leading-relaxed max-w-[800px]">
          As a specialized <span className="text-foreground font-bold">Systems Architect</span>, I maintain a high-precision toolkit focused on AI integration and scalable web infrastructure. From <span className="text-foreground">Next.js 15</span> to <span className="text-foreground">PyTorch</span>, every tool is chosen to drive negentropy and compound technical value.
        </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}
      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: 'mr-2 size-4',
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;

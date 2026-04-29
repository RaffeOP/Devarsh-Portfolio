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
        <PageHeaderHeading className=" font-extrabold tracking-tighter">Tech Stack & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground text-sm">
          What I use to bring ideas to life
        </PageHeaderHeading>
        <PageHeaderDescription className="text-muted-foreground leading-relaxed max-w-[800px]">
          As a <span className="text-foreground font-bold">developer</span>, I've dedicated my time to truly mastering the tools I work with. My focus isn't just on knowing the syntax, but on understanding how these technologies can be used to solve complex problems effectively. This hands-on experience has made me highly adaptable, allowing me to build robust, efficient, and scalable applications with confidence.
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

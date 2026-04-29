import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants/projects';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading className=" font-extrabold tracking-tighter">Projects</PageHeaderHeading>
        <PageHeaderHeading className="mt-4 text-muted-foreground text-sm">
          Repositories & Applications
        </PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 card-container">
        {projects.map((project, index) => (
          <Card
            title={project.overview}
            key={index}
            className="mercury-ripple relative w-full transition-all duration-300 cursor-pointer isolate hover:scale-[1.02] active:scale-[0.98] border-white/10 bg-black/40 backdrop-blur-sm"
          >
            <CardHeader>
              <CardTitle className="leading-6">{project.title}</CardTitle>
              <CardDescription className="flex flex-col gap-2">
                {project.tagline}
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-muted-foreground "
                >
                  Learn More...
                  <span className="absolute inset-0"></span>
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <PageHeader className="mb-6 mt-16">
        <PageHeaderHeading className=" font-extrabold tracking-tighter text-3xl">Currently Learning & Building</PageHeaderHeading>
        <PageHeaderHeading className="mt-4 text-muted-foreground text-sm">
          What I'm focused on right now
        </PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 card-container mb-10">
        <Card className="mercury-ripple relative w-full border-white/10 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="leading-6">Algorithm Visualizer</CardTitle>
            <CardDescription>
              Building an interactive web tool to visualize common sorting and pathfinding algorithms.
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="mercury-ripple relative w-full border-white/10 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="leading-6">AI & Machine Learning</CardTitle>
            <CardDescription>
              Exploring artificial intelligence concepts and machine learning fundamentals to build smarter applications.
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="mercury-ripple relative w-full border-white/10 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="leading-6">RAG Systems & Automations</CardTitle>
            <CardDescription>
              Learning how to connect AI to custom data sources and automate daily developer workflows.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Pager
        prevHref="/about"
        nextHref="/tech-stack-tools"
        prevTitle="About"
        nextTitle="Tech Stack & Tools"
      />
    </>
  );
};
export default ProjectsPage;

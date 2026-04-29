import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { LenisProvider } from '@/components/providers/lenis-provider';
import { Toaster } from '@/components/ui/sonner';
import { SiteHeader } from '@/components/site-header';
import { SideNav } from '@/components/side-nav';
import { SiteFooter } from '@/components/site-footer';
import ObsidianFlux from '@/components/ObsidianFlux';
import AudioDeck from '@/components/AudioDeck';
import { docsConfig } from '@/config/docs';
import { lazy, Suspense } from 'react';
import Loading from '@/pages/Loading';

// Lazy load pages
const IntroductionPage = lazy(() => import('@/pages/IntroductionPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'));
const TechStackPage = lazy(() => import('@/pages/TechStackPage'));
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
const EducationPage = lazy(() => import('@/pages/EducationPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const StatsPage = lazy(() => import('@/pages/StatsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <LenisProvider>
        <svg className="hidden">
          <filter id="mercury-ripple">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.04" numOctaves={3} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={4} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <ObsidianFlux />
        <AudioDeck />
        <div vaul-drawer-wrapper="">
          <div className="relative flex flex-col min-h-svh bg-transparent z-10">
            <div
              data-wrapper=""
              className="flex flex-col flex-1 border-grid bg-transparent relative z-10"
            >
              <SiteHeader />
              <main className="flex flex-col flex-1">
                <div className="w-full">
                  <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4 sm:px-6 lg:px-8">
                    <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
                      <div className="h-full py-6 pr-4 overflow-auto no-scrollbar lg:py-8">
                        <SideNav config={docsConfig} />
                      </div>
                    </aside>
                    <div className="flex flex-col flex-1 py-6 pr-4 lg:py-8">
                      <Suspense fallback={<Loading />}>
                        <Routes>
                          <Route path="/" element={<IntroductionPage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/projects" element={<ProjectsPage />} />
                          <Route path="/projects/:id" element={<ProjectDetailPage />} />
                          <Route path="/tech-stack-tools" element={<TechStackPage />} />
                          <Route path="/experience" element={<ExperiencePage />} />
                          <Route path="/education" element={<EducationPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/stats" element={<StatsPage />} />
                          <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                      </Suspense>
                    </div>
                  </div>
                </div>
              </main>
              <SiteFooter />
            </div>
          </div>
        </div>
      </LenisProvider>
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  );
}

export default App;

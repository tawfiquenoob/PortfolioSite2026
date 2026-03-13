import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PageViewTracker } from "@/components/page-view-tracker";
import { ProjectsSection } from "@/components/projects-section";
import { fetchProjects } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const projects = await fetchProjects();

  return (
    <>
      <Navbar />
      <main>
        <PageViewTracker />
        <HeroSection />
        <ProjectsSection projects={projects} />
      </main>
    </>
  );
}

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { TickerSection } from "@/components/ticker-section";
import { TimelineSection } from "@/components/timeline-section";
import { fetchProjects } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const projects = await fetchProjects();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TickerSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <SkillsSection />
        <TimelineSection />
        <ContactSection />
      </main>
    </>
  );
}

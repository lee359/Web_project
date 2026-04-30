/* =============================================================
   PAGE: Home
   Design: Cyberpunk Blueprint — single page portfolio
   Layout: Fixed sidebar (220px) + scrollable main content
   ============================================================= */

import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import LinksSection from "@/components/sections/LinksSection";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#050d1a" }}
    >
      {/* Fixed sidebar */}
      <Sidebar />

      {/* Main content — offset by sidebar width on desktop */}
      <main
        className="w-full lg:pl-[220px]"
        style={{ minHeight: "100vh" }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <RoadmapSection />
        <LinksSection />
        <Footer />
      </main>
    </div>
  );
}

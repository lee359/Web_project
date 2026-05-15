/* =============================================================
   PAGE: Home
   Design: Cyberpunk Blueprint — single page portfolio
   Layout: Fixed sidebar (220px) + scrollable main content
   ============================================================= */

import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectslineSection from "@/components/sections/ProjectslineSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import LinksSection from "@/components/sections/LinksSection";

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#projects") {
      const target = document.getElementById("projects");
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        });
      }
    }
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--color-bg-primary)" }}
    >
      {/* Fixed sidebar */}
      <Sidebar />

      {/* Main content — offset by sidebar width on desktop */}
      <main
        className="w-full md:pl-[220px]"
        style={{ minHeight: "100vh" }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectslineSection />
        <RoadmapSection />
        <LinksSection />
        <Footer />
      </main>
    </div>
  );
}

import Footer from "@/components/Footer";
import ProjectsSection2 from "@/components/sections/ProjectsSection-2";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ProjectsTarot() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen page-transition bg-[#070615]">
      <button
        onClick={() => setLocation("/#projects")}
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 transition-all duration-200"
        style={{
          background: "var(--color-bg-navy-20)",
          border: "1px solid var(--color-accent-cyan-35)",
          color: "var(--color-accent-cyan)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.8rem",
          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
        }}
      >
        <span>←</span>
        <span>返回專案列表</span>
      </button>
      <main><ProjectsSection2 /></main>
      <Footer />
    </div>
  );
}

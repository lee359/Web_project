import Footer from "@/components/Footer";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Projects() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen page-transition" style={{ background: "var(--color-bg-primary)" }}>
      <button
        onClick={() => setLocation("/")}
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
        <span>返回首頁</span>
      </button>

      <main className="w-full" style={{ minHeight: "100vh" }}>
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
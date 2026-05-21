/* =============================================================
   SECTION: Projects Line
   Design: Cyberpunk Blueprint — bulleted list project display
   ============================================================= */

import { useInView } from "@/hooks/useInView";
import { Link } from "wouter";

const projects = [
  {
    title: "基於 MCP 協定與 YOLOv8n 之即時影像辨識系統實作",
    icon: "◈",
  },
  {
    title: "To be continued..."
  },
];

export default function ProjectslineSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-20 min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--color-bg-primary-alt)" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 circuit-bg" style={{ opacity: 0.25 }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
          className="mb-12"
        >
          <div
            style={{
              color: "#00d4ff",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              marginBottom: "0.5rem",
            }}
          >
            04 / PROJECTS
          </div>
          <h2
            className="section-title"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#e2e8f0",
            }}
          >
            專案作品
          </h2>
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, var(--color-accent-cyan), transparent)" }} />
        </div>

        {/* Projects list */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded"
                style={{
                  background: "rgba(0, 212, 255, 0.03)",
                  border: "1px solid var(--color-accent-cyan-15)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-accent-cyan)",
                    fontSize: "1rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    minWidth: "20px",
                  }}
                >
                  {project.icon}
                </span>
                <div className="flex-1">
                  <p
                    style={{
                      color: "var(--color-text-primary)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA: View projects — same behavior as HeroSection */}
          <div className="mt-8">
            <Link href="/projects">
              <a
                className="clip-btn inline-flex items-center gap-2 px-6 py-3 font-medium transition-all duration-200"
                style={{
                  background: "var(--color-accent-violet-10)",
                  border: "1px solid var(--color-accent-violet-40)",
                  color: "var(--color-accent-violet-light)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--color-accent-violet-20)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px var(--color-accent-violet-30)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--color-accent-violet-10)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                查看各專案細節
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

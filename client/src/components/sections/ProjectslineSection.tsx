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
    href: "/projects/mcp-yolov8",
  },
  {
    title: "網站設計---塔羅牌占卜平台",
    icon: "◈",
    href: "/projects/tarot-platform",
  },
  {
    title: "To be continued...",
    href: undefined,
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
              color: "var(--color-text-primary)",
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
              color: "var(--color-text-primary)",
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
            {projects.map((project, index) => {
              const projectItem = (
                <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded ${
                  project.title !== "To be continued..."
                    ? "transition-all duration-300 ease-out hover:translate-x-1 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[var(--project-list-hover-shadow)] md:hover:translate-x-2 md:hover:-translate-y-1 md:hover:scale-[1.02]"
                    : ""
                }`}
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
              );

              return project.href ? (
                <Link key={index} href={project.href}>
                  <a className="block cursor-pointer" style={{ textDecoration: "none" }}>
                    {projectItem}
                  </a>
                </Link>
              ) : projectItem;
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

/* =============================================================
   SECTION: Links & GitHub Stats
   Design: Cyberpunk Blueprint — link cards + GitHub stats embed
   ============================================================= */

import { useInView } from "@/hooks/useInView";

const links = [
  {
    platform: "GitHub",
    url: "https://github.com/lee359",
    desc: "開源專案與程式作品集",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "#00d4ff",
    label: "github.com/lee359",
  },
  {
    platform: "Email",
    url: "mailto:lee359@example.com",
    desc: "聯絡信箱",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    color: "#7c3aed",
    label: "lee359@example.com",
  },
];

export default function LinksSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="links"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 relative"
      style={{ background: "#060f1e" }}
    >
      <div className="absolute inset-0 circuit-bg" style={{ opacity: 0.25 }} />

      <div className="relative z-10 max-w-5xl mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div
          className="mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
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
            06 / LINKS
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
            相關連結
          </h2>
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }} />
        </div>

        {/* Link cards */}
        <div
          className="grid sm:grid-cols-2 gap-4 mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          {links.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded cyber-card group"
              style={{
                clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: `${link.color}12`,
                  border: `1px solid ${link.color}30`,
                  color: link.color,
                }}
              >
                {link.icon}
              </div>
              <div>
                <div
                  style={{
                    color: "#e2e8f0",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  {link.platform}
                </div>
                <div
                  style={{
                    color: link.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  {link.label}
                </div>
                <div
                  style={{
                    color: "rgba(226,232,240,0.45)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  {link.desc}
                </div>
              </div>
              <div className="ml-auto">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={link.color}
                  strokeWidth="2"
                  style={{ opacity: 0.5, transition: "opacity 0.2s" }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Stats */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.3s",
          }}
        >
          <h3
            className="mb-6 flex items-center gap-2"
            style={{
              color: "#00d4ff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
            }}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>▸</span>
            GitHub 統計
          </h3>

          <div
            className="p-6 rounded cyber-card"
            style={{
              clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
            }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <img
                src="https://github-readme-stats.vercel.app/api?username=lee359&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a1628&title_color=00d4ff&icon_color=7c3aed&text_color=e2e8f0"
                alt="GitHub Stats"
                className="rounded"
                style={{ maxWidth: "100%", height: "auto" }}
                loading="lazy"
              />
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=lee359&repo=Web_project-lee359&layout=compact&theme=tokyonight&hide_border=true&bg_color=0a1628&title_color=00d4ff&text_color=e2e8f0"
                alt="Top Languages"
                className="rounded"
                style={{ maxWidth: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   COMPONENT: Sidebar Navigation
   Design: Cyberpunk Blueprint — left fixed nav with glow indicators
   ============================================================= */

import { useState, useEffect } from "react";

const navItems = [
  { id: "hero", label: "首頁", icon: "⬡" },
  { id: "about", label: "關於我", icon: "◈" },
  { id: "skills", label: "技術技能", icon: "◉" },
  { id: "education", label: "學術背景", icon: "◈" },
  { id: "projects", label: "專案作品", icon: "◉" },
  { id: "roadmap", label: "學習計畫", icon: "◈" },
  { id: "links", label: "相關連結", icon: "◉" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollY = window.scrollY + 300;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed left-4 z-50 p-2 rounded group transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
        style={{
          top: "25px",
          transform: `translateY(-50%) ${isOpen ? "scale(0.92)" : "scale(1)"}`,
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? "none" : "auto",
          background: "rgba(10,22,40,0.9)",
          border: "1px solid rgba(0,212,255,0.35)",
          boxShadow: "0 0 0 rgba(0,212,255,0)",
        }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <div className="space-y-1">
          <span className="block w-5 h-0.5 rounded transition-all duration-300 group-hover:w-4" style={{ background: "#00d4ff" }}></span>
          <span className="block w-5 h-0.5 rounded transition-all duration-300" style={{ background: "#00d4ff" }}></span>
          <span className="block w-5 h-0.5 rounded transition-all duration-300 group-hover:w-4" style={{ background: "#00d4ff" }}></span>
        </div>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          style={{ background: "rgba(5,13,26,0.8)" }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Top handle bar for mobile - indicates sidebar presence */}
      <div
        className="fixed top-0 left-0 right-0 z-20 transition-opacity duration-300"
        style={{
          height: "50px",
          background: "linear-gradient(90deg, rgba(0,212,255,0.15), rgba(124,58,237,0.1), rgba(0,212,255,0.08))",
          borderBottom: "2px solid rgba(0,212,255,0.3)",
          backdropFilter: "blur(8px)",
          opacity: isOpen ? "0" : "1",
          pointerEvents: isOpen ? "none" : "auto",
        }}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 flex flex-col transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          width: "220px",
          background: "linear-gradient(180deg, #060e1e 0%, #080f1f 100%)",
          borderRight: "1px solid rgba(0,212,255,0.15)",
          boxShadow: "4px 0 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo area */}
        <div className="p-6 pb-4" style={{ borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))",
                border: "1px solid rgba(0,212,255,0.4)",
                color: "#00d4ff",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              L
            </div>
            <div>
              <div style={{ color: "#e2e8f0", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                李O恩
              </div>
              <div style={{ color: "#00d4ff", fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", opacity: 0.8 }}>
                EE @ CYCU
              </div>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 group"
                style={{
                  background: isActive ? "rgba(0,212,255,0.08)" : "transparent",
                  borderLeft: isActive ? "2px solid #00d4ff" : "2px solid transparent",
                  color: isActive ? "#00d4ff" : "rgba(226,232,240,0.6)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                <span
                  style={{
                    color: isActive ? "#00d4ff" : "rgba(0,212,255,0.3)",
                    fontSize: "0.7rem",
                    transition: "color 0.2s",
                  }}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer links */}
        <div className="p-4" style={{ borderTop: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/lee359"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors duration-200"
              style={{ color: "rgba(226,232,240,0.5)", fontFamily: "'JetBrains Mono', monospace" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.5)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
          <div
            className="text-center mt-2"
            style={{ color: "rgba(226,232,240,0.2)", fontSize: "0.6rem", fontFamily: "'JetBrains Mono', monospace" }}
          >
            v2026.03
          </div>
        </div>
      </aside>
    </>
  );
}

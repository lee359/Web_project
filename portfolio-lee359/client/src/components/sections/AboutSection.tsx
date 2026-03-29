/* =============================================================
   SECTION: About Me
   Design: Cyberpunk Blueprint — asymmetric card layout
   ============================================================= */

import { useInView } from "@/hooks/useInView";

const highlights = [
  { label: "Python", desc: "資料分析與機器學習建模", icon: "🐍" },
  { label: "Web Dev", desc: "前後端整合開發", icon: "🌐" },
  { label: "Clean Code", desc: "清晰、易讀且易維護", icon: "✨" },
  { label: "Git / GitHub", desc: "版本控制與協作開發", icon: "⚙️" },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #050d1a 0%, #060f1e 100%)" }}
    >
      {/* Circuit bg */}
      <div className="absolute inset-0 circuit-bg" style={{ opacity: 0.3 }} />

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
            01 / ABOUT
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
            關於我
          </h2>
          <div
            className="mt-3 h-px w-24"
            style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Bio text */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease 0.1s",
            }}
          >
            <div
              className="p-6 rounded cyber-card"
              style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
            >
              <p
                style={{
                  color: "rgba(226,232,240,0.8)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                我是就讀於<span style={{ color: "#00d4ff" }}>中原大學電機工程學系</span>的在學學生，對{" "}
                <span style={{ color: "#a78bfa" }}>人工智慧</span>與{" "}
                <span style={{ color: "#a78bfa" }}>軟體開發</span>充滿熱忱。
              </p>
              <p
                style={{
                  color: "rgba(226,232,240,0.7)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                }}
              >
                熱衷於將所學技術實際應用於專案中，並持續透過自學與課程探索新技術。擅長以下幾個領域：
              </p>
            </div>

            {/* Decorative data line */}
            <div
              className="mt-4 flex items-center gap-3"
              style={{ color: "rgba(0,212,255,0.4)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
            >
              <span>▶</span>
              <span>SYSTEM STATUS: ONLINE</span>
              <div className="flex-1 h-px" style={{ background: "rgba(0,212,255,0.15)" }} />
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div
            className="grid grid-cols-2 gap-3"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="p-4 rounded cyber-card"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div
                  style={{
                    color: "#00d4ff",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    color: "rgba(226,232,240,0.6)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

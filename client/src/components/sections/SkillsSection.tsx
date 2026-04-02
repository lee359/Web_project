/* =============================================================
   SECTION: Technical Skills
   Design: Cyberpunk Blueprint — animated skill bars + tag clouds
   ============================================================= */

import { useInView } from "@/hooks/useInView";
import { useState, useEffect } from "react";

const SKILLS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663479025969/nNCp97MS5SZyN9jxyzYEoM/skills-bg-i7wDvHudkcU7ZoUs6f4Q6i.webp";

const languages = [
  { name: "Python", level: 85, usage: "資料分析 / ML 建模", color: "#00d4ff" },
  { name: "JavaScript", level: 75, usage: "Web 前後端開發", color: "#00d4ff" },
  { name: "C / C++", level: 65, usage: "系統程式 / 演算法", color: "#7c3aed" },
  { name: "SQL", level: 70, usage: "資料庫查詢與管理", color: "#7c3aed" },
  { name: "Bash", level: 60, usage: "Shell 腳本自動化", color: "#00d4ff" },
];

const toolGroups = [
  {
    category: "AI / ML",
    color: "#00d4ff",
    tools: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain"],
  },
  {
    category: "Web 後端",
    color: "#a78bfa",
    tools: ["FastAPI", "Flask", "Django"],
  },
  {
    category: "Web 前端",
    color: "#00d4ff",
    tools: ["React", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    category: "資料分析",
    color: "#a78bfa",
    tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "DevOps",
    color: "#00d4ff",
    tools: ["Git", "GitHub Actions", "Docker", "Docker Compose"],
  },
];

function SkillBar({ name, level, usage, color, animate }: {
  name: string; level: number; usage: string; color: string; animate: boolean;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setWidth(level), 200);
      return () => clearTimeout(timer);
    }
  }, [animate, level]);

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span
            style={{
              color: "#e2e8f0",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            {name}
          </span>
          <span
            style={{
              color: "rgba(226,232,240,0.45)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
            }}
          >
            {usage}
          </span>
        </div>
        <span
          style={{
            color: color,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}66`,
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-20 min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "#060f1e" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${SKILLS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />
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
            02 / SKILLS
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
            技術技能
          </h2>
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Language bars */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease 0.1s",
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
              程式語言熟練度
            </h3>
            {languages.map((lang) => (
              <SkillBar key={lang.name} {...lang} animate={inView} />
            ))}
          </div>

          {/* Right: Tool tags */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.2s",
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
              框架與工具
            </h3>
            <div className="space-y-5">
              {toolGroups.map((group) => (
                <div key={group.category}>
                  <div
                    className="mb-2 flex items-center gap-2"
                    style={{
                      color: "rgba(226,232,240,0.5)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: group.color, boxShadow: `0 0 4px ${group.color}` }}
                    />
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className={group.color === "#00d4ff" ? "tech-tag" : "tech-tag-violet"}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

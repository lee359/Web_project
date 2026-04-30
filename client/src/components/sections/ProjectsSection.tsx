/* =============================================================
   SECTION: Projects
   Design: Cyberpunk Blueprint — project card with banner image,
   code block display, tech tags
   ============================================================= */

import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const PROJECT_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663479025969/nNCp97MS5SZyN9jxyzYEoM/project-yolo-banner-eewdoBkx74Zd6CbmhX88zi.webp";

const mcpConfig = `{
  "mcpServers": {
    "YOLOv8 Detection Server": {
      "command": "...\\\\venv\\\\Scripts\\\\python.exe",
      "args": [
        "...\\\\mcpserver.py"
      ],
      "env": {
        "PYTHONPATH": "...\\\\MCPproject-YOLOv8"
      }
    }
  }
}`;

export default function ProjectsSection() {
  const { ref, inView } = useInView();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(mcpConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-20 min-h-screen flex items-center relative"
      style={{ background: "#060f1e" }}
    >
      <div className="absolute inset-0 circuit-bg" style={{ opacity: 0.25 }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 lg:px-16">
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
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }} />
        </div>

        {/* Project card */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          <div
            className="rounded overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(15,32,64,0.9) 100%)",
              border: "1px solid rgba(0,212,255,0.2)",
              clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
            }}
          >
            {/* Banner */}
            <div className="relative h-48 lg:h-64 overflow-hidden">
              <img
                src={PROJECT_BANNER}
                alt="YOLOv8 MCP 即時影像辨識系統"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.7) saturate(1.3)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(10,22,40,0.95) 100%)",
                }}
              />
              {/* Project number badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded"
                style={{
                  background: "rgba(0,212,255,0.15)",
                  border: "1px solid rgba(0,212,255,0.4)",
                  color: "#00d4ff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                PROJECT_01
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              <h3
                className="mb-3"
                style={{
                  color: "#e2e8f0",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: 1.4,
                }}
              >
                基於 MCP 協定與 YOLOv8n 之即時影像辨識系統實作
              </h3>

              <p
                className="mb-5"
                style={{
                  color: "rgba(226,232,240,0.65)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                }}
              >
                整合 Model Context Protocol (MCP) 與 YOLOv8n 物件偵測模型，建立即時影像辨識伺服器，
                支援透過 MCP 協定進行模型推論與結果回傳。
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "YOLOv8", "MCP Protocol", "Computer Vision", "FastAPI"].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              {/* Code block */}
              <div className="rounded overflow-hidden" style={{ border: "1px solid rgba(0,212,255,0.15)" }}>
                {/* Code header */}
                <div
                  className="flex items-center justify-between px-4 py-2"
                  style={{ background: "rgba(0,212,255,0.05)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                    </div>
                    <span
                      style={{
                        color: "rgba(0,212,255,0.6)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.7rem",
                      }}
                    >
                      mcp_config.json
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-200"
                    style={{
                      background: copied ? "rgba(0,212,255,0.15)" : "transparent",
                      border: "1px solid rgba(0,212,255,0.2)",
                      color: copied ? "#00d4ff" : "rgba(226,232,240,0.4)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                    }}
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                {/* Code content */}
                <pre
                  className="p-4 overflow-x-auto text-sm"
                  style={{
                    background: "rgba(5,13,26,0.8)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.78rem",
                    lineHeight: 1.6,
                    color: "#e2e8f0",
                    margin: 0,
                  }}
                >
                  <code>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>{"{"}</span>{"\n"}
                    {"  "}<span style={{ color: "#a78bfa" }}>"mcpServers"</span>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>: {"{"}</span>{"\n"}
                    {"    "}<span style={{ color: "#a78bfa" }}>"YOLOv8 Detection Server"</span>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>: {"{"}</span>{"\n"}
                    {"      "}<span style={{ color: "#a78bfa" }}>"command"</span>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>: </span>
                    <span style={{ color: "#00d4ff" }}>"...\venv\Scripts\python.exe"</span>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>,</span>{"\n"}
                    {"      "}<span style={{ color: "#a78bfa" }}>"args"</span>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>: [</span>
                    <span style={{ color: "#00d4ff" }}>"...\mcpserver.py"</span>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>],</span>{"\n"}
                    {"      "}<span style={{ color: "#a78bfa" }}>"env"</span>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>: {"{"}</span>{"\n"}
                    {"        "}<span style={{ color: "#a78bfa" }}>"PYTHONPATH"</span>
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>: </span>
                    <span style={{ color: "#00d4ff" }}>"...\MCPproject-YOLOv8"</span>{"\n"}
                    {"      "}<span style={{ color: "rgba(226,232,240,0.4)" }}>{"}"}</span>{"\n"}
                    {"    "}<span style={{ color: "rgba(226,232,240,0.4)" }}>{"}"}</span>{"\n"}
                    {"  "}<span style={{ color: "rgba(226,232,240,0.4)" }}>{"}"}</span>{"\n"}
                    <span style={{ color: "rgba(226,232,240,0.4)" }}>{"}"}</span>
                  </code>
                </pre>
              </div>

              <p
                className="mt-3"
                style={{
                  color: "rgba(226,232,240,0.35)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                }}
              >
                ※ [USER] 為電腦使用者名稱，為保護個人隱私故省略
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

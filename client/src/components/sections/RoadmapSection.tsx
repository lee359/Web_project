/* =============================================================
   SECTION: Learning Plan & Roadmap
   Design: Cyberpunk Blueprint — interactive card carousel + checklist
   ============================================================= */

import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const roadmapSteps = [
  {
    step: "Step 01",
    title: "🫡 現在",
    desc: "建立數學與程式基礎，整理學習節奏與專題方向。",
    color: "#00d4ff",
  },
  {
    step: "Step 02",
    title: "深度學習進階",
    desc: "強化 CNN、RNN、訓練策略與模型調參實作。",
    color: "#00d4ff",
  },
  {
    step: "Step 03",
    title: "Transformer & LLM",
    desc: "掌握注意力機制、Prompt 設計與檢索增強流程。",
    color: "#7c3aed",
  },
  {
    step: "Step 04",
    title: "MLOps 與部署",
    desc: "建立模型部署、版本管理與監控回饋機制。",
    color: "#7c3aed",
  },
  {
    step: "Step 05",
    title: "Kubernetes 入門",
    desc: "學習容器編排、服務擴展與叢集維運基礎。",
    color: "#00d4ff",
  },
  {
    step: "Step 06",
    title: "研究方向確定",
    desc: "聚焦主題、完成文獻整理並建立驗證方法。",
    color: "#00d4ff",
  },
  {
    step: "Step 07",
    title: "🎯 論文 / 求職",
    desc: "輸出成果、整理作品集與履歷，銜接下一階段。",
    color: "#7c3aed",
  },
];

const goals = [
  { done: true, text: "完成機器學習期末專題並上傳 GitHub" },
  { done: true, text: "建立個人 GitHub Portfolio 主頁" },
  { done: false, text: "學習 Docker 容器化技術" },
  { done: false, text: "取得 AWS Cloud Practitioner 認證" },
  { done: false, text: "在 Kaggle 競賽中取得銅牌以上名次" },
  { done: false, text: "發表至少一篇技術部落格文章" },
  { done: false, text: "完成畢業專題系統雛形" },
];

export default function RoadmapSection() {
  const { ref, inView } = useInView();
  const [activeStep, setActiveStep] = useState(0);

  const prev = () => setActiveStep((s) => Math.max(0, s - 1));
  const next = () => setActiveStep((s) => Math.min(roadmapSteps.length - 1, s + 1));

  const current = roadmapSteps[activeStep];

  return (
    <section
      id="roadmap"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #050d1a 0%, #060f1e 100%)" }}
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
            05 / ROADMAP
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
            學習計畫
          </h2>
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Semester goals */}
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
              本學期目標清單
            </h3>

            <div
              className="p-5 rounded cyber-card"
              style={{
                clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
              }}
            >
              {/* Progress bar */}
              <div className="mb-5">
                <div className="flex justify-between mb-1.5">
                  <span style={{ color: "rgba(226,232,240,0.5)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}>
                    PROGRESS
                  </span>
                  <span style={{ color: "#00d4ff", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}>
                    {goals.filter((g) => g.done).length} / {goals.length}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-full skill-bar-fill"
                    style={{
                      width: `${(goals.filter((g) => g.done).length / goals.length) * 100}%`,
                      background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
                      boxShadow: "0 0 8px rgba(0,212,255,0.5)",
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                {goals.map((goal, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-2"
                    style={{
                      borderBottom: i < goals.length - 1 ? "1px solid rgba(0,212,255,0.06)" : "none",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5"
                      style={{
                        background: goal.done ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${goal.done ? "rgba(0,212,255,0.5)" : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      {goal.done && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span
                      style={{
                        color: goal.done ? "rgba(226,232,240,0.5)" : "rgba(226,232,240,0.8)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        lineHeight: 1.5,
                        textDecoration: goal.done ? "line-through" : "none",
                        textDecorationColor: "rgba(226,232,240,0.3)",
                      }}
                    >
                      {goal.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive roadmap card */}
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
              2026 年技術學習路線圖
            </h3>

            {/* Step indicators */}
            <div className="flex gap-1.5 mb-5">
              {roadmapSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="flex-1 h-1 rounded-full transition-all duration-300"
                  style={{
                    background: i === activeStep
                      ? current.color
                      : i < activeStep
                        ? `${current.color}40`
                        : "rgba(255,255,255,0.08)",
                    boxShadow: i === activeStep ? `0 0 6px ${current.color}` : "none",
                  }}
                />
              ))}
            </div>

            {/* Card */}
            <div
              className="relative rounded overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(10,22,40,0.95), rgba(15,32,64,0.9))",
                border: `1px solid ${current.color}40`,
                boxShadow: `0 0 30px ${current.color}15`,
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                minHeight: "220px",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            >
              {/* Left click zone */}
              <button
                onClick={prev}
                disabled={activeStep === 0}
                className="absolute left-0 top-0 bottom-0 w-1/3 z-10 flex items-center justify-start pl-4 transition-opacity"
                style={{ opacity: activeStep === 0 ? 0.2 : 0, background: "transparent" }}
                onMouseEnter={(e) => { if (activeStep > 0) e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
                aria-label="上一階段"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={current.color} strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Right click zone */}
              <button
                onClick={next}
                disabled={activeStep === roadmapSteps.length - 1}
                className="absolute right-0 top-0 bottom-0 w-1/3 z-10 flex items-center justify-end pr-4 transition-opacity"
                style={{ opacity: activeStep === roadmapSteps.length - 1 ? 0.2 : 0, background: "transparent" }}
                onMouseEnter={(e) => { if (activeStep < roadmapSteps.length - 1) e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
                aria-label="下一階段"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={current.color} strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Card content */}
              <div className="p-8 text-center">
                <div
                  className="mb-3"
                  style={{
                    color: current.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    opacity: 0.8,
                  }}
                >
                  {current.step}
                </div>
                <h4
                  className="mb-4"
                  style={{
                    color: "#e2e8f0",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                  }}
                >
                  {current.title}
                </h4>
                <p
                  style={{
                    color: "rgba(226,232,240,0.65)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {current.desc}
                </p>

                {/* Glow decoration */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${current.color}20 0%, transparent 70%)`,
                    filter: "blur(10px)",
                  }}
                />
              </div>
            </div>

            {/* Navigation hint */}
            <div
              className="mt-4 text-center"
              style={{
                color: "rgba(226,232,240,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
              }}
            >
              ← 點擊卡片左側/右側切換階段 →
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={prev}
                disabled={activeStep === 0}
                className="px-4 py-2 rounded transition-all duration-200 flex items-center gap-2"
                style={{
                  background: activeStep === 0 ? "rgba(255,255,255,0.03)" : "rgba(0,212,255,0.08)",
                  border: `1px solid ${activeStep === 0 ? "rgba(255,255,255,0.08)" : "rgba(0,212,255,0.3)"}`,
                  color: activeStep === 0 ? "rgba(226,232,240,0.2)" : "#00d4ff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                }}
              >
                ← PREV
              </button>
              <span
                style={{
                  color: "rgba(226,232,240,0.4)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {activeStep + 1} / {roadmapSteps.length}
              </span>
              <button
                onClick={next}
                disabled={activeStep === roadmapSteps.length - 1}
                className="px-4 py-2 rounded transition-all duration-200 flex items-center gap-2"
                style={{
                  background: activeStep === roadmapSteps.length - 1 ? "rgba(255,255,255,0.03)" : "rgba(0,212,255,0.08)",
                  border: `1px solid ${activeStep === roadmapSteps.length - 1 ? "rgba(255,255,255,0.08)" : "rgba(0,212,255,0.3)"}`,
                  color: activeStep === roadmapSteps.length - 1 ? "rgba(226,232,240,0.2)" : "#00d4ff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                }}
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

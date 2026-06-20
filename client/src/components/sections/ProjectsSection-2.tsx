import { useInView } from "@/hooks/useInView";

const PROJECT_BANNER = "/luna-arcana-home.png";
const PROJECT_PREVIEW = "/luna-arcana-cards.png";
const PROJECT_URL = "https://tarot-card-mu.vercel.app";

const designHighlights = [
  { title: "沉浸式占卜流程", description: "從主題選擇、抽牌到依序翻牌，建立安靜且富有儀式感的使用體驗。" },
  { title: "月夜品牌視覺", description: "以深靛夜空、霧金線條、月相與星點，建立一致而清晰的視覺語言。" },
  { title: "響應式介面", description: "針對桌面與行動裝置調整牌陣、文字層級及操作區域，維持良好可讀性。" },
];

export default function ProjectsSection2() {
  const { ref, inView } = useInView();

  return (
    <section
      id="project-tarot"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative flex min-h-screen w-full items-center py-20"
      style={{ background: "var(--color-bg-primary-alt)" }}
    >
      <div className="circuit-bg absolute inset-0" style={{ opacity: 0.25 }} />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-8 lg:px-16">
        <div
          className="mb-12"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}
        >
          <div style={{ color: "var(--color-accent-cyan)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>
            / PROJECTS
          </div>
          <h2 className="section-title" style={{ color: "var(--color-text-primary)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700 }}>
            專案作品
          </h2>
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, var(--color-accent-cyan), transparent)" }} />
        </div>

        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}>
          <article
            className="overflow-hidden rounded"
            style={{
              background: "linear-gradient(135deg, var(--color-section-panel-bg-strong) 0%, var(--color-section-panel-bg) 100%)",
              border: "1px solid var(--color-section-panel-border)",
              clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
            }}
          >
            <div className="relative aspect-[1918/905] overflow-hidden">
              <img src={PROJECT_BANNER} alt="月之秘語塔羅牌占卜平台首頁" className="h-full w-full object-cover" style={{ filter: "var(--project-image-filter)" }} />
              <div className="absolute inset-0" style={{ background: "var(--project-image-overlay)" }} />
              <div
                className="absolute left-4 top-4 rounded px-3 py-1"
                style={{ background: "var(--color-accent-cyan-15)", border: "1px solid var(--color-accent-cyan-40)", color: "var(--color-accent-cyan)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", backdropFilter: "blur(10px)" }}
              >
                PROJECT_02
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <h3 style={{ color: "var(--color-text-primary)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 700, lineHeight: 1.4 }}>
                網站設計 — 塔羅牌占卜平台
              </h3>
              <a
                href={PROJECT_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
                style={{ color: "var(--color-accent-cyan)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", textDecoration: "none" }}
              >
                {PROJECT_URL}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
              </a>

              <p className="mb-5 mt-4" style={{ color: "var(--color-text-secondary-65)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", lineHeight: 1.7 }}>
                以「答案，一直都在你心裡」為核心概念，結合月相、星辰與三張牌陣，打造具有沉浸感的線上塔羅占卜體驗。使用者可依感情、事業、自我或今日指引選擇主題，再逐步完成抽牌與解讀流程。
              </p>

              <div className="mb-7 flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "RWD", "UI / UX Design"].map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}
              </div>

              <div className="overflow-hidden rounded" style={{ border: "1px solid var(--color-accent-cyan-15)" }}>
                <div className="flex items-center justify-between px-4 py-2" style={{ background: "var(--color-accent-cyan-5)", borderBottom: "1px solid var(--color-accent-cyan-10)" }}>
                  <span style={{ color: "var(--color-accent-cyan-60)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}>interface_preview.png</span>
                  <span style={{ color: "var(--color-text-secondary-40)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}>THREE-CARD SPREAD</span>
                </div>
                <img src={PROJECT_PREVIEW} alt="月之秘語三張塔羅牌翻牌介面" className="block h-auto w-full" style={{ filter: "var(--project-image-filter)" }} />
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {designHighlights.map((item) => (
                  <div key={item.title} className="rounded p-4" style={{ background: "var(--color-accent-cyan-5)", border: "1px solid var(--color-accent-cyan-10)" }}>
                    <h4 style={{ color: "var(--color-text-primary)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.82rem", fontWeight: 600 }}>{item.title}</h4>
                    <p className="mt-2" style={{ color: "var(--color-text-secondary-60)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", lineHeight: 1.65 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

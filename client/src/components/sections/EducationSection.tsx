/* =============================================================
   SECTION: Education
   Design: Cyberpunk Blueprint — timeline + course tags
   ============================================================= */

import { useInView } from "@/hooks/useInView";

const educations = [
  {
    school: "中原大學 電機工程學系",
    period: "2022.09 – 至今",
    details: [
      "累積 GPA：x.x / x.x",
      "主修：通訊系統、計算機網路",
      "副修：前端網頁設計",
    ],
    type: "大學",
    color: "#00d4ff",
  },
  {
    school: "XX高中 二類（數理）組",
    period: "2019 – 2022",
    details: ["畢業成績：全班前 xx%"],
    type: "高中",
    color: "#7c3aed",
  },
];

const courses = [
  "機器學習與深度學習",
  "計算機網路概論",
  "線性代數",
  "離散數學",
];

export default function EducationSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full py-20 min-h-screen flex items-center relative"
      style={{ background: "linear-gradient(180deg, #060f1e 0%, #050d1a 100%)" }}
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
            03 / EDUCATION
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
            學術背景
          </h2>
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div
            className="lg:col-span-2"
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
              學歷
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(180deg, #00d4ff, rgba(0,212,255,0.1))" }}
              />

              <div className="space-y-6 pl-12">
                {educations.map((edu, i) => (
                  <div
                    key={edu.school}
                    className="relative"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.6s ease ${0.2 + i * 0.15}s`,
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-8 top-4 w-3 h-3 rounded-full"
                      style={{
                        background: edu.color,
                        boxShadow: `0 0 10px ${edu.color}`,
                        border: `2px solid ${edu.color}`,
                      }}
                    />

                    <div
                      className="p-5 rounded cyber-card"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span
                            className="inline-block px-2 py-0.5 rounded text-xs mb-2"
                            style={{
                              background: `${edu.color}15`,
                              border: `1px solid ${edu.color}40`,
                              color: edu.color,
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: "0.65rem",
                            }}
                          >
                            {edu.type}
                          </span>
                          <h4
                            style={{
                              color: "#e2e8f0",
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontWeight: 600,
                              fontSize: "1rem",
                            }}
                          >
                            {edu.school}
                          </h4>
                        </div>
                        <span
                          style={{
                            color: "rgba(226,232,240,0.4)",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.7rem",
                            whiteSpace: "nowrap",
                            marginLeft: "1rem",
                          }}
                        >
                          {edu.period}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {edu.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2"
                            style={{
                              color: "rgba(226,232,240,0.65)",
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: "0.85rem",
                            }}
                          >
                            <span style={{ color: edu.color, marginTop: "0.25rem", flexShrink: 0 }}>›</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Courses */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
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
              修習課程
            </h3>
            <div
              className="p-5 rounded cyber-card"
              style={{
                clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
              }}
            >
              <div className="space-y-3">
                {courses.map((course, i) => (
                  <div
                    key={course}
                    className="flex items-center gap-3 py-2"
                    style={{
                      borderBottom: i < courses.length - 1 ? "1px solid rgba(0,212,255,0.08)" : "none",
                    }}
                  >
                    <span
                      style={{
                        color: "#00d4ff",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.7rem",
                        opacity: 0.6,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        color: "rgba(226,232,240,0.75)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                      }}
                    >
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

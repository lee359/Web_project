/* =============================================================
   SECTION: Hero
   Design: Full-width with circuit-board background image,
   asymmetric layout, glowing title, avatar on right
   ============================================================= */

import { useEffect, useState } from "react";
import defaultProfilePicture from './profile-images/image.png';

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663479025969/nNCp97MS5SZyN9jxyzYEoM/hero-bg-Y9NEXw73h4zGNcw46hPULW.webp";
const AVATAR = defaultProfilePicture;

const roles = ["AI / ML Engineer", "Web Developer", "EE Student @ CYCU", "Open Source Contributor"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    let i = 0;
    setDisplayed("");
    setTyping(true);

    const typeInterval = setInterval(() => {
      if (i < target.length) {
        setDisplayed(target.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTyping(false);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2200);
      }
    }, 60);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <section
      id="hero"
      className="w-full relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--color-bg-primary)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(var(--hero-image-tint), var(--hero-image-tint)), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "var(--hero-image-opacity)",
        }}
      />

      {/* Circuit grid overlay */}
      <div
        className="absolute inset-0 circuit-bg"
        style={{ opacity: 0.4 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--hero-overlay-gradient)",
        }}
      />

      {/* Decorative glow orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent-cyan-6) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent-violet-8) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-5xl mx-auto">
          {/* Left: Text */}
          <div className="flex-1 animate-fade-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="w-2 h-2 rounded-full animate-pulse-glow"
                style={{ background: "var(--color-accent-cyan)" }}
              />
              <span
                style={{
                  color: "var(--color-text-primary)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                }}
              >
                AVAILABLE FOR INTERNSHIP
              </span>
            </div>

            {/* Name */}
            <h1
              className="mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--color-text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              李東恩
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  color: "var(--color-text-secondary-50)",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  marginTop: "0.25rem",
                }}
              >
                Li Dong-En
              </span>
            </h1>

            {/* Typing role */}
            <div
              className="mb-6 h-8 flex items-center"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                color: "var(--color-text-primary)",
              }}
            >
              <span className="cyber-text-glow">{displayed}</span>
              <span
                className="ml-0.5 inline-block w-0.5 h-5"
                style={{
                  background: "var(--color-text-primary)",
                  animation: typing ? "none" : "blink 1s step-end infinite",
                }}
              />
            </div>

            {/* Info row */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: "🏫", text: "中原大學 電機工程學系" },
                { icon: "📍", text: "Taiwan" },
                { icon: "🎓", text: "2022 – 在學" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded"
                  style={{
                  background: "var(--color-accent-cyan-6)",
                  border: "1px solid var(--color-accent-cyan-20)",
                  color: "var(--color-text-secondary-70)",
                    fontSize: "0.8rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/lee359"
                target="_blank"
                rel="noopener noreferrer"
                className="clip-btn inline-flex items-center gap-2 px-6 py-3 font-medium transition-all duration-200"
                style={{
                  background: "var(--gradient-cyan-fade)",
                  border: "1px solid var(--color-accent-cyan-40)",
                  color: "var(--color-accent-cyan)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, var(--color-accent-cyan-25), var(--color-accent-cyan-10))";
                  e.currentTarget.style.boxShadow = "0 0 20px var(--color-accent-cyan-30)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--gradient-cyan-fade)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div
            className="flex-shrink-0 animate-fade-up mb-6 lg:mb-0"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards", position: "relative" }}
          >
            <div
              className="relative w-52 h-52 lg:w-64 lg:h-64"
              style={{
                clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
              }}
            >
              <img
                src={AVATAR}
                alt="李O恩 數位身份"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.9) saturate(1.2)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, var(--color-accent-cyan-10) 0%, transparent 60%)",
                }}
              />
              {/* Corner decorations */}
              <div
                className="absolute top-0 left-0 w-6 h-6"
                style={{ borderTop: "2px solid var(--color-accent-cyan)", borderLeft: "2px solid var(--color-accent-cyan)" }}
              />
              <div
                className="absolute bottom-0 right-0 w-6 h-6"
                style={{ borderBottom: "2px solid var(--color-accent-cyan)", borderRight: "2px solid var(--color-accent-cyan)" }}
              />
            </div>
            {/* Glow ring - hidden on mobile */}
            <div
              className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, var(--color-accent-cyan-5) 0%, transparent 70%)",
                filter: "blur(20px)",
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--color-accent-cyan-40)" }}
      >
        <span style={{ fontSize: "0.65rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em" }}>
          SCROLL
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(180deg, var(--color-accent-cyan-40), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

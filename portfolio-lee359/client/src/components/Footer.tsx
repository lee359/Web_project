/* =============================================================
   COMPONENT: Footer
   Design: Cyberpunk Blueprint — minimal footer with glow divider
   ============================================================= */

export default function Footer() {
  return (
    <footer
      className="py-8 relative"
      style={{
        background: "#050d1a",
        borderTop: "1px solid rgba(0,212,255,0.1)",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div
          style={{
            color: "rgba(226,232,240,0.3)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
          }}
        >
          © 2026 李O恩 · Built with React + TailwindCSS
        </div>
        <div
          style={{
            color: "rgba(0,212,255,0.4)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
          }}
        >
          中原大學 電機工程學系
        </div>
      </div>
    </footer>
  );
}

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
        style={{ background: "rgba(0, 0, 0, 0.7)" }}
      />

      {/* Modal */}
      <div
        className="fixed z-50 flex items-center justify-center"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "640px",
          height: "480px",
        }}
      >
        <div
          className="rounded-lg shadow-2xl flex flex-col items-center justify-center p-8 border"
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(10, 22, 40, 0.95) 0%, rgba(15, 32, 64, 0.95) 100%)",
            borderColor: "rgba(0, 212, 255, 0.3)",
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.2), 0 8px 32px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Content */}
          <div className="text-center space-y-6">
            <div
              style={{
                fontSize: "3.5rem",
                lineHeight: "1",
              }}
            >
              😭
            </div>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#e2e8f0",
              }}
            >
              這功能還沒實裝
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(226, 232, 240, 0.7)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {" "}
            </p>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-8 px-6 py-2 rounded transition-all duration-200"
              style={{
                background: "rgba(0, 212, 255, 0.1)",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                color: "#00d4ff",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.15)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 212, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

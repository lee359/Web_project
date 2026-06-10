import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (switchable) {
      const stored = localStorage.getItem("theme");
      return (stored as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const isTransitioning = useRef(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (switchable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, switchable]);

  const toggleTheme = switchable
    ? async () => {
        if (isTransitioning.current) return;

        const nextTheme = theme === "light" ? "dark" : "light";
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const viewTransitionDocument = document as Document & {
          startViewTransition?: (callback: () => void) => {
            ready: Promise<void>;
          };
        };

        if (!viewTransitionDocument.startViewTransition || reducedMotion) {
          setTheme(nextTheme);
          return;
        }

        isTransitioning.current = true;

        const transition = viewTransitionDocument.startViewTransition(() => {
          flushSync(() => setTheme(nextTheme));
        });

        try {
          await transition.ready;

          const radius = Math.hypot(window.innerWidth, window.innerHeight);
          const animation = document.documentElement.animate(
            {
              clipPath: [
                "circle(0px at 0% 100%)",
                `circle(${radius}px at 0% 100%)`,
              ],
            },
            {
              duration: 720,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );

          await animation.finished;
        } finally {
          isTransitioning.current = false;
        }
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

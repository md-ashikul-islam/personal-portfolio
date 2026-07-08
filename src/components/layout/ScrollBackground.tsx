"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";

const BUG_PATHS = [
  { top: "6%", left: "8%", x: [0, 18, -8, 22], y: [0, 12, 28, 42], size: 18 },
  { top: "10%", right: "7%", x: [0, -20, 10, -14], y: [0, 18, 8, 32], size: 16, flip: true },
  { top: "76%", left: "5%", x: [0, 22, 6, 28], y: [0, -14, -32, -48], size: 17 },
  { top: "80%", right: "8%", x: [0, -16, -28, -12], y: [0, -22, -10, -38], size: 15, flip: true },
  { top: "42%", left: "3%", x: [0, 10, 20, 12], y: [0, -10, 6, 18], size: 14 },
  { top: "36%", right: "4%", x: [0, -12, -22, -8], y: [0, 14, 24, 36], size: 15, flip: true },
  { top: "88%", left: "14%", x: [0, 14, 24, 16], y: [0, -8, -18, -26], size: 13 },
] as const;

function useBugOpacity() {
  const { theme } = useTheme();
  return theme === "light" ? 0.22 : 0.18;
}

function BugIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} fill="none" aria-hidden>
      <ellipse
        cx="10"
        cy="8.5"
        rx="5.5"
        ry="3.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle cx="8.2" cy="7.8" r="0.7" fill="currentColor" opacity="0.45" />
      <circle cx="11.8" cy="7.8" r="0.7" fill="currentColor" opacity="0.45" />
      <path
        d="M10 5.2 L9 3 M10 5.2 L11 3"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function RoamingBug({
  progress,
  path,
  style,
  size,
  flip,
  opacity,
}: {
  progress: MotionValue<number>;
  path: { x: number[]; y: number[] };
  style: React.CSSProperties;
  size: number;
  flip?: boolean;
  opacity: number;
}) {
  const x = useTransform(progress, [0, 0.33, 0.66, 1], path.x as [number, number, number, number]);
  const y = useTransform(progress, [0, 0.33, 0.66, 1], path.y as [number, number, number, number]);
  const rotate = useTransform(progress, [0, 0.5, 1], [0, 6, -4]);

  return (
    <motion.div
      className="absolute text-accent"
      style={{ ...style, x, y, rotate, width: size, opacity, scaleX: flip ? -1 : 1 }}
    >
      <BugIcon className="h-full w-full" />
    </motion.div>
  );
}

export function ScrollBackground() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });
  const bugOpacity = useBugOpacity();
  const gridY = useTransform(progress, [0, 1], ["0%", "15%"]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 48% at 50% 42%, var(--background) 0%, var(--background) 32%, transparent 68%)",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          y: gridY,
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 65% at 50% 45%, transparent 38%, black 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 65% at 50% 45%, transparent 38%, black 100%)",
        }}
      />

      {BUG_PATHS.map((bug, i) => (
        <RoamingBug
          key={i}
          progress={progress}
          path={{ x: [...bug.x], y: [...bug.y] }}
          style={{
            top: bug.top,
            ...("left" in bug ? { left: bug.left } : {}),
            ...("right" in bug ? { right: bug.right } : {}),
          }}
          size={bug.size}
          flip={"flip" in bug ? bug.flip : false}
          opacity={bugOpacity}
        />
      ))}
    </div>
  );
}

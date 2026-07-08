"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { personalInfo } from "@/data/resume";

const WORDS = personalInfo.fullName.split(" ");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const wordIn = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function NameWord({ word, index, reduceMotion }: { word: string; index: number; reduceMotion: boolean | null }) {
  return (
    <motion.span
      variants={reduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : wordIn}
      className="hero-name-word inline-block cursor-default"
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ type: "spring" as const, stiffness: 380, damping: 22 }}
    >
      {word}
      {index < WORDS.length - 1 ? "\u00A0" : ""}
    </motion.span>
  );
}

export function AnimatedName() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [2.5, -2.5]), {
    stiffness: 160,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3.5, 3.5]), {
    stiffness: 160,
    damping: 28,
  });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
      pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    },
    [pointerX, pointerY]
  );

  const resetPointer = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate="visible"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => {
        resetPointer();
        setHovered(false);
      }}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }
      }
      className="hero-name-block relative mx-auto inline-block max-w-full select-none px-2"
    >
      <h1
        className="hero-full-name text-[clamp(1.65rem,5.8vw,3.75rem)] font-bold leading-tight tracking-tight text-foreground"
        aria-label={personalInfo.fullName}
      >
        {WORDS.map((word, index) => (
          <NameWord key={`${word}-${index}`} word={word} index={index} reduceMotion={reduceMotion} />
        ))}
      </h1>

      <motion.span
        className="hero-name-line mx-auto mt-4 block h-px origin-center bg-accent"
        animate={{ scaleX: hovered ? 1 : 0.28, opacity: hovered ? 1 : 0.4 }}
        transition={{ type: "spring" as const, stiffness: 260, damping: 28 }}
        aria-hidden
      />
    </motion.div>
  );
}

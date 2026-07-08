"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { personalInfo } from "@/data/resume";
import { FadeIn } from "@/components/ui/SectionReveal";
import { AnimatedName } from "@/components/home/AnimatedName";

const stats = [
  { value: personalInfo.yearsExperience, label: "Years QA" },
  { value: "3", label: "Testing pillars" },
  { value: "2", label: "Core domains" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="section-wrap relative z-0 flex min-h-[92vh] items-center justify-center overflow-hidden px-5 pt-28 sm:px-6 sm:pt-32"
    >
      <motion.div style={{ opacity }} className="mx-auto w-full max-w-5xl text-center">
        <FadeIn delay={0.15}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-[var(--card-bg)] px-4 py-1.5 text-xs font-medium text-muted shadow-[var(--card-shadow)] backdrop-blur-md">
            <Sparkles size={12} className="text-accent" />
            {personalInfo.yearsExperience} Years · {personalInfo.title}
          </div>
        </FadeIn>

        <AnimatedName />

        <FadeIn delay={0.45}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            {personalInfo.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {personalInfo.qaPillars.map((pillar) => (
              <span key={pillar} className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground/75">
                {pillar}
              </span>
            ))}
            {personalInfo.domains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent"
              >
                {domain}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.65}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary px-7 py-3 text-sm">
              Get in Touch
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.75}>
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card px-3 py-4">
                <p className="font-mono text-xl font-bold text-foreground sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-muted sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}

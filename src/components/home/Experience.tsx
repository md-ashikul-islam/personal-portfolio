"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/data/resume";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const fullTimeRoles = experiences.filter((e) => e.type !== "contract");
const contractRoles = experiences.filter((e) => e.type === "contract");

function ExperienceCard({ active }: { active: (typeof experiences)[number] }) {
  return (
    <motion.div
      key={active.id}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="card p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">{active.role}</h3>
            {active.type === "contract" && (
              <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                Contract
              </span>
            )}
          </div>
          <p className="mt-1 text-base text-accent sm:text-lg">{active.company}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted">{active.period}</p>
          <p className="text-xs text-muted/80">{active.duration}</p>
        </div>
      </div>

      {active.location && (
        <div className="mt-4 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} />
          {active.location}
        </div>
      )}

      <ul className="mt-7 space-y-3.5">
        {active.highlights.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="flex gap-3 text-sm leading-relaxed text-muted"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </motion.li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-2">
        {active.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [activeId, setActiveId] = useState(fullTimeRoles[0].id);
  const active = experiences.find((e) => e.id === activeId) ?? fullTimeRoles[0];

  return (
    <section id="experience" className="section-wrap px-5 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeader label="Experience" title="Where I've shipped quality." />
        </SectionReveal>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:gap-8">
          <SectionReveal delay={0.1} className="lg:w-2/5">
            <div className="card flex flex-col gap-1 p-2 sm:p-3">
              {fullTimeRoles.map((exp) => (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setActiveId(exp.id)}
                  aria-pressed={activeId === exp.id}
                  className={cn(
                    "group relative rounded-xl px-4 py-3.5 text-left transition-all duration-200",
                    activeId === exp.id ? "bg-surface-elevated" : "hover:bg-surface"
                  )}
                >
                  {activeId === exp.id && (
                    <motion.div
                      layoutId="activeExp"
                      className="absolute left-0 top-1/2 h-7 w-0.5 -translate-y-1/2 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <p
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      activeId === exp.id ? "text-foreground" : "text-muted group-hover:text-foreground/80"
                    )}
                  >
                    {exp.company}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{exp.period}</p>
                </button>
              ))}

              {contractRoles.length > 0 && (
                <>
                  <p className="px-4 pb-1 pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Contractual
                  </p>
                  {contractRoles.map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setActiveId(exp.id)}
                      aria-pressed={activeId === exp.id}
                      className={cn(
                        "group relative rounded-xl px-4 py-3.5 text-left transition-all duration-200",
                        activeId === exp.id ? "bg-surface-elevated" : "hover:bg-surface"
                      )}
                    >
                      {activeId === exp.id && (
                        <motion.div
                          layoutId="activeExp"
                          className="absolute left-0 top-1/2 h-7 w-0.5 -translate-y-1/2 rounded-full bg-accent"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <p
                        className={cn(
                          "text-sm font-semibold transition-colors",
                          activeId === exp.id ? "text-foreground" : "text-muted group-hover:text-foreground/80"
                        )}
                      >
                        {exp.company}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">{exp.duration}</p>
                    </button>
                  ))}
                </>
              )}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="lg:w-3/5">
            <ExperienceCard active={active} />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

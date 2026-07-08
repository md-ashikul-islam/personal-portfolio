"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, type Project } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "automation", label: "Automation" },
  { id: "enterprise", label: "Enterprise" },
  { id: "fintech", label: "FinTech" },
] as const;

type Category = (typeof categories)[number]["id"];

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      layout
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      onClick={onToggle}
      className={cn(
        "card group relative cursor-pointer overflow-hidden transition-all duration-200",
        isExpanded ? "border-border-strong" : "hover:border-border-strong"
      )}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-[70px] transition-opacity group-hover:opacity-35"
        style={{ backgroundColor: project.color }}
      />

      <div className="relative p-5 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              {project.subtitle}
            </p>
            <h3 className="mt-1.5 text-lg font-bold text-foreground sm:text-xl">{project.title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors group-hover:border-border-strong group-hover:text-foreground"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
            >
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-5 grid grid-cols-3 gap-2.5">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg bg-surface-elevated px-2.5 py-2.5 text-center">
                    <p className="font-mono text-base font-bold text-foreground sm:text-lg">{metric.value}</p>
                    <p className="mt-0.5 text-[9px] uppercase tracking-wider text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{ backgroundColor: `${project.color}18`, color: project.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isExpanded && (
          <p className="mt-3 text-xs text-muted">
            {project.stack.slice(0, 3).join(" · ")}
            <span className="ml-1 text-accent/80">· tap to expand</span>
          </p>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Category>("all");
  const [expandedId, setExpandedId] = useState<string | null>(
    projects.find((p) => p.featured)?.id ?? null
  );

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-wrap px-5 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeader
            label="Projects"
            title="Quality-assured at scale."
            description="FinTech, AI, and enterprise products — tested manually, automated, and validated via API."
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-wider transition-all duration-200",
                  filter === cat.id
                    ? "bg-foreground text-background"
                    : "border border-border bg-surface text-muted hover:border-border-strong hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard
                  project={project}
                  isExpanded={expandedId === project.id}
                  onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

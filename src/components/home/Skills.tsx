"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/resume";
import { Bot, ClipboardList, Globe, Wrench, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  clipboard: ClipboardList,
  bot: Bot,
  zap: Zap,
  wrench: Wrench,
  globe: Globe,
};

function SkillBar({
  name,
  level,
  description,
  delay,
}: {
  name: string;
  level: number;
  description: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-elevated">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-purple-400"
        />
      </div>
      <motion.p
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
        className="mt-1 overflow-hidden text-xs text-muted"
      >
        {description}
      </motion.p>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0];
  const Icon = iconMap[active.icon as keyof typeof iconMap] ?? Bot;

  return (
    <section id="skills" className="section-wrap relative px-5 py-24 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ backgroundColor: "var(--glow)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeader
            label="Skills"
            title="Manual. Automation. API."
            description="Full-spectrum QA skills with deep domain knowledge in FinTech & AI."
          />
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <SectionReveal delay={0.1} className="lg:col-span-4">
            <div className="card flex flex-col gap-1 p-2 sm:p-3">
              {skillCategories.map((cat) => {
                const CatIcon = iconMap[cat.icon as keyof typeof iconMap] ?? Bot;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-200",
                      activeCategory === cat.id
                        ? "bg-surface-elevated text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground/70"
                    )}
                  >
                    <CatIcon size={18} />
                    <span className="text-sm font-medium">{cat.name}</span>
                    <span className="ml-auto font-mono text-xs text-muted/60">
                      {cat.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="lg:col-span-8">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="card p-6 sm:p-8"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{active.name}</h3>
                  <p className="text-xs text-muted">{active.skills.length} proficiencies</p>
                </div>
              </div>

              <div className="space-y-6">
                {active.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    description={skill.description}
                    delay={i * 0.08}
                  />
                ))}
              </div>
            </motion.div>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                "Manual Testing",
                "Playwright",
                "Postman",
                "JMeter",
                "Cypress",
                "JIRA",
                "FinTech",
                "AI Testing",
              ].map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="card flex items-center justify-center px-3 py-3 text-xs font-medium text-muted transition-colors hover:text-foreground"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

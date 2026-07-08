"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-wrap px-5 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeader label="About" title={personalInfo.tagline} />
        </SectionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <SectionReveal delay={0.1}>
            <div className="card space-y-5 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m a Software QA Engineer with {personalInfo.yearsExperience} years of
                experience across manual testing, test automation, and API validation — primarily
                in FinTech and AI products. From migrating 11 apps at Nagad to testing AI-powered
                tax assistants at Orbitax for clients like Adobe and OpenAI, I bring thoroughness
                and precision to every release.
              </p>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Currently at Omise in Thailand, I lead QA for a cross-border payment system merger —
                combining hands-on manual testing with Playwright automation and API validation to
                ensure seamless SSO integration across platforms.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <GraduationCap size={22} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">Education</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {personalInfo.education.school}
                  </p>
                  <p className="text-foreground/75">{personalInfo.education.degree}</p>
                  <p className="mt-2 font-mono text-sm text-accent">
                    GPA {personalInfo.education.gpa}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name}>
                    <p className="text-xs uppercase tracking-wider text-muted">{lang.name}</p>
                    <p className="mt-1 text-sm font-medium text-foreground/80">{lang.level}</p>
                  </div>
                ))}
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Experience</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">
                    {personalInfo.yearsExperience} Years
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Domains</p>
                  <p className="mt-1 text-sm font-medium text-foreground/80">
                    {personalInfo.domains.join(" & ")}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

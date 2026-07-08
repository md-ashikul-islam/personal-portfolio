"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/resume";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const links = [
  {
    href: personalInfo.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
    external: true,
  },
  {
    href: personalInfo.github,
    label: "GitHub",
    icon: GitHubIcon,
    external: true,
  },
  {
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    label: personalInfo.phone,
    icon: Phone,
    external: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-wrap px-5 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
                style={{ backgroundColor: "var(--glow)" }}
              />
            </div>

            <div className="relative">
              <SectionHeader
                label="Contact"
                title="Let's build quality together."
                description="Open to QA roles, consulting, and collaborations in FinTech & AI worldwide."
                className="mx-auto text-center"
              />

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
                <a href="/Ashikul_Resume.pdf" target="_blank" className="btn-secondary px-7 py-3 text-sm">
                  Download Resume
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {links.map(({ href, label, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

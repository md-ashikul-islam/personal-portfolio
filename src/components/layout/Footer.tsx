import Link from "next/link";
import { personalInfo } from "@/data/resume";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground">{personalInfo.fullName}</p>
            <p className="mt-1 text-sm text-muted">{personalInfo.title}</p>
            <p className="mt-2 text-xs text-muted/80">{personalInfo.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted md:text-left">
          © {new Date().getFullYear()} {personalInfo.fullName} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}

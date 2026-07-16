export const personalInfo = {
  name: "Md Ashikul Islam",
  fullName: "MD Ashikul Islam",
  title: "Software QA Engineer",
  tagline: "I break things so users don't have to.",
  subtitle:
    "Software QA Engineer proficient in Automation , Manual & API Testing — with deep expertise in FinTech and AI products.",
  email: "ashikul005@gmail.com",
  phone: "+880 1845740002",
  yearsExperience: "4+",
  qaPillars: ["Manual Testing", "Automation", "API Testing"],
  domains: ["FinTech", "AI"],
  linkedin: "https://www.linkedin.com/in/md-ashikul-islam-10",
  github: "https://github.com/md-ashikul-islam",
  website: "https://md-ashikul-islam.github.io",
  education: {
    school: "BRAC University",
    degree: "BSc in Computer Science",
    gpa: "3.72",
  },
  languages: [
    { name: "English", level: "Advanced" },
    { name: "Bangla", level: "Native" },
  ],
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  location?: string;
  highlights: string[];
  tags: string[];
  type?: "full-time" | "contract";
};

export const experiences: Experience[] = [
  {
    id: "omise",
    company: "Omise",
    role: "Software QA Engineer",
    period: "Jan 2026 — Present",
    duration: "Current",
    location: "Thailand",
    highlights: [
      "Leading QA for Omise Unity — a merger between two payment systems after acquiring Merchant E.",
      "Testing data migration, SSO integration, and cross-platform payment flows.",
      "Building Playwright + TypeScript automation for SSO on both platforms from scratch.",
      "Converting existing Cypress framework to Playwright for major release testing.",
      "Collaborating with teams across US, UK, Russia, and Thailand.",
    ],
    tags: ["Playwright", "TypeScript", "SSO", "Payments", "Data Migration"],
  },
  {
    id: "orbitax",
    company: "Orbitax",
    role: "Software QA Engineer",
    period: "Jun 2024 — Dec 2025",
    duration: "1.5+ years",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Tested complex patented software in the International Tax domain: Xatbot AI assistant, Data Collection pipelines, Orbitax Drive, and proprietary Questionnaire format.",
      "Automated 200+ repetitive test cases with Playwright & Cypress across 8 different servers.",
      "Performed API testing with JMeter for performance and reliability validation.",
      "Handled major client communications for Adobe, Walmart, OpenAI, Nissan, Amazon, Bose, Booking.com, Spotify, Chevron, and more.",
    ],
    tags: ["Playwright", "Cypress", "JMeter", "API Testing", "Enterprise"],
  },
  {
    id: "nagad",
    company: "Nagad Ltd",
    role: "Software QA Engineer",
    period: "Jan 2023 — May 2024",
    duration: "1.5 years",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Led QA for complete system migration — 5 Android apps, 3 iOS apps, and 3 web portals.",
      "Tested marketing campaigns worth $5M USD including BMW and Cricstar campaigns.",
      "Applied expertise in Mobile Financial Services (MFS), Digital Financial Services (DFS), and payment systems.",
      "Automated web applications using Selenium with Java.",
      "Generated comprehensive reports using JIRA, Zephyr Scale, and Trello.",
    ],
    tags: ["Selenium", "Java", "MFS", "Mobile", "FinTech"],
  },
  {
    id: "askturing",
    company: "AskTuring AI",
    role: "QA Engineer",
    period: "Contract",
    duration: "6 months",
    highlights: [
      "Automated 2FA flows and login validation for a privacy-focused AI assistant platform.",
      "Built and maintained test automation for AI response quality and edge-case validation.",
      "Validated authentication, session handling, and core user journeys end-to-end.",
    ],
    tags: ["Agentic AI","Automation", "2FA", "AI Validation"],
    type: "contract",
  },
  {
    id: "dangerous-galaxy",
    company: "Dangerous Galaxy",
    role: "Game QA Engineer",
    period: "Contract",
    duration: "7 months",
    highlights: [
      "Performed game testing for an indie title now published on Steam.",
      "Validated gameplay mechanics, progression flows, and cross-platform compatibility.",
      "Tested payment checkout flows for Google Play Store using Playwright E2E automation.",
    ],
    tags: ["Game Testing", "Playwright", "E2E"],
    type: "contract",
  },
];

export type Client = {
  name: string;
  /** Place logo in public/clients/ — any .svg, .png, or .webp works */
  logo: string;
};

export const clients: Client[] = [
  { name: "Nagad", logo: "/clients/nagad.svg" },
  { name: "Orbitax", logo: "/clients/orbitax.svg" }, 
  { name: "Adobe", logo: "/clients/adobe.svg" },
  { name: "Amazon", logo: "/clients/amazon.svg" },
  { name: "Askturing", logo: "/clients/askturing.avif" },
  { name: "Atlassian", logo: "/clients/atlassian.svg" },
  { name: "Booking.com", logo: "/clients/booking.png" },
  { name: "Bose", logo: "/clients/bose.png" },
  { name: "Chevron", logo: "/clients/chevron.svg" },
  { name: "OMISE", logo: "/clients/omise.png" },
  { name: "OpenAI", logo: "/clients/openai.svg" },
  { name: "Spotify", logo: "/clients/spotify.svg" },
  { name: "Walmart", logo: "/clients/walmart.svg" },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "automation" | "enterprise" | "fintech";
  metrics: { label: string; value: string }[];
  stack: string[];
  featured: boolean;
  color: string;
};

export const projects: Project[] = [
  {
    id: "omise-unity",
    title: "Omise Unity",
    subtitle: "Payment System Merger",
    description:
      "End-to-end QA for a cross-border payment platform merger — SSO integration, data migration validation, and release automation built from the ground up.",
    category: "fintech",
    metrics: [
      { label: "Regions", value: "4" },
      { label: "Framework", value: "Playwright" },
      { label: "Coverage", value: "86%" },
    ],
    stack: ["Playwright", "TypeScript", "SSO", "Data Migration"],
    featured: true,
    color: "#6366f1",
  },
  {
    id: "orbitax-automation",
    title: "Orbitax Test Suite",
    subtitle: "Enterprise Tax Platform",
    description:
      "Automated 200+ test cases across 8 servers for a patented international tax platform serving Fortune 500 clients worldwide.",
    category: "enterprise",
    metrics: [
      { label: "Test Cases", value: "200+" },
      { label: "Servers", value: "8" },
      { label: "Clients", value: "50+" },
    ],
    stack: ["Playwright", "Cypress", "JMeter", "API Testing"],
    featured: true,
    color: "#22d3ee",
  },
  {
    id: "omise-automation-migration",
    title: "Omise Existing Automation Migration",
    subtitle: "Cypress → Playwright · TypeScript",
    description:
      "Migrated Omise's existing Cypress automation framework to Playwright with TypeScript — achieving 100% suite migration with reduced runtime and lower flakiness.",
    category: "automation",
    metrics: [
      { label: "Migration", value: "100%" },
      { label: "Runtime", value: "-40%" },
      { label: "Flakiness", value: "↓" },
    ],
    stack: ["Playwright", "TypeScript", "Cypress", "CI/CD"],
    featured: true,
    color: "#a78bfa",
  },
  {
    id: "nagad-migration",
    title: "Nagad Migration",
    subtitle: "FinTech Platform Overhaul",
    description:
      "Quality assurance for a massive system migration spanning 11 applications and $5M marketing campaigns in Bangladesh's leading MFS platform.",
    category: "fintech",
    metrics: [
      { label: "Apps", value: "11" },
      { label: "Campaigns", value: "$5M" },
      { label: "Platforms", value: "3" },
    ],
    stack: ["Selenium", "Java", "Mobile", "MFS"],
    featured: false,
    color: "#34d399",
  },
];

export type SkillCategory = {
  id: string;
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "manual",
    name: "Manual Testing",
    icon: "clipboard",
    skills: [
      { name: "Complex Financial Systems testing", level: 95, description: "Comprehensive functional & regression test planning" },
      { name: "STLC", level: 92, description: "Entire Life Cycle Testing" },
      { name: "UAT & Client Communication", level: 90, description: "Direct coordination with global enterprise clients" },
      { name: "Mobile Testing", level: 88, description: "Android & iOS app validation across devices" },
      { name: "Defect Reporting", level: 93, description: "Clear, actionable bug reports via JIRA & Zephyr Scale" },
      { name: "Test Documentation", level: 87, description: "Test plans, checklists & Confluence documentation" },
    ],
  },
  {
    id: "automation",
    name: "Test Automation",
    icon: "bot",
    skills: [
      { name: "Playwright", level: 95, description: "Primary framework — TypeScript & JavaScript" },
      { name: "Cypress", level: 90, description: "E2E & component testing" },
      { name: "Selenium", level: 85, description: "Java-based web automation" },
      { name: "Java", level: 80, description: "Test scripts & Selenium bindings" },
      { name: "JavaScript / TypeScript", level: 88, description: "Modern test architecture" },
      { name: "BugBug.io", level: 75, description: "No-code automation flows" },
      { name: "CI/CD Pipeline", level: 80, description: "Primary framework — TypeScript & JavaScript" },
    ],
  },
  {
    id: "api",
    name: "API Testing",
    icon: "zap",
    skills: [
      { name: "Postman", level: 92, description: "API collections, automation & contract validation" },
      { name: "JMeter", level: 85, description: "Load, performance & API regression testing" },
      { name: "REST API Testing", level: 90, description: "Endpoint validation, auth flows & error handling" },
      { name: "SSO Integration Testing", level: 88, description: "Cross-platform authentication validation" },
    ],
  },
  {
    id: "domains",
    name: "Domain Expertise",
    icon: "globe",
    skills: [
      { name: "FinTech / MFS", level: 95, description: "Mobile financial services, payments & digital wallets" },
      { name: "Payment Systems", level: 92, description: "Cross-border payment integration & migration" },
      { name: "AI Products", level: 88, description: "AI assistant validation, prompt testing & 2FA flows" },
      { name: "Banking Systems", level: 82, description: "Payment gateway, Banking Systems, etc." },
    ],
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    icon: "wrench",
    skills: [
      { name: "JIRA", level: 95, description: "Issue tracking & sprint management" },
      { name: "Zephyr Scale", level: 90, description: "Test case management" },
      { name: "GitHub", level: 88, description: "Version control & CI integration" },
      { name: "Confluence", level: 85, description: "Documentation & knowledge base" },
      { name: "Linux", level: 80, description: "Server-side test environments" },
      { name: "Trello", level: 82, description: "Agile project tracking & reporting" },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cypress-to-playwright-migration",
    title: "Migrating from Cypress to Playwright: Lessons from the Trenches",
    excerpt:
      "A practical guide on converting an enterprise test suite — what broke, what improved, and why the switch was worth it.",
    date: "2026-03-15",
    readTime: "8 min",
    category: "Automation",
    tags: ["Playwright", "Cypress", "Migration"],
    featured: true,
  },
  {
    slug: "sso-testing-strategies",
    title: "Testing SSO Integration Across Two Payment Platforms",
    excerpt:
      "How I approach SSO validation when merging two live payment systems with different auth flows and user bases.",
    date: "2026-02-28",
    readTime: "6 min",
    category: "FinTech",
    tags: ["SSO", "Payments", "Integration"],
    featured: true,
  },
  {
    slug: "jmeter-api-testing-tips",
    title: "JMeter for QA Engineers: Beyond Load Testing",
    excerpt:
      "Using JMeter not just for performance but as a reliable API regression tool in enterprise environments.",
    date: "2025-11-10",
    readTime: "5 min",
    category: "API Testing",
    tags: ["JMeter", "API", "Performance"],
  },
  {
    slug: "ai-prompt-engineering-for-qa",
    title: "AI Prompt Engineering for Test Case Design",
    excerpt:
      "Leveraging AI to generate edge cases, write test data, and accelerate exploratory testing sessions.",
    date: "2025-09-22",
    readTime: "7 min",
    category: "AI",
    tags: ["AI", "Test Design", "Productivity"],
  },
  {
    slug: "fintech-migration-checklist",
    title: "QA Checklist for FinTech System Migrations",
    excerpt:
      "A battle-tested checklist from migrating 11 apps in Bangladesh's largest mobile financial service platform.",
    date: "2024-04-05",
    readTime: "10 min",
    category: "FinTech",
    tags: ["MFS", "Migration", "Checklist"],
  },
];

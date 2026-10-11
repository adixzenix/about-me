export type Link = {
  label: string;
  href: string;
};

export type SectionMeta = {
  /** Anchor id used by the nav and the section element. */
  id: string;
  /** Short name shown in the nav and the section rail. */
  label: string;
  heading: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type Project = {
  name: string;
  summary: string;
  year: string;
  tags: string[];
  href?: string;
};

export type Principle = {
  title: string;
  body: string;
};

export type ContentItem = {
  title: string;
  kind: string;
  summary: string;
  href?: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type ContactLink = Link & {
  /** Human readable form of the destination, for example the address itself. */
  value: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  ui: {
    skipToContent: string;
    navLabel: string;
  };
  hero: {
    id: string;
    name: string;
    role: string;
    headline: string;
    intro: string;
    primaryCta: Link;
    secondaryCta: Link;
  };
  about: SectionMeta & {
    paragraphs: string[];
    facts: Fact[];
  };
  shipped: SectionMeta & {
    intro: string;
    projects: Project[];
  };
  howIWork: SectionMeta & {
    principles: Principle[];
  };
  content: SectionMeta & {
    intro: string;
    items: ContentItem[];
  };
  stack: SectionMeta & {
    intro: string;
    groups: StackGroup[];
  };
  contact: SectionMeta & {
    body: string;
    links: ContactLink[];
  };
  footer: {
    note: string;
  };
};

export const site: SiteContent = {
  meta: {
    title: "Aditya | Developer",
    description:
      "Aditya is a developer who builds small, useful software. What I have shipped, how I work, and how to reach me.",
  },
  ui: {
    skipToContent: "Skip to content",
    navLabel: "Sections",
  },
  hero: {
    id: "top",
    name: "Aditya",
    role: "Developer",
    headline: "I build small, useful software and ship it.",
    intro:
      "This is my corner of the web: what I have shipped, how I work, and how to reach me.",
    primaryCta: { label: "See what I shipped", href: "#shipped" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },
  about: {
    id: "about",
    label: "About",
    heading: "A developer who likes short feedback loops.",
    paragraphs: [
      "I am Aditya. I like software that does one job well, and I would rather ship a small thing this week than plan a large thing all quarter.",
      "Most of my work is in TypeScript. I plan it as small tickets, let AI coding agents handle much of the build, and stay close to the review so I know exactly what goes out.",
    ],
    facts: [
      { label: "Primary language", value: "TypeScript" },
      { label: "Workflow", value: "Small tickets, reviewed diffs" },
      { label: "Default", value: "Ship, then refine" },
    ],
  },
  shipped: {
    id: "shipped",
    label: "Shipped",
    heading: "Things that made it out the door.",
    intro: "Finished work only. Each entry is live or merged.",
    projects: [
      {
        name: "This site",
        summary:
          "A single page built with the App Router. Every word on it comes from one typed content file, and the design system uses a single accent color.",
        year: "2026",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
  howIWork: {
    id: "how-i-work",
    label: "How I work",
    heading: "A few habits I hold on to.",
    principles: [
      {
        title: "Small tickets",
        body: "Every piece of work gets a written ticket with a clear outcome. If the outcome does not fit in a few sentences, the ticket gets split.",
      },
      {
        title: "Agents build, I review",
        body: "AI coding agents do much of the typing. I read the diff, run the build, and decide what merges.",
      },
      {
        title: "Content apart from code",
        body: "Copy lives in one typed file, so changing a sentence never means touching a component.",
      },
    ],
  },
  content: {
    id: "content",
    label: "Content",
    heading: "What I put out in public.",
    intro: "Build logs and notes, newest first.",
    items: [
      {
        title: "Building this site",
        kind: "Build log",
        summary:
          "The commit history of this site is the first thing published here: a Next.js scaffold, a typed content file, and a dark design system with one accent color.",
      },
    ],
  },
  stack: {
    id: "stack",
    label: "Stack",
    heading: "Tools I reach for.",
    intro: "This is what the site you are reading runs on.",
    groups: [
      { label: "Framework", items: ["Next.js", "React"] },
      { label: "Language", items: ["TypeScript"] },
      { label: "Styling", items: ["Tailwind CSS"] },
      { label: "Hosting", items: ["Vercel"] },
      { label: "Workflow", items: ["Git", "Fredrin", "Claude Code"] },
    ],
  },
  contact: {
    id: "contact",
    label: "Contact",
    heading: "Say hello.",
    body: "Email is the best way to reach me. I read everything and reply to anything specific.",
    links: [
      {
        label: "Email",
        value: "aditya@autozenixai.com",
        href: "mailto:aditya@autozenixai.com",
      },
    ],
  },
  footer: {
    note: "Built with Next.js, TypeScript, and Tailwind CSS.",
  },
};

/** Sections in page order, used to build the nav. */
export const navSections: SectionMeta[] = [
  site.about,
  site.shipped,
  site.howIWork,
  site.content,
  site.stack,
  site.contact,
];

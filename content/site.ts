export type Link = {
  label: string;
  href: string;
};

export type SectionMeta = {
  /** Anchor id used by the nav and the section element. */
  id: string;
  /** Section name, shown in the nav and as the section heading. */
  label: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** When set, the whole card links here and `label` is shown on it. */
  link?: Link;
};

export type ContactLink = Link & {
  /** Human readable form of the destination, for example the number itself. */
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
    title: string;
    tagline: string;
  };
  about: SectionMeta & {
    body: string;
  };
  shipped: SectionMeta & {
    projects: Project[];
  };
  howIWork: SectionMeta & {
    body: string;
  };
  content: SectionMeta & {
    body: string;
    cta: Link;
  };
  stack: SectionMeta & {
    items: string[];
  };
  contact: SectionMeta & {
    links: ContactLink[];
  };
};

const hero: SiteContent["hero"] = {
  id: "top",
  name: "Aditya Singh",
  title: "AI Engineer",
  tagline:
    "I ship production LLM agents, voice AI and multi-tenant platforms, and I run multiple AI coding agents in parallel every day.",
};

export const site: SiteContent = {
  meta: {
    title: `${hero.name} | ${hero.title}`,
    description: hero.tagline,
  },
  ui: {
    skipToContent: "Skip to content",
    navLabel: "Sections",
  },
  hero,
  about: {
    id: "about",
    label: "About",
    body: "Independent AI engineer working remotely with teams across the US, Canada, UAE and India. I own deployments end to end: scoping, architecture, code, infra, and staying until it works in production. Based in New Delhi, India.",
  },
  shipped: {
    id: "shipped",
    label: "Shipped",
    projects: [
      {
        title: "Skye Studio",
        description:
          "AI motion-graphics video platform. Website, screenshots or recordings in, launch videos out. Built with parallel backend and frontend Claude Code agents coordinated through a shared API contract.",
        tags: ["HyperFrames", "GSAP", "Claude", "Supabase", "Stripe", "Modal"],
      },
      {
        title: "Voice Agent Operations Platform",
        description:
          "Multi-tenant dashboard for AI phone agents with timezone-aware callbacks, voicemail retries, SSE live updates and DNC compliance. One client system processed 1,700+ leads.",
        tags: ["Next.js", "Supabase", "VAPI", "Retell AI", "Twilio"],
      },
      {
        title: "VAPI to Retell AI migration",
        description: "Moved live outbound calling campaigns with zero downtime.",
        tags: ["Voice AI", "Prompt engineering"],
      },
      {
        title: "Clove",
        description:
          "AI assistant inside WhatsApp working across email, calendar, files and CRM, with a user-defined approval policy.",
        tags: ["WhatsApp", "LLM agents"],
        link: { label: "askclove.com", href: "https://askclove.com" },
      },
      {
        title: "SOVA",
        description:
          "Privacy-first subscription tracker Chrome extension, published on the Chrome Web Store.",
        tags: ["Chrome MV3", "Next.js"],
      },
      {
        title: "Multi-tenant WhatsApp bot SaaS",
        description: "Deployed for a 16-branch operator.",
        tags: ["whatsapp-web.js", "Supabase"],
      },
    ],
  },
  howIWork: {
    id: "how-i-work",
    label: "How I work with agents",
    body: "I split work across parallel agents with clear contracts, review their branches like a tech lead, and write project context so agents stop guessing. This site was built with Fredrin, ticket by ticket in parallel worktrees.",
  },
  content: {
    id: "content",
    label: "Content",
    body: "I run a YouTube channel, @AdiXzenix, where I break down how I design and ship real AI agent systems.",
    cta: { label: "Watch on YouTube", href: "https://youtube.com/@AdiXzenix" },
  },
  stack: {
    id: "stack",
    label: "Stack",
    items: [
      "TypeScript",
      "Python",
      "Next.js",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Claude API",
      "OpenAI API",
      "VAPI",
      "Retell AI",
      "Twilio",
      "WhatsApp Business API",
      "Docker",
      "Vercel",
      "Coolify",
      "git worktrees",
    ],
  },
  contact: {
    id: "contact",
    label: "Contact",
    links: [
      {
        label: "Phone",
        value: "+91 88510 47924",
        href: "tel:+918851047924",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/adityaautozenix",
        href: "https://linkedin.com/in/adityaautozenix",
      },
      {
        label: "GitHub",
        value: "github.com/adixzenix",
        href: "https://github.com/adixzenix",
      },
      {
        label: "YouTube",
        value: "youtube.com/@AdiXzenix",
        href: "https://youtube.com/@AdiXzenix",
      },
    ],
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

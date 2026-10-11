import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Content() {
  const { content } = site;

  return (
    <Section meta={content} index={4}>
      <Reveal>
        <p className="max-w-prose text-lead text-muted">{content.body}</p>
      </Reveal>
      <Reveal delay={80} className="mt-stack">
        <a
          href={content.cta.href}
          className="inline-block bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          {content.cta.label}
        </a>
      </Reveal>
    </Section>
  );
}

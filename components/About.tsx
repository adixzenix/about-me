import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  const { about } = site;

  return (
    <Section meta={about} index={1}>
      <div className="grid gap-stack xl:grid-cols-[minmax(0,1fr)_16rem]">
        <Reveal className="max-w-prose space-y-5 text-lead text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal delay={80}>
          <dl className="divide-y divide-line border-y border-line">
            {about.facts.map((fact) => (
              <div key={fact.label} className="py-3">
                <dt className="font-mono text-label uppercase text-subtle">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function HowIWork() {
  const { howIWork } = site;

  return (
    <Section meta={howIWork} index={3}>
      <ol className="grid gap-x-gutter gap-y-stack sm:grid-cols-2 xl:grid-cols-3">
        {howIWork.principles.map((principle, i) => (
          <li key={principle.title}>
            <Reveal delay={i * 80} className="border-t border-line pt-4">
              <p className="font-mono text-label text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-medium">{principle.title}</h3>
              <p className="mt-2 text-muted">{principle.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  const { about } = site;

  return (
    <Section meta={about} index={1}>
      <Reveal>
        <p className="max-w-prose text-lead text-muted">{about.body}</p>
      </Reveal>
    </Section>
  );
}

import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function HowIWork() {
  const { howIWork } = site;

  return (
    <Section meta={howIWork} index={3}>
      <Reveal>
        <p className="max-w-prose text-lead text-muted">{howIWork.body}</p>
      </Reveal>
    </Section>
  );
}

import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Stack() {
  const { stack } = site;

  return (
    <Section meta={stack} index={5}>
      <Reveal>
        <ul className="flex flex-wrap gap-2 font-mono text-sm text-fg">
          {stack.items.map((item) => (
            <li key={item} className="border border-line px-3 py-1.5">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

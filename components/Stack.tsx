import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Stack() {
  const { stack } = site;

  return (
    <Section meta={stack} index={5}>
      <Reveal>
        <p className="max-w-prose text-muted">{stack.intro}</p>
      </Reveal>
      <Reveal delay={80} className="mt-stack">
        <dl className="border-t border-line">
          {stack.groups.map((group) => (
            <div
              key={group.label}
              className="grid gap-x-gutter gap-y-2 border-b border-line py-4 sm:grid-cols-[10rem_minmax(0,1fr)]"
            >
              <dt className="font-mono text-label uppercase text-subtle sm:pt-1">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-sm text-fg">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

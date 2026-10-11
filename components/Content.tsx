import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Content() {
  const { content } = site;

  return (
    <Section meta={content} index={4}>
      <Reveal>
        <p className="max-w-prose text-muted">{content.intro}</p>
      </Reveal>
      <ul className="mt-stack border-t border-line">
        {content.items.map((item, i) => (
          <li key={item.title} className="border-b border-line">
            <Reveal delay={i * 80}>
              <article className="py-6">
                <p className="font-mono text-label uppercase text-subtle">
                  {item.kind}
                </p>
                <h3 className="mt-2 text-lg font-medium">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-2 max-w-prose text-muted">{item.summary}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

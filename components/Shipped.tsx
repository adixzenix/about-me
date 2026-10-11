import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Shipped() {
  const { shipped } = site;

  return (
    <Section meta={shipped} index={2}>
      <Reveal>
        <p className="max-w-prose text-muted">{shipped.intro}</p>
      </Reveal>
      <ul className="mt-stack border-t border-line">
        {shipped.projects.map((project, i) => (
          <li key={project.name} className="border-b border-line">
            <Reveal delay={i * 80}>
              <article className="grid gap-x-gutter gap-y-3 py-6 sm:grid-cols-[5rem_minmax(0,1fr)]">
                <p className="font-mono text-label uppercase text-subtle sm:pt-1.5">
                  {project.year}
                </p>
                <div>
                  <h3 className="text-lg font-medium">
                    {project.href ? (
                      <a
                        href={project.href}
                        className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="mt-2 max-w-prose text-muted">
                    {project.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2 font-mono text-label text-muted">
                    {project.tags.map((tag) => (
                      <li key={tag} className="border border-line px-2 py-1">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Shipped() {
  const { shipped } = site;

  return (
    <Section meta={shipped} index={2}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {shipped.projects.map((project, i) => (
          <li key={project.title} className="flex">
            <Reveal delay={(i % 2) * 80} className="flex w-full">
              <article
                className={`relative flex w-full flex-col border border-line bg-surface p-6 transition-colors ${
                  project.link
                    ? "focus-within:border-accent hover:border-accent"
                    : ""
                }`}
              >
                <h3 className="text-lg font-medium">
                  {project.link ? (
                    <a
                      href={project.link.href}
                      className="after:absolute after:inset-0"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {project.link ? (
                  <p className="mt-1 font-mono text-label text-accent">
                    {project.link.label}
                  </p>
                ) : null}
                <p className="mt-3 text-muted">{project.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-5 font-mono text-label text-muted">
                  {project.tags.map((tag) => (
                    <li key={tag} className="border border-line px-2 py-1">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

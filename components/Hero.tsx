import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Hero() {
  const { hero } = site;

  return (
    <section id={hero.id} aria-labelledby="hero-heading">
      <div className="mx-auto max-w-page px-gutter pb-section pt-[calc(var(--spacing-section)*1.1)]">
        <Reveal eager>
          <p className="flex items-center gap-3 font-mono text-label uppercase text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            <span>{hero.title}</span>
          </p>
        </Reveal>
        <Reveal eager delay={80}>
          <h1 id="hero-heading" className="mt-6 text-display font-medium">
            {hero.name}
          </h1>
        </Reveal>
        <Reveal eager delay={160}>
          <p className="mt-stack max-w-prose text-lead text-muted">
            {hero.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

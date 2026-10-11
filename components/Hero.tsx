import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Hero() {
  const { hero } = site;

  return (
    <section id={hero.id} aria-labelledby="hero-heading">
      <div className="mx-auto max-w-page px-gutter pb-section pt-[calc(var(--spacing-section)*1.1)]">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-label uppercase text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            <span>
              {hero.name} / {hero.role}
            </span>
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            id="hero-heading"
            className="mt-6 max-w-[18ch] text-display font-medium"
          >
            {hero.headline}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-stack max-w-prose text-lead text-muted">
            {hero.intro}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-stack flex flex-wrap gap-3 font-mono text-sm">
            <a
              href={hero.primaryCta.href}
              className="bg-accent px-5 py-3 font-medium text-bg transition-opacity hover:opacity-85"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="border border-line px-5 py-3 text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

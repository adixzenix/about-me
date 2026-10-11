import { navSections, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-gutter py-4">
        <a
          href={`#${site.hero.id}`}
          className="shrink-0 font-mono text-label uppercase text-fg"
        >
          {site.hero.name}
        </a>
        <nav aria-label={site.ui.navLabel} className="min-w-0">
          <ul className="flex gap-5 overflow-x-auto font-mono text-label uppercase text-muted sm:gap-7">
            {navSections.map((section) => (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  className="transition-colors hover:text-accent"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-page px-gutter py-8 font-mono text-label uppercase text-subtle">
        <p>{site.hero.name}</p>
      </div>
    </footer>
  );
}

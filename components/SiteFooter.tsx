import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-2 px-gutter py-8 font-mono text-label uppercase text-subtle">
        <p>{site.hero.name}</p>
        <p>{site.footer.note}</p>
      </div>
    </footer>
  );
}

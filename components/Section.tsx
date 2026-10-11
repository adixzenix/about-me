import type { SectionMeta } from "@/content/site";
import { Reveal } from "./Reveal";

type SectionProps = {
  meta: SectionMeta;
  /** Position on the page, shown in the rail as a two digit index. */
  index: number;
  children: React.ReactNode;
};

/** Shared section shell: an index rail on the left, heading and body on the right. */
export function Section({ meta, index, children }: SectionProps) {
  const headingId = `${meta.id}-heading`;

  return (
    <section
      id={meta.id}
      aria-labelledby={headingId}
      className="border-t border-line"
    >
      <div className="mx-auto grid max-w-page gap-x-gutter gap-y-4 px-gutter py-section lg:grid-cols-[12rem_minmax(0,1fr)]">
        <Reveal>
          <p
            aria-hidden="true"
            className="font-mono text-label text-accent lg:sticky lg:top-24 lg:pt-3"
          >
            {String(index).padStart(2, "0")}
          </p>
        </Reveal>
        <div className="min-w-0">
          <Reveal>
            <h2 id={headingId} className="max-w-prose text-title font-medium">
              {meta.label}
            </h2>
          </Reveal>
          <div className="mt-stack">{children}</div>
        </div>
      </div>
    </section>
  );
}

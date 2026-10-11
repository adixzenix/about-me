import type { SectionMeta } from "@/content/site";
import { Reveal } from "./Reveal";

type SectionProps = {
  meta: SectionMeta;
  /** Position on the page, shown in the rail as a two digit index. */
  index: number;
  children: React.ReactNode;
};

/** Shared section shell: a label rail on the left, heading and body on the right. */
export function Section({ meta, index, children }: SectionProps) {
  const headingId = `${meta.id}-heading`;

  return (
    <section
      id={meta.id}
      aria-labelledby={headingId}
      className="border-t border-line"
    >
      <div className="mx-auto grid max-w-page gap-x-gutter gap-y-6 px-gutter py-section lg:grid-cols-[12rem_minmax(0,1fr)]">
        <Reveal>
          <p className="flex items-baseline gap-3 font-mono text-label uppercase text-subtle lg:sticky lg:top-24">
            <span className="text-accent">
              {String(index).padStart(2, "0")}
            </span>
            <span>{meta.label}</span>
          </p>
        </Reveal>
        <div className="min-w-0">
          <Reveal>
            <h2 id={headingId} className="max-w-prose text-title font-medium">
              {meta.heading}
            </h2>
          </Reveal>
          <div className="mt-stack">{children}</div>
        </div>
      </div>
    </section>
  );
}

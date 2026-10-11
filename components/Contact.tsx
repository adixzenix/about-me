import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  const { contact } = site;

  return (
    <Section meta={contact} index={6}>
      <Reveal>
        <ul className="border-t border-line">
          {contact.links.map((link) => (
            <li key={link.label} className="border-b border-line">
              <a
                href={link.href}
                className="group grid gap-x-gutter gap-y-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)]"
              >
                <span className="font-mono text-label uppercase text-subtle sm:pt-1">
                  {link.label}
                </span>
                <span className="break-words font-mono text-sm text-fg underline decoration-line underline-offset-4 transition-colors group-hover:text-accent group-hover:decoration-accent">
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

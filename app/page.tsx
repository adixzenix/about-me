import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Content } from "@/components/Content";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { Shipped } from "@/components/Shipped";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Stack } from "@/components/Stack";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-gutter focus:top-4 focus:z-50 focus:bg-surface focus:px-4 focus:py-2 focus:font-mono focus:text-label focus:uppercase"
      >
        {site.ui.skipToContent}
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Shipped />
        <HowIWork />
        <Content />
        <Stack />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

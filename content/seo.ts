/**
 * Search and social metadata, shared by the root layout, the generated
 * Open Graph image, robots and the sitemap.
 */

const fallbackUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

/**
 * Canonical origin of the site, without a trailing slash. Set
 * NEXT_PUBLIC_SITE_URL to the production domain. Without it, Vercel builds use
 * the project's production URL and local builds use localhost.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(
  /\/+$/,
  "",
);

export const seo = {
  title: "Aditya Singh. |AI Engineer",
  description:
    "AI engineer shipping production LLM agents, voice AI and multi-tenant platforms.",
  locale: "en_US",
};

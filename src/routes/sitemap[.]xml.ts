import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS, BLOG_POSTS_EXTENDED, LOCATIONS, SERVICES } from "@/lib/site-data";

const BASE_URL = "https://paulasprzatanie.pl";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const allBlogPosts = [...BLOG_POSTS, ...BLOG_POSTS_EXTENDED];
        const entries: { path: string; changefreq: string; priority: string }[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/uslugi", changefreq: "monthly", priority: "0.9" },
          { path: "/lokalizacje", changefreq: "monthly", priority: "0.9" },
          { path: "/realizacje", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/kontakt", changefreq: "yearly", priority: "0.6" },
          ...SERVICES.map((s) => ({ path: `/uslugi/${s.slug}`, changefreq: "monthly", priority: "0.8" })),
          ...LOCATIONS.map((l) => ({ path: `/lokalizacje/${l.slug}`, changefreq: "monthly", priority: "0.8" })),
          ...allBlogPosts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.7" })),
        ];

        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

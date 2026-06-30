import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { BLOG_POSTS, BLOG_POSTS_EXTENDED } from "@/lib/site-data";
import { getBlogCover, BLOG_IMAGE_POOL } from "@/lib/images";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — porady sprzątania | LumiClean" },
      { name: "description", content: "Blog firmy sprzątającej: porady, cenniki i poradniki dotyczące sprzątania mieszkań, biur i wspólnot." },
      { property: "og:url", content: "/blog" },
      { property: "og:title", content: "Blog — LumiClean" },
      { property: "og:description", content: "Porady i poradniki o sprzątaniu." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const allPosts = [...BLOG_POSTS, ...BLOG_POSTS_EXTENDED];
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Porady, które pomogą Ci dbać o czystość"
        subtitle="Dziesięć lat doświadczenia w jednym miejscu. Praktyczne poradniki, cenniki i odpowiedzi na najczęstsze pytania."
      />
      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-navy-deep">Strona główna</Link></li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">Blog</li>
        </ol>
      </nav>
      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((p, idx) => {
            // Make sure adjacent cards never share the same image (handles 1-col, 2-col, 3-col).
            let cover = getBlogCover(p.slug);
            const prev1 = idx >= 1 ? getBlogCover(allPosts[idx - 1].slug) : null;
            const prev2 = idx >= 2 ? getBlogCover(allPosts[idx - 2].slug) : null;
            const prev3 = idx >= 3 ? getBlogCover(allPosts[idx - 3].slug) : null;
            if (cover === prev1 || cover === prev2 || cover === prev3) {
              const off = (idx % (BLOG_IMAGE_POOL.length - 1)) + 1;
              for (let k = 0; k < BLOG_IMAGE_POOL.length; k++) {
                const cand = BLOG_IMAGE_POOL[(BLOG_IMAGE_POOL.indexOf(cover) + off + k) % BLOG_IMAGE_POOL.length];
                if (cand !== prev1 && cand !== prev2 && cand !== prev3) {
                  cover = cand;
                  break;
                }
              }
            }
            return (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cover}
                  alt={p.title}
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/35 via-transparent to-transparent opacity-60" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{new Date(p.date).toLocaleDateString("pl-PL")}</span>
                  <span>·</span>
                  <span>{p.readMinutes} min</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-navy-deep transition-colors group-hover:text-gold">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
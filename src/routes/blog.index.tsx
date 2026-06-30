import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { BLOG_POSTS, BLOG_POSTS_EXTENDED } from "@/lib/site-data";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g6 from "@/assets/gallery-6.jpg";

const COVERS: Record<string, string> = {
  "gallery-1": g1, "gallery-2": g2, "gallery-3": g3, "gallery-4": g4, "gallery-6": g6,
};

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
          {allPosts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-premium"
            >
              <img
                src={COVERS[p.cover] ?? g1}
                alt={p.title}
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{new Date(p.date).toLocaleDateString("pl-PL")}</span>
                  <span>·</span>
                  <span>{p.readMinutes} min</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-navy-deep group-hover:text-gold">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
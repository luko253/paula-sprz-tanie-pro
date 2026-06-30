import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BLOG_POSTS, BLOG_POSTS_EXTENDED } from "@/lib/site-data";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g6 from "@/assets/gallery-6.jpg";

const COVERS: Record<string, string> = {
  "gallery-1": g1, "gallery-2": g2, "gallery-3": g3, "gallery-4": g4, "gallery-6": g6,
};

const ALL_POSTS = [...BLOG_POSTS, ...BLOG_POSTS_EXTENDED];

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = ALL_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title} | Blog LumiClean` : "Wpis";
    const desc = p?.excerpt ?? "";
    const img = p ? COVERS[p.cover] : undefined;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p?.slug ?? ""}` },
        ...(img ? [{ property: "og:image", content: img }] : []),
      ],
      links: [{ rel: "canonical", href: `/blog/${p?.slug ?? ""}` }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Article",
                    headline: p.title,
                    description: p.excerpt,
                    datePublished: p.date,
                    author: { "@type": "Organization", name: "LumiClean" },
                    publisher: { "@type": "Organization", name: "LumiClean", url: "https://lumiclean.pl" },
                    mainEntityOfPage: `https://lumiclean.pl/blog/${p.slug}`,
                  },
                  {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://lumiclean.pl/" },
                      { "@type": "ListItem", position: 2, name: "Blog", item: "https://lumiclean.pl/blog" },
                      { "@type": "ListItem", position: 3, name: p.title, item: `https://lumiclean.pl/blog/${p.slug}` },
                    ],
                  },
                ],
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-3xl">Wpis nie znaleziony</h1>
        <Link to="/blog" className="mt-4 inline-block text-gold underline">Wróć do bloga</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="container-x py-20">
        <h1 className="font-display text-2xl">Coś poszło nie tak</h1>
        <button onClick={reset} className="mt-4 underline">Spróbuj ponownie</button>
      </div>
    </SiteLayout>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="container-x py-16 lg:py-24">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy-deep">
          <ArrowLeft className="h-4 w-4" /> Wszystkie wpisy
        </Link>
        <header className="mt-6 max-w-3xl">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(post.date).toLocaleDateString("pl-PL")}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readMinutes} min</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        </header>
        <img
          src={COVERS[post.cover] ?? g1}
          alt={post.title}
          className="mt-10 w-full rounded-3xl object-cover shadow-premium"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-10">
          {post.body.map((s: { heading: string; paragraphs: string[] }, i: number) => (
            <section key={i}>
              <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">{s.heading}</h2>
              {s.paragraphs.map((para, j) => (
                <p key={j} className="mt-4 text-base leading-relaxed text-muted-foreground">{para}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border bg-secondary/40 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-navy-deep">Potrzebujesz pomocy? Zadzwoń.</h3>
          <p className="mt-2 text-sm text-muted-foreground">Wycena darmowa, odpowiedź w kilka godzin.</p>
          <Link
            to="/kontakt"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream shadow-premium"
          >
            Bezpłatna wycena
          </Link>
        </div>
      </article>
    </SiteLayout>
  );
}
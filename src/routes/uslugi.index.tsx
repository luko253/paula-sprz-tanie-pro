import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bird, Briefcase, Building2, Hammer, Home, Landmark, Leaf, Sparkles, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SERVICES, SERVICE_HERO_IMAGES } from "@/lib/site-data";

const ICONS = { Home, Building2, Briefcase, Users, Landmark, Hammer, Bird, Sparkles, Leaf };

export const Route = createFileRoute("/uslugi/")({
  head: () => ({
    meta: [
      { title: "Usługi sprzątające Kraków — pełna oferta | LumiClean" },
      { name: "description", content: "Pełna oferta usług sprzątających w Krakowie: mieszkania, domy, biura, wspólnoty, mycie okien, sprzątanie po remoncie, balkony po gołębiach, tereny zielone." },
      { property: "og:title", content: "Usługi sprzątające — Kraków" },
      { property: "og:description", content: "Pełna oferta usług sprzątających w Krakowie." },
      { property: "og:url", content: "https://lumiclean.pl/uslugi" },
    ],
    links: [{ rel: "canonical", href: "https://lumiclean.pl/uslugi" }],
  }),
  component: UslugiIndex,
});

function UslugiIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nasze usługi"
        title="Sprzątamy wszystko — od kawalerki po wieżowiec biurowy"
        subtitle="Wybierz interesującą Cię usługę, aby poznać szczegółowy zakres prac, cennik, proces realizacji i odpowiedzi na najczęstsze pytania."
      />
      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-navy-deep">Strona główna</Link></li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">Usługi</li>
        </ol>
      </nav>
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sparkles;
            const img = SERVICE_HERO_IMAGES[s.slug];
            return (
              <Link
                key={s.slug}
                to="/uslugi/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-premium"
              >
                {img && (
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={img}
                      alt={s.title}
                      width={600}
                      height={300}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-gold text-navy-deep shadow-premium">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="font-display text-xl font-bold text-navy-deep">{s.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs">
                    <span className="font-semibold text-gold">{s.priceFrom}</span>
                    <span className="inline-flex items-center gap-1 text-navy-deep/70 group-hover:text-navy-deep">
                      Szczegóły <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}

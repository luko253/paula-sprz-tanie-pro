import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bird, Briefcase, Building2, Hammer, Home, Landmark, Layers, Leaf, Sparkles, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SERVICES } from "@/lib/site-data";
import { getServiceImage } from "@/lib/images";

const ICONS = { Home, Building2, Briefcase, Users, Landmark, Hammer, Bird, Sparkles, Layers, Leaf };

export const Route = createFileRoute("/uslugi/")({
  head: () => ({
    meta: [
      { title: "Usługi sprzątające — LumiClean Kraków" },
      { name: "description", content: "Pełna oferta usług sprzątających w Krakowie: mieszkania, domy, biura, wspólnoty, mycie okien, sprzątanie po remoncie." },
      { property: "og:title", content: "Usługi sprzątające — Kraków" },
      { property: "og:description", content: "Pełna oferta usług sprzątających w Krakowie." },
      { property: "og:url", content: "/uslugi" },
    ],
    links: [{ rel: "canonical", href: "/uslugi" }],
  }),
  component: UslugiIndex,
});

function UslugiIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nasze usługi"
        title="Sprzątamy wszystko — od kawalerki po wieżowiec biurowy"
        subtitle="Wybierz interesującą Cię usługę, aby poznać szczegółowy zakres prac, cennik i odpowiedzi na najczęstsze pytania."
      />
      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-navy-deep">Strona główna</Link></li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">Usługi</li>
        </ol>
      </nav>
      <section className="container-x py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sparkles;
            return (
              <Link
                key={s.slug}
                to="/uslugi/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-premium"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={getServiceImage(s.slug)}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-navy-deep/10 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-cream/95 text-navy-deep shadow-premium transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="font-display text-xl font-bold text-navy-deep transition-colors group-hover:text-gold">
                    {s.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs">
                    <span className="font-semibold text-gold">{s.priceFrom}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-navy-deep/70 transition-all group-hover:gap-2 group-hover:text-navy-deep">
                      Szczegóły <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
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
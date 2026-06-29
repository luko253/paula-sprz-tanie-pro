import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bird, Briefcase, Building2, Hammer, Home, Landmark, Layers, Leaf, Sparkles, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SERVICES } from "@/lib/site-data";

const ICONS = { Home, Building2, Briefcase, Users, Landmark, Hammer, Bird, Sparkles, Layers, Leaf };

export const Route = createFileRoute("/uslugi/")({
  head: () => ({
    meta: [
      { title: "Usługi sprzątające — Paula Sprzątanie Kraków" },
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
      <section className="container-x py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sparkles;
            return (
              <Link
                key={s.slug}
                to="/uslugi/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-premium"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-cream transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="font-display text-xl font-bold text-navy-deep">{s.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs">
                  <span className="font-semibold text-gold">{s.priceFrom}</span>
                  <span className="inline-flex items-center gap-1 text-navy-deep/70 group-hover:text-navy-deep">
                    Szczegóły <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { LOCATIONS } from "@/lib/site-data";

export const Route = createFileRoute("/lokalizacje/")({
  head: () => ({
    meta: [
      { title: "Sprzątanie Kraków i okolice — obszar działania | Paula Sprzątanie" },
      { name: "description", content: "Paula Sprzątanie obsługuje Kraków i wszystkie dzielnice: Nowa Huta, Podgórze, Bronowice, Krowodrza, Czyżyny, Dębniki, Prądnik Biały, Prądnik Czerwony, Bieżanów-Prokocim." },
      { property: "og:title", content: "Obszar działania — Paula Sprzątanie Kraków" },
      { property: "og:description", content: "Profesjonalne sprzątanie we wszystkich dzielnicach Krakowa." },
      { property: "og:url", content: "/lokalizacje" },
    ],
    links: [{ rel: "canonical", href: "/lokalizacje" }],
  }),
  component: LokalizacjeIndex,
});

function LokalizacjeIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Obszar działania"
        title="Sprzątamy w całym Krakowie i okolicach"
        subtitle="Obsługujemy wszystkie dzielnice Krakowa. Kliknij swoją lokalizację, aby poznać szczegóły oferty w Twojej okolicy."
      />
      <section className="container-x py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              to="/lokalizacje/$slug"
              params={{ slug: loc.slug }}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-premium"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-cream transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-navy-deep">Sprzątanie {loc.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{loc.description}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 border-t border-border pt-4 text-xs font-semibold text-navy-deep/70 group-hover:text-navy-deep">
                Sprawdź ofertę <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

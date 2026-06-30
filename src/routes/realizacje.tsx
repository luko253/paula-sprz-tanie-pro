import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { SiteLayout, PageHero, SectionLabel } from "@/components/site/Layout";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { Reveal } from "@/components/site/Reveal";
import { REALIZACJE, SITE } from "@/lib/site-data";

const CATS = [
  "Wszystkie",
  "Mieszkania",
  "Po remoncie",
  "Mycie okien",
  "Balkony po gołębiach",
  "Wspólnoty mieszkaniowe",
  "Klatki schodowe",
];

export const Route = createFileRoute("/realizacje")({
  head: () => ({
    meta: [
      { title: "Realizacje przed i po — LumiClean Kraków" },
      { name: "description", content: "Zobacz prawdziwe efekty naszej pracy: sprzątanie mieszkań, po remoncie, mycie okien, balkony po gołębiach, wspólnoty i klatki schodowe — zdjęcia przed i po." },
      { property: "og:title", content: "Realizacje przed i po — LumiClean" },
      { property: "og:description", content: "Prawdziwe efekty sprzątania w Krakowie — zdjęcia przed i po." },
      { property: "og:url", content: "https://lumiclean.pl/realizacje" },
    ],
    links: [{ rel: "canonical", href: "https://lumiclean.pl/realizacje" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://lumiclean.pl/" },
                { "@type": "ListItem", position: 2, name: "Realizacje", item: "https://lumiclean.pl/realizacje" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: RealizacjePage,
});

function RealizacjePage() {
  const [filter, setFilter] = useState("Wszystkie");
  const items = useMemo(
    () => REALIZACJE.filter((r) => filter === "Wszystkie" || r.category === filter),
    [filter],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Realizacje"
        title="Zobacz prawdziwe efekty naszej pracy"
        subtitle="Setki sprzątań rocznie — tu pokazujemy konkretne realizacje z różnych kategorii usług. Każde zdjęcie „przed” i „po” pochodzi z rzeczywistego zlecenia zrealizowanego przez naszą ekipę w Krakowie."
      />

      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-navy-deep">Strona główna</Link></li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">Realizacje</li>
        </ol>
      </nav>

      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={
                "rounded-full px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 " +
                (filter === c
                  ? "bg-navy text-cream"
                  : "border border-border bg-card text-navy-deep/70 hover:text-navy-deep")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {items.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 2) * 100}>
              <BeforeAfterCard item={r} />
            </Reveal>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Brak realizacji w tej kategorii — sprawdź pozostałe filtry.
          </p>
        )}
      </section>

      <section className="container-x pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep p-10 text-center text-cream shadow-premium md:p-16">
          <div className="absolute inset-0 bg-grid-navy opacity-20" />
          <div
            className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
          />
          <div className="relative">
            <SectionLabel>Twoja kolej</SectionLabel>
            <h2 className="mx-auto mt-6 max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl">
              Chcesz podobny efekt u siebie?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/75">
              Bezpłatna wycena w 15 minut. Zadzwoń lub wypełnij formularz — odpowiadamy w ciągu kilku godzin.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.02]"
              >
                Zamów bezpłatną wycenę <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold text-cream hover:bg-cream/5"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function BeforeAfterCard({ item }: { item: (typeof REALIZACJE)[number] }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-premium">
      <BeforeAfterSlider
        before={item.before}
        after={item.after}
        beforeLabel={item.beforeLabel}
        afterLabel={item.afterLabel}
        title={item.title}
        showHandle
      />
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">{item.category}</span>
        <h3 className="mt-2 font-display text-xl font-bold text-navy-deep">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <Link
          to="/uslugi/$slug"
          params={{ slug: item.serviceSlug }}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep hover:text-gold"
        >
          Zobacz tę usługę <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

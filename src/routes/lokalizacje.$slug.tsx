import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { SiteLayout, PageHero, SectionLabel } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { LOCATIONS, SERVICES, SITE } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/lokalizacje/$slug")({
  loader: ({ params }) => {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) => {
    const loc = loaderData?.location;
    const title = loc
      ? `Sprzątanie ${loc.name} — firma sprzątająca | LumiClean`
      : "Lokalizacja";
    const desc = loc?.description ?? "Usługi sprzątające w Krakowie";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/lokalizacje/${loc?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/lokalizacje/${loc?.slug ?? ""}` }],
      scripts: loc
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "LocalBusiness",
                    name: `LumiClean — ${loc.name}`,
                    description: loc.description,
                    telephone: SITE.phone,
                    email: SITE.email,
                    areaServed: { "@type": "Place", name: loc.name },
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Kraków",
                      addressRegion: "małopolskie",
                      addressCountry: "PL",
                    },
                    parentOrganization: {
                      "@type": "Organization",
                      name: "LumiClean",
                      url: "https://lumiclean.pl",
                    },
                  },
                  {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://lumiclean.pl/" },
                      { "@type": "ListItem", position: 2, name: "Lokalizacje", item: "https://lumiclean.pl/lokalizacje" },
                      { "@type": "ListItem", position: 3, name: loc.name, item: `https://lumiclean.pl/lokalizacje/${loc.slug}` },
                    ],
                  },
                  ...(loc.faq.length > 0
                    ? [
                        {
                          "@type": "FAQPage",
                          mainEntity: loc.faq.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: {
                              "@type": "Answer",
                              text: f.a,
                            },
                          })),
                        },
                      ]
                    : []),
                ],
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <PageHero eyebrow="404" title="Nie znaleziono lokalizacji" subtitle="Sprawdź listę wszystkich lokalizacji." />
      <div className="container-x py-12">
        <Link to="/lokalizacje" className="text-gold underline">Wszystkie lokalizacje</Link>
      </div>
    </SiteLayout>
  ),
  component: LocationPage,
});

function LocationPage() {
  const { location } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`Sprzątanie · ${location.name}`}
        title={`Profesjonalne sprzątanie w dzielnicy ${location.name}`}
        subtitle={location.intro}
      />

      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-navy-deep">Strona główna</Link></li>
          <li>/</li>
          <li><Link to="/lokalizacje" className="hover:text-navy-deep">Lokalizacje</Link></li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">{location.name}</li>
        </ol>
      </nav>

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionLabel>Usługi w {location.name}</SectionLabel>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-4xl">
              Pełen zakres usług sprzątających w dzielnicy {location.name}
            </h2>
            <p className="mt-4 text-muted-foreground">
              Oferujemy wszystkie usługi sprzątające na terenie {location.name} i okolic. Profesjonalna ekipa,
              własny sprzęt, bezpłatna wycena i gwarancja satysfakcji.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/uslugi/$slug"
                  params={{ slug: s.slug }}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-navy-deep transition-all hover:border-gold hover:shadow-sm"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {s.title}
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <SectionLabel>Obsługiwane obszary</SectionLabel>
              <h3 className="mt-6 font-display text-xl font-bold text-navy-deep md:text-2xl">
                Dojeżdżamy do każdego zakątka {location.name}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {location.areas.map((area: string) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-navy-deep"
                  >
                    <MapPin className="h-3 w-3 text-gold" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-8 shadow-premium">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Bezpłatna wycena</div>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy-deep">
              Zamów sprzątanie w {location.name}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Wypełnij formularz lub zadzwoń — wycena jest darmowa, a my odpowiadamy w ciągu kilku godzin.
            </p>
            <div className="mt-4 grid gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-cream shadow-premium"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <ContactForm />
            </div>
          </aside>
        </div>
      </section>

      {location.faq.length > 0 && (
        <section className="bg-secondary/40">
          <div className="container-x py-16">
            <SectionLabel>FAQ — {location.name}</SectionLabel>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
              Najczęściej zadawane pytania — sprzątanie {location.name}
            </h2>
            <div className="mt-8 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {location.faq.map((f: { q: string; a: string }, i: number) => (
                  <AccordionItem
                    key={i}
                    value={"lf" + i}
                    className="rounded-2xl border border-border bg-card px-5"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold text-navy-deep hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      <section className="container-x py-16">
        <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">
          Inne lokalizacje
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.filter((l) => l.slug !== location.slug)
            .slice(0, 6)
            .map((l) => (
              <Link
                key={l.slug}
                to="/lokalizacje/$slug"
                params={{ slug: l.slug }}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-gold hover:shadow-sm"
              >
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                <div>
                  <div className="font-display text-base font-bold text-navy-deep">Sprzątanie {l.name}</div>
                  <div className="text-xs text-muted-foreground">{l.areas.slice(0, 3).join(", ")}…</div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
        </div>
      </section>
    </SiteLayout>
  );
}

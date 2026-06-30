import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, ShieldCheck } from "lucide-react";
import { SiteLayout, PageHero, SectionLabel } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { SERVICES, SERVICE_DETAILS, SITE } from "@/lib/site-data";
import { getServiceImage } from "@/lib/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — Kraków | LumiClean` : "Usługa";
    const desc = s?.short ?? "Usługa sprzątająca w Krakowie";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/uslugi/${s?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/uslugi/${s?.slug ?? ""}` }],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Service",
                    name: s.title,
                    description: s.intro,
                    provider: {
                      "@type": "LocalBusiness",
                      name: "LumiClean",
                      url: "https://lumiclean.pl",
                    },
                    areaServed: { "@type": "City", name: "Kraków" },
                    serviceType: "CleaningService",
                  },
                  {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://lumiclean.pl/" },
                      { "@type": "ListItem", position: 2, name: "Usługi", item: "https://lumiclean.pl/uslugi" },
                      { "@type": "ListItem", position: 3, name: s.title, item: `https://lumiclean.pl/uslugi/${s.slug}` },
                    ],
                  },
                  ...(SERVICE_DETAILS[s.slug]
                    ? [
                        {
                          "@type": "FAQPage",
                          mainEntity: SERVICE_DETAILS[s.slug].faq.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: { "@type": "Answer", text: f.a },
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
      <PageHero eyebrow="404" title="Nie znaleziono usługi" subtitle="Sprawdź listę wszystkich usług." />
      <div className="container-x py-12">
        <Link to="/uslugi" className="text-gold underline">Wszystkie usługi</Link>
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
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const heroImg = getServiceImage(service.slug);
  const details = SERVICE_DETAILS[service.slug];

  return (
    <SiteLayout>
      <PageHero eyebrow="Usługa" title={service.title} subtitle={service.intro} />

      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-navy-deep">Strona główna</Link></li>
          <li>/</li>
          <li><Link to="/uslugi" className="hover:text-navy-deep">Usługi</Link></li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">{service.title}</li>
        </ol>
      </nav>

      <section className="container-x py-20">
        <div className="mb-12 overflow-hidden rounded-[2rem] border border-border shadow-premium">
          <img
            src={heroImg}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="aspect-[21/9] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionLabel>Zakres prac</SectionLabel>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-4xl">
              Co dokładnie wchodzi w usługę
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.scope.map((it: string) => (
                <li key={it} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-navy-deep">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <SectionLabel>Dlaczego my</SectionLabel>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-3 text-sm text-navy-deep">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  {b}
                </li>
              ))}
            </ul>

            {details && (
              <>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  {details.longIntro[0]}
                </p>

                <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/5 p-6">
                  <h3 className="font-display text-lg font-bold text-navy-deep">
                    Dlaczego warto nas wybrać?
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {details.benefitCards.slice(0, 4).map((b) => (
                      <li key={b.title} className="flex items-start gap-2.5 text-sm text-navy-deep">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>
                          <strong className="font-semibold">{b.title}.</strong>{" "}
                          <span className="text-muted-foreground">{b.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          <aside className="rounded-3xl border border-border bg-card p-8 shadow-premium">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Cena</div>
            <div className="mt-1 font-display text-3xl font-bold text-navy-deep">{service.priceFrom}</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Każda wycena jest indywidualna — zależy od metrażu, zakresu i częstotliwości.
            </p>
            <div className="mt-6 grid gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-cream shadow-premium"
              >
                Bezpłatna wycena <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-cream px-5 py-3 text-sm font-semibold text-navy-deep hover:border-gold"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <h3 className="font-display text-base font-bold text-navy-deep">Szybkie zapytanie</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Wypełnij formularz — oddzwonimy z wyceną.
              </p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {details && (
        <section className="bg-secondary/40">
          <div className="container-x py-16">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
                Najczęstsze pytania o usługę „{service.title.toLowerCase()}”
              </h2>
            </div>
            <div className="mx-auto mt-10 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {details.faq.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={"sf" + i}
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

      {details && (
        <section className="container-x py-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep p-10 text-cream shadow-premium md:p-14">
            <div className="absolute inset-0 bg-grid-navy opacity-20" />
            <div
              className="absolute -top-20 -right-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
            />
            <div className="relative grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl">
                  Zamów „{service.title.toLowerCase()}” już dziś
                </h2>
                <p className="mt-3 max-w-xl text-cream/75">
                  Bezpłatna wycena w 15 minut, odpowiedź w ciągu kilku godzin.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.02]"
                >
                  Zamów wycenę <ArrowRight className="h-4 w-4" />
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
      )}

      <section className="bg-secondary/40">
        <div className="container-x py-16">
          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">Sprawdź też</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/uslugi/$slug"
                params={{ slug: r.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-premium"
              >
                <img
                  src={getServiceImage(r.slug)}
                  alt={r.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <div className="font-display text-lg font-bold text-navy-deep group-hover:text-gold">{r.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
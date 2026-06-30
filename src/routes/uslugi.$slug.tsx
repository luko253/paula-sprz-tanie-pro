import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Award, Check, Clock, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { SiteLayout, PageHero, SectionLabel } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LOCATIONS, REALIZACJE, SERVICES, SERVICE_DETAILS, SERVICE_HERO_IMAGES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} Kraków — cennik i zakres usługi | LumiClean` : "Usługa";
    const desc = s?.short ?? "Usługa sprzątająca w Krakowie";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `https://lumiclean.pl/uslugi/${s?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `https://lumiclean.pl/uslugi/${s?.slug ?? ""}` }],
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

const TRUST_BAR = [
  { icon: ShieldCheck, text: "Ubezpieczenie OC do 1 mln zł" },
  { icon: Clock, text: "10+ lat doświadczenia" },
  { icon: Star, text: "4.9 / 5 — ocena klientów" },
  { icon: Award, text: "Gwarancja satysfakcji" },
];

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const details = SERVICE_DETAILS[service.slug];
  const heroImage = SERVICE_HERO_IMAGES[service.slug];
  const relatedRealizacje = REALIZACJE.filter((r) => r.serviceSlug === service.slug).slice(0, 2);

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

      {heroImage && (
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl shadow-premium">
            <img
              src={heroImage}
              alt={`${service.title} w Krakowie — LumiClean`}
              width={1600}
              height={700}
              loading="eager"
              decoding="async"
              className="h-[260px] w-full object-cover md:h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
            {details?.highlight && (
              <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-deep shadow-premium">
                <Star className="h-3.5 w-3.5 fill-current" /> {details.highlight}
              </span>
            )}
          </div>
        </div>
      )}

      <section className="container-x py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-card px-6 py-5 text-sm text-navy-deep md:justify-between">
          {TRUST_BAR.map((t) => (
            <div key={t.text} className="flex items-center gap-2">
              <t.icon className="h-4 w-4 text-gold" />
              {t.text}
            </div>
          ))}
        </div>
      </section>

      {details && (
        <section className="container-x pb-4">
          <SectionLabel>O usłudze</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-2xl font-bold leading-tight text-navy-deep md:text-4xl">
            Wszystko, co warto wiedzieć o usłudze „{service.title.toLowerCase()}”
          </h2>
          <div className="mt-6 grid max-w-3xl gap-4 text-base leading-relaxed text-muted-foreground">
            {details.longIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      <section className="container-x py-16">
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

            {details ? (
              <>
                <div className="mt-12">
                  <SectionLabel>Dlaczego my</SectionLabel>
                  <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
                    Korzyści, które realnie odczujesz
                  </h2>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {details.benefitCards.map((b, i) => (
                    <Reveal
                      key={b.title}
                      delay={(i % 2) * 90}
                      className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-sm"
                    >
                      <h3 className="font-display text-base font-bold text-navy-deep">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                    </Reveal>
                  ))}
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-premium">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Cena</div>
              <div className="mt-1 font-display text-3xl font-bold text-navy-deep">{service.priceFrom}</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Każda wycena jest indywidualna — zależy od metrażu, zakresu i częstotliwości.
              </p>
              <div className="mt-6 grid gap-3">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-cream shadow-premium transition-transform hover:scale-[1.01]"
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
            </div>
          </aside>
        </div>
      </section>

      {details && (
        <section className="relative overflow-hidden bg-navy-deep text-cream">
          <div className="absolute inset-0 bg-grid-navy opacity-20" />
          <div className="container-x relative py-16 md:py-24">
            <SectionLabel>Jak to wygląda krok po kroku</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-display text-2xl font-bold leading-tight md:text-4xl">
              Proces realizacji usługi „{service.title.toLowerCase()}”
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {details.process.map((s, i) => (
                <li key={s.title}>
                  <Reveal
                    delay={i * 90}
                    className="relative rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur"
                  >
                    <div className="font-display text-4xl font-bold text-gold/80">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {details && details.galleryImages.length > 0 && (
        <section className="container-x py-16">
          <SectionLabel>Zdjęcia z realizacji</SectionLabel>
          <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
            Tak wygląda efekt naszej pracy
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {details.galleryImages.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {relatedRealizacje.length > 0 && (
        <section className="bg-secondary/40">
          <div className="container-x py-16">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <SectionLabel>Realizacje</SectionLabel>
                <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
                  Przed i po — prawdziwe zlecenia
                </h2>
              </div>
              <Link
                to="/realizacje"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-deep hover:text-gold"
              >
                Zobacz wszystkie <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedRealizacje.map((r) => (
                <div key={r.slug} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <BeforeAfterSlider
                    before={r.before}
                    after={r.after}
                    beforeLabel={r.beforeLabel}
                    afterLabel={r.afterLabel}
                    title={r.title}
                  />
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-navy-deep">{r.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-x py-16">
        <SectionLabel>Obszar działania</SectionLabel>
        <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
          {service.title} — dostępne w całym Krakowie
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Realizujemy tę usługę we wszystkich dzielnicach Krakowa i okolicach. Sprawdź szczegóły oferty
          w swojej dzielnicy lub po prostu zadzwoń — dojeżdżamy szybko, niezależnie od lokalizacji.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {LOCATIONS.slice(0, 8).map((loc) => (
            <Link
              key={loc.slug}
              to="/lokalizacje/$slug"
              params={{ slug: loc.slug }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-medium text-navy-deep transition-colors hover:border-gold hover:text-gold"
            >
              <MapPin className="h-3 w-3 text-gold" />
              {loc.name}
            </Link>
          ))}
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

      <section className="container-x py-16">
        <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">Sprawdź też</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/uslugi/$slug"
              params={{ slug: r.slug }}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-premium"
            >
              <div className="font-display text-lg font-bold text-navy-deep">{r.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep p-10 text-cream shadow-premium md:p-16">
          <div className="absolute inset-0 bg-grid-navy opacity-20" />
          <div
            className="absolute -top-24 -right-10 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl">
                Zamów „{service.title.toLowerCase()}” już dziś
              </h2>
              <p className="mt-4 max-w-xl text-cream/75">
                Bezpłatna i niezobowiązująca wycena w 15 minut. Odpowiadamy w ciągu kilku godzin, a termin
                realizacji to zwykle 1–3 dni robocze.
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
    </SiteLayout>
  );
}

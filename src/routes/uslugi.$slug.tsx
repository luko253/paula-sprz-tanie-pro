import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SiteLayout, PageHero, SectionLabel } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { BLOG_POSTS, BLOG_POSTS_EXTENDED, LOCATIONS, SERVICES, SERVICE_DETAILS, SITE } from "@/lib/site-data";
import { getServiceImage } from "@/lib/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FEATURED_LOCATION_SLUGS = ["krakow", "podgorze", "bronowice", "krowodrza"] as const;
const ALL_BLOG_POSTS = [...BLOG_POSTS, ...BLOG_POSTS_EXTENDED];
const BLOG_POST_BY_SLUG = new Map(ALL_BLOG_POSTS.map((post) => [post.slug, post] as const));
const LOCATION_BY_SLUG = new Map(LOCATIONS.map((location) => [location.slug, location] as const));

const SERVICE_READING_LINKS: Record<string, string[]> = {
  "sprzatanie-mieszkan": [
    "ile-kosztuje-sprzatanie-mieszkania-w-krakowie",
    "sprzatanie-po-przeprowadzce",
    "ekologiczne-sprzatanie-krakow",
  ],
  "sprzatanie-domow": [
    "generalne-sprzatanie-domu-krakow",
    "sprzatanie-po-przeprowadzce",
    "firma-sprzatajaca-krakow-jak-wybrac",
  ],
  "sprzatanie-biur": [
    "sprzatanie-biur-krakow-co-warto-wiedziec",
    "firma-sprzatajaca-krakow-jak-wybrac",
    "ekologiczne-sprzatanie-krakow",
  ],
  "sprzatanie-wspolnot-mieszkaniowych": [
    "sprzatanie-wspolnot-mieszkaniowych-krakow",
    "jak-dbac-o-czesci-wspolne-we-wspolnotach-mieszkaniowych",
    "sprzatanie-klatek-schodowych-krakow",
  ],
  "sprzatanie-administracji": [
    "sprzatanie-biur-krakow-co-warto-wiedziec",
    "firma-sprzatajaca-krakow-jak-wybrac",
    "jak-dbac-o-czesci-wspolne-we-wspolnotach-mieszkaniowych",
  ],
  "sprzatanie-po-remoncie": [
    "sprzatanie-po-budowie-krakow",
    "jak-przygotowac-mieszkanie-do-sprzatania-po-remoncie",
    "sprzatanie-po-przeprowadzce",
  ],
  "sprzatanie-balkonow-po-golebiach": [
    "jak-usunac-zabrudzenia-po-golebiach-z-balkonu",
    "jak-zabezpieczyc-balkon-przed-golebiami",
    "firma-sprzatajaca-krakow-jak-wybrac",
  ],
  "mycie-okien": [
    "jak-czesto-myc-okna",
    "mycie-okien-krakow-cennik",
    "ekologiczne-sprzatanie-krakow",
  ],
  "sprzatanie-terenow-zielonych": [
    "odsniezanie-krakow",
    "firma-sprzatajaca-krakow-jak-wybrac",
    "ekologiczne-sprzatanie-krakow",
  ],
};

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const details = s ? SERVICE_DETAILS[s.slug] : undefined;
    const title = s ? `${s.title} â€” KrakĂłw | LumiClean` : "UsĹ‚uga";
    const desc = s
      ? [s.short, details?.highlight, "ObsĹ‚uga Krakowa i okolic z bezpĹ‚atnÄ… wycenÄ…."]
        .filter(Boolean)
        .join(" ")
      : "UsĹ‚uga sprzÄ…tajÄ…ca w Krakowie";
    const image = s ? getServiceImage(s.slug) : undefined;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/uslugi/${s?.slug ?? ""}` },
        ...(image ? [{ property: "og:image", content: image }] : []),
        ...(image ? [{ name: "twitter:card", content: "summary_large_image" }] : []),
        ...(image ? [{ name: "twitter:image", content: image }] : []),
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
                  areaServed: { "@type": "City", name: "KrakĂłw" },
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
        <Link to="/uslugi" className="text-gold underline">
          Wszystkie usługi
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <div className="container-x py-20">
        <h1 className="font-display text-2xl">CoĹ› poszĹ‚o nie tak</h1>
        <button onClick={reset} className="mt-4 underline">
          SprĂłbuj ponownie
        </button>
      </div>
    </SiteLayout>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const details = SERVICE_DETAILS[service.slug];
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const heroImg = getServiceImage(service.slug);
  const featuredLocations = FEATURED_LOCATION_SLUGS.map((slug) => LOCATION_BY_SLUG.get(slug)).filter(
    (location): location is (typeof LOCATIONS)[number] => Boolean(location),
  );
  const readingPosts = (SERVICE_READING_LINKS[service.slug] ?? [])
    .map((slug) => BLOG_POST_BY_SLUG.get(slug))
    .filter((post): post is (typeof ALL_BLOG_POSTS)[number] => Boolean(post));

  return (
    <SiteLayout>
      <PageHero eyebrow={details.highlight} title={service.title} subtitle={service.intro} />

      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-navy-deep">
              Strona główna
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/uslugi" className="hover:text-navy-deep">
              Usługi
            </Link>
          </li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">{service.title}</li>
        </ol>
      </nav>

      <section className="container-x py-20">
        <div className="mb-12 overflow-hidden rounded-[2rem] border border-border shadow-premium">
          <img
            src={heroImg}
            alt={`${service.title} w Krakowie`}
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
                <li
                  key={it}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-navy-deep"
                >
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

            <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/5 p-6">
              <h3 className="font-display text-lg font-bold text-navy-deep">Dlaczego warto nas wybrać?</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {details.benefitCards.map((b) => (
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
          </div>

          <aside className="rounded-3xl border border-border bg-card p-8 shadow-premium">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Cena</div>
            <div className="mt-1 font-display text-3xl font-bold text-navy-deep">{service.priceFrom}</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Każda wycena jest indywidualna â€” zależy od metrażu, zakresu i częstotliwości.
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
              <p className="mt-1 text-xs text-muted-foreground">Wypełnij formularz â€” oddzwonimy z wyceną.</p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionLabel>{details.highlight}</SectionLabel>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-4xl">
              Jak realizujemy {service.title.toLowerCase()}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {details.longIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold" />
                Lokalnie
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Obsługujemy Kraków i okoliczne dzielnice, a przy stałych zleceniach pracujemy według jednego
                harmonogramu i z jednym opiekunem kontaktowym.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Proces</SectionLabel>
            <h3 className="mt-6 font-display text-xl font-bold text-navy-deep md:text-2xl">Jak wygląda współpraca</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {details.process.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="mt-3 font-display text-lg font-bold text-navy-deep">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="container-x py-16">
          <SectionLabel>Galeria</SectionLabel>
          <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
            Zobacz przykładowe realizacje
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {details.galleryImages.map((image) => (
              <figure key={image.alt} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Lokalizacje</SectionLabel>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
              Sprawdź obsługiwane dzielnice
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {featuredLocations.map((location) => (
                <Link
                  key={location.slug}
                  to="/lokalizacje/$slug"
                  params={{ slug: location.slug }}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-gold hover:shadow-sm"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <div>
                    <div className="font-display text-base font-bold text-navy-deep">Sprzątanie {location.name}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{location.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Poradniki</SectionLabel>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-3xl">
              Powiązane artykuły
            </h2>
            <div className="mt-8 grid gap-3">
              {readingPosts.map((post) => (
                <Link
                  key={post.slug}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold hover:shadow-sm"
                >
                  <div className="font-display text-lg font-bold text-navy-deep group-hover:text-gold">
                    {post.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-deep/70">
                    Czytaj więcej <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

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

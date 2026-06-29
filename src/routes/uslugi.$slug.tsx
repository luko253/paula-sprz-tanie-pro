import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SiteLayout, PageHero, SectionLabel } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { SERVICES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — Kraków | Paula Sprzątanie` : "Usługa";
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

  return (
    <SiteLayout>
      <PageHero eyebrow="Usługa" title={service.title} subtitle={service.intro} />

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionLabel>Zakres prac</SectionLabel>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy-deep md:text-4xl">
              Co dokładnie wchodzi w usługę
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.scope.map((it) => (
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
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-navy-deep">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  {b}
                </li>
              ))}
            </ul>
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

      <section className="bg-secondary/40">
        <div className="container-x py-16">
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
        </div>
      </section>
    </SiteLayout>
  );
}
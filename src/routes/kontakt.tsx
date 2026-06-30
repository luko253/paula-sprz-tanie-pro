import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout, PageHero, SectionLabel } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — LumiClean Kraków" },
      { name: "description", content: "Skontaktuj się z firmą sprzątającą LumiClean. Bezpłatna wycena, telefon, e-mail, mapa." },
      { property: "og:title", content: "Kontakt — LumiClean" },
      { property: "og:description", content: "Skontaktuj się z nami — wycena gratis." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy o Twoim sprzątaniu"
        subtitle="Zadzwoń, napisz, wyślij formularz — wybierz formę, która jest dla Ciebie najwygodniejsza."
      />

      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-navy-deep">Strona główna</Link></li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">Kontakt</li>
        </ol>
      </nav>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionLabel>Dane kontaktowe</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold text-navy-deep md:text-4xl">
              Jesteśmy dostępni 6 dni w tygodniu
            </h2>
            <ul className="mt-8 space-y-4 text-sm">
              <Info icon={<Phone className="h-4 w-4" />} label="Telefon" value={SITE.phone} href={`tel:${SITE.phoneRaw}`} />
              <Info icon={<Mail className="h-4 w-4" />} label="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
              <Info icon={<Clock className="h-4 w-4" />} label="Godziny pracy" value={SITE.hours} />
              <Info icon={<MapPin className="h-4 w-4" />} label="Adres" value={SITE.address} />
            </ul>

            <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-premium">
              <iframe
                title="Mapa LumiClean"
                src="https://www.google.com/maps?q=Krak%C3%B3w&output=embed"
                loading="lazy"
                className="h-[360px] w-full"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-premium md:p-10">
            <h2 className="font-display text-2xl font-bold text-navy-deep">Bezpłatna wycena</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Odpowiadamy w ciągu kilku godzin w godzinach pracy.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-semibold text-navy-deep">{value}</div>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="hover:text-gold">{content}</a> : content}</li>;
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Bird,
  Briefcase,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileCheck,
  Hammer,
  Home,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { SiteLayout, SectionLabel } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_POSTS, FAQ, GEO_FAQ, LOCATIONS, REALIZACJE, SERVICES, SITE, STEPS, TESTIMONIALS, getBlogCover } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LumiClean — profesjonalne sprzątanie w Krakowie | Firma sprzątająca" },
      {
        name: "description",
        content:
          "Profesjonalna firma sprzątająca w Krakowie ✓ Sprzątanie mieszkań, domów, biur, wspólnot ✓ Sprzątanie po remoncie ✓ Mycie okien ✓ Balkony po gołębiach ✓ Bezpłatna wycena ✓ 10+ lat doświadczenia ✓ Ubezpieczenie OC do 1 mln zł",
      },
      { property: "og:title", content: "LumiClean — profesjonalna firma sprzątająca w Krakowie" },
      {
        property: "og:description",
        content:
          "Profesjonalne sprzątanie mieszkań, domów, biur i wspólnot w Krakowie. 10+ lat doświadczenia, 1000+ zleceń, bezpłatna wycena.",
      },
      { property: "og:url", content: "https://lumiclean.pl/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: "LumiClean — profesjonalna firma sprzątająca w Krakowie" },
      { name: "twitter:description", content: "Sprzątanie mieszkań, domów, biur i wspólnot w Krakowie. Bezpłatna wycena." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://lumiclean.pl/" },
      { rel: "preload", as: "image", href: heroImg, type: "image/jpeg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              mainEntity: [...FAQ, ...GEO_FAQ].map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://lumiclean.pl/" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const ICONS = { Home, Building2, Briefcase, Users, Landmark, Hammer, Bird, Sparkles, Leaf };

const STATS = [
  { value: "10+", label: "lat doświadczenia" },
  { value: "1000+", label: "wykonanych zleceń" },
  { value: "100%", label: "zadowolonych klientów" },
  { value: "24h", label: "szybkie terminy realizacji" },
];

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <WhyUs />
      <About />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <BlogPreview />
      <LocalSeo />
      <Coverage />
      <FaqSection />
      <GeoFaqSection />
      <Cta />
      <Contact />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-grid-navy opacity-[0.18]" />
      <div
        className="absolute -top-20 -right-20 -z-10 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 60%)" }}
      />

      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <SectionLabel>Profesjonalne sprzątanie · Kraków</SectionLabel>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-navy-deep md:text-6xl lg:text-7xl">
            Profesjonalne <span className="text-gradient-gold">usługi sprzątające</span> w Krakowie
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Kompleksowe sprzątanie mieszkań, domów, biur i wspólnot mieszkaniowych. Działamy
            terminowo, dokładnie i profesjonalnie — z gwarancją satysfakcji.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-cream transition-transform hover:scale-[1.02] shadow-premium"
            >
              Bezpłatna wycena
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-card px-7 py-4 text-sm font-semibold text-navy-deep transition-colors hover:border-gold hover:bg-cream"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span>
                Zadzwoń teraz
                <span className="hidden font-bold tabular-nums text-navy-deep group-hover:text-gold sm:inline"> — {SITE.phone}</span>
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Ubezpieczenie OC do 1 mln zł
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold" />
              4.9 / 5 — opinie klientów
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-premium">
            <img
              src={heroImg}
              alt="Profesjonalna firma sprzątająca w Krakowie"
              width={1600}
              height={1200}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-premium md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-navy-deep">1000+</div>
                <div className="text-xs text-muted-foreground">zadowolonych klientów</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-border bg-navy-deep p-5 text-cream shadow-premium lg:block">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gold" />
              <div>
                <div className="text-xs uppercase tracking-widest text-cream/60">Wycena w</div>
                <div className="font-display text-lg font-bold">15 minut</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="container-x">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-card p-8 text-center">
            <div className="font-display text-4xl font-bold text-navy-deep md:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Ubezpieczenie OC do 1 mln zł",
    text: "Każde zlecenie jest objęte pełną ochroną ubezpieczeniową — w razie szkody nigdy nie zostajesz z problemem sam.",
  },
  {
    icon: Clock,
    title: "10+ lat doświadczenia",
    text: "Działamy w Krakowie od ponad dekady. Znamy specyfikę różnych dzielnic, budynków i typów zabudowy.",
  },
  {
    icon: Sparkles,
    title: "1000+ zrealizowanych zleceń",
    text: "Od kawalerek po biurowce — mamy doświadczenie w niemal każdym typie powierzchni.",
  },
  {
    icon: Users,
    title: "Stała, sprawdzona ekipa",
    text: "Pracujemy z zaufanymi ludźmi — bez przypadkowej rotacji. Wiesz, kto wchodzi do Twojej przestrzeni.",
  },
  {
    icon: FileCheck,
    title: "Faktury VAT i umowy",
    text: "Pełna dokumentacja każdego zlecenia — formalnie i przejrzyście, dla firm i osób prywatnych.",
  },
  {
    icon: Award,
    title: "Gwarancja satysfakcji",
    text: "Jeśli efekt nie spełnia oczekiwań, wracamy bezpłatnie i poprawiamy — bez dodatkowych pytań.",
  },
];

function WhyUs() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel>Dlaczego my?</SectionLabel>
        <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
          Powody, dla których klienci nam ufają
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 3) * 90}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-premium"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
              <item.icon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-lg font-bold text-navy-deep">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Profesjonalny sprzęt sprzątający"
            width={1200}
            height={1000}
            loading="lazy"
            decoding="async"
            className="w-full rounded-[2rem] object-cover shadow-premium"
          />
          <div className="absolute -bottom-6 -right-6 hidden max-w-[16rem] rounded-2xl bg-navy-deep p-6 text-cream shadow-premium md:block">
            <Quote className="h-6 w-6 text-gold" />
            <p className="mt-3 text-sm leading-relaxed">
              Sprzątamy tak, jak sami chcielibyśmy mieć posprzątane.
            </p>
          </div>
        </div>

        <div>
          <SectionLabel>O nas</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
            Sprzątamy tak, jak sami chcielibyśmy mieć&nbsp;posprzątane.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            LumiClean to rodzinna, krakowska firma z dziesięcioletnim doświadczeniem.
            Zaczynaliśmy od kilku mieszkań na Kazimierzu, dziś obsługujemy setki klientów
            indywidualnych, dziesiątki biur i wspólnot mieszkaniowych w całym Krakowie.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Każde zlecenie traktujemy tak samo poważnie — niezależnie od metrażu i ceny.
            Pracujemy własnym sprzętem, na sprawdzonych środkach i z ludźmi, którym ufamy.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Stała, sprawdzona ekipa",
              "Ubezpieczenie OC do 1 mln zł",
              "Faktury VAT i umowy",
              "Środki ekologiczne na życzenie",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-navy-deep">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="uslugi" className="bg-secondary/40">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Usługi</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
              Pełen zakres usług sprzątających w jednej firmie
            </h2>
          </div>
          <Link
            to="/uslugi"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-deep hover:text-gold transition-colors"
          >
            Zobacz wszystkie usługi <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] ?? Sparkles;
            return (
              <Link
                key={s.slug}
                to="/uslugi/$slug"
                params={{ slug: s.slug }}
                className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-premium"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-cream transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-deep">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs">
                  <span className="font-semibold text-gold">{s.priceFrom}</span>
                  <span className="inline-flex items-center gap-1 text-navy-deep/70 group-hover:text-navy-deep">
                    Zobacz <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const teaser = REALIZACJE.slice(0, 3);

  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <SectionLabel>Realizacje</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
            Zobacz prawdziwe efekty „przed” i „po”
          </h2>
          <p className="mt-4 text-muted-foreground">
            Przesuń suwak na zdjęciu, aby zobaczyć różnicę. To prawdziwe realizacje naszej ekipy — nie zdjęcia poglądowe.
          </p>
        </div>
        <Link
          to="/realizacje"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-deep hover:text-gold transition-colors"
        >
          Zobacz wszystkie realizacje <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {teaser.map((item, i) => (
          <Reveal key={item.slug} delay={i * 100}>
            <HomeBeforeAfter item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HomeBeforeAfter({ item }: { item: (typeof REALIZACJE)[number] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-premium">
      <BeforeAfterSlider
        before={item.before}
        after={item.after}
        beforeLabel={item.beforeLabel}
        afterLabel={item.afterLabel}
        title={item.title}
        width={900}
        height={675}
      />
      <div className="p-5">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">{item.category}</span>
        <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-navy-deep">{item.title}</h3>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="absolute inset-0 bg-grid-navy opacity-20" />
      <div className="container-x relative py-20 md:py-28">
        <SectionLabel>Współpraca</SectionLabel>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
          5 prostych kroków do czystej przestrzeni
        </h2>

        <ol className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <Reveal
                delay={i * 80}
                className="relative rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur"
              >
                <div className="font-display text-5xl font-bold text-gold/80">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[i];

  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionLabel>Opinie</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
            Klienci, którzy nam zaufali
          </h2>
          <p className="mt-4 text-muted-foreground">
            Setki opinii w internecie. Tu kilka wybranych, ale chętnie podeślemy więcej referencji.
          </p>
          <div className="mt-8 flex gap-2">
            <button
              type="button"
              aria-label="Poprzednia opinia"
              onClick={() => setI((p) => (p - 1 + total) % total)}
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-navy-deep hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Następna opinia"
              onClick={() => setI((p) => (p + 1) % total)}
              className="grid h-12 w-12 place-items-center rounded-full bg-navy text-cream hover:bg-navy-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-premium md:p-12">
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-6 font-display text-xl leading-relaxed text-navy-deep md:text-2xl">
            „{t.text}"
          </p>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <div className="font-semibold text-navy-deep">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
            <div className="text-sm text-muted-foreground">
              {i + 1} / {total}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="bg-secondary/40">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Blog</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
              Porady, które pomogą Ci dbać o czystość
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-deep hover:text-gold"
          >
            Wszystkie wpisy <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-premium"
            >
              <img
                src={getBlogCover(p.slug)}
                alt={p.title}
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{new Date(p.date).toLocaleDateString("pl-PL")}</span>
                  <span>·</span>
                  <span>{p.readMinutes} min czytania</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-deep group-hover:text-gold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalSeo() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="text-center">
        <SectionLabel>Dzielnice Krakowa</SectionLabel>
        <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
          Sprzątanie w Twojej dzielnicy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Obsługujemy wszystkie dzielnice Krakowa. Sprawdź ofertę w swojej okolicy — dojeżdżamy szybko, a wycena jest bezpłatna.
        </p>
      </div>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {LOCATIONS.map((loc) => (
          <Link
            key={loc.slug}
            to="/lokalizacje/$slug"
            params={{ slug: loc.slug }}
            className="flex items-center gap-2 rounded-2xl border border-border bg-card p-4 text-sm font-semibold text-navy-deep transition-all hover:border-gold hover:shadow-sm"
          >
            <MapPin className="h-4 w-4 shrink-0 text-gold" />
            {loc.name}
            <ArrowRight className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>Obszar działania</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
            Działamy na terenie Krakowa i okolic
          </h2>
          <p className="mt-6 text-muted-foreground">
            Obsługujemy całe miasto — od Starego Miasta przez Krowodrzę, Podgórze, Nową Hutę, aż po
            Bronowice, Mistrzejowice i Ruczaj. Dojeżdżamy również do miejscowości wokół Krakowa.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-2 text-sm text-navy-deep sm:grid-cols-3">
            {[
              "Stare Miasto","Kazimierz","Podgórze","Krowodrza","Bronowice","Nowa Huta",
              "Mistrzejowice","Prądnik","Ruczaj","Wieliczka","Skawina","Zabierzów",
            ].map((d) => (
              <div key={d} className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                {d}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-premium">
          <iframe
            title="Mapa obszaru działania LumiClean"
            src="https://www.google.com/maps?q=Krak%C3%B3w&output=embed"
            loading="lazy"
            className="h-[420px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-secondary/40">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
            Najczęściej zadawane pytania
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem
                key={i}
                value={"f" + i}
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
  );
}

function GeoFaqSection() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>O firmie — dla wyszukiwarek AI</SectionLabel>
        <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
          Wszystko, co warto wiedzieć o LumiClean
        </h2>
        <p className="mt-4 text-muted-foreground">
          Odpowiadamy na pytania, które najczęściej zadają klienci — i wyszukiwarki.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {GEO_FAQ.map((f, i) => (
            <AccordionItem
              key={i}
              value={"gf" + i}
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
    </section>
  );
}

function Cta() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep p-10 text-cream shadow-premium md:p-16">
        <div className="absolute inset-0 bg-grid-navy opacity-20" />
        <div
          className="absolute -top-24 -right-10 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
        />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              Potrzebujesz profesjonalnej firmy sprzątającej?
            </h2>
            <p className="mt-4 max-w-xl text-cream/75">
              Zadzwoń lub napisz — wycena jest darmowa, a my odpowiadamy w ciągu kilku godzin.
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
  );
}

function Contact() {
  return (
    <section id="kontakt" className="container-x py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
            Napisz do nas — odpowiemy w&nbsp;ciągu kilku godzin
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wypełnij krótki formularz lub skontaktuj się bezpośrednio — wybierz wygodną dla siebie formę.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Telefon</div>
                <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-navy-deep">
                  {SITE.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">E-mail</div>
                <a href={`mailto:${SITE.email}`} className="font-semibold text-navy-deep">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Godziny pracy</div>
                <div className="font-semibold text-navy-deep">{SITE.hours}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Adres</div>
                <div className="font-semibold text-navy-deep">{SITE.address}</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-premium md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

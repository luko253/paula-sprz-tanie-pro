import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BEFORE_AFTER } from "@/lib/images";

// --- Mieszkania ---
import galM1 from "@/assets/svc-apartments.jpg";
import galM2 from "@/assets/mieszkanie-after.jpg";
import galM3 from "@/assets/mieszkanie-clean-living.jpg";
import galM4 from "@/assets/mieszkanie-przed-po.jpg";
import galM5 from "@/assets/ba-bathroom-after.jpg";
import galM6 from "@/assets/ba-kitchen-after.jpg";

// --- Biura ---
import galB1 from "@/assets/svc-biur-hero.jpg";
import galB2 from "@/assets/svc-offices.jpg";
import galB3 from "@/assets/biuro-glass-room.jpg";
import galB4 from "@/assets/biuro-lounge.jpg";
import galB5 from "@/assets/svc-administracji-sala.jpg";

// --- Balkony po gołębiach ---
import galBalk1 from "@/assets/balkon-po-siatka.jpg";
import galBalk2 from "@/assets/balkon-przed-golebie.jpg";
import galBalk3 from "@/assets/balkon-after-v2.jpg";
import galBalk4 from "@/assets/balkon-before-v2.jpg";
import galBalk5 from "@/assets/balkon-before-v3.jpg";

// --- Wspólnoty ---
import galW1 from "@/assets/svc-wspolnoty-hero.jpg";
import galW2 from "@/assets/svc-community.jpg";
import galW3 from "@/assets/svc-stairs.jpg";
import galW4 from "@/assets/wspolnota-after-lobby.jpg";
import galW5 from "@/assets/wspolnota-before-corridor.jpg";
import galW6 from "@/assets/klatka-before-worn.jpg";

// --- Mycie okien ---
import galO1 from "@/assets/okna-przed-mycie.jpg";
import galO2 from "@/assets/okna-po-czyste.jpg";
import galO3 from "@/assets/okna-after-v2.jpg";
import galO4 from "@/assets/okna-before-v2.jpg";
import galO5 from "@/assets/okna-before-v3.jpg";

// --- Po remoncie ---
import galR1 from "@/assets/svc-renovation.jpg";
import galR2 from "@/assets/svc-remont-before.jpg";
import galR3 from "@/assets/svc-remont-after.jpg";
import galR4 from "@/assets/remont-before-tools.jpg";
import galR5 from "@/assets/ba-renovation-before.jpg";
import galR6 from "@/assets/ba-renovation-after.jpg";

// --- Po budowie ---
import galBud1 from "@/assets/svc-construction.jpg";
import galBud2 from "@/assets/gal-budowa-1.jpg";
import galBud3 from "@/assets/gal-budowa-2.jpg";
import galBud4 from "@/assets/gal-budowa-3.jpg";
import galBud5 from "@/assets/gal-budowa-4.jpg";

// --- Tereny zielone ---
import galT1 from "@/assets/svc-green.jpg";
import galT2 from "@/assets/tereny-lawn.jpg";
import galT3 from "@/assets/svc-tereny-hero.jpg";
import galT4 from "@/assets/gal-tereny-1.jpg";
import galT5 from "@/assets/gal-tereny-2.jpg";

// --- Przemysłowe ---
import galP1 from "@/assets/svc-industrial.jpg";
import galP2 from "@/assets/gal-prom-1.jpg";
import galP3 from "@/assets/gal-prom-2.jpg";
import galP4 from "@/assets/gal-prom-3.jpg";
import galP5 from "@/assets/gal-prom-4.jpg";

const ITEMS = [
  // Mieszkania (6)
  { src: galM1, cat: "Mieszkania", alt: "Czyste mieszkanie po generalnym sprzątaniu — LumiClean Kraków" },
  { src: galM2, cat: "Mieszkania", alt: "Kuchnia po profesjonalnym czyszczeniu — efekt widoczny od razu" },
  { src: galM3, cat: "Mieszkania", alt: "Schludny salon po regularnym sprzątaniu mieszkania" },
  { src: galM4, cat: "Mieszkania", alt: "Realizacja: mieszkanie przed i po sprzątaniu — stan zastanej i efekt końcowy" },
  { src: galM5, cat: "Mieszkania", alt: "Łazienka po gruntownym czyszczeniu — kafelki i armatura bez kamienia" },
  { src: galM6, cat: "Mieszkania", alt: "Czysta kuchnia po myciu zabudowy, blatów i AGD" },
  // Biura (5)
  { src: galB1, cat: "Biura", alt: "Czyste, gotowe biuro przed otwarciem po sprzątaniu nocnym" },
  { src: galB2, cat: "Biura", alt: "Open space po kompleksowym sprzątaniu — stanowiska gotowe do pracy" },
  { src: galB3, cat: "Biura", alt: "Szklana sala konferencyjna po gruntownym czyszczeniu przeszkleń" },
  { src: galB4, cat: "Biura", alt: "Strefa wypoczynku biurowej po sprzątaniu — LumiClean" },
  { src: galB5, cat: "Biura", alt: "Sala konferencyjna budynku administracyjnego po serwisie dziennym" },
  // Balkony po gołębiach (5)
  { src: galBalk1, cat: "Balkony po gołębiach", alt: "Balkon po czyszczeniu — czysta posadzka, zamontowana siatka ochronna" },
  { src: galBalk2, cat: "Balkony po gołębiach", alt: "Balkon pokryty odchodami gołębi — stan przed przystąpieniem do prac" },
  { src: galBalk3, cat: "Balkony po gołębiach", alt: "Czysty balkon po dezynfekcji i usunięciu wszystkich zabrudzeń" },
  { src: galBalk4, cat: "Balkony po gołębiach", alt: "Silnie zabrudzony balkon z odchodami ptaków — zakres typowej realizacji" },
  { src: galBalk5, cat: "Balkony po gołębiach", alt: "Balkon z nagromadzonymi ptasimi nieczystościami przed profesjonalnym czyszczeniem" },
  // Wspólnoty (6)
  { src: galW1, cat: "Wspólnoty", alt: "Zadbana klatka schodowa wspólnoty mieszkaniowej — regularna obsługa LumiClean" },
  { src: galW2, cat: "Wspólnoty", alt: "Czysty korytarz budynku wielorodzinnego po serwisie tygodniowym" },
  { src: galW3, cat: "Wspólnoty", alt: "Schody klatki schodowej po gruntownym myciu i czyszczeniu poręczy" },
  { src: galW4, cat: "Wspólnoty", alt: "Hall wejściowy wspólnoty po sprzątaniu — pierwsze wrażenie ma znaczenie" },
  { src: galW5, cat: "Wspólnoty", alt: "Korytarz klatki schodowej przed przystąpieniem do regularnej obsługi" },
  { src: galW6, cat: "Wspólnoty", alt: "Zaniedbana klatka — stan zastany przy przejęciu obsługi od poprzedniej firmy" },
  // Mycie okien (5)
  { src: galO1, cat: "Mycie okien", alt: "Profesjonalne mycie okna w mieszkaniu — pracownik LumiClean z mikrofibą" },
  { src: galO2, cat: "Mycie okien", alt: "Czyste okno PVC po profesjonalnym myciu — pełna przejrzystość bez smug" },
  { src: galO3, cat: "Mycie okien", alt: "Okna po myciu — widok na zewnątrz bez zacieków i zabrudzeń" },
  { src: galO4, cat: "Mycie okien", alt: "Okno przed myciem — widoczne zabrudzenia i zacieki na szybie" },
  { src: galO5, cat: "Mycie okien", alt: "Mocno zabrudzone okno przed profesjonalnym myciem przez LumiClean" },
  // Po remoncie (6)
  { src: galR1, cat: "Po remoncie", alt: "Mieszkanie po remoncie gotowe do wprowadzenia — po sprzątaniu poremontowym" },
  { src: galR2, cat: "Po remoncie", alt: "Pomieszczenie w trakcie prac — kurz i pył gipsowy przed sprzątaniem" },
  { src: galR3, cat: "Po remoncie", alt: "Czyste pomieszczenie po gruntownym sprzątaniu poremontowym" },
  { src: galR4, cat: "Po remoncie", alt: "Resztki materiałów budowlanych i narzędzia — zakres typowego zlecenia poremontowego" },
  { src: galR5, cat: "Po remoncie", alt: "Pomieszczenie pokryte pyłem poremontowym — stan zastany przed sprzątaniem" },
  { src: galR6, cat: "Po remoncie", alt: "Ten sam lokal po kompleksowym czyszczeniu — gotowy do zamieszkania" },
  // Po budowie (5)
  { src: galBud1, cat: "Po budowie", alt: "Lokal po budowie — gruntowne sprzątanie przed odbiorem przez inwestora" },
  { src: galBud2, cat: "Po budowie", alt: "Czysty pokój po budowie z drewnianą podłogą — efekt końcowy" },
  { src: galBud3, cat: "Po budowie", alt: "Puste pomieszczenie w trakcie końcowego sprzątania po budowie" },
  { src: galBud4, cat: "Po budowie", alt: "Nowy lokal gotowy do odbioru po sprzątaniu pobudowlanym" },
  { src: galBud5, cat: "Po budowie", alt: "Czyste, puste pomieszczenie po budowie — podłogi wypolerowane" },
  // Tereny zielone (5)
  { src: galT1, cat: "Tereny zielone", alt: "Zadbany teren zielony przy budynku — pielęgnacja przez cały sezon" },
  { src: galT2, cat: "Tereny zielone", alt: "Regularnie koszony trawnik przy wspólnocie mieszkaniowej — LumiClean" },
  { src: galT3, cat: "Tereny zielone", alt: "Utrzymanie terenów zielonych wspólnoty — kompleksowa obsługa sezonowa" },
  { src: galT4, cat: "Tereny zielone", alt: "Koszenie trawy i pielęgnacja zieleni w parku osiedlowym" },
  { src: galT5, cat: "Tereny zielone", alt: "Pracownik przy koszeniu trawnika — obsługa terenów zewnętrznych" },
  // Przemysłowe (5)
  { src: galP1, cat: "Przemysłowe", alt: "Sprzątanie hali produkcyjnej — profesjonalny serwis przemysłowy LumiClean" },
  { src: galP2, cat: "Przemysłowe", alt: "Czysty magazyn dystrybucyjny — posadzka betonowa po serwisie" },
  { src: galP3, cat: "Przemysłowe", alt: "Zakład produkcyjny po gruntownym czyszczeniu — zachowane standardy sanitarne" },
  { src: galP4, cat: "Przemysłowe", alt: "Pracownik sprzątający halę przemysłową — codzienny serwis nocny" },
  { src: galP5, cat: "Przemysłowe", alt: "Hala przemysłowa — regularne utrzymanie czystości na terenie zakładu" },
];

const CATS = [
  "Wszystkie",
  "Mieszkania",
  "Biura",
  "Balkony po gołębiach",
  "Wspólnoty",
  "Mycie okien",
  "Po remoncie",
  "Po budowie",
  "Tereny zielone",
  "Przemysłowe",
];

export const Route = createFileRoute("/realizacje")({
  head: () => ({
    meta: [
      { title: "Realizacje — LumiClean Kraków" },
      { name: "description", content: "Galeria realizacji firmy sprzątającej LumiClean z Krakowa. Setki sprzątań rocznie — mieszkania, biura, balkony, wspólnoty, po remoncie i wiele więcej." },
      { property: "og:title", content: "Realizacje — LumiClean" },
      { property: "og:description", content: "Galeria realizacji w Krakowie." },
      { property: "og:url", content: "/realizacje" },
    ],
    links: [{ rel: "canonical", href: "/realizacje" }],
  }),
  component: RealizacjePage,
});

function RealizacjePage() {
  const [filter, setFilter] = useState("Wszystkie");
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(
    () => ITEMS.filter((g) => filter === "Wszystkie" || g.cat === filter),
    [filter],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Realizacje"
        title="Zobacz, jak wygląda nasza praca"
        subtitle="Setki sprzątań rocznie. Tu pokazujemy wybrane realizacje z różnych kategorii."
      />
      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li><Link to="/" className="hover:text-navy-deep">Strona główna</Link></li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">Realizacje</li>
        </ol>
      </nav>

      <section className="container-x pb-4 pt-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              <ArrowLeftRight className="h-3.5 w-3.5" /> Przed / Po
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-navy-deep md:text-5xl">
              Przesuń suwak i zobacz różnicę
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Realne efekty pracy naszej ekipy. Kliknij i przeciągnij środkowy uchwyt, aby porównać stan przed i po profesjonalnym czyszczeniu.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground md:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Bez retuszu — prawdziwe realizacje
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {BEFORE_AFTER.map((c) => (
            <BeforeAfter
              key={c.id}
              before={c.before}
              after={c.after}
              label={c.label}
              category={c.category}
            />
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="mb-2 font-display text-2xl font-bold text-navy-deep md:text-3xl">
          Pełna galeria realizacji
        </h2>
        <p className="mb-8 text-sm text-muted-foreground">
          {ITEMS.length} zdjęć z różnych kategorii — filtruj według rodzaju usługi.
        </p>
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

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {items.map((g, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Powiększ zdjęcie: ${g.alt}`}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <img
                src={g.src}
                alt={g.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex items-center justify-between p-4 text-xs font-semibold">
                <span className="text-navy-deep">{g.cat}</span>
                <span className="text-muted-foreground">Powiększ</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">Realizacja — {open !== null ? items[open]?.alt : ""}</DialogTitle>
          {open !== null && (
            <img
              src={items[open]?.src}
              alt={items[open]?.alt}
              decoding="async"
              className="w-full rounded-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}

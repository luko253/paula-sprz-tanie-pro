import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BEFORE_AFTER } from "@/lib/images";
import svcOffices from "@/assets/svc-offices.jpg";
import oknaAfter from "@/assets/okna-after-v2.jpg";
import svcCommunity from "@/assets/svc-community.jpg";
import balkonAfter from "@/assets/balkon-after-v2.jpg";
import svcStairs from "@/assets/svc-stairs.jpg";
import svcGreen from "@/assets/svc-green.jpg";
import svcRenovation from "@/assets/svc-renovation.jpg";
import svcConstruction from "@/assets/svc-construction.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";
import mieszkanieAfter from "@/assets/mieszkanie-clean-living.jpg";

const ITEMS = [
  { src: mieszkanieAfter, cat: "Mieszkania", alt: "Mieszkanie po sprzątaniu" },
  { src: svcOffices, cat: "Biura", alt: "Biuro po sprzątaniu" },
  { src: balkonAfter, cat: "Balkony", alt: "Czysty balkon po dezynfekcji" },
  { src: svcCommunity, cat: "Wspólnoty", alt: "Klatka schodowa wspólnoty" },
  { src: svcGreen, cat: "Tereny zielone", alt: "Zadbany teren zielony" },
  { src: oknaAfter, cat: "Mycie okien", alt: "Czyste, jasne okno po myciu" },
  { src: svcStairs, cat: "Wspólnoty", alt: "Wspólny korytarz" },
  { src: svcRenovation, cat: "Po remoncie", alt: "Mieszkanie po remoncie" },
  { src: svcConstruction, cat: "Po budowie", alt: "Lokal po budowie" },
  { src: svcIndustrial, cat: "Przemysłowe", alt: "Hala przemysłowa" },
];

const CATS = [
  "Wszystkie",
  "Mieszkania",
  "Biura",
  "Balkony",
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
      { name: "description", content: "Galeria realizacji firmy sprzątającej LumiClean z Krakowa." },
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
        <h2 className="mb-8 font-display text-2xl font-bold text-navy-deep md:text-3xl">
          Pełna galeria realizacji
        </h2>
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
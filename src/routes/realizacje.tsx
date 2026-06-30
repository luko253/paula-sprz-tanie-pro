import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { BEFORE_AFTER } from "@/lib/images";
import svcApartments from "@/assets/svc-apartments.jpg";
import svcOffices from "@/assets/svc-offices.jpg";
import svcWindows from "@/assets/svc-windows.jpg";
import svcCommunity from "@/assets/svc-community.jpg";
import svcBalcony from "@/assets/svc-balcony.jpg";
import svcStairs from "@/assets/svc-stairs.jpg";
import svcGreen from "@/assets/svc-green.jpg";
import svcRenovation from "@/assets/svc-renovation.jpg";
import svcConstruction from "@/assets/svc-construction.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";

const ITEMS = [
  { src: svcApartments, cat: "Mieszkania", alt: "Mieszkanie po sprzątaniu" },
  { src: svcOffices, cat: "Biura", alt: "Biuro po sprzątaniu" },
  { src: svcBalcony, cat: "Balkony", alt: "Czysty balkon" },
  { src: svcCommunity, cat: "Wspólnoty", alt: "Klatka schodowa wspólnoty" },
  { src: svcGreen, cat: "Tereny zielone", alt: "Zadbany teren zielony" },
  { src: svcWindows, cat: "Mycie okien", alt: "Mycie okien" },
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
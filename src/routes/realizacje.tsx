import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const ITEMS = [
  { src: g1, cat: "Mieszkania", alt: "Mieszkanie po sprzątaniu" },
  { src: g2, cat: "Biura", alt: "Biuro po sprzątaniu" },
  { src: g3, cat: "Balkony", alt: "Czysty balkon" },
  { src: g4, cat: "Wspólnoty", alt: "Klatka schodowa" },
  { src: g5, cat: "Tereny zielone", alt: "Teren zielony" },
  { src: g6, cat: "Mieszkania", alt: "Mycie okien" },
  { src: g1, cat: "Mieszkania", alt: "Salon po sprzątaniu" },
  { src: g2, cat: "Biura", alt: "Open space po sprzątaniu" },
  { src: g4, cat: "Wspólnoty", alt: "Część wspólna" },
];

const CATS = ["Wszystkie", "Mieszkania", "Biura", "Balkony", "Wspólnoty", "Tereny zielone"];

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
  const items = ITEMS.filter((g) => filter === "Wszystkie" || g.cat === filter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Realizacje"
        title="Zobacz, jak wygląda nasza praca"
        subtitle="Setki sprzątań rocznie. Tu pokazujemy wybrane realizacje z różnych kategorii."
      />
      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={
                "rounded-full px-4 py-2 text-xs font-semibold transition-colors " +
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
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
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
          <DialogTitle className="sr-only">Realizacja</DialogTitle>
          {open !== null && (
            <img src={items[open]?.src} alt={items[open]?.alt} className="w-full rounded-2xl" />
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
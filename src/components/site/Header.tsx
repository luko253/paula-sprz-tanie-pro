import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Start" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/lokalizacje", label: "Lokalizacje" },
  { to: "/realizacje", label: "Realizacje" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur border-b border-border shadow-[0_4px_24px_-12px_rgba(11,26,59,0.18)]"
          : "bg-transparent",
      )}
    >
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:py-5">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="LumiClean — strona główna">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-cream font-display text-lg font-bold shadow-glow-gold">
            L
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight text-navy-deep">
              LumiClean
            </span>
            <span className="block truncate text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Premium · Kraków
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-navy-deep/80 transition-colors hover:text-navy-deep hover:bg-secondary"
                activeProps={{ className: "text-navy-deep bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.02] shadow-premium md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{SITE.phone}</span>
            <span className="xl:hidden">Zadzwoń</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-navy-deep lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur animate-fade-in">
          <nav className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-navy-deep/90 hover:bg-secondary"
                activeProps={{ className: "bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-base font-semibold text-cream"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
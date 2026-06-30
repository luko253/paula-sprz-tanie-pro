import type { ReactNode } from "react";
import { Phone, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SITE } from "@/lib/site-data";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-full bg-navy px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Przejdź do treści głównej
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-card/95 backdrop-blur shadow-[0_-8px_24px_-12px_rgba(11,26,59,0.25)] lg:hidden">
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-border py-3.5 text-sm font-semibold text-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
      >
        <Phone className="h-4 w-4" />
        Zadzwoń
      </a>
      <Link
        to="/kontakt"
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-3.5 text-sm font-semibold text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
      >
        <Sparkles className="h-4 w-4" />
        Bezpłatna wycena
      </Link>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-deep">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="absolute inset-0 bg-grid-navy opacity-30" />
      <div
        className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
      />
      <div className="container-x relative z-10 py-20 md:py-28">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
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
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { LOCATIONS, SERVICES, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-deep text-cream">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-navy-deep font-display text-lg font-bold">
              L
            </span>
            <span className="font-display text-lg font-bold">LumiClean</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Profesjonalna firma sprzątająca z Krakowa. Działamy dokładnie, terminowo i z poszanowaniem
            Twojej przestrzeni.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Usługi</h3>
          <ul className="mt-5 space-y-2 text-sm text-cream/80">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-gold transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Firma</h3>
          <ul className="mt-5 space-y-2 text-sm text-cream/80">
            <li><Link to="/uslugi" className="hover:text-gold">Wszystkie usługi</Link></li>
            <li><Link to="/lokalizacje" className="hover:text-gold">Lokalizacje</Link></li>
            <li><Link to="/realizacje" className="hover:text-gold">Realizacje</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/kontakt" className="hover:text-gold">Kontakt</Link></li>
          </ul>
          <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Dzielnice</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-cream/80">
            {LOCATIONS.slice(0, 6).map((loc) => (
              <li key={loc.slug}>
                <Link to="/lokalizacje/$slug" params={{ slug: loc.slug }} className="hover:text-gold">
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Kontakt</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} LumiClean. Wszystkie prawa zastrzeżone.</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Profesjonalne sprzątanie · Kraków i okolice</span>
            <Link to="/polityka-prywatnosci" className="underline-offset-2 hover:text-gold hover:underline">
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
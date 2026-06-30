import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Strona nie znaleziona</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Strona główna
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Strona nie załadowała się
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Coś poszło nie tak. Spróbuj odświeżyć stronę lub wróć na stronę główną.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Spróbuj ponownie
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Strona główna
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LumiClean — Profesjonalne sprzątanie w Krakowie" },
      { name: "description", content: "Profesjonalna firma sprzątająca w Krakowie i okolicach. Sprzątanie mieszkań, domów, biur, wspólnot, po remoncie, mycie okien, balkony po gołębiach. Bezpłatna wycena ✓ Ubezpieczenie OC ✓ 10+ lat doświadczenia." },
      { name: "author", content: "LumiClean" },
      { name: "geo.region", content: "PL-MA" },
      { name: "geo.placename", content: "Kraków" },
      { name: "geo.position", content: "50.0647;19.9450" },
      { name: "ICBM", content: "50.0647, 19.9450" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "LumiClean" },
      { property: "og:locale", content: "pl_PL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LumiClean — Profesjonalne sprzątanie w Krakowie" },
      { name: "twitter:description", content: "Profesjonalna firma sprzątająca w Krakowie. Mieszkania, domy, biura, wspólnoty. Bezpłatna wycena." },
      { name: "theme-color", content: "#0b1a3b" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LocalBusiness", "CleaningService"],
              "@id": "#business",
              name: "LumiClean",
              description: "Profesjonalna firma sprzątająca w Krakowie i okolicach. Sprzątanie mieszkań, domów, biur, wspólnot mieszkaniowych, po remoncie, mycie okien, sprzątanie balkonów po gołębiach, terenów zielonych. Działamy od ponad 10 lat.",
              url: "https://lumiclean.pl",
              telephone: "+48 600 000 000",
              email: "kontakt@lumiclean.pl",
              image: "https://lumiclean.pl/og-image.jpg",
              priceRange: "$$",
              currenciesAccepted: "PLN",
              paymentAccepted: "Gotówka, BLIK, Przelew",
              openingHours: "Mo-Sa 07:00-20:00",
              foundingDate: "2016",
              areaServed: [
                { "@type": "City", name: "Kraków" },
                { "@type": "Place", name: "Nowa Huta" },
                { "@type": "Place", name: "Podgórze" },
                { "@type": "Place", name: "Krowodrza" },
                { "@type": "Place", name: "Bronowice" },
                { "@type": "Place", name: "Czyżyny" },
                { "@type": "Place", name: "Dębniki" },
                { "@type": "Place", name: "Prądnik Biały" },
                { "@type": "Place", name: "Prądnik Czerwony" },
                { "@type": "Place", name: "Bieżanów-Prokocim" },
                { "@type": "Place", name: "Wieliczka" },
                { "@type": "Place", name: "Skawina" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "ul. Floriańska 12",
                addressLocality: "Kraków",
                postalCode: "31-019",
                addressRegion: "małopolskie",
                addressCountry: "PL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.0647,
                longitude: 19.9450,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Usługi sprzątające",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprzątanie mieszkań", description: "Regularne i jednorazowe sprzątanie mieszkań w Krakowie" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprzątanie domów", description: "Kompleksowe sprzątanie domów jedno- i wielorodzinnych" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprzątanie biur", description: "Sprzątanie biur i powierzchni komercyjnych" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprzątanie wspólnot mieszkaniowych", description: "Stała obsługa wspólnot i części wspólnych budynków" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprzątanie po remoncie", description: "Usuwanie pyłu, kurzu i resztek budowlanych po remoncie" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mycie okien", description: "Profesjonalne mycie okien w mieszkaniach, biurach i lokalach" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprzątanie balkonów po gołębiach", description: "Czyszczenie i dezynfekcja balkonów po gołębiach" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprzątanie terenów zielonych", description: "Utrzymanie terenów zewnętrznych i pielęgnacja zieleni" } },
                ],
              },
              sameAs: [],
            },
            {
              "@type": "Organization",
              "@id": "#organization",
              name: "LumiClean",
              url: "https://lumiclean.pl",
              logo: "https://lumiclean.pl/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+48 600 000 000",
                contactType: "customer service",
                availableLanguage: ["Polish"],
                areaServed: "PL",
              },
            },
            {
              "@type": "WebSite",
              "@id": "#website",
              url: "https://lumiclean.pl",
              name: "LumiClean",
              publisher: { "@id": "#organization" },
              inLanguage: "pl-PL",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}

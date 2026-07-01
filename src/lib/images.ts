import svcApartments from "@/assets/svc-apartments.jpg";
import svcOffices from "@/assets/svc-offices.jpg";
import svcRenovation from "@/assets/svc-renovation.jpg";
import svcCommunity from "@/assets/svc-community.jpg";
import svcGreen from "@/assets/svc-green.jpg";
import svcStairs from "@/assets/svc-stairs.jpg";
import svcConstruction from "@/assets/svc-construction.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";
import svcBiurHero from "@/assets/svc-biur-hero.jpg";
import svcDomowHero from "@/assets/svc-domow-hero.jpg";
import svcMieszkaniaHero from "@/assets/svc-mieszkania-hero.jpg";
import svcTerenyHero from "@/assets/svc-tereny-hero.jpg";
import svcWspolnotyHero from "@/assets/svc-wspolnoty-hero.jpg";
import buildingExteriorModern from "@/assets/building-exterior-modern.jpg";
import blogSupplies from "@/assets/blog-supplies.jpg";
import blogWipe from "@/assets/blog-wipe.jpg";
import blogFloor from "@/assets/blog-floor.jpg";
import blogLinens from "@/assets/blog-linens.jpg";

import oknaAfter from "@/assets/okna-po-czyste.jpg";
import balkonAfter from "@/assets/balkon-po-siatka.jpg";

// Before/After pairs — cropped from client reference grid
import ba2MieszkaniaPrzed from "@/assets/ba2-mieszkania-przed.jpg";
import ba2MieszkaniaAfter from "@/assets/ba2-mieszkania-po.jpg";
import ba2OknaPrzed from "@/assets/ba2-okna-przed.jpg";
import ba2OknaAfter from "@/assets/ba2-okna-po.jpg";
import ba2BalkonyPrzed from "@/assets/ba2-balkony-przed.jpg";
import ba2BalkonyAfter from "@/assets/ba2-balkony-po.jpg";
import ba2RemontPrzed from "@/assets/ba2-remont-przed.jpg";
import ba2RemontAfter from "@/assets/ba2-remont-po.jpg";
import ba2WspolnotyPrzed from "@/assets/ba2-wspolnoty-przed.jpg";
import ba2WspolnotyAfter from "@/assets/ba2-wspolnoty-po.jpg";
import ba2BiuraPrzed from "@/assets/ba2-biura-przed.jpg";
import ba2BiuraAfter from "@/assets/ba2-biura-po.jpg";
import ba2AdminPrzed from "@/assets/ba2-administracja-przed.jpg";
import ba2AdminAfter from "@/assets/ba2-administracja-po.jpg";
import ba2TerenyPrzed from "@/assets/ba2-tereny-przed.jpg";
import ba2TerenyAfter from "@/assets/ba2-tereny-po.jpg";

export const SERVICE_IMAGES: Record<string, string> = {
  "sprzatanie-mieszkan": svcMieszkaniaHero,
  "sprzatanie-domow": svcDomowHero,
  "sprzatanie-biur": svcBiurHero,
  "sprzatanie-wspolnot-mieszkaniowych": svcWspolnotyHero,
  "sprzatanie-administracji": buildingExteriorModern,
  "sprzatanie-po-remoncie": svcRenovation,
  "sprzatanie-po-budowie": svcConstruction,
  "mycie-okien": oknaAfter,
  "sprzatanie-balkonow-po-golebiach": balkonAfter,
  "sprzatanie-klatek-schodowych": svcStairs,
  "sprzatanie-terenow-zielonych": svcTerenyHero,
  "sprzatanie-przemyslowe": svcIndustrial,
};

export function getServiceImage(slug: string): string {
  return SERVICE_IMAGES[slug] ?? svcApartments;
}

// Pool used to diversify blog post covers. Order matters — we round-robin by slug hash
// so no two adjacent blog cards share the same image.
export const BLOG_IMAGE_POOL: string[] = [
  svcApartments,
  blogSupplies,
  svcOffices,
  blogWipe,
  oknaAfter,
  balkonAfter,
  blogFloor,
  svcCommunity,
  blogLinens,
  svcRenovation,
  svcStairs,
  svcGreen,
];

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function getBlogCover(slug: string): string {
  return BLOG_IMAGE_POOL[hashString(slug) % BLOG_IMAGE_POOL.length];
}

export type BeforeAfterCase = {
  id: string;
  category: string;
  label: string;
  before: string;
  after: string;
};

export const BEFORE_AFTER: BeforeAfterCase[] = [
  {
    id: "mieszkania",
    category: "Sprzątanie mieszkań",
    label: "Mieszkanie po generalnym sprzątaniu — efekt widoczny na pierwszy rzut oka",
    before: ba2MieszkaniaPrzed,
    after: ba2MieszkaniaAfter,
  },
  {
    id: "okna",
    category: "Mycie okien",
    label: "Okna bez smug i zacieków — mycie od wewnątrz i zewnątrz",
    before: ba2OknaPrzed,
    after: ba2OknaAfter,
  },
  {
    id: "balkony",
    category: "Balkony po gołębiach",
    label: "Balkon pokryty odchodami — pełna dezynfekcja i czyszczenie",
    before: ba2BalkonyPrzed,
    after: ba2BalkonyAfter,
  },
  {
    id: "remont",
    category: "Sprzątanie po remoncie",
    label: "Mieszkanie gotowe do wprowadzenia po sprzątaniu poremontowym",
    before: ba2RemontPrzed,
    after: ba2RemontAfter,
  },
  {
    id: "wspolnoty",
    category: "Wspólnoty mieszkaniowe",
    label: "Klatka schodowa wspólnoty — regularne utrzymanie czystości",
    before: ba2WspolnotyPrzed,
    after: ba2WspolnotyAfter,
  },
  {
    id: "biura",
    category: "Sprzątanie biur",
    label: "Biuro po kompleksowym sprzątaniu — gotowe na przyjęcie pracowników",
    before: ba2BiuraPrzed,
    after: ba2BiuraAfter,
  },
  {
    id: "administracja",
    category: "Administracja",
    label: "Budynek administracyjny — codzienny serwis sprzątania",
    before: ba2AdminPrzed,
    after: ba2AdminAfter,
  },
  {
    id: "tereny",
    category: "Tereny zielone",
    label: "Teren zielony wspólnoty — zadbany przez cały sezon",
    before: ba2TerenyPrzed,
    after: ba2TerenyAfter,
  },
];

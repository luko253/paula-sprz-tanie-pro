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

import baBathAfter from "@/assets/ba-bathroom-after.jpg";
import baStairsBefore from "@/assets/ba-stairs-before.jpg";
import baStairsAfter from "@/assets/ba-stairs-after.jpg";
import baKitchenBefore from "@/assets/ba-kitchen-before.jpg";
import baKitchenAfter from "@/assets/ba-kitchen-after.jpg";
import baRenoBefore from "@/assets/ba-renovation-before.jpg";
import baRenoAfter from "@/assets/ba-renovation-after.jpg";

// Replacement set — sourced to match the brief precisely (residential window
// grime/clarity, balcony neglect/clean, full messy-room/clean-living-room),
// rather than the office-tower / luxury-terrace stock photos used originally.
import mieszkanieBefore from "@/assets/mieszkanie-before-v3.jpg";
import mieszkanieAfter from "@/assets/mieszkanie-clean-living.jpg";
import oknaBefore from "@/assets/okna-przed-mycie.jpg";
import oknaAfter from "@/assets/okna-po-czyste.jpg";
import balkonBefore from "@/assets/balkon-przed-golebie.jpg";
import balkonAfter from "@/assets/balkon-po-siatka.jpg";
import bathroomBefore from "@/assets/bathroom-before-v2.jpg";

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
    id: "apartment",
    category: "Mieszkania",
    label: "Zabałaganione mieszkanie po latach zaniedbań",
    before: mieszkanieBefore,
    after: mieszkanieAfter,
  },
  {
    id: "windows",
    category: "Mycie okien",
    label: "Zabrudzone okna odzyskują przejrzystość",
    before: oknaBefore,
    after: oknaAfter,
  },
  {
    id: "balcony",
    category: "Balkony po gołębiach",
    label: "Balkon po profesjonalnym czyszczeniu i dezynfekcji",
    before: balkonBefore,
    after: balkonAfter,
  },
  {
    id: "bathroom",
    category: "Łazienki",
    label: "Łazienka po latach zaniedbań",
    before: bathroomBefore,
    after: baBathAfter,
  },
  {
    id: "kitchen",
    category: "Kuchnie",
    label: "Tłusta kuchnia przywrócona do życia",
    before: baKitchenBefore,
    after: baKitchenAfter,
  },
  {
    id: "renovation",
    category: "Po remoncie",
    label: "Sprzątanie po remoncie pod klucz",
    before: baRenoBefore,
    after: baRenoAfter,
  },
  {
    id: "stairs",
    category: "Klatki schodowe",
    label: "Klatka schodowa wspólnoty",
    before: baStairsBefore,
    after: baStairsAfter,
  },
];

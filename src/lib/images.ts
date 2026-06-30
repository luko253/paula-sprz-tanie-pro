import svcApartments from "@/assets/svc-apartments.jpg";
import svcOffices from "@/assets/svc-offices.jpg";
import svcWindows from "@/assets/svc-windows.jpg";
import svcRenovation from "@/assets/svc-renovation.jpg";
import svcCommunity from "@/assets/svc-community.jpg";
import svcGreen from "@/assets/svc-green.jpg";
import svcBalcony from "@/assets/svc-balcony.jpg";
import svcStairs from "@/assets/svc-stairs.jpg";
import svcConstruction from "@/assets/svc-construction.jpg";
import svcIndustrial from "@/assets/svc-industrial.jpg";
import blogSupplies from "@/assets/blog-supplies.jpg";
import blogWipe from "@/assets/blog-wipe.jpg";
import blogFloor from "@/assets/blog-floor.jpg";
import blogLinens from "@/assets/blog-linens.jpg";

import baBathBefore from "@/assets/ba-bathroom-before.jpg";
import baBathAfter from "@/assets/ba-bathroom-after.jpg";
import baBalconyBefore from "@/assets/ba-balcony-before.jpg";
import baBalconyAfter from "@/assets/ba-balcony-after.jpg";
import baStairsBefore from "@/assets/ba-stairs-before.jpg";
import baStairsAfter from "@/assets/ba-stairs-after.jpg";
import baKitchenBefore from "@/assets/ba-kitchen-before.jpg";
import baKitchenAfter from "@/assets/ba-kitchen-after.jpg";
import baRenoBefore from "@/assets/ba-renovation-before.jpg";
import baRenoAfter from "@/assets/ba-renovation-after.jpg";

export const SERVICE_IMAGES: Record<string, string> = {
  "sprzatanie-mieszkan": svcApartments,
  "sprzatanie-domow": svcApartments,
  "sprzatanie-biur": svcOffices,
  "sprzatanie-wspolnot-mieszkaniowych": svcCommunity,
  "sprzatanie-po-remoncie": svcRenovation,
  "sprzatanie-po-budowie": svcConstruction,
  "mycie-okien": svcWindows,
  "sprzatanie-balkonow": svcBalcony,
  "sprzatanie-klatek-schodowych": svcStairs,
  "sprzatanie-terenow-zielonych": svcGreen,
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
  svcWindows,
  svcBalcony,
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
    id: "bathroom",
    category: "Łazienki",
    label: "Łazienka po latach zaniedbań",
    before: baBathBefore,
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
    id: "balcony",
    category: "Balkony",
    label: "Zaniedbany balkon w bloku",
    before: baBalconyBefore,
    after: baBalconyAfter,
  },
  {
    id: "stairs",
    category: "Klatki schodowe",
    label: "Klatka schodowa wspólnoty",
    before: baStairsBefore,
    after: baStairsAfter,
  },
];
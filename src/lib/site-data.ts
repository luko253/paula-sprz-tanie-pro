import svcMieszkaniaHero from "@/assets/svc-mieszkania-hero.jpg";
import mieszkanieAfter from "@/assets/mieszkanie-after.jpg";
import mieszkanieCleanLiving from "@/assets/mieszkanie-clean-living.jpg";
import mieszkanieBeforeClutter from "@/assets/mieszkanie-before-clutter.jpg";
import svcDomowHero from "@/assets/svc-domow-hero.jpg";
import domExterior2 from "@/assets/dom-exterior-2.jpg";
import svcBiurHero from "@/assets/svc-biur-hero.jpg";
import biuroLounge from "@/assets/biuro-lounge.jpg";
import biuroGlassRoom from "@/assets/biuro-glass-room.jpg";
import svcWspolnotyHero from "@/assets/svc-wspolnoty-hero.jpg";
import klatkaAfterBw from "@/assets/klatka-after-bw.jpg";
import klatkaBeforeWorn from "@/assets/klatka-before-worn.jpg";
import buildingExteriorModern from "@/assets/building-exterior-modern.jpg";
import svcRemontBefore from "@/assets/svc-remont-before.jpg";
import remontBeforeTools from "@/assets/remont-before-tools.jpg";
import svcRemontAfter from "@/assets/svc-remont-after.jpg";
import svcBalkonyBefore from "@/assets/svc-balkony-before.jpg";
import svcBalkonyAfter from "@/assets/svc-balkony-after.jpg";
import svcOknaHero from "@/assets/svc-okna-hero.jpg";
import oknaBuilding from "@/assets/okna-building.jpg";
import oknaIndoor from "@/assets/okna-indoor.jpg";
import svcTerenyHero from "@/assets/svc-tereny-hero.jpg";
import terenyLawn from "@/assets/tereny-lawn.jpg";
import wspolnotaBeforeCorridor from "@/assets/wspolnota-before-corridor.jpg";
import wspolnotaAfterLobby from "@/assets/wspolnota-after-lobby.jpg";

export const SITE = {
  name: "LumiClean",
  phone: "+48 600 000 000",
  phoneRaw: "+48600000000",
  email: "kontakt@lumiclean.pl",
  city: "Kraków",
  hours: "Pon – Sob: 7:00 – 20:00",
  address: "ul. Floriańska 12, 31-019 Kraków",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  intro: string;
  benefits: string[];
  scope: string[];
  priceFrom: string;
};

export const SERVICES: Service[] = [
  {
    slug: "sprzatanie-mieszkan",
    title: "Sprzątanie mieszkań",
    short: "Regularne i jednorazowe sprzątanie mieszkań w Krakowie.",
    icon: "Home",
    intro:
      "Zadbamy o czystość Twojego mieszkania od podłogi aż po sufit. Pracujemy dokładnie, dyskretnie i zawsze w ustalonym terminie.",
    benefits: [
      "Doświadczona, sprawdzona ekipa",
      "Profesjonalny sprzęt i ekologiczne środki",
      "Cena ustalana z góry — bez ukrytych kosztów",
      "Możliwość regularnej współpracy",
    ],
    scope: [
      "Odkurzanie i mycie wszystkich podłóg",
      "Mycie i dezynfekcja łazienki oraz WC",
      "Czyszczenie kuchni, sprzętów AGD, blatów",
      "Wycieranie kurzu z mebli i sprzętów",
      "Mycie luster i powierzchni szklanych",
      "Wyniesienie śmieci i wymiana worków",
    ],
    priceFrom: "od 150 zł",
  },
  {
    slug: "sprzatanie-domow",
    title: "Sprzątanie domów",
    short: "Kompleksowe sprzątanie domów jedno- i wielorodzinnych.",
    icon: "Building2",
    intro:
      "Duża powierzchnia, kilka pięter, ogród? Bierzemy to na siebie. Dopasujemy zakres prac do wielkości i specyfiki Twojego domu.",
    benefits: [
      "Pełna ekipa dostosowana do metrażu",
      "Sprzątanie wnętrz oraz przestrzeni wokół domu",
      "Profesjonalne odkurzacze i myjki",
      "Możliwość cyklicznej obsługi",
    ],
    scope: [
      "Sprzątanie wszystkich pomieszczeń mieszkalnych",
      "Mycie schodów, balustrad, klatek",
      "Czyszczenie tarasów i wejść",
      "Mycie okien i parapetów",
      "Pranie wykładzin i tapicerek (opcja)",
    ],
    priceFrom: "od 280 zł",
  },
  {
    slug: "sprzatanie-biur",
    title: "Sprzątanie biur",
    short: "Sprzątanie biur i powierzchni komercyjnych w Krakowie.",
    icon: "Briefcase",
    intro:
      "Czyste biuro to wizytówka Twojej firmy. Sprzątamy poza godzinami pracy, dyskretnie, z poszanowaniem poufności.",
    benefits: [
      "Umowy stałe z gwarancją jakości",
      "Praca również w weekendy i nocą",
      "Wykwalifikowani, ubezpieczeni pracownicy",
      "Indywidualna wycena i SLA",
    ],
    scope: [
      "Mycie podłóg, wykładzin, biurek",
      "Dezynfekcja klawiatur i klamek",
      "Sprzątanie kuchni i sanitariatów",
      "Uzupełnianie środków czystości",
      "Wynoszenie śmieci, segregacja",
    ],
    priceFrom: "wycena indywidualna",
  },
  {
    slug: "sprzatanie-wspolnot-mieszkaniowych",
    title: "Sprzątanie wspólnot mieszkaniowych",
    short: "Stała obsługa wspólnot i części wspólnych budynków.",
    icon: "Users",
    intro:
      "Obsługujemy wspólnoty mieszkaniowe i spółdzielnie na podstawie długoterminowych umów. Czyste klatki, windy i tereny przyległe.",
    benefits: [
      "Stały opiekun klienta",
      "Comiesięczne raporty z prac",
      "Pełna dokumentacja i ubezpieczenie OC",
      "Konkurencyjne stawki przy stałej współpracy",
    ],
    scope: [
      "Sprzątanie klatek schodowych i wind",
      "Mycie okien na klatkach",
      "Sprzątanie piwnic i pomieszczeń technicznych",
      "Utrzymanie terenów zewnętrznych",
      "Odśnieżanie zimą (opcja)",
    ],
    priceFrom: "wycena indywidualna",
  },
  {
    slug: "sprzatanie-administracji",
    title: "Sprzątanie administracji",
    short: "Obsługa budynków administracyjnych i urzędów.",
    icon: "Landmark",
    intro:
      "Realizujemy zlecenia dla administracji publicznej i firm zarządzających nieruchomościami. Pracujemy zgodnie z procedurami i standardami klienta.",
    benefits: [
      "Wieloletnie doświadczenie w sektorze publicznym",
      "Pełna dokumentacja i faktury VAT",
      "Możliwość udziału w przetargach",
      "Elastyczność godzin pracy",
    ],
    scope: [
      "Sprzątanie sal obsługi interesantów",
      "Dezynfekcja powierzchni dotykowych",
      "Czyszczenie biur i archiwów",
      "Utrzymanie sanitariatów",
    ],
    priceFrom: "wycena indywidualna",
  },
  {
    slug: "sprzatanie-po-remoncie",
    title: "Sprzątanie po remoncie",
    short: "Usuwamy pył, kurz i resztki budowlane po remoncie.",
    icon: "Hammer",
    intro:
      "Sprzątanie po remoncie to nasza specjalność. Usuwamy drobny pył, resztki farby, kleju i silikonu. Po nas mieszkanie jest gotowe do zamieszkania.",
    benefits: [
      "Specjalistyczny sprzęt do drobnego pyłu",
      "Skuteczne środki do trudnych zabrudzeń",
      "Mycie okien, ram i parapetów w cenie",
      "Szybki termin realizacji",
    ],
    scope: [
      "Trzykrotne odkurzanie wszystkich powierzchni",
      "Mycie podłóg, glazury i terakoty",
      "Usuwanie resztek farby i kleju",
      "Mycie okien, drzwi i listew",
      "Czyszczenie zabudowy kuchennej i szaf",
    ],
    priceFrom: "od 12 zł/m²",
  },
  {
    slug: "sprzatanie-balkonow-po-golebiach",
    title: "Sprzątanie balkonów po gołębiach",
    short: "Skuteczne czyszczenie i dezynfekcja balkonów po gołębiach.",
    icon: "Bird",
    intro:
      "Odchody gołębi są nie tylko nieestetyczne, ale i groźne dla zdrowia. Czyścimy, dezynfekujemy i doradzamy w zabezpieczeniu balkonu.",
    benefits: [
      "Pełna dezynfekcja powierzchni",
      "Bezpieczne, profesjonalne środki",
      "Możliwość montażu siatek i kolców",
      "Praca w specjalnych kombinezonach",
    ],
    scope: [
      "Mechaniczne usunięcie odchodów",
      "Dezynfekcja balkonu i barierek",
      "Mycie ścian i sufitu balkonu",
      "Doradztwo w zabezpieczeniu",
    ],
    priceFrom: "od 250 zł",
  },
  {
    slug: "mycie-okien",
    title: "Mycie okien",
    short: "Profesjonalne mycie okien w mieszkaniach, biurach i lokalach.",
    icon: "Sparkles",
    intro:
      "Mycie okien wraz z ramami, parapetami i moskitierami. Bez smug, bez śladów, bez ryzyka uszkodzeń.",
    benefits: [
      "Mycie okien również na wysokości",
      "Profesjonalne ściągaczki i środki",
      "Mycie okien dachowych",
      "Możliwość cyklicznej obsługi",
    ],
    scope: [
      "Mycie szyb dwustronnie",
      "Czyszczenie ram i uszczelek",
      "Mycie parapetów wewnętrznych i zewnętrznych",
      "Czyszczenie moskitier i rolet",
    ],
    priceFrom: "od 15 zł/szt.",
  },
  {
    slug: "sprzatanie-terenow-zielonych",
    title: "Sprzątanie terenów zielonych",
    short: "Utrzymanie terenów zewnętrznych i pielęgnacja zieleni.",
    icon: "Leaf",
    intro:
      "Koszenie trawników, grabienie liści, przycinanie krzewów, sprzątanie śmieci. Dbamy o estetykę terenów wokół Twojego budynku.",
    benefits: [
      "Cykliczna pielęgnacja terenu",
      "Własny sprzęt ogrodniczy",
      "Wywóz odpadów zielonych",
      "Obsługa wspólnot, biurowców, deweloperów",
    ],
    scope: [
      "Koszenie i nawożenie trawników",
      "Grabienie liści",
      "Przycinanie krzewów i żywopłotów",
      "Sprzątanie śmieci i niedopałków",
    ],
    priceFrom: "wycena indywidualna",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  cover: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "jak-przygotowac-mieszkanie-do-sprzatania-po-remoncie",
    title: "Jak przygotować mieszkanie do sprzątania po remoncie?",
    excerpt:
      "Praktyczny przewodnik krok po kroku — co zrobić zanim wejdzie ekipa sprzątająca, żeby efekt był idealny.",
    date: "2026-05-12",
    readMinutes: 6,
    cover: "gallery-1",
    body: [
      {
        heading: "Wyprowadź resztki materiałów budowlanych",
        paragraphs: [
          "Zanim ekipa sprzątająca zacznie pracę, warto usunąć większe odpady budowlane — kawałki płyt, worki po kleju, resztki rur. Dzięki temu sprzątanie potrwa krócej, a koszt usługi nie wzrośnie o dodatkowy wywóz odpadów.",
          "Jeśli sam nie masz takiej możliwości, my również realizujemy wywóz odpadów poremontowych — wystarczy dodać tę opcję do wyceny.",
        ],
      },
      {
        heading: "Zabezpiecz delikatne powierzchnie",
        paragraphs: [
          "Nowe podłogi z drewna lub winylu, świeżo malowane ściany, blaty kuchenne z kamienia — wszystko to wymaga ostrożności. Poinformuj nas o tym z wyprzedzeniem, abyśmy dobrali odpowiednie środki i akcesoria.",
        ],
      },
      {
        heading: "Udostępnij prąd i wodę",
        paragraphs: [
          "Brzmi oczywiście, ale po remoncie często okazuje się, że hydraulik nie podłączył jeszcze zlewu, a elektryk nie skończył kuchni. Profesjonalne odkurzacze i myjki potrzebują działającej instalacji.",
        ],
      },
      {
        heading: "Zaplanuj kolejność prac",
        paragraphs: [
          "Sprzątanie po remoncie to ostatni etap. Wejście ekipy sprzątającej powinno nastąpić dopiero po zakończeniu wszystkich prac wykończeniowych — montażu mebli, listew i oświetlenia. W przeciwnym razie efekt szybko zostanie zatarty kolejnymi pracami.",
        ],
      },
    ],
  },
  {
    slug: "jak-usunac-zabrudzenia-po-golebiach-z-balkonu",
    title: "Jak usunąć zabrudzenia po gołębiach z balkonu?",
    excerpt:
      "Odchody gołębi to nie tylko brzydki widok — to też zagrożenie dla zdrowia. Sprawdź, jak bezpiecznie wyczyścić balkon.",
    date: "2026-04-22",
    readMinutes: 5,
    cover: "gallery-3",
    body: [
      {
        heading: "Dlaczego nie warto sprzątać tego samodzielnie",
        paragraphs: [
          "Odchody ptaków zawierają drobnoustroje i pasożyty, które mogą wywołać poważne choroby. Suche odchody łatwo unoszą się w powietrzu razem z kurzem, dlatego zwykła miotła to najgorsze, co można zrobić.",
        ],
      },
      {
        heading: "Profesjonalny proces czyszczenia",
        paragraphs: [
          "Pracujemy w kombinezonach i maskach. Najpierw zmiękczamy odchody specjalnym preparatem, następnie usuwamy je mechanicznie i dezynfekujemy całą powierzchnię balkonu — łącznie z barierkami i ścianami.",
          "Na koniec doradzamy, jak zabezpieczyć balkon przed kolejnym powrotem ptaków: siatki, kolce, sznurki — dobierzemy rozwiązanie do Twojego balkonu.",
        ],
      },
    ],
  },
  {
    slug: "ile-kosztuje-sprzatanie-mieszkania-w-krakowie",
    title: "Ile kosztuje sprzątanie mieszkania w Krakowie?",
    excerpt:
      "Realne ceny rynkowe w 2026 roku. Pokażemy, od czego zależy stawka i jak nie przepłacić.",
    date: "2026-03-18",
    readMinutes: 7,
    cover: "gallery-2",
    body: [
      {
        heading: "Od czego zależy cena",
        paragraphs: [
          "Najważniejsze czynniki to: metraż mieszkania, stopień zabrudzenia, zakres prac (sama podłoga czy także okna, AGD, zabudowa) oraz to, czy zlecenie jest jednorazowe czy cykliczne. Przy stałej współpracy stawki spadają nawet o 20–30%.",
        ],
      },
      {
        heading: "Orientacyjne stawki",
        paragraphs: [
          "Sprzątanie standardowego mieszkania 50 m² to w Krakowie wydatek rzędu 180–250 zł. Sprzątanie generalne lub po remoncie kosztuje od 12 zł/m² wzwyż. Mycie okien to dodatkowy koszt liczony od sztuki — od 15 zł.",
          "U nas wycena jest zawsze darmowa i wiążąca. Bez ukrytych kosztów i niespodzianek po zakończeniu pracy.",
        ],
      },
    ],
  },
  {
    slug: "jak-czesto-myc-okna",
    title: "Jak często myć okna?",
    excerpt:
      "Krótka odpowiedź: częściej niż myślisz. Dłuższa zależy od lokalizacji i ekspozycji.",
    date: "2026-02-09",
    readMinutes: 4,
    cover: "gallery-6",
    body: [
      {
        heading: "Mieszkania w centrum",
        paragraphs: [
          "Okna w centrum Krakowa wymagają mycia minimum 4 razy w roku — najlepiej co kwartał. Spaliny, kurz i pyłki bardzo szybko osiadają na szybach, a wraz z deszczem powstają trudne do usunięcia smugi.",
        ],
      },
      {
        heading: "Domy poza miastem",
        paragraphs: [
          "Tu wystarczy 2–3 razy w roku, ale warto uwzględnić pyłki wiosną i liście jesienią. Pamiętaj też o moskitierach — one łapią najwięcej brudu.",
        ],
      },
    ],
  },
  {
    slug: "jak-dbac-o-czesci-wspolne-we-wspolnotach-mieszkaniowych",
    title: "Jak dbać o części wspólne we wspólnotach mieszkaniowych?",
    excerpt:
      "Czyste klatki, zadbane windy i utrzymane tereny zielone — krótki przewodnik dla zarządców.",
    date: "2026-01-14",
    readMinutes: 8,
    cover: "gallery-4",
    body: [
      {
        heading: "Codzienność vs. prace okresowe",
        paragraphs: [
          "Sprzątanie wspólnot to dwa równoległe procesy: codzienna obsługa (zamiatanie, mycie podłóg, opróżnianie koszy) oraz prace okresowe (mycie okien, pranie wycieraczek, mycie elewacji parteru).",
        ],
      },
      {
        heading: "Standardy, które warto wpisać do umowy",
        paragraphs: [
          "Częstotliwość prac, lista zadań, raportowanie, ubezpieczenie OC, zastępstwa w czasie urlopów — to absolutne minimum. Bez tego trudno egzekwować jakość.",
          "Współpracujemy z dziesiątkami wspólnot w Krakowie. Każdą obsługujemy według indywidualnego planu i z dedykowanym opiekunem.",
        ],
      },
    ],
  },
];

export const FAQ = [
  {
    q: "Jak szybko możecie przyjechać posprzątać?",
    a: "Standardowy termin realizacji to 1–3 dni robocze. W pilnych przypadkach (np. wynajem, sprzedaż mieszkania) jesteśmy w stanie podjąć zlecenie nawet tego samego dnia.",
  },
  {
    q: "Czy używacie własnych środków czystości?",
    a: "Tak. Pracujemy na profesjonalnych, sprawdzonych środkach i sprzęcie. Mamy też wersję ekologiczną — bez agresywnej chemii — dedykowaną dla rodzin z dziećmi i alergików.",
  },
  {
    q: "Czy wycena jest płatna?",
    a: "Nie. Wycena jest zawsze bezpłatna i niezobowiązująca. Po krótkiej rozmowie telefonicznej lub wymianie zdjęć jesteśmy w stanie podać cenę z dokładnością do kilkudziesięciu złotych.",
  },
  {
    q: "Czy mogę być obecny podczas sprzątania?",
    a: "Oczywiście. Wielu klientów preferuje obecność podczas pierwszej wizyty. Później często zostawiają nam klucze — wszyscy pracownicy mają podpisaną klauzulę poufności.",
  },
  {
    q: "Jak płacę za usługę?",
    a: "Akceptujemy gotówkę, BLIK i przelew. Wystawiamy faktury VAT zarówno dla osób prywatnych, jak i firm.",
  },
  {
    q: "Czy obsługujecie sprzątanie poza Krakowem?",
    a: "Tak, działamy również w okolicach Krakowa — Wieliczka, Skawina, Zabierzów, Mogilany i innych. Dojazd poza Kraków rozliczany jest dodatkowo.",
  },
  {
    q: "Czy jesteście ubezpieczeni?",
    a: "Tak. Posiadamy pełne ubezpieczenie OC do 1 mln zł. W razie jakiejkolwiek szkody odpowiadamy z polisy, a klient nigdy nie zostaje sam z problemem.",
  },
  {
    q: "Czy realizujecie sprzątanie cykliczne?",
    a: "Tak. Sprzątanie cykliczne (co tydzień, co dwa tygodnie, co miesiąc) to nasza specjalność. Stała ekipa, stałe godziny, atrakcyjniejsze stawki.",
  },
  {
    q: "Ile osób przyjeżdża na zlecenie?",
    a: "Zależnie od wielkości obiektu — od 1 osoby przy małym mieszkaniu, do kilkuosobowych ekip przy biurach i sprzątaniu poremontowym dużych domów.",
  },
  {
    q: "Czy podpisujemy umowę?",
    a: "Przy stałej współpracy — tak, zawsze podpisujemy umowę określającą zakres, częstotliwość i koszty. Przy zleceniach jednorazowych wystarczy potwierdzenie wyceny.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Anna K.",
    role: "Mieszkanie, Stare Miasto",
    text: "Sprzątanie po remoncie zrobione perfekcyjnie. Zero pyłu, okna jak nowe, balkon doczyszczony do połysku. Zdecydowanie polecam.",
  },
  {
    name: "Marek W.",
    role: "Biuro, Podgórze",
    text: "Od pół roku obsługują nasze biuro 4 razy w tygodniu. Nigdy ani jednego problemu, raporty zawsze na czas, ekipa kulturalna i dyskretna.",
  },
  {
    name: "Wspólnota Lea 67",
    role: "Zarząd wspólnoty",
    text: "Po latach problemów z poprzednią firmą wreszcie mamy spokój. Klatki lśnią, mieszkańcy chwalą, faktury bez błędów. Profesjonalizm na najwyższym poziomie.",
  },
  {
    name: "Joanna P.",
    role: "Dom jednorodzinny, Bronowice",
    text: "Korzystam z usług LumiClean od dwóch lat. Sprzątanie generalne raz na kwartał i regularne mycie okien. Wszystko zawsze dopięte na ostatni guzik.",
  },
  {
    name: "Tomasz S.",
    role: "Apartament, Krowodrza",
    text: "Sprzątanie po wyprowadzce poprzedniego najemcy. Mieszkanie wyglądało tragicznie, po wizycie ekipy było gotowe do natychmiastowego wynajmu.",
  },
  {
    name: "Karolina R.",
    role: "Mieszkanie, Kazimierz",
    text: "Bardzo elastyczne podejście — udało się umówić sprzątanie w sobotę wieczorem. Cena uczciwa, jakość rewelacyjna.",
  },
];

export const STEPS = [
  {
    title: "Kontakt",
    text: "Dzwonisz lub piszesz wiadomość. Krótka rozmowa o tym, czego potrzebujesz.",
  },
  {
    title: "Darmowa wycena",
    text: "Na podstawie metrażu, zakresu prac i zdjęć podajemy cenę. Bez zobowiązań.",
  },
  {
    title: "Ustalenie terminu",
    text: "Dopasowujemy się do Twojego kalendarza. Pracujemy też w weekendy.",
  },
  {
    title: "Realizacja usługi",
    text: "Profesjonalna ekipa, własny sprzęt, ekologiczne środki. Czas dokładnie zaplanowany.",
  },
  {
    title: "Odbiór prac",
    text: "Razem sprawdzamy efekt. Gwarancja satysfakcji — w razie uwag wracamy bezpłatnie.",
  },
];

export type Location = {
  slug: string;
  name: string;
  description: string;
  intro: string;
  areas: string[];
  faq: { q: string; a: string }[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "krakow",
    name: "Kraków",
    description: "Profesjonalne usługi sprzątające na terenie całego Krakowa. Mieszkania, biura, wspólnoty, sprzątanie po remoncie, mycie okien.",
    intro: "LumiClean to krakowska firma z ponad 10-letnim doświadczeniem. Obsługujemy klientów indywidualnych, biura, wspólnoty mieszkaniowe i deweloperów na terenie całego miasta. Działamy szybko, dokładnie i z pełnym ubezpieczeniem OC.",
    areas: ["Stare Miasto", "Kazimierz", "Podgórze", "Krowodrza", "Bronowice", "Nowa Huta", "Dębniki", "Prądnik Biały", "Prądnik Czerwony", "Czyżyny", "Bieżanów-Prokocim", "Ruczaj", "Mistrzejowice", "Łagiewniki"],
    faq: [
      { q: "Ile kosztuje sprzątanie mieszkania w Krakowie?", a: "Sprzątanie standardowego mieszkania 50 m² w Krakowie kosztuje od 180 do 250 zł. Cena zależy od metrażu, zakresu prac i częstotliwości. Przy stałej współpracy stawki są niższe o 20–30%. Wycena jest zawsze bezpłatna." },
      { q: "Jaka firma sprzątająca w Krakowie jest najlepsza?", a: "LumiClean działa w Krakowie od ponad 10 lat i posiada ponad 1000 zrealizowanych zleceń z oceną 4.9/5. Oferujemy pełne ubezpieczenie OC, stałą ekipę, profesjonalny sprzęt i gwarancję satysfakcji." },
      { q: "Czy firma sprzątająca przyjeżdża ze swoim sprzętem?", a: "Tak. LumiClean zawsze przyjeżdża z własnym profesjonalnym sprzętem i sprawdzonymi środkami czystości. Na życzenie klienta stosujemy środki ekologiczne." },
    ],
  },
  {
    slug: "nowa-huta",
    name: "Nowa Huta",
    description: "Firma sprzątająca w Nowej Hucie — sprzątanie mieszkań, biur, wspólnot i terenów zielonych. Dojazd gratis.",
    intro: "Nowa Huta to jedna z najczęściej obsługiwanych przez nas dzielnic Krakowa. Sprzątamy zarówno mieszkania w blokach na os. Centrum, Szkolnym czy Złotym Wieku, jak i domy jednorodzinne w okolicach Pleszowa i Branicach. Dojeżdżamy szybko — w większości przypadków w ciągu 1–2 dni roboczych.",
    areas: ["os. Centrum", "os. Szkolne", "os. Złotego Wieku", "os. Stalowe", "Pleszów", "Branice", "Mogiła", "Mistrzejowice", "Bieńczyce"],
    faq: [
      { q: "Czy firma sprzątająca dojeżdża do Nowej Huty?", a: "Tak, LumiClean regularnie obsługuje całą Nową Hutę — od os. Centrum po Pleszów. Dojazd jest wliczony w cenę usługi." },
      { q: "Ile kosztuje sprzątanie mieszkania w Nowej Hucie?", a: "Ceny zaczynają się od 150 zł za mieszkanie do 40 m². Sprzątanie bloku na Nowej Hucie jest wyceniane indywidualnie — zależy od metrażu i zakresu prac." },
    ],
  },
  {
    slug: "podgorze",
    name: "Podgórze",
    description: "Sprzątanie mieszkań, domów i biur w Podgórzu (Kraków). Profesjonalna firma sprzątająca z dojazdem.",
    intro: "Podgórze to dynamicznie rozwijająca się dzielnica Krakowa, w której obsługujemy zarówno nowoczesne apartamentowce nad Wisłą, jak i starsze kamienice. Sprzątamy mieszkania, biura w Zabłociu, wspólnoty mieszkaniowe i lokale usługowe.",
    areas: ["Zabłocie", "Stare Podgórze", "Płaszów", "Rybitwy", "Przewóz", "Wola Duchacka", "Piaski Wielkie", "Kurdwanów"],
    faq: [
      { q: "Czy sprzątacie biura w Zabłociu?", a: "Tak, obsługujemy biura i coworkingi w Zabłociu oraz całym Podgórzu. Oferujemy sprzątanie poza godzinami pracy, w weekendy, z możliwością stałej umowy." },
    ],
  },
  {
    slug: "bronowice",
    name: "Bronowice",
    description: "Sprzątanie mieszkań i domów w Bronowicach (Kraków). Regularne i jednorazowe usługi sprzątające.",
    intro: "Bronowice to spokojna, zielona dzielnica Krakowa z dużą liczbą domów jednorodzinnych i nowych osiedli. Obsługujemy tu sprzątanie domów, mieszkań w nowych inwestycjach oraz wspólnot mieszkaniowych. Docieramy również do Bronowic Małych i Wielkich.",
    areas: ["Bronowice Małe", "Bronowice Wielkie", "os. Widok", "os. Zielone"],
    faq: [
      { q: "Czy sprzątacie domy jednorodzinne w Bronowicach?", a: "Tak, sprzątanie domów w Bronowicach to jedno z naszych najczęstszych zleceń. Cena zależy od metrażu — wycena jest zawsze bezpłatna." },
    ],
  },
  {
    slug: "krowodrza",
    name: "Krowodrza",
    description: "Profesjonalne sprzątanie w Krowodrzy — mieszkania, biura, wspólnoty. Firma sprzątająca z Krakowa.",
    intro: "Krowodrza to jedna z centralnych dzielnic Krakowa, w której obsługujemy klientów od lat. Sprzątamy mieszkania w kamienicach, nowoczesne apartamenty, biura przy al. Krasińskiego oraz wspólnoty mieszkaniowe. Znamy specyfikę tej dzielnicy — wąskie klatki, wysokie kondygnacje, różnorodna zabudowa.",
    areas: ["Łobzów", "Nowa Wieś", "Cichy Kącik", "al. Krasińskiego", "os. Krowodrza Górka"],
    faq: [
      { q: "Czy macie doświadczenie ze sprzątaniem kamienic w Krowodrzy?", a: "Tak, obsługujemy wiele wspólnot i mieszkań w zabytkowych kamienicach Krowodrzy. Wiemy, jak dbać o drewniane klatki schodowe i delikatne powierzchnie." },
    ],
  },
  {
    slug: "czyzyny",
    name: "Czyżyny",
    description: "Firma sprzątająca w Czyżynach — sprzątanie mieszkań w nowych osiedlach, biur i wspólnot.",
    intro: "Czyżyny to dzielnica nowych inwestycji deweloperskich i rozwijających się osiedli. Obsługujemy sprzątanie mieszkań w nowych blokach, biur w centrum logistycznym oraz wspólnot. Dojeżdżamy szybko z centrum Krakowa.",
    areas: ["os. Dywizjonu 303", "os. 2 Pułku Lotniczego", "Avia", "Centrum Czyżyn"],
    faq: [
      { q: "Czy sprzątacie nowe mieszkania po odbiorze od dewelopera w Czyżynach?", a: "Tak, sprzątanie poremontowe i sprzątanie po odbiorze od dewelopera to nasza specjalność. Usuwamy pył budowlany, resztki farby i kleju. Mieszkanie jest gotowe do zamieszkania." },
    ],
  },
  {
    slug: "debniki",
    name: "Dębniki",
    description: "Sprzątanie mieszkań i domów w Dębnikach (Kraków). Ekipa z doświadczeniem, dojazd gratis.",
    intro: "Dębniki to jedna z najchętniej wybieranych dzielnic Krakowa. Obsługujemy mieszkania, domy, wspólnoty oraz biura w okolicach Ruczaju, Kostrza i Skotnik. Dojazd wliczony w cenę, wycena bezpłatna.",
    areas: ["Ruczaj", "Kobierzyn", "Kostrzec", "Skotniki", "Kapelanka", "Ludwinów"],
    faq: [
      { q: "Czy dojeżdżacie na Ruczaj?", a: "Tak, Ruczaj i okolice (Kobierzyn, Skotniki) to tereny, które obsługujemy regularnie. Dojazd jest wliczony w cenę usługi." },
    ],
  },
  {
    slug: "pradnik-bialy",
    name: "Prądnik Biały",
    description: "Sprzątanie mieszkań i wspólnot w Prądniku Białym. Profesjonalna firma sprzątająca — Kraków.",
    intro: "Prądnik Biały to duża dzielnica mieszkaniowa Krakowa z gęstą zabudową blokową i nowymi osiedlami. Obsługujemy tu sprzątanie mieszkań, klatek schodowych, wspólnot oraz terenów zielonych wokół budynków.",
    areas: ["os. Prądnik Biały", "Azory", "Tonie", "Witkowice", "Górka Narodowa"],
    faq: [
      { q: "Czy firma sprzątająca obsługuje wspólnoty na Prądniku Białym?", a: "Tak, współpracujemy z wieloma wspólnotami na Prądniku Białym. Oferujemy stałe umowy z dedykowanym opiekunem, raportowaniem i ubezpieczeniem OC." },
    ],
  },
  {
    slug: "pradnik-czerwony",
    name: "Prądnik Czerwony",
    description: "Firma sprzątająca na Prądniku Czerwonym — mieszkania, biura, wspólnoty mieszkaniowe w Krakowie.",
    intro: "Prądnik Czerwony to rozległa dzielnica północnego Krakowa, znana z dużych osiedli — Olsza, Ugorek, Polsadu. Sprzątamy tu mieszkania, biura, wspólnoty i tereny zielone. Ekipa dojeżdża szybko, a wycena jest zawsze bezpłatna.",
    areas: ["Olsza", "Ugorek", "os. Polsad", "Rakowice", "Prądniczanka"],
    faq: [
      { q: "Jak zamówić sprzątanie mieszkania na Prądniku Czerwonym?", a: "Wystarczy zadzwonić pod numer +48 600 000 000 lub wypełnić formularz na stronie. Podajemy wycenę w ciągu kilku godzin i ustalamy termin." },
    ],
  },
  {
    slug: "biezanow-prokocim",
    name: "Bieżanów-Prokocim",
    description: "Usługi sprzątające w Bieżanowie-Prokocimie — sprzątanie mieszkań, wspólnot i terenów zielonych.",
    intro: "Bieżanów-Prokocim to jedna z największych dzielnic mieszkaniowych Krakowa. Obsługujemy tu sprzątanie mieszkań w blokach, domów jednorodzinnych w Bieżanowie oraz wspólnot mieszkaniowych na Prokocimiu. Regularni klienci korzystają z atrakcyjniejszych stawek.",
    areas: ["Prokocim", "Bieżanów", "os. Na Kozłówce", "os. Bieżanowskie", "Rżąka"],
    faq: [
      { q: "Ile kosztuje sprzątanie wspólnoty na Prokocimie?", a: "Koszt obsługi wspólnoty zależy od powierzchni części wspólnych, częstotliwości sprzątania i zakresu prac. Wycena jest bezpłatna — skontaktuj się z nami, a przygotujemy indywidualną ofertę." },
    ],
  },
];

export const BLOG_POSTS_EXTENDED: BlogPost[] = [
  {
    slug: "sprzatanie-biur-krakow-co-warto-wiedziec",
    title: "Sprzątanie biur w Krakowie — co warto wiedzieć przed wyborem firmy?",
    excerpt: "Na co zwrócić uwagę wybierając firmę sprzątającą do biura? Kluczowe kryteria, pytania do zadania i red flags.",
    date: "2025-12-15",
    readMinutes: 6,
    cover: "gallery-2",
    body: [
      { heading: "Dlaczego czyste biuro to inwestycja, nie koszt", paragraphs: ["Badania pokazują, że pracownicy w czystym biurze są nawet o 15% bardziej produktywni. Czyste biuro to także wizytówka firmy — klienci i kontrahenci oceniają profesjonalizm już od wejścia."] },
      { heading: "Na co zwrócić uwagę?", paragraphs: ["Sprawdź ubezpieczenie OC, poproś o referencje, ustal zakres prac na piśmie. Dobra firma sprzątająca powinna oferować SLA, raportowanie i możliwość pracy poza godzinami biurowymi."] },
    ],
  },
  {
    slug: "sprzatanie-wspolnot-mieszkaniowych-krakow",
    title: "Sprzątanie wspólnot mieszkaniowych w Krakowie — kompletny poradnik",
    excerpt: "Jak wybrać firmę sprzątającą dla wspólnoty? Jakie standardy powinny obowiązywać? Odpowiadamy.",
    date: "2025-11-20",
    readMinutes: 8,
    cover: "gallery-4",
    body: [
      { heading: "Zakres obowiązków firmy sprzątającej", paragraphs: ["Firma sprzątająca dla wspólnoty powinna obsługiwać: klatki schodowe, windy, piwnice, pomieszczenia techniczne, tereny zielone, odśnieżanie zimą."] },
      { heading: "Jak kontrolować jakość?", paragraphs: ["Comiesięczne raporty z prac, dedykowany opiekun klienta, możliwość zgłaszania uwag — to absolutne minimum."] },
    ],
  },
  {
    slug: "mycie-okien-krakow-cennik",
    title: "Mycie okien w Krakowie — cennik 2026 i porady",
    excerpt: "Ile kosztuje profesjonalne mycie okien? Jakie czynniki wpływają na cenę? Aktualny cennik.",
    date: "2025-10-28",
    readMinutes: 5,
    cover: "gallery-6",
    body: [
      { heading: "Cennik mycia okien w Krakowie", paragraphs: ["Profesjonalne mycie okien w Krakowie kosztuje od 15 zł/szt. Cena zależy od: wielkości okna, stopnia zabrudzenia, dostępności (piętra), konieczności mycia rolet czy moskitier."] },
      { heading: "Jak często myć okna?", paragraphs: ["Mieszkania w centrum — co kwartał. Domy poza miastem — 2–3 razy w roku. Biura — co miesiąc lub co dwa miesiące."] },
    ],
  },
  {
    slug: "firma-sprzatajaca-krakow-jak-wybrac",
    title: "Jak wybrać firmę sprzątającą w Krakowie? 7 kluczowych kryteriów",
    excerpt: "Nie daj się nabrać na najniższą cenę. Sprawdź, co naprawdę liczy się przy wyborze firmy sprzątającej.",
    date: "2025-10-05",
    readMinutes: 7,
    cover: "gallery-1",
    body: [
      { heading: "1. Ubezpieczenie OC", paragraphs: ["Firma bez ubezpieczenia to ryzyko. W razie szkody nie masz żadnej ochrony. LumiClean posiada OC do 1 mln zł."] },
      { heading: "2. Stała ekipa", paragraphs: ["Ciągła rotacja pracowników oznacza brak znajomości Twojego mieszkania i konieczność ciągłego nadzoru. U nas ekipa jest stała."] },
      { heading: "3. Własny sprzęt i środki", paragraphs: ["Profesjonalna firma przyjeżdża z własnym sprzętem. Nie powinieneś kupować mopów ani płynów."] },
    ],
  },
  {
    slug: "sprzatanie-po-budowie-krakow",
    title: "Sprzątanie po budowie w Krakowie — na co uważać?",
    excerpt: "Sprzątanie po budowie różni się od zwykłego sprzątania. Dowiedz się, dlaczego warto zlecić to profesjonalistom.",
    date: "2025-09-12",
    readMinutes: 6,
    cover: "gallery-1",
    body: [
      { heading: "Czym różni się sprzątanie pobudowlane?", paragraphs: ["Pył budowlany jest drobniejszy niż zwykły kurz — wnika w każdą szczelinę, fugi, zawiasy. Zwykły odkurzacz nie daje sobie z nim rady. Potrzebny jest sprzęt klasy przemysłowej i minimum 2–3 przejścia."] },
      { heading: "Cena sprzątania po budowie", paragraphs: ["W Krakowie cena sprzątania po budowie zaczyna się od 12 zł/m². Przy dużych powierzchniach stawka jest negocjowana indywidualnie."] },
    ],
  },
  {
    slug: "sprzatanie-mieszkania-przed-sprzedaza",
    title: "Sprzątanie mieszkania przed sprzedażą — jak podnieść wartość nieruchomości?",
    excerpt: "Home staging zaczyna się od czystości. Profesjonalne sprzątanie przed sprzedażą może podnieść cenę o kilka procent.",
    date: "2025-08-20",
    readMinutes: 5,
    cover: "gallery-1",
    body: [
      { heading: "Pierwsze wrażenie decyduje", paragraphs: ["Kupujący podejmują decyzję w ciągu pierwszych 30 sekund od wejścia do mieszkania. Czyste okna, lśniąca łazienka i świeży zapach robią ogromną różnicę."] },
    ],
  },
  {
    slug: "sprzatanie-airbnb-krakow",
    title: "Sprzątanie Airbnb w Krakowie — jak zapewnić 5 gwiazdek?",
    excerpt: "Zarządzasz apartamentem na wynajem krótkoterminowy? Sprzątanie to klucz do dobrych opinii.",
    date: "2025-08-01",
    readMinutes: 5,
    cover: "gallery-2",
    body: [
      { heading: "Czystość = opinie", paragraphs: ["Na Airbnb czystość to osobna kategoria w ocenach. Jeden brudny ręcznik lub nieczysty prysznic może kosztować Cię gwiazdkę."] },
    ],
  },
  {
    slug: "ekologiczne-sprzatanie-krakow",
    title: "Ekologiczne sprzątanie w Krakowie — czy warto?",
    excerpt: "Środki eko są droższe, ale bezpieczne dla dzieci, zwierząt i alergików. Kiedy warto je wybrać?",
    date: "2025-07-15",
    readMinutes: 4,
    cover: "gallery-3",
    body: [
      { heading: "Dla kogo sprzątanie ekologiczne?", paragraphs: ["Szczególnie polecane dla rodzin z małymi dziećmi, alergików i właścicieli zwierząt. Środki ekologiczne nie drażnią, nie zostawiają oparów, a ich skuteczność dorównuje klasycznym preparatom."] },
    ],
  },
  {
    slug: "sprzatanie-po-przeprowadzce",
    title: "Sprzątanie po przeprowadzce — oddaj mieszkanie w idealnym stanie",
    excerpt: "Wyprowadzasz się? Sprzątanie zdawcze pozwoli odzyskać kaucję i uniknąć problemów z wynajmującym.",
    date: "2025-07-01",
    readMinutes: 5,
    cover: "gallery-1",
    body: [
      { heading: "Co wchodzi w sprzątanie zdawcze?", paragraphs: ["Mycie wszystkich pomieszczeń, okien, łazienki, kuchni, szaf wewnątrz, piekarnika, lodówki, prania wykładzin — wszystko, żeby mieszkanie wyglądało jak nowe."] },
    ],
  },
  {
    slug: "sprzatanie-klatek-schodowych-krakow",
    title: "Sprzątanie klatek schodowych w Krakowie — obowiązek zarządcy",
    excerpt: "Klatka schodowa to wizytówka budynku. Jak zapewnić jej czystość i jakie standardy powinny obowiązywać?",
    date: "2025-06-15",
    readMinutes: 6,
    cover: "gallery-4",
    body: [
      { heading: "Jak często sprzątać klatkę schodową?", paragraphs: ["Minimum 2 razy w tygodniu — zamiatanie i mycie podłóg. Raz w miesiącu — mycie okien, barierek, drzwi wejściowych. Raz na kwartał — pranie wycieraczek i czyszczenie lamp."] },
    ],
  },
  {
    slug: "jak-zabezpieczyc-balkon-przed-golebiami",
    title: "Jak zabezpieczyć balkon przed gołębiami? Metody i koszty",
    excerpt: "Siatki, kolce, sznurki — co naprawdę działa? Porównanie metod i cen zabezpieczeń.",
    date: "2025-06-01",
    readMinutes: 6,
    cover: "gallery-3",
    body: [
      { heading: "Siatka — najskuteczniejsze rozwiązanie", paragraphs: ["Siatka na balkon to inwestycja jednorazowa (od 200 zł), która eliminuje problem gołębi na lata. Kolce działają dobrze na parapetach, ale nie chronią całej powierzchni balkonu."] },
    ],
  },
  {
    slug: "sprzatanie-magazynow-krakow",
    title: "Sprzątanie magazynów i hal w Krakowie",
    excerpt: "Duże powierzchnie, trudne zabrudzenia — jak wygląda profesjonalne sprzątanie hal magazynowych?",
    date: "2025-05-15",
    readMinutes: 5,
    cover: "gallery-2",
    body: [
      { heading: "Specyfika sprzątania hal", paragraphs: ["Hale wymagają sprzętu przemysłowego: szorowarek, myjek ciśnieniowych, odkurzaczy do pyłu betonowego. Standardowy sprzęt tu nie wystarczy."] },
    ],
  },
  {
    slug: "pranie-tapicerki-meblowej-krakow",
    title: "Pranie tapicerki meblowej w Krakowie — cennik i porady",
    excerpt: "Brudna kanapa? Plamy na fotelach? Profesjonalne pranie tapicerki przywraca meble do stanu nowych.",
    date: "2025-05-01",
    readMinutes: 4,
    cover: "gallery-1",
    body: [
      { heading: "Kiedy warto prać tapicerkę?", paragraphs: ["Minimum raz w roku, a przy alergikach i dzieciach — co pół roku. W tapicerce gromadzą się roztocza, bakterie i alergeny, których nie usunie zwykłe odkurzanie."] },
    ],
  },
  {
    slug: "sprzatanie-po-imprezie-krakow",
    title: "Sprzątanie po imprezie w Krakowie — ekspresowa pomoc",
    excerpt: "Po domówce, weselu lub evencie firmowym — sprzątamy szybko i dokładnie, nawet w weekendy.",
    date: "2025-04-15",
    readMinutes: 4,
    cover: "gallery-1",
    body: [
      { heading: "Szybkie terminy", paragraphs: ["Sprzątanie po imprezie realizujemy nawet tego samego dnia lub następnego ranka. Usuwamy plamy, mycie naczyń, wynoszenie śmieci — wszystko w jednym zleceniu."] },
    ],
  },
  {
    slug: "dezynfekcja-mieszkania-krakow",
    title: "Dezynfekcja mieszkania w Krakowie — kiedy jest potrzebna?",
    excerpt: "Po chorobie, po gołębiach, po zalaniu — kiedy zwykłe sprzątanie nie wystarczy i trzeba sięgnąć po dezynfekcję.",
    date: "2025-04-01",
    readMinutes: 5,
    cover: "gallery-3",
    body: [
      { heading: "Kiedy dezynfekcja jest konieczna?", paragraphs: ["Po chorobach zakaźnych, po odchodach gołębi lub gryzoni, po zalaniu (grzyb, pleśń), po długim pustostanie. Profesjonalna dezynfekcja eliminuje bakterie i zagrożenia zdrowotne."] },
    ],
  },
  {
    slug: "sprzatanie-gabinetu-lekarskiego-krakow",
    title: "Sprzątanie gabinetów lekarskich w Krakowie",
    excerpt: "Gabinety medyczne mają specyficzne wymagania dotyczące czystości i dezynfekcji. Spełniamy je wszystkie.",
    date: "2025-03-15",
    readMinutes: 5,
    cover: "gallery-2",
    body: [
      { heading: "Standardy medyczne", paragraphs: ["Sprzątanie gabinetów lekarskich wymaga stosowania środków o działaniu bakteriobójczym, wirusobójczym i grzybobójczym. Pracujemy zgodnie z wytycznymi Sanepidu."] },
    ],
  },
  {
    slug: "sprzatanie-po-zalaniu-krakow",
    title: "Sprzątanie po zalaniu mieszkania w Krakowie",
    excerpt: "Zalanie to sytuacja kryzysowa. Szybka reakcja zmniejsza straty — pomagamy od osuszenia po dezynfekcję.",
    date: "2025-03-01",
    readMinutes: 5,
    cover: "gallery-1",
    body: [
      { heading: "Co robimy po zalaniu?", paragraphs: ["Usuwamy wodę, osuszamy pomieszczenia, dezynfekujemy powierzchnie, usuwamy zabrudzenia i osady. Działamy szybko — czas ma kluczowe znaczenie."] },
    ],
  },
  {
    slug: "sprzatanie-restauracji-krakow",
    title: "Sprzątanie restauracji i lokali gastronomicznych w Krakowie",
    excerpt: "Gastronomia wymaga najwyższych standardów czystości. Sprzątamy kuchnie, sale, toalety — zgodnie z HACCP.",
    date: "2025-02-15",
    readMinutes: 6,
    cover: "gallery-2",
    body: [
      { heading: "Wymogi HACCP", paragraphs: ["Lokale gastronomiczne muszą spełniać rygorystyczne normy czystości. Stosujemy środki dopuszczone do kontaktu z żywnością i prowadzimy dokumentację prac."] },
    ],
  },
  {
    slug: "sprzatanie-przedszkoli-krakow",
    title: "Sprzątanie przedszkoli i żłobków w Krakowie",
    excerpt: "Dzieci wymagają szczególnie czystego otoczenia. Sprzątamy przedszkola środkami bezpiecznymi dla maluchów.",
    date: "2025-01-15",
    readMinutes: 5,
    cover: "gallery-4",
    body: [
      { heading: "Bezpieczeństwo na pierwszym miejscu", paragraphs: ["W przedszkolach stosujemy wyłącznie środki atestowane, bezpieczne dla dzieci. Dezynfekujemy zabawki, stoliki, podłogi i sanitariaty."] },
    ],
  },
  {
    slug: "sprzatanie-hotel-krakow",
    title: "Sprzątanie hoteli i pensjonatów w Krakowie",
    excerpt: "Czystość w hotelu decyduje o opinii gości. Obsługujemy hotele, apartamenty i pensjonaty.",
    date: "2025-01-01",
    readMinutes: 5,
    cover: "gallery-2",
    body: [
      { heading: "Sprzątanie pokoi hotelowych", paragraphs: ["Oferujemy codzienne sprzątanie pokoi, wymianę pościeli, uzupełnianie kosmetyków i obsługę części wspólnych. Pracujemy według standardów branży hotelarskiej."] },
    ],
  },
  {
    slug: "odsniezanie-krakow",
    title: "Odśnieżanie chodników i parkingów w Krakowie",
    excerpt: "Zima w Krakowie potrafi zaskoczyć. Oferujemy stałe umowy na odśnieżanie dla wspólnot i firm.",
    date: "2024-12-15",
    readMinutes: 4,
    cover: "gallery-5",
    body: [
      { heading: "Odśnieżanie w umowie stałej", paragraphs: ["Wspólnoty i firmy mogą wykupić sezonową umowę na odśnieżanie. Gwarantujemy interwencję w ciągu 2 godzin od opadu. Posypujemy piaskiem i solą."] },
    ],
  },
  {
    slug: "generalne-sprzatanie-domu-krakow",
    title: "Generalne sprzątanie domu w Krakowie — co obejmuje?",
    excerpt: "Gruntowne czyszczenie od piwnicy po strych. Kiedy warto i ile to kosztuje?",
    date: "2024-12-01",
    readMinutes: 6,
    cover: "gallery-1",
    body: [
      { heading: "Zakres sprzątania generalnego", paragraphs: ["Sprzątanie generalne obejmuje: mycie okien, czyszczenie kuchni (piekarnik, lodówka, zabudowa), łazienek, mycie podłóg, odkurzanie mebli tapicerowanych, pranie dywanów. Czas pracy: od 4 do 8 godzin."] },
    ],
  },
  {
    slug: "sprzatanie-kosciola-krakow",
    title: "Sprzątanie kościołów i obiektów sakralnych w Krakowie",
    excerpt: "Obiekty sakralne wymagają delikatności i doświadczenia. Sprzątamy kościoły, kaplice i sale parafialne.",
    date: "2024-11-15",
    readMinutes: 5,
    cover: "gallery-4",
    body: [
      { heading: "Specyfika obiektów sakralnych", paragraphs: ["Sprzątanie kościołów wymaga delikatności — drewniane ławki, witraże, posadzki z kamienia. Stosujemy odpowiednie środki i techniki, aby nie uszkodzić cennych elementów wyposażenia."] },
    ],
  },
  {
    slug: "sprzatanie-szkol-krakow",
    title: "Sprzątanie szkół i placówek oświatowych w Krakowie",
    excerpt: "Sale lekcyjne, korytarze, toalety — jak zapewnić czystość w szkole?",
    date: "2024-11-01",
    readMinutes: 5,
    cover: "gallery-4",
    body: [
      { heading: "Codzienna obsługa placówek oświatowych", paragraphs: ["Oferujemy sprzątanie sal lekcyjnych, korytarzy, sanitariatów, stołówek i sal gimnastycznych. Pracujemy po lekcjach, wieczorami lub wcześnie rano."] },
    ],
  },
];

export const GEO_FAQ = [
  { q: "Czym zajmuje się firma LumiClean?", a: "LumiClean to profesjonalna firma sprzątająca z Krakowa, działająca od ponad 10 lat. Świadczymy usługi sprzątania mieszkań, domów, biur, wspólnot mieszkaniowych, administracji, a także sprzątanie po remoncie i budowie, mycie okien, sprzątanie balkonów po gołębiach oraz utrzymanie terenów zielonych. Działamy na terenie Krakowa i okolic." },
  { q: "Gdzie LumiClean świadczy usługi?", a: "Głównym obszarem naszego działania jest Kraków — obsługujemy wszystkie dzielnice: Stare Miasto, Podgórze, Krowodrzę, Bronowice, Nową Hutę, Dębniki, Czyżyny, Prądnik Biały, Prądnik Czerwony, Bieżanów-Prokocim i inne. Dojeżdżamy także do miejscowości wokół Krakowa: Wieliczka, Skawina, Zabierzów, Mogilany." },
  { q: "Jakie problemy rozwiązuje firma sprzątająca?", a: "Pomagamy ludziom, którzy nie mają czasu na sprzątanie, zarządcom wspólnot potrzebującym stałej obsługi, firmom szukającym czystych biur, właścicielom mieszkań po remoncie, osobom z problemem gołębi na balkonie oraz deweloperom potrzebującym sprzątania po budowie." },
  { q: "Dlaczego warto wybrać LumiClean?", a: "Ponad 10 lat doświadczenia, 1000+ zrealizowanych zleceń, ocena 4.9/5 od klientów, pełne ubezpieczenie OC do 1 mln zł, stała i sprawdzona ekipa, profesjonalny sprzęt, bezpłatna wycena w 15 minut, gwarancja satysfakcji — jeśli efekt nie spełnia oczekiwań, wracamy bezpłatnie." },
  { q: "Ile kosztuje sprzątanie w Krakowie?", a: "Sprzątanie mieszkania 50 m² kosztuje 180–250 zł. Sprzątanie po remoncie — od 12 zł/m². Mycie okien — od 15 zł/szt. Wspólnoty i biura — wycena indywidualna. Przy stałej współpracy stawki są niższe o 20–30%. Wycena jest zawsze bezpłatna i wiążąca." },
  { q: "Jak zamówić sprzątanie w Krakowie?", a: "Zadzwoń pod numer +48 600 000 000, napisz e-mail na kontakt@lumiclean.pl lub wypełnij formularz na stronie lumiclean.pl. Wycenę podajemy w ciągu 15 minut, a termin realizacji to zwykle 1–3 dni robocze." },
];

export const ALL_BLOG_POSTS: BlogPost[] = [...BLOG_POSTS, ...BLOG_POSTS_EXTENDED];

const BLOG_COVER_POOL: string[] = [
  mieszkanieAfter,
  biuroLounge,
  wspolnotaBeforeCorridor,
  oknaBuilding,
  svcRemontBefore,
  svcBalkonyBefore,
  svcMieszkaniaHero,
  domExterior2,
  klatkaAfterBw,
  mieszkanieBeforeClutter,
  klatkaBeforeWorn,
  svcBalkonyAfter,
  buildingExteriorModern,
  svcOknaHero,
  svcDomowHero,
  svcRemontAfter,
  terenyLawn,
  svcTerenyHero,
  biuroGlassRoom,
  wspolnotaAfterLobby,
  svcBiurHero,
  svcWspolnotyHero,
  oknaIndoor,
  mieszkanieCleanLiving,
];

export function getBlogCover(slug: string): string {
  const index = ALL_BLOG_POSTS.findIndex((p) => p.slug === slug);
  const safeIndex = index === -1 ? 0 : index;
  return BLOG_COVER_POOL[safeIndex % BLOG_COVER_POOL.length];
}

export const SERVICE_HERO_IMAGES: Record<string, string> = {
  "sprzatanie-mieszkan": svcMieszkaniaHero,
  "sprzatanie-domow": svcDomowHero,
  "sprzatanie-biur": svcBiurHero,
  "sprzatanie-wspolnot-mieszkaniowych": svcWspolnotyHero,
  "sprzatanie-administracji": biuroGlassRoom,
  "sprzatanie-po-remoncie": svcRemontBefore,
  "sprzatanie-balkonow-po-golebiach": svcBalkonyBefore,
  "mycie-okien": svcOknaHero,
  "sprzatanie-terenow-zielonych": svcTerenyHero,
};

export type BeforeAfter = {
  slug: string;
  serviceSlug: string;
  title: string;
  description: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

export const REALIZACJE: BeforeAfter[] = [
  {
    slug: "mieszkanie-krowodrza",
    serviceSlug: "sprzatanie-mieszkan",
    category: "Mieszkania",
    title: "Generalne sprzątanie mieszkania — Krowodrza",
    description:
      "Mieszkanie 62 m² po dwóch latach bez generalnego sprzątania. Zabałaganione szafy, zaniedbane powierzchnie, zalegający kurz. Po trzygodzinnej pracy dwuosobowej ekipy: lśniące podłogi, wyczyszczone fronty mebli, uporządkowana przestrzeń gotowa do zamieszkania.",
    beforeLabel: "Przed sprzątaniem",
    afterLabel: "Po sprzątaniu",
    before: { src: mieszkanieBeforeClutter, alt: "Zabałaganione, zaniedbane wnętrze mieszkania przed generalnym sprzątaniem" },
    after: { src: mieszkanieCleanLiving, alt: "Czyste, uporządkowane mieszkanie po profesjonalnym sprzątaniu generalnym" },
  },
  {
    slug: "remont-podgorze",
    serviceSlug: "sprzatanie-po-remoncie",
    category: "Po remoncie",
    title: "Sprzątanie po remoncie — apartament na Podgórzu",
    description:
      "Mieszkanie po całkowitym remoncie — pył budowlany na każdej powierzchni, resztki farby i taśmy malarskiej, narzędzia ekipy budowlanej. Trzykrotne odkurzanie, mycie wszystkich powierzchni i okien pozwoliło oddać mieszkanie gotowe do odbioru tego samego dnia.",
    beforeLabel: "W trakcie remontu",
    afterLabel: "Po sprzątaniu poremontowym",
    before: { src: svcRemontBefore, alt: "Pomieszczenie w trakcie remontu z narzędziami i pyłem budowlanym przed sprzątaniem" },
    after: { src: svcRemontAfter, alt: "Czyste, jasne wnętrze gotowe do zamieszkania po sprzątaniu poremontowym" },
  },
  {
    slug: "okna-stare-miasto",
    serviceSlug: "mycie-okien",
    category: "Mycie okien",
    title: "Mycie okien — kamienica przy Rynku",
    description:
      "Duże, wysokie okna w zabytkowej kamienicy — zaniedbane od kilku sezonów, ze smugami i osadem. Profesjonalne mycie dwustronne z czyszczeniem ram i parapetów dało efekt pełnej przejrzystości szyb i więcej naturalnego światła we wnętrzu.",
    beforeLabel: "Ekipa w trakcie pracy",
    afterLabel: "Efekt końcowy",
    before: { src: svcOknaHero, alt: "Pracownik myjący duże okno na wysokości przy użyciu profesjonalnego sprzętu" },
    after: { src: oknaBuilding, alt: "Lśniąca, czysta fasada szklana po profesjonalnym myciu okien" },
  },
  {
    slug: "balkon-bronowice",
    serviceSlug: "sprzatanie-balkonow-po-golebiach",
    category: "Balkony po gołębiach",
    title: "Czyszczenie balkonu po gołębiach — Bronowice",
    description:
      "Balkon nawiedzany przez gołębie od dłuższego czasu — zabrudzona posadzka, barierki i ściana. Mechaniczne usunięcie zabrudzeń, pełna dezynfekcja powierzchni oraz montaż siatki zabezpieczającej przed powrotem ptaków.",
    beforeLabel: "Przed czyszczeniem",
    afterLabel: "Po dezynfekcji",
    before: { src: svcBalkonyBefore, alt: "Zaniedbany, zabrudzony balkon przed profesjonalnym czyszczeniem i dezynfekcją" },
    after: { src: svcBalkonyAfter, alt: "Czysty, zadbany balkon po dezynfekcji i zabezpieczeniu przed gołębiami" },
  },
  {
    slug: "wspolnota-debniki",
    serviceSlug: "sprzatanie-wspolnot-mieszkaniowych",
    category: "Wspólnoty mieszkaniowe",
    title: "Obsługa wspólnoty mieszkaniowej — Dębniki",
    description:
      "Korytarz wejściowy budynku wielorodzinnego z odpryskującą farbą i zaniedbaną posadzką. Po wdrożeniu stałej umowy: regularne mycie, odświeżenie powierzchni i estetyczne, zadbane lobby, które poprawiło odbiór całego budynku.",
    beforeLabel: "Przed obsługą",
    afterLabel: "Po wdrożeniu stałej umowy",
    before: { src: wspolnotaBeforeCorridor, alt: "Zaniedbany korytarz wejściowy budynku wielorodzinnego z odpryskującą farbą" },
    after: { src: wspolnotaAfterLobby, alt: "Nowoczesne, czyste lobby budynku po wdrożeniu stałej obsługi sprzątającej" },
  },
  {
    slug: "klatka-pradnik",
    serviceSlug: "sprzatanie-wspolnot-mieszkaniowych",
    category: "Klatki schodowe",
    title: "Sprzątanie klatki schodowej — Prądnik Czerwony",
    description:
      "Klatka schodowa z widocznym zaniedbaniem — zmatowiałe stopnie, zabrudzone barierki i poręcze. Wprowadzenie cyklicznego sprzątania 2× w tygodniu przywróciło czystość i estetykę, którą doceniają mieszkańcy.",
    beforeLabel: "Przed wdrożeniem usługi",
    afterLabel: "Po cyklicznym sprzątaniu",
    before: { src: klatkaBeforeWorn, alt: "Zniszczona, zaniedbana klatka schodowa z odpryskującym betonem przed sprzątaniem" },
    after: { src: klatkaAfterBw, alt: "Czysta, nowoczesna klatka schodowa po wdrożeniu cyklicznego sprzątania" },
  },
];

export type ServiceDetail = {
  longIntro: string[];
  benefitCards: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  galleryImages: { src: string; alt: string }[];
  highlight: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "sprzatanie-mieszkan": {
    highlight: "Najczęściej wybierana usługa",
    longIntro: [
      "Sprzątanie mieszkań w Krakowie to nasza podstawowa i najczęściej zamawiana usługa — realizujemy ją od ponad 10 lat, zarówno jako sprzątanie jednorazowe, jak i regularną, cykliczną współpracę. Wiemy, że każde mieszkanie jest inne: kawalerka na Kazimierzu wymaga innego podejścia niż 5-pokojowy apartament na Woli Justowskiej. Dlatego zawsze dopasowujemy zakres prac, czas trwania i dobór środków do konkretnej przestrzeni.",
      "Nasza ekipa pracuje według sprawdzonej, powtarzalnej procedury — zaczynamy od pomieszczeń \"mokrych\" (kuchnia, łazienka), gdzie zabrudzenia są najbardziej uciążliwe, a kończymy na powierzchniach suchych. Dzięki temu efekt jest spójny w całym mieszkaniu, a nie tylko punktowo tam, gdzie \"widać\". Każde zlecenie kończy się krótką kontrolą jakości razem z klientem.",
      "Szczególnie chętnie podejmujemy się sprzątania regularnego — raz w tygodniu, raz na dwa tygodnie lub raz w miesiącu. Stali klienci zyskują nie tylko niższą cenę (nawet do 30% taniej niż przy zleceniach jednorazowych), ale przede wszystkim spokój — ta sama, zaufana osoba zna rozkład mieszkania, preferencje co do środków czystości i szczególne wymagania (alergie, zwierzęta, delikatne powierzchnie).",
    ],
    benefitCards: [
      { title: "Indywidualna wycena z góry", text: "Cenę ustalamy przed rozpoczęciem prac na podstawie metrażu i zakresu — żadnych niespodzianek na koniec." },
      { title: "Stała opiekunka/opiekun", text: "Przy regularnej współpracy przypisujemy do Twojego mieszkania tę samą, zaufaną osobę." },
      { title: "Środki dopasowane do Ciebie", text: "Klasyczne środki profesjonalne lub w pełni ekologiczne — bez agresywnej chemii, bezpieczne dla dzieci i zwierząt." },
      { title: "Elastyczne terminy", text: "Pracujemy również w weekendy i wieczorami — dopasowujemy się do Twojego kalendarza, nie odwrotnie." },
    ],
    process: [
      { title: "Wycena na podstawie metrażu", text: "Podajesz metraż i liczbę pomieszczeń — w 15 minut otrzymujesz orientacyjną wycenę." },
      { title: "Ustalenie zakresu i terminu", text: "Doprecyzowujemy szczegóły: czy mycie okien wchodzi w zakres, czy potrzebne są środki eko, kiedy wygodnie nam wejść." },
      { title: "Sprzątanie według procedury", text: "Ekipa pracuje od pomieszczeń mokrych do suchych, z kontrolą jakości na każdym etapie." },
      { title: "Odbiór i ewentualne poprawki", text: "Sprawdzamy efekt razem — jeśli coś wymaga poprawy, wracamy bezpłatnie tego samego dnia." },
    ],
    faq: [
      { q: "Czy sprzątacie mieszkania w trakcie wynajmu (z lokatorami)?", a: "Tak, regularnie sprzątamy mieszkania zamieszkane. Pracujemy dyskretnie, w ustalonych godzinach, z poszanowaniem prywatności domowników." },
      { q: "Czy mogę zamówić tylko wybrane pomieszczenia?", a: "Oczywiście. Sprzątanie punktowe (np. tylko kuchnia i łazienka) wyceniamy proporcjonalnie do zakresu." },
      { q: "Czy sprzątacie po zwierzętach domowych?", a: "Tak, mamy doświadczenie w usuwaniu sierści i zapachów. Na życzenie stosujemy środki neutralizujące zapachy, bezpieczne dla zwierząt." },
      { q: "Jak długo trwa sprzątanie typowego mieszkania?", a: "Mieszkanie 50 m² to zwykle 2,5–3,5 godziny pracy jednej osoby. Większe metraże lub sprzątanie generalne wymagają więcej czasu lub większej ekipy." },
    ],
    galleryImages: [
      { src: mieszkanieAfter, alt: "Czysta, nowoczesna kuchnia po profesjonalnym sprzątaniu mieszkania" },
      { src: mieszkanieCleanLiving, alt: "Jasny, uporządkowany salon po sprzątaniu mieszkania w Krakowie" },
    ],
  },
  "sprzatanie-biur": {
    highlight: "Wybór firm i korporacji",
    longIntro: [
      "Czyste biuro to nie tylko kwestia estetyki — to realny wpływ na produktywność zespołu i pierwsze wrażenie, jakie firma robi na klientach i kontrahentach. Obsługujemy biura w całym Krakowie: od kilkuosobowych startupów w Zabłociu, przez kancelarie w centrum, po duże open space'y korporacyjne w biurowcach przy Capital Parku czy Bonarka Business Park.",
      "Pracujemy elastycznie — najczęściej poza godzinami pracy biura: wcześnie rano, wieczorem lub w weekendy, tak aby nie zakłócać codziennego funkcjonowania firmy. Dla klientów ceniących dyskrecję (kancelarie prawne, biura rachunkowe, firmy z branży finansowej) nasi pracownicy podpisują dodatkowe klauzule poufności.",
      "Przy stałej współpracy ustalamy szczegółowy harmonogram (SLA) określający częstotliwość, zakres i standard prac — wraz z możliwością zgłaszania uwag i comiesięcznym raportowaniem. To rozwiązanie szczególnie cenione przez większe organizacje, które potrzebują przewidywalności i udokumentowanej jakości usługi.",
    ],
    benefitCards: [
      { title: "Praca poza godzinami biura", text: "Sprzątamy wcześnie rano, wieczorem lub w weekendy — bez zakłócania pracy zespołu." },
      { title: "Klauzule poufności", text: "Na życzenie podpisujemy dodatkowe NDA dla kancelarii, biur finansowych i firm o podwyższonych standardach bezpieczeństwa." },
      { title: "SLA i raportowanie", text: "Przy stałych umowach ustalamy mierzalne standardy jakości i przesyłamy comiesięczne raporty z wykonanych prac." },
      { title: "Uzupełnianie zużywalnych", text: "Dbamy o zapas papieru, mydła i środków w toaletach i kuchniach biurowych — zgłaszamy braki z wyprzedzeniem." },
    ],
    process: [
      { title: "Wizja lokalna lub wycena zdalna", text: "Dla większych biur proponujemy bezpłatną wizję lokalną; mniejsze powierzchnie wyceniamy na podstawie metrażu i zdjęć." },
      { title: "Ustalenie harmonogramu i SLA", text: "Określamy częstotliwość (codziennie, kilka razy w tygodniu, raz w tygodniu), zakres prac i standardy jakości." },
      { title: "Wdrożenie i pierwsza realizacja", text: "Ekipa poznaje specyfikę biura, lokalizację sprzętu i preferencje zespołu." },
      { title: "Stała obsługa z raportowaniem", text: "Regularne sprzątanie zgodnie z harmonogramem, z możliwością zgłaszania uwag przez dedykowany kontakt." },
    ],
    faq: [
      { q: "Czy obsługujecie biura w systemie codziennym?", a: "Tak, oferujemy sprzątanie codzienne, kilka razy w tygodniu lub raz w tygodniu — w zależności od wielkości zespołu i intensywności użytkowania biura." },
      { q: "Czy pracownicy są ubezpieczeni i zweryfikowani?", a: "Tak. Wszyscy pracownicy są zatrudnieni legalnie, przeszkoleni i objęci naszym ubezpieczeniem OC do 1 mln zł." },
      { q: "Czy wystawiacie faktury VAT z odroczonym terminem płatności?", a: "Tak, dla stałych klientów biznesowych oferujemy faktury VAT z terminem płatności do 14 dni." },
      { q: "Co jeśli nie jesteśmy zadowoleni z jakości danego sprzątania?", a: "Zgłoszenie uwagi w ciągu 24h skutkuje bezpłatną poprawką tego samego lub następnego dnia roboczego." },
    ],
    galleryImages: [
      { src: biuroLounge, alt: "Nowoczesna strefa wypoczynku w biurze po profesjonalnym sprzątaniu" },
      { src: biuroGlassRoom, alt: "Czysta sala konferencyjna ze szklanymi ścianami po sprzątaniu biura" },
    ],
  },
  "sprzatanie-po-remoncie": {
    highlight: "Gwarancja gotowości do zamieszkania",
    longIntro: [
      "Sprzątanie po remoncie to nasza specjalność i jedna z najczęściej zlecanych usług — rocznie realizujemy kilkaset takich zleceń. Pył budowlany różni się znacząco od zwykłego kurzu domowego: jest drobniejszy, elektrostatycznie przywiera do powierzchni i potrafi unosić się w powietrzu jeszcze przez wiele godzin po zakończeniu prac wykończeniowych. Standardowy odkurzacz domowy sobie z nim nie poradzi.",
      "Dlatego pracujemy sprzętem klasy przemysłowej — odkurzaczami z filtrami HEPA, które wychwytują nawet najdrobniejsze cząstki pyłu. Proces zawsze obejmuje minimum trzykrotne odkurzanie wszystkich powierzchni: raz na sucho, raz na mokro i finalnie kontrolne, aby mieć pewność, że żaden pył nie osiadł ponownie po wyschnięciu powierzchni.",
      "Sprzątanie po remoncie to nie tylko pył — to także resztki farby, kleju, silikonu, taśmy malarskiej na szybach czy cement na glazurze. Nasza ekipa ma doświadczenie w bezpiecznym usuwaniu takich zabrudzeń bez ryzyka zarysowania nowych powierzchni — szczególnie istotne przy delikatnych materiałach jak kamień naturalny, drewno czy mat na podłogach.",
    ],
    benefitCards: [
      { title: "Sprzęt z filtrami HEPA", text: "Profesjonalne odkurzacze przemysłowe wychwytują drobny pył budowlany, którego nie usunie zwykły sprzęt domowy." },
      { title: "Trzykrotne odkurzanie", text: "Standardowa procedura: na sucho, na mokro i kontrolnie — gwarancja braku osiadającego pyłu." },
      { title: "Bezpieczne usuwanie farby i kleju", text: "Dobieramy środki i techniki dopasowane do konkretnej powierzchni — bez ryzyka zarysowań." },
      { title: "Szybki termin realizacji", text: "Wiemy, że czeka na Ciebie odbiór mieszkania lub przeprowadzka — w pilnych przypadkach działamy nawet następnego dnia." },
    ],
    process: [
      { title: "Oględziny zakresu prac", text: "Na podstawie zdjęć lub wizji lokalnej oceniamy stopień zabrudzenia i dobieramy odpowiednią ekipę i sprzęt." },
      { title: "Pierwsze odkurzanie na sucho", text: "Usuwamy główną warstwę pyłu budowlanego ze wszystkich powierzchni, łącznie z górnymi krawędziami mebli i listew." },
      { title: "Mycie na mokro", text: "Dokładne mycie podłóg, glazury, terakoty, parapetów, drzwi i zabudowy kuchennej." },
      { title: "Odkurzanie kontrolne i mycie okien", text: "Finalne odkurzanie po wyschnięciu powierzchni oraz mycie okien, ram i parapetów w cenie usługi." },
    ],
    faq: [
      { q: "Ile czasu zajmuje sprzątanie po remoncie?", a: "Standardowe mieszkanie 50–60 m² to zwykle 5–7 godzin pracy dwuosobowej ekipy. Duże domy lub generalne remonty mogą wymagać 1–2 dni." },
      { q: "Czy usuwacie naklejki ochronne i folie z okien?", a: "Tak, zdejmowanie folii ochronnych, naklejek producenta i taśmy malarskiej wchodzi w standardowy zakres usługi." },
      { q: "Czy mogę zlecić tylko mycie okien po remoncie, bez całego mieszkania?", a: "Tak, oferujemy też usługi punktowe — samo mycie okien po remoncie wycenimy osobno." },
      { q: "Czy zajmujecie się też wywozem odpadów poremontowych?", a: "Tak, na życzenie organizujemy wywóz większych odpadów budowlanych — wystarczy dodać tę opcję do wyceny." },
    ],
    galleryImages: [
      { src: remontBeforeTools, alt: "Pomieszczenie w trakcie prac wykończeniowych z narzędziami przed sprzątaniem" },
      { src: svcRemontAfter, alt: "Czyste mieszkanie gotowe do odbioru po sprzątaniu poremontowym" },
    ],
  },
  "sprzatanie-balkonow-po-golebiach": {
    highlight: "Specjalistyczna dezynfekcja",
    longIntro: [
      "Gołębie potrafią upodobać sobie balkon na długie miesiące, pozostawiając po sobie odchody, pióra i resztki gniazd. To nie tylko nieestetyczny widok — odchody ptasie zawierają bakterie, grzyby i pasożyty, które stanowią realne zagrożenie dla zdrowia, szczególnie przy kontakcie z drogami oddechowymi podczas wysychania i unoszenia się w powietrzu wraz z kurzem.",
      "Nasza procedura zaczyna się od zmiękczenia zaschniętych zabrudzeń specjalistycznym preparatem — nigdy nie usuwamy ich \"na sucho\", ponieważ wzbija to szkodliwy pył w powietrze. Po zmiękczeniu mechanicznie usuwamy wszystkie zabrudzenia, a następnie dezynfekujemy całą powierzchnię balkonu: podłogę, barierki, ściany i sufit preparatem o działaniu bakteriobójczym i grzybobójczym.",
      "Sama dezynfekcja to jednak tylko połowa rozwiązania — bez zabezpieczenia gołębie z dużym prawdopodobieństwem wrócą. Dlatego każde zlecenie kończymy doradztwem w zakresie zabezpieczeń: siatek ochronnych (najskuteczniejsze rozwiązanie długoterminowe), kolców na parapetach czy odstraszaczy. Na życzenie zorganizujemy też sam montaż.",
    ],
    benefitCards: [
      { title: "Bezpieczne zmiękczanie zabrudzeń", text: "Nigdy nie usuwamy odchodów \"na sucho\" — zmiękczamy je najpierw, by uniknąć wzbijania szkodliwego pyłu." },
      { title: "Pełna dezynfekcja powierzchni", text: "Preparaty bakteriobójcze i grzybobójcze obejmują podłogę, barierki, ściany i sufit balkonu." },
      { title: "Praca w odzieży ochronnej", text: "Nasi pracownicy używają kombinezonów, masek i rękawic zgodnie z zaleceniami sanitarnymi." },
      { title: "Doradztwo w zabezpieczeniu", text: "Po czyszczeniu doradzamy i na życzenie montujemy siatki lub kolce, by gołębie nie wróciły." },
    ],
    process: [
      { title: "Ocena stopnia zabrudzenia", text: "Na podstawie zdjęć lub wizji lokalnej dobieramy odpowiednie środki i czas realizacji." },
      { title: "Zmiękczenie zabrudzeń", text: "Specjalistyczny preparat rozmiękcza zaschnięte odchody, eliminując ryzyko wzbicia pyłu." },
      { title: "Mechaniczne usunięcie i dezynfekcja", text: "Usuwamy zabrudzenia, a następnie dezynfekujemy całą powierzchnię balkonu — łącznie z barierkami i sufitem." },
      { title: "Doradztwo w zabezpieczeniu", text: "Proponujemy rozwiązanie dopasowane do Twojego balkonu — siatkę, kolce lub odstraszacz." },
    ],
    faq: [
      { q: "Czy dezynfekcja jest bezpieczna dla dzieci i zwierząt?", a: "Tak, stosujemy preparaty dopuszczone do użytku w przestrzeniach mieszkalnych. Zalecamy jedynie krótkie wywietrzenie balkonu po zabiegu." },
      { q: "Jak szybko gołębie mogą wrócić po czyszczeniu?", a: "Bez zabezpieczenia — nawet po kilku dniach. Dlatego rekomendujemy montaż siatki lub kolców bezpośrednio po dezynfekcji." },
      { q: "Czy usuwacie też gniazda gołębi?", a: "Tak, mechaniczne usunięcie gniazd i zabezpieczonych resztek wchodzi w zakres usługi." },
      { q: "Ile kosztuje montaż siatki zabezpieczającej?", a: "Cena zależy od wielkości balkonu i typu siatki — wyceniamy indywidualnie razem z usługą czyszczenia." },
    ],
    galleryImages: [
      { src: svcBalkonyBefore, alt: "Zaniedbany balkon przed profesjonalnym czyszczeniem i dezynfekcją po gołębiach" },
      { src: svcBalkonyAfter, alt: "Czysty, zadbany balkon po dezynfekcji i zabezpieczeniu przed ptakami" },
    ],
  },
  "mycie-okien": {
    highlight: "Bez smug, bez ryzyka",
    longIntro: [
      "Mycie okien wydaje się proste, dopóki nie trzeba umyć dużych przeszkleń na wysokim piętrze, okien dachowych lub witryn sklepowych bez pozostawiania smug. Nasi pracownicy korzystają z profesjonalnych ściągaczek, mikrofibr i środków, które nie zostawiają zacieków nawet przy intensywnym nasłonecznieniu — częstym problemie przy samodzielnym myciu domowymi sposobami.",
      "Obsługujemy mycie okien na każdej wysokości — od parteru po wyższe kondygnacje, z użyciem technik bezpiecznych i zgodnych z przepisami BHP. Dla budynków biurowych i kamienic z trudno dostępnymi oknami stosujemy systemy na wysięgnikach teleskopowych, eliminując konieczność wchodzenia na zewnętrzne parapety.",
      "Usługa zawsze obejmuje więcej niż same szyby: czyścimy ramy, uszczelki, parapety wewnętrzne i zewnętrzne oraz, na życzenie, moskitiery i rolety zewnętrzne. To kompleksowe podejście sprawia, że efekt jest widoczny i trwały — bez szybkiego ponownego osiadania kurzu w newralgicznych miejscach.",
    ],
    benefitCards: [
      { title: "Mycie na każdej wysokości", text: "Wysięgniki teleskopowe i sprzęt dostosowany do wyższych kondygnacji — bez ryzyka i bez wchodzenia na parapety." },
      { title: "Zero smug gwarantowane", text: "Profesjonalne ściągaczki i środki dobrane pod kątem nasłonecznienia i typu szkła." },
      { title: "Pełny zakres w cenie", text: "Ramy, uszczelki i parapety czyścimy standardowo — nie tylko samą szybę." },
      { title: "Możliwość stałej umowy", text: "Cykliczne mycie okien co kwartał lub co pół roku — z rabatem za regularną współpracę." },
    ],
    process: [
      { title: "Wycena na podstawie liczby okien", text: "Podajesz liczbę i wielkość okien — błyskawicznie podajemy orientacyjną cenę." },
      { title: "Dobór techniki i sprzętu", text: "Dla wyższych kondygnacji lub trudno dostępnych okien dobieramy wysięgniki lub odpowiednie zabezpieczenia." },
      { title: "Mycie dwustronne i ram", text: "Czyścimy szyby z obu stron oraz ramy, uszczelki i parapety wewnętrzne i zewnętrzne." },
      { title: "Kontrola pod światło", text: "Sprawdzamy efekt pod różnym kątem padania światła, by wyeliminować nawet drobne smugi." },
    ],
    faq: [
      { q: "Czy myjecie okna dachowe i świetliki?", a: "Tak, mamy doświadczenie i odpowiedni sprzęt do bezpiecznego mycia okien dachowych oraz świetlików." },
      { q: "Co z moskitierami i roletami zewnętrznymi?", a: "Czyszczenie moskitier i rolet jest dostępne jako dodatkowa opcja — zgłoś to przy wycenie." },
      { q: "Czy mycie okien działa też przy bardzo zabrudzonych szybach po budowie?", a: "Tak, dla mocno zabrudzonych szyb (np. po remoncie) stosujemy mocniejsze środki usuwające zaschnięty cement czy farbę." },
      { q: "Jak często warto myć okna w mieszkaniu w centrum Krakowa?", a: "Rekomendujemy mycie co kwartał — spaliny i kurz w centrum miasta osiadają znacznie szybciej niż na obrzeżach." },
    ],
    galleryImages: [
      { src: oknaBuilding, alt: "Czysta, lśniąca fasada szklana budynku po profesjonalnym myciu okien" },
      { src: oknaIndoor, alt: "Profesjonalne mycie dużego okna od wewnątrz bez pozostawiania smug" },
    ],
  },
  "sprzatanie-wspolnot-mieszkaniowych": {
    highlight: "Zaufanie dziesiątek zarządców",
    longIntro: [
      "Obsługa wspólnoty mieszkaniowej to coś więcej niż mycie podłóg na klatce schodowej — to odpowiedzialność za pierwsze wrażenie, jakie budynek robi na mieszkańcach i gościach, a także za bezpieczeństwo i higienę części wspólnych. Współpracujemy z dziesiątkami wspólnot i spółdzielni mieszkaniowych w Krakowie na podstawie długoterminowych umów, obejmujących zarówno codzienną obsługę, jak i prace okresowe.",
      "Każdej wspólnocie przypisujemy dedykowanego opiekuna, który zna specyfikę budynku, harmonogram prac i indywidualne ustalenia z zarządem. Comiesięczne raporty z wykonanych prac oraz możliwość bezpośredniego zgłaszania uwag sprawiają, że zarząd ma pełną kontrolę nad jakością usługi — bez konieczności osobistego nadzorowania ekipy.",
      "Standardowy zakres obejmuje sprzątanie klatek schodowych i wind, mycie okien na klatkach, utrzymanie piwnic i pomieszczeń technicznych oraz pielęgnację terenów zewnętrznych. W sezonie zimowym oferujemy także odśnieżanie chodników i wjazdów na podstawie sezonowej umowy z gwarantowanym czasem reakcji.",
    ],
    benefitCards: [
      { title: "Dedykowany opiekun klienta", text: "Jedna osoba odpowiedzialna za kontakt, harmonogram i jakość obsługi Twojej wspólnoty." },
      { title: "Comiesięczne raportowanie", text: "Przejrzysty raport z wykonanych prac — pełna kontrola dla zarządu bez konieczności nadzoru na miejscu." },
      { title: "Pełna dokumentacja i OC", text: "Umowa, faktury VAT i ubezpieczenie OC do 1 mln zł — formalności załatwione od początku." },
      { title: "Odśnieżanie w sezonie zimowym", text: "Sezonowa umowa na odśnieżanie chodników i wjazdów z gwarantowanym czasem reakcji do 2 godzin." },
    ],
    process: [
      { title: "Wizja lokalna i wycena", text: "Oceniamy zakres części wspólnych, częstotliwość potrzebnych prac i przygotowujemy indywidualną ofertę." },
      { title: "Podpisanie umowy i harmonogramu", text: "Ustalamy częstotliwość sprzątania, zakres prac i osobę kontaktową po obu stronach." },
      { title: "Przypisanie dedykowanego opiekuna", text: "Wyznaczamy stałą ekipę i opiekuna znającego specyfikę budynku." },
      { title: "Stała obsługa z raportowaniem", text: "Cykliczne prace zgodnie z harmonogramem oraz comiesięczne raporty przesyłane do zarządu." },
    ],
    faq: [
      { q: "Czy obsługujecie też niewielkie wspólnoty (do 10 lokali)?", a: "Tak, dostosowujemy zakres i częstotliwość do wielkości wspólnoty — także tych mniejszych, kameralnych." },
      { q: "Czy możemy zmienić zakres umowy w trakcie współpracy?", a: "Tak, harmonogram i zakres prac można elastycznie modyfikować — wystarczy zgłoszenie do opiekuna." },
      { q: "Jak wygląda rozliczenie za odśnieżanie?", a: "Oferujemy sezonową umowę ryczałtową lub rozliczenie za pojedyncze interwencje — w zależności od preferencji wspólnoty." },
      { q: "Czy zapewniacie zastępstwo w razie urlopu lub choroby pracownika?", a: "Tak, ciągłość obsługi gwarantujemy zawsze — w razie nieobecności wysyłamy zastępczą, przeszkoloną osobę." },
    ],
    galleryImages: [
      { src: wspolnotaAfterLobby, alt: "Czyste, nowoczesne lobby budynku wielorodzinnego po obsłudze wspólnoty" },
      { src: buildingExteriorModern, alt: "Zadbany budynek wielorodzinny obsługiwany w ramach stałej umowy sprzątającej" },
    ],
  },
};
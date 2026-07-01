import mieszkanieAfter from "@/assets/mieszkanie-after.jpg";
import mieszkanieCleanLiving from "@/assets/mieszkanie-clean-living.jpg";
import biuroLounge from "@/assets/biuro-lounge.jpg";
import biuroGlassRoom from "@/assets/biuro-glass-room.jpg";
import buildingExteriorModern from "@/assets/building-exterior-modern.jpg";
import remontBeforeTools from "@/assets/remont-before-tools.jpg";
import svcRemontAfter from "@/assets/svc-remont-after.jpg";
import svcRemontBefore from "@/assets/svc-remont-before.jpg";
import svcBalkonyBefore from "@/assets/balkon-przed-golebie.jpg";
import svcBalkonyAfter from "@/assets/balkon-po-siatka.jpg";
import oknaBuilding from "@/assets/okna-przed-mycie.jpg";
import oknaIndoor from "@/assets/okna-po-czyste.jpg";
import mieszkaniePrzedPo from "@/assets/mieszkanie-przed-po.jpg";
import wspolnotaAfterLobby from "@/assets/wspolnota-after-lobby.jpg";
import wspolnotaBeforeCorridor from "@/assets/wspolnota-before-corridor.jpg";
import svcBiurHero from "@/assets/svc-biur-hero.jpg";
import svcDomowHero from "@/assets/svc-domow-hero.jpg";
import svcMieszkaniaHero from "@/assets/svc-mieszkania-hero.jpg";
import svcTerenyHero from "@/assets/svc-tereny-hero.jpg";
import svcWspolnotyHero from "@/assets/svc-wspolnoty-hero.jpg";
import terenyLawn from "@/assets/tereny-lawn.jpg";
import domExterior from "@/assets/dom-exterior-2.jpg";
import klatkaBeforeWorn from "@/assets/klatka-before-worn.jpg";
import svcAdministracjiHero from "@/assets/svc-administracji-hero.jpg";
import svcAdministracjiSala from "@/assets/svc-administracji-sala.jpg";
import svcAdministracjiKorytarz from "@/assets/svc-administracji-korytarz.jpg";

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
    title: "Sprzątanie mieszkań Kraków",
    short: "Regularne i jednorazowe sprzątanie mieszkań w Krakowie z gwarancją satysfakcji.",
    icon: "Home",
    intro:
      "Zadbamy o czystość Twojego mieszkania od podłogi aż po sufit. Pracujemy dokładnie, dyskretnie i zawsze w ustalonym terminie. Klienci regularni oszczędzają do 30%.",
    benefits: [
      "Doświadczona, sprawdzona ekipa",
      "Profesjonalny sprzęt i ekologiczne środki",
      "Cena ustalana z góry — bez ukrytych kosztów",
      "Możliwość regularnej współpracy tygodniowej",
      "Stała osoba przypisana do Twojego mieszkania",
      "Gwarancja satysfakcji — poprawki bezpłatnie",
    ],
    scope: [
      "Odkurzanie i mycie wszystkich podłóg",
      "Mycie i dezynfekcja łazienki oraz WC",
      "Czyszczenie kuchni, sprzętów AGD, blatów",
      "Wycieranie kurzu z mebli i sprzętów",
      "Mycie luster i powierzchni szklanych",
      "Wyniesienie śmieci i wymiana worków",
      "Czyszczenie piekarnika i okapu (opcja)",
      "Mycie okien i parapetów (opcja)",
    ],
    priceFrom: "od 150 zł",
  },
  {
    slug: "sprzatanie-domow",
    title: "Sprzątanie domów Kraków",
    short: "Kompleksowe sprzątanie domów jedno- i wielorodzinnych w Krakowie i okolicach.",
    icon: "Building2",
    intro:
      "Duża powierzchnia, kilka pięter, ogród? Bierzemy to na siebie. Dopasujemy zakres prac do wielkości i specyfiki Twojego domu. Dysponujemy kilkuosobowymi ekipami.",
    benefits: [
      "Pełna ekipa dostosowana do metrażu",
      "Sprzątanie wnętrz i przestrzeni wokół domu",
      "Profesjonalne odkurzacze i myjki przemysłowe",
      "Możliwość cyklicznej obsługi cotygodniowej",
      "Ubezpieczenie OC do 1 mln zł",
      "Bezpłatna wycena w 15 minut",
    ],
    scope: [
      "Sprzątanie wszystkich pomieszczeń mieszkalnych",
      "Mycie schodów, balustrad, klatek wewnętrznych",
      "Czyszczenie tarasów, wejść i garaży",
      "Mycie okien i parapetów (opcja)",
      "Pranie wykładzin i tapicerek (opcja)",
      "Sprzątanie piwnicy i kotłowni",
      "Dezynfekcja łazienek i kuchni",
      "Sprzątanie zewnętrzne wokół domu",
    ],
    priceFrom: "od 280 zł",
  },
  {
    slug: "sprzatanie-biur",
    title: "Sprzątanie biur Kraków",
    short: "Profesjonalne sprzątanie biur i przestrzeni komercyjnych w Krakowie.",
    icon: "Briefcase",
    intro:
      "Czyste biuro to wizytówka Twojej firmy. Sprzątamy poza godzinami pracy, dyskretnie, z poszanowaniem poufności. Dostępne umowy SLA z raportowaniem.",
    benefits: [
      "Umowy stałe z gwarancją jakości i SLA",
      "Praca wieczorami, nocą i w weekendy",
      "Wykwalifikowani, ubezpieczeni pracownicy",
      "Indywidualna wycena i harmonogram",
      "Klauzule poufności (NDA) na życzenie",
      "Comiesięczne raporty z wykonanych prac",
    ],
    scope: [
      "Mycie podłóg, wykładzin, biurek",
      "Dezynfekcja klawiatur, myszek i klamek",
      "Sprzątanie kuchni biurowej i sanitariatów",
      "Uzupełnianie środków czystości i papieru",
      "Wynoszenie śmieci i segregacja odpadów",
      "Czyszczenie szyb wewnętrznych i przeszkleń",
      "Odkurzanie tapicerki i mebli konferencyjnych",
      "Mycie ekspresów do kawy i sprzętu AGD",
    ],
    priceFrom: "wycena indywidualna",
  },
  {
    slug: "sprzatanie-wspolnot-mieszkaniowych",
    title: "Sprzątanie wspólnot mieszkaniowych",
    short: "Stała, kompleksowa obsługa wspólnot i spółdzielni mieszkaniowych w Krakowie.",
    icon: "Users",
    intro:
      "Obsługujemy wspólnoty mieszkaniowe i spółdzielnie na podstawie długoterminowych umów. Czyste klatki schodowe, windy, piwnice i tereny przyległe. Dedykowany opiekun dla każdej wspólnoty.",
    benefits: [
      "Dedykowany opiekun klienta",
      "Comiesięczne raporty z prac",
      "Pełna dokumentacja i ubezpieczenie OC",
      "Konkurencyjne stawki przy stałej współpracy",
      "Gwarantowane zastępstwo w czasie urlopów",
      "Odśnieżanie w sezonie zimowym",
    ],
    scope: [
      "Codzienne sprzątanie klatek schodowych",
      "Mycie i dezynfekcja wind",
      "Mycie okien na klatkach schodowych",
      "Sprzątanie piwnic i pomieszczeń technicznych",
      "Utrzymanie terenów zewnętrznych",
      "Opróżnianie koszy na śmieci",
      "Pielęgnacja terenów zielonych (opcja)",
      "Odśnieżanie chodników i wjazdów (opcja)",
    ],
    priceFrom: "wycena indywidualna",
  },
  {
    slug: "sprzatanie-administracji",
    title: "Sprzątanie administracji",
    short: "Kompleksowa obsługa budynków administracyjnych, urzędów i instytucji publicznych.",
    icon: "Landmark",
    intro:
      "Realizujemy zlecenia dla administracji publicznej, instytucji samorządowych i firm zarządzających nieruchomościami. Pracujemy zgodnie z indywidualnymi procedurami i standardami klienta.",
    benefits: [
      "Wieloletnie doświadczenie w sektorze publicznym",
      "Pełna dokumentacja, faktury VAT",
      "Doświadczenie w obsłudze przetargów",
      "Elastyczne godziny pracy",
      "Protokoły kontroli jakości",
      "Ubezpieczenie OC i przeszkolony personel",
    ],
    scope: [
      "Sprzątanie sal obsługi interesantów",
      "Dezynfekcja powierzchni dotykowych i poręczy",
      "Czyszczenie biur, archiwów i korytarzy",
      "Utrzymanie sanitariatów zgodnie z normami",
      "Mycie okien i przeszkleń",
      "Sprzątanie sal konferencyjnych i auli",
      "Serwis poranny i wieczorny",
    ],
    priceFrom: "wycena indywidualna",
  },
  {
    slug: "sprzatanie-po-remoncie",
    title: "Sprzątanie po remoncie Kraków",
    short: "Profesjonalne sprzątanie po remoncie — pył budowlany, farba, klej. Gotowe do zamieszkania.",
    icon: "Hammer",
    intro:
      "Sprzątanie po remoncie to nasza specjalność. Usuwamy drobny pył, resztki farby, kleju i silikonu. Sprzęt z filtrami HEPA. Po nas mieszkanie jest gotowe do zamieszkania w dniu odbioru.",
    benefits: [
      "Sprzęt klasy przemysłowej z filtrami HEPA",
      "Skuteczne środki do trudnych zabrudzeń",
      "Mycie okien, ram i parapetów w cenie",
      "Szybki termin — nawet następnego dnia",
      "Trzykrotne odkurzanie standardowo",
      "Bezpieczne usuwanie farby z szyb i płytek",
    ],
    scope: [
      "Trzykrotne odkurzanie wszystkich powierzchni",
      "Mycie podłóg, glazury i terakoty",
      "Usuwanie resztek farby, kleju i silikonu",
      "Mycie okien, ram, uszczelek i parapetów",
      "Czyszczenie zabudowy kuchennej i szaf",
      "Mycie drzwi, listew i ościeżnic",
      "Usuwanie folii ochronnych i naklejek",
      "Wywóz odpadów poremontowych (opcja)",
    ],
    priceFrom: "od 12 zł/m²",
  },
  {
    slug: "sprzatanie-balkonow-po-golebiach",
    title: "Sprzątanie balkonów po gołębiach",
    short: "Profesjonalne czyszczenie i dezynfekcja balkonów zanieczyszczonych przez gołębie.",
    icon: "Bird",
    intro:
      "Odchody gołębi są nie tylko nieestetyczne, ale i groźne dla zdrowia. Pracujemy w kombinezonach i maskach. Czyścimy, dezynfekujemy i doradzamy w trwałym zabezpieczeniu balkonu.",
    benefits: [
      "Pełna dezynfekcja bakteriobójcza i grzybobójcza",
      "Bezpieczne zmiękczanie — bez wzbijania pyłu",
      "Praca w odzieży ochronnej zgodnie z normami",
      "Doradztwo i montaż siatek/kolców",
      "Usuwanie gniazd ptaków",
      "Wycena na podstawie zdjęć — bez wizyty",
    ],
    scope: [
      "Zmiękczenie i mechaniczne usunięcie odchodów",
      "Dezynfekcja całego balkonu (podłoga, barierki, ściany)",
      "Mycie sufitu i ścian balkonu",
      "Usunięcie gniazd i resztek piór",
      "Dezynfekcja barierek i parapetów",
      "Doradztwo w zabezpieczeniu",
      "Montaż siatek lub kolców (opcja)",
    ],
    priceFrom: "od 250 zł",
  },
  {
    slug: "mycie-okien",
    title: "Mycie okien Kraków",
    short: "Profesjonalne mycie okien w mieszkaniach i domach — bez smug, bez ryzyka.",
    icon: "Sparkles",
    intro:
      "Mycie okien wraz z ramami, parapetami i moskitierami. Bez smug, bez śladów, bez ryzyka uszkodzeń. Obsługujemy wszystkie typy okien, w tym dachowe i fasadowe.",
    benefits: [
      "Mycie okien na każdej wysokości",
      "Profesjonalne ściągaczki i środki bez smug",
      "Mycie okien dachowych i świetlików",
      "Czyszczenie ram, uszczelek i parapetów",
      "Możliwość cyklicznej obsługi kwartalnej",
      "Bezpieczne usuwanie zabrudzeń poremontowych",
    ],
    scope: [
      "Mycie szyb dwustronnie — wewnątrz i na zewnątrz",
      "Czyszczenie ram PVC, drewnianych i aluminiowych",
      "Mycie uszczelek i prowadnic",
      "Mycie parapetów wewnętrznych i zewnętrznych",
      "Czyszczenie moskitier (opcja)",
      "Mycie rolet zewnętrznych (opcja)",
      "Usuwanie zacieków wapiennych i resztek farby",
    ],
    priceFrom: "od 15 zł/szt.",
  },
  {
    slug: "sprzatanie-terenow-zielonych",
    title: "Tereny zielone Kraków",
    short: "Koszenie trawy, pielęgnacja zieleni, grabienie liści — utrzymanie terenów wspólnych.",
    icon: "Leaf",
    intro:
      "Koszenie trawników, grabienie liści, przycinanie krzewów, sprzątanie odpadów. Dbamy o estetykę terenów wokół budynków wspólnot, biurowców i osiedli deweloperskich.",
    benefits: [
      "Cykliczna pielęgnacja — własny sprzęt ogrodniczy",
      "Wywóz odpadów zielonych i śmieci",
      "Obsługa wspólnot, biurowców i deweloperów",
      "Umowy roczne z gwarantowaną częstotliwością",
      "Sezonowe nasadzenia i uzupełnienia (opcja)",
      "Bezpłatna wycena po wizji lokalnej",
    ],
    scope: [
      "Koszenie trawników i mulczowanie",
      "Grabienie i wywóz liści",
      "Przycinanie krzewów i żywopłotów",
      "Podcinanie drzew i gałęzi do 4 m",
      "Sprzątanie odpadów i niedopałków",
      "Opróżnianie koszy zewnętrznych",
      "Pielęgnacja klombów i rabat kwiatowych",
      "Wiosenne i jesienne porządkowanie terenu",
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
      "Nasza ekipa pracuje według sprawdzonej, powtarzalnej procedury — zaczynamy od pomieszczeń mokrych (kuchnia, łazienka), gdzie zabrudzenia są najbardziej uciążliwe, a kończymy na powierzchniach suchych. Dzięki temu efekt jest spójny w całym mieszkaniu, a nie tylko punktowo tam, gdzie widać. Każde zlecenie kończy się krótką kontrolą jakości razem z klientem lub zdalne — przez zdjęcia przed i po.",
      "Szczególnie chętnie podejmujemy się sprzątania regularnego — raz w tygodniu, raz na dwa tygodnie lub raz w miesiącu. Stali klienci zyskują nie tylko niższą cenę (nawet do 30% taniej niż przy zleceniach jednorazowych), ale przede wszystkim spokój — ta sama, zaufana osoba zna rozkład mieszkania, preferencje co do środków czystości i szczególne wymagania (alergie, zwierzęta, delikatne powierzchnie).",
      "Dla rodzin z dziećmi i alergików oferujemy wersję ekologiczną — bez agresywnej chemii, z certyfikowanymi środkami biodegradowalnymi, które są równie skuteczne, a całkowicie bezpieczne dla małych dzieci i zwierząt domowych. Środki dostarczamy zawsze sami — nie musisz kupować niczego.",
    ],
    benefitCards: [
      { title: "Indywidualna wycena z góry", text: "Cenę ustalamy przed rozpoczęciem prac na podstawie metrażu i zakresu — żadnych niespodzianek na koniec." },
      { title: "Stała opiekunka/opiekun", text: "Przy regularnej współpracy przypisujemy do Twojego mieszkania tę samą, zaufaną osobę." },
      { title: "Środki dopasowane do Ciebie", text: "Klasyczne środki profesjonalne lub w pełni ekologiczne — bez agresywnej chemii, bezpieczne dla dzieci i zwierząt." },
      { title: "Elastyczne terminy", text: "Pracujemy również w weekendy i wieczorami — dopasowujemy się do Twojego kalendarza, nie odwrotnie." },
      { title: "Rabat 20–30% dla stałych klientów", text: "Sprzątanie cykliczne jest znacznie tańsze niż jednorazowe — im częstsza współpraca, tym lepsza stawka." },
      { title: "Brak kaucji i umowy na start", text: "Na pierwsze zlecenie nie wymagamy żadnego zobowiązania — sprawdź nas bez ryzyka." },
    ],
    process: [
      { title: "Bezpłatna wycena w 15 minut", text: "Podajesz metraż, liczbę pomieszczeń i zdjęcia — w 15 minut masz konkretną cenę bez wychodzenia z domu." },
      { title: "Ustalenie zakresu i terminu", text: "Doprecyzowujemy szczegóły: czy mycie okien wchodzi w zakres, czy potrzebne są środki eko, kiedy wygodnie nam wejść." },
      { title: "Sprzątanie według procedury", text: "Ekipa pracuje od pomieszczeń mokrych do suchych, z kontrolą jakości na każdym etapie." },
      { title: "Odbiór i ewentualne poprawki", text: "Sprawdzamy efekt razem lub przez zdjęcia. Jeśli coś wymaga poprawy, wracamy bezpłatnie tego samego dnia." },
    ],
    faq: [
      { q: "Czy sprzątacie mieszkania w trakcie wynajmu (z lokatorami)?", a: "Tak, regularnie sprzątamy mieszkania zamieszkane. Pracujemy dyskretnie, w ustalonych godzinach, z poszanowaniem prywatności domowników." },
      { q: "Czy mogę zamówić tylko wybrane pomieszczenia?", a: "Oczywiście. Sprzątanie punktowe (np. tylko kuchnia i łazienka) wyceniamy proporcjonalnie do zakresu." },
      { q: "Czy sprzątacie po zwierzętach domowych?", a: "Tak, mamy doświadczenie w usuwaniu sierści i zapachów. Na życzenie stosujemy środki neutralizujące zapachy, bezpieczne dla zwierząt." },
      { q: "Jak długo trwa sprzątanie typowego mieszkania?", a: "Mieszkanie 50 m² to zwykle 2,5–3,5 godziny pracy jednej osoby. Większe metraże lub sprzątanie generalne wymagają więcej czasu lub większej ekipy." },
      { q: "Czy muszę być w domu podczas sprzątania?", a: "Nie musisz. Wielu klientów zostawia nam klucze lub kod do skrzynki kluczy. Wszyscy pracownicy mają podpisaną klauzulę poufności i przechodzą weryfikację przed zatrudnieniem." },
      { q: "Czy sprzątanie obejmuje mycie okien?", a: "Mycie okien jest opcją dodatkową — możesz je dołączyć do standardowego sprzątania. Wyceniamy je osobno, za okno." },
      { q: "Czy stosujecie środki bezpieczne dla alergików?", a: "Tak, na życzenie pracujemy wyłącznie na certyfikowanych środkach ekologicznych, bez formaldehydu, chloru i silnych perfum. Wystarczy wspomnieć o tym przy zamawianiu." },
      { q: "Co jeśli ekipa uszkodzi coś w moim mieszkaniu?", a: "Posiadamy ubezpieczenie OC do 1 mln zł. W razie jakiejkolwiek szkody odpowiadamy z polisy — klient nigdy nie zostaje z problemem sam." },
    ],
    galleryImages: [
      { src: mieszkaniePrzedPo, alt: "Realizacja LumiClean: mieszkanie przed i po profesjonalnym sprzątaniu — widoczna transformacja" },
      { src: mieszkanieAfter, alt: "Czysta, nowoczesna kuchnia po profesjonalnym sprzątaniu mieszkania w Krakowie" },
      { src: mieszkanieCleanLiving, alt: "Jasny, schludny salon po regularnym sprzątaniu mieszkania — LumiClean Kraków" },
    ],
  },

  "sprzatanie-domow": {
    highlight: "Kompleksowa obsługa domu",
    longIntro: [
      "Sprzątanie domu jednorodzinnego to zupełnie inne wyzwanie niż sprzątanie mieszkania w bloku. Duży metraż, kilka kondygnacji, garaż, taras, piwnica, ogród — każde z tych miejsc wymaga odpowiedniego sprzętu, czasu i podejścia. Dlatego do każdego domu przyjeżdżamy z ekipą dopasowaną do powierzchni i zakresu — nie jedną osobą, ale odpowiednią liczbą pracowników, by efekt był gotowy w ciągu kilku godzin, a nie całego dnia.",
      "Obsługujemy domy w Krakowie i okolicach — Bronowice, Skawina, Zabierzów, Mogilany, Wieliczka. Znamy specyfikę zabudowy jednorodzinnej: drewniane podłogi, kamienne tarasy, wielkie przeszklenia, okna dachowe. Wiemy, jakich środków i technik używać, by nie uszkodzić delikatnych powierzchni, a jednocześnie osiągnąć perfekcyjny efekt.",
      "Sprzątanie domu oferujemy zarówno jako jednorazowe generalne porządki, jak i cykliczną obsługę tygodniową lub dwutygodniową. Stała ekipa, która regularnie przychodzi do Twojego domu, zna jego specyfikę — gdzie są wrażliwe miejsca, jakie środki lubisz, co wchodzi w standardowy zakres, a co nie. To oszczędność czasu, nerwów i pieniędzy.",
      "Dla właścicieli domów z ogrodem oferujemy również utrzymanie terenów zewnętrznych — koszenie trawy, grabienie liści, sprzątanie podjazdu i tarasu. Możemy połączyć sprzątanie wnętrza z obsługą zewnętrzną w ramach jednego zlecenia i jednej faktury.",
    ],
    benefitCards: [
      { title: "Ekipa dostosowana do metrażu", text: "Przy dużych domach wysyłamy kilkuosobową ekipę, by praca zakończyła się w ciągu jednego dnia." },
      { title: "Doświadczenie z trudnymi powierzchniami", text: "Drewno, kamień, wielkie przeszklenia — wiemy, jak czyścić każdy materiał bezpiecznie." },
      { title: "Sprzątanie wewnątrz i na zewnątrz", text: "Taras, garaż, wejście, schody zewnętrzne — oferujemy pełną obsługę domu, nie tylko wnętrze." },
      { title: "Cykliczna obsługa tygodniowa", text: "Regularna ekipa zna Twój dom — nie trzeba za każdym razem tłumaczyć, co i jak." },
      { title: "Szybka wycena po zdjęciach", text: "Wyślij zdjęcia domu i metraż — wycenę otrzymasz w 15 minut, bez wizyty." },
      { title: "Jeden rachunek za wszystko", text: "Możesz połączyć sprzątanie wnętrza z obsługą tarasu, ogrodu i garażu w jednym zleceniu." },
    ],
    process: [
      { title: "Wycena na podstawie metrażu i zdjęć", text: "Podajesz powierzchnię i liczbę kondygnacji, wysyłasz kilka zdjęć — w 15 minut masz konkretną wycenę." },
      { title: "Ustalenie ekipy i terminu", text: "Do dużych domów wysyłamy kilka osób. Potwierdzamy termin i ewentualny klucz lub kod dostępu." },
      { title: "Sprzątanie kompleksowe", text: "Ekipa pracuje jednocześnie w różnych częściach domu — wynik w ciągu jednego dnia, nawet przy 200+ m²." },
      { title: "Odbiór i kontrola jakości", text: "Sprawdzamy każde pomieszczenie. Ewentualne poprawki wykonujemy bezpłatnie jeszcze tego samego dnia." },
    ],
    faq: [
      { q: "Ile kosztuje sprzątanie domu 150 m² w Krakowie?", a: "Generalne sprzątanie domu 150 m² to koszt ok. 450–700 zł, zależnie od zakresu (mycie okien, taras, garaż). Przy regularnej współpracy stawki są niższe o 20–30%." },
      { q: "Czy sprzątacie garaże i piwnice?", a: "Tak, garaż i piwnica to standardowe opcje, które możesz dodać do sprzątania wnętrz za dodatkową opłatą." },
      { q: "Jak długo trwa sprzątanie domu 150 m²?", a: "Dwuosobowa ekipa potrzebuje zwykle 5–7 godzin na dom 150 m². Przy trzyosobowej ekipie to ok. 3–4 godziny." },
      { q: "Czy sprzątacie tarasy i wejścia do domu?", a: "Tak, sprzątanie tarasu, wejścia i schodów zewnętrznych wchodzi w zakres usługi jako opcja dodatkowa." },
      { q: "Czy obsługujecie domy poza Krakowem?", a: "Tak, dojeżdżamy do Wieliczki, Skawiny, Zabierzowa, Mogilanach i innych miejscowości wokół Krakowa. Dojazd wyceniamy indywidualnie." },
      { q: "Czy mogę zostawić klucze lub kod dostępu?", a: "Tak, wielu stałych klientów powierza nam klucze lub kody do bramy. Klucze są przechowywane w zamkniętej szafce z numerem bez adresu — pełne bezpieczeństwo i ubezpieczenie OC obejmuje też utratę klucza." },
      { q: "Czy sprzątanie domu obejmuje mycie okien?", a: "Mycie okien jest opcją dodatkową, wycenianą od sztuki (od 15 zł/okno). Możesz je dołączyć do każdego sprzątania — zarówno jednorazowego, jak i cyklicznego." },
    ],
    galleryImages: [
      { src: domExterior, alt: "Zadbany dom jednorodzinny obsługiwany cyklicznie przez LumiClean" },
      { src: svcDomowHero, alt: "Kompleksowe sprzątanie domu w Krakowie — wnętrze i otoczenie" },
    ],
  },

  "sprzatanie-biur": {
    highlight: "Wybór firm i korporacji",
    longIntro: [
      "Czyste biuro to nie tylko kwestia estetyki — to realny wpływ na produktywność zespołu i pierwsze wrażenie, jakie firma robi na klientach i kontrahentach. Badania potwierdzają, że pracownicy w czystym biurze są o ok. 15% bardziej efektywni i rzadziej chorują. Obsługujemy biura w całym Krakowie: od kilkuosobowych startupów w Zabłociu, przez kancelarie w centrum, po duże open space'y korporacyjne.",
      "Pracujemy elastycznie — najczęściej poza godzinami pracy biura: wcześnie rano, wieczorem lub w weekendy, tak aby nie zakłócać codziennego funkcjonowania firmy. Dla klientów ceniących dyskrecję (kancelarie prawne, biura rachunkowe, firmy z branży finansowej) nasi pracownicy podpisują dodatkowe klauzule poufności (NDA).",
      "Przy stałej współpracy ustalamy szczegółowy harmonogram (SLA) określający częstotliwość, zakres i standard prac — wraz z możliwością zgłaszania uwag i comiesięcznym raportowaniem. To rozwiązanie szczególnie cenione przez większe organizacje, które potrzebują przewidywalności i udokumentowanej jakości usługi.",
      "Uzupełniamy na bieżąco środki higieniczne w toaletach i kuchni biurowej — papier, mydło, ręczniki. Zgłaszamy zarządcy wszelkie usterki zauważone podczas sprzątania (np. cieknący kran, przepalona żarówka). Jesteśmy przedłużeniem Twojego facility management.",
    ],
    benefitCards: [
      { title: "Praca poza godzinami biura", text: "Sprzątamy wcześnie rano, wieczorem lub w weekendy — bez zakłócania pracy zespołu." },
      { title: "Klauzule poufności (NDA)", text: "Na życzenie podpisujemy dodatkowe NDA dla kancelarii, biur finansowych i firm o podwyższonych standardach." },
      { title: "SLA i comiesięczne raporty", text: "Przy stałych umowach ustalamy mierzalne standardy jakości i przesyłamy raporty z wykonanych prac." },
      { title: "Uzupełnianie środków higienicznych", text: "Dbamy o zapas papieru, mydła i środków w toaletach i kuchni — zgłaszamy braki z wyprzedzeniem." },
      { title: "Dezynfekcja powierzchni dotykowych", text: "Klawiatura, myszka, klamki, włączniki — dezynfekujemy regularnie, szczególnie w sezonie chorób." },
      { title: "Faktura VAT z odroczonym terminem", text: "Dla stałych klientów biznesowych — faktura VAT 14-dniowa, możliwość polecenia przelewu." },
    ],
    process: [
      { title: "Wizja lokalna lub wycena zdalna", text: "Dla biur powyżej 100 m² proponujemy bezpłatną wizję lokalną; mniejsze powierzchnie wyceniamy na podstawie metrażu i zdjęć." },
      { title: "Ustalenie harmonogramu i SLA", text: "Określamy częstotliwość, zakres prac, godziny wejścia i standardy jakości. Podpisujemy umowę." },
      { title: "Pierwsze sprzątanie testowe", text: "Ekipa poznaje specyfikę biura, lokalizację sprzętu i preferencje. Możliwość bezpłatnej korekty po pierwszej wizycie." },
      { title: "Stała obsługa z raportowaniem", text: "Regularne sprzątanie zgodnie z harmonogramem, comiesięczne raporty, możliwość zgłaszania uwag w 24h." },
    ],
    faq: [
      { q: "Czy obsługujecie biura w systemie codziennym?", a: "Tak, oferujemy sprzątanie codzienne, kilka razy w tygodniu lub raz w tygodniu — w zależności od wielkości biura i intensywności użytkowania." },
      { q: "Czy pracownicy są ubezpieczeni i zweryfikowani?", a: "Tak. Wszyscy pracownicy są zatrudnieni legalnie, przeszkoleni, objęci ubezpieczeniem OC do 1 mln zł i weryfikowani przed zatrudnieniem." },
      { q: "Czy wystawiacie faktury VAT z odroczonym terminem płatności?", a: "Tak, dla stałych klientów biznesowych oferujemy faktury VAT z terminem płatności do 14 dni." },
      { q: "Jak zgłosić uwagę do jakości sprzątania?", a: "Masz dedykowany kontakt do opiekuna klienta. Zgłoszenie w ciągu 24h skutkuje bezpłatną poprawką tego samego lub następnego dnia roboczego." },
      { q: "Czy sprzątacie w biurach pracujących zdalnie / hybrydowo?", a: "Tak, dostosowujemy harmonogram do trybu pracy Twojego biura — nie musisz być codziennie obecny, byśmy mogli sprzątnąć." },
      { q: "Czy możemy rozszerzyć zakres umowy o mycie okien?", a: "Tak, mycie okien biurowych wyceniamy dodatkowo i możemy je włączyć do stałej umowy lub realizować cyklicznie (co kwartał)." },
    ],
    galleryImages: [
      { src: biuroLounge, alt: "Nowoczesna strefa wypoczynku w biurze po profesjonalnym sprzątaniu" },
      { src: biuroGlassRoom, alt: "Czysta sala konferencyjna ze szklanymi ścianami — sprzątanie biura Kraków" },
      { src: svcBiurHero, alt: "Profesjonalne sprzątanie biura open space w Krakowie" },
    ],
  },

  "sprzatanie-po-remoncie": {
    highlight: "Gwarancja gotowości do zamieszkania",
    longIntro: [
      "Sprzątanie po remoncie to nasza specjalność i jedna z najczęściej zlecanych usług — rocznie realizujemy kilkaset takich zleceń w Krakowie i okolicach. Pył budowlany różni się znacząco od zwykłego kurzu domowego: jest drobniejszy, elektrostatycznie przywiera do powierzchni i może unosić się w powietrzu przez wiele godzin po zakończeniu prac. Standardowy odkurzacz domowy sobie z nim nie poradzi — filtr HEPA to absolutne minimum.",
      "Dlatego pracujemy wyłącznie sprzętem klasy przemysłowej — odkurzaczami z wielostopniowymi filtrami HEPA, które wychwytują nawet najdrobniejsze cząstki pyłu. Standardowa procedura obejmuje minimum trzykrotne odkurzanie wszystkich powierzchni: raz na sucho, raz na mokro i finalnie kontrolne — po wyschnięciu, by upewnić się, że żaden pył nie osiadł ponownie.",
      "Sprzątanie po remoncie to nie tylko pył — to resztki farby, kleju, silikonu, taśmy malarskiej na szybach, cement między fugami. Każda z tych substancji wymaga innego środka i innej techniki. Nasi pracownicy wiedzą, jak usunąć zaschniętą farbę akrylową z podłogi bez zarysowania, jak wyczyścić fugi bez uszkodzenia płytki matowej, jak bezpiecznie zdjąć folię ochronną z nowych okien.",
      "Realizujemy zarówno sprzątanie po generalnych remontach mieszkań i domów, jak i po drobnych pracach (malowanie, wymiana okien, montaż podłóg). W każdym przypadku — efekt jest gotowy do odbioru i zamieszkania już w dniu zakończenia naszej pracy. Dokumentujemy wynik zdjęciami, które możesz zachować na potrzeby protokołu odbioru.",
    ],
    benefitCards: [
      { title: "Sprzęt z filtrami HEPA", text: "Przemysłowe odkurzacze wychwytują drobny pył budowlany, którego nie usunie żaden sprzęt domowy." },
      { title: "Trzykrotne odkurzanie w standardzie", text: "Na sucho, na mokro i kontrolnie — zero pyłu na kolejny dzień po sprzątaniu." },
      { title: "Bezpieczne usuwanie farby i kleju", text: "Dobieramy środki i techniki do konkretnej powierzchni — bez zarysowań nowych podłóg i płytek." },
      { title: "Szybki termin — nawet następnego dnia", text: "Czeka na Ciebie odbiór mieszkania? W pilnych przypadkach działamy następnego dnia roboczego." },
      { title: "Mycie okien w cenie usługi", text: "Po remoncie okna są zawsze brudne. Ich mycie (szyby, ramy, parapety) wliczone jest w standardową usługę." },
      { title: "Dokumentacja zdjęciowa", text: "Fotografujemy efekt pracy przed opuszczeniem obiektu — masz dowód na potrzeby protokołu odbioru." },
    ],
    process: [
      { title: "Wycena na podstawie zdjęć lub oględzin", text: "Oceniamy stopień zabrudzenia i powierzchnię — wycenę dostaniesz w 15 min na podstawie zdjęć lub po bezpłatnej wizji lokalnej." },
      { title: "Pierwsze odkurzanie na sucho", text: "Odkurzamy wszystkie powierzchnie sprzętem z HEPA, łącznie z górnymi krawędziami mebli, listew i wnękami." },
      { title: "Mycie na mokro i chemiczne", text: "Mycie podłóg, glazury, terakoty, parapetów, drzwi, zabudowy. Usuwanie farby, kleju, silikonu." },
      { title: "Mycie okien i odkurzanie kontrolne", text: "Mycie szyb, ram i parapetów, a następnie finalne odkurzanie po wyschnięciu wszystkich powierzchni." },
      { title: "Odbiór i dokumentacja", text: "Sprawdzamy każde pomieszczenie, fotografujemy efekt. Ewentualne poprawki wykonujemy bezpłatnie." },
    ],
    faq: [
      { q: "Ile czasu zajmuje sprzątanie po remoncie?", a: "Standardowe mieszkanie 50–60 m² to zwykle 5–7 godzin pracy dwuosobowej ekipy. Duże domy lub generalne remonty mogą wymagać pełnych 2 dni." },
      { q: "Czy usuwacie naklejki ochronne i folie z okien?", a: "Tak, zdejmowanie folii ochronnych, naklejek producenta i taśmy malarskiej wchodzi w standardowy zakres usługi." },
      { q: "Czy mogę zlecić tylko mycie okien po remoncie, bez całego mieszkania?", a: "Tak, oferujemy też usługi punktowe — samo mycie okien po remoncie wycenimy osobno." },
      { q: "Czy zajmujecie się też wywozem odpadów poremontowych?", a: "Tak, na życzenie organizujemy wywóz większych odpadów budowlanych — wystarczy dodać tę opcję do wyceny." },
      { q: "Czy czyścicie nowe podłogi drewniane po remoncie?", a: "Tak, mamy doświadczenie z czyszczeniem nowych podłóg drewnianych, laminatów i winyli po remoncie. Stosujemy środki przeznaczone do poszczególnych powierzchni." },
      { q: "Kiedy najlepiej zamówić sprzątanie po remoncie?", a: "Idealnie: po zakończeniu wszystkich prac wykończeniowych — montażu mebli, listew i oświetlenia. Wejście ekipy sprzątającej przed zakończeniem prac budowlanych mija się z celem." },
      { q: "Czy sprzątanie po remoncie obejmuje mycie zabudowy kuchennej?", a: "Tak, czyszczenie zabudowy kuchennej wewnątrz i na zewnątrz, blatów i frontów szafek jest standardową pozycją w usłudze poremontowej." },
    ],
    galleryImages: [
      { src: remontBeforeTools, alt: "Pomieszczenie w trakcie prac wykończeniowych — pył i resztki materiałów" },
      { src: svcRemontAfter, alt: "Czyste mieszkanie gotowe do zamieszkania po sprzątaniu poremontowym" },
      { src: svcRemontBefore, alt: "Mieszkanie przed sprzątaniem po generalnym remoncie — widoczny pył budowlany" },
    ],
  },

  "sprzatanie-balkonow-po-golebiach": {
    highlight: "Specjalistyczna dezynfekcja",
    longIntro: [
      "Gołębie mogą upodobać sobie balkon na całe miesiące. To nie tylko nieestetyczny widok — odchody ptasie zawierają patogeny: bakterię Chlamydia psittaci (papuzicę), pałeczki Salmonelli, grzyby z rodzaju Cryptococcus oraz liczne pasożyty. Podczas wysychania odchody stają się sypkie i łatwo unoszą się w powietrzu, gdzie można je wdychać. Dlatego samodzielne sprzątanie suchą miotłą to najgorsze, co można zrobić.",
      "Nasz zespół zawsze pracuje w pełnym stroju ochronnym: kombinezon Tyvek, półmaska FFP3, rękawice nitrylowe. Procedura zaczyna się od nawilżenia i zmiękczenia odchodów specjalnym preparatem biocydowym — dopiero po kilku minutach mechanicznie usuwamy zawartość. Eliminujemy ryzyko wzbijania pyłu w powietrze podczas usuwania.",
      "Po oczyszczeniu dezynfekujemy całą powierzchnię balkonu preparatem o szerokim spektrum działania bakteriobójczym i grzybobójczym — podłogę, barierki, ściany i sufit. Usuwamy wszystkie resztki gniazd i piór. Efektem jest balkon bezpieczny dla rodziny i gotowy do użytku już po kilkugodzinnym wywietrzeniu.",
      "Sama dezynfekcja to jednak tylko połowa sukcesu — bez fizycznych zabezpieczeń gołębie z dużym prawdopodobieństwem wrócą już po kilku dniach. Dlatego każde zlecenie kończymy bezpłatnym doradztwem: dobieramy metodę zabezpieczenia (siatka ochronna, kolce nierdzewne, żyłka odstraszająca) do rodzaju balkonu i ryzyka. Na życzenie organizujemy też sam montaż — siatkę montujemy tak, by była niewidoczna z zewnątrz.",
    ],
    benefitCards: [
      { title: "Praca w pełnym stroju ochronnym", text: "Kombinezon Tyvek, maska FFP3, rękawice nitrylowe — spełniamy wymogi sanitarne bezpiecznej pracy z odchodami ptaków." },
      { title: "Bezpieczne zmiękczanie — bez wzbijania pyłu", text: "Nigdy nie usuwamy odchodów na sucho. Zmiękczamy je preparatem biocydowym, eliminując ryzyko wdychania patogenów." },
      { title: "Pełna dezynfekcja bakteriobójcza i grzybobójcza", text: "Certyfikowane preparaty dezynfekują podłogę, barierki, ściany i sufit balkonu." },
      { title: "Usuwanie gniazd i resztek piór", text: "Kompletne oczyszczenie balkonu — bez resztek organicznych, które przyciągają kolejne ptaki." },
      { title: "Doradztwo i montaż zabezpieczeń", text: "Dobieramy metodę dopasowaną do balkonu i na życzenie montujemy siatkę lub kolce." },
      { title: "Szybka wycena ze zdjęć bez wizyty", text: "Wyślij zdjęcia balkonu — wycenę otrzymasz w ciągu godziny, bez wychodzenia z domu." },
    ],
    process: [
      { title: "Ocena zabrudzenia na podstawie zdjęć", text: "Wysyłasz zdjęcia balkonu. Oceniamy stopień zabrudzenia, dobieramy środki i szacujemy czas pracy." },
      { title: "Nawilżenie i zmiękczenie odchodów", text: "Preparat biocydowy rozmiękcza zaschnięte zabrudzenia i eliminuje patogeny jeszcze przed ich usunięciem." },
      { title: "Mechaniczne usunięcie i dezynfekcja", text: "Usuwamy wszystkie zabrudzenia, gniazda i pióra. Dezynfekujemy całą powierzchnię balkonu." },
      { title: "Doradztwo w zabezpieczeniu", text: "Proponujemy rozwiązanie dopasowane do Twojego balkonu i na życzenie organizujemy montaż." },
    ],
    faq: [
      { q: "Czy dezynfekcja jest bezpieczna dla dzieci i zwierząt?", a: "Tak, stosujemy preparaty dopuszczone do użytku w przestrzeniach mieszkalnych. Zalecamy wywietrzenie balkonu przez 2–4 godziny po zabiegu." },
      { q: "Jak szybko gołębie mogą wrócić po czyszczeniu?", a: "Bez zabezpieczenia — nawet po kilku dniach, bo ptaki czują zapachy i wracają do znanych miejsc. Dlatego rekomendujemy montaż siatki lub kolców bezpośrednio po dezynfekcji." },
      { q: "Czy usuwacie też gniazda gołębi?", a: "Tak, mechaniczne usunięcie gniazd i resztek organicznych wchodzi w zakres usługi." },
      { q: "Ile kosztuje montaż siatki zabezpieczającej?", a: "Cena montażu siatki zależy od wielkości balkonu i rodzaju mocowania — wyceniamy indywidualnie razem z usługą czyszczenia. Standardowy balkon to koszt 200–500 zł za montaż siatki." },
      { q: "Czy kolce na barierence wystarczą?", a: "Kolce działają, ale tylko na krawędziach. Dla pełnej ochrony balkonu (podłogi) rekomendujemy siatkę ochronną. Kolce stosujemy jako uzupełnienie lub przy małych balkonach." },
      { q: "Czy sprzątacie balkony na dużych wysokościach?", a: "Tak, jesteśmy w stanie obsłużyć balkony na wyższych kondygnacjach — mamy odpowiednie zabezpieczenia i przeszkolony personel." },
    ],
    galleryImages: [
      { src: svcBalkonyBefore, alt: "Balkon pokryty odchodami gołębi i brudem — stan przed profesjonalnym czyszczeniem LumiClean" },
      { src: svcBalkonyAfter, alt: "Ten sam balkon po czyszczeniu i dezynfekcji — czysta posadzka, zamontowana siatka ochronna" },
    ],
  },

  "mycie-okien": {
    highlight: "Bez smug, bez ryzyka",
    longIntro: [
      "Mycie okien wydaje się prostą czynnością — dopóki nie stoisz przed ogromnym przeszkleniem na czwartym piętrze albo oknem połaciowym na dachu. Nasi pracownicy korzystają z profesjonalnych ściągaczek Unger i mikrofibr, które nie pozostawiają zacieków nawet przy intensywnym nasłonecznieniu — czym często grzeszą domowe środki z supermarketu. Efekt: szyby jak nowe, bez jednej smugi.",
      "Obsługujemy mycie okien na każdej wysokości — od parterów po wyższe kondygnacje. Dla kamienic i budynków biurowych z trudno dostępnymi oknami stosujemy wysięgniki teleskopowe i systemy wody demineralizowanej (czystej wody), co eliminuje konieczność wchodzenia na zewnętrzne parapety i gwarantuje bezpieczeństwo pracowników.",
      "Usługa zawsze obejmuje więcej niż same szyby: czyścimy ramy, uszczelki oraz parapety wewnętrzne i zewnętrzne. Opcjonalnie — moskitiery i rolety zewnętrzne. Szczególnie polecamy nasze usługi po sezonie grzewczym (wiosna) i po letnim pyle (wrzesień), gdy okna są najbardziej zaniedbane.",
      "Dla stałych klientów oferujemy umowy cykliczne — mycie okien co kwartał lub co pół roku, w zależności od lokalizacji mieszkania (centrum vs. obrzeża). To oszczędność czasu i korzystniejsza cena niż przy zleceniach jednorazowych.",
    ],
    benefitCards: [
      { title: "Mycie na każdej wysokości", text: "Wysięgniki teleskopowe i system czystej wody — bez konieczności wychodzenia na zewnętrzne parapety." },
      { title: "Zero smug gwarantowane", text: "Profesjonalne ściągaczki Unger i środki bez smug — efekt kontrolujemy pod różnym kątem padania światła." },
      { title: "Pełny zakres w cenie standardowej", text: "Ramy, uszczelki i parapety czyścimy standardowo — nie tylko samą szybę." },
      { title: "Mycie okien dachowych i świetlików", text: "Mamy doświadczenie i sprzęt do bezpiecznego mycia okien połaciowych, dachowych i świetlików." },
      { title: "Cykliczna obsługa z rabatem", text: "Mycie co kwartał — lepsza cena i zawsze czyste okna bez pamiętania o terminach." },
      { title: "Usuwanie zabrudzeń poremontowych", text: "Zaschnięty cement, farba akrylowa, silikon na szybach — mamy środki, które to usuwają bezpiecznie." },
    ],
    process: [
      { title: "Szybka wycena na podstawie liczby okien", text: "Podajesz liczbę i przybliżoną wielkość okien — w kilka minut otrzymujesz orientacyjną cenę." },
      { title: "Dobór techniki i sprzętu", text: "Dla wyższych kondygnacji lub trudno dostępnych okien dobieramy wysięgniki lub system czystej wody." },
      { title: "Mycie dwustronne, ram i parapetów", text: "Czyścimy szyby z obu stron, ramy, uszczelki oraz parapety wewnętrzne i zewnętrzne." },
      { title: "Kontrola pod światło i finalne poprawki", text: "Sprawdzamy efekt pod różnym kątem padania światła. Drobne smugi usuwamy na miejscu." },
    ],
    faq: [
      { q: "Czy myjecie okna dachowe i świetliki?", a: "Tak, mamy doświadczenie i sprzęt do bezpiecznego mycia okien dachowych, połaciowych i świetlików — bez ryzyka uszkodzenia pokrycia dachowego." },
      { q: "Co z moskitierami i roletami zewnętrznymi?", a: "Czyszczenie moskitier i rolet jest dostępne jako opcja dodatkowa — zgłoś to przy wycenie. Moskitiery zdejmujemy, czyścimy i zakładamy z powrotem." },
      { q: "Czy mycie okien działa też przy silnych zabrudzeniach po budowie?", a: "Tak, dla szyb po remoncie (zaschnięty cement, farba, silikon) stosujemy specjalistyczne środki usuwające te zabrudzenia bez zarysowania szkła." },
      { q: "Jak często warto myć okna w Krakowie?", a: "W centrum — co kwartał (smog, spaliny). Na obrzeżach — 2–3 razy w roku wystarczy. Mycie wiosenne po sezonie grzewczym i jesienne po letnim kurzu to minimum dla każdego mieszkania." },
      { q: "Czy mycie okien wchodzi w cenę sprzątania mieszkania?", a: "Nie, mycie okien jest wyceniane osobno (od 15 zł/szt.). Możesz dołączyć je do każdego zlecenia sprzątania." },
      { q: "Czy można umówić mycie okien na sobotę lub niedzielę?", a: "Tak, pracujemy w weekendy. Wystarczy zgłosić preferowany termin przy zamawianiu usługi." },
    ],
    galleryImages: [
      { src: oknaBuilding, alt: "Profesjonalne mycie okna w mieszkaniu — pracownik LumiClean z mikrofibą" },
      { src: oknaIndoor, alt: "Czyste okno PVC po profesjonalnym myciu — bez smug, pełna przejrzystość szyby" },
    ],
  },

  "sprzatanie-wspolnot-mieszkaniowych": {
    highlight: "Zaufanie dziesiątek zarządców",
    longIntro: [
      "Obsługa wspólnoty mieszkaniowej to coś więcej niż mycie podłóg na klatce schodowej — to odpowiedzialność za pierwsze wrażenie, jakie budynek robi na mieszkańcach, ich gościach i potencjalnych nabywcach mieszkań. Czystość części wspólnych wpływa bezpośrednio na wartość nieruchomości i samopoczucie mieszkańców. Dlatego traktujemy to zlecenie z pełną powagą.",
      "Współpracujemy z dziesiątkami wspólnot i spółdzielni mieszkaniowych w Krakowie na podstawie długoterminowych umów. Każdej wspólnocie przypisujemy dedykowanego opiekuna klienta, który zna budynek, harmonogram prac i indywidualne ustalenia z zarządem. Comiesięczne raporty z wykonanych prac pozwalają zarządowi sprawować pełną kontrolę bez konieczności osobistego nadzorowania ekipy.",
      "Standardowy zakres obejmuje codzienne lub kilkurazy w tygodniu sprzątanie klatek schodowych i wind, mycie okien na klatkach, utrzymanie piwnic i pomieszczeń technicznych oraz pielęgnację terenów zielonych i zewnętrznych. Zimą oferujemy odśnieżanie chodników i wjazdów na podstawie sezonowej umowy z gwarantowanym czasem reakcji do 2 godzin od opadu.",
      "Posiadamy pełne ubezpieczenie OC do 1 mln zł, co jest standardowym wymogiem przy zawieraniu umów ze wspólnotami. Wystawiamy faktury VAT, prowadzimy pełną dokumentację prac i jesteśmy gotowi do udziału w przetargach. Gwarantujemy zastępstwo pracownika w razie urlopu lub choroby — ciągłość obsługi nigdy nie jest zagrożona.",
    ],
    benefitCards: [
      { title: "Dedykowany opiekun klienta", text: "Jedna osoba odpowiedzialna za kontakt, harmonogram i jakość obsługi Twojej wspólnoty — zawsze dostępna." },
      { title: "Comiesięczne raporty z prac", text: "Przejrzysty raport w formie PDF — pełna kontrola dla zarządu bez konieczności osobistego nadzoru." },
      { title: "Pełne ubezpieczenie OC do 1 mln zł", text: "Umowa, faktury VAT, OC do 1 mln zł — wszystkie formalności dopięte na start współpracy." },
      { title: "Gwarantowane zastępstwo", text: "W razie urlopu lub choroby pracownika — wysyłamy przeszkoloną osobę zastępczą, ciągłość gwarantowana." },
      { title: "Odśnieżanie zimą na umowie", text: "Sezonowa umowa z czasem reakcji do 2h od opadu śniegu — chodniki i wjazdy zawsze przejezdne." },
      { title: "Doświadczenie z przetargami", text: "Jesteśmy gotowi do udziału w przetargach — wystawiamy pełną dokumentację i referencje od aktualnych klientów." },
    ],
    process: [
      { title: "Wizja lokalna i bezpłatna wycena", text: "Oceniamy zakres części wspólnych, specyfikę budynku i przygotowujemy szczegółową ofertę pisemną." },
      { title: "Ustalenie umowy i harmonogramu", text: "Podpisujemy umowę z harmonogramem prac, zakresem, standardami jakości i warunkami zgłaszania uwag." },
      { title: "Przypisanie ekipy i opiekuna", text: "Wyznaczamy stałą ekipę i dedykowanego opiekuna, który zna budynek i zarząd wspólnoty." },
      { title: "Stała obsługa z raportowaniem", text: "Cykliczne prace według harmonogramu. Comiesięczny raport PDF wysyłany do zarządu." },
    ],
    faq: [
      { q: "Czy obsługujecie też małe wspólnoty (do 10 lokali)?", a: "Tak, dostosowujemy zakres i częstotliwość do wielkości wspólnoty — w tym małe kameralne budynki." },
      { q: "Czy możemy zmienić zakres umowy w trakcie współpracy?", a: "Tak, harmonogram i zakres prac można elastycznie modyfikować — wystarczy zgłoszenie do opiekuna klienta z 14-dniowym wyprzedzeniem." },
      { q: "Jak wygląda rozliczenie za odśnieżanie?", a: "Oferujemy sezonową umowę ryczałtową (stała miesięczna stawka przez sezon zimowy) lub rozliczenie za pojedyncze interwencje." },
      { q: "Czy zapewniacie zastępstwo w razie urlopu lub choroby pracownika?", a: "Tak, ciągłość obsługi gwarantujemy zawsze — przy nieobecności pracownika natychmiast wysyłamy przeszkoloną osobę zastępczą." },
      { q: "Czy prowadzicie pełną dokumentację dla potrzeb zebrania wspólnoty?", a: "Tak, przechowujemy dokumentację prac przez 3 lata i dostarczamy raporty miesięczne w formacie PDF z wyszczególnieniem każdej wykonanej czynności." },
      { q: "Czy obsługujecie nowe inwestycje deweloperskie?", a: "Tak, podejmujemy się obsługi nowych osiedli bezpośrednio po odbiorze od dewelopera — w tym sprzątania poremontowego części wspólnych i późniejszej stałej obsługi." },
    ],
    galleryImages: [
      { src: klatkaBeforeWorn, alt: "Zaniedbana klatka schodowa przed startem regularnej obslugi — typowy stan zastany" },
      { src: wspolnotaBeforeCorridor, alt: "Zabrudzony korytarz klatki schodowej przed profesjonalnym sprzataniem" },
      { src: wspolnotaAfterLobby, alt: "Czyste, lsniace lobby budynku wielorodzinnego po sprzataniu wspolnoty — LumiClean" },
    ],
  },

  "sprzatanie-administracji": {
    highlight: "Doświadczenie w sektorze publicznym",
    longIntro: [
      "Sprzątanie budynków administracyjnych, urzędów, instytucji publicznych i obiektów zarządzanych przez firmy property management to obszar, w którym wymagania są znacznie wyższe niż przy typowych biurach komercyjnych. Obsługujemy te obiekty z pełną dokumentacją, protokołami kontroli jakości i możliwością wdrożenia indywidualnych procedur klienta.",
      "Budynki administracyjne charakteryzują się dużym ruchem petentów i pracowników, co przekłada się na wysokie wymagania co do częstotliwości sprzątania i standardów higienicznych. Pracujemy zarówno w godzinach pracy urzędu (dyskretnie, minimalizując przeszkadzanie petentom), jak i poza nimi — w zależności od preferencji klienta.",
      "Dla obiektów sektora publicznego i instytucji wymagających zamówień publicznych jesteśmy gotowi do udziału w przetargach. Posiadamy referencje od aktualnych klientów instytucjonalnych, pełne ubezpieczenie OC do 1 mln zł oraz możliwość wystawienia wszelkiej dokumentacji wymaganej w procedurach przetargowych.",
      "Każde zlecenie dla administracji realizujemy według uzgodnionego z klientem standardu — sporządzamy protokoły z wykonanych prac, przeprowadzamy cykliczne kontrole jakości z udziałem przedstawiciela klienta i reagujemy na uwagi w ciągu 24 godzin roboczych.",
    ],
    benefitCards: [
      { title: "Doświadczenie z sektorem publicznym", text: "Obsługujemy instytucje i urzędy — znamy specyficzne wymagania dotyczące procedur i dokumentacji." },
      { title: "Gotowość do przetargów", text: "Pełna dokumentacja, referencje, OC do 1 mln zł — wszystko potrzebne do udziału w zamówieniach publicznych." },
      { title: "Protokoły kontroli jakości", text: "Cykliczne kontrole z udziałem przedstawiciela klienta i podpisane protokoły z każdej wizyty." },
      { title: "Praca w trakcie godzin urzędowania", text: "Umiemy pracować dyskretnie, nie przeszkadzając petentom ani pracownikom — nawet w dni robocze." },
      { title: "Pełna dokumentacja", text: "Faktury VAT, umowa pisemna, protokoły prac — wszystko w porządku na każde żądanie kontroli." },
      { title: "Elastyczne godziny", text: "Serwis poranny, wieczorny lub weekendowy — dopasowujemy się do harmonogramu obiektu." },
    ],
    process: [
      { title: "Wizja lokalna i inwentaryzacja obiektu", text: "Oceniamy powierzchnię, ruch petentów, specyfikę pomieszczeń i wymagania sanitarne klienta." },
      { title: "Przygotowanie oferty i dokumentacji", text: "Sporządzamy ofertę z zakresem prac, harmonogramem, SLA i pełną dokumentacją przetargową (jeśli wymagana)." },
      { title: "Wdrożenie z przeszkoleniem ekipy", text: "Ekipa przechodzi szkolenie z procedur obiektu, zasad zachowania i wymaganych standardów bezpieczeństwa." },
      { title: "Stała obsługa z protokołami", text: "Regularne prace według harmonogramu, protokoły kontroli jakości i raportowanie do zarządcy obiektu." },
    ],
    faq: [
      { q: "Czy możecie uczestniczyć w przetargu na sprzątanie urzędu?", a: "Tak, posiadamy wszystkie wymagane dokumenty: ubezpieczenie OC, NIP, zaświadczenie o niezaleganiu z ZUS i US, referencje od dotychczasowych klientów instytucjonalnych." },
      { q: "Czy pracownicy przechodzą weryfikację (np. niekaralność)?", a: "Na życzenie możemy przedstawić zaświadczenia o niekaralności dla kluczowych pracowników. Wszyscy są zatrudnieni legalnie i przeszkoleni." },
      { q: "Jak często sprzątacie w budynkach z dużym ruchem?", a: "W obiektach o wysokim ruchu petentów rekomendujemy sprzątanie codzienne lub nawet serwis w ciągu dnia (uzupełnianie środków w toaletach, czyszczenie sanitariatów). Harmonogram ustalamy indywidualnie." },
      { q: "Czy wystawiacie faktury z 30-dniowym terminem płatności?", a: "Tak, dla klientów instytucjonalnych standardowy termin płatności to 14–30 dni od daty wystawienia faktury." },
      { q: "Czy obsługujecie obiekty wieloobiektowe (np. kilka filii urzędu)?", a: "Tak, obsługujemy klientów z wieloma lokalizacjami — koordynuje to jeden opiekun, jedna umowa i jedna zbiorcza faktura miesięczna." },
      { q: "Jak szybko reagujecie na awaryjne zgłoszenia (np. zalanie, rozlanie)?", a: "Dla stałych klientów instytucjonalnych oferujemy interwencje awaryjne w ciągu 2–4 godzin. Numer alarmowy jest dostępny w godzinach roboczych i — na życzenie — poza nimi." },
    ],
    galleryImages: [
      { src: svcAdministracjiHero, alt: "Czysta poczekalnia budynku administracyjnego gotowa na przyjecie petentow — LumiClean" },
      { src: svcAdministracjiSala, alt: "Sala konferencyjna urzedu po kompleksowym sprzataniu — LumiClean Krakow" },
      { src: svcAdministracjiKorytarz, alt: "Reprezentacyjny korytarz budynku administracyjnego po codziennym serwisie sprzatania" },
    ],
  },

  "sprzatanie-terenow-zielonych": {
    highlight: "Pielęgnacja przez cały rok",
    longIntro: [
      "Tereny zielone otaczające budynki mieszkalne, biurowce i osiedla to wizytówka nieruchomości. Zadbany trawnik, przycięte krzewy i czyste alejki podnoszą wartość nieruchomości i wpływają na komfort wszystkich korzystających z przestrzeni wspólnych. Dlatego do pielęgnacji terenów zewnętrznych podchodzimy z taką samą dbałością jak do sprzątania wnętrz.",
      "Obsługujemy tereny zielone dla wspólnot mieszkaniowych, spółdzielni, deweloperów, biurowców i instytucji na terenie całego Krakowa. Mamy własny sprzęt ogrodniczy — kosiarki rotacyjne i mulczujące, nożyce do żywopłotów, dmuchawy do liści, kultywatory. Dysponujemy pojazdem do wywozu odpadów zielonych, co eliminuje problem z przechowywaniem i utylizacją skoszonej trawy czy zebranych liści.",
      "Oferujemy dwa modele współpracy: sezonowy (kwiecień–październik, prace uzależnione od wzrostu roślinności) oraz roczny, który obejmuje również zimowe utrzymanie terenu — odśnieżanie, posypywanie piaskiem i solą. Dla klientów preferujących przewidywalność kosztów polecamy ryczałt miesięczny — stała opłata niezależna od liczby wizyt w danym miesiącu.",
      "Uzupełniamy też nasadzenia — wiosenne obsadzanie rabat kwiatami jednorocznymi, jesienne sadzenie cebulowych i bylin. Możemy zaproponować projekt prostego ogrodu lub renowację zaniedbanych terenów. Cały teren dokumentujemy fotograficznie co miesiąc, by zarząd miał wgląd w stan pielęgnacji.",
    ],
    benefitCards: [
      { title: "Własny sprzęt ogrodniczy", text: "Kosiarki, nożyce do żywopłotów, dmuchawy, kultywatory — przyjeżdżamy przygotowani na każdą pracę." },
      { title: "Wywóz odpadów zielonych w cenie", text: "Skoszona trawa, liście, gałęzie — wywozimy i utylizujemy. Żadnych worków w śmietnikach budynku." },
      { title: "Umowy roczne z ryczałtem", text: "Stała miesięczna opłata — żadnych niespodzianek. Budżet zaplanowany z góry na cały rok." },
      { title: "Obsługa przez cały rok", text: "Sezon ogrodniczy, odśnieżanie, posypywanie — jeden wykonawca przez cały rok, jeden kontakt." },
      { title: "Comiesięczna dokumentacja fotograficzna", text: "Zdjęcia terenu z każdej wizyty — zarząd ma pełną kontrolę bez wychodzenia na zewnątrz." },
      { title: "Nasadzenia i aranżacje rabat", text: "Wiosenne kwiaty jednoroczne, jesienne cebulowe — upiększamy teren zgodnie z preferencjami zarządcy." },
    ],
    process: [
      { title: "Bezpłatna wizja lokalna i wycena", text: "Oceniamy powierzchnię trawnika, żywopłoty, alejki, stan istniejącej roślinności i przygotowujemy wycenę." },
      { title: "Podpisanie umowy z harmonogramem prac", text: "Określamy częstotliwość wizyt w poszczególnych miesiącach, zakres prac i formę rozliczenia." },
      { title: "Pierwsze kompleksowe porządkowanie", text: "Pierwsze zlecenie często obejmuje intensywniejsze prace — koszenie, przycinanie, grabienie, oczyszczanie." },
      { title: "Cykliczna pielęgnacja i raportowanie", text: "Regularne wizyty zgodnie z harmonogramem. Miesięczna dokumentacja fotograficzna wysyłana do zarządcy." },
    ],
    faq: [
      { q: "Jak często należy kosić trawnik?", a: "W sezonie wzrostu (kwiecień–październik) rekomendujemy koszenie co 2–3 tygodnie. W upalne lata rzadziej, wiosną i jesienią częściej. Przy ryczałcie dbamy o optymalną częstotliwość sami." },
      { q: "Czy wywozicie skoszoną trawę i liście?", a: "Tak, wywóz odpadów zielonych jest standardowo wliczony w usługę. Nie zostawiamy worków z odpadami na terenie posesji." },
      { q: "Czy przycinacie też drzewa?", a: "Podcinamy gałęzie i formujemy korony drzew do wysokości ok. 4 m. Wycinkę dużych drzew lub prace na wysokości zlecamy certyfikowanym arborystom." },
      { q: "Czy możecie zająć się zaniedbanym terenem, który nie był pielęgnowany od lat?", a: "Tak, specjalizujemy się też w rewitalizacji zaniedbanych terenów — likwidacja chwastów, renowacja trawnika, odtworzenie żywopłotów. Wycena po wizji lokalnej." },
      { q: "Czy obsługujecie tereny w czasie zimy?", a: "Tak, przy rocznej umowie zajmujemy się odśnieżaniem chodników, wjazdów i alejek, posypywaniem piaskiem i solą. Czas reakcji gwarantujemy do 2h od opadu." },
      { q: "Jak wyceniacie tereny zielone?", a: "Podstawowym parametrem jest powierzchnia trawnika i żywopłotu. Wyceniamy po bezpłatnej wizji lokalnej lub na podstawie planu zagospodarowania terenu." },
    ],
    galleryImages: [
      { src: terenyLawn, alt: "Zadbany, regularnie koszony trawnik przy budynku wielorodzinnym" },
      { src: svcTerenyHero, alt: "Pielęgnacja terenów zielonych wspólnoty mieszkaniowej — LumiClean Kraków" },
    ],
  },
};
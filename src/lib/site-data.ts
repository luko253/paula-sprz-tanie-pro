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
    slug: "czyszczenie-kostki-brukowej",
    title: "Czyszczenie kostki brukowej",
    short: "Mechaniczne czyszczenie podjazdów, tarasów i chodników.",
    icon: "Layers",
    intro:
      "Kostka jak nowa. Usuwamy mchy, porosty i głęboko wniknięty brud. Po czyszczeniu impregnujemy powierzchnię.",
    benefits: [
      "Profesjonalne myjki ciśnieniowe",
      "Usuwanie mchu i chwastów",
      "Impregnacja po umyciu",
      "Cena zależna od metrażu",
    ],
    scope: [
      "Mycie kostki ciśnieniem",
      "Usuwanie zabrudzeń olejowych",
      "Uzupełnianie fugi piaskowej",
      "Impregnacja powierzchni (opcja)",
    ],
    priceFrom: "od 8 zł/m²",
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
    slug: "czyszczenie-kostki-brukowej-krakow",
    title: "Czyszczenie kostki brukowej w Krakowie — ceny i metody",
    excerpt: "Mchy, porosty, plamy olejowe — jak przywrócić kostce brukowej pierwotny wygląd?",
    date: "2025-02-01",
    readMinutes: 5,
    cover: "gallery-5",
    body: [
      { heading: "Metoda ciśnieniowa", paragraphs: ["Mycie ciśnieniowe to najskuteczniejszy sposób na czyszczenie kostki. Po myciu zalecamy impregnację, która chroni powierzchnię na 2–3 lata. Cena od 8 zł/m²."] },
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
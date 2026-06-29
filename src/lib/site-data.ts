export const SITE = {
  name: "Paula Sprzątanie",
  phone: "+48 600 000 000",
  phoneRaw: "+48600000000",
  email: "kontakt@paulasprzatanie.pl",
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
    text: "Korzystam z usług Pauli od dwóch lat. Sprzątanie generalne raz na kwartał i regularne mycie okien. Wszystko zawsze dopięte na ostatni guzik.",
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
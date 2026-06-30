import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout, PageHero, SectionLabel } from "@/components/site/Layout";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — LumiClean" },
      {
        name: "description",
        content:
          "Polityka prywatności LumiClean — zasady przetwarzania danych osobowych, pliki cookies oraz prawa użytkownika zgodnie z RODO.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Polityka prywatności — LumiClean" },
      { property: "og:description", content: "Zasady przetwarzania danych osobowych i cookies w LumiClean." },
      { property: "og:url", content: "https://lumiclean.pl/polityka-prywatnosci" },
    ],
    links: [{ rel: "canonical", href: "https://lumiclean.pl/polityka-prywatnosci" }],
  }),
  component: PolitykaPrywatnosciPage,
});

function PolitykaPrywatnosciPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Dokument prawny"
        title="Polityka prywatności"
        subtitle="Ostatnia aktualizacja: 30 czerwca 2026. Poniżej wyjaśniamy, jakie dane zbieramy, w jakim celu je przetwarzamy oraz jakie prawa Ci przysługują."
      />

      <nav aria-label="Nawigacja okruszkowa" className="container-x py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-navy-deep">
              Strona główna
            </Link>
          </li>
          <li>/</li>
          <li className="font-semibold text-navy-deep">Polityka prywatności</li>
        </ol>
      </nav>

      <section className="container-x pb-20 pt-4 md:pb-28">
        <div className="mx-auto grid max-w-3xl gap-12">
          <Block num="1" title="Administrator danych osobowych">
            <p>
              Administratorem danych osobowych przetwarzanych w związku z korzystaniem z serwisu{" "}
              <strong>{SITE.name}</strong> jest właściciel firmy {SITE.name} z siedzibą pod adresem:{" "}
              {SITE.address}. Kontakt w sprawach związanych z ochroną danych osobowych jest możliwy pod
              adresem e-mail: <a href={`mailto:${SITE.email}`} className="text-gold underline">{SITE.email}</a>{" "}
              lub telefonicznie: <a href={`tel:${SITE.phoneRaw}`} className="text-gold underline">{SITE.phone}</a>.
            </p>
          </Block>

          <Block num="2" title="Jakie dane zbieramy i w jakim celu">
            <p>
              Dane osobowe są przetwarzane wyłącznie w zakresie niezbędnym do realizacji poniższych celów:
            </p>
            <ul className="mt-4 grid gap-3">
              <Li>
                <strong>Formularz kontaktowy / wyceny.</strong> Podając imię, numer telefonu, adres e-mail,
                rodzaj usługi oraz treść wiadomości, wyrażasz zgodę na przetwarzanie tych danych w celu
                przygotowania odpowiedzi, wyceny usługi oraz nawiązania kontaktu. Podstawą prawną jest
                art. 6 ust. 1 lit. a) i b) RODO — zgoda oraz działania zmierzające do zawarcia umowy.
              </Li>
              <Li>
                <strong>Realizacja usługi i kontakt handlowy.</strong> Jeśli zostanie zawarta umowa o
                świadczenie usług sprzątających, dane są przetwarzane w celu jej wykonania (art. 6 ust. 1
                lit. b RODO), a po jej zakończeniu — przez okres wymagany przepisami prawa podatkowego i
                rachunkowego (art. 6 ust. 1 lit. c RODO).
              </Li>
              <Li>
                <strong>Korespondencja e-mail i telefoniczna.</strong> Dane podane w trakcie kontaktu
                bezpośredniego (e-mail, telefon) są przetwarzane w celu udzielenia odpowiedzi, na podstawie
                prawnie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO).
              </Li>
            </ul>
          </Block>

          <Block num="3" title="Okres przechowywania danych">
            <p>
              Dane z formularza kontaktowego przechowujemy przez okres niezbędny do udzielenia odpowiedzi i
              obsługi zapytania, nie dłużej jednak niż 12 miesięcy od ostatniego kontaktu — chyba że dojdzie
              do zawarcia umowy, wówczas dane są przechowywane przez czas trwania współpracy oraz okres
              wymagany przepisami prawa (np. podatkowego — 5 lat).
            </p>
          </Block>

          <Block num="4" title="Odbiorcy danych">
            <p>
              Dane osobowe mogą być powierzane podmiotom wspierającym działanie serwisu — np. dostawcy
              hostingu, dostawcy poczty elektronicznej oraz, w przyszłości, dostawcy systemu do obsługi
              formularzy kontaktowych. Każdy taki podmiot przetwarza dane wyłącznie na podstawie umowy
              powierzenia przetwarzania danych i zgodnie z wytycznymi administratora. Dane nie są
              przekazywane poza Europejski Obszar Gospodarczy bez zapewnienia odpowiedniego poziomu ochrony.
            </p>
          </Block>

          <Block num="5" title="Prawa użytkownika (RODO)">
            <p>W związku z przetwarzaniem danych osobowych przysługują Ci następujące prawa:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Prawo dostępu do swoich danych",
                "Prawo do sprostowania danych",
                "Prawo do usunięcia danych („prawo do bycia zapomnianym”)",
                "Prawo do ograniczenia przetwarzania",
                "Prawo do przenoszenia danych",
                "Prawo do wniesienia sprzeciwu",
                "Prawo do cofnięcia zgody w dowolnym momencie",
                "Prawo do wniesienia skargi do Prezesa UODO",
              ].map((right) => (
                <li
                  key={right}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy-deep"
                >
                  {right}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem{" "}
              <a href={`mailto:${SITE.email}`} className="text-gold underline">{SITE.email}</a>. Masz
              również prawo wniesienia skargi do organu nadzorczego — Prezesa Urzędu Ochrony Danych
              Osobowych (ul. Stawki 2, 00-193 Warszawa).
            </p>
          </Block>

          <Block num="6" title="Pliki cookies">
            <p>
              Serwis może wykorzystywać pliki cookies (ciasteczka) w celu zapewnienia prawidłowego
              działania strony oraz — po wdrożeniu narzędzi analitycznych — w celach statystycznych.
              Wyróżniamy następujące kategorie plików cookies:
            </p>
            <ul className="mt-4 grid gap-3">
              <Li>
                <strong>Niezbędne.</strong> Pliki wymagane do prawidłowego funkcjonowania strony (np.
                zapamiętanie stanu menu mobilnego). Nie wymagają zgody użytkownika.
              </Li>
              <Li>
                <strong>Analityczne (planowane).</strong> Po wdrożeniu Google Analytics lub podobnego
                narzędzia, pliki cookies będą wykorzystywane do anonimowej analizy ruchu na stronie —
                wyłącznie po uzyskaniu zgody użytkownika za pośrednictwem banera cookies.
              </Li>
            </ul>
            <p className="mt-4">
              Możesz w każdej chwili zmienić ustawienia plików cookies w swojej przeglądarce internetowej,
              w tym zablokować ich zapisywanie. Może to ograniczyć funkcjonalność niektórych elementów
              strony.
            </p>
          </Block>

          <Block num="7" title="Google Analytics i narzędzia analityczne (przygotowanie)">
            <p>
              Obecnie serwis <strong>nie korzysta</strong> z Google Analytics ani innych narzędzi
              analitycznych zbierających dane o ruchu. W przypadku wdrożenia takich narzędzi w przyszłości:
            </p>
            <ul className="mt-4 grid gap-2">
              <Li>Niniejsza polityka prywatności zostanie zaktualizowana o pełny opis przetwarzania.</Li>
              <Li>Na stronie pojawi się baner zgody na cookies (consent management).</Li>
              <Li>Dane analityczne będą zbierane wyłącznie po wyrażeniu zgody przez użytkownika.</Li>
              <Li>Użytkownik będzie mógł w każdej chwili wycofać zgodę na analitykę.</Li>
            </ul>
          </Block>

          <Block num="8" title="Bezpieczeństwo danych">
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych
              danych osobowych przed nieuprawnionym dostępem, utratą czy zniszczeniem, w tym m.in.
              szyfrowane połączenie HTTPS oraz ograniczony dostęp do danych wyłącznie dla osób
              upoważnionych.
            </p>
          </Block>

          <Block num="9" title="Zmiany polityki prywatności">
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności, w
              szczególności w związku z rozwojem serwisu, zmianami przepisów prawa lub wdrożeniem nowych
              narzędzi (np. analitycznych). Aktualna wersja polityki jest zawsze dostępna pod adresem
              lumiclean.pl/polityka-prywatnosci.
            </p>
          </Block>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({ num, title, children }: { num: string; title: string; children: ReactNode }) {
  return (
    <div>
      <SectionLabel>{num}</SectionLabel>
      <h2 className="mt-4 font-display text-2xl font-bold text-navy-deep md:text-3xl">{title}</h2>
      <div className="mt-4 grid gap-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function Li({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
      <span>{children}</span>
    </li>
  );
}

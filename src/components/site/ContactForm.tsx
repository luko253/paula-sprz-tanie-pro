import { useId, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site-data";
import { checkRateLimit, recordSubmission, submitContactForm } from "@/lib/contact-api";

const schema = z.object({
  name: z.string().trim().min(2, "Podaj imię").max(80),
  phone: z.string().trim().min(7, "Podaj numer telefonu").max(30),
  email: z.string().trim().email("Niepoprawny e-mail").max(160),
  service: z.string().max(120).optional(),
  message: z.string().trim().min(5, "Napisz krótką wiadomość").max(2000),
  consent: z.string().optional(),
  // Honeypot — real visitors never see or fill this field. Bots filling
  // every input on the page will populate it, so a non-empty value here
  // marks the submission as spam.
  website: z.string().optional(),
});

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const statusId = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const issues: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!issues[key]) issues[key] = issue.message;
      }
      setFieldErrors(issues);
      setState("error");
      setErrorMessage(null);
      toast.error(parsed.error.issues[0]?.message ?? "Sprawdź formularz");
      return;
    }

    if (!parsed.data.consent) {
      setFieldErrors({ consent: "Musisz zaakceptować politykę prywatności" });
      setState("error");
      setErrorMessage(null);
      toast.error("Musisz zaakceptować politykę prywatności");
      return;
    }

    setFieldErrors({});

    // Honeypot tripped — silently pretend success, don't tip off the bot
    // and don't actually send anything.
    if (parsed.data.website) {
      setState("success");
      form.reset();
      return;
    }

    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      setState("error");
      setErrorMessage(rateLimit.reason);
      toast.error(rateLimit.reason);
      return;
    }

    setState("loading");
    setErrorMessage(null);

    const result = await submitContactForm({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email,
      service: parsed.data.service,
      message: parsed.data.message,
    });

    if (!result.ok) {
      setState("error");
      setErrorMessage(result.error || "Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń.");
      toast.error("Nie udało się wysłać wiadomości.");
      return;
    }

    recordSubmission();
    setState("success");
    toast.success("Dziękujemy! Odezwiemy się w ciągu kilku godzin.");
    form.reset();
  }

  if (state === "success") {
    return (
      <div role="status" className="grid place-items-center gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-navy-deep">Wiadomość wysłana</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Dziękujemy za kontakt! Odezwiemy się w ciągu kilku godzin w godzinach pracy.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="text-sm font-semibold text-navy-deep underline-offset-2 hover:text-gold hover:underline"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate aria-describedby={statusId}>
      <div aria-live="polite" id={statusId} className="sr-only">
        {state === "loading" && "Wysyłanie wiadomości…"}
        {state === "error" && errorMessage}
      </div>

      {/* Honeypot field — visually hidden and unreachable by keyboard/screen readers for real users */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Strona internetowa</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Imię" name="name" placeholder="Anna" required error={fieldErrors.name} />
        <Field label="Telefon" name="phone" placeholder="+48 ..." required type="tel" error={fieldErrors.phone} />
      </div>
      <Field label="E-mail" name="email" placeholder="ty@email.pl" required type="email" error={fieldErrors.email} />
      <div className="grid gap-2">
        <label htmlFor="contact-service" className="text-sm font-semibold text-navy-deep">Rodzaj usługi</label>
        <select
          id="contact-service"
          name="service"
          className="h-12 rounded-xl border border-input bg-card px-4 text-sm text-navy-deep outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          defaultValue=""
        >
          <option value="" disabled>Wybierz usługę…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="contact-message" className="text-sm font-semibold text-navy-deep">Treść wiadomości</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Opisz krótko swoje potrzeby — metraż, zakres, oczekiwany termin…"
          className="rounded-xl border border-input bg-card p-4 text-sm text-navy-deep outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          required
          aria-invalid={Boolean(fieldErrors.message)}
        />
        {fieldErrors.message && <p className="text-xs text-destructive">{fieldErrors.message}</p>}
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
        <input
          id="contact-consent"
          name="consent"
          type="checkbox"
          required
          aria-invalid={Boolean(fieldErrors.consent)}
          aria-describedby="contact-consent-label"
          className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
        />
        <label htmlFor="contact-consent" id="contact-consent-label" className="text-xs leading-relaxed text-muted-foreground">
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie, zgodnie z{" "}
          <Link to="/polityka-prywatnosci" className="text-navy-deep underline-offset-2 hover:text-gold hover:underline">
            polityką prywatności
          </Link>
          . Zgoda jest dobrowolna, ale niezbędna do kontaktu.
        </label>
      </div>
      {fieldErrors.consent && <p className="-mt-2 text-xs text-destructive">{fieldErrors.consent}</p>}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 shadow-premium"
      >
        <Send className="h-4 w-4" />
        {state === "loading" ? "Wysyłanie…" : "Wyślij zapytanie"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-navy-deep">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : name === "name" ? "name" : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="h-12 rounded-xl border border-input bg-card px-4 text-sm text-navy-deep outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      />
      {error && (
        <p id={errorId} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

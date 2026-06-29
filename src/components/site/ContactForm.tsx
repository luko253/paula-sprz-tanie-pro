import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { SERVICES } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Podaj imię").max(80),
  phone: z.string().trim().min(7, "Podaj numer telefonu").max(30),
  email: z.string().trim().email("Niepoprawny e-mail").max(160),
  service: z.string().max(120).optional(),
  message: z.string().trim().min(5, "Napisz krótką wiadomość").max(2000),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Sprawdź formularz");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Dziękujemy! Odezwiemy się w ciągu kilku godzin.");
      form.reset();
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Imię" name="name" placeholder="Anna" required />
        <Field label="Telefon" name="phone" placeholder="+48 ..." required type="tel" />
      </div>
      <Field label="E-mail" name="email" placeholder="ty@email.pl" required type="email" />
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-navy-deep">Rodzaj usługi</label>
        <select
          name="service"
          className="h-12 rounded-xl border border-input bg-card px-4 text-sm text-navy-deep outline-none focus:border-gold"
          defaultValue=""
        >
          <option value="" disabled>Wybierz usługę…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-navy-deep">Treść wiadomości</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Opisz krótko swoje potrzeby — metraż, zakres, oczekiwany termin…"
          className="rounded-xl border border-input bg-card p-4 text-sm text-navy-deep outline-none focus:border-gold"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.01] disabled:opacity-60 shadow-premium"
      >
        <Send className="h-4 w-4" />
        {loading ? "Wysyłanie…" : "Wyślij zapytanie"}
      </button>
      <p className="text-xs text-muted-foreground">
        Wysyłając formularz akceptujesz przetwarzanie danych w celu odpowiedzi na zapytanie.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-navy-deep">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 rounded-xl border border-input bg-card px-4 text-sm text-navy-deep outline-none focus:border-gold"
      />
    </div>
  );
}
export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  service?: string;
  message: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

/**
 * Single integration point for the contact form.
 *
 * This is currently a mock — it resolves after a short delay and always
 * succeeds. To wire up a real provider, replace ONLY the body of this
 * function; ContactForm.tsx, validation, and anti-spam logic stay untouched.
 *
 * Example — Resend via a serverless function:
 *   const res = await fetch("/api/contact", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) return { ok: false, error: "Nie udało się wysłać wiadomości." };
 *   return { ok: true };
 *
 * Example — Formspree:
 *   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *     method: "POST",
 *     headers: { Accept: "application/json", "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) return { ok: false, error: "Nie udało się wysłać wiadomości." };
 *   return { ok: true };
 */
export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  void payload;
  return { ok: true };
}

const RATE_LIMIT_STORAGE_KEY = "lumiclean_contact_submissions";
const COOLDOWN_MS = 30_000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const WINDOW_MS = 10 * 60 * 1000;

/**
 * Client-side anti-spam throttle. Not a security boundary on its own (a
 * determined bot can clear localStorage), but it stops accidental
 * double-submits and casual abuse without any backend. Pair with
 * server-side rate limiting once a real endpoint exists.
 */
export function checkRateLimit(): { allowed: true } | { allowed: false; reason: string } {
  if (typeof window === "undefined") return { allowed: true };

  let timestamps: number[] = [];
  try {
    const raw = window.localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    timestamps = raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    timestamps = [];
  }

  const now = Date.now();
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  const last = recent[recent.length - 1];
  if (last && now - last < COOLDOWN_MS) {
    const waitSeconds = Math.ceil((COOLDOWN_MS - (now - last)) / 1000);
    return { allowed: false, reason: `Poczekaj jeszcze ${waitSeconds}s przed kolejną wysyłką.` };
  }

  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return { allowed: false, reason: "Zbyt wiele prób wysyłki. Spróbuj ponownie za kilka minut." };
  }

  return { allowed: true };
}

export function recordSubmission(): void {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    const timestamps: number[] = raw ? (JSON.parse(raw) as number[]) : [];
    const now = Date.now();
    const recent = timestamps.filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    window.localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(recent));
  } catch {
    // localStorage unavailable (private mode, quota) — fail open, not fatal.
  }
}

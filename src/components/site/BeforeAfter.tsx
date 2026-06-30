import { useCallback, useEffect, useRef, useState } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  label?: string;
  category?: string;
  className?: string;
}

export function BeforeAfter({
  before,
  after,
  beforeAlt = "Przed sprzątaniem",
  afterAlt = "Po sprzątaniu",
  label,
  category,
  className,
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => updateFromClientX(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [dragging, updateFromClientX]);

  return (
    <figure
      className={
        "group relative overflow-hidden rounded-3xl border border-border bg-card shadow-premium " +
        (className ?? "")
      }
    >
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none touch-none"
        onPointerDown={(e) => {
          (e.target as Element).setPointerCapture?.(e.pointerId);
          setDragging(true);
          updateFromClientX(e.clientX);
        }}
      >
        <img
          src={after}
          alt={afterAlt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={beforeAlt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${100 / (pos / 100 || 0.0001)}%`, maxWidth: "none" }}
          />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-deep/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur">
          Przed
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-deep backdrop-blur">
          Po
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-cream shadow-[0_0_20px_rgba(0,0,0,0.45)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cream/70 bg-navy-deep/90 text-cream shadow-premium">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 6 3 12 9 18" />
              <polyline points="15 6 21 12 15 18" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Suwak porównania przed i po"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      {(label || category) && (
        <figcaption className="flex items-center justify-between gap-3 border-t border-border bg-card px-5 py-4 text-sm">
          <span className="font-display font-semibold text-navy-deep">{label}</span>
          {category && (
            <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
              {category}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
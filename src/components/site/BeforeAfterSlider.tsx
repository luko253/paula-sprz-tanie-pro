import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Przed",
  afterLabel = "Po",
  title,
  showHandle = false,
  width = 1200,
  height = 900,
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  showHandle?: boolean;
  width?: number;
  height?: number;
}) {
  const [reveal, setReveal] = useState(50);

  return (
    <div className="relative aspect-[4/3] overflow-hidden select-none">
      <img
        src={after.src}
        alt={after.alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}>
        <img
          src={before.src}
          alt={before.alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute inset-y-0 w-0.5 bg-cream shadow-[0_0_0_2px_rgba(11,26,59,0.3)]"
        style={{ left: `${reveal}%` }}
      />
      <span className="absolute left-3 top-3 rounded-full bg-navy-deep/85 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cream">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-deep">
        {afterLabel}
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={reveal}
        onChange={(e) => setReveal(Number(e.target.value))}
        aria-label={`Suwak porównania przed i po: ${title}`}
        className="absolute inset-x-0 bottom-3 mx-auto block w-[90%] cursor-ew-resize accent-gold"
      />
      {showHandle && (
        <span
          className="pointer-events-none absolute bottom-9 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-cream text-navy-deep shadow-premium"
          style={{ left: `${reveal}%` }}
        >
          <MoveHorizontal className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}

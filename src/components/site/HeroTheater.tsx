import { ArrowRight, Award, BadgeCheck, Building2 } from "lucide-react";
import screenVideo from "@/assets/videos/electrorama-screen.mp4.asset.json";

const CREDENTIALS = [
  { icon: BadgeCheck, label: "Audio-Visual Consultants" },
  { icon: Building2, label: "System Integrators" },
  { icon: Award, label: "National Distributor — HARMAN (JBL)" },
];

/** Marquee light bulbs framing the screen */
function BulbRow({ count, className }: { count: number; className: string }) {
  return (
    <div className={`absolute flex items-center justify-between ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="er-bulb"
          style={{ animationDelay: `${(i % 7) * 0.3}s` }}
        />
      ))}
    </div>
  );
}

/** Silhouetted velvet seats along the bottom of the auditorium */
function SeatRows() {
  const rows = [
    { y: 66, h: 34, n: 18, fill: "oklch(0.2 0.05 25)", w: 58 },
    { y: 98, h: 44, n: 15, fill: "oklch(0.24 0.06 27)", w: 72 },
    { y: 140, h: 58, n: 12, fill: "oklch(0.28 0.07 28)", w: 88 },
  ];
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full"
      viewBox="0 0 1440 210"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {rows.map((row, ri) =>
        Array.from({ length: row.n }).map((_, i) => {
          const spacing = 1440 / row.n;
          const offset = ri % 2 === 0 ? 0 : spacing / 2;
          const x = offset + i * spacing;
          return (
            <g key={`${ri}-${i}`}>
              <rect
                x={x + 4}
                y={row.y}
                width={row.w}
                height={row.h}
                rx={14}
                fill={row.fill}
              />
              {ri === 2 && (
                <circle cx={x + row.w / 2} cy={row.y + row.h + 6} r={3} fill="oklch(0.7 0.12 80 / 55%)" />
              )}
            </g>
          );
        })
      )}
    </svg>
  );
}

export function HeroTheater() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden pt-20"
      style={{
        background:
          "radial-gradient(120% 90% at 50% -10%, oklch(0.26 0.04 60) 0%, oklch(0.15 0.015 70) 45%, oklch(0.1 0.01 70) 100%)",
      }}
    >
      {/* Ceiling cove lights */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-80"
        style={{
          background:
            "radial-gradient(60% 100% at 25% 0%, oklch(0.72 0.13 65 / 20%) 0%, transparent 60%), radial-gradient(60% 100% at 75% 0%, oklch(0.72 0.13 65 / 20%) 0%, transparent 60%), radial-gradient(80% 120% at 50% 0%, oklch(0.8 0.12 85 / 12%) 0%, transparent 55%)",
          animation: "er-cove 7s ease-in-out infinite",
        }}
      />

      {/* THE SCREEN */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-10 pt-6 sm:px-8">
        <div className="er-screen-anim relative">
          {/* glow halo */}
          <div
            className="absolute -inset-10 rounded-[2rem] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, oklch(0.8 0.13 85 / 22%) 0%, transparent 75%)",
            }}
          />

          {/* bulb frames */}
          <BulbRow count={26} className="-top-3 left-6 right-6" />
          <BulbRow count={26} className="-bottom-3 left-6 right-6" />

          <div className="relative overflow-hidden rounded-xl border-2 border-gold/60 shadow-[0_25px_90px_-20px_oklch(0.75_0.12_80/45%),inset_0_0_0_1px_oklch(0.85_0.12_90/25%)]">
            <div className="relative aspect-[21/9] w-full sm:aspect-[2.35/1]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={screenVideo.url}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
              {/* cinematic scrim */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.1 0.01 70 / 72%) 0%, oklch(0.1 0.01 70 / 25%) 40%, oklch(0.1 0.01 70 / 78%) 100%)",
                }}
              />

              {/* Headline on screen */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center sm:px-14">
                <p
                  className="er-hero-anim text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-gold-bright sm:text-xs"
                  style={{ animationDelay: "0.5s" }}
                >
                  Audio-Visual Consultants · System Integrators
                </p>
                <h1
                  className="er-hero-anim font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
                  style={{ animationDelay: "0.75s" }}
                >
                  Engineering{" "}
                  <span className="er-gold-text">Immersive</span>
                  <br />
                  <span className="er-gold-text">AV &amp; Cinema</span>{" "}
                  Experiences
                </h1>
                <p
                  className="er-hero-anim max-w-xl text-xs leading-relaxed text-foreground/80 sm:text-base"
                  style={{ animationDelay: "1s" }}
                >
                  Trusted partners in creating world-class cinemas and AV
                  environments — from concept and acoustic design to
                  calibration and lifetime support.
                </p>
                <div
                  className="er-hero-anim mt-1 flex flex-col gap-3 sm:flex-row"
                  style={{ animationDelay: "1.2s" }}
                >
                  <a
                    href="#solutions"
                    className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-7 py-3 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_-6px_oklch(0.8_0.14_85/80%)] transition-all hover:brightness-110"
                  >
                    Explore Solutions
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/50 bg-night/40 px-7 py-3 text-sm font-semibold tracking-wide text-gold-bright backdrop-blur transition-colors hover:border-gold hover:bg-gold/10"
                  >
                    View Our Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credential chips under the screen */}
        <div className="er-hero-anim mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "1.45s" }}
        >
          {CREDENTIALS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/70 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-widest text-gold-bright/90 sm:text-xs"
            >
              <Icon className="h-3.5 w-3.5 text-gold" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <SeatRows />
      {/* fade between seats and next section */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { Film, MapPin, Sparkles, Trophy, Users } from "lucide-react";

const BRANDS = [
  "JBL", "CROWN", "DOLBY", "CHRISTIE", "HARKNESS",
  "GALALITE", "SAMSUNG", "BSC", "SHURE", "BARCO",
];

export function AboutBand() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div className="er-reveal">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> About Electrorama
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            The unseen craft behind every{" "}
            <span className="er-gold-text"> unforgettable screen</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            For over 25 years, Electrorama has designed, built and calibrated
            world-class cinemas, auditoriums and AV environments across India.
            As audio-visual consultants, system integrators and national
            distributors for HARMAN (JBL), we bring global technology and
            local craftsmanship to every project — from a single screen to a
            nationwide rollout.
          </p>
        </div>
        <div className="er-reveal grid gap-4" style={{ transitionDelay: "0.15s" }}>
          {[
            { icon: Film, title: "25+ Years of Expertise", text: "Decades spent perfecting picture, sound and silence." },
            { icon: Trophy, title: "500+ Projects Completed", text: "Cinemas, auditoriums, boardrooms and venues of every scale." },
            { icon: Users, title: "100+ Premium Clients", text: "Trusted by leading exhibitors, corporates and institutions." },
            { icon: MapPin, title: "Pan-India Presence", text: "Teams and support across Mumbai, Delhi, Bengaluru & Hyderabad." },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex items-start gap-4 rounded-xl border border-gold/15 bg-card/60 p-5 transition-all hover:border-gold/40 hover:bg-card"
            >
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-night">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block font-semibold text-foreground">{title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrandsMarquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section
      id="brands"
      className="relative border-y border-gold/15 py-12"
      style={{ background: "oklch(0.12 0.012 70)" }}
    >
      <p className="er-reveal mb-8 text-center text-xs font-semibold uppercase tracking-[0.4em] text-gold">
        Powered by Global AV Technology Leaders
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div
          className="flex w-max items-center gap-14 px-7"
          style={{ animation: "er-marquee 32s linear infinite" }}
        >
          {row.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap font-display text-xl font-bold tracking-[0.25em] text-gold/55 transition-colors hover:text-gold sm:text-2xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1800;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  const stats = [
    { value: <Counter to={25} suffix="+" />, label: "Years of Expertise" },
    { value: <Counter to={500} suffix="+" />, label: "Projects Completed" },
    { value: <Counter to={100} suffix="+" />, label: "Premium Clients" },
    { value: "Pan India", label: "Presence & Support" },
  ];
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="er-reveal text-center"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <p className="er-gold-text font-display text-4xl font-bold sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

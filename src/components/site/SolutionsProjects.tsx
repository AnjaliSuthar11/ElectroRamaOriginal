import {
  ArrowRight,
  AudioWaveform,
  Building2,
  Clapperboard,
  MapPin,
  MonitorPlay,
  Speaker,
  Wrench,
} from "lucide-react";
import pvrImg from "@/assets/projects/pvr-mumbai.jpg";
import inoxImg from "@/assets/projects/inox-bengaluru.jpg";
import cinepolisImg from "@/assets/projects/cinepolis-hyderabad.jpg";
import corporateImg from "@/assets/projects/corporate-gurugram.jpg";

const SOLUTIONS = [
  {
    icon: Clapperboard,
    title: "Cinema Solutions",
    text: "Complete cinema solutions with immersive sound & stunning visuals.",
  },
  {
    icon: Speaker,
    title: "Auditorium Sound Systems",
    text: "High-performance sound systems for auditoriums & theatres.",
  },
  {
    icon: MonitorPlay,
    title: "LED Video Walls",
    text: "Cutting-edge LED displays for any environment.",
  },
  {
    icon: Building2,
    title: "AV for Corporate & Hospitality",
    text: "Smart AV solutions for corporate & hospitality environments.",
  },
  {
    icon: AudioWaveform,
    title: "Sound & Acoustic Design",
    text: "Acoustic design & treatment for the perfect experience.",
  },
  {
    icon: Wrench,
    title: "Turnkey Project Execution",
    text: "End-to-end project execution with precision and reliability.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="er-reveal mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              What We Do
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Our <span className="er-gold-text">Solutions</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            End-to-end solutions for cinemas, auditoriums, corporate spaces,
            hospitality and more.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="er-reveal group relative overflow-hidden rounded-2xl border border-gold/15 bg-card/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_20px_50px_-20px_oklch(0.75_0.12_80/35%)]"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              {/* corner glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.8 0.13 85 / 25%) 0%, transparent 70%)",
                }}
              />
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-gold/40 bg-night transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_20px_-4px_oklch(0.8_0.14_85/70%)]">
                <Icon className="h-5.5 w-5.5 text-gold" strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-lg font-bold tracking-wide text-foreground">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
              <ArrowRight className="mt-5 h-4 w-4 text-gold/50 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-gold" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    img: pvrImg,
    title: "PVR ICON – Mumbai",
    place: "Mumbai, Maharashtra",
  },
  {
    img: inoxImg,
    title: "INOX – Bengaluru",
    place: "Bengaluru, Karnataka",
  },
  {
    img: cinepolisImg,
    title: "Cinepolis – Hyderabad",
    place: "Hyderabad, Telangana",
  },
  {
    img: corporateImg,
    title: "Corporate AV Setup",
    place: "Gurugram, Haryana",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 bg-[#F1DFBD]"
      
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="er-reveal mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-black">
              Our Work
            </p>
            <h2 className="font-display text-black text-3xl font-bold sm:text-4xl">
              Featured <span className="text-black">Projects</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-gold-bright"
          >
            Start your project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map(({ img, title, place }, i) => (
            <article
              key={title}
              className="er-reveal group overflow-hidden rounded-2xl border border-gold/15 bg-card/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_25px_60px_-20px_oklch(0.75_0.12_80/40%)]"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, oklch(0.1 0.01 70 / 85%) 100%)",
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold tracking-wide text-foreground transition-colors group-hover:text-gold">
                  {title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 text-gold/70" />
                  {place}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

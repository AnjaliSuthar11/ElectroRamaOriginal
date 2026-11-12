
import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  Speaker,
} from "lucide-react";
import { SoundVisualizer } from "./SoundVisualizer";

const PROJECT_TYPES = [
  "Cinema Solutions",
  "Auditorium Sound Systems",
  "LED Video Walls",
  "AV for Corporate & Hospitality",
  "Sound & Acoustic Design",
  "Turnkey Project Execution",
];

const inputClass =
  "w-full rounded-lg border border-input bg-night/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/25";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-20 sm:py-24"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/Electrorama-banner-(1280x720).jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-[#100D09]/20" />

      {/* CINEMATIC GRADIENT */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#100D09]/80 via-[#100D09]/40 to-[#100D09]/65" />

      {/* GOLDEN AMBIENT GLOW */}
      <div className="pointer-events-none absolute -left-40 top-0 z-[3] h-96 w-96 rounded-full bg-[#C18A37]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 z-[3] h-96 w-96 rounded-full bg-[#C18A37]/10 blur-[130px]" />

      {/* CONTACT CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">

        {/* LEFT CONTENT */}
        <div className="er-reveal">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Request a Consultation
          </p>

          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Let&apos;s Build Your
            <br />
            <span className="er-gold-text">
              Next AV Experience
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us about your project and our experts will get in touch with
            you — whether it&apos;s a single screen, an auditorium or a
            nationwide rollout.
          </p>

          <div className="mt-9 space-y-4 text-sm">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3.5 text-foreground/85 transition-colors hover:text-gold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/35 bg-night/80">
                <Phone className="h-4 w-4 text-gold" />
              </span>
              +91 98765 43210
            </a>

            <a
              href="mailto:info@electrorama.com"
              className="flex items-center gap-3.5 text-foreground/85 transition-colors hover:text-gold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/35 bg-night/80">
                <Mail className="h-4 w-4 text-gold" />
              </span>
              info@electrorama.com
            </a>

            <p className="flex items-center gap-3.5 text-foreground/85">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/35 bg-night/80">
                <MapPin className="h-4 w-4 text-gold" />
              </span>
              Mumbai · Delhi · Bengaluru · Hyderabad
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div
          className="er-reveal rounded-2xl border border-gold/25 bg-[#100D09]/75 p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-9"
          style={{ transitionDelay: "0.15s" }}
        >
          {sent ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center gap-4 text-center">
              <CheckCircle2
                className="h-14 w-14 text-gold"
                strokeWidth={1.4}
              />

              <h3 className="font-display text-xl font-bold text-foreground">
                Thank you!
              </h3>

              <p className="max-w-sm text-sm text-muted-foreground">
                Your enquiry has been noted. Our team will reach out shortly
                to discuss your project.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid gap-4 sm:grid-cols-2"
            >
              <input
                required
                placeholder="Your Name"
                className={inputClass}
              />

              <input
                placeholder="Company Name"
                className={inputClass}
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className={inputClass}
              />

              <input
                required
                type="tel"
                placeholder="Phone Number"
                className={inputClass}
              />

              <select
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Project Type
                </option>

                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <input
                placeholder="Location"
                className={inputClass}
              />

              <textarea
                placeholder="Message"
                rows={5}
                className={`${inputClass} resize-none sm:col-span-2`}
              />

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-6 py-3.5 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_-8px_oklch(0.8_0.14_85/80%)] transition-all hover:brightness-110 sm:col-span-2"
              >
                Submit Enquiry
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* SOUND WAVEFORM */}
      <div className="relative z-10 mt-12">
        <SoundVisualizer />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t border-gold/15 py-10"
      style={{ background: "oklch(0.1 0.01 70)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 px-5 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/50 bg-night">
            <Speaker
              className="h-4.5 w-4.5 text-gold"
              strokeWidth={1.75}
            />
          </span>

          <span>
            <span className="block font-display text-base font-bold tracking-[0.22em]">
              ELECTR<span className="text-gold">ORAMA</span>
            </span>

            <span className="block text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
              Sound · Screens · Cinema
            </span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {["About", "Solutions", "Brands", "Projects", "Process", "Contact"].map(
            (l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="transition-colors hover:text-gold"
              >
                {l}
              </a>
            )
          )}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Electrorama. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

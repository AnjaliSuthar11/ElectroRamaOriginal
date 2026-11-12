import {
  Award,
  BadgeCheck,
  HandHeart,
  Headset,
  MessagesSquare,
  PencilRuler,
  Route,
  SlidersHorizontal,
  Wand2,
  Wrench,
} from "lucide-react";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "Certified Global Partnerships",
    text: "We work with the world's leading AV brands.",
  },
  {
    icon: Route,
    title: "End-to-End Execution",
    text: "From design to support, we handle everything.",
  },
  {
    icon: Wand2,
    title: "Customised Solutions",
    text: "Tailored solutions for unique requirements.",
  },
  {
    icon: Award,
    title: "Proven Industry Expertise",
    text: "Decades of experience across diverse industries.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    text: "Reliable support for lasting performance.",
  },
];

export function WhyChoose() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 bg-[#F1DFBF] text-black"
      
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="er-reveal mb-14 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Why Choose <span className="text-[#D8AB3E]">Electrorama?</span>
          </h2>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="er-reveal group text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/35 bg-night transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_30px_-6px_oklch(0.8_0.14_85/70%)]">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-black">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: MessagesSquare,
    num: "01",
    title: "Consultation",
    text: "Understanding your requirements",
  },
  {
    icon: PencilRuler,
    num: "02",
    title: "Design & Planning",
    text: "Engineering the right AV solution",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Installation",
    text: "Professional installation by expert team",
  },
  {
    icon: SlidersHorizontal,
    num: "04",
    title: "Calibration",
    text: "Fine-tuning for optimal performance",
  },
  {
    icon: HandHeart,
    num: "05",
    title: "Support & Maintenance",
    text: "Ongoing support for peace of mind",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="er-reveal mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            How We Work
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Our <span className="er-gold-text">Process</span>
          </h2>
        </div>

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {/* connector line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.8 0.14 85 / 35%) 12%, oklch(0.8 0.14 85 / 35%) 88%, transparent)",
            }}
          />
          {STEPS.map(({ icon: Icon, num, title, text }, i) => (
            <div
              key={num}
              className="er-reveal relative text-center"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gold/15 blur-md" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-night">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </span>
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-gold-bright to-gold-deep text-[0.6rem] font-bold text-primary-foreground">
                  {num}
                </span>
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[190px] text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

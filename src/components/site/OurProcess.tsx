
"use client";

import {
  MessageSquare,
  PencilRuler,
  Wrench,
  SlidersHorizontal,
  Headset,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your requirements and vision.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Crafting the right AV solution for your space.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Installation",
    description: "Professional installation by our expert team.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Calibration",
    description: "Fine-tuning for optimal performance.",
    icon: SlidersHorizontal,
  },
  {
    number: "05",
    title: "Support & Maintenance",
    description: "Ongoing support for complete peace of mind.",
    icon: Headset,
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#100D09] py-20 md:py-24"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Electrorama-banner-(1280x720).jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-[#100D09]/20" />

      {/* GRADIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#100D09]/85 via-[#100D09]/45 to-[#100D09]/80" />

      {/* GOLDEN BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-0 z-[3] h-96 w-96 rounded-full bg-[#C18A37]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 z-[3] h-96 w-96 rounded-full bg-[#C18A37]/15 blur-[130px]" />

      {/* GOLDEN WAVE DECORATION */}
      <div className="pointer-events-none absolute inset-0 z-[4] overflow-hidden opacity-20">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
        >
          <path
            d="M-100 480 C180 260 350 580 650 380 S1150 150 1540 350"
            stroke="#C99A50"
            strokeWidth="1"
          />
          <path
            d="M-100 500 C180 280 350 600 650 400 S1150 170 1540 370"
            stroke="#C99A50"
            strokeWidth="1"
          />
          <path
            d="M-100 520 C180 300 350 620 650 420 S1150 190 1540 390"
            stroke="#C99A50"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr] xl:gap-14">

          {/* LEFT CONTENT */}
          <div>
            <span className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#D6A34D]">
              <span className="h-px w-8 bg-[#C49547]" />
              Our Process
            </span>

            <h2 className="font-serif text-4xl font-medium leading-[1.1] text-[#F2D9AE] md:text-[48px]">
              A Seamless
              <br />
              Journey
            </h2>

            <p className="mt-5 max-w-[240px] text-sm leading-7 text-[#B9AA91]">
              From consultation to installation, we make the process
              effortless with expertise at every step.
            </p>

            <div className="mt-7 h-[2px] w-14 bg-[#C18A37]" />
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">
            {/* HORIZONTAL CONNECTING LINE */}
            <div className="absolute left-[10%] right-[10%] top-[27px] hidden h-px bg-gradient-to-r from-transparent via-[#B78945] to-transparent md:block" />

            {/* TIMELINE STEPS */}
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-5 md:gap-3">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative flex flex-row items-start gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
                  >
                    {/* ICON */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D09B47] bg-[#17120B]/90 text-[#EFC477] shadow-[0_0_18px_rgba(198,145,59,0.12)] backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#FFE0A0] group-hover:bg-[#C18A37] group-hover:text-[#170F05] group-hover:shadow-[0_0_30px_rgba(211,157,70,0.4)] md:mb-5">
                      <Icon size={23} strokeWidth={1.5} />

                      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border border-[#EBC47B] bg-[#B78337] md:hidden" />
                    </div>

                    {/* STEP DETAILS */}
                    <div className="pt-1 md:pt-0">
                      <span className="font-serif text-xl font-medium text-[#EFC477]">
                        {step.number}
                      </span>

                      <h3 className="mt-2 text-sm font-semibold text-[#F5E5C7] md:min-h-[40px] md:text-[13px]">
                        {step.title}
                      </h3>

                      <p className="mx-auto mt-2 max-w-[165px] text-xs leading-6 text-[#B9AA91]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

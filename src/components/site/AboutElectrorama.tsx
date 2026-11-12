
"use client";

import {
  Gem,
  Handshake,
  Users,
  Globe2,
  ArrowRight,
} from "lucide-react";
import speaker from "@/assets/projects/speaker2.jpg"
const stats = [
  {
    icon: Gem,
    number: "25+",
    label: "Years of Expertise",
  },
  {
    icon: Handshake,
    number: "500+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    number: "100+",
    label: "Premium Clients",
  },
  {
    icon: Globe2,
    number: "Pan India",
    label: "Presence",
  },
];

export default function AboutElectrorama() {
  return (
    <section className="relative overflow-hidden bg-[#100D09] text-[#F5E5C7]">

      {/* Background golden glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C18A37]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C18A37]/10 blur-[130px]" />

      {/* Decorative golden curves */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <path
            d="M-100 540 C250 300 400 750 750 450 S1200 300 1540 50"
            stroke="#C99A50"
            strokeWidth="1"
          />
          <path
            d="M-100 565 C250 325 400 775 750 475 S1200 325 1540 75"
            stroke="#C99A50"
            strokeWidth="1"
          />
          <path
            d="M-100 590 C250 350 400 800 750 500 S1200 350 1540 100"
            stroke="#C99A50"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1fr]">

          {/* LEFT IMAGE */}
          <div className="group relative min-h-[380px] overflow-hidden lg:min-h-[550px]">

            <img
              src={speaker}
              alt="Premium audio speaker system"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#100D09]" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#100D09]/40 via-transparent to-transparent" />

            {/* Gold side accent */}
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#D9A64F] to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-10 left-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E7B65F]">
                Experience the Difference
              </span>

              <div className="mt-3 h-[2px] w-16 bg-[#D6A34D]" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center px-7 py-16 sm:px-12 lg:px-14 xl:px-16">

            <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1fr_175px] xl:gap-8">

              {/* ABOUT CONTENT */}
              <div>

                <span className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#D6A34D]">
                  <span className="h-px w-8 bg-[#C49547]" />
                  About Electrorama
                </span>

                <h2 className="max-w-[550px] font-serif text-4xl font-medium leading-[1.13] text-[#F5E5C7] sm:text-5xl">
                  Engineering
                  <br />
                  Immersive Experiences
                </h2>

                <p className="mt-6 max-w-[480px] text-sm leading-7 text-[#B9AA91]">
                  With a passion for innovation and a commitment to quality,
                  Electrorama brings world-class audio visual technology
                  to help you create unforgettable experiences.
                </p>

                <p className="mt-3 max-w-[480px] text-sm leading-7 text-[#B9AA91]">
                  From advanced cinema systems and auditorium acoustics
                  to large-format LED displays and integrated AV solutions,
                  we transform spaces through the power of technology.
                </p>

                <a
                  href="/about"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#C18C3C] px-6 py-3 text-xs font-semibold text-[#EBC47D] transition-all duration-300 hover:bg-[#C18C3C] hover:text-[#160F08]"
                >
                  Know More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-8 border-t border-[#B88B49]/30 pt-8 xl:grid-cols-1 xl:gap-y-7 xl:border-l xl:border-t-0 xl:pl-7 xl:pt-0">

                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="group flex items-center gap-3"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C18C3C]/40 text-[#E5B35B] transition-all duration-300 group-hover:border-[#E5B35B] group-hover:bg-[#C18C3C]/10">
                        <Icon size={23} strokeWidth={1.4} />
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-[#E9BD72]">
                          {stat.number}
                        </h3>

                        <p className="mt-1 text-[11px] text-[#BDAE96]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

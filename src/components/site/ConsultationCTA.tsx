
"use client";

import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#100D09] text-[#F5E5C7]">

      {/* Golden Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#C18A37]/15 blur-[130px]" />

      {/* Golden Wave Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <svg
          viewBox="0 0 1440 450"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <path
            d="M-100 350 C180 100 400 500 700 280 S1200 100 1540 300"
            stroke="#D6A34D"
            strokeWidth="1"
          />
          <path
            d="M-100 370 C180 120 400 520 700 300 S1200 120 1540 320"
            stroke="#D6A34D"
            strokeWidth="1"
          />
          <path
            d="M-100 390 C180 140 400 540 700 320 S1200 140 1540 340"
            stroke="#D6A34D"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        <div className="grid grid-cols-1 items-center lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT CINEMATIC IMAGE */}
          <div className="group relative h-[260px] overflow-hidden sm:h-[340px] lg:h-[330px]">

            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90"
              alt="Luxury home theatre and AV entertainment space"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-[#100D09]" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute bottom-7 left-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F0C477]">
                Your Vision. Our Technology.
              </span>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex flex-col justify-center gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10 xl:px-14">

            {/* CONTACT INFORMATION */}
            <div className="max-w-[470px]">

              <span className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D6A34D]">
                <span className="h-px w-8 bg-[#C49547]" />
                Let's Connect
              </span>

              <h2 className="font-serif text-3xl font-medium leading-[1.15] text-[#F5E5C7] sm:text-4xl">
                Let's Build Your
                <br />
                <span className="text-[#E8B967]">
                  Next AV Experience
                </span>
              </h2>

              <p className="mt-4 max-w-[430px] text-sm leading-6 text-[#B9AA91]">
                Tell us about your project and our experts will help you
                create an extraordinary audio visual experience.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">

                <a
                  href="tel:+919876543210"
                  className="group flex items-center gap-2 text-xs text-[#E9D8B9] transition-colors hover:text-[#E8B967]"
                >
                  <Phone size={16} className="text-[#D6A34D]" />
                  +91 98765 43210
                </a>

                <a
                  href="mailto:info@electrorama.com"
                  className="group flex items-center gap-2 text-xs text-[#E9D8B9] transition-colors hover:text-[#E8B967]"
                >
                  <Mail size={16} className="text-[#D6A34D]" />
                  info@electrorama.com
                </a>

                <div className="flex items-center gap-2 text-xs text-[#E9D8B9]">
                  <MapPin size={16} className="shrink-0 text-[#D6A34D]" />
                  Mumbai | Delhi | Bengaluru | Hyderabad
                </div>

              </div>
            </div>

            {/* CONSULTATION BUTTON */}
            <div className="shrink-0">

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D39A48] to-[#F3CB82] px-7 py-4 text-xs font-bold text-[#211508] shadow-[0_0_25px_rgba(206,151,67,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(206,151,67,0.35)]"
              >
                Request a Consultation

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <p className="mt-4 text-center text-[9px] uppercase tracking-[0.2em] text-[#A89576]">
                Let's Create Something Extraordinary
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

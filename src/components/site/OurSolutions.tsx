
"use client";


import {
  Film,
  Speaker,
  MonitorPlay,
  Building2,
  AudioWaveform,
  House,
  ArrowRight,
} from "lucide-react";

import pvrImg from "@/assets/projects/pvr-mumbai.jpg";
import inoxImg from "@/assets/projects/inox-bengaluru.jpg";
import cinepolisImg from "@/assets/projects/cinepolis-hyderabad.jpg";
import corporateImg from "@/assets/projects/corporate-gurugram.jpg";

const solutions = [
  {
    title: "Cinema Solutions",
    image: pvrImg,
    icon: Film,
    description:
      "Immersive cinema experiences with stunning visuals and powerful sound.",
    href: "#contact",
  },
  {
    title: "Auditorium Sound Systems",
    image: inoxImg,
    icon: Speaker,
    description:
      "High-performance audio systems for auditoriums and theatres.",
     href: "#contact",
  },
  {
    title: "LED Video Walls",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85",
    icon: MonitorPlay,
    description:
      "Cutting-edge LED displays for every environment.",
    href: "#contact",
  },
  {
    title: "Corporate & Hospitality AV",
    image: corporateImg,
    icon: Building2,
    description:
      "Smart AV solutions for corporate and hospitality spaces.",
   href: "#contact",
  },
  {
    title: "Sound & Acoustic Design",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=700&q=85",
    icon: AudioWaveform,
    description:
      "Acoustic design and treatment for perfect sound experiences.",
    href: "#contact",
  },
  {
    title: "Home Theatre Solutions",
    image: cinepolisImg,
    icon: House,
    description:
      "Transform your home into a premium entertainment destination.",
    href: "#contact",
  },
];

export default function OurSolutions() {
  return (
    <section id="solutions"  className="relative overflow-hidden bg-[#F1DFBF] py-20 md:py-24" >

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#D5A04A]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#C58B35]/10 blur-[100px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden opacity-20">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full border border-[#B17A2D]" />
        <div className="absolute -left-28 top-24 h-80 w-80 rounded-full border border-[#B17A2D]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full border border-[#B17A2D]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[230px_1fr] xl:grid-cols-[260px_1fr] xl:gap-12">

          {/* LEFT CONTENT */}
          <div className="max-w-[340px]">

            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#9C6925]">
              <span className="h-px w-8 bg-[#B78945]" />
              Our Solutions
            </span>

            <h2 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#21180F] md:text-[48px]">
              Transform
              <br />
              Your Space
            </h2>

            <p className="mt-5 max-w-[290px] text-sm leading-7 text-[#62513D]">
              From boardrooms to grand auditoriums, we deliver
              cutting-edge AV solutions that inspire, engage and perform.
            </p>

           <a
  href="#contact"
  className="group mt-7 inline-flex items-center gap-3 rounded-full border border-[#A8752F] px-6 py-3 text-xs font-semibold text-[#392713] transition-all duration-300 hover:bg-[#A8752F] hover:text-white"
>
  Explore Solutions
  <ArrowRight size={15} />
</a>

          </div>

          {/* RIGHT SOLUTION CARDS */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6 xl:gap-3">

            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <a
  href={solution.href}
  key={solution.title}
                  className="group relative flex h-[255px] flex-col justify-end overflow-hidden rounded-xl border border-[#B58A4C]/40 bg-[#21180F] shadow-[0_8px_20px_rgba(49,30,10,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(49,30,10,0.25)] sm:h-[275px] xl:h-[285px]"
                >

                  {/* IMAGE */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${solution.image}")`,
                    }}
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100B06] via-[#160F08]/65 to-black/10 transition-all duration-500 group-hover:via-[#160F08]/45" />

                  {/* GOLD GLOW */}
                  <div className="absolute -bottom-16 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-[#D49A42]/20 blur-3xl transition-all duration-500 group-hover:bg-[#D49A42]/40" />

                  {/* CONTENT */}
                  <div className="relative z-10 p-3.5 sm:p-4">

                    {/* ICON */}
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#E6B65E]/60 bg-black/20 text-[#EFC477] backdrop-blur-sm transition-all duration-300 group-hover:border-[#F5CE82] group-hover:bg-[#D49A42]/20 sm:h-12 sm:w-12">
                      <Icon size={23} strokeWidth={1.4} />
                    </div>

                    {/* TITLE */}
                    <h3 className="min-h-[42px] font-serif text-[15px] font-medium leading-tight text-[#FFF0D2] sm:text-base">
                      {solution.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 line-clamp-3 text-[10px] leading-[1.6] text-[#E0D1B8] sm:text-[11px]">
                      {solution.description}
                    </p>

                    {/* ARROW */}
                    <div className="mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#D8A54E] text-[#211508] transition-all duration-300 group-hover:w-9 group-hover:bg-[#F5D18D]">
                      <ArrowRight size={14} />
                    </div>

                  </div>

                  {/* GOLD TOP BORDER */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#EFC477] transition-all duration-500 group-hover:w-full" />

                </a>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

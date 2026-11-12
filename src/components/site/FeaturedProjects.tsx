
"use client";

import pvrImg from "@/assets/projects/pvr-mumbai.jpg";
import inoxImg from "@/assets/projects/inox-bengaluru.jpg";
import cinepolisImg from "@/assets/projects/cinepolis-hyderabad.jpg";
import corporateImg from "@/assets/projects/corporate-gurugram.jpg";

import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "PVR ICON",
    location: "Mumbai, Maharashtra",
    category: "Premium Cinema",
    image: pvrImg,
  },
  {
    title: "INOX",
    location: "Bengaluru, Karnataka",
    category: "Cinema Experience",
    image: inoxImg,
  },
  {
    title: "Cinepolis",
    location: "Hyderabad, Telangana",
    category: "Luxury Auditorium",
    image: cinepolisImg,
  },
  {
    title: "Corporate AV Setup",
    location: "Gurugram, Haryana",
    category: "Corporate Solutions",
    image: corporateImg,
  },
];

export default function FeaturedProjects() {
  // Duplicate projects for seamless infinite scrolling
  const marqueeProjects = [...projects, ...projects];

  return (
    <section className="relative overflow-hidden bg-[#F1DFBF] py-16 md:py-20">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D5A04A]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <span className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#96651F]">
              <span className="h-px w-8 bg-[#B78945]" />
              Featured Projects
            </span>

            <h2 className="font-serif text-4xl font-medium leading-tight text-[#21180F] md:text-[48px]">
              Our Work
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#62513D]">
              Discover our portfolio of extraordinary audio visual
              installations and immersive entertainment spaces.
            </p>
          </div>

          <a
            href="#projects"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#A8752F] px-6 py-3 text-xs font-semibold text-[#392713] transition-all duration-300 hover:bg-[#A8752F] hover:text-white"
          >
            View All Projects
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>

        {/* AUTO SCROLL CAROUSEL */}
        <div className="project-marquee relative">

          <div className="project-marquee-track flex w-max gap-5">

            {marqueeProjects.map((project, index) => (
              <a
                href="
                #contact"
                key={`${project.title}-${index}`}
                aria-hidden={index >= projects.length}
                tabIndex={index >= projects.length ? -1 : 0}
                className="project-card group relative h-[260px] w-[290px] shrink-0 overflow-hidden rounded-xl border border-[#B58A4C]/40 bg-[#21180F] shadow-[0_8px_22px_rgba(49,30,10,0.15)] sm:h-[300px] sm:w-[340px] lg:h-[320px] lg:w-[370px]"
              >

                {/* PROJECT IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100B06]/95 via-[#100B06]/15 to-transparent" />

                {/* GOLD LIGHT EFFECT */}
                <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-[#E9B85F]/70" />

                {/* TOP CATEGORY */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-[#E8BD76]/50 bg-black/35 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F3D49A] backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* PROJECT NUMBER */}
                <span className="absolute right-5 top-5 font-serif text-lg text-[#F0C477]">
                  {String((index % projects.length) + 1).padStart(2, "0")}
                </span>

                {/* PROJECT DETAILS */}
                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">

                  <div className="mb-3 h-px w-10 bg-[#D6A34D] transition-all duration-500 group-hover:w-20" />

                  <div className="flex items-end justify-between gap-3">

                    <div>
                      <h3 className="font-serif text-2xl font-medium text-[#FFF0D2] sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-2 flex items-center gap-2 text-xs text-[#E0D1B8]">
                        <MapPin size={13} className="text-[#E5B35B]" />
                        {project.location}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7B45E]/70 text-[#F1C477] transition-all duration-300 group-hover:bg-[#D49A42] group-hover:text-[#211508]">
                      <ArrowUpRight size={19} />
                    </div>

                  </div>
                </div>

              </a>
            ))}

          </div>
        </div>

        {/* BOTTOM LABEL */}
        <div className="mt-7 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#92744B]">
            A Showcase of Excellence
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-[#92744B]">
            Hover to Pause
          </span>
        </div>

      </div>
    </section>
  );
}

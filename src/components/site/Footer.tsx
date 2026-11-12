
"use client";

import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Solutions", href: "#solutions" },
  { name: "Projects", href: "#projects" },
  { name: "Our Process", href: "#process" },
  { name: "Contact Us", href: "#contact" },
];

const solutions = [
  { name: "Cinema Solutions", href: "/solutions/cinema" },
  { name: "Auditorium Sound", href: "/solutions/auditorium" },
  { name: "LED Video Walls", href: "/solutions/led-video-walls" },
  { name: "Corporate AV", href: "/solutions/corporate" },
  { name: "Acoustic Design", href: "/solutions/acoustic" },
  { name: "Home Theatre", href: "/solutions/home-theatre" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#100D09] text-[#EADCC3]">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#C18A37]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C18A37]/10 blur-[130px]" />

      {/* Top golden line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C99A50] to-transparent" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:gap-10 lg:py-20">

          {/* BRAND */}
          <div>

            <a href="/" className="inline-block">
              <span className="font-serif text-3xl font-semibold tracking-[0.12em] text-[#E8BC70]">
                ELECTRORAMA
              </span>

              <span className="mt-1 block text-[9px] uppercase tracking-[0.42em] text-[#B7A487]">
                Sound · Vision · Experience
              </span>
            </a>

            <p className="mt-6 max-w-[310px] text-sm leading-7 text-[#B8AA94]">
              Creating extraordinary audio visual experiences through
              innovative technology, premium products and expert
              integration.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">

              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B58A4C]/40 text-[#DDB66F] transition-all duration-300 hover:border-[#EBC47B] hover:bg-[#C18A37] hover:text-[#171008]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#EAC47D]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-[#B8AA94] transition-colors duration-300 hover:text-[#EBC47B]"
                  >
                    <span className="h-px w-0 bg-[#D5A04A] transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#EAC47D]">
              Our Solutions
            </h3>

            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <a
                    href={solution.href}
                    className="group flex items-center gap-2 text-sm text-[#B8AA94] transition-colors duration-300 hover:text-[#EBC47B]"
                  >
                    <span className="h-px w-0 bg-[#D5A04A] transition-all duration-300 group-hover:w-4" />
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#EAC47D]">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <a
                href="tel:+919876543210"
                className="group flex items-start gap-3 text-sm text-[#B8AA94] transition-colors hover:text-[#EBC47B]"
              >
                <Phone size={17} className="mt-1 shrink-0 text-[#D5A04A]" />
                <span>
                  Call Us
                  <span className="mt-1 block">+91 98765 43210</span>
                </span>
              </a>

              <a
                href="mailto:info@electrorama.com"
                className="group flex items-start gap-3 text-sm text-[#B8AA94] transition-colors hover:text-[#EBC47B]"
              >
                <Mail size={17} className="mt-1 shrink-0 text-[#D5A04A]" />
                <span>
                  Email Us
                  <span className="mt-1 block break-all">
                    info@electrorama.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-[#B8AA94]">
                <MapPin size={17} className="mt-1 shrink-0 text-[#D5A04A]" />
                <span>
                  Our Presence
                  <span className="mt-1 block leading-6">
                    Mumbai, India
                  </span>
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* NEWSLETTER / GOLD DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#A77C3C]/60 to-transparent" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-[#988B76]">
            © {new Date().getFullYear()} Electrorama. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="/privacy-policy"
              className="text-xs text-[#988B76] transition-colors hover:text-[#EBC47B]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-xs text-[#988B76] transition-colors hover:text-[#EBC47B]"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B58A4C]/50 text-[#EBC47B] transition-all duration-300 hover:bg-[#C18A37] hover:text-[#171008]"
          >
            <ArrowUp size={17} />
          </button>

        </div>

      </div>
    </footer>
  );
}

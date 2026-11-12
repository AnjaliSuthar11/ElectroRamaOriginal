import { useEffect, useState } from "react";
import { Menu, Speaker, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Brands", href: "#brands" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "oklch(0.12 0.012 70 / 88%)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid oklch(0.78 0.1 85 / 18%)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo */}
         

        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md   ">
            {/* <Speaker className="h-5 w-5 text-gold" strokeWidth={1.75} /> */}
           <img className="w-10" src="/favicon.ico" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-[0.22em] text-foreground">
              ELECTRORAMA<span className="text-gold"> </span>
            </span>
            <span className="block text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
              Sound · Screens · Cinema
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-md bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-5 py-2.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_0_24px_-6px_oklch(0.8_0.14_85/70%)] transition-all hover:brightness-110 hover:shadow-[0_0_30px_-4px_oklch(0.85_0.13_88/80%)]"
          >
            Get a Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t border-gold/20 px-5 pb-6 pt-3 lg:hidden"
          style={{ background: "oklch(0.12 0.012 70 / 97%)" }}
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-accent hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-md bg-gradient-to-r from-gold-deep via-gold to-gold-bright px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

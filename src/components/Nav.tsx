import { useEffect, useState } from "react";
import logo from "../assets/logoterbaru.png";

const LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#pendekatan", label: "Pendekatan" },
  { href: "#layanan", label: "Layanan" },
  { href: "#rekam-jejak", label: "Rekam Jejak" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-ink/10" : "bg-paper/95 backdrop-blur border-b border-ink/10"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center focus-ring">
          <img 
            src={logo} 
            alt="RA and Partners Logo" 
            className="h-12 w-auto md:h-16 object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 md:gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] md:text-[13px] uppercase tracking-widest2 text-ink/70 hover:text-brass transition-colors focus-ring"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="text-[11px] md:text-[13px] uppercase tracking-widest2 border border-ink px-3 md:px-4 py-2 text-ink hover:bg-ink hover:text-paper transition-colors focus-ring"
          >
            Konsultasi
          </a>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 focus-ring"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-paper border-t border-ink/10 px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest2 text-ink/80 focus-ring"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

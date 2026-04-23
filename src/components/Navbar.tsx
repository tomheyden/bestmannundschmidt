"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Coaching", href: "/coaching" },
  { label: "Training & Beratung", href: "/beratung" },
  { label: "Mediation", href: "/mediation" },
  { label: "Über mich", href: "/about" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "backdrop-blur-md bg-ivory/70 border-b border-navy/10"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container-editorial flex items-center justify-between h-24 md:h-28">
          <Link href="/" className="flex items-center group" aria-label="Karen Bestmann — Startseite">
            <Image
              src="/Logo_karenbestmann.svg"
              alt="Karen Bestmann — Coaching, Mediation, Training"
              width={311}
              height={153}
              priority
              className="h-12 md:h-14 w-auto transition-opacity duration-500 group-hover:opacity-80"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline text-[13px] tracking-wide text-navy/80 hover:text-navy font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/kontakt"
            className="hidden lg:inline-flex label text-navy link-underline link-underline-reverse"
          >
            Erstgespräch anfragen
          </Link>

          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-navy"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 gradient-navy" />
        <div className="relative h-full container-editorial pt-28 pb-16 flex flex-col justify-between">
          <nav className="flex flex-col gap-5">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[clamp(2rem,6vw,3.25rem)] leading-tight tracking-[-0.02em] text-ivory/95 font-light"
                style={{
                  transform: open ? "translateY(0)" : "translateY(24px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 700ms cubic-bezier(0.22,1,0.36,1) ${120 + i * 60}ms, opacity 700ms cubic-bezier(0.22,1,0.36,1) ${120 + i * 60}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 text-ivory/70">
            <span className="label">Sprechen wir miteinander</span>
            <a href="mailto:kontakt@karenbestmann.de" className="link-underline text-ivory">
              kontakt@karenbestmann.de
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

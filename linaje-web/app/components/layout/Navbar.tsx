"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "@/app/components/ui/NavLink";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/collection", label: "Colección" },
  { href: "/about", label: "Esencia" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F3]/80 backdrop-blur supports-[backdrop-filter]:bg-[#F8F6F3]/70">
      <nav className="max-w-6xl mx-auto px-6 py-6">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-sm tracking-[0.35em] uppercase text-[#1A1A1A] hover:opacity-80 transition"
            aria-label="Linaje - Inicio"
          >
            Linaje
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="md:hidden text-xs tracking-[0.22em] uppercase border border-[#1A1A1A] px-4 py-2 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>

        {/* Divider Line */}
        <div className="mt-6 h-px w-full bg-[#D9CFC7]" />

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pt-6 pb-2 flex flex-col gap-6">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                variant="mobile"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}

      </nav>
    </header>
  );
}
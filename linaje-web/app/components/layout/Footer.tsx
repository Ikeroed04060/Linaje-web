import NavLink from "@/app/components/ui/NavLink";
import { Instagram, Music, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const iconLinkClass =
    "group text-[#6A6A6A] transition-all duration-300 hover:text-[#6B5C4E] " +
    "focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6B5C4E]/60 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFE9]";

  const iconClass =
    "transition-all duration-300 group-hover:-translate-y-[1px] " +
    "group-hover:drop-shadow-[0_0_10px_rgba(107,92,78,0.25)]";

  return (
    <footer className="bg-[#F5EFE9] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Línea superior */}
        <div className="h-px w-full bg-[#D9CFC7] mb-14" />

        {/* Logo grande centrado */}
        <div className="text-center mb-14">
          <p className="text-2xl md:text-3xl tracking-[0.6em] uppercase text-[#1A1A1A]">
            Linaje
          </p>

          <p className="mt-6 text-xs tracking-[0.35em] uppercase text-[#6B5C4E]">
            Tu identidad no se crea, se revela.
          </p>
        </div>

        {/* Contenido inferior */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Navegación */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#1A1A1A] mb-4">
              Navegación
            </p>
            <div className="h-px w-10 bg-[#D9CFC7] mb-6" />

            <div className="flex flex-col gap-4">
              <NavLink href="/">Inicio</NavLink>
              <NavLink href="/collection">Colección</NavLink>
              <NavLink href="/about">Esencia</NavLink>
              <NavLink href="/contact">Contacto</NavLink>
            </div>
          </div>

          {/* Líneas */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#1A1A1A] mb-4">
              Líneas
            </p>
            <div className="h-px w-10 bg-[#D9CFC7] mb-6" />

            <div className="flex flex-col gap-4">
              <NavLink href="/collection">Linaje Wear</NavLink>
              <NavLink href="/collection">Linaje ART</NavLink>
              <NavLink href="/collection">Accesorios &amp; Bolsos</NavLink>
              <NavLink href="/collection">Linaje Pure</NavLink>
            </div>
          </div>

          {/* Conecta */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#1A1A1A] mb-4">
              Conecta
            </p>
            <div className="h-px w-10 bg-[#D9CFC7] mb-6" />

            <div className="flex items-center gap-5">
              {/* Correo */}
              <a
                href="mailto:contacto@linaje.co"
                aria-label="Enviar correo"
                className={iconLinkClass}
              >
                <Mail size={26} className={iconClass} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={iconLinkClass}
              >
                <Instagram size={26} className={iconClass} />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className={iconLinkClass}
              >
                <Music size={26} className={iconClass} />
              </a>

              {/* WhatsApp (cambia el número) */}
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className={iconLinkClass}
              >
                <MessageCircle size={26} className={iconClass} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="h-px w-full bg-[#D9CFC7] mt-14 mb-8" />

        {/* Copy final */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs text-[#6A6A6A]">
            © {new Date().getFullYear()} Linaje. Todos los derechos reservados.
          </p>

          <p className="text-xs text-[#6A6A6A]">
            Desarrollado con intención{" "}
            <span className="tracking-[0.15em] text-[#1A1A1A]">
              -Ikeroed04060
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
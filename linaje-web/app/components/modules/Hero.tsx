import Image from "next/image";
import Button from "@/app/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Contenedor alto del Hero */}
      <div className="relative h-[88vh] min-h-[640px]">
        
        {/* Imagen de fondo */}
        <Image
          src="/hero/hero-01.jpeg"
          alt="Linaje"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay para que el texto se lea */}
        <div className="absolute inset-0 bg-[#F3ECE4]/75" />
        {/* Si quieres un toque más editorial, usa esto en vez de lo anterior:
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F3]/75 via-[#F8F6F3]/55 to-[#F8F6F3]/80" />
        */}

        {/* Contenido */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-[#6B5C4E] mb-6">
              Tu identidad no se crea, se revela.
            </p>

            <h1 className="text-5xl md:text-6xl font-light tracking-wide text-[#1A1A1A] mb-8">
              Viste lo que ya eres
            </h1>

            <p className="max-w-3xl mx-auto text-[#5E5E5E] text-lg leading-relaxed mb-12">
              Linaje nace para recordarte que tu identidad no se construye, se expresa.
              Cada prenda, cada pieza y cada trazo refleja una verdad que ya habita en ti.
            </p>

            <Button href="/collection" variant="outline">
              Descubrir colección
            </Button>
          </div>
        </div>
      </div>

      {/* Línea editorial debajo */}
      <div className="h-px w-full bg-[#D9CFC7]" />
    </section>
  );
}
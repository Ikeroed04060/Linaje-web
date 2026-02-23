import Image from "next/image";
import Button from "@/app/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="px-6 py-24 bg-[#F5EFE9]">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[#6A6A6A] mb-4">
            Nuestra esencia
          </p>

          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] mb-6">
            No diseñamos moda, revelamos identidad
          </h2>

          <p className="text-[#5E5E5E] leading-relaxed mb-10">
            Linaje viste personas conforme a la esencia que son. Ropa, arte,
            accesorios y piezas creadas con intención… para expresar una
            identidad verdadera.
          </p>

          <Button href="/about" variant="outline">
            Conoce nuestra historia
          </Button>
        </div>

        {/* Imagen */}
        <div className="relative h-[380px] md:h-[460px] overflow-hidden rounded-2xl">
          <Image
            src="/about/about-01.jpeg"
            alt="Linaje - Nuestra esencia"
            fill
            className="object-cover object-center"
          />

          {/* Velo beige sutil para que se mantenga la estética */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3ECE4]/35 via-transparent to-[#F3ECE4]/45" />
        </div>
      </div>
    </section>
  );
}
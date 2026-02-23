"use client";

import { useEffect, useMemo, useState } from "react";
import ValueCard from "@/app/components/ui/ValueCard";

export default function Values() {
  const items = useMemo(
    () => [
      {
        title: "Esencia",
        description:
          "Vestir con coherencia: lo que eres por dentro, se refleja por fuera.",
       // imageSrc: "/values/esencia.jpg", // puedes cambiar o quitar
      },
      {
        title: "Propósito",
        description:
          "Piezas creadas con intención, para acompañar tu camino y tu verdad.",
        //imageSrc: "/values/proposito.jpg",
      },
      {
        title: "Arte",
        description:
          "Textil, trazo y detalle como lenguaje para expresar identidad.",
        //imageSrc: "/values/arte.jpg",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  // Más lento + más notorio
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5200); // antes 3500. Ahora más lento

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="px-6 py-24 bg-[#F8F6F3]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-[#6A6A6A] mb-4">
          Lo que defendemos
        </p>

        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] mb-6">
          Más que vestir, expresar verdad
        </h2>

        <p className="max-w-2xl text-[#5E5E5E] leading-relaxed mb-12">
          Linaje es lenguaje: prendas, arte y piezas que sostienen tu identidad con intención.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((it, idx) => (
            <ValueCard
              key={it.title}
              title={it.title}
              description={it.description}
            //  imageSrc={it.imageSrc}
              imageAlt={`Linaje - ${it.title}`}
              active={idx === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
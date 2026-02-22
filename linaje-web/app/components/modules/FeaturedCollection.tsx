"use client";

import { useEffect, useMemo, useState } from "react";
import Button from "@/app/components/ui/button";

type Item = {
  name: string;
  desc: string;
};

export default function FeaturedCollection() {
  const initialItems: Item[] = useMemo(
    () => [
      { name: "Linaje Wear", desc: "Prendas que representan tu esencia." },
      { name: "Linaje ART", desc: "Arte pintado a mano sobre tela." },
      { name: "Accesorios & Bolsos", desc: "Piezas tejidas con intención." },
      { name: "Linaje Pure", desc: "Nuestra línea íntima y delicada." },
    ],
    []
  );

  const [items, setItems] = useState<Item[]>(initialItems);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Ajustes de “sensación”
  const DURATION_MS = 650;  // duración animación
  const INTERVAL_MS = 3200; // velocidad (más lento)
  const SHIFT_PX = 380;     // “ancho” visual por tarjeta

  const next = () => {
    if (animating) return;
    setAnimating(true);

    // 1) animamos el track hacia la izquierda (para dar sensación de avanzar a la derecha)
    // 2) cuando termina, rotamos el array y volvemos el track a 0 sin que se note
    setTimeout(() => {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setAnimating(false);
    }, DURATION_MS);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setItems((prev) => {
        const copy = [...prev];
        const last = copy.pop()!;
        return [last, ...copy];
      });
      setAnimating(false);
    }, DURATION_MS);
  };

  // Auto-play: siempre “hacia la derecha”
  useEffect(() => {
    const t = setInterval(() => {
      if (!paused) next();
    }, INTERVAL_MS);

    return () => clearInterval(t);
  }, [paused, animating]);

  return (
    <section className="px-6 py-24 bg-[#F8F6F3]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#6A6A6A] mb-3">
              Colección
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A]">
              Piezas que hablan en silencio
            </h2>
          </div>

          <Button href="/collection" variant="outline">
            Ver colección
          </Button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-[#6A6A6A]">
            Diferentes expresiones, una misma verdad.
          </p>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
              aria-label="Anterior"
              type="button"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
              aria-label="Siguiente"
              type="button"
            >
              →
            </button>
          </div>
        </div>

        {/* Viewport (sin scrollbar) */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="overflow-hidden"
        >
          {/* Track */}
          <div
            className="flex gap-8"
            style={{
              transform: animating ? `translateX(-${SHIFT_PX}px)` : "translateX(0px)",
              transition: animating ? `transform ${DURATION_MS}ms ease-in-out` : "none",
              willChange: "transform",
            }}
          >
            {/* Renderizamos 5 tarjetas para que el movimiento se sienta continuo */}
            {[...items, items[0]].map((item, idx) => (
              <article
                key={`${item.name}-${idx}`}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px]"
              >
                <div className="h-[320px] bg-[#E7DDD3] mb-5" />
                <h3 className="text-lg tracking-wide text-[#1A1A1A] mb-2">
                  {item.name}
                </h3>
                <p className="text-[#5E5E5E] leading-relaxed">{item.desc}</p>
                <div className="mt-4 text-xs tracking-[0.25em] uppercase text-[#6A6A6A] hover:text-[#1A1A1A] transition">
                  Explorar
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
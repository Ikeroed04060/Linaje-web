"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/button";

type Item = {
  name: string;
  desc: string;
  imageSrc: string;
};

export default function FeaturedCollection() {
  const initialItems: Item[] = useMemo(
    () => [
      {
        name: "Linaje Wear",
        desc: "Prendas que representan tu esencia.",
        imageSrc: "/collection/wear.jpeg",
      },
      {
        name: "Linaje ART",
        desc: "Arte pintado a mano sobre tela.",
        imageSrc: "/collection/art.jpeg",
      },
      {
        name: "Linaje Atelier",
        desc: "Piezas fabricadas con intención.",
        imageSrc: "/collection/atelier.jpeg",
      },
      {
        name: "Linaje Pure",
        desc: "Nuestra línea íntima y delicada.",
        imageSrc: "/collection/pure.png",
      },
    ],
    []
  );

  const [items, setItems] = useState<Item[]>(initialItems);
  const [paused, setPaused] = useState(false);

  // 🎯 Ajuste equilibrado
  const DURATION_MS = 900;
  const [intervalMs, setIntervalMs] = useState(4200);

  const [shiftPx, setShiftPx] = useState(380);
  const [bufferCount, setBufferCount] = useState(2);

  const [animating, setAnimating] = useState(false);
  const [transitionOn, setTransitionOn] = useState(true);
  const [offsetPx, setOffsetPx] = useState(0);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLElement | null>(null);

  // 🎯 Velocidad equilibrada móvil/desktop
  useEffect(() => {
    const update = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setIntervalMs(isMobile ? 5600 : 4200);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const calc = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const first = firstCardRef.current;
      if (!viewport || !track || !first) return;

      const cardW = first.getBoundingClientRect().width;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.gap || "0");
      const total = cardW + gap;

      if (!Number.isFinite(total) || total <= 0) return;

      setShiftPx(total);

      const visible = Math.ceil(viewport.clientWidth / total);
      setBufferCount(Math.max(2, visible + 1));
    };

    calc();
    window.addEventListener("resize", calc, { passive: true });
    const t = window.setTimeout(calc, 300);

    return () => {
      window.removeEventListener("resize", calc);
      window.clearTimeout(t);
    };
  }, []);

  const renderItems = useMemo(() => {
    const left = items.slice(-bufferCount);
    const right = items.slice(0, bufferCount);
    return [...left, ...items, ...right];
  }, [items, bufferCount]);

  const baseTranslate = -bufferCount * shiftPx;

  const goNext = () => {
    if (animating) return;
    setAnimating(true);

    setTransitionOn(true);
    setOffsetPx(baseTranslate - shiftPx);

    window.setTimeout(() => {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });

      setTransitionOn(false);
      setOffsetPx(baseTranslate);

      requestAnimationFrame(() => {
        setTransitionOn(true);
        setAnimating(false);
      });
    }, DURATION_MS);
  };

  const goPrev = () => {
    if (animating) return;
    setAnimating(true);

    setTransitionOn(true);
    setOffsetPx(baseTranslate + shiftPx);

    window.setTimeout(() => {
      setItems((prev) => {
        const copy = [...prev];
        const last = copy.pop()!;
        return [last, ...copy];
      });

      setTransitionOn(false);
      setOffsetPx(baseTranslate);

      requestAnimationFrame(() => {
        setTransitionOn(true);
        setAnimating(false);
      });
    }, DURATION_MS);
  };

  useEffect(() => {
    const t = window.setInterval(() => {
      if (!paused) goNext();
    }, intervalMs);

    return () => window.clearInterval(t);
  }, [paused, intervalMs, animating, baseTranslate, shiftPx]);

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
              onClick={goPrev}
              disabled={animating}
              className="w-10 h-10 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition disabled:opacity-40"
              aria-label="Anterior"
              type="button"
            >
              ←
            </button>
            <button
              onClick={goNext}
              disabled={animating}
              className="w-10 h-10 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition disabled:opacity-40"
              aria-label="Siguiente"
              type="button"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-8 w-max"
            style={{
              transform: `translate3d(${offsetPx || baseTranslate}px, 0, 0)`,
              transition: transitionOn
                ? `transform ${DURATION_MS}ms ease-in-out`
                : "none",
              willChange: "transform",
            }}
          >
            {renderItems.map((item, idx) => (
              <article
                ref={
                  idx === bufferCount
                    ? (el) => {
                        firstCardRef.current = el;
                      }
                    : undefined
                }
                key={`${item.name}-${idx}`}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px]"
              >
                <div className="relative h-[320px] mb-5 overflow-hidden rounded-2xl">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

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
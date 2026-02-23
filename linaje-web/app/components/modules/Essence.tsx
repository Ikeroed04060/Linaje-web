"use client";

import FadeIn from "@/app/components/animations/FadeIn";

export default function Esencia() {
  return (
    <section className="px-6 py-32 bg-[#F8F6F3]">
      <div className="max-w-3xl mx-auto">

        {/* Apertura */}
        <FadeIn>
          <p className="text-xs tracking-[0.4em] uppercase text-[#6A6A6A] mb-8 text-center">
            Nuestra Esencia
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] text-center leading-tight mb-16">
            Hay cosas que no necesitan ser explicadas.
            <br />
            Solo reconocidas.
          </h1>
        </FadeIn>

        {/* Manifiesto */}
        <FadeIn delay={0.1}>
          <div className="space-y-8 text-[#5E5E5E] leading-relaxed text-lg">
            <p>
              Linaje no nace desde la prisa.
              Nace desde la quietud.
            </p>

            <p>
              No busca imponerse.
              Busca acompañar.
            </p>

            <p>
              Cada pieza es un gesto sutil.
              Una forma de recordar quién eres,
              incluso cuando el mundo intenta definirte.
            </p>
          </div>
        </FadeIn>

        {/* Origen */}
        <FadeIn delay={0.2}>
          <div className="border-t border-[#DDD3CA] mt-20 pt-20 space-y-6">
            <h2 className="text-2xl font-light text-[#1A1A1A]">
              Origen
            </h2>

            <p className="text-[#5E5E5E] leading-relaxed">
              Linaje surge desde una necesidad silenciosa:
              vestir coherencia.
              Que lo visible no contradiga lo invisible.
              Que lo externo no oculte lo esencial.
            </p>
          </div>
        </FadeIn>

        {/* Intención */}
        <FadeIn delay={0.3}>
          <div className="mt-20 space-y-6">
            <h2 className="text-2xl font-light text-[#1A1A1A]">
              Intención
            </h2>

            <p className="text-[#5E5E5E] leading-relaxed">
              Diseñamos desde la calma.
              Elegimos desde la intención.
              Cada textura, cada forma,
              cada decisión,
              responde a una pregunta simple:
            </p>

            <p className="italic text-[#6A6A6A]">
              ¿Refleja lo que permanece?
            </p>
          </div>
        </FadeIn>

        {/* Cierre */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-32">
            <p className="text-3xl font-light text-[#1A1A1A]">
              La forma cambia.
              <br />
              La esencia permanece.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
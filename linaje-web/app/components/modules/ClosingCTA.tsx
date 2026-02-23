import Button from "@/app/components/ui/button";

export default function ClosingCTA() {
  return (
    <section className="px-6 py-32 bg-[#F5EFE9]">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-xs tracking-[0.35em] uppercase text-[#6A6A6A] mb-6">
          Tu esencia no cambia
        </p>

        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] mb-8">
          Tu identidad ya fue declarada
        </h2>

        <p className="max-w-2xl mx-auto text-[#5E5E5E] leading-relaxed mb-12">
          Linaje no es una tendencia. Es una afirmación silenciosa
          de lo que ya eres. No se impone. No se fuerza.
          Se reconoce.
        </p>

        <Button href="/about" variant="outline">
          Nuestra Esencia
        </Button>

      </div>
    </section>
  );
}
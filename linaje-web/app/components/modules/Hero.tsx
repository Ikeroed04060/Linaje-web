import Button from "@/app/components/ui/button";

export default function Hero() {
  return (
    <section className="px-6 py-32 text-center bg-[#F8F6F3]">
      <div className="max-w-4xl mx-auto">

        {/* Frase inicial */}
        <p className="text-xs tracking-[0.35em] uppercase text-[#6B5C4E] mb-6">
          Tu identidad no se crea, se revela.
        </p>

        <h1 className="text-5xl md:text-6xl font-light tracking-wide text-[#1A1A1A] mb-8">
          Viste lo que ya eres
        </h1>

        <p className="text-[#5E5E5E] text-lg leading-relaxed mb-12">
          Linaje nace para recordarte que tu identidad no se construye,
          se expresa. Cada prenda, cada pieza y cada trazo refleja una verdad
          que ya habita en ti.
        </p>

        <Button href="/collection" variant="outline">
          Descubrir colección
        </Button>
      </div>
    </section>
  );
}
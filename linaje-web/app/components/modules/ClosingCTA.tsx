import Button from "@/app/components/ui/button";

export default function ClosingCTA() {
  return (
    <section className="px-6 py-24 bg-[#F5EFE9]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] mb-6">
  Tu identidad ya fue declarada
</h2>

<p className="max-w-2xl mx-auto text-[#5E5E5E] leading-relaxed mb-10">
  Linaje no es solo una marca. Es una expresión visible
  de una verdad invisible. Viste conforme a quien realmente eres.
</p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/collection" variant="outline">
            Ver colección
          </Button>
          <Button href="/contact" variant="soft">
            Contacto
          </Button>
        </div>
      </div>
    </section>
  );
}
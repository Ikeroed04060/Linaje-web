import Button from "@/app/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="px-6 py-24 bg-[#F5EFE9]">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[#6A6A6A] mb-4">
            Nuestra esencia
          </p>

          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] mb-6">
            No diseñamos moda, revelamos identidad
          </h2>

          <p className="text-[#5E5E5E] leading-relaxed mb-10">
            Linaje es una marca creada para vestir personas conforme
            a la esencia que son en el cielo. Ropa, accesorios, bolsos
            tejidos a mano y arte pintado sobre tela que comunica
            propósito, verdad y autenticidad.
          </p>

          <Button href="/about" variant="outline">
            Conoce nuestra historia
          </Button>
        </div>

        <div className="h-[360px] bg-[#E7DDD3]" />
      </div>
    </section>
  );
}
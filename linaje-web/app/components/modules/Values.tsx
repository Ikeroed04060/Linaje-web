const items = [
  {
    title: "Delicadeza",
    desc: "Detalles sutiles, líneas limpias y una presencia serena.",
  },
  {
    title: "Comodidad",
    desc: "Diseño pensado para acompañarte, sin imponerse.",
  },
  {
    title: "Pureza",
    desc: "Una estética clara, íntima y atemporal.",
  },
];

export default function Values() {
  return (
    <section className="px-6 py-24 bg-[#F8F6F3]">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-[#6A6A6A] mb-4">
          Lo que defendemos
        </p>

        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1A1A1A] mb-12">
           Más que vestir, expresar verdad
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="border border-[#DDD3CA] p-8">
              <h3 className="text-lg tracking-wide text-[#1A1A1A] mb-3">
                {it.title}
              </h3>
              <p className="text-[#5E5E5E] leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
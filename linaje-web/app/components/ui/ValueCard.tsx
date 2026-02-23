import Image from "next/image";
import clsx from "clsx";

type ValueCardProps = {
  title: string;
  description: string;
  imageSrc?: string;          // opcional: "/values/esencia.jpg"
  imageAlt?: string;
  active?: boolean;           // para “hover automático”
  className?: string;
};

export default function ValueCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  active = false,
  className,
}: ValueCardProps) {
  return (
    <article
      className={clsx(
        `
        relative overflow-hidden rounded-2xl
        border border-[#DDD3CA] bg-[#F8F6F3] p-8
        transition-all duration-500
        hover:-translate-y-[3px]
        hover:shadow-[0_16px_40px_rgba(107,92,78,0.14)]
        `,
        active &&
          `
          -translate-y-[3px]
          shadow-[0_16px_40px_rgba(107,92,78,0.16)]
          border-[#6B5C4E]/60
          `,
        className
      )}
    >
      {/* Imagen opcional de fondo */}
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center saturate-90 contrast-95"
          />

          {/* Velo beige para bajar brillo */}
          <div className="absolute inset-0 bg-[#F3ECE4]/78" />

          {/* Toque editorial sutil */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F3ECE4]/55" />
        </>
      )}

      {/* Contenido */}
      <div className="relative">
        <h3 className="text-lg tracking-wide text-[#1A1A1A] mb-3">
          {title}
        </h3>

        <p className="text-[#5E5E5E] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Brillo suave solo cuando está activa */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700",
          active && "opacity-100"
        )}
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(107,92,78,0.18), transparent 55%)",
        }}
      />
    </article>
  );
}
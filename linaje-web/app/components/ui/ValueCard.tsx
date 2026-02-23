import Image from "next/image";
import clsx from "clsx";

type ValueCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  active?: boolean;
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
        hover:-translate-y-[4px]
        hover:shadow-[0_22px_60px_rgba(214,197,178,0.95)]
        `,
        active &&
          `
          -translate-y-[4px]
          shadow-[0_22px_60px_rgba(214,197,178,1)]
          border-[#6B5C4E]/70
          `,
        className
      )}
    >
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center saturate-90 contrast-95"
          />

          <div className="absolute inset-0 bg-[#F3ECE4]/78" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F3ECE4]/55" />
        </>
      )}

      <div className="relative">
        <h3 className="text-lg tracking-wide text-[#1A1A1A] mb-3">
          {title}
        </h3>

        <p className="text-[#5E5E5E] leading-relaxed">
          {description}
        </p>
      </div>

      <div
        className={clsx(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700",
          active && "opacity-100"
        )}
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(214,197,178,0.6), transparent 55%)",
        }}
      />
    </article>
  );
}
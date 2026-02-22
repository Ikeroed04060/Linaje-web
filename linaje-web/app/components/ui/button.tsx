import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "soft";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "outline",
  className,
  type = "button",
}: ButtonProps) {
  const baseStyle =
  "inline-flex items-center justify-center px-10 py-4 text-sm " +
  "tracking-[0.2em] uppercase transition-all duration-300 " +
  "rounded-2xl " +
  "active:scale-95 " +
  "focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6B5C4E]/50 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F3]";
  const variants = {
    // Negro fuerte + halo café
    primary:
      "bg-[#1A1A1A] text-white " +
      "hover:bg-[#111111] " +
      "hover:shadow-[0_0_20px_rgba(107,92,78,0.35)]" +
      "active:shadow-[0_0_22px_rgba(107,92,78,0.45)]",

    // Borde negro + hover café en el borde/halo
    outline:
      "border border-[#1A1A1A] text-[#1A1A1A] " +
      "hover:border-[#6B5C4E] " +
      "hover:text-white hover:bg-[#1A1A1A] " +
      "hover:shadow-[0_0_20px_rgba(107,92,78,0.35)]" +
      "active:shadow-[0_0_22px_rgba(107,92,78,0.45)]",

    // Suave, con borde café y hover más cálido
    soft:
      "bg-[#EDE7E1] text-[#1A1A1A] border border-[#D9CFC7] " +
      "hover:bg-[#D8CFC6] hover:border-[#6B5C4E] " +
      "hover:shadow-[0_0_18px_rgba(107,92,78,0.25)]" +
      "active:shadow-[0_0_22px_rgba(107,92,78,0.45)]",
  };

  const styles = clsx(baseStyle, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  );
}
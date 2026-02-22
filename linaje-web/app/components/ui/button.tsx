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
    "px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-none";

  const variants = {
    primary:
      "bg-[#1A1A1A] text-white hover:opacity-80",

    outline:
      "border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",

    soft:
      "bg-[#EDE7E1] text-[#1A1A1A] hover:bg-[#D8CFC6]",
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
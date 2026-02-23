"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
};

export default function NavLink({
  href,
  children,
  variant = "desktop",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();

  // Activo exacto. Si luego quieres “startsWith” (para subrutas), te lo ajusto.
  const isActive = pathname === href;

  const base =
    "inline-block w-fit uppercase tracking-[0.22em] transition-all duration-300 ease-out";

  const underlineBase =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-[#6B5C4E] " +
    "after:transition-all after:duration-300";

  const desktop =
    `${underlineBase} text-xs ` +
    (isActive
      ? "text-[#1A1A1A] after:w-full"
      : "text-[#6A6A6A] after:w-0 hover:text-[#1A1A1A] hover:after:w-full");

  const mobile =
    `${underlineBase} text-xs ` +
    (isActive
      ? "text-[#1A1A1A] after:w-full"
      : "text-[#6A6A6A] after:w-0 active:text-[#1A1A1A] active:after:w-full");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(base, variant === "desktop" ? desktop : mobile)}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
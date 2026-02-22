"use client";

import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

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
  const [pressed, setPressed] = useState(false);

  // CLAVE: inline-block + w-fit para que el subrayado mida solo el texto
  const base =
    "inline-block w-fit uppercase tracking-[0.22em] transition-all duration-300 ease-out";

  const desktop =
    "relative text-xs text-[#6A6A6A] hover:text-[#1A1A1A] " +
    "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 " +
    "after:bg-[#6B5C4E] after:transition-all after:duration-300 " +
    "hover:after:w-full";

  const mobile = "text-xs text-[#6A6A6A] hover:text-[#1A1A1A]";

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={clsx(
        base,
        variant === "desktop" ? desktop : mobile,
        pressed &&
          "scale-95 text-[#1A1A1A] drop-shadow-[0_0_10px_rgba(107,92,78,0.35)]"
      )}
    >
      {children}
    </Link>
  );
}
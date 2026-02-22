import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Linaje",
  description: "Elegancia, pureza y feminidad consciente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-[#F8F6F3] text-[#1A1A1A] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
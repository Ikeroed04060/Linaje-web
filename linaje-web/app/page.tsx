"use client";

import Hero from "@/app/components/modules/Hero";
import AboutPreview from "@/app/components/modules/AboutPreview";
import Values from "@/app/components/modules/Values";
import FeaturedCollection from "@/app/components/modules/FeaturedCollection";
import ClosingCTA from "@/app/components/modules/ClosingCTA";
import FadeIn from "@/app/components/animations/FadeIn";

export default function Home() {
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn delay={0.05}>
        <AboutPreview />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Values />
      </FadeIn>

      <FadeIn delay={0.15}>
        <FeaturedCollection />
      </FadeIn>

      <FadeIn delay={0.2}>
        <ClosingCTA />
      </FadeIn>
    </>
  );
}
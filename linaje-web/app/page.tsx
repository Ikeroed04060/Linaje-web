import Hero from "@/app/components/modules/Hero";
import AboutPreview from "@/app/components/modules/AboutPreview";
import Values from "@/app/components/modules/Values";
import FeaturedCollection from "@/app/components/modules/FeaturedCollection";
import ClosingCTA from "@/app/components/modules/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Values />
      <FeaturedCollection />
      <ClosingCTA />
    </>
  );
}
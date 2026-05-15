import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { VibeSection } from "@/components/sections/VibeSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { TeachersSection } from "@/components/sections/TeachersSection";
import { MarqueeRibbon } from "@/components/layout/MarqueeRibbon";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { LotusDivider } from "@/components/effects/Ornaments";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasta La Vista 2026 — TMSL CSE & CSBS Dept Farewell" },
      { name: "description", content: "An immersive TMSL CSE & CSBS Department farewell experience for the 2026 passout batch — Hasta La Vista 2026." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <MarqueeRibbon />
      <StatsStrip />
      <VibeSection />
      <PillarsSection />
      <TeachersSection />

      <section id="register" className="relative px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl text-center glass-panel p-8 sm:p-12">
          <LotusDivider />
          <h2 className="mt-6 font-display text-4xl italic text-gradient-gold sm:text-6xl">
            Be Part of the Story
          </h2>
          <p className="mt-6 font-body text-sm text-[#FFF8DC]/75 sm:text-base">
            Join us as we make this farewell unforgettable. Register your presence and celebrate the TMSL CSE & CSBS 2026 passout batch in style.
          </p>
          <div className="mt-10">
            <MagneticButton
              as="a"
              href="/contact"
              className="inline-block border-2 border-[#DAA520] bg-[#8B0000]/40 px-6 py-3 font-ornament text-xs uppercase tracking-[0.2em] text-[#DAA520] gold-glow transition-all hover:bg-[#DAA520] hover:text-[#1A0A0A] whitespace-nowrap sm:px-10 sm:py-4 sm:text-sm sm:tracking-[0.4em]"
            >
              ✦ Register Now ✦
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}

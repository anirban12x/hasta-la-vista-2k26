import { createFileRoute } from "@tanstack/react-router";
import { teams } from "@/data/content";
import { MemberCard } from "@/components/cards/MemberCard";
import { LotusDivider } from "@/components/effects/Ornaments";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Hasta La Vista Core Committee — 2026" },
      { name: "description", content: "Meet the core committee of Hasta La Vista 2026 — convenor wing, graphics, management, technical, cultural, media, and more." },
      { property: "og:title", content: "Hasta La Vista Core Committee — 2026" },
      { property: "og:description", content: "The faces behind the farewell." },
    ],
  }),
  component: TeamPage,
});

const departments = Object.values(teams).filter((group) => group.label !== teams.executive.label);

function TeamPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="relative px-6 py-16 text-center">
        <p className="font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
          ✦ The Architects of the Day ✦
        </p>
        <h1 className="mt-4 font-display text-6xl italic text-gradient-gold md:text-8xl lg:text-9xl">
          Core Committee 2026
        </h1>
        <LotusDivider className="mt-8" />
        <p className="mx-auto mt-6 max-w-2xl font-body text-[#FFF8DC]/75">
          The team building Hasta La Vista 2026 with planning, creativity, culture, and technical execution.
        </p>
      </section>

      {/* Executive spotlight */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
            ✦ {teams.executive.label} ✦
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {teams.executive.members.map((m, i) => (
              <RevealOnScroll key={m.name} index={i}>
                <MemberCard name={m.name} role={m.role} highlight />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Wings */}
      {departments.map((dept, di) => (
        <section key={dept.label} className="relative py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center font-display text-3xl italic text-gradient-gold md:text-5xl">
              {dept.label}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {dept.members.map((m, i) => (
                <RevealOnScroll key={`${dept.label}-${m.name}`} index={i + di}>
                  <MemberCard name={m.name} role={m.role} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-7xl px-6">
            <LotusDivider />
          </div>
        </section>
      ))}
    </div>
  );
}

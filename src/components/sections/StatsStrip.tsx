import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/data/content";

function CountUp({ to, duration = 1800 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n}</span>;
}

export function StatsStrip() {
  return (
    <section className="relative px-6 py-12 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden glass-panel p-8 text-center sm:p-10"
            style={{
              clipPath:
                "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)",
              boxShadow: "0 0 40px rgba(218,165,32,0.18)",
            }}
          >
            {/* corner ornaments */}
            <svg className="pointer-events-none absolute inset-0" viewBox="0 0 200 200" preserveAspectRatio="none">
              <path d="M20 100 Q100 60 180 100" stroke="#DAA520" strokeWidth="0.4" fill="none" opacity="0.4" />
              <path d="M20 100 Q100 140 180 100" stroke="#DAA520" strokeWidth="0.4" fill="none" opacity="0.4" />
            </svg>
            <div className="text-3xl sm:text-4xl">{s.emoji}</div>
            <div className="mt-2 font-display text-5xl italic text-gradient-gold sm:mt-3 sm:text-6xl md:text-7xl">
              <CountUp to={s.number} />
              <span>{s.suffix}</span>
            </div>
            <div className="font-ornament mt-2 text-[10px] uppercase tracking-[0.3em] text-[#FFF8DC]/70 sm:mt-3 sm:text-xs sm:tracking-[0.4em]">
              {s.label}
            </div>
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "radial-gradient(circle at center, rgba(218,165,32,0.18), transparent 70%)" }} />
          </div>
        ))}
      </div>
    </section>
  );
}

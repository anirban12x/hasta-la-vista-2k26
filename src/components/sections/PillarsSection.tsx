import { motion } from "framer-motion";
import { pillars } from "@/data/content";
import { LotusDivider } from "@/components/effects/Ornaments";

export function PillarsSection() {
  return (
    <section className="relative px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-ornament text-[10px] uppercase tracking-[0.3em] text-[#DAA520] sm:text-xs sm:tracking-[0.5em]">
          ✦ Four Pillars ✦
        </p>
        <h2 className="mt-4 font-display text-4xl italic text-gradient-gold sm:text-5xl md:text-7xl">
          The Story Unfolds
        </h2>
        <LotusDivider className="mt-6" />
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-8 sm:mt-16 md:grid-cols-2">
        {pillars.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative h-[45vh] min-h-[380px] overflow-hidden border border-[#DAA520]/30 sm:h-[60vh] sm:min-h-[420px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,10,10,0.2) 0%, rgba(26,10,10,0.95) 80%)" }} />

            {/* Diagonal gold slash */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="70" x2="100" y2="55" stroke="#DAA520" strokeWidth="0.4" opacity="0.7" />
              <line x1="0" y1="73" x2="100" y2="58" stroke="#DAA520" strokeWidth="0.2" opacity="0.5" />
            </svg>

            <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-12">
              <div className="text-4xl mb-2 sm:text-5xl sm:mb-3">{p.icon}</div>
              <h3 className="font-display text-2xl italic leading-tight sm:text-4xl md:text-5xl" style={{ color: p.accentColor }}>
                {p.title}
              </h3>
              <p className="mt-2 max-w-md font-body text-xs text-[#FFF8DC]/80 sm:mt-3 sm:text-sm md:text-base">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {p.hashtags.map((h) => (
                  <span key={h} className="font-ornament text-[9px] uppercase tracking-[0.2em] text-[#DAA520] sm:text-[10px] sm:tracking-[0.3em]">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

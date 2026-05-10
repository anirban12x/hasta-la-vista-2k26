import { useEffect, useState } from "react";

export function MemberCard({ name, role, image, highlight = false }: { name: string; role: string; image?: string; highlight?: boolean }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [image]);

  const hasValidImage = Boolean(image && !imageError);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`group relative flex shrink-0 flex-col items-center justify-center px-8 py-10 text-center transition duration-300 ease-out ${highlight ? "min-w-[260px]" : "min-w-[220px]"} hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(255,215,0,0.16)]`}
      style={{
        background: highlight
          ? "linear-gradient(160deg, rgba(139,0,0,0.5), rgba(26,10,10,0.9))"
          : "linear-gradient(160deg, rgba(218,165,32,0.08), rgba(26,10,10,0.7))",
        border: `1px solid ${highlight ? "#DAA520" : "rgba(218,165,32,0.35)"}`,
        boxShadow: highlight ? "0 0 30px rgba(218,165,32,0.4)" : undefined,
      }}
    >
      {hasValidImage ? (
        <div className="relative mb-3 h-28 w-28 rounded-full border border-[#DAA520] bg-[#1A0A0A] p-1 transition duration-300 ease-out group-hover:border-[#FFD700] group-hover:shadow-[0_0_0_4px_rgba(255,215,0,0.12)]">
          <img
            src={image}
            alt={name}
            onError={() => setImageError(true)}
            className="h-full w-full rounded-full object-cover object-center"
          />
        </div>
      ) : (
        <div
          className="flex h-28 w-28 items-center justify-center rounded-full border border-[#DAA520] bg-gradient-to-br from-[#8B0000] to-[#1A0A0A] text-3xl font-display italic text-[#FFF8DC] transition duration-300 ease-out group-hover:border-[#FFD700] group-hover:shadow-[0_0_0_4px_rgba(255,215,0,0.12)]"
        >
          {initials}
        </div>
      )}
      <h4 className="mt-4 font-display text-xl italic text-gradient-gold">{name}</h4>
      <p className="mt-2 font-ornament text-[10px] uppercase tracking-[0.3em] text-[#FFF8DC]/70">
        {role}
      </p>
    </div>
  );
}

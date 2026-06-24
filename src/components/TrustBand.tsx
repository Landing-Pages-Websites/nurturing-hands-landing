import { Reveal } from "@/components/Reveal";
import { StarIcon, ShieldIcon, TruckIcon, SparkleIcon } from "@/components/icons";

const BADGES = [
  { icon: StarIcon, title: "500+ 5-Star Reviews", sub: "Verified on Google", color: "text-accent" },
  { icon: ShieldIcon, title: "Insured & Licensed", sub: "Party with peace of mind", color: "text-secondary" },
  { icon: TruckIcon, title: "Free Delivery & Setup", sub: "Included on every rental", color: "text-primary" },
  { icon: SparkleIcon, title: "Clean & Sanitized", sub: "Spotless every time", color: "text-accent" },
] as const;

export function TrustBand(): React.ReactElement {
  return (
    <section id="trust-band" aria-label="Why families trust AJT Bounce" className="relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="absolute inset-0 bg-confetti opacity-70" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4 md:py-12">
        {BADGES.map(({ icon: Icon, title, sub, color }, i) => (
          <Reveal key={title} delay={i * 70} className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Icon className={`h-6 w-6 ${color}`} />
            </span>
            <span>
              <span className="block font-display font-semibold leading-tight text-white">{title}</span>
              <span className="block text-sm text-white/65">{sub}</span>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";
import { DualCta } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { StarIcon, SparkleIcon, TruckIcon, ShieldIcon, MapPinIcon } from "@/components/icons";

const REASONS = [
  {
    icon: SparkleIcon,
    title: "Spotless, Sanitized Equipment",
    body: "Every inflatable is cleaned and sanitized before it arrives — the thing customers rave about most in their reviews.",
  },
  {
    icon: TruckIcon,
    title: "Free Delivery, Setup & Pickup",
    body: "Our crew handles delivery, professional setup, and takedown on every single rental. Zero hauling, zero hassle.",
  },
  {
    icon: ShieldIcon,
    title: "Fully Insured & Licensed",
    body: "Party with total peace of mind. We're fully insured and licensed for events of every size.",
  },
  {
    icon: MapPinIcon,
    title: "Local & Loved in MA & RI",
    body: "Locally owned and trusted by hundreds of families and organizers across Massachusetts and Rhode Island.",
  },
] as const;

export function WhyUs(): React.ReactElement {
  return (
    <section id="why-us" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Proof panel */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-border md:p-10">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
              <div className="relative">
                <span className="flex text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-7 w-7" />
                  ))}
                </span>
                <p className="mt-5 font-display text-[clamp(3.5rem,9vw,5rem)] font-bold leading-none text-primary">
                  500+
                </p>
                <p className="mt-2 text-xl font-display font-semibold text-ink">Five-star Google reviews</p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Families and event organizers across MA &amp; RI book AJT again and again — for the
                  clean equipment, the on-time crew, and parties that are simply more fun.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Reasons */}
          <div>
            <SectionHeading
              align="start"
              eyebrow="Why AJT Bounce"
              title={<>Booked Once, Trusted Forever</>}
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {REASONS.map(({ icon: Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <li className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-display font-bold leading-snug">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="mt-8">
              <DualCta align="start" tone="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { HeartHandsIcon, CheckIcon, Icon } from "@/components/icons";
import { HERO_MICROTRUST } from "@/lib/content";

export function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-surface to-white"
    >
      {/* Soft brand washes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-16 top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24 lg:pt-16">
        {/* ── Copy ── */}
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-2 shadow-sm">
            <HeartHandsIcon className="h-5 w-5 text-accent" />
            <span className="font-body text-sm font-semibold text-ink">
              Free, no-obligation discovery call
            </span>
          </span>

          <h1 className="mt-6 text-[clamp(2.25rem,5.2vw,3.75rem)] font-display font-bold leading-[1.05] tracking-tight text-ink">
            Bay Area Doula Support —{" "}
            <span className="text-accent">and help using your employer benefits to pay for it</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            Nurturing Hands Doulas matches your family with a certified doula for{" "}
            <strong className="font-semibold text-ink">
              birth, postpartum recovery, and overnight newborn care
            </strong>{" "}
            — and helps you explore how Carrot, HSA, and FSA benefits may apply.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {HERO_MICROTRUST.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 font-body text-sm font-medium text-ink shadow-sm ring-1 ring-border"
              >
                <CheckIcon className="h-4 w-4 text-primary-ink" />
                {item}
              </li>
            ))}
          </ul>

          {/* Warm hero photo — desktop only, keeps the fold focused on mobile */}
          <div className="mt-9 hidden lg:block">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] shadow-xl ring-4 ring-white">
              <Image
                src="/images/nh-hero.jpg"
                alt="A doula warmly supporting a new mother holding her newborn at home"
                fill
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>

        {/* ── Lead form ── */}
        <Reveal delay={120} className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 hidden h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg sm:flex"
          >
            <Icon name="hearthands" className="h-7 w-7" />
          </div>
          <div className="mb-5">
            <h2 className="font-display text-2xl font-bold text-ink">
              Request your free discovery call
            </h2>
            <p className="mt-1 font-body text-sm text-muted">
              Tell us about your family — we&apos;ll take it from there. No obligation.
            </p>
          </div>
          <LeadForm idPrefix="hero" />
        </Reveal>
      </div>
    </section>
  );
}

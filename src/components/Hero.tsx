import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PrimaryCta, PhoneCta } from "@/components/Cta";
import { StarIcon, CheckIcon, TruckIcon, SparkleIcon, ShieldIcon } from "@/components/icons";

const HERO_CHIPS = [
  { icon: TruckIcon, label: "Free delivery & setup" },
  { icon: SparkleIcon, label: "Clean & sanitized" },
  { icon: ShieldIcon, label: "Fully insured" },
] as const;

export function Hero(): React.ReactElement {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-primary-soft via-white to-white">
      {/* Decorative brand blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-16">
        {/* ── Copy ── */}
        <Reveal className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-4 py-2 shadow-sm">
            <span className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-sm font-bold text-ink">500+ Five-Star Google Reviews</span>
          </div>

          <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-display font-bold leading-[1.02] tracking-tight text-ink">
            Make Your Summer Party the <span className="text-primary">One Everyone Remembers</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            Clean, fully-insured <strong className="font-bold text-ink">water slides, foam parties,
            bubble parties &amp; bounce houses</strong> — delivered and set up free across
            Massachusetts &amp; Rhode Island. You bring the guests; we bring the fun.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {HERO_CHIPS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm ring-1 ring-border"
              >
                <Icon className="h-5 w-5 text-primary" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
            <PhoneCta tone="light" />
            <PrimaryCta label="Get a Free Quote" pulse />
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-muted">
            <CheckIcon className="h-4 w-4 text-success" />
            Locally owned &amp; loved · Serving MA &amp; RI · Fast, free quote
          </p>
        </Reveal>

        {/* ── Image collage ── */}
        <Reveal delay={120} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-square lg:max-w-none">
            {/* Main: hero water slide */}
            <div className="floaty absolute left-0 top-0 h-[72%] w-[72%] overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-white">
              <Image
                src="/images/hero-water.jpg"
                alt="Inflatable water slide rental"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Dual-lane slide */}
            <div className="floaty-slow absolute bottom-0 right-0 h-[52%] w-[60%] overflow-hidden rounded-[1.75rem] shadow-2xl ring-4 ring-white">
              <Image
                src="/images/hero-slide.jpg"
                alt="Dual-lane water slide rental"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Bounce house accent */}
            <div className="floaty absolute right-2 top-[6%] h-[34%] w-[40%] overflow-hidden rounded-3xl shadow-xl ring-4 ring-white">
              <Image
                src="/images/hero-bounce.jpg"
                alt="Themed bounce house rental"
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover"
              />
            </div>
            {/* Free-delivery sticker */}
            <div className="absolute -left-2 bottom-[14%] -rotate-6 rounded-2xl bg-accent px-4 py-2.5 shadow-lg">
              <p className="font-display text-sm font-bold leading-tight text-ink">
                FREE Delivery
                <br />
                &amp; Setup
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

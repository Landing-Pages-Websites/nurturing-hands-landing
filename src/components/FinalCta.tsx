import { Reveal } from "@/components/Reveal";
import { ConsultCta } from "@/components/Cta";
import { HeartHandsIcon } from "@/components/icons";

export function FinalCta(): React.ReactElement {
  return (
    <section aria-label="Request a consultation" className="bg-white px-4 py-16 sm:px-6 md:py-20">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-active px-6 py-14 text-center shadow-xl md:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/15 blur-2xl"
          />
          <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white">
            <HeartHandsIcon className="h-7 w-7" />
          </span>
          <h2 className="relative mt-6 font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.08] text-white">
            Let our family care for yours
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Start with a free, no-obligation discovery call. We&apos;ll listen, answer your
            questions, and help you find the right doula for this season of your life.
          </p>
          <div className="relative mt-8 flex justify-center">
            <ConsultCta className="!bg-white !text-accent !shadow-lg hover:!bg-accent-soft" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

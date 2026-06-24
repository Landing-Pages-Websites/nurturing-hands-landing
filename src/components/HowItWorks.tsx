import { Reveal } from "@/components/Reveal";
import { CtaRow } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { HOW_IT_WORKS } from "@/lib/content";

export function HowItWorks(): React.ReactElement {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title={<>A simple, supportive path to your doula</>}
          description="No pressure, no guesswork — just a calm, guided process from first hello to the doula who feels right for your family."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <li className="relative flex h-full flex-col rounded-3xl bg-surface p-7 ring-1 ring-border">
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-5 font-display text-5xl font-bold leading-none text-primary/20"
                >
                  {step.num}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/30">
                  <Icon name={step.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-row flex-wrap justify-center gap-4">
          <CtaRow secondaryLabel="See how it works" />
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";
import { CtaRow } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, InfoIcon } from "@/components/icons";
import { BENEFITS, BENEFITS_DISCLAIMER } from "@/lib/content";

export function Benefits(): React.ReactElement {
  return (
    <section id="benefits" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="Employer Benefits"
          title={<>Could your employer benefits help cover doula support?</>}
          description="Many Bay Area families are surprised to learn their family-building benefits may go toward doula and newborn care. Here's how it often works — and where to check."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {BENEFITS.map((card, i) => (
            <Reveal key={card.id} delay={i * 90}>
              <article className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg md:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
                    <Icon name={card.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      {card.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-ink">{card.title}</h3>
                  </div>
                </div>
                <p className="mt-5 grow text-base leading-relaxed text-muted">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Explicit eligibility disclaimer — no coverage / savings promise. */}
        <Reveal className="mt-8">
          <p className="mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border border-border bg-blush/60 px-5 py-4 font-body text-sm leading-relaxed text-ink/80">
            <InfoIcon className="mt-0.5 h-5 w-5 flex-none text-primary-ink" />
            <span>{BENEFITS_DISCLAIMER}</span>
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-row flex-wrap justify-center gap-4">
          <CtaRow secondaryLabel="Talk through your benefits" />
        </Reveal>
      </div>
    </section>
  );
}

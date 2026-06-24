import { Reveal } from "@/components/Reveal";
import { CtaRow } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { VOICE_THEMES, REFERENCES_STATEMENT } from "@/lib/content";

export function Testimonials(): React.ReactElement {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="What Families Tell Us"
          title={<>The kind of care families come back for</>}
          description="Every family's story is their own, so we don't post names or star counts here. Instead, here's the experience families consistently share with us."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VOICE_THEMES.map((theme, i) => (
            <Reveal key={theme.title} delay={i * 80}>
              <article className="flex h-full flex-col rounded-3xl bg-surface p-7 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon name={theme.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ink">
                  {theme.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{theme.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-2xl text-center font-body text-base leading-relaxed text-ink/80">
            {REFERENCES_STATEMENT}
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-row flex-wrap justify-center gap-4">
          <CtaRow secondaryLabel="Request references" />
        </Reveal>
      </div>
    </section>
  );
}

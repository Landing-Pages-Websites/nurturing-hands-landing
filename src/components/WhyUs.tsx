import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ConsultCta } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { WHY_US_REASONS } from "@/lib/content";

export function WhyUs(): React.ReactElement {
  return (
    <section id="why-us" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Founder panel */}
          <Reveal>
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] bg-accent/10 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl ring-4 ring-white">
                <Image
                  src="/images/nh-5320.jpeg"
                  alt="Carla Rocha, founder of Nurturing Hands Doulas"
                  width={945}
                  height={949}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-5 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-border">
                <p className="font-display text-lg font-bold text-ink">Carla Rocha</p>
                <p className="font-body text-sm text-muted">
                  Founder, Nurturing Hands Doulas · 14+ years caring for Bay Area families
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Reasons */}
          <div>
            <SectionHeading
              align="start"
              eyebrow="Why Nurturing Hands"
              title={<>Why families choose Nurturing Hands</>}
              description="Founded by Carla Rocha, our close-knit team works the way she does — warm, dependable, and deeply experienced. We care for your family like we'd care for our own."
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {WHY_US_REASONS.map((reason, i) => (
                <Reveal key={reason.title} delay={i * 70}>
                  <li className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink">
                      <Icon name={reason.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-lg font-bold leading-snug text-ink">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{reason.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="mt-8">
              <ConsultCta />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

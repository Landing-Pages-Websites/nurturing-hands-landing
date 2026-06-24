import { Reveal } from "@/components/Reveal";
import { DualCta } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { MapPinIcon } from "@/components/icons";
import { SERVICE_AREA } from "@/lib/content";

export function ServiceArea(): React.ReactElement {
  return (
    <section id="service-area" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="Where We Deliver"
          title={<>Proudly Serving MA &amp; RI</>}
          description="Based around Foxborough, MA and Greenville, RI, we deliver free within about 20 miles of both — covering communities all across Massachusetts and Rhode Island."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICE_AREA.map((group, i) => (
            <Reveal key={group.state} delay={i * 90}>
              <div className="h-full rounded-3xl bg-surface p-7 ring-1 ring-border md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                    <MapPinIcon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-display font-bold">{group.state}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.towns.map((town) => (
                    <li
                      key={town}
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm ring-1 ring-border"
                    >
                      {town}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="mb-6 text-base font-semibold text-muted">
            Don&apos;t see your town? Ask us — there&apos;s a good chance we cover it.
          </p>
          <div className="flex justify-center">
            <DualCta align="center" tone="light" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

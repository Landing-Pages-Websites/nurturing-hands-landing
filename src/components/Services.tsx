import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCta } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES, type ServiceItem } from "@/lib/content";

const TINTS = [
  { pill: "bg-secondary-soft text-secondary-ink", glow: "bg-secondary/25" },
  { pill: "bg-primary-soft text-primary-active", glow: "bg-primary/25" },
  { pill: "bg-secondary-soft text-secondary-ink", glow: "bg-secondary/25" },
  { pill: "bg-accent-soft text-[#9a6b00]", glow: "bg-accent/35" },
] as const;

function ServiceRow({ service, index }: { service: ServiceItem; index: number }): React.ReactElement {
  const reversed = index % 2 === 1;
  const tint = TINTS[index % TINTS.length];
  return (
    <Reveal>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
          <div aria-hidden="true" className={`absolute -inset-4 rounded-[2.5rem] ${tint.glow} blur-2xl`} />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-white">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        {/* Copy */}
        <div className={reversed ? "lg:order-1" : ""}>
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-display font-semibold uppercase tracking-wider ${tint.pill}`}>
            {service.tag}
          </span>
          <h3 className="mt-3 text-[1.75rem] font-display font-bold leading-tight">{service.name}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{service.body}</p>
          <div className="mt-6">
            <DualCta align="start" tone="light" primaryLabel="Get a Free Quote" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Services(): React.ReactElement {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="Summer Party Rentals"
          title={<>The Fun, Delivered &amp; Set Up For You</>}
          description="From sky-high water slides to foam mountains and bubble storms, every AJT rental shows up clean, sanitized, and professionally installed — so you can relax and enjoy the party."
        />
        <div className="mt-16 space-y-20 md:space-y-24">
          {SERVICES.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

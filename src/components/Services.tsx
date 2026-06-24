import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ConsultCta } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { SERVICES, type ServiceItem } from "@/lib/content";

function ServiceRow({ service, index }: { service: ServiceItem; index: number }): React.ReactElement {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.5rem] bg-primary/15 blur-2xl"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl ring-4 ring-white">
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
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 font-body text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            <Icon name={service.icon} className="h-4 w-4" />
            {service.tag}
          </span>
          <h3 className="mt-3 font-display text-[1.75rem] font-bold leading-tight text-ink">
            {service.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{service.body}</p>
          <div className="mt-6">
            <ConsultCta variant="outline" />
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
          eyebrow="Our Doula Services"
          title={<>Bay Area doula care for every stage</>}
          description="From pregnancy through those first tender months at home, our certified doulas meet your family where you are — with practical, non-medical support shaped around your needs."
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

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCta } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { GALLERY } from "@/lib/content";

export function Gallery(): React.ReactElement {
  return (
    <section id="gallery" className="bg-gradient-to-b from-secondary-soft/50 to-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Lineup"
          title={<>A Rental for Every Theme &amp; Age</>}
          description="A peek at the real AJT Bounce lineup — water slides, foam and bubble setups, octopus inflatables, themed castles and combos, and so much more."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {GALLERY.map((item, i) => (
            <Reveal key={item.image} delay={(i % 3) * 80}>
              <div className="group relative aspect-square overflow-hidden rounded-3xl shadow-md ring-1 ring-border">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <DualCta align="center" tone="light" />
        </Reveal>
      </div>
    </section>
  );
}

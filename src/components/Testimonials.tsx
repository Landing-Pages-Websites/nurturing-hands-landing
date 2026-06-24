import { Reveal } from "@/components/Reveal";
import { DualCta } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { StarIcon, GoogleIcon } from "@/components/icons";
import { REVIEWS } from "@/lib/content";

export function Testimonials(): React.ReactElement {
  return (
    <section id="testimonials" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="Happy Customers"
          title={
            <>
              Loved by 500+ Families <span className="text-primary">Across MA &amp; RI</span>
            </>
          }
          description="Don't just take our word for it — here's what real customers say on Google."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.quote.slice(0, 24)} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} className="h-5 w-5" />
                  ))}
                </span>
                <blockquote className="mt-4 grow text-[0.95rem] leading-relaxed text-ink">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <GoogleIcon className="h-6 w-6" />
                  <span>
                    <span className="block text-sm font-bold text-ink">Verified Google Review</span>
                    <span className="block text-xs text-muted">{review.result}</span>
                  </span>
                </figcaption>
              </figure>
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

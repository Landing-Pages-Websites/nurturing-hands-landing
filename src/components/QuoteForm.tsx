import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";

const REASSURANCE = [
  { icon: "chat", text: "A friendly, no-obligation conversation" },
  { icon: "users", text: "Matched with 2–3 certified doulas" },
  { icon: "wallet", text: "Guidance on Carrot, HSA & FSA options" },
  { icon: "lifebuoy", text: "Reliable backup coverage, always" },
] as const;

export function QuoteForm(): React.ReactElement {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-soft via-surface to-blush py-20 md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-16 -top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Persuasion column */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent shadow-sm">
            <Icon name="hearthands" className="h-4 w-4" />
            Free &amp; no obligation
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.06] text-ink">
            Request your free discovery call
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Tell us a little about your family and what you&apos;re hoping for. We&apos;ll reach out
            to schedule a relaxed call, answer your questions, and help you explore how your benefits
            may apply — with zero pressure.
          </p>

          <ul className="mt-7 space-y-3">
            {REASSURANCE.map((item) => (
              <li key={item.text} className="flex items-center gap-3 font-body text-base text-ink">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white text-primary-ink shadow-sm">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Form column */}
        <Reveal delay={120}>
          <LeadForm idPrefix="contact" />
        </Reveal>
      </div>
    </section>
  );
}

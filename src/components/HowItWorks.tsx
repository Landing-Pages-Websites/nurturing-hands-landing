import { Reveal } from "@/components/Reveal";
import { DualCta } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { ChatIcon, TruckIcon, ConfettiIcon } from "@/components/icons";

const STEPS = [
  {
    icon: ChatIcon,
    title: "Get Your Free Quote",
    body: "Tell us your date, your town, and what you have in mind. Fill out the quick form or call — we respond fast with a free, no-obligation quote.",
  },
  {
    icon: TruckIcon,
    title: "We Deliver & Set Up",
    body: "On party day, our friendly crew arrives early to deliver, set up, and safety-check everything. Clean and ready before your first guest shows up.",
  },
  {
    icon: ConfettiIcon,
    title: "You Party — We Clean Up",
    body: "Soak up the fun and the photos. When it's over, we come back to take it all down and haul it away. Effortless, start to finish.",
  },
] as const;

export function HowItWorks(): React.ReactElement {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title={<>Booking Is Quick &amp; Easy</>}
          description="Three simple steps stand between you and the easiest party you'll ever host."
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 90}>
              <li className="relative flex h-full flex-col items-start rounded-3xl bg-surface p-8 ring-1 ring-border">
                <span className="absolute right-6 top-6 font-display text-6xl font-bold leading-none text-primary/15">
                  {i + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-display font-bold">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex justify-center">
          <DualCta align="center" tone="light" />
        </Reveal>
      </div>
    </section>
  );
}

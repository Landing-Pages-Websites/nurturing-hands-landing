import { PhoneIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";

type Tone = "light" | "onDark";

interface DualCtaProps {
  /** Visual context the buttons sit on. */
  tone?: Tone;
  /** Center the pair (default) or left-align. */
  align?: "center" | "start";
  /** Primary button label. */
  primaryLabel?: string;
  /** Add the attention pulse to the primary button. */
  pulse?: boolean;
}

const primaryBase =
  "group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-display font-semibold text-base shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]";

export function PrimaryCta({
  label = "Get a Free Quote",
  pulse = false,
  className = "",
}: {
  label?: string;
  pulse?: boolean;
  className?: string;
}): React.ReactElement {
  return (
    <a
      href="#quote-form"
      className={`${primaryBase} ${pulse ? "pulse-glow" : ""} ${className}`}
    >
      {label}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export function PhoneCta({ tone = "light" }: { tone?: Tone }): React.ReactElement {
  const styles =
    tone === "onDark"
      ? "border-white/40 text-white hover:bg-white/10"
      : "border-secondary/50 text-secondary-ink hover:bg-secondary-soft hover:border-secondary";
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Call AJT Bounce at ${PHONE_DISPLAY}`}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 bg-transparent font-display font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] ${styles}`}
    >
      <PhoneIcon className="w-5 h-5" />
      Call {PHONE_DISPLAY}
    </a>
  );
}

export function DualCta({
  tone = "light",
  align = "center",
  primaryLabel = "Get a Free Quote",
  pulse = false,
}: DualCtaProps): React.ReactElement {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 items-stretch sm:items-center ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <PrimaryCta label={primaryLabel} pulse={pulse} />
      <PhoneCta tone={tone} />
    </div>
  );
}

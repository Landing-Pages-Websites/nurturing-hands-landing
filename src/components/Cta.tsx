import { FORM_ANCHOR, CTA_LABEL } from "@/lib/content";

type Variant = "rose" | "outline" | "sky-soft";

interface CtaProps {
  /** Visual style. Default rose-fill for the primary action. */
  variant?: Variant;
  /** Override the default "Request a Consultation" label. */
  label?: string;
  /** Where the CTA scrolls to (defaults to the lead form). */
  href?: string;
  className?: string;
}

const VARIANTS: Record<Variant, string> = {
  rose:
    "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]",
  outline:
    "border-2 border-accent/40 bg-white text-accent hover:border-accent hover:bg-accent-soft hover:-translate-y-0.5 active:scale-[0.98]",
  "sky-soft":
    "bg-primary-soft text-primary-ink ring-1 ring-primary/30 hover:bg-primary/20 hover:-translate-y-0.5 active:scale-[0.98]",
};

const baseCls =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-base font-bold transition-all duration-200";

/** The single primary action across the page — scrolls to the lead form. */
export function ConsultCta({
  variant = "rose",
  label = CTA_LABEL,
  href = FORM_ANCHOR,
  className = "",
}: CtaProps): React.ReactElement {
  return (
    <a href={href} className={`${baseCls} ${VARIANTS[variant]} ${className}`}>
      {label}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

interface CtaRowProps {
  /** Label for the secondary (ghost/outline) action. */
  secondaryLabel: string;
}

/**
 * Side-by-side primary + secondary actions — both scroll to the lead form.
 * Render inside a `flex flex-row` container at the call site.
 */
export function CtaRow({ secondaryLabel }: CtaRowProps): React.ReactElement {
  return (
    <>
      <ConsultCta variant="rose" />
      <ConsultCta variant="outline" label={secondaryLabel} />
    </>
  );
}

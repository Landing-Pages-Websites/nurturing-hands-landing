import { FORM_ANCHOR } from "@/lib/content";

/** Mobile sticky bottom bar + desktop floating pill — both scroll to the form. */
export function FloatingCta(): React.ReactElement {
  return (
    <>
      {/* Mobile: full-width sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 shadow-[0_-6px_24px_rgba(43,43,43,0.12)] backdrop-blur md:hidden">
        <a
          href={FORM_ANCHOR}
          className="flex items-center justify-center rounded-full bg-accent py-3.5 font-display text-base font-bold text-white shadow-md shadow-accent/25 active:scale-[0.98]"
        >
          Request a Consultation
        </a>
      </div>

      {/* Desktop: floating pill, bottom-right */}
      <a
        href={FORM_ANCHOR}
        className="group fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-display font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-accent-hover md:inline-flex"
      >
        Request a Consultation
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
    </>
  );
}

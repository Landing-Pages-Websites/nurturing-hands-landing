import { PhoneIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";

/** Sticky mobile bottom bar: Get a Free Quote + Call. Desktop pill, bottom-right. */
export function FloatingCta(): React.ReactElement {
  return (
    <>
      {/* Mobile: dual sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-border bg-white/95 p-3 shadow-[0_-6px_24px_rgba(14,23,38,0.12)] backdrop-blur md:hidden">
        <a
          href="#quote-form"
          className="flex flex-[1.4] items-center justify-center rounded-full bg-primary py-3.5 font-display font-semibold text-white shadow-md shadow-primary/30 active:scale-[0.97]"
        >
          Get a Free Quote
        </a>
        <a
          href={PHONE_HREF}
          aria-label={`Call AJT Bounce at ${PHONE_DISPLAY}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-secondary bg-white py-3.5 font-display font-semibold text-secondary-ink active:scale-[0.97]"
        >
          <PhoneIcon className="h-5 w-5" />
          Call
        </a>
      </div>

      {/* Desktop: floating quote pill */}
      <a
        href="#quote-form"
        className="pulse-glow fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-display font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-primary-hover md:inline-flex"
      >
        Get a Free Quote
        <span aria-hidden="true">→</span>
      </a>
    </>
  );
}

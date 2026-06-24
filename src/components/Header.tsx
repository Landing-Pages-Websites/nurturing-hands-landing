import Image from "next/image";
import { PhoneIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";

/** Minimal sticky header — logo + click-to-call + quote CTA. No nav menu. */
export function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-2" aria-label="AJT Bounce & Events — home">
          <Image
            src="/images/logo.png"
            alt="AJT Bounce & Events"
            width={389}
            height={450}
            className="h-12 w-auto"
            priority
          />
          <span className="sr-only">AJT Bounce &amp; Events</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            aria-label={`Call AJT Bounce at ${PHONE_DISPLAY}`}
            className="hidden items-center gap-2 rounded-full border border-ink px-4 py-2 font-display font-semibold text-ink transition-colors hover:border-primary hover:text-primary-active sm:inline-flex"
          >
            <PhoneIcon className="h-5 w-5 text-primary" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#quote-form"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 font-display font-semibold text-white shadow-md shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:scale-[0.97]"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}

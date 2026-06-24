import Image from "next/image";
import { PhoneIcon, MapPinIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/content";

export function Footer(): React.ReactElement {
  const year = 2026;
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <span className="inline-block rounded-2xl bg-white p-2">
              <Image
                src="/images/logo.png"
                alt="AJT Bounce & Events"
                width={389}
                height={450}
                className="h-14 w-auto"
              />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">AJT Bounce &amp; Events</p>
              <p className="mt-1 flex items-center justify-center gap-2 text-sm md:justify-start">
                <MapPinIcon className="h-4 w-4 text-primary" />
                Serving Massachusetts &amp; Rhode Island
              </p>
            </div>
          </div>

          <a
            href={PHONE_HREF}
            aria-label={`Call AJT Bounce at ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            <PhoneIcon className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>
            © {year} AJT Bounce &amp; Events. All rights reserved. · Water slides, foam parties, bubble
            parties &amp; bounce houses · Free delivery &amp; setup across MA &amp; RI.
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <a
              href="https://www.ajtbounce.com/privacy-policy"
              className="underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.ajtbounce.com/privacy-policy"
              className="underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

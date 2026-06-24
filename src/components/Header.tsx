import Image from "next/image";
import { ConsultCta } from "@/components/Cta";

/** Sticky header — logo + primary consultation CTA only. */
export function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <a
          href="#hero"
          className="flex items-center gap-2"
          aria-label="Nurturing Hands Doulas — home"
        >
          <Image
            src="/images/nh-logo.png"
            alt="Nurturing Hands Doulas"
            width={216}
            height={158}
            className="h-12 w-auto"
            priority
          />
        </a>

        <ConsultCta className="!px-5 !py-2.5 !text-sm" />
      </div>
    </header>
  );
}

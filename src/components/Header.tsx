import Image from "next/image";
import { ConsultCta } from "@/components/Cta";

const NAV_LINKS = [
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
] as const;

/** Sticky header — logo + anchor nav + primary consultation CTA. */
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

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-ink/80 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ConsultCta className="!px-5 !py-2.5 !text-sm" />
      </div>
    </header>
  );
}

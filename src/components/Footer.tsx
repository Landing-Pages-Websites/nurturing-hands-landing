import Image from "next/image";
import { ConsultCta } from "@/components/Cta";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  SERVICE_AREA,
  BENEFITS_DISCLAIMER,
  SERVICES,
} from "@/lib/content";

export function Footer(): React.ReactElement {
  const year = 2026;
  return (
    <footer className="border-t border-border bg-surface text-ink">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand + CTA */}
          <div>
            <Image
              src="/images/nh-logo.png"
              alt="Nurturing Hands Doulas"
              width={216}
              height={158}
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-muted">
              Certified, team-based doula support for Bay Area families — birth, postpartum recovery,
              and overnight newborn care, with warmth you can feel.
            </p>
            <div className="mt-6">
              <ConsultCta className="!px-6 !py-3 !text-sm" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-base font-bold text-ink">Get in touch</h2>
            <ul className="mt-4 space-y-3 font-body text-sm">
              <li>
                <a
                  href={EMAIL_HREF}
                  className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
                >
                  <MailIcon className="h-5 w-5 flex-none text-primary-ink" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
                >
                  <PhoneIcon className="h-5 w-5 flex-none text-primary-ink" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-muted">
                <MapPinIcon className="h-5 w-5 flex-none text-primary-ink" />
                Serving the {SERVICE_AREA}
              </li>
            </ul>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="font-display text-base font-bold text-ink">Services</h2>
            <ul className="mt-4 space-y-2.5 font-body text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="font-body text-xs leading-relaxed text-muted">{BENEFITS_DISCLAIMER}</p>
          <p className="mt-3 font-body text-xs text-muted">
            © {year} Nurturing Hands Doulas. All rights reserved. · Doulas provide non-medical
            support and do not replace your medical providers.
          </p>
        </div>
      </div>
    </footer>
  );
}

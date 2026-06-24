import { Icon } from "@/components/icons";
import { TRUST_POINTS } from "@/lib/content";

/** Credibility strip directly under the hero. */
export function TrustBand(): React.ReactElement {
  return (
    <section aria-label="Why families trust Nurturing Hands" className="border-b border-border bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-5 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:justify-between">
          {TRUST_POINTS.map((point) => (
            <li
              key={point.label}
              className="inline-flex items-center gap-2.5 font-body text-sm font-medium text-ink"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary-soft text-primary-ink">
                <Icon name={point.icon} className="h-5 w-5" />
              </span>
              {point.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

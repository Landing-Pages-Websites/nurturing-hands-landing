import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "start";
  className?: string;
}

/** Shared eyebrow + H2 + lead-in block used at the top of content sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps): React.ReactElement {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col max-w-2xl ${alignment} ${className}`}>
      <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-display font-semibold uppercase tracking-wider text-primary-active">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-display font-bold leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

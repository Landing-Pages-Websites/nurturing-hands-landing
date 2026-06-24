type IconProps = { className?: string };

const base = (className: string) => ({
  className,
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

/* Water slide / waves */
export function WaveIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M2 8c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" />
      <path d="M2 13c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" />
      <path d="M2 18c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" />
    </svg>
  );
}

/* Foam / bubbles cluster */
export function FoamIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <circle cx="7" cy="13" r="3.5" />
      <circle cx="14.5" cy="10" r="4.5" />
      <circle cx="18" cy="16.5" r="2.5" />
      <circle cx="9.5" cy="6.5" r="2" />
    </svg>
  );
}

/* Single bubble with shine */
export function BubbleIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 8.5a3 3 0 0 1 2.4-1.4" />
    </svg>
  );
}

/* Bounce house / castle */
export function CastleIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M3 21V8l2 1.5L7 7l2 2.5L12 6l3 3.5L17 7l2 2.5L21 8v13" />
      <path d="M3 21h18" />
      <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

/* Party popper */
export function PartyIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M3 21l6-2.2L5.2 15 3 21Z" />
      <path d="M9 18.8 18.5 9.3a2 2 0 0 0 0-2.8l-1-1a2 2 0 0 0-2.8 0L5.2 15" />
      <path d="M14 4.5 14.5 6M19.5 10l1.5.5M17 3l.5 2M21 7l-2 .5" />
    </svg>
  );
}

/* Delivery truck */
export function TruckIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  );
}

/* Shield check — insured */
export function ShieldIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* Sparkle — clean / premium */
export function SparkleIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 3c.6 4.5 1.5 5.4 6 6-4.5.6-5.4 1.5-6 6-.6-4.5-1.5-5.4-6-6 4.5-.6 5.4-1.5 6-6Z" />
      <path d="M19 14c.3 1.8.7 2.2 2.5 2.5-1.8.3-2.2.7-2.5 2.5-.3-1.8-.7-2.2-2.5-2.5 1.8-.3 2.2-.7 2.5-2.5Z" />
    </svg>
  );
}

/* Sun — summer */
export function SunIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </svg>
  );
}

/* Map pin */
export function MapPinIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

/* Phone */
export function PhoneIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

/* Check */
export function CheckIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  );
}

/* Calendar */
export function CalendarIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}

/* Chat bubble — quote request */
export function ChatIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

/* Confetti / celebrate */
export function ConfettiIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M5 19l4-12 6 6-10 6Z" />
      <path d="M14 4.5 15 6M19 4l-1.5 1.5M20 9l-2 .5M16 11l1.5 1" />
    </svg>
  );
}

/* Chevron down — accordion */
export function ChevronDownIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* Star — solid, for ratings */
export function StarIcon({ className = "w-5 h-5" }: IconProps): React.ReactElement {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 0 0-.37 1.12l1.07 3.29c.3.92-.75 1.69-1.54 1.12l-2.8-2.03a1 1 0 0 0-1.17 0l-2.8 2.03c-.79.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 0 0-.36-1.12L2.42 9.42c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .95-.69L8.5 2.93Z" />
    </svg>
  );
}

/* Google "G" glyph for review attribution */
export function GoogleIcon({ className = "w-5 h-5" }: IconProps): React.ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.2c0-.7-.06-1.37-.18-2.02H12v3.82h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.33 2.98-7.32Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.58-4.12H3.07v2.58A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.42 13.9a6 6 0 0 1 0-3.82V7.5H3.07a10 10 0 0 0 0 9l3.35-2.6Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.47 0 2.78.5 3.82 1.5l2.85-2.85A10 10 0 0 0 3.07 7.5l3.35 2.58C7.2 7.72 9.4 5.96 12 5.96Z"
      />
    </svg>
  );
}

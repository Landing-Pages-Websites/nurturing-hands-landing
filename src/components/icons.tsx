type IconProps = { className?: string };

const base = (className: string) => ({
  className,
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

/* Heart — care, choosing your doula */
export function HeartIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 20s-7-4.6-9.3-9A4.7 4.7 0 0 1 12 6.6 4.7 4.7 0 0 1 21.3 11C19 15.4 12 20 12 20Z" />
    </svg>
  );
}

/* Hands cradling a heart — the brand mark motif */
export function HeartHandsIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 8.5s-2.5-2.4-4-0.9c-1.2 1.2-.3 2.9 0 3.2.8.9 4 3.2 4 3.2s3.2-2.3 4-3.2c.3-.3 1.2-2 0-3.2-1.5-1.5-4 .9-4 .9Z" />
      <path d="M5 12.5 2.5 15a2 2 0 0 0 0 2.8l1.3 1.3a2 2 0 0 0 1.4.6H12" />
      <path d="M19 12.5 21.5 15a2 2 0 0 1 0 2.8l-1.3 1.3a2 2 0 0 1-1.4.6H12" />
    </svg>
  );
}

/* Shield check — background-checked / certified */
export function ShieldIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* Badge check — certified team */
export function BadgeIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 2.5 14.2 4l2.6-.3 1 2.4 2.4 1-.3 2.6L23 12l-1.6 2.2.3 2.6-2.4 1-1 2.4-2.6-.3L12 21.5 9.8 20l-2.6.3-1-2.4-2.4-1 .3-2.6L1 12l1.6-2.2-.3-2.6 2.4-1 1-2.4 2.6.3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* Clock — years of experience */
export function ClockIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

/* Life buoy — reliable backup coverage */
export function LifebuoyIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m5 5 4.5 4.5M14.5 14.5 19 19M19 5l-4.5 4.5M9.5 14.5 5 19" />
    </svg>
  );
}

/* Wallet — pre-tax / HSA-FSA payment */
export function WalletIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M3 7a2 2 0 0 1 2-2h12v3" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H5" />
      <circle cx="16.5" cy="12.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Gift — family-building benefit */
export function GiftIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8" />
      <path d="M2.5 8h19v4h-19zM12 8v13" />
      <path d="M12 8S10.5 4 8.3 4a2.3 2.3 0 0 0 0 4.6H12s1.5-4 3.7-4a2.3 2.3 0 0 1 0 4.6H12" />
    </svg>
  );
}

/* Info — disclaimer line */
export function InfoIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

/* Chat bubble — discovery call */
export function ChatIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20.5l1.3-5.5A8 8 0 1 1 21 12Z" />
      <path d="M8.5 11h7M8.5 14h4" />
    </svg>
  );
}

/* Chat with heart — interview / connect */
export function HeartChatIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20.5l1.3-5.5A8 8 0 1 1 21 12Z" />
      <path d="M12 14.5s-3-1.9-3-3.8a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 1.9-3 3.8-3 3.8Z" />
    </svg>
  );
}

/* Users — matching with the team */
export function UsersIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
    </svg>
  );
}

/* Moon — overnight care */
export function MoonIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
      <path d="M17 4.5 17.6 6 19 6.6 17.6 7.2 17 8.7 16.4 7.2 15 6.6 16.4 6Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Sunrise — birth / new beginning */
export function SunriseIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M3 18h18M5.5 18a6.5 6.5 0 0 1 13 0" />
      <path d="M12 3v3M4.5 7.5l1.6 1.6M19.5 7.5l-1.6 1.6M1.5 13H3M21 13h1.5" />
    </svg>
  );
}

/* Sparkle — lactation & gentle sleep, premium care */
export function SparkleIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 3c.6 4.5 1.5 5.4 6 6-4.5.6-5.4 1.5-6 6-.6-4.5-1.5-5.4-6-6 4.5-.6 5.4-1.5 6-6Z" />
      <path d="M19 14c.3 1.8.7 2.2 2.5 2.5-1.8.3-2.2.7-2.5 2.5-.3-1.8-.7-2.2-2.5-2.5 1.8-.3 2.2-.7 2.5-2.5Z" />
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

/* Chevron down — accordion */
export function ChevronDownIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* Phone — contact detail */
export function PhoneIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

/* Mail — contact detail */
export function MailIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

/* Map pin — service area */
export function MapPinIcon({ className = "w-6 h-6" }: IconProps): React.ReactElement {
  return (
    <svg {...base(className)}>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

/** Resolve a string icon key (used in content.ts) to its component. */
const ICONS: Record<string, (p: IconProps) => React.ReactElement> = {
  heart: HeartIcon,
  hearthands: HeartHandsIcon,
  shield: ShieldIcon,
  badge: BadgeIcon,
  clock: ClockIcon,
  lifebuoy: LifebuoyIcon,
  wallet: WalletIcon,
  gift: GiftIcon,
  info: InfoIcon,
  chat: ChatIcon,
  heartchat: HeartChatIcon,
  users: UsersIcon,
  moon: MoonIcon,
  sunrise: SunriseIcon,
  sparkle: SparkleIcon,
  check: CheckIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  mappin: MapPinIcon,
};

export function Icon({ name, className }: { name: string; className?: string }): React.ReactElement {
  const Cmp = ICONS[name] ?? HeartIcon;
  return <Cmp className={className} />;
}

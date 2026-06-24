import Image from "next/image";

export function Footer(): React.ReactElement {
  const year = 2026;
  return (
    <footer className="border-t border-border bg-surface text-ink">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-5">
          <Image
            src="/images/nh-logo.png"
            alt="Nurturing Hands Doulas"
            width={216}
            height={158}
            className="h-11 w-auto"
          />
          <p className="font-body text-xs text-muted">
            © {year} Nurturing Hands Doulas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CtaRow } from "@/components/Cta";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDownIcon } from "@/components/icons";
import { FAQS } from "@/lib/content";

function FaqRow({ q, a, index }: { q: string; a: string; index: number }): React.ReactElement {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;
  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-border">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface md:px-6 md:py-5"
        >
          <span className="font-display text-base font-semibold text-ink md:text-lg">{q}</span>
          <ChevronDownIcon
            className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        hidden={!open}
        className="px-5 pb-5 text-base leading-relaxed text-muted md:px-6 md:pb-6"
      >
        {a}
      </div>
    </div>
  );
}

export function Faq(): React.ReactElement {
  return (
    <section id="faq" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Good to Know" title={<>Frequently asked questions</>} />
        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 50}>
              <FaqRow q={faq.q} a={faq.a} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-row flex-wrap justify-center gap-4">
          <CtaRow secondaryLabel="Ask a question" />
        </Reveal>
      </div>
    </section>
  );
}

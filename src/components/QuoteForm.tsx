"use client";

import { useRef, useState, type FormEvent } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { PhoneCta } from "@/components/Cta";
import {
  StarIcon,
  CheckIcon,
  ConfettiIcon,
  TruckIcon,
  SparkleIcon,
  ShieldIcon,
  ChevronDownIcon,
} from "@/components/icons";
import { PHONE_DISPLAY, TIMELINE_OPTIONS } from "@/lib/content";

declare global {
  interface Window {
    MegaTag?: { trackEvent?: (event: string, data: Record<string, unknown>) => void };
    dataLayer?: unknown[];
  }
}

type FieldName = "firstName" | "lastName" | "email" | "phone" | "zip" | "bookingTimeline";

const EMAIL_PATTERN = "[A-Za-z0-9._%+\\-]+@[A-Za-z0-9.\\-]+\\.[A-Za-z]{2,}";

function isValidEmail(value: string): boolean {
  return new RegExp(`^${EMAIL_PATTERN}$`).test(value.trim());
}

function formatPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const TRUST_POINTS = [
  { icon: TruckIcon, text: "Free delivery, setup & pickup" },
  { icon: SparkleIcon, text: "Clean & sanitized equipment" },
  { icon: ShieldIcon, text: "Fully insured & licensed" },
] as const;

function validateField(name: FieldName, value: string): string {
  switch (name) {
    case "firstName":
      return value.trim() ? "" : "Please enter your first name.";
    case "lastName":
      return value.trim() ? "" : "Please enter your last name.";
    case "email":
      if (!value.trim()) return "Please enter your email address.";
      return isValidEmail(value) ? "" : "Please enter a valid email address.";
    case "phone":
      if (!value.trim()) return "Please enter your phone number.";
      return value.replace(/\D/g, "").length === 10 ? "" : "Phone must be a 10-digit number.";
    case "zip":
      if (!value.trim()) return "Please enter your ZIP code.";
      return value.replace(/\D/g, "").length === 5 ? "" : "ZIP must be a 5-digit number.";
    case "bookingTimeline":
      return value ? "" : "Please choose a timeline.";
    default:
      return "";
  }
}

const FIELDS: readonly FieldName[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "zip",
  "bookingTimeline",
];

const labelCls = "block text-sm font-semibold text-ink mb-1.5";
const inputBase =
  "lp-field w-full rounded-xl border bg-surface px-4 py-3 text-base transition focus:bg-white";

export function QuoteForm(): React.ReactElement {
  const { submitLead } = useMegaLeadForm();
  const formRef = useRef<HTMLFormElement>(null);
  const inFlightRef = useRef(false);

  const [form, setForm] = useState<Record<FieldName, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    bookingTimeline: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setFieldValue = (name: FieldName, raw: string): void => {
    const value = name === "phone" ? formatPhone(raw) : raw;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name] && validateField(name, value) === "") {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (name: FieldName): void => {
    const msg = validateField(name, form[name]);
    setErrors((prev) => {
      const next = { ...prev };
      if (msg) next[name] = msg;
      else delete next[name];
      return next;
    });
  };

  const collectErrors = (): Partial<Record<FieldName, string>> => {
    const next: Partial<Record<FieldName, string>> = {};
    for (const field of FIELDS) {
      const msg = validateField(field, form[field]);
      if (msg) next[field] = msg;
    }
    return next;
  };

  const focusFirstInvalid = (invalid: Partial<Record<FieldName, string>>): void => {
    for (const field of FIELDS) {
      if (invalid[field]) {
        formRef.current?.querySelector<HTMLElement>(`[name="${field}"]`)?.focus();
        return;
      }
    }
  };

  // Validate-first, then hand off to native submit via requestSubmit().
  const handleClickSubmit = (): void => {
    const invalid = collectErrors();
    setErrors(invalid);
    if (Object.keys(invalid).length > 0) {
      focusFirstInvalid(invalid);
      return;
    }
    formRef.current?.requestSubmit();
  };

  async function performSubmit(): Promise<void> {
    if (inFlightRef.current) return;
    if (Object.keys(collectErrors()).length > 0) return;

    inFlightRef.current = true;
    setSubmitting(true);
    setSubmitError(null);

    // Separate field keys only — every submission is a qualified lead.
    const leadData = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.replace(/\D/g, ""),
      zip: form.zip.replace(/\D/g, ""),
      bookingTimeline: form.bookingTimeline,
    };

    try {
      await submitLead(leadData);

      // MegaTag event fires BEFORE the dataLayer push.
      window.MegaTag?.trackEvent?.("form_submit", leadData);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        form_id: "quote-form",
        form_provider: "customer-landing-ajt-bounce",
      });

      setSubmitted(true);
    } catch {
      setSubmitError(
        `Something went wrong sending your request. Please call us at ${PHONE_DISPLAY}.`
      );
    } finally {
      setSubmitting(false);
      inFlightRef.current = false;
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    void performSubmit();
  };

  const fieldError = (name: FieldName): React.ReactElement | null =>
    errors[name] ? (
      <p id={`${name}-error`} role="alert" aria-live="polite" className="lp-input-error">
        {errors[name]}
      </p>
    ) : null;

  const inputCls = (name: FieldName): string =>
    `${inputBase} ${errors[name] ? "lp-input-invalid" : "border-border"}`;

  return (
    <section id="quote-form" className="relative overflow-hidden bg-gradient-to-br from-ink to-[#16223a] py-20 md:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-confetti opacity-60" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Persuasion column */}
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider text-accent ring-1 ring-white/15">
            <ConfettiIcon className="h-4 w-4" />
            Book Your Summer Date
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-display font-bold leading-[1.05] text-white">
            Reserve Your Date Before It&apos;s Gone
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/80">
            Summer weekends book fast and the best-weather window closes by September. Grab a fast,
            free quote now and lock in the party everyone will be talking about.
          </p>

          <ul className="mt-7 space-y-3">
            {TRUST_POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-base font-semibold text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PhoneCta tone="onDark" />
            <span className="flex items-center gap-2 text-sm font-semibold text-white/80">
              <span className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              Rated 5.0 by 500+ customers
            </span>
          </div>
        </div>

        {/* Form column */}
        <div>
          {submitted ? (
            <div className="rounded-3xl bg-white p-8 text-center shadow-2xl md:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                <CheckIcon className="h-8 w-8 text-success" />
              </div>
              <h3 className="mt-5 text-2xl font-display font-bold text-ink">Request Received!</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Woohoo! 🎉 The AJT Bounce team will reach out shortly with your free quote. Can&apos;t
                wait? Call us now at{" "}
                <a href="tel:+15082035946" className="font-bold text-primary-active underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 md:p-8"
            >
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-display font-bold text-ink">Get Your Free Quote</h3>
                <p className="mt-1 text-sm text-muted">Fast &amp; free · No obligation</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={labelCls}>
                      First Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(e) => setFieldValue("firstName", e.target.value)}
                      onBlur={() => handleBlur("firstName")}
                      aria-invalid={errors.firstName ? "true" : undefined}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      className={inputCls("firstName")}
                    />
                    {fieldError("firstName")}
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelCls}>
                      Last Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(e) => setFieldValue("lastName", e.target.value)}
                      onBlur={() => handleBlur("lastName")}
                      aria-invalid={errors.lastName ? "true" : undefined}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      className={inputCls("lastName")}
                    />
                    {fieldError("lastName")}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    pattern={EMAIL_PATTERN}
                    title="Enter a valid email address, e.g. name@example.com"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputCls("email")}
                  />
                  {fieldError("email")}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelCls}>
                      Phone <span className="text-error">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      required
                      pattern="\(\d{3}\) \d{3}-\d{4}"
                      title="Enter a 10-digit US phone number"
                      placeholder="(555) 123-4567"
                      value={form.phone}
                      onChange={(e) => setFieldValue("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      aria-invalid={errors.phone ? "true" : undefined}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={inputCls("phone")}
                    />
                    {fieldError("phone")}
                  </div>
                  <div>
                    <label htmlFor="zip" className={labelCls}>
                      ZIP Code <span className="text-error">*</span>
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      required
                      maxLength={5}
                      placeholder="02035"
                      value={form.zip}
                      onChange={(e) => setFieldValue("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
                      onBlur={() => handleBlur("zip")}
                      aria-invalid={errors.zip ? "true" : undefined}
                      aria-describedby={errors.zip ? "zip-error" : undefined}
                      className={inputCls("zip")}
                    />
                    {fieldError("zip")}
                  </div>
                </div>

                <div>
                  <label htmlFor="bookingTimeline" className={labelCls}>
                    How soon are you looking to book your rental? <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="bookingTimeline"
                      name="bookingTimeline"
                      required
                      value={form.bookingTimeline}
                      onChange={(e) => setFieldValue("bookingTimeline", e.target.value)}
                      onBlur={() => handleBlur("bookingTimeline")}
                      aria-invalid={errors.bookingTimeline ? "true" : undefined}
                      aria-describedby={errors.bookingTimeline ? "bookingTimeline-error" : undefined}
                      className={`${inputCls("bookingTimeline")} appearance-none pr-11 ${form.bookingTimeline ? "text-ink" : "text-muted"}`}
                    >
                      <option value="" disabled>
                        Select a timeline…
                      </option>
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                  </div>
                  {fieldError("bookingTimeline")}
                </div>
              </div>

              {submitError ? (
                <p role="alert" className="mt-4 text-center text-sm font-semibold text-error">
                  {submitError}
                </p>
              ) : null}

              <button
                type="button"
                onClick={handleClickSubmit}
                disabled={submitting}
                className="pulse-glow mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-display text-lg font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:scale-[0.98] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Get a Free Quote"}
              </button>

              <p className="mt-4 text-center text-xs text-muted">
                No obligation · We respond fast · Your info is never sold or spammed.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

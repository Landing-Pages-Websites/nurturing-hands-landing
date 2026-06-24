"use client";

import { useRef, useState, type FormEvent } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { CheckIcon, ChevronDownIcon } from "@/components/icons";
import { EMAIL, EMAIL_HREF, SERVICE_INTEREST_OPTIONS } from "@/lib/content";

declare global {
  interface Window {
    MegaTag?: { trackEvent?: (event: string, data: Record<string, unknown>) => void };
    dataLayer?: unknown[];
  }
}

type RequiredField = "firstName" | "lastName" | "email";
type FieldName = RequiredField | "phone" | "serviceInterest" | "message";

const REQUIRED_FIELDS: readonly RequiredField[] = ["firstName", "lastName", "email"];
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

function validateRequired(name: RequiredField, value: string): string {
  switch (name) {
    case "firstName":
      return value.trim() ? "" : "Please enter your first name.";
    case "lastName":
      return value.trim() ? "" : "Please enter your last name.";
    case "email":
      if (!value.trim()) return "Please enter your email address.";
      return isValidEmail(value) ? "" : "Please enter a valid email address.";
    default:
      return "";
  }
}

const EMPTY_FORM: Record<FieldName, string> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
};

interface LeadFormProps {
  /** Unique prefix for input ids so the form can render more than once. */
  idPrefix: string;
}

const labelCls = "block font-body text-sm font-semibold text-ink mb-1.5";
const inputBase =
  "lp-field w-full rounded-xl border bg-white px-4 py-3 text-base font-body transition placeholder:text-muted";

export function LeadForm({ idPrefix }: LeadFormProps): React.ReactElement {
  const { submitLead } = useMegaLeadForm();
  const formRef = useRef<HTMLFormElement>(null);
  const inFlightRef = useRef(false);

  const [form, setForm] = useState<Record<FieldName, string>>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<RequiredField, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setFieldValue = (name: FieldName, raw: string): void => {
    const value = name === "phone" ? formatPhone(raw) : raw;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (
      (REQUIRED_FIELDS as readonly string[]).includes(name) &&
      errors[name as RequiredField] &&
      validateRequired(name as RequiredField, value) === ""
    ) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as RequiredField];
        return next;
      });
    }
  };

  const handleBlur = (name: RequiredField): void => {
    const msg = validateRequired(name, form[name]);
    setErrors((prev) => {
      const next = { ...prev };
      if (msg) next[name] = msg;
      else delete next[name];
      return next;
    });
  };

  const collectErrors = (): Partial<Record<RequiredField, string>> => {
    const next: Partial<Record<RequiredField, string>> = {};
    for (const field of REQUIRED_FIELDS) {
      const msg = validateRequired(field, form[field]);
      if (msg) next[field] = msg;
    }
    return next;
  };

  const focusFirstInvalid = (invalid: Partial<Record<RequiredField, string>>): void => {
    for (const field of REQUIRED_FIELDS) {
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

    // Separated field keys only — every fill is a lead, no duplicate keys.
    const leadData = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.replace(/\D/g, ""),
      serviceInterest: form.serviceInterest,
      message: form.message.trim(),
    };

    try {
      await submitLead(leadData);

      window.MegaTag?.trackEvent?.("form_submit", leadData);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission",
        form_id: "consultation-form",
        form_provider: "customer-landing-nurturing-hands",
      });

      setSubmitted(true);
    } catch {
      setSubmitError(
        `Something went wrong sending your request. Please email us at ${EMAIL}.`
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

  const id = (name: string): string => `${idPrefix}-${name}`;

  const fieldError = (name: RequiredField): React.ReactElement | null =>
    errors[name] ? (
      <p id={`${id(name)}-error`} role="alert" aria-live="polite" className="lp-input-error">
        {errors[name]}
      </p>
    ) : null;

  const inputCls = (name: RequiredField): string =>
    `${inputBase} ${errors[name] ? "lp-input-invalid" : "border-border"}`;

  if (submitted) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-border md:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckIcon className="h-8 w-8 text-success" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">
          Thank you — we&apos;ve got it.
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          A member of our team will reach out shortly to schedule your free, no-obligation
          discovery call. Prefer email? Reach us anytime at{" "}
          <a href={EMAIL_HREF} className="font-semibold text-accent underline">
            {EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Request a free discovery call"
      className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-border md:p-8"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={id("firstName")} className={labelCls}>
              First name <span className="text-accent">*</span>
            </label>
            <input
              id={id("firstName")}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="First name"
              value={form.firstName}
              onChange={(e) => setFieldValue("firstName", e.target.value)}
              onBlur={() => handleBlur("firstName")}
              aria-invalid={errors.firstName ? "true" : undefined}
              aria-describedby={errors.firstName ? `${id("firstName")}-error` : undefined}
              className={inputCls("firstName")}
            />
            {fieldError("firstName")}
          </div>
          <div>
            <label htmlFor={id("lastName")} className={labelCls}>
              Last name <span className="text-accent">*</span>
            </label>
            <input
              id={id("lastName")}
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) => setFieldValue("lastName", e.target.value)}
              onBlur={() => handleBlur("lastName")}
              aria-invalid={errors.lastName ? "true" : undefined}
              aria-describedby={errors.lastName ? `${id("lastName")}-error` : undefined}
              className={inputCls("lastName")}
            />
            {fieldError("lastName")}
          </div>
        </div>

        <div>
          <label htmlFor={id("email")} className={labelCls}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id={id("email")}
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
            aria-describedby={errors.email ? `${id("email")}-error` : undefined}
            className={inputCls("email")}
          />
          {fieldError("email")}
        </div>

        <div>
          <label htmlFor={id("phone")} className={labelCls}>
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={form.phone}
            onChange={(e) => setFieldValue("phone", e.target.value)}
            className={`${inputBase} border-border`}
          />
        </div>

        <div>
          <label htmlFor={id("serviceInterest")} className={labelCls}>
            What support are you exploring?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <div className="relative">
            <select
              id={id("serviceInterest")}
              name="serviceInterest"
              value={form.serviceInterest}
              onChange={(e) => setFieldValue("serviceInterest", e.target.value)}
              className={`${inputBase} appearance-none border-border pr-11 ${
                form.serviceInterest ? "text-ink" : "text-muted"
              }`}
            >
              <option value="">Select a service…</option>
              {SERVICE_INTEREST_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          </div>
        </div>

        <div>
          <label htmlFor={id("message")} className={labelCls}>
            Anything you&apos;d like us to know?{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id={id("message")}
            name="message"
            rows={3}
            placeholder="Your due date, what you're hoping for, questions about benefits…"
            value={form.message}
            onChange={(e) => setFieldValue("message", e.target.value)}
            className={`${inputBase} resize-none border-border`}
          />
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
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 font-display text-lg font-bold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover active:scale-[0.99] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request a Consultation"}
      </button>

      <p className="mt-4 text-center text-xs text-muted">
        Free &amp; no obligation · We&apos;ll never sell or spam your information.
      </p>
    </form>
  );
}

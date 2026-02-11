"use client";

import { FormEvent, useMemo, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  compact?: boolean;
};

const budgets = [
  "Below $500 / month | INR below 41,500/month",
  "$500 - $1,500 / month | INR 41,500 - 1,24,500/month",
  "$1,500 - $4,000 / month | INR 1,24,500 - 3,32,000/month",
  "$4,000 - $10,000 / month | INR 3,32,000 - 8,30,000/month",
  "$10,000+ / month | INR 8,30,000+/month"
];

const serviceOptions = ["Web Dev", "SEO", "Social Media", "Ads", "Email Marketing", "Branding", "Other"];

export function LeadForm({ compact = false }: LeadFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const formClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

  const servicesError = useMemo(() => errors.services, [errors.services]);

  function validate(formData: FormData) {
    const nextErrors: Record<string, string> = {};
    const requiredFields = [
      ["fullName", "Full name is required."],
      ["businessName", "Business name is required."],
      ["email", "Email is required."],
      ["phone", "Phone is required."],
      ["budget", "Please select a monthly budget."]
    ] as const;

    requiredFields.forEach(([field, message]) => {
      const value = formData.get(field)?.toString().trim();
      if (!value) nextErrors[field] = message;
    });

    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (phone && !/^[+]?[0-9\s-]{7,18}$/.test(phone)) {
      nextErrors.phone = "Enter a valid phone number with country code.";
    }

    if (!selectedServices.length) {
      nextErrors.services = "Select at least one service.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!validate(formData)) return;
    setSubmitted(true);
    event.currentTarget.reset();
    setSelectedServices([]);
    setErrors({});
  }

  function toggleService(service: string) {
    setSubmitted(false);
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="text-2xl font-semibold text-ink-900">Tell us about your growth goals</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Share your details and we will send a custom growth roadmap within 24 hours.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input id="fullName" name="fullName" className={formClass} />
            {errors.fullName ? <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p> : null}
          </div>
          <div>
            <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-slate-700">
              Business Name
            </label>
            <input id="businessName" name="businessName" className={formClass} />
            {errors.businessName ? <p className="mt-1 text-xs text-rose-600">{errors.businessName}</p> : null}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input id="email" type="email" name="email" className={formClass} />
            {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email}</p> : null}
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
              Phone (with country code)
            </label>
            <input id="phone" type="tel" name="phone" className={formClass} placeholder="+1 555 123 4567" />
            {errors.phone ? <p className="mt-1 text-xs text-rose-600">{errors.phone}</p> : null}
          </div>
          <div>
            <label htmlFor="website" className="mb-2 block text-sm font-medium text-slate-700">
              Website URL (optional)
            </label>
            <input id="website" type="url" name="website" className={formClass} placeholder="https://example.com" />
          </div>
          <div>
            <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-700">
              Monthly Marketing Budget
            </label>
            <select id="budget" name="budget" className={formClass} defaultValue="">
              <option value="" disabled>
                Select budget range
              </option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
            {errors.budget ? <p className="mt-1 text-xs text-rose-600">{errors.budget}</p> : null}
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-slate-700">Services Interested In</legend>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((option) => {
              const checked = selectedServices.includes(option);
              return (
                <label
                  key={option}
                  className={cn(
                    "cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition",
                    checked
                      ? "border-brand-500 bg-brand-50 text-brand-700"
                      : "border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-600"
                  )}
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={option}
                    checked={checked}
                    onChange={() => toggleService(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              );
            })}
          </div>
          {servicesError ? <p className="mt-1 text-xs text-rose-600">{servicesError}</p> : null}
        </fieldset>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
            Message / Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={formClass}
            placeholder="Tell us your goals, timeline, and current challenges."
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 sm:w-auto"
        >
          Book Free Strategy Call
        </button>

        {submitted ? (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Thanks for reaching out. We have received your details and will contact you soon.
          </p>
        ) : null}

        <ul className="flex flex-wrap gap-3 text-xs text-slate-500">
          {siteConfig.trustPoints.map((point) => (
            <li key={point} className="rounded-full border border-slate-200 px-3 py-1">
              {point}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}


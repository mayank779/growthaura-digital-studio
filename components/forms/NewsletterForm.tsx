"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";

    if (!name || !email) {
      setError("Please enter your name and email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    setError("");
    event.currentTarget.reset();
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-ink-900">Get weekly growth playbooks</h3>
        <p className="mt-2 text-sm text-slate-600">
          Actionable SEO insights, paid ads strategies, and practical growth tips for Indian businesses.
        </p>
      </div>
      <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <input
          name="name"
          placeholder="Your name"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
        >
          Subscribe
        </button>
      </form>
      {error ? <p className="mt-3 text-sm text-rose-600">{error}</p> : null}
      {submitted ? (
        <p className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          You are subscribed. Check your inbox for upcoming growth insights.
        </p>
      ) : null}
    </div>
  );
}

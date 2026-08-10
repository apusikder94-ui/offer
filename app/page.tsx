// app/page.tsx

import React from "react";
import {
  CheckCircle2,
  MapPin,
  Monitor,
  Mail,
  Shield,
  FileText,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Lock,
  Users,
  Info,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Promotional Opportunity | Check Eligibility",
  description:
    "Limited promotional opportunity available to qualifying UK residents. Check your eligibility today.",
  openGraph: {
    title: "UK Promotional Opportunity | Check Eligibility",
    description:
      "Limited promotional opportunity available to qualifying UK residents. Check your eligibility.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const OFFER_URL =
  "https://quartzfiles.com/1908300";

const steps = [
  {
    step: "1",
    title: "Check Eligibility",
    desc: "Confirm that you meet the promotion requirements.",
    icon: Users,
  },
  {
    step: "2",
    title: "Complete the Form",
    desc: "Enter the required information accurately.",
    icon: FileText,
  },
  {
    step: "3",
    title: "Follow the Instructions",
    desc: "Complete any additional steps required by the promotion.",
    icon: CheckCircle2,
  },
];

const trustItems = [
  {
    icon: CheckCircle2,
    title: "Clear eligibility requirements",
    desc: "Know exactly who can participate before you start.",
  },
  {
    icon: FileText,
    title: "Transparent participation process",
    desc: "No hidden steps — you always know what comes next.",
  },
  {
    icon: Lock,
    title: "Secure form submission",
    desc: "Your information is handled with care and protection.",
  },
  {
    icon: Shield,
    title: "Transparent promotion",
    desc: "Review the requirements before continuing.",
  },
  {
    icon: Info,
    title: "Terms and conditions",
    desc: "Review the applicable requirements before participating.",
  },
];

const faqs = [
  {
    q: "Who can participate?",
    a: "This promotional opportunity is available to qualifying residents of the United Kingdom who meet the eligibility requirements.",
  },
  {
    q: "Is this available outside the UK?",
    a: "No. This offer is restricted to the United Kingdom (GB) only.",
  },
  {
    q: "What information is required?",
    a: "The offer may require an email address and ZIP/postcode as part of the participation process.",
  },
  {
    q: "Is Apple officially sponsoring this promotion?",
    a: "This landing page does not claim that Apple officially sponsors or endorses this promotion.",
  },
  {
    q: "How does the reward process work?",
    a: "Click the eligibility button to review the offer and follow the instructions provided on the offer page.",
  },
  {
    q: "Are there additional requirements?",
    a: "Additional eligibility requirements may apply. Review the offer page carefully before submitting information.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-indigo-50/40 text-slate-900 antialiased">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-full max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200/30 via-violet-100/20 to-transparent blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-96 rounded-full bg-gradient-to-tl from-blue-100/40 to-transparent blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-200/60 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>

            <span className="text-lg font-semibold tracking-tight text-slate-800">
              PromoCheck
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Monitor className="h-4 w-4 text-slate-400" />

            <p className="text-sm text-slate-500">
              UK Residents Only
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-2 text-sm font-medium text-indigo-700">
            <MapPin className="h-4 w-4" />
            United Kingdom Only
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent">
              $750 Apple Pay
            </span>

            <br />

            <span className="text-slate-800">
              Promotion
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Check your eligibility for this promotional opportunity
            available to qualifying UK residents.
          </p>

          {/* Hero CTA */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Check Eligibility

              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                UK residents only
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Desktop participation
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Email + ZIP submission
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Terms apply
              </li>
            </ul>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-slate-500">
            This page is an independent promotional landing page and does not
            claim official Apple sponsorship or endorsement.
          </p>
        </section>

        {/* Offer Card */}
        <section
          id="offer"
          className="mx-auto max-w-lg px-4 pb-20 sm:px-6"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
            {/* Reward */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-6 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-indigo-100">
                Potential Reward
              </p>

              <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                $750
              </p>
            </div>

            <div className="space-y-5 px-6 py-8">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Location
                  </p>

                  <p className="text-base font-semibold text-slate-800">
                    United Kingdom 🇬🇧
                  </p>
                </div>
              </div>

              {/* Participation */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Participation
                  </p>

                  <p className="text-base font-semibold text-slate-800">
                    Email / ZIP Submit
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Info className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Offer Availability
                  </p>

                  <p className="text-base font-semibold text-slate-800">
                    Limited promotional availability
                  </p>
                </div>
              </div>

              {/* Offer CTA */}
              <a
                href={OFFER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-4 text-base font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Continue

                <ArrowRight className="h-5 w-5" />
              </a>

              <p className="text-center text-xs leading-relaxed text-slate-400">
                Eligibility and offer terms may apply.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How It Works
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Three simple steps to check your eligibility
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="group relative rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-md shadow-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-md shadow-indigo-500/20">
                    {item.step}
                  </div>

                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-indigo-600" />

                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trust Section */}
        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-lg shadow-slate-100/50 backdrop-blur-sm sm:p-10">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Why You&apos;ll Feel Confident
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
              We prioritise clarity and transparency at every step.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-800">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200/80 bg-white/90 transition-shadow open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-slate-800 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="final-cta"
          className="mx-auto max-w-3xl px-4 pb-24 text-center sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 px-8 py-12 shadow-2xl shadow-indigo-500/25 sm:px-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-7 w-7 text-white" />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Check Your Eligibility?
            </h2>

            <p className="mx-auto mt-4 max-w-md text-lg text-indigo-100">
              Review the requirements and continue to the promotional form.
            </p>

            <a
              href={OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-700 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Check Eligibility

              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
            <a
              href="#terms"
              className="transition-colors hover:text-indigo-600"
            >
              Terms & Conditions
            </a>

            <a
              href="#privacy"
              className="transition-colors hover:text-indigo-600"
            >
              Privacy Policy
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-indigo-600"
            >
              Contact
            </a>

            <a
              href="#eligibility"
              className="transition-colors hover:text-indigo-600"
            >
              Eligibility
            </a>

            <a
              href="#disclosure"
              className="transition-colors hover:text-indigo-600"
            >
              Promotional Disclosure
            </a>
          </div>

          {/* Legal Sections */}
          <div className="mt-10 grid gap-8 border-t border-slate-100 pt-10 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-3">
            <div id="eligibility">
              <h3 className="font-semibold text-slate-800">
                Eligibility
              </h3>

              <p className="mt-2 leading-relaxed">
                This promotional opportunity is intended for qualifying
                residents of the United Kingdom. Additional eligibility
                criteria may apply.
              </p>
            </div>

            <div id="terms">
              <h3 className="font-semibold text-slate-800">
                Terms & Conditions
              </h3>

              <p className="mt-2 leading-relaxed">
                Participation is subject to the applicable offer terms,
                eligibility requirements, availability, and verification.
              </p>
            </div>

            <div id="privacy">
              <h3 className="font-semibold text-slate-800">
                Privacy Policy
              </h3>

              <p className="mt-2 leading-relaxed">
                Review the privacy information and data practices presented
                on the offer page before submitting any personal information.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div
            id="contact"
            className="mt-10 border-t border-slate-100 pt-8 text-center"
          >
            <p className="text-sm text-slate-500">
              Please review all offer details before participating.
            </p>
          </div>

          {/* Disclosure */}
          <div
            id="disclosure"
            className="mt-8 border-t border-slate-100 pt-8 text-center text-xs leading-relaxed text-slate-500"
          >
            <p>
              Promotional offer subject to eligibility, availability, and
              applicable terms. This landing page does not claim official
              Apple sponsorship or endorsement.
            </p>

            <p className="mt-3">
              © {new Date().getFullYear()} PromoCheck. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
  {
    question: 'How do I create an event listing?',
    answer:
      'Tap the "Listings" tab at the bottom of the screen, then tap the "+" button to create a new event. Fill in your event details like title, description, date, time, location, and optionally add photos.',
  },
  {
    question: 'How do I find events near me?',
    answer:
      'Open the "Map" tab to see events plotted on a map near your location. Make sure you have granted location permission so the app can show events in your area.',
  },
  {
    question: 'Can I edit or delete my event after posting?',
    answer:
      'Yes! Go to the "Listings" tab, find your event, and tap on it to view the details. From there you can edit or delete the listing.',
  },
  {
    question: 'How do I change my password?',
    answer:
      'Go to your Profile tab, scroll down to Settings, and tap "Change Password". You\'ll need to enter your current password and then your new one.',
  },
  {
    question: 'I forgot my password. How do I reset it?',
    answer:
      'On the login screen, tap "Reset Password". Enter the email address associated with your account and we\'ll send you a link to create a new password.',
  },
  {
    question: 'How do I add photos to my listing?',
    answer:
      'When creating or editing a listing, you\'ll see an "Add Photo" button. Tap it to select images from your photo library. You can add up to 5 photos per listing.',
  },
  {
    question: 'How do I change the distance unit (miles/km)?',
    answer:
      'Go to your Profile tab and look for "Distance Unit" under Account Information. Tap the toggle to switch between miles and kilometers.',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'Go to your Profile tab, scroll down to Settings, and tap "Delete Account". You\'ll need to confirm by typing DELETE. This action is permanent and cannot be undone.',
  },
  {
    question: "Why can't I see events on the map?",
    answer:
      "Make sure you have granted location permission to the app. You can check this in your device's Settings > Privacy > Location Services. Also ensure you have an active internet connection.",
  },
  {
    question: 'Is the app free to use?',
    answer:
      'Yes! Phoenix Yard Sales is completely free to use. You can browse events, create listings, and save events at no cost.',
  },
];

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-navy pr-4">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function HelpSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 text-center px-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Phoenix Yard Sales Logo"
            width={100}
            height={100}
            className="mx-auto mb-6"
          />
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy">Help &amp; Support</h1>
        <p className="text-gray-500 mt-2">We&apos;re here to help you get the most out of Phoenix Yard Sales.</p>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-semibold text-navy mb-2">Contact Us</h2>
          <p className="text-gray-500 text-sm mb-5">
            Have a question or running into an issue? Reach out and we&apos;ll get back to you as soon as we can.
          </p>
          <a
            href="mailto:support@smashingwallets.com?subject=Phoenix%20Yard%20Sales%20Support%20Request"
            className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
          >
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Email Support</p>
              <p className="text-primary font-medium text-sm truncate">support@smashingwallets.com</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-gray-400 shrink-0 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold text-navy mb-5">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/terms-of-service"
              className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-5 py-4 hover:shadow-md transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span className="text-sm font-medium text-navy">Terms of Service</span>
            </Link>
            <Link
              href="/privacy-policy"
              className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-5 py-4 hover:shadow-md transition-shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-sm font-medium text-navy">Privacy Policy</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-navy">Phoenix Yard Sales</p>
          <p className="text-xs text-gray-400 mt-1">Version 1.0.0</p>
        </footer>
      </div>
    </div>
  );
}

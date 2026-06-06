import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Phoenix Yard Sales"
                width={120}
                height={120}
                className="drop-shadow-lg"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              Events That Won&apos;t{' '}
              <br />
              <span className="text-primary">Break the Bank</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Discover affordable experiences in your area. From free concerts to budget-friendly 
              yardsales, swap meets, , find your next adventure without emptying your wallet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Get Started Free
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy bg-white hover:bg-gray-50 rounded-xl transition-all border-2 border-gray-200"
              >
                Learn More
              </a>
            </div>

            {/* App Store badges placeholder */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <p className="text-sm text-gray-500">Coming soon to</p>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
                  App Store
                </div>
                <div className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Phoenix Yard Sales?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to find events that fit your budget and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Discover Events</h3>
              <p className="text-gray-600">
                Browse thousands of events in your area, from free community gatherings to affordable concerts and festivals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Budget Friendly</h3>
              <p className="text-gray-600">
                Filter by price to find events that match your budget. Never miss out on fun because of cost.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Save Favorites</h3>
              <p className="text-gray-600">
                Bookmark events you&apos;re interested in and get reminders so you never miss what matters to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Join thousands of people finding amazing events at prices they can afford.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy bg-white hover:bg-gray-100 rounded-xl transition-all hover:scale-105"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Phoenix Yard Sales"
                width={32}
                height={32}
              />
              <span className="font-semibold text-navy">Phoenix Yard Sales</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/help-support" className="hover:text-primary transition-colors">
                Help & Support
              </Link>
            </div>
            <div className="text-sm text-gray-400 text-center sm:text-right">
              <p>© {new Date().getFullYear()} Smashing Wallets LLC. All rights reserved.</p>
              <p className="mt-1">Phoenix Yard Sales is a product of Smashing Wallets LLC</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

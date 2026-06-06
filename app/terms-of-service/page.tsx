import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfServicePage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-navy">Terms of Service</h1>
        <p className="text-gray-400 mt-2">Last Updated: April 16, 2026</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-100/50 p-6 sm:p-10 space-y-10">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              By downloading, installing, or using Phoenix Yard Sales (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Phoenix Yard Sales is a mobile application that allows users to discover and post local events such as yard sales, garage sales, estate sales, farmers markets, and other community events. The App provides a platform for users to share event information; we do not organize, host, or guarantee any events listed.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">3. User Accounts</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-3">
              To use certain features of the App, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              You must be at least 18 years old to create an account and use this App.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">4. User Content</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-3">
              You are responsible for all content you post, including event listings, photos, and descriptions (&ldquo;User Content&rdquo;). By posting User Content, you represent that:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
              <li>You own or have rights to share the content</li>
              <li>The content is accurate and not misleading</li>
              <li>The content does not violate any laws or these Terms</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              You grant Smashing Wallets LLC a non-exclusive, royalty-free license to display your User Content within the App for the purpose of providing our service.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">5. Prohibited Content &amp; Conduct</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-3">
              You agree not to post content or engage in conduct that:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
              <li>Is illegal, fraudulent, or promotes illegal activity</li>
              <li>Is false, misleading, or deceptive</li>
              <li>Infringes on intellectual property rights</li>
              <li>Is harassing, threatening, or discriminatory</li>
              <li>Contains malware, spam, or harmful code</li>
              <li>Violates the privacy of others</li>
              <li>Advertises prohibited items (weapons, drugs, stolen goods, etc.)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              We reserve the right to remove any content and suspend or terminate accounts that violate these Terms.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">6. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-3 uppercase font-medium">
              The App is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
              <li>The accuracy of event listings or user-provided information</li>
              <li>That events will take place as described</li>
              <li>The quality, safety, or legality of items at events</li>
              <li>Uninterrupted or error-free service</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              You use the App and attend events at your own risk. Always exercise caution when meeting strangers or making purchases.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed text-sm uppercase font-medium">
              To the maximum extent permitted by law, Smashing Wallets LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App or attendance at any event discovered through the App.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              We are not responsible for disputes between users or any transactions that occur at events.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">8. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              The App, including its design, features, and content (excluding User Content), is owned by Smashing Wallets LLC and protected by copyright and other laws. You may not copy, modify, distribute, or reverse engineer any part of the App without our written permission.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">9. Termination</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We may suspend or terminate your account at any time for violation of these Terms or for any other reason at our discretion. You may also delete your account at any time through the App settings. Upon termination, your right to use the App will immediately cease.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">10. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We may update these Terms from time to time. We will notify you of significant changes by posting a notice in the App. Continued use of the App after changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">11. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              These Terms are governed by the laws of the State of Arizona, United States, without regard to conflict of law principles.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">12. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <a
              href="mailto:support@smashingwallets.com?subject=Phoenix%20Yard%20Sales%20Terms%20of%20Service%20Question"
              className="flex items-center gap-4 bg-background rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
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
          </div>

          {/* Footer */}
          <footer className="pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-400">&copy; 2025&ndash;2026 Smashing Wallets LLC. All rights reserved.</p>
            <p className="text-xs text-gray-400 mt-1">Phoenix Yard Sales is a product of Smashing Wallets LLC</p>
          </footer>
        </div>
      </section>
    </div>
  );
}

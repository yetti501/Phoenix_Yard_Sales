import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="text-gray-400 mt-2">Last Updated: April 16, 2026</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-100/50 p-6 sm:p-10 space-y-10">
          {/* Introduction */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Introduction</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Welcome to Phoenix Yard Sales! We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our mobile application. By using Phoenix Yard Sales, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-5">Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Account Information</h3>
                <p className="text-gray-600 text-sm mb-2">When you create an account, we collect:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li><span className="font-medium text-navy">Email address</span> &mdash; Used for account login, password resets, and important service updates</li>
                  <li><span className="font-medium text-navy">Name</span> &mdash; Displayed on your event listings (if you choose)</li>
                  <li><span className="font-medium text-navy">Phone number</span> (optional) &mdash; Only displayed on listings if you choose to share it</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Event Listing Information</h3>
                <p className="text-gray-600 text-sm mb-2">When you create an event listing, we collect:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li>Event details (title, description, date, time, price)</li>
                  <li>Location/address (used to display events on the map)</li>
                  <li>Contact information you choose to include</li>
                  <li>Photos you upload</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Automatically Collected Information</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li><span className="font-medium text-navy">Device location</span> &mdash; Used to show nearby events (only when you grant permission)</li>
                  <li><span className="font-medium text-navy">Device information</span> &mdash; Basic device type and operating system for app functionality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">How We Use Your Information</h2>
            <p className="text-gray-600 text-sm mb-3">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
              <li>Provide and maintain the Phoenix Yard Sales service</li>
              <li>Allow you to create and manage event listings</li>
              <li>Display events on the map for other users to discover</li>
              <li>Send transactional emails (password resets, account updates, important notifications)</li>
              <li>Respond to your support requests</li>
              <li>Improve and optimize our app</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-5">Information Sharing</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-navy mb-2">What We Share Publicly</h3>
                <p className="text-gray-600 text-sm mb-2">When you create an event listing, the following information may be visible to other Phoenix Yard Sales users:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li>Event details (title, description, date, time, location)</li>
                  <li>Contact information only if you toggle it to &ldquo;Visible&rdquo; when creating a listing</li>
                  <li>Photos you upload to listings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">What We Never Share</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li>We do not sell your personal data to third parties</li>
                  <li>We do not share your email address with other users (unless you include it on a listing)</li>
                  <li>We do not use your data for advertising purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Service Providers</h3>
                <p className="text-gray-600 text-sm mb-2">We use trusted third-party services to operate Phoenix Yard Sales:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li><span className="font-medium text-navy">Appwrite</span> &mdash; Secure cloud database and authentication</li>
                  <li><span className="font-medium text-navy">Google Maps</span> &mdash; Map display and address validation</li>
                  <li><span className="font-medium text-navy">Appwrite Email</span> &mdash; Transactional email delivery (password resets, verification)</li>
                </ul>
                <p className="text-gray-600 text-sm mt-2">
                  These providers only access data necessary to perform their services and are bound by their own privacy policies.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Data Security</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-3">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Secure password hashing</li>
              <li>Regular security updates</li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights & Choices */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Your Rights &amp; Choices</h2>
            <p className="text-gray-600 text-sm mb-3">You have control over your data:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
              <li><span className="font-medium text-navy">Access &amp; Update</span> &mdash; View and edit your profile information anytime in the app</li>
              <li><span className="font-medium text-navy">Contact Visibility</span> &mdash; Choose whether to show phone/email on each listing</li>
              <li><span className="font-medium text-navy">Delete Listings</span> &mdash; Remove your event listings at any time</li>
              <li><span className="font-medium text-navy">Delete Account</span> &mdash; Permanently delete your account and associated data from Settings</li>
              <li><span className="font-medium text-navy">Location Permission</span> &mdash; Grant or revoke location access in your device settings</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We retain your account information as long as your account is active. Event listings are retained until you delete them or they expire. When you delete your account, we permanently remove your personal data within 30 days, except where we are legally required to retain it.
            </p>
          </div>

          {/* California Privacy Rights (CCPA) */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-5">California Privacy Rights (CCPA)</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Your Rights</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li><span className="font-medium text-navy">Right to Know</span> &mdash; You can request details about what personal information we collect, the sources, the purpose of collection, and any third parties with whom we share it</li>
                  <li><span className="font-medium text-navy">Right to Delete</span> &mdash; You can delete your personal data via in-app Settings &rarr; Delete Account, or by emailing <a href="mailto:support@smashingwallets.com" className="text-primary hover:underline">support@smashingwallets.com</a></li>
                  <li><span className="font-medium text-navy">Right to Opt-Out of Sale</span> &mdash; We do NOT sell your personal data. No opt-out is necessary</li>
                  <li><span className="font-medium text-navy">Right to Non-Discrimination</span> &mdash; We will not discriminate against you for exercising any of your CCPA rights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Categories of Personal Information Collected</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li><span className="font-medium text-navy">Identifiers</span> &mdash; Name, email address, phone number (optional), account ID</li>
                  <li><span className="font-medium text-navy">Geolocation data</span> &mdash; Approximate device location (only with your permission)</li>
                  <li><span className="font-medium text-navy">User-generated content</span> &mdash; Event listings, photos, descriptions</li>
                  <li><span className="font-medium text-navy">Internet activity</span> &mdash; Saved events, app preferences</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  We do NOT collect sensitive personal information such as Social Security numbers, financial account details, or biometric data.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Response Commitment</h3>
                <p className="text-gray-600 text-sm">
                  We will respond to verifiable consumer requests within 45 days.
                </p>
              </div>
            </div>
          </div>

          {/* European Privacy Rights (GDPR) */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-5">European Privacy Rights (GDPR)</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, the General Data Protection Regulation (GDPR) provides you with certain rights regarding your personal data.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Your Rights</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li><span className="font-medium text-navy">Right of Access</span> &mdash; Request a copy of your personal data</li>
                  <li><span className="font-medium text-navy">Right to Rectification</span> &mdash; Request correction of inaccurate data, or update it directly in the app</li>
                  <li><span className="font-medium text-navy">Right to Erasure</span> &mdash; Request deletion of your data via the Delete Account feature or by emailing <a href="mailto:support@smashingwallets.com" className="text-primary hover:underline">support@smashingwallets.com</a></li>
                  <li><span className="font-medium text-navy">Right to Restrict Processing</span> &mdash; Limit how we use your data in certain circumstances</li>
                  <li><span className="font-medium text-navy">Right to Data Portability</span> &mdash; Request your data in a structured, machine-readable format</li>
                  <li><span className="font-medium text-navy">Right to Object</span> &mdash; Object to the processing of your data in certain circumstances</li>
                  <li><span className="font-medium text-navy">Right to Withdraw Consent</span> &mdash; For example, revoking location permission in your device settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Legal Basis for Processing</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 ml-1">
                  <li><span className="font-medium text-navy">Contract performance</span> &mdash; Account management and event listings</li>
                  <li><span className="font-medium text-navy">Consent</span> &mdash; Location data and photos</li>
                  <li><span className="font-medium text-navy">Legitimate interests</span> &mdash; Security and service improvement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">International Data Transfers</h3>
                <p className="text-gray-600 text-sm">
                  Your data may be transferred to and processed in the United States. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable law.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-navy mb-2">Response Commitment &amp; Complaints</h3>
                <p className="text-gray-600 text-sm">
                  We will respond to your requests within 30 days. You also have the right to lodge a complaint with your local data protection authority. For all requests, contact us at <a href="mailto:support@smashingwallets.com" className="text-primary hover:underline">support@smashingwallets.com</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Phoenix Yard Sales is intended for users who are 18 years of age or older. We do not knowingly collect personal information from anyone under 18. If you believe we have collected data from someone under 18, please contact us immediately and we will promptly delete that information.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy in the app and updating the &ldquo;Last Updated&rdquo; date. Continued use of Phoenix Yard Sales after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              If you have questions about this privacy policy or your data, please contact us:
            </p>
            <a
              href="mailto:support@smashingwallets.com?subject=Phoenix%20Yard%20Sales%20Privacy%20Policy%20Question"
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

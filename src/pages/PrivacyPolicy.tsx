import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-serif text-xl md:text-2xl font-light text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-slate-muted text-sm font-sans leading-relaxed">{children}</div>
  </div>
);

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">Legal</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-3">Privacy Policy</h1>
        <p className="text-slate-muted text-sm font-sans mb-12">Last updated: April 2026</p>

        <div className="border-t border-border pt-10">
          <Section title="1. Information We Collect">
            <p>
              When you submit a pre-order or join the waitlist, we collect your name and email address. We may also collect
              your billing address and payment information when processing a transaction (handled securely by Stripe — we
              never store card numbers).
            </p>
            <p>
              We automatically collect basic usage data when you visit our site, including IP address, browser type, pages
              visited, and referring URLs, via standard web analytics.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Process and fulfill your pre-order</li>
              <li>Send transactional emails (order confirmation, shipping updates)</li>
              <li>Send a single launch notification if you joined the waitlist</li>
              <li>Respond to customer service inquiries</li>
              <li>Improve our website and products</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </Section>

          <Section title="3. Email Communications">
            <p>
              By submitting your email, you consent to receive transactional emails related to your order and a
              one-time launch notification. You may unsubscribe from marketing emails at any time by clicking the
              unsubscribe link in any email.
            </p>
          </Section>

          <Section title="4. Payment Processing">
            <p>
              All payments are processed through Stripe, Inc. Stripe's privacy policy governs the handling of your
              payment information. We do not store credit card numbers or CVV codes on our servers.
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              We use essential cookies necessary for the website to function and analytics cookies to understand how
              visitors use the site. We do not use advertising or tracking cookies.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain your personal information for as long as necessary to fulfill orders and comply with legal
              obligations. You may request deletion of your data at any time by emailing
              hello@slowwavenutrition.com.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p>To exercise any of these rights, contact us at hello@slowwavenutrition.com.</p>
          </Section>

          <Section title="8. Security">
            <p>
              We use industry-standard security measures to protect your information, including SSL/TLS encryption
              for all data transmitted to and from our website.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this policy periodically. We will notify you of material changes by email or by posting
              a notice on our website. Continued use of our services after changes constitutes acceptance of the
              updated policy.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              Questions about this privacy policy? Email us at{" "}
              <a href="mailto:hello@slowwavenutrition.com" className="text-gold hover:text-gold-light transition-colors">
                hello@slowwavenutrition.com
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Section = ({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) => (
  <div id={id} className="mb-10">
    <h2 className="font-serif text-xl md:text-2xl font-light text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-slate-muted text-sm font-sans leading-relaxed">{children}</div>
  </div>
);

const TermsOfService = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">Legal</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-3">Terms of Service</h1>
        <p className="text-slate-muted text-sm font-sans mb-12">Last updated: April 2026</p>

        <div className="border-t border-border pt-10">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Slow Wave Nutrition website (slowwavenutrition.com) or placing an order,
              you agree to be bound by these Terms of Service. If you do not agree, do not use the site.
            </p>
          </Section>

          <Section title="2. Products and Pre-Orders">
            <p>
              Slow Wave Nutrition currently accepts pre-orders for products that are in production. By placing a
              pre-order, you are reserving a product at the listed price. We will charge your payment method when
              the order is ready to ship, or in accordance with the checkout flow at the time of purchase.
            </p>
            <p>
              Product descriptions, ingredient formulations, and serving information are subject to change prior
              to first shipment. You will be notified of any material changes before your order ships.
            </p>
          </Section>

          <Section title="3. Pricing and Payment">
            <p>
              All prices are listed in US dollars. We reserve the right to change prices at any time, but changes
              will not affect confirmed pre-orders. Payment is processed securely through Stripe.
            </p>
          </Section>

          <Section title="4. Shipping">
            <p>
              We currently ship to the contiguous United States only. Shipping times are estimates and are not
              guaranteed. We are not responsible for carrier delays. Risk of loss passes to the customer upon
              delivery to the carrier.
            </p>
          </Section>

          <Section title="5. Returns and Refunds">
            <p>
              We offer a 30-day money-back guarantee from the date of delivery. See our{" "}
              <a href="/returns" className="text-gold hover:text-gold-light transition-colors">Return Policy</a>{" "}
              for full details.
            </p>
          </Section>

          <Section title="6. Health Disclaimer" id="fda">
            <p>
              These statements have not been evaluated by the Food and Drug Administration. Slow Wave products are
              not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
            </p>
            <p>
              Consult a qualified healthcare professional before use if you are pregnant, nursing, taking
              prescription medications, or have a pre-existing medical condition. Keep out of reach of children.
            </p>
            <p>
              The information on this website is for educational purposes only and is not a substitute for
              professional medical advice. Do not disregard professional medical advice or delay seeking it
              because of content on this site.
            </p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos, formulas, and design — is the
              property of Slow Wave Nutrition LLC and protected by copyright law. You may not reproduce,
              distribute, or create derivative works without our written permission.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Slow Wave Nutrition LLC shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of our products or
              website. Our total liability for any claim shall not exceed the amount you paid for the product
              giving rise to the claim.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These terms are governed by the laws of the State of Oklahoma, without regard to conflict of law
              principles. Any disputes shall be resolved in the courts of Oklahoma County, Oklahoma.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              Questions about these terms? Email us at{" "}
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

export default TermsOfService;

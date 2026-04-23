import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-serif text-xl md:text-2xl font-light text-foreground mb-4">{title}</h2>
    <div className="space-y-3 text-slate-muted text-sm font-sans leading-relaxed">{children}</div>
  </div>
);

const ReturnPolicy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">Legal</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-3">Return Policy</h1>
        <p className="text-slate-muted text-sm font-sans mb-12">Last updated: April 2026</p>

        {/* Highlight */}
        <div className="border border-gold/20 rounded-sm bg-gold/[0.04] p-6 mb-12">
          <p className="font-serif text-xl text-foreground mb-2">30-Day Money-Back Guarantee</p>
          <p className="text-slate-muted text-sm font-sans leading-relaxed">
            If you are not satisfied with your Slow Wave product for any reason, contact us within 30 days of
            delivery for a full refund. No questions asked. No return required.
          </p>
        </div>

        <div className="border-t border-border pt-10">
          <Section title="Eligibility">
            <p>
              You are eligible for a full refund if:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>You contact us within 30 days of the delivery date</li>
              <li>You provide your order number or the email address used to order</li>
              <li>Your order has not already been refunded</li>
            </ul>
            <p>
              You do not need to return the product. We trust our customers and want the process to be simple.
            </p>
          </Section>

          <Section title="How to Request a Refund">
            <p>
              Email us at{" "}
              <a href="mailto:hello@slowwavenutrition.com" className="text-gold hover:text-gold-light transition-colors">
                hello@slowwavenutrition.com
              </a>{" "}
              with the subject line "Refund Request" and include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Your name</li>
              <li>Order number or email address used to order</li>
              <li>Optional: brief reason for the return (helps us improve)</li>
            </ul>
            <p>
              We will process your refund within 5 business days. Refunds are issued to the original payment method.
              Please allow 5–10 business days for the refund to appear on your statement.
            </p>
          </Section>

          <Section title="Pre-Order Cancellations">
            <p>
              If you have placed a pre-order and have not yet been charged, you may cancel at any time before
              the charge is processed by emailing us. If your pre-order has been charged, the standard 30-day
              return policy applies from the date of delivery.
            </p>
          </Section>

          <Section title="Damaged or Incorrect Orders">
            <p>
              If you receive a damaged, defective, or incorrect product, email us with a photo and we will
              send a replacement at no cost, or issue a full refund — your choice.
            </p>
          </Section>

          <Section title="Exceptions">
            <p>
              We do not accept returns on orders that have already been refunded. We reserve the right to
              decline refunds in cases of documented fraud or abuse.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions? Email us at{" "}
              <a href="mailto:hello@slowwavenutrition.com" className="text-gold hover:text-gold-light transition-colors">
                hello@slowwavenutrition.com
              </a>
              . We typically respond within 1 business day.
            </p>
          </Section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ReturnPolicy;

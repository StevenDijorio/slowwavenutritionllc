import { useState } from "react";
import { z } from "zod";
import ScrollReveal from "./ScrollReveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
});

/*
 * STRIPE INTEGRATION
 * ─────────────────────────────────────────────────────────────
 * When you have a Stripe account, replace these placeholder values:
 *
 *   1. Sign up at stripe.com and create a product ($59.99 pre-order)
 *   2. Copy your publishable key: https://dashboard.stripe.com/apikeys
 *   3. Create a Payment Link or Checkout session for your product
 *   4. Set VITE_STRIPE_PAYMENT_LINK in your .env file:
 *      VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_link_here
 *
 * Then uncomment the Stripe redirect below and remove the fallback form.
 * ─────────────────────────────────────────────────────────────
 */
const STRIPE_PAYMENT_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK as string | undefined;

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbycM552hktz29Lji94jfULyvDy12eQzPx2A7peiFAP4Sb8ydO7MCZfGUbyuI7Thkuea/exec";

const PreOrderSection = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: "name" | "email") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "name") fieldErrors.name = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // If Stripe payment link is configured, redirect to Stripe
    if (STRIPE_PAYMENT_LINK) {
      window.location.href = `${STRIPE_PAYMENT_LINK}?prefilled_email=${encodeURIComponent(result.data.email)}`;
      return;
    }

    // Fallback: collect pre-order intent via Google Sheets
    setLoading(true);
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, type: "pre-order", price: "$59.99" }),
      });
    } catch {
      // silently continue
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="preorder" className="py-24 md:py-36 px-6 noise-overlay relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.025] to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-5">Limited Pre-Order</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4">
            Be first to experience
            <br />
            <em className="text-gold italic">deep sleep.</em>
          </h2>
          <p className="text-slate-muted text-sm md:text-base font-sans leading-relaxed mb-3 max-w-lg mx-auto">
            Slow Wave v3 is in final production. Pre-order now to lock in the founding member price — ships as soon as inventory is ready.
          </p>
          <div className="flex items-center justify-center gap-6 mb-10 md:mb-12">
            <div className="text-center">
              <p className="font-serif text-4xl text-foreground font-light">$59.99</p>
              <p className="text-xs text-slate-muted font-sans mt-1 tracking-wide">30-serving pouch</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-serif text-4xl text-gold font-light">Free</p>
              <p className="text-xs text-slate-muted font-sans mt-1 tracking-wide">shipping (US)</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {submitted ? (
            <div className="py-10 px-6 border border-gold/20 rounded-sm bg-gold/[0.04]">
              <p className="font-serif text-2xl md:text-3xl text-gold mb-2">You're on the list.</p>
              <p className="text-slate-muted text-sm font-sans mt-2 leading-relaxed">
                {STRIPE_PAYMENT_LINK
                  ? "Redirecting to checkout..."
                  : "We'll send a payment link to your email as soon as we're ready to ship. Founding member pricing guaranteed."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
              <div>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Your name"
                  className="w-full bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm font-sans px-5 py-4 rounded-sm focus:outline-none focus:border-gold/40 transition-colors"
                />
                {errors.name && <p className="text-xs text-destructive mt-1.5 text-left font-sans">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="your@email.com"
                  className="w-full bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm font-sans px-5 py-4 rounded-sm focus:outline-none focus:border-gold/40 transition-colors"
                />
                {errors.email && <p className="text-xs text-destructive mt-1.5 text-left font-sans">{errors.email}</p>}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-background font-sans text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : STRIPE_PAYMENT_LINK ? "Pre-Order — $59.99" : "Reserve My Spot — $59.99"}
              </button>
            </form>
          )}

          <div className="mt-8 space-y-2">
            {!STRIPE_PAYMENT_LINK && (
              <p className="text-xs text-muted-foreground font-sans">
                No charge today. You'll receive a payment link when we're ready to ship.
              </p>
            )}
            <p className="text-xs text-muted-foreground font-sans">
              30-day money-back guarantee &nbsp;·&nbsp; Free US shipping &nbsp;·&nbsp; No spam
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-4">
            {[
              { icon: "🔬", label: "Clinically dosed", sub: "Every ingredient" },
              { icon: "🚫", label: "No fillers", sub: "Pure active powder" },
              { icon: "↩️", label: "30-day returns", sub: "No questions asked" },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="text-center">
                <span className="text-2xl">{icon}</span>
                <p className="text-xs text-foreground font-sans font-medium mt-1">{label}</p>
                <p className="text-[10px] text-slate-muted font-sans mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PreOrderSection;

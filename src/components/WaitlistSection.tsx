import { useState } from "react";
import { z } from "zod";
import ScrollReveal from "./ScrollReveal";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyglVI1pzUvblZ7KE67f8Gv3Tdx6xpzISMGD3SrMMXSMN2UgFsKuZYFrO4UaOrEDJuP/exec", {
        method: "POST",
        body: JSON.stringify({ email: result.data }),
      });
    } catch {
      // silently continue — don't block the user if the request fails
    }
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 md:py-36 px-6 noise-overlay relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4">Be first.</h2>
          <p className="text-slate-muted text-sm md:text-base font-sans leading-relaxed mb-10 md:mb-14 max-w-lg mx-auto">
            Slow Wave is launching soon. Join the waitlist for early access and founding member pricing.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {submitted ? (
            <div className="py-8">
              <p className="font-serif text-2xl text-gold">You're on the list.</p>
              <p className="text-slate-muted text-sm font-sans mt-2">We'll email you when we launch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="your@email.com"
                  className="w-full bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm font-sans px-5 py-4 rounded-sm focus:outline-none focus:border-gold/40 transition-colors"
                />
                {error && <p className="text-xs text-destructive mt-2 text-left font-sans">{error}</p>}
              </div>
              <button
                type="submit"
                className="bg-gold text-background font-sans text-sm tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap min-h-[44px]"
              >
                Join
              </button>
            </form>
          )}
          <p className="text-xs text-muted-foreground font-sans mt-6">No spam. Just one email when we launch.</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WaitlistSection;

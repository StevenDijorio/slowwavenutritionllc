import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "When will my pre-order ship?",
    a: "We are in final production and expect to ship within 8–12 weeks of the pre-order close date. You'll receive email updates with tracking information. If for any reason we miss that window, you'll be notified immediately and can cancel for a full refund.",
  },
  {
    q: "How is Slow Wave different from other sleep supplements?",
    a: "Most sleep supplements are built around high-dose melatonin or sedating antihistamines (like diphenhydramine). Both suppress deep sleep architecture. Slow Wave targets the underlying physiological barriers to slow wave sleep: magnesium deficiency, elevated cortisol, low tryptophan availability, and poor GABA tone — without sedation, tolerance, or next-day grogginess.",
  },
  {
    q: "Will I feel groggy in the morning?",
    a: "No — this is by design. We use 0.5 mg of melatonin (the physiological dose validated by MIT research), not 5–10 mg. The other ingredients work via inhibitory neurotransmitter mechanisms that resolve naturally by morning. Most users report waking up clearer, not more foggy.",
  },
  {
    q: "Is Slow Wave safe to use long-term?",
    a: "Yes. Every ingredient in Slow Wave v3 has been studied for long-term use in human trials. None of the compounds cause tolerance, receptor downregulation, or dependence at these doses. Magnesium, glycine, and tryptophan are nutrients your body uses continuously. Ashwagandha and theanine have strong long-term safety profiles.",
  },
  {
    q: "Can I take it with other supplements or medications?",
    a: "Slow Wave contains compounds that affect neurotransmitter systems. If you take any medications — especially antidepressants (SSRIs, SNRIs, MAOIs), sedatives, or blood pressure medications — consult your physician before use. The saffron extract has mild SERT-inhibiting activity that can interact with serotonergic drugs.",
  },
  {
    q: "Why is the melatonin dose only 0.5 mg?",
    a: "Because more melatonin is not better. Dr. Richard Wurtman's research at MIT established that 0.3–0.5 mg is the optimal dose to replicate natural nocturnal melatonin levels. Higher doses (5–10 mg) saturate receptors, cause next-day grogginess, and with chronic use, suppress your body's own melatonin production.",
  },
  {
    q: "What does it taste like?",
    a: "Slow Wave v3 is lightly flavored with tart cherry extract and natural vanilla. It is sweetened with monk fruit extract — no sugar, no sucralose, no artificial sweeteners. The glycine contributes a mild natural sweetness. Most users describe it as pleasant and easy to drink.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day money-back guarantee from the date of delivery. If you're not satisfied with your results, email us at hello@slowwavenutrition.com and we'll process a full refund — no questions asked, no return required.",
  },
  {
    q: "Is this FDA approved?",
    a: "Slow Wave is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease. Dietary supplements are not subject to FDA approval before sale, but we manufacture in an FDA-registered facility that follows cGMP (Current Good Manufacturing Practice) standards. Every batch is third-party tested for identity, potency, and contaminants.",
  },
  {
    q: "Do you ship internationally?",
    a: "At launch, we ship to the contiguous United States only. Free standard shipping is included on all orders. We plan to expand internationally in Q3 2026. Join the waitlist to be notified when international shipping opens.",
  },
];

const FAQSection = ({ standalone = false }: { standalone?: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayFaqs = standalone ? faqs : faqs.slice(0, 6);

  return (
    <section id="faq" className={`${standalone ? "pt-32 pb-24" : "py-24 md:py-36"} px-6 noise-overlay`}>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">FAQ</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-16 md:mb-20">
            Common questions.
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {displayFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={Math.min(i * 0.04, 0.2)}>
                <div className="border-t border-border">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left py-5 md:py-6 flex items-center justify-between gap-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base md:text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                      {faq.q}
                    </span>
                    <span className={`text-gold/60 text-xl shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6">
                      <p className="text-slate-muted text-sm font-sans leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
          <div className="border-t border-border" />
        </div>

        {!standalone && (
          <ScrollReveal delay={0.1}>
            <div className="mt-10 text-center">
              <a
                href="/faq"
                className="text-sm font-sans text-gold hover:text-gold-light transition-colors duration-300 tracking-wide"
              >
                View all questions →
              </a>
            </div>
          </ScrollReveal>
        )}

        {standalone && (
          <ScrollReveal delay={0.1}>
            <div className="mt-16 pt-10 border-t border-border text-center">
              <p className="text-slate-muted text-sm font-sans mb-4">Still have questions?</p>
              <a
                href="mailto:hello@slowwavenutrition.com"
                className="text-sm font-sans text-gold hover:text-gold-light transition-colors duration-300 tracking-wide"
              >
                hello@slowwavenutrition.com →
              </a>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default FAQSection;

import ScrollReveal from "./ScrollReveal";

const stats = [
  { number: "85%", desc: "of adults are deficient in magnesium" },
  { number: "15–20%", desc: "of your night is spent in deep sleep" },
  { number: "3×", desc: "more next-day fatigue from poor sleep architecture" },
];

const ProblemSection = () => (
  <section className="py-24 md:py-36 px-6 noise-overlay">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-28">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
            You fall asleep.
            <br />
            But you never reach
            <br />
            <span className="text-gold">deep sleep.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-5 text-slate-muted text-sm md:text-base leading-relaxed font-sans">
            <p>
              Most sleep supplements knock you out. They increase total sleep time on paper — but they suppress the slow wave phase, the deepest and most restorative stage where your body actually repairs, consolidates memory, and releases growth hormone.
            </p>
            <p>
              You wake up groggy because sedation is not the same thing as sleep quality. Slow Wave was formulated to fix what other supplements break.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 md:gap-10">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="border-t border-border pt-6">
              <p className="font-serif text-4xl md:text-5xl text-gold font-light">{stat.number}</p>
              <p className="text-slate-muted text-sm font-sans mt-3 leading-relaxed">{stat.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;

import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Tear", desc: "Open one stick pack 30–45 minutes before bed." },
  { num: "02", title: "Mix", desc: "Pour into 4–6 oz of cold water and stir until dissolved." },
  { num: "03", title: "Rest", desc: "Drink, dim the lights, step away from screens, and let the formula work." },
];

const RitualSection = () => (
  <section id="ritual" className="py-24 md:py-36 px-6 noise-overlay relative">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[140px] pointer-events-none" />

    <div className="max-w-6xl mx-auto relative">
      <ScrollReveal>
        <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">The Ritual</p>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-16 md:mb-20">
          One ritual. Every night.
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-10 md:gap-16 mb-16">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div>
              <span className="font-serif text-5xl md:text-6xl text-gold/40 font-light">{step.num}</span>
              <h3 className="font-serif text-2xl mt-3 mb-2 text-foreground">{step.title}</h3>
              <p className="text-slate-muted text-sm font-sans leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="border-t border-border pt-10 grid md:grid-cols-2 gap-10 items-start">
          <p className="text-slate-muted text-sm font-sans leading-relaxed">
            6.53 grams of precision-dosed powder. Lightly flavored with tart cherry and vanilla. Sweetened with monk fruit. No sugar. No artificial sweeteners. No dyes.
          </p>
          <div className="space-y-3">
            {[
              "30–45 min before bed for optimal absorption",
              "Consistent nightly use compounds over time",
              "Effects typically noticeable within 1–2 weeks",
              "No next-day grogginess or tolerance buildup",
            ].map((note) => (
              <div key={note} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-gold/60 mt-2 shrink-0" />
                <p className="text-slate-muted text-sm font-sans">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RitualSection;

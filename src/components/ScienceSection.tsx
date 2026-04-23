import ScrollReveal from "./ScrollReveal";

const pathways = [
  {
    name: "GABAergic Inhibition",
    desc: "Magnesium bisglycinate, magnesium taurate, magnolia bark, chamomile apigenin, and jujube extract all modulate GABA-A and GABA-B receptors through distinct binding sites — quieting neuronal excitability without tolerance.",
  },
  {
    name: "Core Temperature Regulation",
    desc: "2g of glycine activates NMDA receptors in the suprachiasmatic nucleus, triggering cutaneous vasodilation and a measurable drop in core body temperature — one of the most reliable triggers for slow wave sleep onset.",
  },
  {
    name: "Serotonin → Melatonin Pathway",
    desc: "L-tryptophan (with P5P as cofactor) feeds the 5-HTP → serotonin → melatonin cascade. P5P is the active form of B6, required for aromatic amino acid decarboxylase activity at each step.",
  },
  {
    name: "HPA Axis Modulation",
    desc: "Ashwagandha (withanolides) and magnolia bark (honokiol) each reduce cortisol through separate mechanisms — ashwagandha via HPA axis downregulation, magnolia via cortisol receptor binding. Together they reliably lower the evening cortisol spike that delays sleep onset.",
  },
  {
    name: "Mood & Serotonin Stability",
    desc: "Saffron extract (safranal) inhibits serotonin reuptake, maintaining the serotonergic tone needed for melatonin production and emotional stability entering sleep. Sleep quality and mood are bidirectionally linked.",
  },
  {
    name: "Anti-Inflammatory Architecture",
    desc: "Tart cherry anthocyanins and ashwagandha reduce NF-κB signaling and pro-inflammatory cytokines. Chronic low-grade inflammation fragments sleep architecture and suppresses deep sleep — addressing it is foundational.",
  },
];

const ScienceSection = () => (
  <section id="science" className="py-24 md:py-36 px-6 noise-overlay relative">
    {/* Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.04] blur-[180px] pointer-events-none" />

    <div className="max-w-6xl mx-auto relative">
      <ScrollReveal>
        <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">The Science</p>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">Six pathways. One goal.</h2>
        <p className="text-slate-muted text-sm md:text-base font-sans max-w-2xl leading-relaxed mb-16 md:mb-20">
          Slow Wave v3 targets every physiological mechanism that governs deep sleep quality — simultaneously and without interference.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {pathways.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="group p-6 md:p-8 rounded-sm bg-secondary/50 border border-border hover:border-gold/25 transition-all duration-500 hover:bg-secondary/70 h-full">
              <div className="w-8 h-px bg-gold mb-5" />
              <h3 className="font-serif text-lg md:text-xl mb-3 text-foreground">{p.name}</h3>
              <p className="text-slate-muted text-sm font-sans leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Research note */}
      <ScrollReveal delay={0.2}>
        <div className="mt-14 md:mt-16 border border-border rounded-sm p-6 md:p-8 bg-secondary/30">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-3">Research Basis</p>
          <p className="text-slate-muted text-sm font-sans leading-relaxed max-w-4xl">
            Every ingredient in Slow Wave v3 is selected based on peer-reviewed human clinical trials — not animal studies, not in-vitro data. Doses are calibrated to the ranges used in those trials, not to what fits cheaply in a capsule. This is why the serving size is 6.53 grams.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ScienceSection;

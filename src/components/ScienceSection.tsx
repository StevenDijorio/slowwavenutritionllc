import ScrollReveal from "./ScrollReveal";

const pathways = [
  {
    name: "GABAergic Inhibition",
    desc: "Magnesium, apigenin, and L-theanine quiet overactive neurons through complementary GABA receptor mechanisms.",
  },
  {
    name: "Core Temperature Regulation",
    desc: "3g of glycine activates NMDA receptors in the suprachiasmatic nucleus, triggering vasodilation and a natural drop in body temperature.",
  },
  {
    name: "Serotonin-Melatonin Biosynthesis",
    desc: "L-tryptophan feeds the serotonin pathway while tart cherry preserves tryptophan from degradation. Low-dose melatonin reinforces the circadian signal.",
  },
  {
    name: "HPA Axis Modulation",
    desc: "Phosphatidylserine and L-theanine blunt the cortisol response, allowing your natural melatonin rise to proceed on schedule.",
  },
  {
    name: "Anti-Inflammatory Support",
    desc: "Tart cherry anthocyanins reduce NF-κB signaling and pro-inflammatory cytokines that fragment sleep architecture.",
  },
];

const ScienceSection = () => (
  <section id="science" className="py-24 md:py-36 px-6 noise-overlay relative">
    {/* Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[150px] pointer-events-none" />

    <div className="max-w-6xl mx-auto relative">
      <ScrollReveal>
        <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">The Science</p>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">Engineered for deep sleep.</h2>
        <p className="text-slate-muted text-sm md:text-base font-sans max-w-2xl leading-relaxed mb-16 md:mb-20">
          Our formula targets five distinct physiological pathways to improve sleep quality at every level.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {pathways.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="group p-6 md:p-8 rounded-sm bg-secondary/50 border border-border hover:border-gold/20 transition-colors duration-500">
              <div className="w-8 h-px bg-gold mb-5" />
              <h3 className="font-serif text-lg md:text-xl mb-3 text-foreground">{p.name}</h3>
              <p className="text-slate-muted text-sm font-sans leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ScienceSection;

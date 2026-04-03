import ScrollReveal from "./ScrollReveal";

const ingredients = [
  { name: "Magnesium Bisglycinate", dose: "250 mg elemental", desc: "GABA receptor modulation and melatonin production support." },
  { name: "Glycine", dose: "3,000 mg", desc: "Lowers core body temperature via NMDA receptor activation in the SCN." },
  { name: "L-Theanine", dose: "200 mg", desc: "Promotes alpha brain wave activity and reduces cortisol." },
  { name: "Tart Cherry Extract", dose: "500 mg", desc: "Inhibits tryptophan degradation and provides natural melatonin." },
  { name: "L-Tryptophan", dose: "500 mg", desc: "Direct precursor to serotonin and melatonin synthesis." },
  { name: "Phosphatidylserine", dose: "100 mg", desc: "Blunts HPA axis cortisol response from physical and mental stress." },
  { name: "Apigenin", dose: "50 mg", desc: "GABA-A receptor modulation without sedation or tolerance." },
  { name: "Melatonin", dose: "0.3 mg", desc: "Physiological dose validated by MIT research. No receptor downregulation.", callout: "Most supplements use 10–30× this dose. More is not better." },
];

const IngredientsSection = () => (
  <section id="ingredients" className="py-24 md:py-36 px-6 noise-overlay relative">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">The Formula</p>
        <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
          8 ingredients. Zero filler.
        </h2>
        <p className="text-slate-muted text-sm md:text-base font-sans max-w-2xl leading-relaxed mb-16 md:mb-20">
          Every dose backed by peer-reviewed research.
        </p>
      </ScrollReveal>

      <div className="space-y-0">
        {ingredients.map((ing, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="border-t border-border py-6 md:py-8 grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-2 md:gap-8 items-start">
              <h3 className="font-serif text-lg md:text-xl text-foreground">{ing.name}</h3>
              <span className="text-gold text-sm font-sans font-medium tracking-wide whitespace-nowrap">{ing.dose}</span>
              <div>
                <p className="text-slate-muted text-sm font-sans leading-relaxed">{ing.desc}</p>
                {ing.callout && (
                  <p className="mt-2 text-xs text-gold/80 font-sans italic border-l-2 border-gold/30 pl-3">
                    {ing.callout}
                  </p>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </div>
  </section>
);

export default IngredientsSection;

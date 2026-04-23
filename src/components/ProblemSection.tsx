import ScrollReveal from "./ScrollReveal";

const stats = [
  { number: "70M+", desc: "Americans suffer from chronic sleep disorders" },
  { number: "13–23%", desc: "of your night should be in slow wave (deep) sleep" },
  { number: "4×", desc: "increase in chronic disease risk from long-term sleep deprivation" },
  { number: "40%", desc: "of adults are severely magnesium deficient — the mineral most critical for deep sleep" },
];

const ProblemSection = () => (
  <section className="py-24 md:py-36 px-6 noise-overlay">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20 md:mb-28">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-5">The Problem</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight">
            You sleep 8 hours.
            <br />
            You wake up
            <br />
            <span className="text-gold italic">exhausted.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-5 text-slate-muted text-sm md:text-base leading-relaxed font-sans pt-8 md:pt-12">
            <p>
              The problem isn't how long you sleep. It's <strong className="text-foreground font-medium">what stage</strong> you reach. Slow wave sleep — also called deep sleep or N3 — is the only stage where your brain clears metabolic waste, your body repairs tissue, and growth hormone is released.
            </p>
            <p>
              Most adults never get there. Stress elevates cortisol. Magnesium deficiency blocks GABA receptors. Poor tryptophan metabolism starves your melatonin pathway. You spend the night in light sleep, cycling through N1 and N2, and never descend.
            </p>
            <p>
              Most sleep supplements make this <strong className="text-foreground font-medium">worse</strong> — not better. High-dose melatonin suppresses natural production. Sedating antihistamines like diphenhydramine block REM and deep sleep simultaneously. You feel knocked out. You are not rested.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Sleep architecture visualization */}
      <ScrollReveal>
        <div className="mb-20 md:mb-28 p-6 md:p-10 rounded-sm bg-secondary/40 border border-border">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-6">Typical sleep architecture</p>
          <div className="relative">
            {/* Sleep stage labels */}
            <div className="flex flex-col gap-1 mb-3">
              {["Awake", "N1 (Light)", "N2 (Light)", "N3 (Deep)", "REM"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <span className="text-[10px] tracking-wide text-slate-muted font-sans w-20 text-right shrink-0">{stage}</span>
                  <div className="flex-1 h-7 relative">
                    {/* Simplified sleep hypnogram */}
                    {i === 0 && (
                      <div className="absolute inset-0 flex items-center">
                        <div className="h-px bg-border w-full" />
                        <div className="absolute left-0 w-8 h-3 bg-slate-muted/15 rounded-sm" />
                        <div className="absolute left-[85%] w-6 h-3 bg-slate-muted/10 rounded-sm" />
                      </div>
                    )}
                    {i === 1 && (
                      <div className="absolute inset-0 flex items-center">
                        <div className="h-px bg-border w-full" />
                        <div className="absolute left-[8%] w-10 h-4 bg-slate-muted/20 rounded-sm" />
                        <div className="absolute left-[30%] w-8 h-4 bg-slate-muted/20 rounded-sm" />
                        <div className="absolute left-[60%] w-8 h-4 bg-slate-muted/15 rounded-sm" />
                      </div>
                    )}
                    {i === 2 && (
                      <div className="absolute inset-0 flex items-center">
                        <div className="h-px bg-border w-full" />
                        <div className="absolute left-[5%] w-16 h-5 bg-slate-muted/25 rounded-sm" />
                        <div className="absolute left-[28%] w-12 h-5 bg-slate-muted/25 rounded-sm" />
                        <div className="absolute left-[55%] w-20 h-5 bg-slate-muted/25 rounded-sm" />
                        <div className="absolute left-[82%] w-12 h-5 bg-slate-muted/20 rounded-sm" />
                      </div>
                    )}
                    {i === 3 && (
                      <div className="absolute inset-0 flex items-center">
                        <div className="h-px bg-border w-full" />
                        {/* Ideal slow wave blocks */}
                        <div className="absolute left-[18%] w-8 h-5 bg-gold/30 rounded-sm border border-gold/20" title="Too short" />
                        <div className="absolute left-[37%] w-5 h-5 bg-gold/20 rounded-sm border border-gold/10" />
                        <div className="absolute left-[52%] w-3 h-5 bg-gold/15 rounded-sm border border-gold/10" />
                      </div>
                    )}
                    {i === 4 && (
                      <div className="absolute inset-0 flex items-center">
                        <div className="h-px bg-border w-full" />
                        <div className="absolute left-[38%] w-10 h-5 bg-slate-muted/20 rounded-sm" />
                        <div className="absolute left-[58%] w-14 h-5 bg-slate-muted/25 rounded-sm" />
                        <div className="absolute left-[77%] w-14 h-5 bg-slate-muted/25 rounded-sm" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Time axis */}
              <div className="flex items-center gap-3 mt-1">
                <span className="w-20" />
                <div className="flex-1 flex justify-between">
                  {["11pm", "1am", "3am", "5am", "7am"].map((t) => (
                    <span key={t} className="text-[9px] text-slate-muted/60 font-sans">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-muted font-sans mt-4 italic">
              Notice how slow wave sleep (N3) is minimal and clustered early — by mid-night, most people have exhausted their deep sleep window.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="border-t border-border pt-6">
              <p className="font-serif text-4xl md:text-5xl text-gold font-light">{stat.number}</p>
              <p className="text-slate-muted text-sm font-sans mt-3 leading-relaxed">{stat.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Solution bridge */}
      <ScrollReveal delay={0.2}>
        <div className="mt-20 md:mt-28 border-t border-border pt-12 text-center">
          <p className="font-serif text-2xl md:text-3xl font-light text-foreground">
            The solution isn't sedation. It's <em className="text-gold">restoration.</em>
          </p>
          <p className="text-slate-muted text-sm md:text-base font-sans mt-4 max-w-2xl mx-auto leading-relaxed">
            Slow Wave is built around a single objective: maximizing the quality, depth, and duration of slow wave sleep using compounds with proven, complementary mechanisms.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;

import { motion } from "framer-motion";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden noise-overlay">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.02] blur-[140px]" />
      </div>

      {/* Star-like particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-foreground/20 rounded-full"
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              width: i % 3 === 0 ? "2px" : "1px",
              height: i % 3 === 0 ? "2px" : "1px",
            }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xs md:text-sm tracking-[0.35em] uppercase text-slate-muted font-sans mb-6 md:mb-8"
      >
        Slow Wave Nutrition · v3 Formula
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] max-w-5xl"
      >
        Deeper Sleep.
        <br />
        <em className="text-gold italic">Better Living.</em>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-sm md:text-base text-slate-muted font-sans mt-7 md:mt-9 max-w-lg leading-relaxed"
      >
        12 precision-dosed ingredients. Engineered to restore the deep sleep your body is starving for.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          onClick={() => handleScroll("#preorder")}
          className="bg-gold text-background font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 font-medium"
        >
          Pre-Order — $59.99
        </button>
        <button
          onClick={() => handleScroll("#science")}
          className="text-sm font-sans text-slate-muted hover:text-foreground tracking-wide transition-colors duration-300 flex items-center gap-2"
        >
          See the science
          <span className="text-gold">↓</span>
        </button>
      </motion.div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
      >
        {["12 Active Ingredients", "6.53g Per Serving", "Zero Fillers", "Peer-Reviewed"].map((label) => (
          <span key={label} className="text-[11px] tracking-[0.2em] uppercase text-slate-muted font-sans flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold/60 inline-block" />
            {label}
          </span>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-slate-muted font-sans">Scroll</span>
        <div className="w-px h-8 bg-gold/30 animate-pulse-line origin-top" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

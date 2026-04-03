import { motion } from "framer-motion";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden noise-overlay">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.04] blur-[120px]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-muted font-sans mb-6 md:mb-8"
      >
        A new standard in sleep
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] max-w-5xl"
      >
        The sleep your brain
        <br />
        was <em className="text-gold italic">designed</em> for
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-sm md:text-base text-slate-muted font-sans mt-6 md:mt-8 max-w-xl leading-relaxed"
      >
        8 clinically studied ingredients. One nightly ritual. Zero grogginess.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        onClick={() => handleScroll("#waitlist")}
        className="mt-10 md:mt-12 bg-gold text-background font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5"
      >
        Join the Waitlist
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-slate-muted font-sans">Scroll</span>
        <div className="w-px h-8 bg-gold/30 animate-pulse-line origin-top" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

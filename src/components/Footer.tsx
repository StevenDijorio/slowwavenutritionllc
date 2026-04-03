const footerLinks = {
  Company: [
    { label: "About", href: "#" },
    { label: "Science", href: "#science" },
    { label: "Contact", href: "mailto:hello@slowwavenutrition.com" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "FDA Disclaimer", href: "#" },
  ],
  Social: [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "X", href: "#" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border px-6 py-16 md:py-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16">
        <div className="col-span-2 md:col-span-1">
          <span className="font-serif text-lg tracking-[0.2em] uppercase text-foreground font-semibold">
            Slow Wave
          </span>
          <p className="text-xs text-muted-foreground font-sans mt-2 tracking-wide">sleep, scientifically.</p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-4">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate hover:text-foreground transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 space-y-4">
        <p className="text-[10px] text-muted-foreground font-sans leading-relaxed max-w-4xl">
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
        <p className="text-[10px] text-muted-foreground font-sans">
          © 2026 Slow Wave Nutrition LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

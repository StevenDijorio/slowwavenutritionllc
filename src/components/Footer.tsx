import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { label: "Science", href: "#science", internal: false },
    { label: "Ingredients", href: "#ingredients", internal: false },
    { label: "FAQ", href: "/faq", internal: true },
    { label: "Contact", href: "mailto:hello@slowwavenutrition.com", internal: false },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy", internal: true },
    { label: "Terms of Service", href: "/terms", internal: true },
    { label: "Return Policy", href: "/returns", internal: true },
    { label: "FDA Disclaimer", href: "/terms#fda", internal: true },
  ],
  Social: [
    { label: "Instagram", href: "#", internal: false },
    { label: "TikTok", href: "#", internal: false },
    { label: "X / Twitter", href: "#", internal: false },
  ],
};

const Footer = () => (
  <footer className="border-t border-border px-6 py-16 md:py-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="block">
            <span className="font-serif text-lg tracking-[0.2em] uppercase text-foreground font-semibold">
              Slow Wave
            </span>
            <p className="text-xs text-muted-foreground font-sans mt-1.5 tracking-wide">Deeper sleep. Better living.</p>
          </Link>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-4">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-sm text-slate hover:text-foreground transition-colors duration-300 font-sans"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-slate hover:text-foreground transition-colors duration-300 font-sans"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 space-y-4">
        <p className="text-[10px] text-muted-foreground font-sans leading-relaxed max-w-4xl">
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult a physician before use if you are pregnant, nursing, taking medications, or have a medical condition.
        </p>
        <p className="text-[10px] text-muted-foreground font-sans">
          © 2026 Slow Wave Nutrition LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Science", href: "#science" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "The Ritual", href: "#ritual" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-baseline gap-2.5">
          <span className="font-serif text-lg md:text-xl tracking-[0.25em] uppercase text-foreground font-semibold">
            Slow Wave
          </span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-slate-muted font-sans hidden sm:inline">
            Nutrition
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm tracking-wide text-slate-muted hover:text-foreground transition-colors duration-300 font-sans"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#preorder")}
            className="text-sm tracking-wide text-background bg-gold border border-gold px-5 py-2 rounded-sm hover:bg-gold-light transition-all duration-300 font-sans font-medium"
          >
            Pre-Order
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left text-sm tracking-wide text-slate-muted hover:text-foreground transition-colors font-sans py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#preorder")}
            className="block w-full text-left text-sm tracking-wide text-gold py-2 font-sans font-medium"
          >
            Pre-Order $59.99 →
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

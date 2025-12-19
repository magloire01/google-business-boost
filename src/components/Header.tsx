import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { href: "#avantages", label: "Avantages" },
  { href: "#pourquoi", label: "Pourquoi optimiser" },
  { href: "#offres", label: "Nos offres" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-teal text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-end gap-6 text-sm">
          <a href="tel:+33600000000" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <Phone className="w-4 h-4" />
            <span>06 00 00 00 00</span>
          </a>
          <a href="mailto:contact@googlebusinessboost.fr" className="flex items-center gap-2 hover:text-white/80 transition-colors">
            <Mail className="w-4 h-4" />
            <span>contact@googlebusinessboost.fr</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Google Business Boost" className="h-12 md:h-12" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-teal transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="cta"
              onClick={() => scrollToSection("#offres")}
            >
              Je booste ma visibilité
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border/50 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground/80 hover:text-teal transition-colors font-medium py-2 text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-border/50">
                  <Button
                    variant="cta"
                    className="w-full"
                    onClick={() => scrollToSection("#offres")}
                  >
                    Je booste ma visibilité
                  </Button>
                </div>
                <div className="flex flex-col gap-2 pt-4 text-sm text-foreground/70">
                  <a href="tel:+33600000000" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>06 00 00 00 00</span>
                  </a>
                  <a href="mailto:contact@googlebusinessboost.fr" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@googlebusinessboost.fr</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

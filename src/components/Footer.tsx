import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-purple-dark text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo & description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Google Business Boost" className="h-12 sm:h-16 mb-4 sm:mb-6 brightness-200" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Spécialiste de l'optimisation de fiches Google Business Profile pour les entreprises locales. Boostez votre visibilité et attirez plus de clients.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-teal-light">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#avantages")}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Avantages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#pourquoi")}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Pourquoi optimiser
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#offres")}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Nos offres
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#faq")}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-teal-light">Nos services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white/70 text-sm">Audit de fiche Google</span>
              </li>
              <li>
                <span className="text-white/70 text-sm">Optimisation SEO local</span>
              </li>
              <li>
                <span className="text-white/70 text-sm">Gestion mensuelle</span>
              </li>
              <li>
                <span className="text-white/70 text-sm">Rédaction de posts</span>
              </li>
              <li>
                <span className="text-white/70 text-sm">Réponse aux avis clients</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-teal-light">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+33600000000"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>06 00 00 00 00</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@googlebusinessboost.fr"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>contact@googlebusinessboost.fr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>France - Service 100% en ligne</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/60">
            <p className="text-center">© {currentYear} Google Business Boost. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

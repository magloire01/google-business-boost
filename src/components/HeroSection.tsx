import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import laptopMockup from "@/assets/laptop-mockup.png";
import phoneMockup from "@/assets/phone-mockup.png";
import GoogleLogo from "@/assets/Google-Logo.png";

const benefits = [
  "Boostez votre référencement local",
  "Générez un trafic qualifié",
  "Augmentez vos ventes",
  "Renforcez votre crédibilité",
  "Démarquez-vous de vos concurrents",
];

const HeroSection = () => {
  return (
    <section id="avantages" className="min-h-screen max-w-full mx-auto bg-gradient-hero pt-22 pb-16 overflow-x-hidden  max-w-[calc(100vw-2rem)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto min-h-[calc(100vh-8rem)]"> {/* min-h-[calc(100vh-8rem)] permet d'ajuster la hauteur du conteneur sur telephone */}
          {/* Device Mockups */}
          <div className="relative flex justify-center items-center order-1 lg:order-1">
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={GoogleLogo}
                alt="Google Logo"
                className="w-40 h-30 mb-4 mx-auto"
              />
              <img
                src={laptopMockup}
                alt="Google Maps résultats locaux"
                className="w-full max-w-lg drop-shadow-2xl animate-float"
              />
              <img
                src={phoneMockup}
                alt="Google Business Profile"
                className="absolute md:-right-12 bottom-0 w-32 md:w-48 drop-shadow-2xl animate-float" // md pour ajuster la position sur les ecrans moyens
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-up">
              <span className="text-gradient-teal">
                Boostez votre visibilité locale et attirez plus de clients dès aujourd'hui !
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground font-medium mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Votre fiche Google Business optimisée pour plus de trafic et de crédibilité, sans effort.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground animate-fade-up"
                  style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                  <span className="text-base md:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="ctaLarge" size="xl" className="w-[calc(100vw-3rem)] sm:w-auto">
                Je booste mon business maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative mt-16">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            className="fill-lavender-light"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

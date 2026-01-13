import { Check } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.jpg";

const benefits = [
  { text: "Une fiche Google Business optimisée pour", bold: "plus de visibilité" },
  { text: "Un meilleur référencement local pour", bold: "être trouvé plus facilement" },
  { text: "Plus", bold: "d'appels, de réservations et de clients" },
  { text: "Une", bold: "image professionnelle et rassurante" },
];

const BoostCTASection = () => {
  return (
    <section className="bg-pink-soft/30 py-12 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/60 text-center mb-8 sm:mb-12 italic px-2">
          Boostez votre visibilité locale et attirez plus de clients dès aujourd'hui !
        </h2>

        <div className="max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span>
                  {benefit.text} <strong>{benefit.bold}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gold rounded-xl p-4 sm:p-6 max-w-3xl mx-auto mb-8 sm:mb-12 text-center">
          <p className="text-white font-bold text-sm sm:text-lg mb-2">
            Tarif de lancement réservé aux 500 premiers clients seulement pour le booste d'optimisation complète !
          </p>
          <p className="text-white font-semibold text-sm sm:text-base">
            Ensuite, elle passera au tarif normal.
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <img src={logo} alt="Google Business Boost" className="h-24 sm:h-32 md:h-40" />
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative mt-16">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100C200 150 400 50 600 100C800 150 1000 50 1200 100C1300 125 1400 100 1440 100V200H0V100Z"
            className="fill-teal"
          />
          <path
            d="M0 120C200 170 400 70 600 120C800 170 1000 70 1200 120C1300 145 1400 120 1440 120V200H0V120Z"
            className="fill-teal/70"
          />
        </svg>
      </div>
    </section>
  );
};

export default BoostCTASection;

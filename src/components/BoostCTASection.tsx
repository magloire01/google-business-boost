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
    <section className="bg-pink-soft/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/60 text-center mb-12 italic">
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

        <div className="bg-gold rounded-xl p-6 max-w-3xl mx-auto mb-12 text-center">
          <p className="text-white font-bold text-lg mb-2">
            Tarif de lancement réservé aux 500 premiers clients seulement pour le booste d'optimisation complète !
          </p>
          <p className="text-white font-semibold">
            Ensuite, elle passera au tarif normal.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <img src={logo} alt="Google Business Boost" className="h-32 md:h-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h4 className="text-xl font-bold text-teal mb-2">BOOST LOCAL</h4>
            <p className="text-sm text-muted-foreground mb-4">Audit + Optimisation</p>
            <p className="text-2xl font-bold text-coral mb-1">
              290€ HT (pour les 10 premiers clients)
            </p>
            <p className="text-sm text-muted-foreground mb-4">au lieu de 349€ HT</p>
            <p className="text-sm text-foreground mb-6">
              Idéal pour : ceux qui veulent une fiche optimisée
            </p>
            <Button variant="cta" size="lg">
              Je booste mon business maintenant
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h4 className="text-xl font-bold text-pink-soft mb-2">BOOST MENSUEL</h4>
            <p className="text-sm text-muted-foreground mb-4">Suivi et gestion continue</p>
            <p className="text-2xl font-bold text-coral mb-1">
              150€ HT / mois
            </p>
            <p className="text-sm text-muted-foreground mb-4">paiement mensuel</p>
            <p className="text-sm text-foreground mb-6">
              Idéal pour : ceux qui veulent un suivi régulier
            </p>
            <Button variant="cta" size="lg">
              Je veux un suivi mensuel
            </Button>
          </div>
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

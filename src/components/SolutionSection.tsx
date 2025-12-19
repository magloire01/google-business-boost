import { Search, Rocket, MapPin, Trophy, BadgeCheck } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Gagner en visibilité :",
    description: "grâce à une fiche optimisée, vous augmentez votre présence dans les résultats locaux de Google, attirant ainsi plus de clients potentiels.",
  },
  {
    icon: Rocket,
    title: "Booster votre trafic :",
    description: "attirez davantage de visiteurs sur votre site et dans votre magasin, grâce à une meilleure position dans les recherches locales.",
  },
  {
    icon: MapPin,
    title: "Améliorer votre référencement local :",
    description: "optimisez votre présence sur Google pour vous assurer d'apparaître dans les résultats locaux, là où vos clients vous cherchent.",
  },
  {
    icon: Trophy,
    title: "Vous démarquer de vos concurrents :",
    description: "profitez d'une fiche professionnelle et complète qui vous distingue et vous met en avant face à la concurrence locale.",
  },
  {
    icon: BadgeCheck,
    title: "Renforcer votre crédibilité :",
    description: "des avis clients réguliers et des informations complètes rassurent vos prospects et montrent que vous êtes une entreprise de confiance.",
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-teal py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-16">
          C'est une solution complète pour :
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <benefit.icon className="w-16 h-16 text-pink-soft" strokeWidth={1.5} />
              </div>
              <p className="text-white">
                <span className="font-bold">✓ {benefit.title}</span>{" "}
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <benefit.icon className="w-16 h-16 text-pink-soft" strokeWidth={1.5} />
              </div>
              <p className="text-white">
                <span className="font-bold">✓ {benefit.title}</span>{" "}
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

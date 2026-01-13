import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import phonesComparison from "@/assets/phones-comparison.png";

const painPoints = [
  "Vous en avez marre que vos clients ne vous trouvent pas sur Google ?",
  "De voir vos concurrents mieux placés que vous et rafler la mise ?",
  "Malheureusement, vous n'avez pas les ressources pour faire aussi bien, voire mieux qu'eux. Les changements incessants de Google My Business vous ont fait jeter l'éponge.",
];

const ProblemSection = () => {
  return (
    <section className="bg-lavender py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-teal mb-12 text-center md:text-left max-w-4xl mx-auto">
          Invisible sur Google ? Vos clients ne vous trouvent pas !
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Pain points */}
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">😠</span>
                <p className="text-foreground text-base md:text-lg">{point}</p>
              </div>
            ))}

            <div className="pt-4 space-y-4">
              <p className="text-foreground text-base md:text-lg">
                <strong>Résultat ?</strong> Vous passez à côté de dizaines de clients potentiels chaque mois... sans même le savoir !
              </p>
              <p className="text-foreground text-base md:text-lg font-semibold">
                Il est temps que ça change.
              </p>
            </div>
          </div>

          {/* Phone comparison */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src={phonesComparison}
                alt="Comparaison avant/après optimisation"
                className="w-full max-w-md drop-shadow-xl rounded-lg"
              />
              <div className="absolute -bottom-6 left-1/4 transform -translate-x-1/2">
                <div className="bg-destructive rounded-full p-2 shadow-lg">
                  <X className="w-6 h-6 text-accent-foreground" strokeWidth={3} />
                </div>
              </div>
              <div className="absolute -bottom-6 right-1/4 transform translate-x-1/2">
                <div className="bg-primary rounded-full p-2 shadow-lg">
                  <Check className="w-6 h-6 text-primary-foreground" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-cta rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Votre fiche Google My Business optimisée, sans mettre les mains dans le cambouis :
          </h3>
          <p className="text-lg md:text-xl text-gradient-gold font-semibold mb-8">
            Grâce à Google Business Boost, Nous boostons votre fiche établissement pour développer vos opportunités commerciales.
          </p>
          {/* <Button variant="ctaLarge" size="xl">
            Démarrer maintenant
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

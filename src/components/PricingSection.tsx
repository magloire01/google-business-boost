import { Check } from "lucide-react";
import { Button } from "./ui/button";

const boostLocalFeatures = [
  "Création de la fiche établissement si nécessaire",
  "Analyse de votre secteur d'activité et de la concurrence",
  "Audit de la fiche Google",
  "Vérification et mise à jour de vos informations",
  "Choix des catégories principales et secondaires",
  "Optimisation des images",
  "Description optimisée de votre entreprise",
  "Création d'une liste de mots-clé locale",
  "Mise en place des services, produits et questions",
  "Réponse optimisée aux 5 derniers avis clients",
  "Rédaction de 3 posts optimisés pour le référencement local",
  "Création d'un QR code pour le dépôt des avis clients (offert)",
];

const boostMensuelFeatures = [
  "Publications régulières d'actualités",
  "Mise en avant des événements et offres promotionnelles",
  "Réponses optimisées aux nouveaux avis clients",
  "Ajouts réguliers de photos",
  "Gestion des questions / réponses",
  "Suivi des performances et ajustements",
  "Envoi des statistiques",
];

const PricingSection = () => {
  return (
    <section id="offres" className="bg-lavender-light py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/70 text-center mb-8">
          Sélectionnez votre offre
        </h2>

        <p className="text-lg text-foreground mb-12 max-w-4xl mx-auto">
          J'ai créé 2 offres spécialement pensées pour vous.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {/* Boost Local Description */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-teal mb-4">
              Boost Local : l'optimisation mensuelle de votre fiche établissement
            </h3>
            <p className="text-foreground">
              Avec Boost Local, j'audite et je retravaille votre fiche Google Business Profile. J'optimise tous les points qui vont booster sa visibilité et améliorer son classement dans les résultats de recherche locale.
            </p>
          </div>

          {/* Boost Mensuel Description */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-pink-soft mb-4">
              Boost mensuel : gestion mensuelle de votre fiche établissement
            </h3>
            <p className="text-foreground">
              Avec Boost mensuel, je gère votre fiche en l'alimentant tous les mois pour améliorer votre SEO local sur le long terme.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Boost Local Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-teal text-center mb-4">BOOST LOCAL</h4>
            <p className="text-2xl md:text-3xl font-bold text-coral text-center mb-2">
              290€ HT (prix de lancement)
            </p>
            <ul className="space-y-3 mt-8">
              {boostLocalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center">
              <Button variant="cta" size="lg">
                Je choisis le Boost Local
              </Button>
            </div>
          </div>

          {/* Boost Mensuel Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-pink-soft text-center mb-4">BOOST MENSUEL</h4>
            <p className="text-2xl md:text-3xl font-bold text-coral text-center mb-2">
              150€ HT / mois
            </p>
            <ul className="space-y-3 mt-8">
              {boostMensuelFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center">
              <Button variant="cta" size="lg">
                Je choisis le Boost Mensuel
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-foreground mt-8 italic max-w-4xl mx-auto">
          Vous pouvez bien évidemment allier les deux : avec Boost Local, j'optimise toute votre fiche, puis je la gère tous les mois avec Boost mensuel.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

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
  const handleCheckout = async (packId: string) => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

      const response = await fetch(`${backendUrl}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packId,
          successUrl: window.location.origin + "/paiement/succes",
          cancelUrl: window.location.origin + "/paiement/annule",
        }),
      });

      if (!response.ok) {
        console.error("Erreur lors de la création de la session Stripe", await response.text());
        alert("Une erreur est survenue lors de la création du paiement. Merci de réessayer.");
        return;
      }

      const data = (await response.json()) as { url?: string };

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Impossible de récupérer le lien de paiement.");
      }
    } catch (error) {
      console.error("Erreur réseau ou serveur lors de l'appel à l'API de paiement", error);
      alert("Une erreur réseau est survenue. Merci de vérifier votre connexion et de réessayer.");
    }
  };

  return (
    <section id="offres" className="bg-lavender-light py-12 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/70 text-center mb-6 sm:mb-8">
          Sélectionnez votre offre
        </h2>

        <p className="text-base sm:text-lg text-foreground mb-8 sm:mb-12 max-w-4xl mx-auto">
          Nous avons créé 7 offres spécialement pensées pour vous.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-6xl mx-auto mb-6 sm:mb-8">
          {/* Boost Local Description */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal mb-3 sm:mb-4">
              Boost Local : l'optimisation mensuelle de votre fiche établissement
            </h3>
            <p className="text-sm sm:text-base text-foreground">
              Avec Boost Local, nous auditons et nous retravaillons votre fiche Google Business Profile. Nous optimisons tous les points qui vont booster sa visibilité et améliorer son classement dans les résultats de recherche locale.
            </p>
          </div>

          {/* Boost Mensuel Description */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal mb-3 sm:mb-4">
              Boost mensuel : gestion mensuelle de votre fiche établissement
            </h3>
            <p className="text-sm sm:text-base text-foreground">
              Avec Boost mensuel, nous gèrons votre fiche en l'alimentant tous les mois pour améliorer votre SEO local sur le long terme.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Boost Local Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-teal text-center mb-2 sm:mb-4">BOOST LOCAL</h4>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-coral text-center mb-2">
              290€ HT (prix de lancement)
            </p>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 lg:mt-8">
              {boostLocalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm lg:text-base text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-sm lg:text-base px-4 sm:px-6"
                onClick={() => handleCheckout("BOOST_LOCAL")}
              >
                Je choisis le Boost Local
              </Button>
            </div>
          </div>

          {/* Boost Mensuel Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-teal text-center mb-2 sm:mb-4">BOOST MENSUEL</h4>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-coral text-center mb-2">
              150€ HT / mois
            </p>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 lg:mt-8">
              {boostMensuelFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm lg:text-base text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-sm lg:text-base px-4 sm:px-6"
                onClick={() => handleCheckout("BOOST_MENSUEL")}
              >
                Je choisis le Boost Mensuel
              </Button>
            </div>
          </div>

          {/* Mise à jour + IA */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-teal text-center mb-2 sm:mb-4">MISE À JOUR + IA</h4>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-coral text-center mb-2">800€ HT</p>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 lg:mt-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Mise à jour complète de vos contenus avec optimisation IA.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Amélioration de la clarté, du ton et de la cohérence de vos messages.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Suggestions d'optimisation continue basées sur les performances.</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-sm lg:text-base px-4 sm:px-6"
                onClick={() => handleCheckout("MISE_A_JOUR_IA")}
              >
                Je choisis la mise à jour + IA
              </Button>
            </div>
          </div>

          {/* Sécurité + Remise d'accès */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-teal text-center mb-2 sm:mb-4">SÉCURITÉ + REMISE D'ACCÈS</h4>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-coral text-center mb-2">450€ HT</p>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 lg:mt-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Audit des accès actuels et sécurisation de vos comptes clés.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Remise à plat des droits utilisateurs et récupération des accès perdus.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Mise en place de bonnes pratiques de sécurité simples à suivre.</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-sm lg:text-base px-4 sm:px-6"
                onClick={() => handleCheckout("SECURITE_REMISE_ACCES")}
              >
                Je choisis Sécurité + Remise d'accès
              </Button>
            </div>
          </div>

          {/* Création de site web & Hébergement */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg overflow-hidden">
            <h4 className="text-lg sm:text-xl font-bold text-teal text-center mb-2 sm:mb-4">CRÉATION DE SITE WEB & HÉBERGEMENT</h4>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-coral text-center mb-2">1500€ HT</p>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 lg:mt-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Création d'un site vitrine professionnel adapté à votre activité.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Hébergement du site et configuration du nom de domaine.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Site optimisé pour le mobile et les premières bases de SEO.</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-sm lg:text-base px-4 sm:px-6"
                onClick={() => handleCheckout("CREATION_SITE_HEBERGEMENT")}
              >
                Je choisis la création de site web
              </Button>
            </div>
          </div>

          {/* Référencement et Mise à jour de la page */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg overflow-hidden">
            <h4 className="text-lg sm:text-xl font-bold text-teal text-center mb-2 sm:mb-4">RÉFÉRENCEMENT & MISE À JOUR DE LA PAGE</h4>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-coral text-center mb-2">500€ HT</p>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 lg:mt-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Optimisation SEO on-page de votre page principale.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Mise à jour des contenus pour alignement avec vos offres actuelles.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Suivi des principaux indicateurs de visibilité.</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="w-auto sm:w-auto text-sm sm:text-sm mx-3 px-4 sm:px-6"
                onClick={() => handleCheckout("REFERENCEMENT_MISE_A_JOUR")}
              >
                Je choisis le référencement
              </Button>
            </div>
          </div>

          {/* Assistance Technique */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-teal text-center mb-2 sm:mb-4">ASSISTANCE TECHNIQUE</h4>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-coral text-center mb-2">350€ HT</p>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 lg:mt-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Assistance pour résoudre vos blocages techniques du quotidien.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Accompagnement sur l'utilisation de vos outils digitaux.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm lg:text-base text-foreground">Support par e-mail et visio selon vos besoins.</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="w-full sm:w-auto text-xs sm:text-sm lg:text-base px-4 sm:px-6"
                onClick={() => handleCheckout("ASSISTANCE_TECHNIQUE")}
              >
                Je choisis l'assistance technique
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

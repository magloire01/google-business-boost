import { Button } from "./ui/button";

const phase1 = [
  "Formulaire de contact et m'expliquer votre projet et vos objectifs.",
  "Audit de votre fiche Google My Business actuelle lorsque la mission est validée et le paiement effectué.",
  "Étude de votre secteur d'activité et de la concurrence.",
  "Création d'une liste de mots-clés pertinents pour votre entreprise.",
];

const phase2 = [
  "Mise à jour des informations.",
  "Optimisation des photos.",
  "Rédaction des textes optimisés pour la description de votre établissement, les sections produits et services, les questions/réponses.",
  "Réponse aux 5 derniers avis clients de façon optimisée.",
  "Rédaction de 3 posts optimisés pour le SEO local.",
];

const phase3 = [
  "Présentation des optimisations réalisées.",
  "Remise du rapport d'audit effectué en début de mission.",
  "QR code offert pour récolter les avis clients.",
  "Conseils pour maintenir votre fiche efficace sur le long terme.",
];

const monthlyManagement = [
  "Gestion et réponses optimisés aux avis clients.",
  "Réponses aux nouvelles questions.",
  "Rédaction régulière de publications (actualités, offres, événements).",
  "Suivi des performances et ajustements.",
  "Envoi des statistiques.",
];

const ProcessSection = () => {
  return (
    <section className="bg-teal py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8">
          Comment se déroule l'optimisation de ma fiche établissement ?
        </h2>

        <p className="text-white text-center mb-16">
          C'est facile : ça se passe en 3 temps.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Visual timeline */}
          <div className="flex flex-col items-center space-y-4">
            {/* Step 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-dark flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="bg-lavender-light rounded-xl px-8 py-4 text-purple-dark font-semibold">
                Audit
              </div>
            </div>
            <div className="w-0.5 h-8 border-l-2 border-dashed border-white/50"></div>

            {/* Step 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-dark flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="bg-pink-soft/50 rounded-xl px-8 py-4 text-purple-dark font-semibold">
                Optimisation
              </div>
            </div>
            <div className="w-0.5 h-8 border-l-2 border-dashed border-white/50"></div>

            {/* Step 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-dark flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="bg-lavender-light rounded-xl px-8 py-4 text-purple-dark font-semibold text-center">
                Mise en ligne<br />& Bonnes pratiques
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-8 text-white">
            <div>
              <h4 className="font-bold text-lg mb-3">PHASE 1 : AUDIT</h4>
              <ul className="space-y-2">
                {phase1.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3">PHASE 2 : OPTIMISATION</h4>
              <ul className="space-y-2">
                {phase2.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3">PHASE 3 : MISE EN LIGNE & BONNE PRATIQUE</h4>
              <ul className="space-y-2">
                {phase3.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Monthly management */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6">
            Et si je gère votre fiche Google Business Profile :
          </h3>
          <ul className="space-y-2 text-white mb-8">
            {monthlyManagement.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Button variant="cta" size="lg">
              Je veux booster mon business maintenant
            </Button>
            <p className="text-white mt-4 font-medium">
              Remplissez le questionnaire et je reviens vite vers vous. Promis ! 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

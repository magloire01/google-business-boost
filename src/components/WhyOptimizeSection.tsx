const stats = [
  "46% des recherches Google concernent des entreprises locales.",
  "25% de ces requêtes mènent à un achat.",
  "Les 3 premiers résultats d'une recherche locale génèrent 75% des clics.",
  "Les entreprises avec une fiche bien optimisée reçoivent en moyenne 7x plus de visites.",
];

const WhyOptimizeSection = () => {
  return (
    <section id="pourquoi" className="bg-lavender-light py-12 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-teal mb-6 sm:mb-8">
            Pourquoi vous devez obligatoirement optimiser votre fiche Google Business Profile ?
          </h2>

          <p className="text-base sm:text-lg text-foreground font-medium mb-6 sm:mb-8">
            Parce que l'impact positif qu'elle peut avoir sur votre entreprise est considérable :
          </p>

          <ul className="space-y-3 sm:space-y-4">
            {stats.map((stat, index) => (
              <li
                key={index}
                className="flex items-start gap-2 sm:gap-3 text-foreground"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-foreground mt-2 sm:mt-2.5 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg font-medium">{stat}</span>
              </li>
            ))}
          </ul>
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
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V0Z"
            className="fill-lavender-light"
          />
        </svg>
      </div>
    </section>
  );
};

export default WhyOptimizeSection;

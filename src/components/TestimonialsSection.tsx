import { Star } from "lucide-react";

const testimonials = [
  {
    name: "lola lola",
    date: "il y a 10 mois",
    rating: 5,
    text: "Merci beaucoup Bélinda pour cette superbe collaboration ! Non seulement pour ton professionnalisme ma...",
    avatar: "L",
    avatarBg: "bg-purple-600",
  },
  {
    name: "Sélim NIEDERHOFFER",
    date: "il y a 1 année",
    rating: 5,
    text: "Superbe collaboration avec Bélinda ! C'est une copywriter sérieuse, créative, qui a été d'une grande aide sur un projet éditorial récent. Allez-y les yeux fermés : rigueur validée !",
    avatar: "S",
    avatarBg: "bg-amber-600",
  },
  {
    name: "Sophie TAILLIEU",
    date: "il y a 1 année",
    rating: 5,
    text: "Belinda est très à l'écoute et a à cœur de comprendre réellement le produit qui fait l'objet de la page de vente ainsi que le public cible. Elle est également force de proposition pour...",
    avatar: "S",
    avatarBg: "bg-gray-500",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      {/* Wave divider top */}
      <div className="relative -mt-20 mb-12">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            className="fill-teal"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-coral text-center mb-16 italic">
          Ils m'ont fait confiance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-bold text-lg relative`}>
                  {testimonial.avatar}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs">G</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-blue-500">✓</span>
              </div>

              <p className="text-foreground text-sm">{testimonial.text}</p>
              <button className="text-muted-foreground text-sm mt-2 hover:underline">
                Lire la suite
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

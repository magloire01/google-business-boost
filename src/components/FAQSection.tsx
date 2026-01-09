import { Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce qu'une fiche Google Business Profile ?",
    answer: "Google Business Profile (anciennement Google My Business) est un outil gratuit de Google qui permet aux entreprises de gérer leur présence en ligne sur Google Search et Google Maps. C'est votre vitrine digitale locale qui affiche vos informations essentielles : horaires, adresse, photos, avis clients, etc.",
  },
  {
    question: "Est-ce que Google Business est gratuit ?",
    answer: "Oui, la création et la gestion d'une fiche Google Business Profile est entièrement gratuite. Ce que je vous propose, c'est l'optimisation professionnelle de cette fiche pour maximiser votre visibilité et attirer plus de clients.",
  },
  {
    question: "A qui s'adresse l'offre d'optimisation Google Business Boost ?",
    answer: "Cette offre s'adresse à tous les professionnels et entreprises locales : commerces, artisans, professions libérales, restaurants, prestataires de services... Toute entreprise qui souhaite être trouvée plus facilement par ses clients locaux.",
  },
  {
    question: "Quand commence l'optimisation de ma fiche entreprise ?",
    answer: "L'optimisation commence dès validation de votre commande et réception du paiement. Je vous contacte dans les 24-48h pour récupérer les accès et informations nécessaires, puis je démarre l'audit de votre fiche.",
  },
  {
    question: "Y a-t-il un engagement sur l'offre mensuelle ?",
    answer: "Non, il n'y a aucun engagement sur l'offre Boost Mensuel. Vous pouvez arrêter le suivi quand vous le souhaitez, avec un préavis d'un mois.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-white py-12 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-handwriting text-foreground/60 text-center mb-3 sm:mb-4">
          Vous avez encore des questions ?
        </h2>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-teal mb-8 sm:mb-12 max-w-4xl mx-auto">
          FAQ Google Business Boost
        </h3>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-teal rounded-lg px-3 sm:px-6 border-none"
              >
                <AccordionTrigger className="text-white hover:no-underline py-3 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-left text-sm sm:text-base">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/90 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

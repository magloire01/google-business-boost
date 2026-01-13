import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <main className="min-h-screen bg-lavender-light flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 sm:p-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal mb-4">Paiement confirmé ✅</h1>
        <p className="text-sm sm:text-base text-foreground mb-6">
          Merci pour votre confiance ! Votre paiement a bien été pris en compte.
          <br />
          Nous revenons vers vous très rapidement avec les prochaines étapes.
        </p>
        <Link to="/">
          <Button variant="cta" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
            Retour à la page d'accueil
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default PaymentSuccess;

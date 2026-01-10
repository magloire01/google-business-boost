import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PaymentCancel = () => {
  return (
    <main className="min-h-screen bg-lavender-light flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 sm:p-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-coral mb-4">Paiement annulé ❌</h1>
        <p className="text-sm sm:text-base text-foreground mb-6">
          Le paiement n'a pas été finalisé. Si c'était une erreur, vous pouvez retenter l'opération.
          <br />
          Sinon, vous pouvez revenir à la page d'accueil pour découvrir à nouveau les offres.
        </p>
        <Link to="/">
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
            Retour à la page d'accueil
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default PaymentCancel;

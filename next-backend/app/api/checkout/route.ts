import { NextResponse } from "next/server";
import Stripe from "stripe";

// Mapping des packs disponibles côté backend
const PACKS = {
  BOOST_LOCAL: {
    amount: 29000, // 290€ en centimes
    name: "Boost Local",
    description: "Optimisation complète de votre fiche Google Business Profile.",
    recurring: false,
  },
  BOOST_MENSUEL: {
    amount: 15000, // 150€ / mois
    name: "Boost Mensuel",
    description: "Gestion mensuelle de votre fiche établissement.",
    recurring: true,
  },
  MISE_A_JOUR_IA: {
    amount: 50, // 80000 - 800€
    name: "Mise à jour + IA [TEST]",
    description: "Mise à jour de vos contenus avec optimisation IA.",
    recurring: false,
  },
  SECURITE_REMISE_ACCES: {
    amount: 45000, // 450€
    name: "Sécurité + Remise d'accès",
    description: "Audit des accès et sécurisation de vos comptes.",
    recurring: false,
  },
  CREATION_SITE_HEBERGEMENT: {
    amount: 150000, // 1500€
    name: "Création de site web & hébergement",
    description: "Création d'un site vitrine et hébergement.",
    recurring: false,
  },
  REFERENCEMENT_MISE_A_JOUR: {
    amount: 50000, // 500€
    name: "Référencement & mise à jour de la page",
    description: "Optimisation SEO et mise à jour de votre page.",
    recurring: false,
  },
  ASSISTANCE_TECHNIQUE: {
    amount: 35000, // 350€
    name: "Assistance technique",
    description: "Support technique et accompagnement digital.",
    recurring: false,
  },
} as const;

type PackId = keyof typeof PACKS;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:8080";

const corsHeaders = {
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { packId, successUrl, cancelUrl } = body as {
      packId?: PackId;
      successUrl?: string;
      cancelUrl?: string;
    };

    if (!packId || !(packId in PACKS)) {
      return NextResponse.json(
        { error: "Pack inconnu ou manquant" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Clé Stripe manquante côté serveur" },
        { status: 500, headers: corsHeaders }
      );
    }

    const pack = PACKS[packId];

    const session = await stripe.checkout.sessions.create({
      mode: pack.recurring ? "subscription" : "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: pack.amount,
            product_data: {
              name: pack.name,
              description: pack.description,
            },
            ...(pack.recurring
              ? {
                  recurring: { interval: "month" as const },
                }
              : {}),
          },
          quantity: 1,
        },
      ],
      success_url:
        successUrl ?? "https://ton-domaine.com/paiement/succes?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: cancelUrl ?? "https://ton-domaine.com/paiement/annule",
    });

    return NextResponse.json({ url: session.url }, { headers: corsHeaders });
  } catch (error) {
    console.error("Erreur Stripe checkout:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement" },
      { status: 500, headers: corsHeaders }
    );
  }
}

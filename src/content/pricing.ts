export interface Plan {
  name: string;
  amount: string;
  unit: string;
  features: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Classique',
    amount: '20€',
    unit: '/ séance',
    features: ['1h de coaching', 'Analyse et correction', 'Théorie et pratique', 'Exercices personnalisés'],
  },
  {
    name: 'Pack 5 heures',
    amount: '80€',
    unit: '/ pack',
    features: ['5h de coaching', 'Analyse et correction', 'Suivi de progression', 'Exercices personnalisés'],
    featured: true,
  },
  {
    name: 'Pack équipe',
    amount: '10€',
    unit: '/ pers',
    features: ['1h de coaching', 'Stratégie d\'équipe', 'Pracc dirigé', 'Suivi collectif'],
  },
];

export const services = [
  'Travail sur les erreurs passées',
  'Évaluation de niveau',
  'Coaching en groupe',
  'Coaching individuel',
  'Review de VOD',
];

export const steps = [
  'On planifie ta séance, sur Discord.',
  'J\'analyse ta démo afin de mieux comprendre tes besoins.',
  'J\'adapte la séance en fonction de celles-ci.',
  'Le paiement se fait à la planification, via Paypal ou virement bancaire.',
];

export const referral = '1h de coaching offerte pour chaque parrainé qui commande sa première heure.';

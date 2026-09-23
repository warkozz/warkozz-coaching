export type PlanKey = 'classique' | 'pack' | 'equipe';

export interface QuizOption {
  label: string;
  scores: Partial<Record<PlanKey, number>>;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const planKeys: PlanKey[] = ['classique', 'pack', 'equipe'];

export const quiz: QuizQuestion[] = [
  {
    question: 'Tu joues plutôt…',
    options: [
      { label: 'Seul, en solo queue', scores: { classique: 1, pack: 1 } },
      { label: 'Avec quelques amis', scores: { pack: 1, equipe: 1 } },
      { label: 'Dans une équipe structurée', scores: { equipe: 3 } },
    ],
  },
  {
    question: 'Quel est ton niveau actuel sur CS2 ?',
    options: [
      { label: 'Je débute, je découvre le jeu', scores: { classique: 2 } },
      { label: 'Je joue régulièrement en matchmaking', scores: { pack: 2 } },
      { label: 'Je joue en compétitif sur Faceit', scores: { pack: 2, equipe: 1 } },
      { label: 'Je joue dans une équipe structurée', scores: { equipe: 2 } },
    ],
  },
  {
    question: 'Quel est ton objectif principal ?',
    options: [
      { label: 'Corriger quelques erreurs précises', scores: { classique: 3 } },
      { label: 'Progresser durablement', scores: { pack: 3 } },
      { label: 'Structurer le jeu de mon équipe', scores: { equipe: 3 } },
    ],
  },
  {
    question: 'Combien de temps veux-tu consacrer au coaching ?',
    options: [
      { label: 'Une séance pour essayer', scores: { classique: 3 } },
      { label: 'Un suivi sur plusieurs séances', scores: { pack: 3 } },
      { label: 'Des séances régulières pour toute l\'équipe', scores: { equipe: 3 } },
    ],
  },
  {
    question: 'Qu\'est-ce qui te bloque le plus ?',
    options: [
      { label: 'Mon aim', scores: { classique: 1, pack: 1 } },
      { label: 'Mon game sense et mon positionnement', scores: { pack: 2 } },
      { label: 'La communication et la stratégie', scores: { equipe: 2, pack: 1 } },
    ],
  },
];

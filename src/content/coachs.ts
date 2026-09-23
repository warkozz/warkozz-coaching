export interface Coach {
  initials: string;
  name: string;
  role: string;
  summary: string;
  bio: string;
}

export const coachs: Coach[] = [
  {
    initials: 'WK',
    name: 'WarkozZ',
    role: 'Awper · Global Elite',
    summary: '3500h de jeu, ex-niveau 10 Faceit. Spécialiste du jeu d\'équipe et du positionnement à l\'awp.',
    bio: '3500h de jeu, ex-niveau 10 Faceit, plusieurs comptes montés au rang global. Spécialiste du jeu d\'équipe et du positionnement à l\'awp, formé au côté de teams niveau 10 Faceit.',
  },
  {
    initials: 'IG',
    name: 'Coach IGL',
    role: 'In-game leader',
    summary: 'Stratégie d\'équipe, calling en temps réel, préparation de veto et lecture de round.',
    bio: 'Stratégie d\'équipe, calling en temps réel, préparation de veto et lecture de round. Idéal pour les teams qui veulent structurer leur jeu.',
  },
  {
    initials: 'EN',
    name: 'Coach Entry',
    role: 'Entry fragger',
    summary: 'Prise de duel, aim training et positionnement pour les entrées de site.',
    bio: 'Prise de duel, aim training et positionnement pour les entrées de site. Pour progresser vite sur les fondamentaux d\'aim et de map awareness.',
  },
];

export const stats = [
  { value: '2K3', label: 'Elo Faceit' },
  { value: '3500h', label: 'Temps de jeu' },
  { value: '50+', label: 'Élèves coachés' },
  { value: '5 ans', label: 'Expérience' },
];

export const spotlight = {
  name: 'WarkozZ',
  initials: 'WK',
  tagline: 'Coach CS2 depuis 2021 · Joueur depuis 2018',
  bio: 'Plus de 3500h de jeu et de compétences à partager. Plus de 50 joueurs et 8 équipes coachés, jusqu\'à 2300 elo sur Faceit.',
  steamUrl: 'https://steamcommunity.com/',
  stats: [
    { value: '50+', label: 'Joueurs coachés' },
    { value: '8', label: 'Équipes suivies' },
    { value: '2300', label: 'Elo Faceit' },
  ],
  structures: ['Team Alpha', 'NextGen Esport', 'Vortex Gaming', 'CoreFive'],
  achievements: ['Top 1 — Coupe régionale', 'Top 3 — LAN locale'],
  links: [
    { label: 'Discord', href: 'https://discord.gg/8s3e7tH8' },
    { label: 'Twitch', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'X', href: 'https://twitter.com/WaRKoZz_' },
  ],
};

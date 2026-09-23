export const twitch = {
  url: '#',
  title: 'Rejoignez-moi en direct sur Twitch',
  sub: 'Coaching en direct, gameplay commenté et astuces pour progresser',
};

export const channelUrl = '#';

// Remplacer chaque `youtubeId: null` par l'ID d'une vraie vidéo YouTube.
export const videos: { title: string; youtubeId: string | null }[] = Array.from({ length: 6 }, (_, i) => ({
  title: `Vidéo ${i + 1}`,
  youtubeId: null,
}));

export const partner = {
  title: 'Une communauté sans triche, compétitive et fun',
  text: 'Fair-play et plaisir de jeu avant tout : communauté active, ressources d\'apprentissage et sessions de jeu régulières.',
  url: 'https://discord.gg/8s3e7tH8',
};

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tips' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    category: z.enum(['Aim', 'Analyse', 'Communication', 'Positionnement']),
    excerpt: z.string(),
  }),
});

export const collections = { tips };

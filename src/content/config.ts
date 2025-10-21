import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      videoUrl: z.string().optional(),
      image: z.string(),
      ctaText: z.string(),
      ctaLink: z.string(),
    }).optional(),
    intro: z.object({
      title: z.string(),
      body: z.string(),
    }).optional(),
    usps: z.array(z.object({
      name: z.string(),
      icon: z.string(),
      description: z.string(),
    })).optional(),
  }).passthrough(),
});

const settingsCollection = defineCollection({
  type: 'data',
});

export const collections = {
  pages: pagesCollection,
  settings: settingsCollection,
};

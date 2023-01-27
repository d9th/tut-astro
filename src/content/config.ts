import { defineCollection, z } from "astro:content";

const post = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { post };

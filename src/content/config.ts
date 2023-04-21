// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const articleCollection = defineCollection({
  schema: ({ image }) => {
    return z.object({
      thumbnail: image().refine((image) => image.width >= 1000, {
        message: "画像が小さすぎます。",
      }),
      title: z.string(),
    });
  },
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  article: articleCollection,
};

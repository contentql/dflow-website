import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";

const changelog = defineCollection({
  name: "changelog",
  directory: "src/changelog",
  include: "**/*.md",
  schema: (z) => ({
    version: z.string(),
    date: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});

export default defineConfig({
  collections: [changelog],
});

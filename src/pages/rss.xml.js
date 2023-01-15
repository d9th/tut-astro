import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Astro learner | blog",
    description: "My journey learning Astro",
    site: "https://www.sample.app",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });

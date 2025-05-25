import { defineConfig, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
      },
    }),
  ],
});

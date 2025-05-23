import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";

import "../src/library/theme/tokens.css";
import "../src/library/theme/primeVue.css";
import "../src/library/theme/tokens-rundeck.css";
import "./storybook.css";
import {initI18n} from "../src/app/utilities/i18n";

import Tooltip from "primevue/tooltip";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        headingSelector: "h2, h3",
        ignoreSelector: "h2.sbdocs-subtitle",
        title: "Jump to Section",
        disable: false,
      },
      source: {
        type: "auto",
      },
    },
    initialGlobals: {
      theme: "light",
    },
    darkMode: {
      classTarget: "html",
      stylePreview: true,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Docs"],
      },
    },
  },
};

const i18n = initI18n();

setup((app) => {
  app.directive("tooltip", Tooltip);
  app.use(PrimeVue, {
    theme: {
      preset: Lara,
      options: {
        prefix: "p",
        cssLayer: true,
        darkModeSelector: ".dark",
      },
    },
  });
  app.use(i18n);
});

export default preview;

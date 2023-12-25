import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        xs: {
          name: 'Mobile (375px)',
          styles: {
            width: '375px',
            height: '100%',
          },
        },
        sm: {
          name: 'Tablet (768px)',
          styles: {
            width: '768px',
            height: '100%',
          },
        },
        md: {
          name: 'Desktop Small (1024px)',
          styles: {
            width: '1024px',
            height: '100%',
          },
        },
        lg: {
          name: 'Desktop Medium (1440px)',
          styles: {
            width: '1440px',
            height: '100%',
          },
        },
        xl: {
          name: 'Desktop Large (1920px)',
          styles: {
            width: '1920px',
            height: '100%',
          },
        },
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    // ({
    //   name: '@storybook/addon-styling-webpack',
    //   options: {
    //     rules: [
    //       // Replaces any existing Sass rules with given rules
    //       {
    //         test: /\.s[ac]ss$/i,
    //         use: [
    //           "style-loader",
    //           "css-loader",
    //           {
    //             loader: "sass-loader"
    //           },
    //         ],
    //       },
    //     ]
    //   }
    // })
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

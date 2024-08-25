import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const STORYBOOK_BASE_CONFIG = {
  stories: ['../packages/**/src/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     cssLoaderOptions: {
    //       importLoaders: 1,
    //       modules: {
    //         mode: 'local',
    //         auto: true,
    //         localIdentName: '[name]__[local]___[hash:base64:5]',
    //         exportGlobals: true
    //       }
    //     }
    //   }
    // },
    // {
    //   name: '@storybook/addon-styling',
    //   options: {
    //     postCss: {
    //       implementation: require('postcss')
    //     }
    //   }
    // },
    // { name: '@storybook/addon-postcss', options: { postcssLoaderOptions: { implementation: require('postcss') } } },
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  }
};
export default STORYBOOK_BASE_CONFIG;

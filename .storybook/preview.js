/** @type { import('@storybook/react').Preview } */
const STORYBOOK_PREVIEW_CONFIG = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  tags: ['autodocs']
};

export default STORYBOOK_PREVIEW_CONFIG;

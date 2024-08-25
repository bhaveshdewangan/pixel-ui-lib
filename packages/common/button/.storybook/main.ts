import STORYBOOK_BASE_CONFIG from "../../../../.storybook/main";
const config = {
  ...STORYBOOK_BASE_CONFIG,
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
};

export default config;

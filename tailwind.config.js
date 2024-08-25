/** @type {import('tailwindcss').Config} */
import TAILWIND_PRESET from './configs/tailwind.preset';
module.exports = {
  presets: [TAILWIND_PRESET],
  content: ['./packages/**/src/*.{js,ts,jsx,tsx}', './packages/**/src/*.stories.@(js|jsx|ts|tsx)']
};

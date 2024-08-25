const TAILWIND_PRESET = {
  content: [],
  theme: {
    extend: {
      colors: {
        'pul-pixel-red': 'var(--color-pixel-red)',
        'pul-pixel-purple': 'var(--color-pixel-purple)',
        'pul-pixel-blue': 'var(--color-pixel-blue)',
        'pul-pixel-green': 'var(--color-pixel-green)',
        'pul-pixel-brown': 'var(--color-pixel-brown)',
        'pul-pixel-orange': 'var(--color-pixel-orange)',
        'pul-grey': {
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#637692',
          500: '#22304E',
          700: '#02050D'
        }
      }
    }
  },
  plugins: [],
  prefix: 'pul-'
};

export default TAILWIND_PRESET;

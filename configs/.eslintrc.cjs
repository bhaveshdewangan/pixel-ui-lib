module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:import/recommended'
  ],
  ignorePatterns: [
    '**/dist/',
    '**/node_modules/',
    '.eslintrc.cjs',
    'vite.config.ts',
    'tsconfig.json',
    'tailwind.config.js',
    'postcss.config.js',
    'tailwind.preset.ts'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['react-refresh', 'react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    },
    react: {
      version: '17.x'
    }
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        semi: true,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        proseWrap: 'always',
        bracketSpacing: true,
        useTabs: false,
        jsxSingleQuote: true,
        bracketSameLine: false,
        trailingComma: 'none'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react-hooks/exhaustive-deps': 'off',
    'object-shorthand': 'error',
    'no-console': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }]
  }
};

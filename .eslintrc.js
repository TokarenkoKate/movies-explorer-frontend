module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/extensions': [
      'error',
      {
        js: 'ignorePackages',
      },
    ],
    'react/prop-types': [0],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'prefer-destructuring': ['error', { object: false, array: false }],
  },
}

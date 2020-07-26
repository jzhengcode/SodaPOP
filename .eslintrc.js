module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
  },
  ignorePatterns: ['client/dist/*', 'node_modules/*'],
};

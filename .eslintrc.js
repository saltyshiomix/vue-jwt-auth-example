module.exports = {
  root: true,
  parser:  'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
      },
    ],
  },
};

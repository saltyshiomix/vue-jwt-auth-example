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
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
      },
    ],
    'vue/max-attributes-per-line': [
      'error', {
        'singleline': 2,
        'multiline': {
          'max': 1,
          'allowFirstLine': false,
        },
      },
    ],
  },
};

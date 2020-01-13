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
        'tabWidth': 2,
        'singleQuote': true,
        'trailingComma': 'all',
        'arrowParens': 'always',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'normal': 'never',
          'void': 'always',
        },
      },
    ],
    'vue/singleline-html-element-content-newline': [
      'off',
    ],
    'vue/max-attributes-per-line': [
      'error', {
        'singleline': 3,
        'multiline': {
          'max': 1,
          'allowFirstLine': false,
        },
      },
    ],
    'vue/comma-dangle': [
      'error',
      {
        'arrays': 'only-multiline',
        'objects': 'only-multiline',
        'imports': 'only-multiline',
        'exports': 'only-multiline',
        'functions': 'never',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  'overrides': [
    {
      'files': [
        '*.ts',
        '*.tsx',
      ],
      'rules': {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
        ],
      },
    },
  ],
};

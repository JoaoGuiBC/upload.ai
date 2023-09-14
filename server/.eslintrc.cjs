module.exports = {
  root: true,
  env: { browser: false, es2020: true },
  extends: [
    '@rocketseat/eslint-config/node',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
        'singleQuote': true,
        'semi': false,
        'printWidth': 90
      }
    ]
  },
}

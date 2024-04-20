// @ts-check

/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-deprecated
 */
const config = {
  extends: [
    'love',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@eslint-community/eslint-comments/recommended'
  ],
  rules: {
    // https://typescript-eslint.io/rules/explicit-function-return-type/#configuring-in-a-mixed-jsts-codebase
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    // For JavaScript
    {
      files: [
        '*.js',
        '*.jsx'
      ],
      extends: [
        'plugin:jsdoc/recommended'
      ]
    },
    // For TypeScript
    {
      files: [
        '*.ts',
        '*.mts',
        '*.cts',
        '*.tsx'
      ],
      plugins: [
        'tsdoc'
      ],
      rules: {
        'tsdoc/syntax': 'warn',
        // https://typescript-eslint.io/rules/explicit-function-return-type/#configuring-in-a-mixed-jsts-codebase
        '@typescript-eslint/explicit-function-return-type': 'error'
      }
    }
  ]
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config

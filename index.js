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
        '*.tsx'
      ],
      plugins: [
        'tsdoc'
      ],
      rules: {
        'tsdoc/syntax': 'warn'
      }
    }
  ]
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config

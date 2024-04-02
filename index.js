// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: [
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:eslint-comments/recommended'
  ],
  overrides: [
    // https://github.com/mightyiam/eslint-config-love/tree/v44.0.0#example-config
    {
      files: [
        '*.js',
        '*.jsx',
        '*.ts',
        '*.tsx'
      ],
      extends: 'love'
    },
    {
      files: [
        '*.js',
        '*.jsx'
      ],
      extends: [
        'plugin:jsdoc/recommended'
      ]
    },
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

// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: [
    'standard-with-typescript',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:eslint-comments/recommended'
  ],
  overrides: [
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

module.exports = config

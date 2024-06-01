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
        '*.mjs',
        '*.cjs',
        '*.jsx'
      ],
      extends: [
        'plugin:jsdoc/recommended'
      ],
      rules: {
        // see https://typescript-eslint.io/rules/explicit-function-return-type/#configuring-in-a-mixed-jsts-codebase
        // see https://github.com/mightyiam/eslint-config-love/issues/1525
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
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
        'tsdoc/syntax': 'warn'
      }
    }
  ]
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config

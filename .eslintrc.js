// @ts-check

/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-deprecated
 */
const config = {
  extends: './index.js',
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    // https://typescript-eslint.io/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
    {
      files: ['./**/*.{js,mjs,cjs,jsx}'],
      extends: ['plugin:@typescript-eslint/disable-type-checked']
    }
  ]
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config

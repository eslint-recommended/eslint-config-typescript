// @ts-check

/** @typedef {import("eslint").Linter.BaseConfig} BaseConfig */

/** @type {BaseConfig} */
const config = {
  extends: [
    'standard-with-typescript',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended'
  ]
}

module.exports = config

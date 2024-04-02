[![npm version](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config-typescript.svg)](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config-typescript)
[![lint](https://github.com/eslint-recommended/eslint-config-typescript/actions/workflows/lint.yml/badge.svg)](https://github.com/eslint-recommended/eslint-config-typescript/actions/workflows/lint.yml)
[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)

# @eslint-recommended/eslint-config-typescript

Recommended ESLint Shareable Config for TypeScript

## Overview

`@eslint-recommended/eslint-config-typescript` is using following configurations and plugins.

- [eslint-config-love](https://www.npmjs.com/package/eslint-config-love)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-tsdoc](https://www.npmjs.com/package/eslint-plugin-tsdoc)

## Installation

npm:

```sh
npm i -D @eslint-recommended/eslint-config-typescript
```

Yarn:

```sh
yarn add -D @eslint-recommended/eslint-config-typescript
```

## Usage

Add `@eslint-recommended/eslint-config-typescript` to `extends` of your ESLint config.

```js
module.exports = {
  extends: [
    '@eslint-recommended/eslint-config-typescript'
    // add other rulesets here if needed
  ],
  rules: {
    // override/add rules settings here if needed
  }
}
```

## Badge

You can use below badge to show that your project is using ESLint Recommended.

[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)

Markdown:

```md
[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)
```

HTML:

```html
<a href="https://github.com/eslint-recommended"><img src="https://img.shields.io/badge/eslint-recommended-%234B32C3" alt="ESLint Recommended"></a>
```

## Related packages

- [@eslint-recommended/eslint-config](https://www.npmjs.com/package/@eslint-recommended/eslint-config)

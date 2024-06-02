[![npm version](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config-typescript.svg)](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config-typescript)
[![lint](https://github.com/eslint-recommended/eslint-config-typescript/actions/workflows/lint.yml/badge.svg)](https://github.com/eslint-recommended/eslint-config-typescript/actions/workflows/lint.yml)
[![ESLint Recommended](https://img.shields.io/badge/eslint-recommended-%234B32C3)](https://github.com/eslint-recommended)

# @eslint-recommended/eslint-config-typescript

Recommended ESLint Shareable Config for TypeScript

## Overview

`@eslint-recommended/eslint-config-typescript` is using following configurations and plugins.

- [eslint-config-love](https://www.npmjs.com/package/eslint-config-love) (fka [eslint-config-standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript))
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [@eslint-community/eslint-plugin-eslint-comments](https://www.npmjs.com/package/@eslint-community/eslint-plugin-eslint-comments)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-tsdoc](https://www.npmjs.com/package/eslint-plugin-tsdoc)
- [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp)

## Requirements

- Node.js v20 or later
- ESLint v8

## Installation

npm:

```sh
npm i -D @eslint-recommended/eslint-config-typescript
```

Yarn:

```sh
yarn add -D @eslint-recommended/eslint-config-typescript
```

pnpm:

```sh
pnpm add -D @eslint-recommended/eslint-config-typescript
```

## Usage

Add `@eslint-recommended/typescript` to the `extends` section of your [ESLint configuration file](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated).

JavaScript:

```javascript
module.exports = {
  extends: [
    '@eslint-recommended/typescript'
    // add other rulesets here if needed
  ]
}
```

YAML:

```yaml
extends:
  - @eslint-recommended/typescript
  # add other rulesets here if needed
```

JSON:

```jsonc
{
  "extends": [
    "@eslint-recommended/typescript"
    // add other rulesets here if needed
  ]
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

## Related Packages

- [@eslint-recommended/eslint-config](https://www.npmjs.com/package/@eslint-recommended/eslint-config)

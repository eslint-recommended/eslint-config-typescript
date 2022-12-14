[![npm version](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config-typescript.svg)](https://badge.fury.io/js/%40eslint-recommended%2Feslint-config-typescript)
[![lint](https://github.com/eslint-recommended/eslint-config-typescript/actions/workflows/lint.yml/badge.svg)](https://github.com/eslint-recommended/eslint-config-typescript/actions/workflows/lint.yml)

# @eslint-recommended/eslint-config-typescript

Recommended ESLint Shareable Config for TypeScript

## Overview

`@eslint-recommended/eslint-config-typescript` is using following configurations and plugins.

- [eslint-config-standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-tsdoc](https://www.npmjs.com/package/eslint-plugin-tsdoc)

## Peer dependencies

- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-standard-with-typescript](https://www.npmjs.com/package/eslint-config-standard-with-typescript)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-tsdoc](https://www.npmjs.com/package/eslint-plugin-tsdoc)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [typescript](https://www.npmjs.com/package/typescript)

## Installation

### npm@>=7

Install `@eslint-recommended/eslint-config-typescript`.

```sh
npm i -D @eslint-recommended/eslint-config-typescript
```

### npm@<7

Install `@eslint-recommended/eslint-config-typescript` and its peer dependencies.

```sh
npm i -D \
  @typescript-eslint/eslint-plugin \
  eslint \
  eslint-config-standard-with-typescript \
  eslint-plugin-eslint-comments \
  eslint-plugin-import \
  eslint-plugin-jsdoc \
  eslint-plugin-n \
  eslint-plugin-promise \
  eslint-plugin-tsdoc \
  eslint-plugin-unicorn \
  typescript \
  @eslint-recommended/eslint-config-typescript
```

## Usage

Add `@eslint-recommended/eslint-config-typescript` to `extends` of your ESLint config.

```json
{
  "extends": [
    "@eslint-recommended/eslint-config-typescript"
  ]
}
```

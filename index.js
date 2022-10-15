// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:unicorn/recommended',
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

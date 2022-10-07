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
        '*.ts'
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

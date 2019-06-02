module.exports = {

  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
    node: true
  },
  extends: '@nuxtjs',

  rules: { '@typescript-eslint/no-unused-vars': 'error' },
  globals: {}
}

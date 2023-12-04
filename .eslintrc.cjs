/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'semi': [2, 'always'], // 强制分号结尾
    'quotes': [2, 'single'], // 强制使用单引号
    'no-trailing-spaces': 'error', // 禁用行尾空格
  }
};

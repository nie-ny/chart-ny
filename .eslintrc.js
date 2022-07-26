module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // 这里添加一行规则把这条规则隐藏
    'import/prefer-default-export': 0,
    'comma-dangle': 0,
    semi: 0
  }
}

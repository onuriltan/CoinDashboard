module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "no-console": 2,
    "indent": ["error", 2],
    "object-curly-spacing": [2, "always"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  }
};
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  env: {
    "node": true,
    "jest/globals": true
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "promise"
  ],
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 1,
    "promise/catch-or-return": "error",
  }
};

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
    "jest"
  ],
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "no-console": 2,
    "@typescript-eslint/explicit-function-return-type": 1,
  }
};

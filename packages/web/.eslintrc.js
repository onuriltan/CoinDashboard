module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    "jest/globals": true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: ["jest", "promise"],
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended"
  ],
  rules: {
    "no-console": 2,
    "@typescript-eslint/explicit-function-return-type": 0,
  },
};

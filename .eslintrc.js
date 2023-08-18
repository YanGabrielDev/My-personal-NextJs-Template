module.exports = {
  extends: [
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  rules: {
    "no-console": "error",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "tailwindcss/classnames-order": "off",
  },
}

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
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
  },
}

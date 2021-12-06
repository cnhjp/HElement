module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-undef": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
    "import/first": "off",
    "import/newline-after-import": "off",
  },
};

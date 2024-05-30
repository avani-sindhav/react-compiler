module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  settings: { react: { version: "detect" } },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["eslint-plugin-react-compiler", "react-refresh"],
  rules: {
    "react-compiler/react-compiler": "error",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};

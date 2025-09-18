import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(["**/e2e/*.spec.*", "**/node_modules"]),
  {
    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:prettier/recommended"
      )
    ),

    plugins: {
      prettier: fixupPluginRules(prettier),
      "unused-imports": fixupPluginRules(unusedImports), // unused imports
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      "prettier/prettier": "warn",
      "default-case": "warn",

      "no-param-reassign": [
        "error",
        {
          props: false,
        },
      ],

      "implicit-arrow-linebreak": "off",
      "no-unused-vars": "off",

      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],

      "unused-imports/no-unused-imports": "error", // error on unused imports allowing for automatic clean up with lint --fix or copilot
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
    },
  },
]);

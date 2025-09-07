import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
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
      "@typescript-eslint": typescriptEslint,
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
    files: ["**/*.ts", "**/*.tsx"],

    extends: compat.extends(
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ),

    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        project: ["**/tsconfig.json"],
      },
    },

    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      "@typescript-eslint/no-misused-promises": [
        2,
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
]);

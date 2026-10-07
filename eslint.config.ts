import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts}"],
    plugins: { js },
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: { globals: globals.node },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": [
        "warn",
        {
          allow: ["info", "warn", "error"]
        }
      ]
    },
    ignores: ["node_modules/*", "dist/*"]
  }
]);

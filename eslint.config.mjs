import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },

    rules: {
      "import/no-cycle": ["error", { maxDepth: Infinity }],
      "import/no-self-import": "error",
      "import/no-duplicates": "warn",

      "max-lines": [
        "warn",
        {
          max: 1000,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

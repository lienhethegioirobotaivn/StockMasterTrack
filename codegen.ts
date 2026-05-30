import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/graphql/schema.graphql",
  documents: ["src/**/*.{ts,tsx,graphql}"],
  overwrite: true,
  generates: {
    "src/graphql/__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

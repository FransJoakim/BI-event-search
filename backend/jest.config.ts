import type { Config } from "jest";

const config: Config = {
  verbose: true,
  extensionsToTreatAsEsm: [".*.ts"], // js if you aren't using TypeScript
  preset: "ts-jest/presets/default-esm", // This may be something different for js
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules"],
  testMatch: ["**/*.test.ts"],
};

export default config;

import nextJest from "next/jest";
import type { Config } from "@jest/types";

// Create Jest config using Next.js settings
const createJestConfig = nextJest({
  // Path to your Next.js app to load next.config and .env files
  dir: "./",
});

// Custom Jest configuration
const customJestConfig: Config.InitialOptions = {
  // Setup files run after the test framework is installed
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Ignore paths for test discovery
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/src/__tests__/e2e",
    "<rootDir>/src/__tests__/_mock",
    "<rootDir>/node_modules/",
    "<rootDir>/dist",
    "<rootDir>/_src/",
  ],

  // Resolve modules relative to root
  moduleDirectories: ["node_modules", "<rootDir>/"],

  // Set the testing environment
  testEnvironment: "jest-environment-jsdom",

  // Automatically clear mock calls and instances before every test
  clearMocks: true,

  moduleNameMapper: {
    "^actions/(.*)$": "<rootDir>/actions/$1",
    "^app/(.*)$": "<rootDir>/app/$1",
    "^components/(.*)$": "<rootDir>/components/$1",
    "^config/(.*)$": "<rootDir>/config/$1",
    "^context/(.*)$": "<rootDir>/context/$1",
    "^hooks/(.*)$": "<rootDir>/hooks/$1",
    "^icons/(.*)$": "<rootDir>/icons/$1",
    "^lib/(.*)$": "<rootDir>/lib/$1",
    "^shared/(.*)$": "<rootDir>/shared/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
  },
};

// Export async config to allow Next.js support
export default createJestConfig(customJestConfig);

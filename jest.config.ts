import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageReporters: ["lcov", "text", "html"],
  coverageDirectory: "coverage",
};

export default config;

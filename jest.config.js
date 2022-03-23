module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  moduleFileExtensions: ["js", "ts", "vue"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,js,vue}"],
  coveragePathIgnorePatterns: [
    "!src/main.ts",
    "!src/router.ts",
    "!src/plugins/*",
    "!*.d.ts",
  ],
  coverageReporters: ["html", "text", "lcov"],
  setupFiles: ["<rootDir>/tests/unit/index.ts"],
};

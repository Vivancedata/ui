import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"],
      // Everything ships, so everything is measured. The previous config
      // included 6 hand-picked files out of 53 and reported "97.8%,
      // threshold 85%" -- true of those six, silent about the rest.
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/__tests__/**", "src/index.ts"],
      // Floors sit at the measured value (ratchet up as tests grow), not at
      // an aspiration the suite cannot meet. A regression below any floor
      // fails; see scripts/ratchet history for why aspirational bars rot.
      thresholds: {
        lines: 79,
        statements: 79,
        functions: 59,
        branches: 59,
      },
    },
  },
});

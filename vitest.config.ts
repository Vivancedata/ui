import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"],
      include: [
        "src/components/button.tsx",
        "src/components/card.tsx",
        "src/components/progress-circle.tsx",
        "src/components/skeleton.tsx",
        "src/components/status-badge.tsx",
        "src/lib/utils.ts",
      ],
      thresholds: {
        lines: 85,
        statements: 85,
        functions: 85,
        branches: 85,
      },
    },
  },
});

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      include: ['**/*.ts'],
      exclude: ['**/*.d.ts', '**/node_modules/**'],
      reporter: ['lcov', 'text', 'text-summary'],
      provider: 'v8',
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    environment: 'node',
    include: ['**/*.spec.ts'],
    testTimeout: 20000,
  },
})

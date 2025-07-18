import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
       globals: true,
       setupFiles: ['./tests/test-setup-custom-matchers.ts']
    },
})

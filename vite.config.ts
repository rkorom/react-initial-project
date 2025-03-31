import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
    root: '.',
    test: {
        ...configDefaults,
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
    },
});

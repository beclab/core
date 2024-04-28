import { defineConfig } from 'tsup';

export default defineConfig([
	{
		entry: ['src/index.ts'],
		outDir: 'dist',
		splitting: false,
		sourcemap: true,
		clean: false,
		format: ['cjs'],
		treeshake: true,
		target: 'es6',
		dts: true,
		platform: 'node'
	}
]);

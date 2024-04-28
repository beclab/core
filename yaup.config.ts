import { defineConfig } from 'yaup';

export default defineConfig({
	input: './src/app.ts',
	output: [
		{
			format: 'esm',
			dir: 'build/esm'
		},
		{
			format: 'cjs',
			dir: 'build/cjs'
		},
		{
			format: 'dts',
			dir: 'build/types'
		}
	]
});

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@actions' : path.resolve('./src/actions'),
					'@components' : path.resolve('./src/components'),
					'@lib' : path.resolve('./src/lib'),
					'@routes' : path.resolve('./src/routes'),
					'@stores' : path.resolve('./src/stores'),
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;

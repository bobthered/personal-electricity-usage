import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			env: {
				port: process.env.PORT | 3000,
				host: '0.0.0.0'
			}
		}),
		vite: {
			resolve: {
				alias: {
					'@actions': path.resolve('./src/actions'),
					'@components': path.resolve('./src/components'),
					'@lib': path.resolve('./src/lib'),
					'@routes': path.resolve('./src/routes'),
					'@stores': path.resolve('./src/stores'),
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

import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter(), path: { base:"/app" },
	optimizeDeps: {
    exclude: ['@lucide']
},
};

export default config;

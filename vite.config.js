import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), imagetools()],
	build: {
		assetsInlineLimit: 0 // Don't inline images
	},
	// alias: {
	// 	util: "@browsery/util"
	// }
});

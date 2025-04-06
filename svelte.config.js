import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		})
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [remarkUnwrapImages],
			rehypePlugins: [rehypeSlug]
		})
	],
	extensions: ['.svelte', '.md']
};

export default config;

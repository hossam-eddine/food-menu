import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	assetsInclude: ['**/*.gltf', '**/*.glb'],
};

export default config;

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), viteSingleFile()],
  server: {
    proxy: {
      '/api': 'https://datapprd.sciencespo.fr'
    }
  },
  build: {
    emptyOutDir: false,
    cssCodeSplit: false,
    sourcemap: false,
    assetsInlineLimit: 100000000,
		rollupOptions: {
			output: {
				manualChunks: () => "everything.js",
			},
		},
  }
})

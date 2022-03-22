import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

function _resolve(dir) {
	return resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default ({mode}) => {
	return defineConfig({
		base: mode === 'development' ? '/' : '/translate/',
		plugins: [
			vue(),
		],
		resolve: {
			alias: [
				{
					find: '@',
					replacement: _resolve('src')
				},
			]
		},
		server: {
			port: 8080,
			host: '0.0.0.0',
			proxy: {}
		}
	})
}

import react from '@vitejs/plugin-react'
import { UserConfig } from 'vite'

const sharedConfig: UserConfig = {
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		css: true,
		setupFiles: './src/test/setup.ts',
		include: ['./src/**/*.test.tsx'],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use './src/sass/variables/_color-mapped.scss' as *;
          @use './src/sass/variables/_sizes-spaces.scss' as *;
        `,
			},
		},
	},
	resolve: {
		alias: {
			'~': `${__dirname}/src`,
		},
	},
}

export default sharedConfig

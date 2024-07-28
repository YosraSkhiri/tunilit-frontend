/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  sassOptions: {
    additionalData: `
      @use './src/sass/variables/_color-mapped.scss' as *;
      @use './src/sass/variables/_sizes-spaces.scss' as *;
    `,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

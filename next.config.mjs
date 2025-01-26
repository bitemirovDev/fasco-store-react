/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  sassOptions: {
    // Молчание об устаревших API
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default nextConfig;

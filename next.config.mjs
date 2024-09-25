/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Добавляем правило для обработки SVG с помощью @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;

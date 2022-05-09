const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(
  (module.exports = {
    typescript: {
      ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    images: {
      domains: ['play.pokemonshowdown.com'],
      formats: ['image/webp'],
    },
  })
);

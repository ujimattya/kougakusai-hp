module.exports = {
  webpack: (config, { isServer }) => {
  if (isServer) {
    require('./src/sitemap.js')
  }
  return config
  }
};
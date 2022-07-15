const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  plugins: [].concat(!isDevelopment && ['postcss-preset-env']).filter(Boolean)
};
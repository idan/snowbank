module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.css', './src/**/*.html'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}

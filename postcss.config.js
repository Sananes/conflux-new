module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('precss')(),
    require('postcss-easy-import')(),
    require('postcss-custom-media')(),
    require('postcss-simple-vars'),
    require('postcss-cssnext')(),
    require('lost')()
  ]
};

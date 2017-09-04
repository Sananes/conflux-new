module.exports = {
  parser: 'sugarss',
  plugins: [
    require('precss')()
    require('postcss-easy-import')(),
    require('postcss-simple-vars'),
    require('postcss-cssnext')(),
    require('lost')()
  ]
};

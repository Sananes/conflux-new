module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('precss')(),
    require('postcss-easy-import')(),
    require('postcss-simple-vars'),
    require('postcss-cssnext')(),
    require('postcss-assets')({
      cachebuster: true,
      basePath: 'src/',
      baseUrl: '/src',
      loadPaths: ['img/'],
      relative: false
    }),
    require('lost')()
  ]
};

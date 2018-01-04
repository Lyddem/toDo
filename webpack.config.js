const path = require('path');

const DIST = path.join(__dirname, 'dist');
const SRC = path.join(__dirname, 'src');

module.exports = {
   devtool: 'source-map',
   entry: `${SRC}/index.jsx`,

   output: {
      path : DIST,
      filename: 'bundle.js',
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react', 'es2015']
            }
         },
         {
            test: /\.scss/,
            exclude: /node_modules/,
            loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'
         },
         {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
         },
      ]
   },
   resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
}

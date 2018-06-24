module.exports = {
  // Our base javascript file which will be bundled by webpack
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './app/index.tsx',
  ],

  module: {
    // Handling languages webpack doesn't understand by default
    rules: [
      // Allow CSS imports in javascript files
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      // Allow file imports
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },

      // Allow fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },

      // React
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: "babel-loader",
      //   options: {
      //     presets: ['env'],
      //     plugins: ['react-hot-loader/babel']
      //   }
      // },

       // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
       {
         test: /\.tsx?$/,
         loader: "awesome-typescript-loader"
       },

       // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
       {
         test: /\.js$/,
         loader: "source-map-loader"
       }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  }
};

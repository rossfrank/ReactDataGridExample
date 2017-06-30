var config = {
   entry: './main.js',

   output: {
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080,
      stats: "verbose"
   },
   //target: 'node',
   module: {
     rules: [{
            test: /\.css$/,
            loaders: [ 'style-loader', 'css-loader' ]
        },
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {
              presets: ['es2015', 'react']
           }
        }]
   }
}

module.exports = config;

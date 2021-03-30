const path = require('path'); // chamando do nodejs para manipular pastas

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // o passo inicial pegará o arquivo index.js
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // esta regra signifca que todos arquivo .js irá ser compilado
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/, // esta regra signifca que todos arquivo .css irá ser compilado
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, // esta regra signifca que todos arquivos de img irá ser compilado
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};

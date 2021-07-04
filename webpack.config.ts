import path from 'path';
import webpack from 'webpack';
// import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: webpack.Configuration = {
  name: 'payments',
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@ts': path.resolve(__dirname, 'src/ts'),
    },
  },
  entry: {
    app: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 chrome versions'] },
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // plugins: [
  // new ForkTsCheckerWebpackPlugin({
  //     async: false,
  // }),
  // new webpack.EnvironmentPlugin({ NODE_ENV})
  // ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/public/',
  },
  devServer: {
    index: './public/index.html',
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 5050,
    publicPath: '/dist/',
  },
};

export default config;
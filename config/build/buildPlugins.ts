import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types/config';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  /*
   Дорогой читатель, здесь мы собираем основные плагины, которые нужны для разработки
   Вызываем функцию в buildWebPackConfig в ключе plugins
   */
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin(
        {template: paths.html}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
  
}
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types/config';

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  /*
   * Дорогой читатель, здесь мы собираем основные плагины, которые нужны для разработки
   * Вызываем функцию в buildWebPackConfig в ключе plugins
   */
  
  /*
  * ProgressPlugin - показывать процент прогресса при билде
  * HtmlWebpackPlugin - нужен, чтобы вебпак в билдовый index.html подключил наш бандл
  * DefinePlugin - прокидываем переменные или данные из вебпака в наш проект, здесь нам нужен isDev для i18next
  * */
  
  
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin(
        {template: paths.html}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev)
      })
  ];
  
}
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

//* Пакуем основные плагины, которые нужны для разработки и вызываем функцию в buildWebPackConfig.ts в ключе plugins

/*
 ? ProgressPlugin - показывать процент прогресса при билде, сборке
 * HtmlWebpackPlugin - нужен, чтобы вебпак в билдовый index.html подключил наш bundle.js
 ? DefinePlugin - прокидываем переменные или данные из вебпака в наш проект, здесь нам нужен isDev для i18next

 ! Плагины ниже работают только в dev режиме (флаг isDev)
 * HotModuleReplacementPlugin - позволяет менять данные в приложении или стили без перезагрузки проекта (страницы)
 ? ReactRefreshPlugin  - предыдущий плагин плохо работает с реакт-компонентами, поэтому в довесок ставим и эту хрень
*/

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin(
      { template: paths.html },
    ),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
}

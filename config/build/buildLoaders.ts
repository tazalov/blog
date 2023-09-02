import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  /*
   * Дорогой читатель, здесь мы собираем loaders
   * Вызываем функцию в buildWebPackConfig в ключе module.rules
   */
  
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };
  
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  
  //* Если не используем TS, нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  
  //! Лоадер настроен только на scss и sass, CSS файлы не будут работать
  const stylesLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      //! MiniCssExtractPlugin нужен для того, чтобы наши стили попадали в отдельный css файл, а не оставались в js файле
      //* нужен только в production
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            //* Генерируем сложные названия классов только для файлов модульных стилей
            auto: ((resourcePath: string) => Boolean(
                resourcePath.includes('.module'))),
            //* Включаем эту генерацию только в production, в development
            localIdentName: options.isDev
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
  
  //! Порядок loaders в массиве важен!
  return [svgLoader, fileLoader, typescriptLoader, stylesLoaders];
}
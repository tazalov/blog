import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';

//* Тутова мы собираем loaders и вызываем функцию в buildWebPackConfig.ts в ключе module.rules

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|mjs|cjs|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }],
        ],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true,
            }]],
      },
    },
  };

  const svgLoader = buildSVGLoader();

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

  //* Лоадер настроен только на scss и sass, CSS файлы не будут работать
  const stylesLoaders = buildStyleLoader(options.isDev);

  //* Порядок loaders в массиве важен!
  return [svgLoader, fileLoader, babelLoader, typescriptLoader, stylesLoaders];
}

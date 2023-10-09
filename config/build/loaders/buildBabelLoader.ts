import { BuildOptions } from '../types/config';

export const buildBabelLoader = (options: BuildOptions) => ({
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
          },
        ],
        options.isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});

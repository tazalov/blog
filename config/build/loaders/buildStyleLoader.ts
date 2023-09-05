import MiniCssExtractPlugin from 'mini-css-extract-plugin';

//* Выносим создание лоадера в отдельную функцию, т.к. он нам нужен еще и для сторибука

export const buildStyleLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    //! MiniCssExtractPlugin нужен для того, чтобы наши стили попадали в отдельный css файл, а не оставались в js файле
    //* нужен только в production
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          //* Генерируем сложные названия классов только для файлов модульных стилей
          auto: ((resourcePath: string) => Boolean(
            resourcePath.includes('.module'),
          )),
          //* Включаем эту генерацию только в production, в development
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});

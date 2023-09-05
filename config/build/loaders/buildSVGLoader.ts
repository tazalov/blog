//* Выносим создание лоадера в отдельную функцию, т.к. он нам нужен еще и для сторибука

export const buildSVGLoader = () => ({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
});

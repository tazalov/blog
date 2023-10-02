/*
 * Ты в шоке? Я тоже, что это за херня вообще? Второй конфиг вебпака!
 * Он нужен чисто для сторибука, у него под капотом есть уже свой настроенный,
 * но нам оно ни к чему, здесь мы пилим свой!
 */

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildStyleLoader } from '../build/loaders/buildStyleLoader';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

export default ({ config } : {config: webpack.Configuration}) => {
  const paths: BuildPath = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.tsx', '.ts', '.js');
  config.module.rules.push(buildStyleLoader(true));
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push(buildSVGLoader());
  config.plugins.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
  }));
  // eslint-disable-next-line no-param-reassign
  config.resolve.alias = { '@': paths.src };
  return config;
};

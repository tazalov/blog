import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildEnv, BuildPath} from './config/build/types/config';

/*
 Дорогой читатель, здесь мы собираем наш конфиг вебпака
 Вызов функции в webpack.config.ts
 Вызываем функцию в buildWebPackConfig в ключе plugins
 */
export default (env: BuildEnv) => {
  
  //Формируем пути с помощью либы path
  /*
  entry - путь - точка входа вебпака
  build - путь - папка, куда будет билдится проект, команда yarn build:prod
  html - путь до основного файла при разработке
  */
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };
  
  
  /*
   mode - собственно development или production
   */
  const mode = env.mode || 'development';
  /*
   port - порт localhost
   */
  const port = env.port || 3000;
  /*
   isDev - флаг, который нам нужен, чтобы отключать некоторые вещи
   из конфига (см. buildWebpackConfig) при production
   */
  const isDev = mode === 'development';
  
  //Формируем наш конфиг и возвращаем его
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
  
  return config;
}


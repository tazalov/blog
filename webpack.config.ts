import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

//! в babel.config.json хранятся пресеты (и плагины), чтобы он знал что и во что транспилировать"

//* Здесь мы собираем наш конфиг вебпака
export default (env: BuildEnv): webpack.Configuration => {
  /*
   ? Формируем пути с помощью либы path
   * entry - путь - точка входа вебпака
   * build - путь - папка, куда будет билдится проект
   * html - путь до основного файла при разработке
   * src - путь до папки src
   */
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  /*
  * mode - собственно development или production
  */
  const mode = env.mode || 'development';
  /*
  * port - порт localhost
  */
  const port = env.port || 3000;
  /*
  * isDev - флаг, который нам нужен, чтобы отключать некоторые вещи из конфига (см. buildWebpackConfig) при production
  */
  const isDev = mode === 'development';

  const apiUrl = env.apiUrl || 'http://localhost:8000/';

  // ? Формируем наш конфиг и возвращаем его
  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project: 'frontend',
  });
};

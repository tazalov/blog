import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

/*
* Здеся мы настраиваем "разрешения" для разработчика
? extensions - разрешение не указывать расширение при импорте
* preferAbsolute - разрешение на использование абсолютных путей
? modules - говорим, где искать наши модули
* mainFiles - название нашего главного файла
? alias - подменяет нам пути при импорте, чтобы не было ../../../src, мы любой подобный путь приводим к @/
! из за такого алиаса введено много доп. настроек в линтерах и конфиге typescript
! если захочешь удалить, придется покопаться и там
*/

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': options.paths.src,
    },
  };
}
